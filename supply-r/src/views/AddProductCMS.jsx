import React from "react";
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	ButtonGroup,
	Alert,
} from "react-bootstrap";
import ImageUploading from "react-images-uploading";
import { postProduct } from "../features/productSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { url } from "../stores/url";
// const baseUrl = "http://localhost:3001";
const baseUrl = url
export default function AddProductCMS(props) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const {
		maxNumber = 5,
		acceptType = ["jpeg", "jpg", "png"],
		maxFileSize = 5000000,
	} = props;

	const [product, setProduct] = React.useState(location.state);
	const [images, setImages] = React.useState(
		product ? [{ image: product.mainImage }, ...product.Images] : []
	);

	const [formProduct, setFormProduct] = React.useState({
		name: product ? product.name : "",
		CategoryId: product ? product.CategoryId : "",
		description: product ? product.description : "",
		price: product ? product.price : "",
		stock: product ? product.stock : "",
	});
	const onChange = (imageList, addUpdateIndex) => {
		setImages(imageList);
	};
	const onError = () => {
		setImages([]);
	};
	const hendlerProduct = (e) => {
		const { name, value } = e.target;
		const newProduct = {
			...formProduct,
		};
		newProduct[name] = value;
		setFormProduct(newProduct);
	};
	const printjson = async (e) => {
		e.preventDefault();
		if (!product) {
			const data = {
				images,
				formProduct,
			};
			await dispatch(postProduct(data));
			swal("Congratulations!", "Success add product!", "success", {
				buttons: false,
				timer: 3000,
			});
		} else {
			const { data } = await axios({
				method: "put",
				url: `${baseUrl}/${product.id}`,
				headers: {
					access_token: localStorage.access_token,
				},
				data: formProduct,
			});
		}
		swal("Congratulations!", "Success edit product!", "success", {
			buttons: false,
			timer: 3000,
		});
		navigate(`/product-list/${localStorage.id}`);
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
					<h1 style={{ textAlign: "center", color: "#204e64" }}>
						{product ? "Edit Product" : "Add Product"}
					</h1>
					<br></br>

					<Form onSubmit={printjson}>
						<Form.Group className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Product name ..."
								name="name"
								value={formProduct.name}
								onChange={hendlerProduct}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Category</Form.Label>
							<Form.Select
								name="CategoryId"
								value={formProduct.CategoryId}
								onChange={hendlerProduct}
							>
								<option disabled>-- Select Category --</option>
								<option value="1">Electronic</option>
								<option value="2">Tool</option>
								<option value="3">Construction</option>
								<option value="4">Stationary</option>
								<option value="5">Machinery</option>
								<option value="6">Merchandise</option>
								<option value="7">Events</option>
								<option value="8">Labor</option>
								<option value="9">Printing</option>
								<option value="10">Healthcare</option>
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								type="textarea"
								placeholder="Product description ..."
								name="description"
								value={formProduct.description}
								onChange={hendlerProduct}
							/>
						</Form.Group>

						<Row style={{ flexDirection: "row" }}>
							<Col style={{ flex: "1" }}>
								<Form.Group className="mb-3">
									<Form.Label>Price</Form.Label>
									<Form.Control
										type="number"
										placeholder="Product price ..."
										name="price"
										value={formProduct.price}
										onChange={hendlerProduct}
									/>
								</Form.Group>
							</Col>

							<Col style={{ flex: "1" }}>
								<Form.Group className="mb-3">
									<Form.Label>Stock</Form.Label>
									<Form.Control
										type="number"
										placeholder="Product stock ..."
										name="stock"
										value={formProduct.stock}
										onChange={hendlerProduct}
									/>
								</Form.Group>
							</Col>
						</Row>

						<ImageUploading
							multiple
							value={images}
							onChange={onChange}
							onError={onError}
							maxNumber={maxNumber}
							acceptType={acceptType}
							maxFileSize={maxFileSize}
							dataURLKey="data_url"
						>
							{({
								imageList,
								onImageUpload,
								onImageRemoveAll,
								onImageUpdate,
								onImageRemove,
								isDragging,
								dragProps,
								errors,
							}) => {
								return (
									<>
										{errors && (
											<Alert
												style={{
													backgroundColor: "#ffe9e9",
													borderColor: "red",
													color: "red",
													height: "60px",
												}}
											>
												<ul>
													{errors.maxNumber && (
														<li>Maximum 5 images to upload</li>
													)}
													{errors.acceptType && (
														<li>
															Selected file extention is not .jpeg .jpg .png
														</li>
													)}
													{errors.maxFileSize && (
														<li>Selected file size has exceed 5MB</li>
													)}
												</ul>
											</Alert>
										)}

										<div className="upload__image-wrapper">
											<div>Upload Images</div>
											<div
												as="textarea"
												rows={3}
												className="upload-container"
												{...dragProps}
												onClick={onImageUpload}
												style={{
													marginTop: "10px",
													borderStyle: "solid",
													borderColor: "#d8dcdf",
													borderWidth: "1.5px",
													borderRadius: "5px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													width: "100%",
													height: "155px",
													color: "grey",
													// backgroundColor: "red",
												}}
											>
												{images.length === 0 ? (
													<p>Choose a file or Drag it here</p>
												) : (
													<div
														className="p-2"
														style={{
															textAlign: "center",
															zIndex: "1",
														}}
													>
														{imageList.map((image, index) => (
															<div
																key={index}
																className="image-item  "
																style={{
																	maxHeight: "100px",
																	maxWidth: "150px",
																	objectFit: "cover",
																	marginRight: "10px",
																	display: "inline-block",
																}}
															>
																<img
																	src={
																		product ? image.image : image["data_url"]
																	}
																	alt="gambar product"
																	style={{
																		height: "100px",
																		maxWidth: "150px",
																		objectFit: "cover",
																	}}
																/>
																<div className="image-item__btn-wrapper mt-1">
																	<ButtonGroup
																		size="sm"
																		style={{ width: "100%" }}
																	>
																		{product ? (
																			""
																		) : (
																			<Button
																				style={{
																					backgroundColor: "#e23500",
																					borderColor: "#e23500",
																					color: "white",
																				}}
																				onClick={(e) => {
																					e.stopPropagation();
																					onImageRemove(index);
																				}}
																			>
																				Remove
																			</Button>
																		)}
																	</ButtonGroup>
																</div>
															</div>
														))}
													</div>
												)}
											</div>
										</div>
									</>
								);
							}}
						</ImageUploading>
						<br></br>
						<Button
							style={{
								backgroundColor: "#2596be",
								borderColor: "#2596be",
								color: "white",
							}}
							type="submit"
						>
							{product ? "Update Product" : "+ Add Product"}
						</Button>
					</Form>
				</Container>
			</div>
		</>
	);
}
