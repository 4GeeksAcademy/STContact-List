const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: "",
			contacts: [],
			contactEdit:{},
			editMode: false
		},
		actions: {
			getContactslist: async () => {
				try{
					const response = await fetch("https://playground.4geeks.com/contact/agendas/stcontacts");
					if (response.status === 404) {
					 await getActions().NewContactlist();
					}
					if (response.status === 200) {
						const data = await response.json();
						setStore({contacts: data.contacts})
						setStore({agenda: data.slug})
					   }
					}
					catch (error) {
					  console.error("Error:", error);
					}
			},
			NewContactlist: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/stcontacts",
					{
						method: "POST",
				  	});
					if(response.status === 201){
						await getActions().getContactslist();
					}
				  }
				catch (error) {
				  console.error("Error:", error);
				  }
			},
			DeleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/stcontacts/contacts/${id}`,
					{
						method: "DELETE",
				  	});
					if(response.status === 204){
						const store = getStore();

						setStore({contacts: store.contacts.filter(contacts => contacts.id != id)});
					}
				  }
				catch (error) {
				  console.error("Error:", error);
				  }
			},
			SubmitFormData: async (formData)=> {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/stcontacts/contacts', {
					  method: 'POST',
					  headers: {
						'accept': 'application/json',
						'Content-Type': 'application/json'
					  },
					  body: JSON.stringify(formData)
					});
					if (response.ok){
						await getActions().getContactslist();
					}
				}
				catch (error) {
						console.error("Error:", error);
				}
			},
			UpdateContact: async (formData) => {
				console.log(formData);
				try{
				const response = await fetch( `https://playground.4geeks.com/contact/agendas/stcontacts/contacts/${formData.id}`, {
					method: 'PUT',
					headers: {
					  'accept': 'application/json',
					  'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				});
					if (response.ok){
						console.log("se crea correctamente")
						await getActions().getContactslist();
						
					}
				}
				catch (error) {
						console.error("Error:", error);
				}
			}

		}
	}
};


export default getState;
