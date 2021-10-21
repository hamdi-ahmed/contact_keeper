import React from 'react'
import Contacts from '../components/contacts/Contacts'
import Form from '../components/contacts/Form'
import './style.css'

const Home = () => {
	return (
		<div className="home">
			<div>
				<Form />
			</div>
			<div>
				<Contacts />
			</div>
		</div>
	)
}

export default Home
