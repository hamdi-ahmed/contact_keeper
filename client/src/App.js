import { Fragment } from 'react'
import Navbar from './components/layouts/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ContactState from './context/ContactState'

const App = () => {
	return (
		<ContactState>
			<Router>
				<Fragment>
					<Navbar />
					<div className="container">
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
					</div>
				</Fragment>
			</Router>
		</ContactState>
	)
}

export default App
