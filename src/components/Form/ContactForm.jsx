import React from "react";
import { Container, Button, Form, FloatingLabel } from "react-bootstrap"

const ContactForm = () => {
	return (
		<Container>
			<section className="contact" id="contact">
				<div className="text-center">
					<h1>Hubungi Saya</h1>
					<span>Mari Ciptakan Karya Bersama</span>
				</div>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Nama</Form.Label>
						<Form.Control type="email" placeholder="Nama Anda" />
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Email anda" />
						<Form.Text className="text-muted">
							Email anda tidak akan dipublish kepada siapapun.
						</Form.Text>
					</Form.Group>
					<FloatingLabel controlId="floatingTextarea2" label="Tuliskan Pesan Anda">
						<Form.Control
							as="textarea"
							placeholder="Leave a comment here"
							style={{ height: '100px' }}
						/>
					</FloatingLabel>
					<Button variant="primary" type="submit" className="mt-3">
						Kirim
					</Button>
				</Form>
			</section >
		</Container>
	)
}

export default ContactForm;
