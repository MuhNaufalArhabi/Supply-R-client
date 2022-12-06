import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditProfileBuyerModal(props) {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [formBuyer, setFormBuyer] = useState({
		name: "",
		email: "",
		owner: "",
		phoneNumber: "",
		address: "",
		industry: "",
		website: "",
	});

	const handleBuyerForm = (e) => {
		const { name, value } = e.target;
		const newForm = {
			...formBuyer,
		};
		newForm[name] = value;
		setFormBuyer(newForm);
	};

	const handleClose = () => {
		setShow(false);
	};

	const handleShow = (e) => {
		e.preventDefault();

		setShow(true);
	};

	const successEditBuyerProfile = async (e) => {
		try {
			let id = id;
			e.preventDefault();
			const { data } = await axios({
				method: "PUT",
				url: `http://localhost:3001/buyers/${id}`,
				data: { formBuyer },
			});
			console.log(data);
			navigate(`/profile-buyer/${id}`);
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
					width: "100%",
				}}
			>
				Edit Company Profile
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
					onSubmit={successEditBuyerProfile}
					style={{ paddingLeft: "5%", width: "95%" }}
				>
					<Modal.Header closeButton>
						<Modal.Title
							id="contained-modal-title-vcenter"
							style={{ color: "#204e64" }}
						>
							Edit Company Profile Details
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group className="mb-3" controlId="formBasicName">
							<Form.Label className="text-center">Name</Form.Label>

							<Form.Control
								type="text"
								className="form-control"
								name="name"
								placeholder="Enter company name ..."
								value={formBuyer.name}
								onChange={handleBuyerForm}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-center">Email</Form.Label>

							<Form.Control
								type="email"
								className="form-control"
								name="email"
								placeholder="Enter email address ..."
								value={formBuyer.email}
								onChange={handleBuyerForm}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicOwner">
							<Form.Label>Owner</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								name="owner"
								placeholder="Enter owner name ..."
								value={formBuyer.owner}
								onChange={handleBuyerForm}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPhone">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								name="phoneNumber"
								placeholder="Enter phone number ..."
								value={formBuyer.phoneNumber}
								onChange={handleBuyerForm}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicAddress">
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								name="address"
								placeholder="Enter company address ..."
								value={formBuyer.address}
								onChange={handleBuyerForm}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicIndustry">
							<Form.Label>Industry</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								name="industry"
								placeholder="Enter industry name ..."
								value={formBuyer.industry}
								onChange={handleBuyerForm}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicWebsite">
							<Form.Label>Website</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								name="website"
								placeholder="Enter company website address ..."
								value={formBuyer.website}
								onChange={handleBuyerForm}
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
							Edit Company Profile
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
}
