import React, { Component } from "react";
import HiddenNavbar from "./hiddenNavbar";

class Blog extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div style={{ "padding-top": 200 }}>
					<HiddenNavbar></HiddenNavbar>
					<div className='row align-items-start'>
						<div class='col-sm left-area order-md-1 order-2'>
							One of three columns
						</div>
						<div class='col-sm center-area order-md-2 order-1'>
							One of three columns
							<br />
							One of three columns
							<br />
							One of three columns
							<br />
						</div>
						<div class='col-sm right-area order-md-3 order-3'>
							One of three columns
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Blog;
