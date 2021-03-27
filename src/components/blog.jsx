import React, { Component } from "react";
import CoverScreen from "./coverScreen";

class Blog extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div style={{ paddingTop: 200 }}>
					<CoverScreen></CoverScreen>
					<div className='row align-items-start'>
						<div className='col-sm left-area order-md-1 order-2'>
							One of three columns
						</div>
						<div className='col-sm center-area order-md-2 order-1'>
							One of three columns
							<br />
							One of three columns
							<br />
							One of three columns
							<br />
						</div>
						<div className='col-sm right-area order-md-3 order-3'>
							One of three columns
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Blog;
