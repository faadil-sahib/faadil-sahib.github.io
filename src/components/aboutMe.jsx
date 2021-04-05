import React, { Component } from "react";
import CoverScreen from "./coverScreen";
import Subscription from "./subscription";

class AboutMe extends Component {
	state = {};

	getCoverScreen() {
		return (
			<CoverScreen
				mainLine={"I am a software developer."}
				subLine={"And this is my story."}></CoverScreen>
		);
	}

	render() {
		return (
			<React.Fragment>
				<div
					className='container-fluid px-5'
					style={{ paddingTop: 200, overflowX: "hidden" }}>
					<div className='row align-items-start gx-5'>
						<div className='col-sm left-area order-md-1 order-2'></div>
						<div
							className='col-sm-5 center-area order-md-2 order-1'
							style={{ textAlign: "justify" }}>
							One story, coming right up!
							<br />
							[//Page Under Construction//]
						</div>
						<div
							className='col-sm right-area order-md-3 order-3'
							style={{ fontWeight: "bold" }}>
							<Subscription></Subscription>
						</div>
					</div>
					{this.getCoverScreen()}
				</div>
			</React.Fragment>
		);
	}
}

export default AboutMe;
