import React, { Component } from 'react';
import './App.css';
import AreaContainer from './components/AreaContainer';
const areasUrl = "http://localhost:3000/areas";

//using class component b/c it will be using state
class App extends Component {

  state = {
    areas: []
  }

  // componentDidMount is a lifecycle method which only runs one time,
  // unless the component is unmounted from the DOM and remounted (e.g., refresh)
  // putting fetch in componentDidMount makes sense b/c it will only run once,
  // and is less data intensive.  If it was run in something else such as
  // componentDidUpdate, fetch would run every time there was a state change.
  componentDidMount(){
    this.getAreas()
  }   

  getAreas = () => {
    fetch(areasUrl)
      .then(response => response.json())
      .then(areas => this.setState({areas}))
  }

  render(){
    return (
      <div className="App">
        <h1>Ski Areas App</h1>
        <AreaContainer areas={this.state.areas} />
      </div>
    );
  }
}

export default App;
