import React, { Component } from 'react'
import '../../styles/Stats.scss'
import { MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText } from 'mdbreact'
// import Graph from '../../assets/stats.png'

class Stats extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='StatsOuter ' >
					<div className='miniHeading'>Look and Learn</div>
					<div className='HeadingStats'>
						<span className='Heading'>Current Scenario</span>
					</div>

					<div className='statsMain container'>
						<MDBRow className='mainCards'>
							<MDBCol sm='12' md='7' className='column'>
								<div className='graph img-fluid' fluid>
									<div
										class='tableauPlaceholder'
										id='viz1585339255136'
										style={{position: "relative"
									
									
									}}
									>
										<noscript>
											<a href='#!'>
												<img class = "img-fluid"
													alt=' '
													src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;T7&#47;T797P95WD&#47;1_rss.png'
													style={{border: "none"}}
												/>
											</a>
										</noscript>	
										<object
											class='tableauViz'
											style={{display:"none"}}
										>
											<param
												name='host_url'
												value='https%3A%2F%2Fpublic.tableau.com%2F'
											/>{' '}
											<param
												name='embed_code_version'
												value='3'
											/>{' '}
											<param
												name='path'
												value='shared&#47;T797P95WD'
											/>{' '}
											<param name='toolbar' value='yes' />
											<param
												name='static_image'
												value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;T7&#47;T797P95WD&#47;1.png'
											/>{' '}
											<param
												name='animate_transition'
												value='yes'
											/>
											<param
												name='display_static_image'
												value='yes'
											/>
											<param
												name='display_spinner'
												value='yes'
											/>
											<param
												name='display_overlay'
												value='yes'
											/>
											<param
												name='display_count'
												value='yes'
											/>
										</object>
									</div>
								</div>
							</MDBCol>
							<MDBCol
								sm='12'
								md='4'
								className='column NumberCards'
							>
								<MDBCard
									className='card-body statsNumberCard'
									style={{
										// width: '22rem',
										marginTop: '1rem'
									}}
								>
									<MDBCardTitle className='Number'>
										9999999
									</MDBCardTitle>
									<MDBCardText className='text'>
										Active Cases
									</MDBCardText>
									<div className='flex-row'>
										<div className='PanelNumber'>
											Updated : 9 minutes ago{' '}
										</div>
									</div>
								</MDBCard>

								<MDBCard
									className='card-body statsNumberCard  statsNumberCard1'
									style={{
										// width: '22rem',
										marginTop: '1rem'
									}}
								>
									<MDBCardTitle className='Number'>
										9999999
									</MDBCardTitle>
									<MDBCardText className='text'>
										Active Cases
									</MDBCardText>
									<div className='flex-row'>
										<div className='PanelNumber'>
											Updated : 9 minutes ago{' '}
										</div>
									</div>
								</MDBCard>

								<MDBCard
									className='card-body statsNumberCard'
									style={{
										// width: '22rem',
										marginTop: '1rem'
									}}
								>
									<MDBCardTitle className='Number'>
										9999999
									</MDBCardTitle>
									<MDBCardText className='text'>
										Active Cases
									</MDBCardText>
									<div className='flex-row'>
										<div className='PanelNumber'>
											Updated : 9 minutes ago{' '}
										</div>
									</div>
								</MDBCard>
								<div className='button'>
									<button className='btn-lg btn buttonStats'>
										<span className='buttonText'>
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
