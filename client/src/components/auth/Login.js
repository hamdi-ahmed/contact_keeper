import React, { useState } from 'react'

const Login = () => {
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
		console.log(formData)
	}

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
