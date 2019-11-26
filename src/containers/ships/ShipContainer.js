import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShipCreateForm from '../../components/ships/ShipCreateForm';
import ShipDetail from '../../components/ships/ShipDetail';
import ShipList from '../../components/ships/ShipList';
import Request from '../../helpers/request';

export class ShipContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ships: []
        }
        this.findShipById = this.findShipById.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    componentDidMount() {
        const request = new Request();
        request.get('/api/ships')
            .then((data) => {
                this.setState({ ships: data._embedded.ships })
            })
    }

    findShipById(id) {
        return this.state.ships.find((ship) => {
            return ship.id === parseInt(id);
        })
    }

    handleDelete(id) {
        const request = new Request();
        const url = '/api/ships' + id;
        request.delete(url)
        .then( () => {
            window.location = '/ships'
        })
    }

    handlePost(ship) {
        const request = new Request();
        request.post('/api/ships', ship)
        .then( () => {
            window.location='/ships'
        })
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/ships/new" render={ () => {
                            return <ShipCreateForm onFormSubmit={this.handlePost} />
                        }} />
                        <Route exact path="/ships/:id" render={(props) => {
                            const id = props.match.params.id;
                            const ship = this.findShipById(id);
                            return <ShipDetail ship={ship} onDelete={this.handleDelete}/>
                        }} />
                        <Route render={(props) => {
                            return <ShipList ships={this.state.ships} />
                        }} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default ShipContainer

