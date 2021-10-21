import React, { useState, useContext } from 'react'
import ContactContext from '../../context/contactContext'

const Form = () => {
	// Context
	const contactContext = useContext(ContactContext)

	// State
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	})
	const { name, email, phone, type } = contact

	const onChange = (e) =>
		setContact({ ...contact, [e.target.name]: e.target.value })

	// Form Submit
	const handleSubmit = (e) => {
		e.preventDefault()
		contactContext.addContact(contact)
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal',
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2 className="text-primary">Add Contact</h2>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={name}
				onChange={onChange}
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={email}
				onChange={onChange}
			/>
			<input
				type="text"
				name="phone"
				placeholder="Phone"
				value={phone}
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<input
				type="radio"
				name="type"
				value="personal"
				onChange={onChange}
				checked={type === 'personal'}
			/>{' '}
			Personal{' '}
			<input
				type="radio"
				name="type"
				value="professional"
				onChange={onChange}
				checked={type === 'professional'}
			/>{' '}
			Professional{' '}
			<div>
				<button type="submit" className="btn btn-block btn-primary">
					Add Contact
				</button>
			</div>
		</form>
	)
}

export default Form
