import React, { Component } from 'react'
import '../../styles/Upper.scss'
import Upper1 from '../../assets/Upper.png'
import Nav from './Nav'
class Upper extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='out'>
					<div className='upperOuter'>
						<Nav />
						<div className='container'>
							<div className='row upperMain '>
								<div className='col-sm-12 col-md-4 upperLeft'>
									<div className='upperHeading'>
										<span className='bold'>Corona</span>
										Virus
									</div>
									<div className='upperText'>
										We are using the latest on technology
										trends and are giving real time analysis
										of COVID stats, We keep the view of
										experts and advocacy on health issues
										given by verified authorities a prime
										tool to further bridge the gap between
										crisis and solution .
									</div>
									<div className='upperButton1'>
										<button className=' btn-lg btn upperButton'>
											<span className='buttonText'>
												Discover
											</span>
										</button>
									</div>
								</div>
								<div className='col-sm-12 col-md-6'>
									<div className='image'>
										<img
											src={Upper1}
											alt=''
											className='img-fluid '
											srcset=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Upper
