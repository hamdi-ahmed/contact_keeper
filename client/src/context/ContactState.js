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
		current: null,
		filtered: null,
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

	// Set Current
	const setCurrent = (contact) =>
		dispatch({ type: SET_CURRENT, payload: contact })

	// Clear Current
	const clearCurrent = () => dispatch({ type: CLEAR_CURRENT })

	// Update Contact
	const updateContact = (contact) =>
		dispatch({ type: UPDATE_CONTACT, payload: contact })

	// Filter Contact
	const filterContact = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text })
	}

	// Clear Filter
	const clearFilter = () => dispatch({ type: CLEAR_FILTER })

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContact,
				clearFilter,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState
