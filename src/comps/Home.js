import { Component, PropTypes } from 'react'
import CarItem from './CarItem'
import {Link} from 'react-router'

export class Home extends Component {

	constructor(props){
		super(props)
		this.state = {
			"cars": [],
			"pageCount" : 0,
			"sortedCars" : 0
		}

		this.filterData = this.filterData.bind(this)
		this.setPage = this.setPage.bind(this)
	}

	componentWillMount() {
	
		// if unknown page go to root
		if( isNaN(parseInt(this.props.params.num)) ) {
			this.context.router.push('/')
		}

		// if root page set state with props
		if( this.props.path == '/' && this.props.params.num != undefined ) {
			this.setState({
				"cars": this.props.cars,
			});
		} else {
			this.setPage(this.props.cars)
		}

	}

	componentWillReceiveProps(nextProps) {
		
		this.props.params.num = nextProps.params.num

		if(this.refs.listFilter.value != ''){
			this.filterData()
		} else {
			this.setPage(nextProps.cars)
		}

	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('should update')
	// 	return this.props.path != nextProps.path 
	// }

	componentWillUpdate(nextProps, nextState){

		// if paging not in range go back to root
		if( parseInt(this.props.params.num) > nextState.pageCount ) {
			this.context.router.push('/')
		}

	}

	setPage(data){

		const divisor = 10;
		let pageCount = 0;
		let pageNum = 0; 

		if(data.length > divisor) {
			pageCount = (data.length % divisor ) == 0 ? 
						Math.floor(data.length / divisor ) : 
						Math.floor((data.length / divisor) + 1);
		}

		if( this.props.params.num != undefined ) {
			pageNum = this.props.params.num - 1;
		}
		
		const start = (pageNum * divisor);
		const end = (start + divisor);
		
		const itemPerPage = data.slice(start , end);


		this.setState({
			"cars": itemPerPage,
			"pageCount" : pageCount,
			"sortedCars" : data.length
		});
	}

	filterData(){

		const filtered = this.props.cars.filter((c, i) => {
			return (c.name.toLowerCase().indexOf(this.refs.listFilter.value.toLowerCase()) > -1)
		})

		// reset to root if not
		if( this.props.path != '/' ) {
			this.context.router.push('/')
		}
		
		this.setPage(filtered)

	}

	render(){

		const {cars, sortedCars} = this.state
		const pagingUrl = [];

		const itemFrom = (this.props.params.num == undefined) ? 1 : ((parseInt(this.props.params.num) - 1) * 10) + 1;
		const itemTo = (this.props.params.num == undefined) ? cars.length :   ((parseInt(this.props.params.num) - 1) * 10) + cars.length;

		for (var i = 0; i < this.state.pageCount; i++) {
			pagingUrl.push(`/page/${i+1}`);	
		}

		return(
			<div className="col-sm-12 col-md-8 col-md-push-2">


				<div className="list-count">
					<span>{`Displaying ${(sortedCars == 0) ? 0 :  (itemFrom + ' - ' + itemTo + ' of ' + sortedCars) }
							${ (sortedCars == 1) ? 'Result' : 'Results' }`}</span>
				</div>

				<div className="list-filter">
					<input ref="listFilter" placeholder="Search by name" onChange={this.filterData} type="text"/>
				</div>

				<div className="clear"></div>

				<div className="car-listing">
					{ cars.map((car, i) => {
						return <CarItem car={car} key={i} />
					}) }
				</div>
				
				<div className="pagination">
				<ul>
				{	
					pagingUrl.map((p, i) => {
						(i == 0 ) ? p = '/' : null;
						return  <li key={i} className={ this.props.path == p ? 'active' : null }><Link to={p}>{i+1}</Link></li>
					})
				}
				</ul>
				</div>

			</div>
		)
	}
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
};

