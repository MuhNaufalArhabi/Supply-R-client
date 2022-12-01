import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function LayoutCMS() {
	return (
		<>
			<SideBar className="col-md-3" />
			<Outlet className="col-md-9" />
		</>
	);
}
