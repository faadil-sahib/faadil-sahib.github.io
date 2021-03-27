import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NavBar = ({ totalCounters }) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
			<a className='navbar-brand' href='/#'>
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
						<a className='nav-link' href='/#'>
							Home <span className='sr-only'>(current)</span>
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/blog'>
							Blog
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/aboutme'>
							Me
						</a>
					</li>
				</ul>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<a
							href='https://github.com/faadil-sahib'
							target='_blank'>
							<FontAwesomeIcon
								icon={faGithub}
								style={{ fontSize: "1.5rem", color: "grey" }}
							/>
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='https://www.linkedin.com/in/faadil-garda-sahib-090a82112/'
							target='_blank'>
							<FontAwesomeIcon
								icon={faLinkedin}
								style={{ fontSize: "1.5rem", color: "grey" }}
							/>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
