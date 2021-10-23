import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
			<TransitionGroup>
				{filtered !== null
					? filtered.map((contact) => (
							<CSSTransition key={contact.id} timeout={500} classNames="item">
								<ContactItem key={contact.id} contact={contact} />
							</CSSTransition>
					  ))
					: contacts.map((contact) => (
							<CSSTransition key={contact.id} timeout={500} classNames="item">
								<ContactItem contact={contact} />
							</CSSTransition>
					  ))}
			</TransitionGroup>
		</Fragment>
	)
}

export default Contacts
