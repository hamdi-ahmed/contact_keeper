import React, { useContext, useState } from 'react'
import AlertContext from '../../context/alert/AlertState'

const Register = () => {
	// Context
	const alertContext = useContext(AlertContext)
	const { setAlert } = alertContext

	// State
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		cPassword: '',
	})
	const { name, email, password, cPassword } = formData

	// Input
	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	// Form Event
	const handleSubmit = (e) => {
		e.preventDefault()
		if (name === '' || email === '' || password === '') {
			setAlert('Please, Enter all fields', 'danger')
		} else if (password !== cPassword) {
			setAlert("Password and Confirm Password doesn't match", 'danger')
		} else {
			console.log('User', formData)
		}
	}

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
						required
						minLength="6"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="cPassword">Confirm Password</label>
					<input
						type="password"
						name="cPassword"
						value={cPassword}
						onChange={onChange}
						required
						minLength="6"
					/>
				</div>
				<button className="btn btn-primary btn-block">Register</button>
			</form>
		</div>
	)
}

export default Register
