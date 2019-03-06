import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import CustomHeader from './Components/CustomHeader';
import Home from './Pages/HomePage';
import About from './Pages/About';
import Baseball from './Pages/Baseball';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Router>
            <div>
              <CustomHeader/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/baseball' component={Baseball}/>
            </div>
          </Router>
        </Container>
      </div>
    );
  }
}
export default App;