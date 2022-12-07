import React, { useState, useEffect, useRef } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Form,
	Button,
	Modal,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faEnvelope,
	faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import socket from "../stores/socket";
import axios from "axios";

export default function ChatRoom({ shopId }) {
	const [show, setShow] = useState(false);
	const [messages, setMessages] = useState([]);
	const lastMessageRef = useRef(null);
	const [receiverMsg, setReceiverMsg] = useState();
	const [rooms, setRooms] = useState([]);
	const [name, setName] = useState("");

	const handleShop = async (param) => {
		if (!shopId) {
			setReceiverMsg(param);
		} else {
			setReceiverMsg(shopId);
		}
		socket.emit("newRooms", { role: localStorage.role, id: localStorage.id });
	};

	const handleClose = () => setShow(false);

	const handleShow = () => {
		handleShop();
		setShow(true);
	};

	const handleMessage = async (param, name) => {
		const { data } = await axios({
			method: "GET",
			url: "http://localhost:3001/rooms/chat/" + param,
		});
		setMessages(data);
		setName(name);
	};

	useEffect(() => {
		socket.on("messageResponse", (data) => setMessages([...messages, data]));
	}, [socket, messages]);

	useEffect(() => {
		// 👇️ scroll to bottom every time messages change
		lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	useEffect(() => {
		socket.on("newRoomResponse", (data) => {
			setRooms(data);
		});
	}, [socket, rooms]);

	return (
		<>
			<a onClick={handleShow} style={{ cursor: "pointer" }}>
				<FontAwesomeIcon
					icon={faEnvelope}
					style={{ fontSize: 30, color: "#204e64" }}
				/>
			</a>

			<Modal
				show={show}
				onHide={handleClose}
				animation={false}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<div className="chat container">
					<ChatBar
						socket={socket}
						handleShop={handleShop}
						rooms={rooms}
						handleMessage={handleMessage}
					/>
					<div className="chat_main">
						<ChatBody
							socket={socket}
							lastMessageRef={lastMessageRef}
							messages={messages}
							name={name}
						/>
						<ChatFooter socket={socket} receiverMsg={receiverMsg} />
					</div>
				</div>

				<Button
					style={{
						backgroundColor: "#2596be",
						borderColor: "#2596be",
						color: "white",
					}}
					onClick={handleClose}
				>
					Close
				</Button>
			</Modal>
		</>
	);
}
