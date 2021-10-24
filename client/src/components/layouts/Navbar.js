import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contactContext'

const Navbar = () => {
	// Context
	const authContext = useContext(AuthContext)
	const { user, loadUser, logout, isAuthenticated } = authContext

	const contactContext = useContext(ContactContext)
	const { clearContacts } = contactContext

	useEffect(() => {
		loadUser()
		// eslint-disable-next-line
	}, [])

	// Logout
	const onLogOut = () => {
		logout()
		clearContacts()
	}

	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className="fa-solid fa-id-card-clip"></i> Contact Keeper
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				{isAuthenticated === null ? (
					<Fragment>
						<li>
							<Link to="/register">Register</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</Fragment>
				) : (
					<Fragment>
						<li>
							<span to="/register">
								Hello, {user && user.name && user.name}
							</span>
						</li>
						<li>
							<a onClick={onLogOut} href="#!">
								<i className="fas fa-sign-out-alt" />{' '}
								<span className="hide-sm">Logout</span>
							</a>
						</li>
					</Fragment>
				)}
			</ul>
		</nav>
	)
}

export default Navbar
