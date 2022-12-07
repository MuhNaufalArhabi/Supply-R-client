import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import ShowImagesModalCMS from "./ShowImagesModalCMS";
import { useState } from "react";
import { deleteProduct } from "../features/productSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function ProductRowCMS({ product, index }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [modalShow, setModalShow] = useState(false);
	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};
	const deleteHandler = () => {
		dispatch(deleteProduct(product.id));
	};

	const handleEditProduct = () => {
		navigate("/add-product", { state: product });
	};
	return (
		<>
			<tr className="align-middle text-center">
				<td>{++index}</td>
				<td>{product.name}</td>
				<td>{product.Category?.name}</td>
				<td style={{ textAlign: "start" }}>{product.description}</td>
				<td>{rupiah(product.price)}</td>
				<td>{product.stock}</td>
				<td>
					<Button
						style={{
							backgroundColor: "#2596be",
							borderColor: "#2596be",
							color: "white",
						}}
						onClick={() => setModalShow(true)}
					>
						Show Images
					</Button>

					<ShowImagesModalCMS
						show={modalShow}
						onHide={() => setModalShow(false)}
						product={product}
					/>
				</td>
				<td>
					<FontAwesomeIcon
						icon={faPen}
						style={{ color: "#2596be" }}
						onClick={handleEditProduct}
					/>
				</td>
				<td>
					<Nav.Link onClick={deleteHandler}>
						<FontAwesomeIcon icon={faTrash} style={{ color: "#e23500" }} />
					</Nav.Link>
				</td>
			</tr>
		</>
	);
}
