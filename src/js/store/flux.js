const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: 'https://playground.4geeks.com/contact/agendas',
			//se crea asi, y se agrega en base a la lista que me tiran del otro lao'
			contacts: []
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			getAllContacts: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/Daniel_Perdomo/contacts`)
					let data = await response.json()

					if(response.ok){
						setStore(data)
					} else {
						console.log("se crea la agenda")
						createAgenda();
					}

				} catch(error) {
					console.log("Error trying to bring back the info: ", error)
				}
			},
			createAgenda: async() => {
				try {
					let response = await fetch(`{$getStore().urlBase}/Daniel_Perdomo`, {
						method: "POST"
					})
				if(response.ok){
					getAllContacts();
				}} catch(error) {
					console.log(`Error en la creacion de la agenda: ${error}`)
				}
			},
			createContact: async(contactData, id) => {
				try {
					let response = await fetch(`{$getStore().urlBase}/Daniel_Perdomo/contacts${id}`, {
						method: "POST",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contactData)
					})

				if(response.ok) {
					let data = await response.json();
					setStore(data)
				} else {
					console.log("Failed to create contact, damn boy!", response.statusText);
				}

				} catch(error) {
					console.log(error, "....This isnt working out!")
				}
			}
		}
	};
};

export default getState;
