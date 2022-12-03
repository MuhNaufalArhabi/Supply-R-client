import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import ShowImagesModalCMS from "./ShowImagesModalCMS";
import { useState, useEffect } from "react";
import { deleteProduct } from "../features/productSlice";
import { useDispatch } from "react-redux";
export default function ProductRowCMS({product, index}) {
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
	// useEffect(() => {
	// 	// console.log(product);
	// }, [])
	return (
		<>
			<tr className="align-middle text-center">
				<td>{++index}</td>
				<td>{product.name}</td>
				<td>{product.Category.name}</td>
				<td style={{ textAlign: "start" }}>
					{product.description}
				</td>
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
					<FontAwesomeIcon icon={faPen} style={{ color: "#2596be" }} />
				</td>
				<td>
				<button
				onClick={deleteHandler}
				>
					<FontAwesomeIcon icon={faTrash} style={{ color: "#e23500"}} />
				</button>
				</td>
			</tr>
		</>
	);
}
