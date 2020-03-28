import React, { Component } from 'react'
import '../../styles/ContactDetails.scss'
import { MDBRow, MDBCol} from 'mdbreact'
class ContactDetails extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='ContactDetails container'>
					<div className='miniHeading'>We Serve You </div>
					<div className='HeadingInformation'>
						<span className='Heading'>Find Us Near You </span>
					</div>
					<MDBRow className='button'>
						<MDBCol sm='11'  md='6'>
							<div className='button1div'>
								<button className='btn-lg btn button1 '>
									<div className='buttonText'>Hospitals</div>
								</button>
							</div>
						</MDBCol>
						<MDBCol sm='11'  md='6'>
							<div className='button2div'>
								<button className='btn-lg btn button2	 left'>
									<div className='buttonText'>Police</div>
								</button>
							</div>
						</MDBCol>
					</MDBRow>
					<MDBRow className='button'>
						<MDBCol sm='11'  md='6'>
							<div className='button1div'>
								<button className='btn-lg btn button1 '>
									<div className='buttonText'>List of NGOs</div>
								</button>
							</div>
						</MDBCol>
						<MDBCol sm='11'  md='6'>
							<div className='button2div'>
								<button className='btn-lg btn button2	 left'>
									<div className='buttonText'>Grocery Stores	</div>
								</button>
							</div>
						</MDBCol>
					</MDBRow>
					<MDBRow className='button'>
						<MDBCol sm='11'  md='6'>
							<div className='button1div'>
								<button className='btn-lg btn button1 '>
									<div className='buttonText'>Pharmacies</div>
								</button>
							</div>
						</MDBCol>
						<MDBCol sm='11'  md='6'>
							<div className='button2div'>
								<button className='btn-lg btn button2	 left'>
									<div className='buttonText'>Volunteers</div>
								</button>
							</div>
						</MDBCol>
					</MDBRow>
					<MDBRow className='button'>
						<MDBCol sm='11'  md='6'>
							<div className='button1div'>
								<button className='btn-lg btn button1 '>
									<div className='buttonText'>E-Counsellors</div>
								</button>
							</div>
						</MDBCol>
						<MDBCol sm='11'  md='6'>
							<div className='button2div'>
								<button className='btn-lg btn button2	 left'>
									<div className='buttonText'>Testing Labs</div>
								</button>
							</div>
						</MDBCol>
					</MDBRow>
				</div>
			</React.Fragment>
		)
	}
}

export default ContactDetails
