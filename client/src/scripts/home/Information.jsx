import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import '../../styles/Information.scss'
import Information1 from '../../assets/Information1.png'
import Information2 from '../../assets/Information2.png'
import Information3 from '../../assets/Information3.png'
import {
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText
} from 'mdbreact'

export default () => {
	const [activeItemIndex, setActiveItemIndex] = useState(0)
	const chevronWidth = 40
	return (
		<React.Fragment>
			<div
				style={{ padding: `0 ${chevronWidth}px` }}
				className='InformationOuter container onPC'
			>
				<div className='miniHeading'>Always Follow</div>
				<div className='HeadingInformation'>
					<span className='Heading'>Important Instructions </span>
				</div>
				<div className='Carousel'>
					<ItemsCarousel
						requestToChangeActive={setActiveItemIndex}
						activeItemIndex={activeItemIndex}
						numberOfCards={3}
						gutter={30}
						rightChevron={
							<button className='btn btn-sm chevronButton'>
								{'>'}
							</button>
						}
						leftChevron={
							<button className='btn btn-sm chevronButton'>
								{'<'}
							</button>
						}
						outsideChevron
						chevronWidth={chevronWidth}
					>
						<MDBCard className='Card z-depth-1'>
							<MDBCardImage
								className='img-fluid'
								src={Information1}
							/>
							<MDBCardBody className='cardBody  '>
								<MDBCardTitle className='cardTitle'>
									<span className='cardTitle'>
										HANDWASHING WITH SOAP
										<br />
										<div className='subTitle'>
											CRITICAL FIGHT STRATEGY 1{' '}
										</div>{' '}
									</span>
								</MDBCardTitle>{' '}
								<MDBCardText className='CardText'>
									Handwashing with soap is one of the
									cheapest, most effective things you can do
									to protect yourself and others against
									coronavirus, as well as many other
									infectious diseases. Yet for billions, even
									this most basic of steps is simply out of
									reach.
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
						<MDBCard className='Card z-depth-1'>
							<MDBCardImage
								className='img-fluid'
								src={Information2}
							/>
							<MDBCardBody className='cardBody '>
								<MDBCardTitle className='cardTitle'>
									<span className='cardTitle'>
										SMART SOCIAL DISTANCING
										<div className='subTitle'>
											CRITICAL FIGHT STRATEGY 2{' '}
										</div>{' '}
									</span>
								</MDBCardTitle>{' '}
								<MDBCardText className='CardText'>
									Maintain at least 1 metre (3 feet) distance
									between yourself and anyone who is coughing
									or sneezing, and minimize contact and
									interactions. This eventually leads to
									decrease in spread, morbidity and mortality
									due to the disease.
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
						<MDBCard className='Card z-depth-1'>
							<MDBCardImage
								className='img-fluid'
								src={Information3}
							/>
							<MDBCardBody className='cardBody '>
								<MDBCardTitle className='cardTitle'>
									<span className='cardTitle'>
										STAYING SAFE AT HOME{' '}
									</span>
									<div className='subTitle'>
										CRITICAL FIGHT STRATEGY 3{' '}
									</div>{' '}
								</MDBCardTitle>{' '}
								<MDBCardText className='CardText'>
								The single most important action we can all
									take in fighting coronavirus is to stay at
									home in order to protect society and save
									lives. We must minimise physical
									interactions with fellow residents and
									maintain utmost hygiene and health.
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
					</ItemsCarousel>
				</div>
			</div>

			<div
				style={{ padding: `0 ${chevronWidth}px` }}
				className='InformationOuter container onPhone'
			>
				<div className='miniHeading'>Always Follow</div>
				<div className='HeadingInformation'>
					<span className='Heading'>Important Instructions</span>
				</div>
				<div className='Carousel'>
					<ItemsCarousel
						requestToChangeActive={setActiveItemIndex}
						activeItemIndex={activeItemIndex}
						numberOfCards={1}
						gutter={30}
					>
						<MDBCard className='Card z-depth-1'>
							<MDBCardImage
								className='img-fluid'
								src={Information1}
							/>
							<MDBCardBody className='cardBody '>
								<MDBCardTitle className='cardTitle'>
									<span className='cardTitle'>
										HANDWASHING WITH SOAP
										<div className='subTitle'>
											CRITICAL FIGHT STRATEGY 1{' '}
										</div>{' '}
									</span>
								</MDBCardTitle>{' '}
								<MDBCardText className='CardText'>
									Handwashing with soap is one of the
									cheapest, most effective things you can do
									to protect yourself and others against
									coronavirus, as well as many other
									infectious diseases. Yet for billions, even
									this most basic of steps is simply out of
									reach
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
						<MDBCard className='Card z-depth-1'>
							<MDBCardImage
								className='img-fluid'
								src={Information2}
							/>
							<MDBCardBody className='cardBody '>
								<MDBCardTitle className='cardTitle'>
									<span className='cardTitle'>
										SMART SOCIAL DISTANCING
										<div className='subTitle'>
											CRITICAL FIGHT STRATEGY 2{' '}
										</div>{' '}
									</span>
								</MDBCardTitle>
								<MDBCardText className='CardText'>
									Maintain at least 1 metre distance between
									yourself and anyone who is coughing or
									sneezing, and minimize contact and
									interactions. This eventually leads to
									decrease in spread, morbidity and mortality
									due to the disease.
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
						<MDBCard className='Card z-depth-1'>
							<MDBCardImage
								className='img-fluid'
								src={Information3}
							/>
							<MDBCardBody className='cardBody '>
								<MDBCardTitle className='cardTitle'>
									<span className='cardTitle'>
										STAYING SAFE AT HOME{' '}
										<div className='subTitle'>
											CRITICAL FIGHT STRATEGY 3{' '}
										</div>{' '}
									</span>
								</MDBCardTitle>{' '}
								<MDBCardText className='CardText'>
									The single most important action we can all
									take in fighting coronavirus is to stay at
									home in order to protect society and save
									lives. We must minimise physical
									interactions with fellow residents and
									maintain utmost hygiene.
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
					</ItemsCarousel>
				</div>
			</div>
		</React.Fragment>
	)
}
