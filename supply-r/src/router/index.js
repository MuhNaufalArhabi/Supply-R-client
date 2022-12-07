import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../views/Layout.jsx";
import LoginPage from "../views/LoginPage.jsx";
import RegistrationBuyerPage from "../views/RegistrationBuyerPage.jsx";
import RegistrationSellerPage from "../views/RegistrationSellerPage.jsx";
import HomePage from "../views/HomePage.jsx";
import ProfileBuyerPage from "../views/ProfileBuyerPage.jsx";
import ProfileSellerPage from "../views/ProfileSellerPage.jsx";
import ProductDetail from "../views/ProductDetail.jsx";
import CartPage from "../views/CartPage.jsx";
import LayoutCMS from "../views/LayoutCMS.jsx";
import TransactionCashPageCMS from "../views/TransactionCashPageCMS.jsx";
import TransactionInstallmentPageCMS from "../views/TransactionInstallmentPageCMS.jsx";
import ProductListCMS from "../views/ProductListCMS.jsx";
import AddProductCMS from "../views/AddProductCMS.jsx";
import ProfileStorePageCMS from "../views/ProfileStorePageCMS.jsx";
import EditProfileStorePageCMS from "../views/EditProfileStorePageCMS.jsx";
import AddStoreSosmed from "../views/AddStoreSosmed.jsx";
import NotFoundPage from "../views/NotFoundPage.jsx";


const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPage />,
		loader: () => {
			if(localStorage.access_token) {
				return redirect('/')
			}
		}
	},
	{
		path: "/register-buyer",
		element: <RegistrationBuyerPage />,
		loader: () => {
			if(localStorage.access_token) {
				return redirect('/')
			}
		}
	},
	{
		path: "/register-seller",
		element: <RegistrationSellerPage />,
		loader: () => {
			if(localStorage.access_token) {
				return redirect('/')
			}
		}
	},
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/profile-buyer",
				element: <ProfileBuyerPage />,
				loader: () => {
					if(!localStorage.access_token || localStorage.role !== 'buyer') {
						return redirect('/')
					}
				}
			},
			{
				path: "/product-detail/:id",
				element: <ProductDetail />,
			},
			{
				path: "/cart",
				element: <CartPage />,
				loader: () => {
					if(!localStorage.access_token || localStorage.role !== 'buyer') {
						return redirect('/')
					}
				}
			},
			{
				path: "/add-store",
				element: <AddStoreSosmed />,
				loader: () => {
					if(!localStorage.access_token || localStorage.role !== 'seller') {
						return redirect('/')
					}
				}
			},
        {
        path: "*",
        element: <NotFoundPage />,
      },
		],
	},
	{
		element: <LayoutCMS />,
		loader: () => {
			if(!localStorage.access_token || localStorage.role !== 'seller') {
				return redirect('/')
			}
		},
		children: [
			{
				path: "/profile-store",
				element: <ProfileStorePageCMS />,
			},
			{
				path: "/transaction-cash",
				element: <TransactionCashPageCMS />,
			},
			{
				path: "/transaction-installment",
				element: <TransactionInstallmentPageCMS />,
			},
			{
				path: "/product-list/:shopId",
				element: <ProductListCMS />,
			},
			{
				path: "/add-product",
				element: <AddProductCMS />,
			},
			{
				path: "/edit-profile-store",
				element: <EditProfileStorePageCMS />,
			},
			{
				path: "/profile-seller",
				element: <ProfileSellerPage />,
			},
		],
	},
]);

export default router;
