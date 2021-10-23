import React, { useState } from 'react'

const Register = () => {
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
		if (password !== cPassword) {
			alert('Password Wrong')
		} else {
			console.log('User', formData)
		}
	}

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" value={name} onChange={onChange} />
				</div>
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
				<div className="form-group">
					<label htmlFor="cPassword">Confirm Password</label>
					<input
						type="password"
						name="cPassword"
						value={cPassword}
						onChange={onChange}
					/>
				</div>
				<button className="btn btn-primary btn-block">Register</button>
			</form>
		</div>
	)
}

export default Register
