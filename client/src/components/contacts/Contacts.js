import React, { Fragment, useContext } from 'react'
import ContactContext from '../../context/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
	// Context
	const contactContext = useContext(ContactContext)
	const { contacts, filtered } = contactContext

	if (contacts.length === 0) {
		return <h4>You Can Add Your Own Contacts and Save Them.</h4>
	}

	//console.log(contacts)
	return (
		<Fragment>
			{filtered !== null
				? filtered.map((contact) => (
						<ContactItem key={contact.id} contact={contact} />
				  ))
				: contacts.map((contact) => (
						<ContactItem key={contact.id} contact={contact} />
				  ))}
		</Fragment>
	)
}

export default Contacts
