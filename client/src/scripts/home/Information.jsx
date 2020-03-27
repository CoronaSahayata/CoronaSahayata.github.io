import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel';
import '../../styles/Information.scss';
import Information1 from "../../assets/Information1.png";
import Information2 from "../../assets/Information2.png";
import Information3 from "../../assets/Information3.png";
import {
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText
} from 'mdbreact';

export default () => {
	const [activeItemIndex, setActiveItemIndex] = useState(0)
	const chevronWidth = 40
	return (
		<React.Fragment>
			<div
				style={{ padding: `0 ${chevronWidth}px` }}
				className="InformationOuter container onPC"
			>
				<div className="miniHeading">
					Always Follow
				</div>
				<div className="HeadingInformation">
					<span className="Heading">Important Instructions			</span>
				</div>
				<div className="Carousel">
					<ItemsCarousel
						requestToChangeActive={setActiveItemIndex}
						activeItemIndex={activeItemIndex}
						numberOfCards={3}
						gutter={30}
						rightChevron={
							<button className="btn btn-sm chevronButton">
								{'>'}
							</button>
						}
						leftChevron={
							<button className="btn btn-sm chevronButton">
								{'<'}
							</button>
						}
						outsideChevron
						chevronWidth={chevronWidth}
					>
						<MDBCard className="Card z-depth-1">
							<MDBCardImage
								className="img-fluid"
								src={Information1}
							/>
							<MDBCardBody className="cardBody  ">
								<MDBCardTitle className="cardTitle">
									<span className="cardTitle">
										Card title
									</span>
								</MDBCardTitle>{' '}
								<MDBCardText className="CardText">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Et odio esse dolores
									magnam voluptatibus? Consequuntur cupiditate
									ut eius aut aperiam sapiente impedit,
									consequatur nesciunt veritatis voluptates
									molestiae velit libero rem.
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
						<MDBCard className="Card z-depth-1">
							<MDBCardImage
								className="img-fluid"
								src={Information2}
							/>
							<MDBCardBody className="cardBody ">
								<MDBCardTitle className="cardTitle">
									<span className="cardTitle">
										Card title
									</span>
								</MDBCardTitle>{' '}
								<MDBCardText className="CardText">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Et odio esse dolores
									magnam voluptatibus? Consequuntur cupiditate
									ut eius aut aperiam sapiente impedit,
									consequatur nesciunt veritatis voluptates
									molestiae velit libero rem.
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
						<MDBCard className="Card z-depth-1">
							<MDBCardImage
								className="img-fluid"
								src={Information3}
							/>
							<MDBCardBody className="cardBody ">
								<MDBCardTitle className="cardTitle">
									<span className="cardTitle">
										Card title
									</span>
								</MDBCardTitle>{' '}
								<MDBCardText className="CardText">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Et odio esse dolores
									magnam voluptatibus? Consequuntur cupiditate
									ut eius aut aperiam sapiente impedit,
									consequatur nesciunt veritatis voluptates
									molestiae velit libero rem.
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
					</ItemsCarousel>
				</div>
			</div>

			<div
				style={{ padding: `0 ${chevronWidth}px` }}
				className="InformationOuter container onPhone"
			><div className="miniHeading">
			Always Follow
		</div>
				<div className="HeadingInformation">
					<span className="Heading">Important Instructions</span>
				</div>
				<div className="Carousel">
					<ItemsCarousel
						requestToChangeActive={setActiveItemIndex}
						activeItemIndex={activeItemIndex}
						numberOfCards={1}
						gutter={30}
					>
						<MDBCard className="Card z-depth-1">
							<MDBCardImage
								className="img-fluid"
								src={Information1}
							/>
							<MDBCardBody className="cardBody ">
								<MDBCardTitle className="cardTitle">
									<span className="cardTitle">
										Card title
									</span>
								</MDBCardTitle>{' '}
								<MDBCardText className="CardText">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Et odio esse dolores
									magnam voluptatibus? Consequuntur cupiditate
									ut eius aut aperiam sapiente impedit,
									consequatur nesciunt veritatis voluptates
									molestiae velit libero rem.
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
						<MDBCard className="Card z-depth-1">
							<MDBCardImage
								className="img-fluid"
								src={Information2}
							/>
							<MDBCardBody className="cardBody ">
								<MDBCardTitle className="cardTitle">
									<span className="cardTitle">
										Card title
									</span>
								</MDBCardTitle>
								<MDBCardText className="CardText">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Et odio esse dolores
									magnam voluptatibus? Consequuntur cupiditate
									ut eius aut aperiam sapiente impedit,
									consequatur nesciunt veritatis voluptates
									molestiae velit libero rem.
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
						<MDBCard className="Card z-depth-1">
							<MDBCardImage
								className="img-fluid"
								src={Information3}
							/>
							<MDBCardBody className="cardBody ">
								<MDBCardTitle className="cardTitle">
									<span className="cardTitle">
										Card title
									</span>
								</MDBCardTitle>{' '}
								<MDBCardText className="CardText">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Et odio esse dolores
									magnam voluptatibus? Consequuntur cupiditate
									ut eius aut aperiam sapiente impedit,
									consequatur nesciunt veritatis voluptates
									molestiae velit libero rem.
								</MDBCardText>
							</MDBCardBody>
						</MDBCard>
					</ItemsCarousel>
				</div>
			</div>
		</React.Fragment>
	)
}
