import React from 'react'
import PropTypes from 'prop-types'

const ContactItem = ({ contact }) => {
	const { name, phone, email, type } = contact
	return (
		<div className="card bg-light">
			<h3>
				{name}{' '}
				<span
					style={{ float: 'right' }}
					className={`badge ${
						type === 'personal' ? 'badge-primary' : 'badge-success'
					}`}
				>
					{type}
				</span>
			</h3>
			<ul>
				{email && <li>{email}</li>}
				{phone && <li>{phone}</li>}
			</ul>
			<p>
				<button className="btn btn-sm btn-dark my-1">Edit</button>
				<button className="btn btn-sm btn-danger my-1">Delete</button>
			</p>
		</div>
	)
}

ContactItem.prototype = {
	contact: PropTypes.array.isRequired,
}

export default ContactItem
