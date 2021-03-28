import React, { Component } from "react";
import CoverScreen from "./coverScreen";

class Home extends Component {
	state = {};
	render() {
		return (
			<div
				className='container-fluid px-5'
				style={{ paddingTop: 200, overflowX: "hidden" }}>
				<div className='row align-items-start gx-5'>
					<div className='col-sm left-area order-md-1 mx-4 order-2 px-5'>
						<a href='#' style={{ textDecoration: "none" }}>
							<div
								className='card border-dark mb-3'
								style={{
									maxWidth: "18rem",
									maxHeight: "10rem",
									fontSize: "0.7rem",
									backgroundColor: "#dfe4e1",
								}}>
								<div
									className='card-header'
									style={{ color: "#282d30" }}>
									Header
								</div>
								<div className='card-body text-dark'>
									<h5
										className='card-title'
										style={{
											color: "#282d30",
											fontSize: "1rem",
										}}>
										Dark card title
									</h5>
									<p
										className='card-text'
										style={{ color: "#282d30" }}>
										Some quick example text to build on the
										card title and make up the bulk of the
										card's content.
									</p>
								</div>
							</div>
						</a>
					</div>
					<div
						className='col-5 center-area order-md-2 mx-4 order-1 px-5'
						style={{ textAlign: "justify" }}>
						Hello there!
						<br />
						<br />
						<br />
						I do not often get visitors. Do come in, and feel free
						to make yourself at home.
						<br />
						<br />
						<br />
						Since you've found your way here, I suppose I should let
						you know what this place is all about.
						<br />
						<br />
						<br />
						I see this as my personal space to express myself
						regarding anything I feel the need to. Since I'm a
						software developer, I do believe that you will mostly
						find content related to my experiences as I undergo my
						long journey through the ocean of computer science.
						<br />
						<br />
						<br />
						Throughout my travels, I have dabbled in game
						development and tinkered with machine learning tech. I
						am also much interested in all things cloud.
						<br />
						<br />
						<br />
						I however see myself as more of a .NET character, having
						firm roots in C# and Microsoft technologies. Oh, and I
						definitely find front end development to be quite
						intriguing. Kindly do not judge me by the quality of
						this website.
						<br />
						<br />
						<br />
						I do also have other hobbies, but you may find them
						somewhat more scarce. I should perhaps dedicate a
						separate section for such pursuits.
						<br />
						<br />
						<br />
						You may also come across a semblance of a bio/resume of
						mine if you press the right buttons. I do hope that it
						will be of a certain interest to you. I do love to share
						things I've learnt and done and experienced.
						<br />
						<br />
						<br />
					</div>
					<div
						className='col-sm right-area order-md-3 mx-4 order-3 px-5'
						style={{ fontWeight: "bold" }}>
						<label>
							If you would like to receive email notifications
							about new stuff, kindly do share your email address
							below.
							<br />
							[WIP//Not yet functional]
						</label>
						<br />
						<br />
						<div className='d-flex align-items-end'>
							<input
								type='email'
								className='form-control'
								aria-describedby='emailHelp'
								placeholder='Your email'
							/>
							<button type='submit' className='btn btn-primary'>
								Submit
							</button>
						</div>
						<br />
						<small id='emailHelp' className='form-text text-muted'>
							It will be kept strictly confidential and only used
							for the mentioned purpose, no sharing with annoying
							advertisers or anything of the like!
						</small>
					</div>
				</div>
				{/* <CoverScreen isHome={true}></CoverScreen> */}
			</div>
		);
	}
}

export default Home;
