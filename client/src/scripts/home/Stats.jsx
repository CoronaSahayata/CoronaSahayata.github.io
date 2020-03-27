import React, { Component } from 'react'
import '../../styles/Stats.scss'
import { MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText } from 'mdbreact'
import Graph from '../../assets/stats.png'

class Stats extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className="StatsOuter">
					<div className="miniHeading">Look and Learn</div>
					<div className="HeadingStats">
						<span className="Heading">Current Scenario</span>
					</div>

					<div className="statsMain">
						<MDBRow className>
							<MDBCol sm="12" md="8" className="column">
								<img src={Graph} className="img-fluid" alt="" srcset="" />{' '}
							</MDBCol>
							<MDBCol
								sm="12"
								md="4"
								className="column NumberCards"
							>
								<MDBCard
									className="card-body statsNumberCard"
									style={{
										// width: '22rem',
										marginTop: '1rem'
									}}
								>
									<MDBCardTitle className="Number">
										9999999
									</MDBCardTitle>
									<MDBCardText className="text">
										Active Cases
									</MDBCardText>
									<div className="flex-row">
										<div className="PanelNumber">
											Updated : 9 minutes ago{' '}
										</div>
									</div>
								</MDBCard>

								<MDBCard
									className="card-body statsNumberCard  statsNumberCard1"
									style={{
										// width: '22rem',
										marginTop: '1rem'
									}}
								>
									<MDBCardTitle className="Number">
										9999999
									</MDBCardTitle>
									<MDBCardText className="text">
										Active Cases
									</MDBCardText>
									<div className="flex-row">
										<div className="PanelNumber">
											Updated : 9 minutes ago{' '}
										</div>
									</div>
								</MDBCard>

								<MDBCard
									className="card-body statsNumberCard"
									style={{
										// width: '22rem',
										marginTop: '1rem'
									}}
								>
									<MDBCardTitle className="Number">
										9999999
									</MDBCardTitle>
									<MDBCardText className="text">
										Active Cases
									</MDBCardText>
									<div className="flex-row">
										<div className="PanelNumber">
											Updated : 9 minutes ago{' '}
										</div>
									</div>
								</MDBCard>
								<div className="button">
									<button className="btn-lg btn buttonStats">
										<span className="buttonText">
											Discover
										</span>
									</button>
								</div>
							</MDBCol>
						</MDBRow>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Stats
