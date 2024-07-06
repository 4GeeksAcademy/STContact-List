import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	store.editMode = false;
	return(
	<div className="container">
		<ul className="list-group">
			{store.contacts.map((item, index) => {
				return (
					<li
						key={index}
						className="list-group-item d-flex justify-content-between border border-0">
						<Card key={index} contactInfo={item}/>
						
					</li>
					);
			})}
		</ul>
		<p>Your current Agenda: {store.agenda}</p>
	</div>
);
}
