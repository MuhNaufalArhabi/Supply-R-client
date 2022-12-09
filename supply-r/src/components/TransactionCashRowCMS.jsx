import { getBuyersById, buyerSelectors } from "../features/buyerSlice";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
export default function TransactionCashRowCMS({cash, index}) {
	const dispatch = useDispatch();
	let id = cash?.BuyerId
	const buyer = useSelector((state) => buyerSelectors.selectById(state, id));
	useEffect(() => {
		dispatch(getBuyersById(id));
	}, []);
	console.log(cash)
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
				{cash.OrderProducts.map((orderProduct) => {
					return <div>{orderProduct.Product.name}</div>;
				})}
				</td>
				<td>
				{cash.OrderProducts.map((orderProduct) => {
					return <div>{orderProduct.quantity}</div>;
				})}
				</td>
				<td>
				{cash.OrderProducts.map((orderProduct) => {
					return <div>{rupiah(orderProduct.Product.price)}</div>;
				})}
				</td>
				<td>{cash.OrderProducts.map((orderProduct) => {
					return <div>{rupiah(orderProduct.totalPrice)}</div>;
				})}</td>
				<td>{new Date(cash.createdAt).toLocaleDateString()}</td>
				<td>{buyer?.owner}</td>
				<td>{cash.paymentMethod}</td>
			</tr>
		</>
	);
}
