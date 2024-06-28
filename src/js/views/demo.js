import React from "react";
import "../../styles/demo.css";
import { Link } from "react-router-dom";

export const Demo = () => {
	

	return (
	<div className="container">
		<h1 className="text-center">Add a new contact </h1>
		<form>
  			<div class="mb-3">
    			<label for="PlaceName" className="form-label">Full Name</label>
    			<input type="text" className="form-control" id="PlaceName" placeholder="Full Name"/>
  			</div>
  			<div className="mb-3">
    			<label for="PlaceEmail" className="form-label">Email</label>
    			<input type="email" className="form-control" id="PlaceEmail" placeholder="Enter Email"/>
  			</div>
			<div className="mb-3">
    			<label for="PlaceEmail" className="form-label">Phone</label>
    			<input type="tel" className="form-control" id="PlaceEmail" placeholder="Enter Phone"/>
  			</div>
			<div className="mb-3">
    			<label for="PlaceEmail" className="form-label">Addres</label>
    			<input type="text" className="form-control" id="PlaceEmail" placeholder="Enter Addres"/>
  			</div>
			<div className="d-grid gap-2">
  			<button type="submit" className="btn btn-primary">Save</button>
			</div>
		</form>
		<Link to="/">
				<a>or get back to contacts</a>
		</Link>
	</div>
	);
};
