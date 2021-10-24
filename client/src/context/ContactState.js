import React, { useReducer } from 'react'
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
	CONTACT_ERROR,
	GET_CONTACTS,
	CLEAR_CONTACTS,
} from './types'

const ContactState = (props) => {
	const initialState = {
		loading: true,
		contacts: null,
		current: null,
		filtered: null,
		error: null,
	}
	const [state, dispatch] = useReducer(ContactReducer, initialState)

	// Get Contacts
	const getContacts = async () => {
		try {
			const res = await axios.get('/api/contact')
			dispatch({ type: GET_CONTACTS, payload: res.data })
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, error: err.response.msg })
		}
	}

	// Add Contact
	const addContact = async (contact) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		try {
			const res = await axios.post('/api/contact', contact, config)
			dispatch({
				type: ADD_CONTACT,
				payload: res.data,
			})
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, error: err.response.msg })
		}
	}

	// Delete Contact
	const deleteContact = async (id) => {
		try {
			await axios.delete(`/api/contact/${id}`)
			dispatch({ type: DELETE_CONTACT, payload: id })
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
		}
	}

	// Set Current
	const setCurrent = (contact) =>
		dispatch({ type: SET_CURRENT, payload: contact })

	// Clear Current
	const clearCurrent = () => dispatch({ type: CLEAR_CURRENT })

	// Update Contact
	const updateContact = async (contact) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		try {
			const res = await axios.put(
				`/api/contact/${contact._id}`,
				contact,
				config
			)
			dispatch({ type: UPDATE_CONTACT, payload: res.data })
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, error: err.response.msg })
		}
	}

	// Filter Contact
	const filterContact = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text })
	}

	// Clear Filter
	const clearFilter = () => dispatch({ type: CLEAR_FILTER })

	// Clear Filter
	const clearContacts = () => dispatch({ type: CLEAR_CONTACTS })

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				loading: state.loading,
				getContacts,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContact,
				clearFilter,
				clearContacts,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState
