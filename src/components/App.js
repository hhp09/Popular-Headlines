import React, { Component } from 'react';
import Header from './Header';
import BrowseSelect from './BrowseSelect';
//import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container text-center">
          <h4>Select any News Source</h4>
          <BrowseSelect default = "reuters" />
        </div>
      </div>
    );
  }
}

export default App;
