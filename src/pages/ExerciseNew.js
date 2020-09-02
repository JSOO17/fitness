import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'


class ExerciseNew extends React.Component
{	
	state = {
		form:{
			title: '', 
			image: '', 
			description: '', 
			leftColor: '', 
			rightColor: ''
		}
	}

	handleChange = e => {
        this.setState({
        	form: {
        		...this.state.form,
            	[e.target.name]: e.target.value
        	}
        })
    }

	render(){
		return (
			<div class="row">
		      	<div class="col-sm">
		        	<Card
						{ ...this.state.form}
					/>
		   		</div>
		      	<div class="col-sm">
		        <ExerciseForm
					onChange={this.handleChange}
					form={this.state.form}
				/>
		      	</div>
		    </div>
			
        )}
}

export default ExerciseNew