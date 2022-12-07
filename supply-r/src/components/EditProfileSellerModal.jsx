import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { url } from "../stores/url";
// const baseUrl = "http://localhost:3001";
const baseUrl = url
export default function EditProfileSellerModal(props) {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [formSeller, setFormSeller] = useState({
		username: "",
		email: "",
		phoneNumber: "",
		ktp: "",
	});

	const handleSellerForm = (e) => {
		const { name, value } = e.target;
		const newForm = {
			...formSeller,
		};
		newForm[name] = value;
		setFormSeller(newForm);
	};

	const handleClose = () => {
		setShow(false);
	};

	const handleShow = (e) => {
		e.preventDefault();

		setShow(true);
	};

	const successEditSellerProfile = async (e) => {
		try {
			let id = id;
			e.preventDefault();
			const { data } = await axios({
				method: "PUT",
				url: `${baseUrl}/sellers/${id}`,
				data: { formSeller },
			});
			console.log(data);
			swal("Congratulations!", "Success edit UMKM Profile!", "success", {
				buttons: false,
				timer: 3000,
			});
			navigate(`/profile-seller/${id}`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Button
				onClick={handleShow}
				style={{
					backgroundColor: "#2596be",
					borderColor: "#2596be",
					color: "white",
				}}
			>
				Edit UMKM Profile
			</Button>
			<Modal
				show={show}
				onHide={handleClose}
				animation={false}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Form
					onSubmit={successEditSellerProfile}
					style={{ paddingLeft: "5%", width: "95%" }}
				>
					<Modal.Header closeButton>
						<Modal.Title
							id="contained-modal-title-vcenter"
							style={{ color: "#204e64" }}
						>
							Edit UMKM Profile Details
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group className="mb-3" controlId="formBasicUsername">
							<Form.Label className="text-center">Username</Form.Label>

							<Form.Control
								type="text"
								className="form-control"
								name="username"
								placeholder="Enter username ..."
								value={formSeller.username}
								onChange={handleSellerForm}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-center">Email</Form.Label>

							<Form.Control
								type="email"
								className="form-control"
								name="email"
								placeholder="Enter email address ..."
								value={formSeller.email}
								onChange={handleSellerForm}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter phone number ..."
								value={formSeller.phoneNumber}
								onChange={handleSellerForm}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>KTP</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter KTP number ..."
								value={formSeller.ktp}
								onChange={handleSellerForm}
							/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button
							style={{
								backgroundColor: "#2596be",
								borderColor: "#2596be",
								color: "white",
							}}
							type="submit"
						>
							Edit UMKM Profile
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
}
