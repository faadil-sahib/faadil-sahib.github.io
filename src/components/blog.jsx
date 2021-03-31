import React, { Component } from "react";
import CoverScreen from "./coverScreen";
import BlogList from "./blogList";
import { withRouter } from "react-router-dom";

class Blog extends Component {
	state = {
		blogId: this.props.blogId,
		blogItems: this.props.blogItems,
		mainQuote: this.props.mainQuote,
		mainSubQuote: this.props.mainSubQuote,
	};

	getCoverScreen() {
		if (this.props.match.params.blogid != undefined)
			return (
				<CoverScreen
					mainLine={
						this.state.blogItems.filter(
							(x) =>
								x.id ===
								parseInt(this.props.match.params.blogid)
						)[0].title
					}
					subLine={
						this.state.blogItems.filter(
							(x) =>
								x.id ===
								parseInt(this.props.match.params.blogid)
						)[0].quote
					}></CoverScreen>
			);
		else
			return (
				<CoverScreen
					mainLine={this.state.mainQuote}
					subLine={this.state.mainSubQuote}></CoverScreen>
			);
	}

	getBlogBody() {
		if (this.props.match.params.blogid != undefined) {
			return (
				<React.Fragment>
					{this.state.blogItems
						.filter(
							(x) =>
								x.id ===
								parseInt(this.props.match.params.blogid)
						)[0]
						.tags.map((tag) => (
							<span className='badge m-1 bg-secondary'>
								{tag}
							</span>
						))}
					<h1
						style={{
							paddingTop: "3rem",
							paddingBottom: "3rem",
							textAlign: "left",
						}}>
						{
							this.state.blogItems.filter(
								(x) =>
									x.id ===
									parseInt(this.props.match.params.blogid)
							)[0].title
						}
					</h1>
					{
						<div
							id='blogTextBody'
							style={{ whiteSpace: "pre-line" }}>
							{
								this.state.blogItems.filter(
									(x) =>
										x.id ===
										parseInt(this.props.match.params.blogid)
								)[0].description
							}
						</div>
					}
				</React.Fragment>
			);
		} else {
			return this.state.blogItems.map((blogItem) => (
				<a
					href={"/blog/" + blogItem.id}
					style={{ textDecoration: "none" }}
					key={blogItem.id}>
					<div
						className='card border-light mb-3'
						style={{
							maxWidth: "auto",
							maxHeight: "auto",
							fontSize: "0.7rem",
							backgroundColor: "#E2E0E0",
						}}
						key={blogItem.id}>
						<div
							className='card-header'
							style={{ color: "#282d30", fontSize: "1rem" }}>
							{blogItem.tags.map((tag) => (
								<span className='badge m-1 bg-secondary'>
									{tag}
								</span>
							))}
						</div>
						<div className='card-body text-dark'>
							<h5
								className='card-title'
								style={{
									color: "#282d30",
									fontSize: "1rem",
								}}>
								{blogItem.title}
							</h5>
							<p
								className='card-text'
								style={{ color: "#282d30" }}>
								{blogItem.description.substr(0, 250) + "..."}
							</p>
						</div>
					</div>
				</a>
			));
		}
	}

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
						className='col-5 center-area order-md-2 order-1'
						style={{ textAlign: "justify" }}>
						{this.getBlogBody()}
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
				{this.getCoverScreen()}
			</div>
		);
	}
}

export default withRouter(Blog);
