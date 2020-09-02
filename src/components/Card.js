import React from 'react'
import Image from '../images/logo512.png'
import circles from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component
{

	render()
	{
		const {title, image, description, leftColor, rightColor} = this.props;
		return (
			<div className="card mx-auto Fitness-Card" style={{
				    backgroundImage: `url(${circles}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
			}}>
			
				<div className="card-body my-3">
					<div className="row center">
						<div className="col-3"> 
							<img src={image} width={60} height={100} className="float-right"/>
						</div>
						<div className="col-9 Fitness-Card-Info">
							<h2> {title} </h2>
							<p> {description} </p>
						</div>
					</div>
				</div>
			</div>
			
		)
	}
}

export default Card