import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AlertContext from '../../context/alert/AlertState'
import AuthContext from '../../context/auth/authContext'

const Login = () => {
	// Router
	const history = useHistory()

	// Context
	const authContext = useContext(AuthContext)
	const { error, clearError, isAuthenticated, login } = authContext
	const alertContext = useContext(AlertContext)
	const { setAlert } = alertContext

	// State
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const { email, password } = formData

	// Input
	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	// Form Event
	const handleSubmit = (e) => {
		e.preventDefault()
		login({ email, password })
	}

	// Error
	useEffect(() => {
		if (error) {
			setAlert(error, 'danger')
			clearError()
		}
		if (isAuthenticated) {
			history.push('/')
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, history])

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" value={email} onChange={onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
					/>
				</div>
				<button className="btn btn-primary btn-block">Login</button>
			</form>
		</div>
	)
}

export default Login
