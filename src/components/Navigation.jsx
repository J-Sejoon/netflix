import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<Navbar bg="dark" expand="lg" variant="dark" className="navTop">
			<Container fluid>
				<Navbar.Brand>
					<Link to="/">
						<img width={90} src="/Logonetflix.png" alt="logo" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Link to="/" className="nav-item">
							Home
						</Link>
						<Link to="/movies" className="nav-item">
							Movies
						</Link>
						<Link to="#" className="nav-item">
							New & Popular
						</Link>
						<Link to="#" className="nav-item">
							My List
						</Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-danger">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
