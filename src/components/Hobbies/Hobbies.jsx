import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import filmPicture from "../../assets/img/Watching-Movie.png";
import bicyclePicture from "../../assets/img/Bicycle.png";
import travelPicture from "../../assets/img/Traveling.png";
import "./Hobbies.css"

const Hobbies = () => {
	return (
		<Container lg={10}>
			<section className="hobbies" id="hobbies">
				<div className="text-center mb-5">
					<h1>Hobi</h1>
				</div>
				<Row className="hobbies-content">
					<Col lg>
						<img src={filmPicture} alt="Foto Menonton Film"/>
						<h4>Menonton Film</h4>
						<p>Di waktu luang kadang saya menggunakannya untuk menonton film</p>
					</Col>
					<Col lg>
						<img src={bicyclePicture} alt="Foto Menonton Film"/>
						<h4>Bermain Sepeda</h4>
						<p>Hampir setiap weekend saya berolahraga dengan bermain sepeda</p>
					</Col>
					<Col lg>
						<img src={travelPicture} alt="Foto Menonton Film"/>
						<h4>Bepergian</h4>
						<p>Untuk menyegarkan pikiran dan ide, biasanya saya melakukan perjalanan</p>
					</Col>
				</Row>
			</section>
		</Container>
	)
}

export default Hobbies;
