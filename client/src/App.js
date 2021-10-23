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
import AlertState from './context/alert/alertContext'
import Alert from './components/layouts/Alert'

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<AlertState>
					<Router>
						<Fragment>
							<Navbar />
							<div className="container">
								<Alert />
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} />
							</div>
						</Fragment>
					</Router>
				</AlertState>
			</ContactState>
		</AuthState>
	)
}

export default App
