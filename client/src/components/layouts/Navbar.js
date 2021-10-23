import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
