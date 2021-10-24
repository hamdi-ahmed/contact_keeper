import React, { useRef, useContext } from 'react'
import ContactContext from '../../context/contactContext'

const Search = () => {
	// Context
	const contactContext = useContext(ContactContext)
	const { filterContact, clearFilter } = contactContext

	// State
	const text = useRef('')

	// On Change Input
	const onChange = (e) => {
		if (text.current.value !== null) {
			filterContact(e.target.value)
		} else {
			clearFilter()
		}
	}

	return (
		<form>
			<input
				type="text"
				ref={text}
				onChange={onChange}
				placeholder="Filter Contacts..."
			/>
		</form>
	)
}

export default Search
