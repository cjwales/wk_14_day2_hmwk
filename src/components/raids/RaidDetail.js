import React from 'react'
import Raid from './Raid';

const RaidDetail = (props) => {
    if (!props.Raid) {
        return "Loading..."
    }
    const raids = props.raid.pirates.map((pirate, index) => {
        return <li key={index}>{pirate.firstName}</li>
    })
    
    const handleDelete = () => {
        props.onDelete(props.raid.id)
    }

    return (
        <div className="component">
            <Raid raid={props.raid} />
            <p>Raids:</p>
            <ul>
                {raids}
            </ul>
            <button onClick={handleDelete}>Delete {props.raid.location}</button>
        </div>
    )
}

export default RaidDetail
