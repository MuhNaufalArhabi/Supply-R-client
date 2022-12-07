import { getBuyersById, buyerSelectors } from "../features/buyerSlice";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
export default function TransactionInstallmentRowCMS({installment, index}) {
	const dispatch = useDispatch();
	let id = installment?.BuyerId
	const buyer = useSelector((state) => buyerSelectors.selectById(state, id));
	useEffect(() => {
		dispatch(getBuyersById(id));
	}, []);
	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};
	return (
		<>
			<tr className="align-middle text-center">
				<td>{++index}</td>
				<td>
				{installment.OrderProducts.map((orderProduct) => {
					return <div>{orderProduct.Product.name}</div>;
				})}
				</td>
				<td>
				{installment.OrderProducts.map((orderProduct) => {
					return <div>{orderProduct.quantity}</div>;
				})}
				</td>
				<td>
				{installment.OrderProducts.map((orderProduct) => {
					return <div>{rupiah(orderProduct.Product.price)}</div>;
				})}
				</td>
				<td>
				{installment.OrderProducts.map((orderProduct) => {
					return <div>{rupiah(orderProduct.totalPrice)}</div>;
				})}
				</td>
				<td>{installment.createdAt}</td>
				<td>{buyer?.owner}</td>
				<td>{installment.paymentMethod}</td>
			</tr>
		</>
	);
}
