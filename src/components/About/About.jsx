import React from "react";
import { Container, Button } from "react-bootstrap"

const About = () => {
	return (
		<Container>
			<section className="about" id="about">
				<div className="text-center">
					<h1>Tentang Saya</h1>
					<span>Halo, perkenalkan nama saya Sidik Komarudiansah. Saat ini saya bekerja di salah satu startup di Jakarta sebagai Product Owner. Saya bertanggung jawab atas pengembangan sebuah produk software aplikasi. Dan berkoordinasi dengan Produk Management serta klien untuk mengantisipasi kebutuhan di lapangan.</span>
				</div>
				<div className="text-center" style={{marginTop: "15px"}}>
					<Button variant="outline-primary" style={{marginRight: "10px"}} >
						Download CV
					</Button>
					<Button variant="outline-success">
						Profile Linkedin
					</Button>
				</div>
			</section>
		</Container>
	)
}

export default About;
