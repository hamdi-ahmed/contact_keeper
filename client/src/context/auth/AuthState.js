import React, { useReducer } from 'react'
import axios from 'axios'
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types'
import { AuthReducer } from './authReducer'
import AuthContext from './authContext'
import setAuthToken from '../../utils/setAuthToken'

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null,
	}

	const [state, dispatch] = useReducer(AuthReducer, initialState)

	// Load User
	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token)
		}
		try {
			const res = await axios.get('/api/auth')
			dispatch({ type: USER_LOADED, payload: res.data })
		} catch (err) {
			dispatch({ type: AUTH_ERROR })
		}
	}

	// Register User
	const register = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		try {
			const res = await axios.post(`/api/user`, formData, config)
			dispatch({ type: REGISTER_SUCCESS, payload: res.data })
			loadUser()
		} catch (err) {
			dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg })
		}
	}

	// Login
	const login = async (formData) => {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		}
		try {
			const res = await axios.post('api/auth', formData, config)
			dispatch({ type: LOGIN_SUCCESS, payload: res.data })
			loadUser()
		} catch (err) {
			dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg })
		}
	}

	// Logout
	const logout = () => dispatch({ type: LOGOUT })

	// Clear Error
	const clearError = () => dispatch({ type: CLEAR_ERRORS })

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				loadUser,
				register,
				login,
				clearError,
				logout,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState
