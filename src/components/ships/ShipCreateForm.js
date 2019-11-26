import React, { Component } from 'react';

export class ShipCreateForm  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "" 
        }
        this.handleName = this.handleName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleName(event) {
        this.setState({ name: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const newShip = {
            name: this.state.name
        }
        this.props.onFormSubmit(newShip);
    }
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Ship Name" onChange={this.handleName} value={this.state.name} />

                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default ShipCreateForm;
