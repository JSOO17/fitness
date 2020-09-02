import React from 'react';
import Card from './Card'

function ExerciseLst(props) {
	return (
		<div>
		{
 			props.exercise.map((exercise) =>{
 				return (
 					
 						<Card
 							key={exercise.id}
							title={exercise.title}
							image={exercise.img}
							description={exercise.description}
							leftColor={exercise.leftColor}
							rightColor={exercise.rightColor}
						/>
 					
 				)
 			})
 		}
	</div>
	)
}

export default ExerciseLst;