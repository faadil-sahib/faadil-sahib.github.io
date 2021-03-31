import React, { Component } from "react";
import CoverScreen from "./coverScreen";
import BlogList from "./blogList";

class Home extends Component {
	render() {
		const { blogItems } = this.props;
		return (
			<div
				className='container-fluid px-5'
				style={{ paddingTop: 200, overflowX: "hidden" }}>
				<div className='row align-items-start gx-5'>
					<div className='col-sm left-area order-md-1 order-2'>
						<BlogList blogItems={blogItems}></BlogList>
					</div>
					<div
						className='col-sm-5 center-area order-md-2 order-1'
						style={{ textAlign: "justify" }}>
						<div>
							<h2>Hello there!</h2>
							<br />
							<br />
							<br />
							I do not often get visitors. Do come in, and feel
							free to make yourself at home.
							<br />
							<br />
							<br />
							Since you've found your way here, I suppose I should
							let you know what this place is all about.
							<br />
							<br />
							<br />
							I see this as my personal space to express myself
							regarding anything I feel the need to. Since I'm a
							software developer, I do believe that you will
							mostly find content related to my experiences as I
							undergo my long journey through the ocean of
							computer science.
							<br />
							<br />
							<br />
							Throughout my travels, I have dabbled in game
							development and tinkered with machine learning tech.
							I am also much interested in all things cloud.
							<br />
							<br />
							<br />
							I however see myself as more of a .NET character,
							having firm roots in C# and Microsoft technologies.
							Oh, and I definitely find front end development to
							be quite intriguing. Kindly do not judge me by the
							quality of this website.
							<br />
							<br />
							<br />
							In no way do I see myself as an expert in any of the
							domains and topics I speak about here. That would be
							oh so preposterous, absurd, ludicrous even. I am but
							a student in these fields, and only wish to have a
							central repository for my knowledge. A journal of
							sorts.
							<br />
							<br />
							<br />
							I only write to teach myself, to review my mediocre
							knowledge, to strengthen parts that may yet be
							unclear. I wish to have a place to store the current
							state of my mind, so that I may later on look back
							on how things have changed over time, or simply
							enjoy reading through my old notes in a few decades,
							to laugh at how foolish I once was, over a cup of
							tea.
							<br />
							<br />
							<br />
							I do also have other hobbies, but you may find them
							somewhat more scarce. I should perhaps dedicate a
							separate section for such pursuits.
							<br />
							<br />
							<br />
							You may also come across a semblance of a bio/resume
							of mine if you press the right buttons. I do hope
							that it will be of a certain interest to you. I do
							love to share the things I've learnt and done and
							experienced.
							<br />
							<br />
							<br />
						</div>
					</div>
					<div
						className='col-sm right-area order-md-3 order-3'
						style={{ fontWeight: "bold" }}>
						<label>
							If you would like to receive email notifications
							about new stuff, kindly do share your email address
							below.
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
							It will be kept strictly confidential and only used
							for the mentioned purpose, no sharing with annoying
							advertisers or anything of the like!
						</small>
					</div>
				</div>
				<CoverScreen
					isHome={true}
					mainLine={"I am a software developer."}
					subLine={"And this is my personal space."}></CoverScreen>
			</div>
		);
	}
}

export default Home;
