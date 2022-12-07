import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAllStore, editStore, storeSelectors } from "../features/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function EditProfileStorePageCMS() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const id = localStorage.id;
	const store = useSelector((state) => storeSelectors.selectById(state, id));
	const [formStore, setFormStore] = useState({
		name: store?.name,
		phoneNumber: store?.phoneNumber,
		address: store?.address,
		owner: store?.owner,
	});
	const handleFromStore = (e) => {
		const { name, value } = e.target;
		const newForm = {
			...formStore,
		};
		newForm[name] = value;
		setFormStore(newForm);
	};
	useEffect(() => {
		dispatch(getAllStore());
	}, [dispatch]);

	const successEditStoreProfile = async (e) => {
		e.preventDefault();
		await dispatch(editStore(formStore));
		swal("Congratulations!", "Success edit Store Profile!", "success", {
			buttons: false,
			timer: 3000,
		});
		navigate("/profile-store");
	};
	return (
		<>
			<div style={{ marginLeft: "20%" }}>
				<Container
					style={{
						paddingTop: "2%",
						paddingBottom: "2%",
						paddingLeft: "15%",
						paddingRight: "15%",
					}}
				>
					<h1
						style={{
							textAlign: "center",
							color: "#204e64",
						}}
					>
						Edit {store?.name}'s Profile
					</h1>
					<br></br>

					<Form onSubmit={successEditStoreProfile}>
						<Form.Group className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Store name ..."
								name="name"
								value={formStore.name}
								onChange={handleFromStore}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Address</Form.Label>
							<Form.Control
								name="address"
								value={formStore.address}
								onChange={handleFromStore}
								as="textarea"
								rows={3}
								type="textarea"
								placeholder="Store address ..."
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								type="text"
								placeholder="Store phone number ..."
								name="phoneNumber"
								value={formStore.phoneNumber}
								onChange={handleFromStore}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Owner Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Store owner name ..."
								name="owner"
								value={formStore.owner}
								onChange={handleFromStore}
							/>
						</Form.Group>

						<br></br>
						<Button
							style={{
								backgroundColor: "#2596be",
								borderColor: "#2596be",
								color: "white",
							}}
							type="submit"
						>
							Edit Profile
						</Button>
					</Form>
				</Container>
			</div>
		</>
	);
}
