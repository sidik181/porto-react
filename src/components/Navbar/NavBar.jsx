import React from "react"
import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
	const [scrolled, seScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				seScrolled(true);
			} else {
				seScrolled(false);
			}
		}

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	})

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	}

	return (
		<Navbar sticky="top" bg="primary" variant="dark" expand="lg" className={scrolled ? "scrolled d-flex" : "d-flex"}>
			<Container>
				<Navbar.Brand href="#home">Sidik Komarudiansah</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
						<Nav.Link href="#hobbies" className={activeLink === 'hobbies' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('hobbies')}>Hobi</Nav.Link>
						<Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>Tentang</Nav.Link>
						<Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Hubungi Saya</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;