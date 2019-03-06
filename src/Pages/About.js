import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class About extends Component{
	render(){
		return(
			<div>
				<Container fluid>
					<Header as='h2'>About Me</Header>
					<p>
					something goes here, i just really don't feel like typing out a crap
					load so I am just going to make a run on sentence that I can type for 
					a minute or so and have it drag out a few lines on sublime text for the
					sake of seeing it on the webpage.
					</p>
					<p>
					Also another thing here just to see how the fluid breaks another
					</p>
				</Container>
			</div>
		);
	}
}

export default About;