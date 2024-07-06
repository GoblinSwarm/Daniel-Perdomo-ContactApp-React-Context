const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: 'https://playground.4geeks.com/contact/agendas',
			contacts: [],
			contact: {
				id: "1",
				name: "Daniel Perdomo",
				email: "daniel.perdomo@gmail.com",
				phone: "456-456456",
				address: "Cassanello 563"
			}
		},
		actions: {
			getAllContacts: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/Daniel_Perdomo/contacts`)
					let data = await response.json()

					if(response.ok){
						setStore({contacts: data.contacts})
					} else {
						console.log("se crea la agenda")
						getActions().createAgenda();
					}

				} catch(error) {
					console.log("Error trying to bring back the info: ", error)
				}
			},

			createAgenda: async() => {
				try {
					let response = await fetch(`${getStore().urlBase}/Daniel_Perdomo`, {
						method: "POST"
					})
				if(response.ok){
					getAllContacts();
				}} catch(error) {
					console.log(`Error en la creacion de la agenda: ${error}`)
				}
			},

			createContact: async(contact) => {
				try {
					let response = await fetch(`${getStore().urlBase}/Daniel_Perdomo/contacts`, {
						method: "POST",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})

				if(response.ok) {
					let data = await response.json();
					setStore(contact)
					actions().getAllContacts();
				} else {
					console.log("Failed to create contact, damn boy!", response.statusText);
				}

				} catch(error) {
					console.log(error, "....This isnt working out!")
				}
			}
			//updateContact, deleteContact;
			
		}
	};
};

export default getState;
