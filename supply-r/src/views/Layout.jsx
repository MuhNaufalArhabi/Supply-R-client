import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout() {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}
