import ProductCard from "../components/ProductCard";
import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { getProducts, productSelectors } from "../features/productSlice";
export default function HomePage() {

	const dispatch = useDispatch()
	const products = useSelector(productSelectors.selectAll)
	useEffect(()=> {
		dispatch(getProducts())
		
	}, [dispatch])
	return (
		<>
			<h1>Home Page</h1>
			<ProductCard />
			{products.map((product) => {
				return <div key={product.id}>{product.name}</div>;
			})}
		</>
	);
}
