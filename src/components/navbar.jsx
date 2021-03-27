import React from "react";

const NavBar = ({ totalCounters }) => {
	return (
		<nav
			className='navbar fixed-top navbar-dark bg-dark'
			style={{ color: "#075044" }}>
			<a className='navbar-brand' href='#'>
				Faadil Sahib
				<span className='badge badge-pill badge-secondary'>
					{totalCounters}
				</span>
			</a>
		</nav>
	);
};

export default NavBar;
