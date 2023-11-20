import React, { Component } from 'react';
import './App.css';
import AreaContainer from './components/AreaContainer';
import AreaForm from './components/AreaForm';
import { patchArea, postArea, deleteArea } from './helpers';
const areasUrl = "http://localhost:3000/areas/";


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
      //not moving this fetch to helpers b/c it is setting state
  }

  // can only change the state of App.js within App.js. Therefore, need
  // to create a function within App.js to handle state change from form
  addArea = (newArea) => {
    this.setState({
      areas: [...this.state.areas, newArea]
    })

    postArea(newArea)
  }

  updateArea = (updatedArea) => {
    let areas = this.state.areas.map(area => area.id === updatedArea.id ? updatedArea : area)
    
    this.setState({ areas })

    patchArea(updatedArea)
  }

  deleteArea = (id) => {
    let filtered = this.state.areas.filter(area => area.id !== id)
    this.setState({
      areas: filtered
    })

    deleteArea(id)
  }

  render(){
    return (
      <div className="App">
        <h1>Ski Areas App</h1>
        {/* <AreaForm addArea={this.addArea}/> */}
        <AreaForm submitAction={this.addArea}/>

        {/* don't invoke function here^^ because it isn't being called here, 
        but instead in AreaForm.js */}
        <AreaContainer updateArea={this.updateArea} deleteArea={this.deleteArea} areas={this.state.areas} />
      </div>
    );
  }
}

export default App;
