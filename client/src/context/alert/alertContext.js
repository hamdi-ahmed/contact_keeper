import React, { useReducer } from 'react'
import { SET_ALERT, REMOVE_ALERT } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { AlertReducer } from './alertReducer'
import AlertContext from './AlertState'

const AlertState = (props) => {
	const initialState = []

	const [state, dispatch] = useReducer(AlertReducer, initialState)

	// Set Alert
	const setAlert = (msg, type, timeOut = 5000) => {
		const id = uuidv4()
		dispatch({
			type: SET_ALERT,
			payload: { msg, type, id },
		})

		setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeOut)
	}

	return (
		<AlertContext.Provider value={{ alerts: state, setAlert }}>
			{props.children}
		</AlertContext.Provider>
	)
}

export default AlertState
