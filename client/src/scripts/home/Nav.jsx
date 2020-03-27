import React, { Component } from 'react'
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem,
	MDBIcon
} from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom'
import "../../styles/Nav.scss"
class Nav extends Component {
	state = {
		collapseID: ''
	}

	toggleCollapse = collapseID => () =>
		this.setState(prevState => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}))

	render() {
		return (
			<Router>
				<MDBNavbar	className="Nav z-depth-0" transparent expand="md">
					<div className="container">
						<MDBNavbarBrand>
							<strong className="black-text">
								CORONA sahayata
							</strong>
						</MDBNavbarBrand>
						<MDBNavbarToggler
							onClick={this.toggleCollapse('navbarCollapse3')}
						/>
						<MDBCollapse
							id="navbarCollapse3"
							isOpen={this.state.collapseID}
							navbar
						>
							<MDBNavbarNav right>
								<MDBNavItem>
									<MDBNavLink
										className="waves-effect waves-light"
										to="#!"
									>
										<MDBIcon
											icon="envelope"
											className="mr-1"
										/>
										About Us
									</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink
										className="waves-effect waves-light"
										to="#!"
									>
										<MDBIcon icon="cog" className="mr-1" />
										Our Team
									</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink
										className="waves-effect waves-light"
										to="#!"
									>
										<MDBIcon icon="cog" className="mr-1" />
										Statistics{' '}
									</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBDropdown>
										<MDBDropdownToggle nav caret>
											<MDBIcon
												icon="user"
												className="mr-1"
											/>
											Get Help
										</MDBDropdownToggle>
										<MDBDropdownMenu
											className="dropdown-default"
											right
										>
											<MDBDropdownItem href="#!">
												Hospital
											</MDBDropdownItem>
											<MDBDropdownItem href="#!">
												Emergency helpline(XXXX)
											</MDBDropdownItem>
										</MDBDropdownMenu>
									</MDBDropdown>
								</MDBNavItem>
							</MDBNavbarNav>
						</MDBCollapse>
					</div>
				</MDBNavbar>
			</Router>
		)
	}
}

export default Nav
