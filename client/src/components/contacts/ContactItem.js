import React, { useContext } from 'react'
import ContactContext from '../../context/contactContext'
import PropTypes from 'prop-types'
const ContactItem = ({ contact }) => {
	// Context
	const contactContext = useContext(ContactContext)
	const { deleteContact, setCurrent, clearCurrent } = contactContext
	const { id, name, phone, email, type } = contact

	// Delete Contact
	const onDelete = () => {
		deleteContact(id)
		clearCurrent()
	}

	// Edit
	const onEdit = () => {
		setCurrent(contact)
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
					{type.charAt(0).toUpperCase() + type.slice(1)}
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
				<button onClick={onEdit} className="btn btn-sm btn-dark my-1">
					Edit
				</button>
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
