import React, { useState, useEffect } from "react";
import { debounce } from "../utilities/helpers";

const HiddenNavbar = ({ isHome }) => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 70) ||
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
		backgroundColor: "grey",
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
				}}>
				<div className='home-intro-text'>
					<span
						style={{
							fontSize: "5rem",
							fontWeight: "bold",
							color: "aquamarine",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
						}}>
						I am a software developer.
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

export default HiddenNavbar;
