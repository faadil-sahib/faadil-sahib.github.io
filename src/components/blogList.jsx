import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogItems }) => {
	return blogItems.map((blogItem) => (
		<Link
			to={"/blog/" + blogItem.id}
			style={{ textDecoration: "none" }}
			key={blogItem.id}>
			<div
				className='card border-dark mb-3'
				style={{
					maxWidth: "18rem",
					maxHeight: "10rem",
					fontSize: "0.7rem",
					backgroundColor: "#E2E0E0",
				}}
				key={blogItem.id}>
				<div
					className='card-header'
					style={{
						color: "#282d30",
						fontSize: "1rem",
						paddingLeft: "0.5rem",
					}}>
					{blogItem.tags.map((tag) => (
						<span className='badge m-1 bg-secondary'>{tag}</span>
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
					<p className='card-text' style={{ color: "#282d30" }}>
						{blogItem.description.substr(0, 50)}
					</p>
				</div>
			</div>
		</Link>
	));
};

export default BlogList;
