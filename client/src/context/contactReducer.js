import {
	ADD_CONTACT,
	CLEAR_CURRENT,
	CLEAR_FILTER,
	DELETE_CONTACT,
	FILTER_CONTACTS,
	UPDATE_CONTACT,
	SET_CURRENT,
} from './types'

export const ContactReducer = (state, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload],
			}

		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) => contact.id !== action.payload
				),
			}
		default:
			return state
	}
}
