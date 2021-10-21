import React, { Fragment, useContext } from 'react'
import ContactContext from '../../context/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
	// Context
	const contactContext = useContext(ContactContext)
	const { contacts } = contactContext
	//console.log(contacts)
	return (
		<Fragment>
			{contacts.map((contact) => (
				<ContactItem key={contact.id} contact={contact} />
			))}
		</Fragment>
	)
}

export default Contacts
