import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Navbar } from "./component/Navbar.jsx";

import { Home } from "./views/Home";
import { Contact } from "./views/Contact";
import { AddContact } from "./views/AddContact";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="./views/Home.jsx" element={<Home />} />
						<Route path="./views/Contact.jsx" element={<Contact />} />
						<Route path="./views/AddContact.jsx" element={<AddContact />} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
