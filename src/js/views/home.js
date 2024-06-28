import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Card } from "../component/Card";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return(
	<div className="container">
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							<Card />
						</li>
					);
				})}
			</ul>
		</div>
);
}
