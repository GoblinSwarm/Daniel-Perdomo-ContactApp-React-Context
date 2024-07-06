import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Componentes
import Navbar from "./component/Navbar.jsx";

//Vistas
import Home from "./views/Home.jsx";
import Contact from "./views/Contact.jsx";
import AddContact from "./views/AddContact.jsx";

import injectContext from "./store/appContext.js";

//create your first component
const Layout = () => {
	
	return (
		<div>
			<BrowserRouter>
				<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="home" element={<Home />} />
						<Route path="contact" element={<Contact />} />
						<Route path="addcontact" element={<AddContact />} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
