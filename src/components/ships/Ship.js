import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Ship = (props) => {

	if (!props.ship) {
		return "Loading..."
	}

	const url = "/ships/" + props.ship.id

	return (
		<Fragment>
			<Link to={url} className="name">{props.ship.name}</Link>
		</Fragment>
	)
}

export default Ship;
