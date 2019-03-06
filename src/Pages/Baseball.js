import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class Baseball extends Component{
	render(){
		return(
			<div>
				<Container fluid>
					<Header as='h2'>Baseball Info</Header>
					<p>
					Baseball
					</p>
					<p>
					Also another thing here just to see how the fluid breaks another
					</p>
				</Container>
			</div>
		);
	}
}

export default Baseball;