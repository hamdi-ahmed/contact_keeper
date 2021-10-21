import React, { useContext } from 'react'
import ContactContext from '../../context/contactContext'
import PropTypes from 'prop-types'

const ContactItem = ({ contact }) => {
	// Context
	const contactContext = useContext(ContactContext)
	const { deleteContact } = contactContext
	const { name, phone, email, type, id } = contact

	const onDelete = () => {
		deleteContact(id)
	}

	return (
		<div className="card bg-light">
			<h3 className="text-primary">
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
				{email && (
					<li>
						<i className="fa-solid fa-envelope"></i> {email}
					</li>
				)}
				{phone && (
					<li>
						<i className="fa-solid fa-phone"></i> {phone}
					</li>
				)}
			</ul>
			<p>
				<button className="btn btn-sm btn-dark my-1">Edit</button>
				<button onClick={onDelete} className="btn btn-sm btn-danger my-1">
					Delete
				</button>
			</p>
		</div>
	)
}

ContactItem.prototype = {
	contact: PropTypes.array.isRequired,
}

export default ContactItem
