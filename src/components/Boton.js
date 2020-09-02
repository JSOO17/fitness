import React from 'react'
import { Link } from 'react-router-dom'
//import './styles/Boton.css'

const Boton = (props) => (
	<Link to="/exercise/new" >
		<img src={props.image} className="Fitness-Add" />
	</Link>
)

//function Boton(props) {
//	return (
		//<div>
//			<Link to="/exercise/new" >
//				<img src={props.image} className="Fitness-Add" />
//			</Link>
		//</div>
//		)
//}

export default Boton;