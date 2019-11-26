import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Raid = (props) => {

    if(!props.raid) {
      return "Loading.."
    }

    const url = '/raids/' + props.raid.id
  
  return (
    <Fragment>
      <link to={url} className="location">
        {props.raid.location}
      </link>
    </Fragment>
    // <div className="component">
    //     <p className="name">
    //       {props.raid.location}
    //     </p>
    //   <p>Loot: {props.raid.loot}</p>
    // </div>
  )
}

export default Raid;
