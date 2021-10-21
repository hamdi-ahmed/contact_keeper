import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contactContext'

const Form = () => {
	// Context
	const contactContext = useContext(ContactContext)
	const { current, addContact, updateContact, clearCurrent } = contactContext
	//const { name, email, phone, type } = current

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

	console.log(contact)

	// When Page Loaded
	useEffect(() => {
		if (current !== null) {
			setContact(current)
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			})
		}
	}, [contactContext, current])

	// Clear the state
	const clearAll = () => {
		clearCurrent()
	}

	// Form Submit
	const handleSubmit = (e) => {
		e.preventDefault()
		if (current === null) {
			addContact(contact)
		} else {
			updateContact(contact)
		}
		clearAll()
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2 className="text-primary">
				{current === null ? 'Add Contact' : 'Update Contact'}
			</h2>
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
					{current === null ? 'Add Contact' : 'Update Contact'}
				</button>
			</div>
			{current && (
				<div>
					<button onClick={clearAll} className="btn btn-block btn-light">
						Clear
					</button>
				</div>
			)}
		</form>
	)
}

export default Form
