import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Card } from "../component/Card";

import "../../styles/home.css";

//rutas de conexion con la api de los contactos
// el GET https://playground.4geeks.com/contact/agendas/STcontacts con contact/agendas estamos en la rama de solo trabajar con las agendas el ultimo dato es el nombre de mi agenda 
// el post es igual a la misma url puesto que solo creamos la agenda pasandole el dato en el endpoint 


export const Home = () => {
	const { store, actions } = useContext(Context);

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
