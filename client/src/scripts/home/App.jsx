import React, { Component } from 'react'
// import Nav from './Nav'
import Upper from './Upper'
import Information from './Information'
import Stats from './Stats'
import Details from './Details'
import "../../styles/App.scss"
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="appOuter" >
				{/* <Nav /> */}
				<Upper />
				<Information />
				<Stats />
				<Details />
				</div>
			</React.Fragment>
		)
	}
}

export default App
