import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ContactContext from './contactContext'
import { ContactReducer } from './contactReducer'
import axios from 'axios'
import {
	ADD_CONTACT,
	CLEAR_CURRENT,
	CLEAR_FILTER,
	DELETE_CONTACT,
	FILTER_CONTACTS,
	UPDATE_CONTACT,
	SET_CURRENT,
} from './types'

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Jon Snow',
				phone: '111-111-111',
				type: 'professional',
				email: 'a@example.com',
			},
			{
				id: 2,
				name: 'Aria Stark',
				phone: '222-222-222',
				type: 'personal',
				email: 'a@example.com',
			},
			{
				id: 3,
				name: 'Emily Clark',
				phone: '333-333-333',
				type: 'professional',
				email: 'a@example.com',
			},
		],
	}
	const [state, dispatch] = useReducer(ContactReducer, initialState)

	// Add Contact
	const addContact = (contact) => {
		contact.id = uuidv4()
		dispatch({
			type: ADD_CONTACT,
			payload: contact,
		})
	}

	// Delete Contact
	const deleteContact = (id) => dispatch({ type: DELETE_CONTACT, payload: id })

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				addContact,
				deleteContact,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState
