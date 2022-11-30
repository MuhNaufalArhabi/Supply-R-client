import FETCH_PRODUCTS_SUCCESS from "./actions/actionType";

export const fetchProductsSuccess = (data) => {
	return {
		type: FETCH_PRODUCTS_SUCCESS,
		payload: data,
	};
};
