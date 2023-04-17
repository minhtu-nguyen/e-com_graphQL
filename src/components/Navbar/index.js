import { useState, useRef, useEffect } from 'react';

import './index.css';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	const linksRef = useRef(null);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	useEffect(() => {
		if (window.innerWidth < 1000) {
			if (showLinks) {
				linksRef.current.style.display = 'block';
			} else {
				linksRef.current.style.display = 'none';
			}
		}
	}, [showLinks]);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-header">
					<div className="navbar-logo">
						SOMETHING STORE
					</div>
					<div className="flex-icons">
						<i className="fa-solid fa-cart-shopping cart-mobile"></i>
						<div className="hamburger-menu" onClick={toggleLinks}>
							<i className="fa-solid fa-bars"></i>
						</div>
					</div>
				</div>
				<div className="navbar-links-container" ref={linksRef}>
					<ul className="navbar-links">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Shop</a>
						</li>
						<li className="cart-desktop">
							<i className="fa-solid fa-cart-shopping"></i>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;