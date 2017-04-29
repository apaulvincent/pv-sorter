import '../css/style.scss'

import { Component } from 'react'
import { Home } from './Home'
import  { Single } from './Single'
import  Header from './Header'
import  Footer from './Footer'

import Cars from '../cars.json'

export class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			'cars' : Cars.cars
		}
	}

	render(){
		
		return(
			<div className="app">
				<Header/>
				<div className="container">
				<div className="row">
					{ ( this.props.params.id == undefined ) ?
						<Home cars={ this.state.cars } path={this.props.location.pathname} params={this.props.params} /> :
						<Single  car={ this.state.cars.filter(c => c.id == this.props.params.id )} />
					}
				</div>
				</div>
				<Footer/>
			</div>
		)
		
	}

}