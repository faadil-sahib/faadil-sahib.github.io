import React, { useState, useEffect } from "react";
import { debounce } from "../utilities/helpers";

const CoverScreen = ({ isHome }) => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			// (prevScrollPos > currentScrollPos &&
			// 	prevScrollPos - currentScrollPos > 70) ||
			currentScrollPos < 10
		);

		setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	const navbarStyles = {
		position: "fixed",
		width: "100%",
		backgroundColor: "#282d30",
		textAlign: "center",
		transition: "top 0.6s",
	};

	if (isHome)
		return (
			<div
				style={{
					...navbarStyles,
					height: "100%",
					top: visible ? "0" : "-100%",
					backgroundImage: "url(././images/vscbackgroundblurred.jpg)",
					filter: "grayscale(100%)",
					left: "0%",
				}}>
				<div className='home-intro-text'>
					<span
						style={{
							fontSize: "4.2rem",
							color: "white",
						}}>
						I am a software developer.
						<br />
						<p style={{ fontSize: "2.7rem" }}>
							And this is my personal space.
						</p>
					</span>
				</div>
			</div>
		);
	else
		return (
			<div
				style={{
					...navbarStyles,
					height: "200px",
					top: visible ? "0" : "-200px",
				}}>
				Some Company Inc.
			</div>
		);
};

export default CoverScreen;
