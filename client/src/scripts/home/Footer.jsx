import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import"../../styles/Footer.scss";
class Footer extends Component {
	state = {}
	render() {
		return (
			<MDBFooter
				color='stylish-color-dark'
				className='page-footer font-small pt-4 '
			>
				<MDBContainer fluid className='text-center text-md-left'>
					<MDBRow>
						<MDBCol className="linkBlock" md='5'>
							<h5 className='text-uppercase mb-4 mt-3 font-weight-bold'>
								Corona Sahayata
							</h5>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Dolores consequatur, id quam
								natus veritatis amet. Amet ut laborum explicabo
								alias architecto. Aut sed nisi, facere assumenda
								optio tempora! Ipsum, cum?
							</p>
						</MDBCol>
						<hr className='clearfix w-100 d-md-none' />
						<MDBCol className="linkBlock" md='2'>
							<h5 className='text-uppercase mb-4 mt-3 font-weight-bold'>
								Links
							</h5>
							<ul className='list-unstyled'>
								<li>
									<a href='#!'>Link 1</a>
								</li>
								<li>
									<a href='#!'>Link 2</a>
								</li>
								<li>
									<a href='#!'>Link 3</a>
								</li>
								<li>
									<a href='#!'>Link 4</a>
								</li>
							</ul>
						</MDBCol>
						<hr className='clearfix w-100 d-md-none' />
						<MDBCol className="linkBlock" md='2'>
							<h5 className='text-uppercase mb-4 mt-3 font-weight-bold'>
								Links
							</h5>
							<ul className='list-unstyled'>
								<li>
									<a href='#!'>Link 1</a>
								</li>
								<li>
									<a href='#!'>Link 2</a>
								</li>
								<li>
									<a href='#!'>Link 3</a>
								</li>
								<li>
									<a href='#!'>Link 4</a>
								</li>
							</ul>
						</MDBCol>
						<hr className='clearfix w-100 d-md-none' />
						<MDBCol className="linkBlock" md='2'>
							<h5 className='text-uppercase mb-4 mt-3 font-weight-bold'>
								Links
							</h5>
							<ul className='list-unstyled'>
								<li>
									<a href='#!'>Link 1</a>
								</li>
								<li>
									<a href='#!'>Link 2</a>
								</li>
								<li>
									<a href='#!'>Link 3</a>
								</li>
								<li>
									<a href='#!'>Link 4</a>
								</li>
							</ul>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<hr />
				<div className='text-center py-3'>
					<ul className='list-unstyled list-inline mb-0'>
						<li className='list-inline-item'>
							<h5 className='mb-1'>Contact Us </h5>
						</li>
						<li className='list-inline-item'>
							<a href='#!' className='btn btn-danger btn-rounded'>
								Whatsapp
							</a>
						</li>
					</ul>
				</div>
				<hr />
			</MDBFooter>
		)
	}
}

export default Footer
