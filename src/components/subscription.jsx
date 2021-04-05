import React, { Component } from "react";

export default class Subscription extends Component {
	render() {
		return (
			<div style={{ padding: "2rem 3rem 2rem 3rem" }}>
				<label>
					If you would like to receive email notifications about new
					stuff, kindly do share your email address below.
					<br />
					<p style={{ color: "#8E3030" }}>
						[WIP//Not yet functional]
					</p>
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
					It will be kept strictly confidential and only used for the
					mentioned purpose, no sharing with annoying advertisers or
					anything of the like!
				</small>
			</div>
		);
	}
}
