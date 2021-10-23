import React from 'react'
import Contacts from '../components/contacts/Contacts'
import Form from '../components/contacts/Form'
import Search from '../components/contacts/Search'
import './style.css'

const Home = () => {
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
