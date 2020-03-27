import React, { Component } from 'react'
import Upper from './Upper'
import Information from './Information'
import Stats from './Stats'
import ContactDetails from './ContactDetails'
import Details from './Details'
import "../../styles/App.scss"
import Footer from './Footer'
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="appOuter" >
				<Upper />
				<Information />
				<Stats />
				<ContactDetails />
				<Details />
				<Footer />
				</div>
			</React.Fragment>
		)
	}
}

export default App
