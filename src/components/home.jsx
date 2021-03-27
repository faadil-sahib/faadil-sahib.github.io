import React, { Component } from "react";
import CoverScreen from "./coverScreen";

class Home extends Component {
	state = {};
	render() {
		return (
			<div style={{ paddingTop: 200 }}>
				<div className='row align-items-start gx-5'>
					<div className='col-sm left-area order-md-1 mx-4 order-2'>
						One of three columns
					</div>
					<div
						className='col-5 center-area order-md-2 mx-4 order-1'
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
						className='col-sm right-area order-md-3 mx-4 order-3'
						style={{ fontWeight: "bold" }}>
						[WIP//Work In Progress]
						<br />
						[Not yet functional]
						<br />
						If you would like to receive email notifications about
						new stuff, do share your email address below.
						<br />
						It will be kept strictly confidential and only used for
						the mentioned purpose, no sharing with annoying
						advertisers or anything!
						<br />
						<input type='text' />
					</div>
				</div>
				<CoverScreen isHome={true}></CoverScreen>
			</div>
		);
	}
}

export default Home;
