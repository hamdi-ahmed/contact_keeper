import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
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
	const initailState = {
		contacts: [
			{ id: 1, name: 'Jon Snow', phone: '111-111-111', type: 'professional' },
			{ id: 2, name: 'Aria Stark', phone: '222-222-222', type: 'personal' },
			{
				id: 3,
				name: 'Emily Clark',
				phone: '333-333-333',
				type: 'professional',
			},
		],
	}
	const [state, dispatch] = useReducer(ContactContext, initailState)

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState
