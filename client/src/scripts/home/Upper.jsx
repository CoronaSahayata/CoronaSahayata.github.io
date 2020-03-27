import React, { Component } from 'react'
import '../../styles/Upper.scss'
import Upper1 from "../../assets/Upper.png"
import Nav from  "./Nav"
class Upper extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className="out">
					<div className="upperOuter">
					<Nav />
						<div className="container">
							<div className="row upperMain ">
								<div className="col-sm-12 col-md-4 upperLeft">
									<div className="upperHeading">
										<span className="bold">Corona</span>Virus
									</div>
									<div className="upperText">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Iusto, consequuntur.
										Pariatur possimus explicabo minus ut,
										doloremque tempore iure, maxime
										repellendus magni quasi eum soluta
										aperiam provident impedit vel autem
										beatae.
									</div>
									<div className="upperButton1">
										<button className=" btn-lg btn upperButton">
											<span className="buttonText">
												Discover{' '}
											</span>
										</button>
									</div>
								</div>
								<div className="col-sm-12 col-md-6">
									<img src={Upper1} alt="" className="img-fluid" srcset=""/>
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
