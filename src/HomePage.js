import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class HomePage extends Component{
	render(){
		return(
			<div>
				<Container fluid>
					<Header as='h2'>Home Page</Header>
					<p>
					Welcome! This is my personal website to display all my accomplishments and info to the
					general populace.
					</p>
					<p>
					Filler stuff here
					</p>
					<p>
					Extra break
					</p>
				</Container>
			</div>
		);
	}
}

export default HomePage;