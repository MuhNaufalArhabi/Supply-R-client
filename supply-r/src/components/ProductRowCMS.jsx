import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import ShowImagesModalCMS from "./ShowImagesModalCMS";
import { useState } from "react";

export default function ProductRowCMS() {
	const [modalShow, setModalShow] = useState(false);
	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};
	return (
		<>
			<tr className="align-middle text-center">
				<td>1</td>
				<td>Danishes - Mini Cheese</td>
				<td>Pertukangan</td>
				<td style={{ textAlign: "start" }}>
					ligula sit amet eleifend pede libero quis orci nullam molestie nibh in
					lectus pellentesque at nulla suspendisse potenti cras
				</td>
				<td>{rupiah(60000)}</td>
				<td>92</td>
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
					/>
				</td>
				<td>
					<FontAwesomeIcon icon={faPen} style={{ color: "#2596be" }} />
				</td>
				<td>
					<FontAwesomeIcon icon={faTrash} style={{ color: "#e23500" }} />
				</td>
			</tr>
		</>
	);
}
