import React from 'react'
import Ship from './Ship';

const ShipDetail = (props) => {
    if (!props.ship) {
        return "Loading...."
    }
    const pirates = props.ship.pirates.map((pirate, index) => {
        return <li key={index}>{pirate.firstName}</li>
    })

    const handleDelete = () => {
        props.onDelete(props.ship.id)
    }

    return (
        <div className="component">
            <Ship ship={props.ship} />
            <p>Pirates:</p>
            <ul>
                {pirates}
            </ul>
            <button onClick={handleDelete}>Delete{props.ship.name}</button>
        </div>
    )
}

export default ShipDetail;