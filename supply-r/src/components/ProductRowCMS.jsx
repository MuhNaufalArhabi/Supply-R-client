import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import ShowImagesModalCMS from "./ShowImagesModalCMS";
import { useState } from "react";
import { deleteProduct } from "../features/productSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

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
		swal({
			title: "Are you sure?",
			text: "Once deleted, the product is removed from product list!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				dispatch(deleteProduct(product.id));
				swal("Product has been removed!", {
					icon: "success",
				});
			} else {
				swal("The product is still in your product list!");
			}
		});
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
