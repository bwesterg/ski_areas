import React, { Component } from 'react';


const initialState = {
    name: "",
    description: "",
    logo: "",
    vertical: 0,
    epic: false,
    ikon: false,
    other: false
}

// needs to be a class component, rather than functional,
// because forms are stateful if they are controlled
export default class AreaForm extends Component{

    state = initialState

    componentDidMount(){
        const {area} = this.props
        if(this.props.area){
            const {id, name, description, logo, vertical, epic, ikon, other} = area
            this.setState({
                id,
                name,
                description,
                logo, 
                vertical,
                epic,
                ikon,
                other
            }) 
        }
    }

    handleChange = (event) => {
        
        let {name, value, checked} = event.target
        // ^^^destructuring 'event.target'^^^
        
        value = (name === "epic") || (name === "ikon") || (name === "other") ? checked : value
        
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitAction(this.state)
        if(this.props.handleToggle){
            this.props.handleToggle()
        }
    }

    showCloseButton = () => {
        return this.props.area
        ? (
            <button className="close-button" onClick={this.props.handleToggle}>CLOSE WITHOUT SAVING</button>
        )
        : null
    }

    render(){
        const {name, description, logo, vertical, epic, ikon, other} = this.state
        return (
            <form className="area-form" onSubmit={this.handleSubmit}>
                {this.props.area ?  <h2>Edit Area</h2> : <h2>Create a New Area</h2>}
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange}/>
                <label>Description</label>
                <input type="text" name="description" value={description} onChange={this.handleChange}/>
                <label>Logo</label>
                <input type="text" name="logo" value={logo} onChange={this.handleChange}/>
                <label>Vertical</label>
                <input type="number" name="vertical" value={vertical} onChange={this.handleChange}/>
                <label className="pass-group-label">Pass Group</label>
                <div className="pass-input">
                    <label>Epic</label>
                    <input type="checkbox" name="epic" checked={epic} onChange={this.handleChange}/>
                    <label>Ikon</label>
                    <input type="checkbox" name="ikon" checked={ikon} onChange={this.handleChange}/>
                    <label>other</label>
                    <input type="checkbox" name="other" checked={other} onChange={this.handleChange}/>
                </div>
                <input type="submit" />
                {this.showCloseButton()}
            </form>
        )
    }
};

