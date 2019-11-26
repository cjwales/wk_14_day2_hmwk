import React, { Component } from 'react';
import Request from '../../helpers/request';

class PirateCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ships: [],
            firstName: "",
            lastName: "",
            age: 0
        }
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const request = new Request();
        request.get('/api/ships')
            .then((data) => {
                this.setState({ ships: data._embedded.ships })
            })
    }

    handleFirstName(event) {
        this.setState({ firstName: event.target.value })
    }

    handleLastName(event) {
        this.setState({ lastName: event.target.value })
    }

    handleAge(event) {
        this.setState({ age: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const newPirate = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            ship: event.target.ship.value
        }
        this.props.onFormSubmit(newPirate);
    }


    render() {
        if (this.state.ships.length === 0) {
            return <p>Loading...</p>
        }
        const shipOptions = this.state.ships.map((ship, index) => {
            return <option key={index} value={ship._links.self.href}>{ship.name}</option>
        })

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="First Name" name="firstName" onChange={this.handleFirstName} value={this.state.firstName} />
                    <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleLastName} value={this.state.lastName} />
                    <input type="number" placeholder="Age" name="age" onChange={this.handleAge} value={this.state.age} />
                    <select name="ship">
                        {shipOptions}
                    </select>

                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}
export default PirateCreateForm;