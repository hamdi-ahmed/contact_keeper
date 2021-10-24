import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/auth/authContext'
import Contacts from '../components/contacts/Contacts'
import Form from '../components/contacts/Form'
import Search from '../components/contacts/Search'
import './style.css'

const Home = () => {
	// Context
	const authContext = useContext(AuthContext)
	const { loadUser } = authContext

	// Load User
	useEffect(() => {
		loadUser()
		//eslint-disable-next-line
	}, [])

	return (
		<div className="home">
			<div>
				<Form />
			</div>
			<div>
				<Search />
				<Contacts />
			</div>
		</div>
	)
}

export default Home
