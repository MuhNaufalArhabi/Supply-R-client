import router from "./router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './stores/index.js'
import { useEffect } from "react";
import socket from './stores/socket';

function App() {
	useEffect(() => {
		if(localStorage.access_token){
			socket.on('connect', () => {
				socket.emit('userConnect', {socketId: socket.id, id: +localStorage.id, role: localStorage.role });
			});
		}
	}, [])
	return (
		<>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</>
	);
}

export default App;
