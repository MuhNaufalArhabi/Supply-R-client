import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faFacebook,
	faTwitter,
	faLinkedin,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<>
			<section className="">
				{/* Footer */}
				<footer
					className=" text-white text-center text-md-start"
					style={{
						backgroundColor: "#2596be",

						color: "white",
					}}
				>
					{/* Grid container */}
					<div className="container p-4">
						{/*Grid row*/}
						<div className="row">
							{/*Grid column*/}
							<div className="col-lg-6 col-md-12 mb-4 mb-md-0">
								<h5 className="text-uppercase">
									<b>ABOUT SUPPLY - R</b>
								</h5>
								<p>
									Established in 2022, SUPPLY-R is a platform with the sole
									purpose of connecting between established companies(buyers)
									who are searching for distributors to meet their demands and
									UMKM(sellers) who are readily to supply established companies
									with their goods. SUPPLY-R provides easy, safe, and fast
									transaction experience supported by Midtrans payment gateway
									to ensure all UMKM and established companies to grow and
									finally help our country economic growth.
								</p>
							</div>
							{/*Grid column*/}
							{/*Grid column*/}
							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								{/* <h5 className="text-uppercase">
									<b>Social Media</b>
								</h5>
								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white">
											Twitter
										</a>
									</li>
									<li>
										<a href="#!" className="text-white">
											Instagram
										</a>
									</li>
								</ul> */}
							</div>
							{/*Grid column*/}
							{/*Grid column*/}
							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase mb-2">
									<b>Follow Us</b>
								</h5>
								<div
									style={{
										flexDirection: "row",
										display: "flex",
										alignItems: "center",
										gap: "10px",
									}}
								>
									<FontAwesomeIcon
										className="col-1"
										icon={faInstagram}
										style={{
											color: "white",
										}}
									/>
									<div className="col-11">Instagram</div>
								</div>

								<div
									style={{
										flexDirection: "row",
										display: "flex",
										alignItems: "center",
										gap: "10px",
									}}
								>
									<FontAwesomeIcon
										className="col-1"
										icon={faFacebook}
										style={{
											color: "white",
										}}
									/>
									<div className="col-11">Facebook</div>
								</div>

								<div
									style={{
										flexDirection: "row",
										display: "flex",
										alignItems: "center",
										gap: "10px",
									}}
								>
									<FontAwesomeIcon
										className="col-1"
										icon={faTwitter}
										style={{
											color: "white",
										}}
									/>
									<div className="col-11">Twitter</div>
								</div>

								<div
									style={{
										flexDirection: "row",
										display: "flex",
										alignItems: "center",
										gap: "10px",
									}}
								>
									<FontAwesomeIcon
										className="col-1"
										icon={faLinkedin}
										style={{
											color: "white",
										}}
									/>
									<div className="col-11">LinkedIn</div>
								</div>

								<div
									style={{
										flexDirection: "row",
										display: "flex",
										alignItems: "center",
										gap: "10px",
									}}
								>
									<FontAwesomeIcon
										className="col-1"
										icon={faYoutube}
										style={{
											color: "white",
										}}
									/>
									<div className="col-11">YouTube</div>
								</div>
							</div>
							{/*Grid column*/}
						</div>
						{/*Grid row*/}
					</div>
					{/* Grid container */}
					{/* Copyright */}
					<div
						className="text-center p-3"
						style={{ backgroundColor: "#204e64" }}
					>
						© 2022 Copyright: SUPPLY-R
					</div>
					{/* Copyright */}
				</footer>
				{/* Footer */}
			</section>
		</>
	);
}
