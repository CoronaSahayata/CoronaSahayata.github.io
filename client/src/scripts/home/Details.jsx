import React, { Component } from 'react'
import '../../styles/Details.scss'
import { FaFacebook } from 'react-icons/fa'

import {
	MDBRow,
	MDBCol,
	MDBInput,
	MDBCard,
	MDBCardBody
} from 'mdbreact'

class Details extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className="Details container">
					<div className="miniHeading">We Serve You </div>
					<div className="HeadingInformation">
						<span className="Heading">Reach Out to Us </span>
					</div>
					<div className="contact">
						<MDBRow>
							<MDBCol md="12">
								<MDBCard>
									<MDBRow>
										<MDBCol sm="12" md="8">
											<MDBCardBody>
												<form>
													<p className="h4 formHeading 	text-center py-4">
														Send Us a Mesaage
													</p>
													<div className="grey-text">
														<MDBRow>
															<MDBCol
																md="6"
																sm="12"
															>
																<MDBInput
																	label="Your name"
																	icon="user"
																	group
																	type="text"
																	validate
																	error="wrong"
																	success="right"
																/>
															</MDBCol>
															<MDBCol
																md="6"
																sm="12"
															>
																<MDBInput
																	label="Phone Number"
																	icon="Phone"
																	group
																	type="tel"
																	validate
																	error="wrong"
																	success="right"
																/>
															</MDBCol>
														</MDBRow>
														<MDBInput
															label="Your name"
															icon="user"
															group
															type="text"
															validate
															error="wrong"
															success="right"
														/>
														<MDBInput
															label="Your email"
															icon="envelope"
															group
															type="email"
															validate
															error="wrong"
															success="right"
														/>
														<MDBInput
															label="Your Address"
															icon="home"
															group
															type="text"
															validate
															error="wrong"
															success="right"
														/>
														<MDBInput
															label=" Your Message"
															icon="lock"
															group
															type="textarea"
															validate
														/>
													</div>
													<div className="text-center py-4 mt-3">
														<div className="buttonD">
															<button className="btn-lg btn buttonDetails">
																<span className="buttonText">
																	Get In Touch
																</span>
															</button>
														</div>
													</div>
												</form>
											</MDBCardBody>
										</MDBCol>
										<MDBCol sm="12" md="4">
											<div className="social">
												<MDBCardBody>
													<form>
														<p className="h4 formHeading text-center py-4">
															Stay Updated{' '}
														</p>
														<FaFacebook className="icon" />
													</form>
												</MDBCardBody>
											</div>
										</MDBCol>
									</MDBRow>
								</MDBCard>
							</MDBCol>
						</MDBRow>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Details
