import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactContext from '../../context/contactContext'
import Spinner from '../layouts/Spinner'
import ContactItem from './ContactItem'

const Contacts = () => {
	// Load Data
	useEffect(() => {
		getContacts()
		// eslint-disable-next-line
	}, [])

	// Context
	const contactContext = useContext(ContactContext)
	const { contacts, filtered, getContacts, loading } = contactContext

	if (contacts !== null && contacts.length === 0 && !loading) {
		return <h4>You Can Add Your Own Contacts and Save Them.</h4>
	}

	//console.log(contacts)
	return loading ? (
		<Spinner />
	) : (
		<Fragment>
			<TransitionGroup>
				{filtered !== null && filtered.length > 0
					? filtered.map((contact) => (
							<CSSTransition key={contact.id} timeout={500} classNames="item">
								<ContactItem key={contact.id} contact={contact} />
							</CSSTransition>
					  ))
					: contacts.map((contact) => (
							<CSSTransition key={contact.id} timeout={500} classNames="item">
								<ContactItem key={contact.id} contact={contact} />
							</CSSTransition>
					  ))}
			</TransitionGroup>
		</Fragment>
	)
}

export default Contacts
