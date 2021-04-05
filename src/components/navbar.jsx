import React, { useState, useEffect } from "react";
import { debounce } from "../utilities/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Router, Link } from "react-router-dom";

const NavBar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(currentScrollPos < 10);

		setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<nav
			className={`navbar navbar-expand-lg fixed-top ${
				visible ? "navbar-dark" : "navbar-light"
			}`}>
			<a
				className='navbar-brand'
				href='/#'
				style={{ marginLeft: "1rem" }}>
				Faadil Sahib
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarText'
				aria-controls='navbarText'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarText'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<Link className='nav-link' to='/#'>
							Home <span className='sr-only'>(current)</span>
						</Link>
					</li>

					<li className='nav-item'>
						<Link className='nav-link' to='/blog'>
							Blog
						</Link>
					</li>

					<li className='nav-item'>
						<Link className='nav-link' to='/aboutme'>
							Me
						</Link>
					</li>
				</ul>
				<ul
					className='navbar-nav'
					style={{ marginLeft: "auto", marginRight: "1rem" }}>
					<li className='nav-item'>
						<a
							href='https://github.com/faadil-sahib'
							target='_blank'
							rel='noreferrer'>
							<FontAwesomeIcon
								icon={faGithub}
								style={{
									fontSize: "1.5rem",
									color: "grey",
								}}
							/>
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='https://www.linkedin.com/in/faadil-garda-sahib-090a82112/'
							target='_blank'
							rel='noreferrer'>
							<FontAwesomeIcon
								icon={faLinkedin}
								style={{
									fontSize: "1.5rem",
									color: "grey",
								}}
							/>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
