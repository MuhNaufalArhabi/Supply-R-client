import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TransactionCashRowCMS() {
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
				<td>
					<div>Danishes - Mini Cheese</div>
					<div>Danishes - Mini Cheese</div>
				</td>
				<td>
					<div>2</div>
					<div>3</div>
				</td>
				<td>
					<div>{rupiah(30000)}</div>
					<div>{rupiah(60000)}</div>
				</td>
				<td>{rupiah(240000)}</td>
				<td>2-12-2022</td>
				<td>PT. Suka Belanja</td>
				<td>Cash</td>
			</tr>
		</>
	);
}
