import { Component } from 'react'

import $ from 'jquery';

import '../js/vendors/equal-heights'
import '../js/vendors/slick'

import Pin from 'react-icons/lib/fa/map-marker'

export class Single extends Component {

	constructor(props){
		super(props)
	}

	componentWillMount() {

		$(function(){

			$('.slider').slick({
				dots: false,
				arrows: true,
				infinite: false,
				fade: false,
				cssEase: 'linear',
				autoplay: false,
				slidesToShow: 8,
				slidesToScroll: 1,
				responsive: [
				{
				breakpoint: 991,
				settings: {
								slidesToShow: 6,
							}
				},
				{
				breakpoint: 767,
				settings: {
								slidesToShow: 3,
							}
				},
				{
				breakpoint: 600,
				settings: {
								slidesToShow: 2,
							}
				}

				]
			});

			// Equal heights
			$('.grid-equal-height').pveqh();

		});

	}


	render(){

	const {car} = this.props

	const galSlide = []
	for (var i = 0; i < 14; i++) {
		galSlide.push({i});	
	}

	return(

		<div className="col-sm-12 col-md-12">
		<div className="detail-wrap">

				<h3 className="title">{car[0].name}</h3>
				<div className="row grid-equal-height">
					<div className="col-sm-12 col-md-8">
						<div className="detail-img">
							<div className="img-wrap">
								<img src={car[0].main_picture} alt=""/>
							</div>
							<div className="slider">
								{
									galSlide.map((s, i) => <div key={i}><div className="slide-inner">{i}</div></div>)
								}
							</div>
						</div>
					</div>

					<div className="col-sm-12 col-md-4">
						<div className="info-wrap">
							<h4 className="price">{car[0].price}</h4>
							<p className="location"><i className="icon"><Pin/></i> {car[0].location}</p>
							<p>{car[0].description}</p>
						</div>
					</div>
				</div>

		</div>
		</div>

	)}

}
