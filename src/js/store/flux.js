const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			agenda: "stcontacts",
			contacts: []
		},
		actions: {
			getContactslist: async () => {
				try{
					const response = await fetch("https://playground.4geeks.com/contact/agendas/stcontacts");
					if (response.status == 404) {
					 await getActions.NewContactlist();
					}
					const data = await response.json();
					setStore({contacts: data.contacts})
					}
					catch (error) {
					  console.error("Error:", error);
					}
				
			
			},
			NewContactlist: async () => {
				try {
					await fetch("https://playground.4geeks.com/contact/agendas/stcontacts",
					{
						method: "POST",
				  	}
					);
				  }
				catch (error) {
				  console.error("Error:", error);
				  }
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
