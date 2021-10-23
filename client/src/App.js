import { Fragment } from 'react'
import Navbar from './components/layouts/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ContactState from './context/ContactState'
import AuthState from './context/auth/AuthState'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<Router>
					<Fragment>
						<Navbar />
						<div className="container">
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
						</div>
					</Fragment>
				</Router>
			</ContactState>
		</AuthState>
	)
}

export default App
