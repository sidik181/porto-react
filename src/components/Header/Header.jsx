// import { Button } from 'react-bootstrap';
import React from "react"
import profilePicture from "../../assets/img/sidik-komarudiansah.jpg";
import "./Header.css"

const Header = () => {
	return (
			<section className='home' id='home'>
				<div className='max-width'>
					<img src={profilePicture} className='profil-picture' alt='Sidik Komarudiansah' />
					<h1>Sidik Komarudiansah</h1>
					<p>Product Owner | Software Development Enthusiast</p>
				</div>
			</section>
	)
}

export default Header;