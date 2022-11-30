import { createBrowserRouter } from "react-router-dom";
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
import DashboardPageCMS from "../views/DashboardPageCMS.jsx";
import TransactionPageCMS from "../views/TransactionPageCMS.jsx";
import ProductListCMS from "../views/ProductListCMS.jsx";
import AddProductCMS from "../views/AddProductCMS.jsx";
import ProfileStorePageCMS from "../views/ProfileStorePageCMS.jsx";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register-buyer",
		element: <RegistrationBuyerPage />,
	},
	{
		path: "/register-seller",
		element: <RegistrationSellerPage />,
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
			},
			{
				path: "/profile-seller",
				element: <ProfileSellerPage />,
			},
			{
				path: "/product-detail/:id",
				element: <ProductDetail />,
			},
			{
				path: "/cart",
				element: <CartPage />,
			},
		],
	},
	{
		element: <LayoutCMS />,
		children: [
			{
				path: "/dashboard",
				element: <DashboardPageCMS />,
			},
			{
				path: "/transaction",
				element: <TransactionPageCMS />,
			},
			{
				path: "/product-list",
				element: <ProductListCMS />,
			},
			{
				path: "/add-product",
				element: <AddProductCMS />,
			},
			{
				path: "/profile-store",
				element: <ProfileStorePageCMS />,
			},
		],
	},
]);

export default router;
