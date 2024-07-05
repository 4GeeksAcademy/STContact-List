const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			agenda: "",
			contacts: []
		},
		actions: {
			getContactslist: async () => {
				try{
					const response = await fetch("https://playground.4geeks.com/contact/agendas/stcontacts");
					if (response.status === 404) {
					 await getActions().NewContactlist();
					}
					const data = await response.json();
					setStore({contacts: data.contacts})
					setStore({agenda: data.slug})
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
			},//
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


				


			}
			/*
			/*
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			//},
			//changeColor: (index, color) => {
				//get the store
				// 

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				//const demo = store.demo.map((elm, i) => {
					//if (i === index) elm.background = color;
					//return elm;
				//});
				
				//reset the global store
				//setStore({ demo: demo });
			}
		}
	};
//};

export default getState;
