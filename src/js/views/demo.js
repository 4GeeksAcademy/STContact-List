import React, {useState,useEffect,useContext} from "react";
import "../../styles/demo.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		address: ''
	  });
	  useEffect(() => {
		if (formSubmitted) {
		  setFormData({
			name: '',
			phone: '',
			email: '',
			address: ''
		  });
		  setFormSubmitted(false);
		}
	  }, [formSubmitted]);

	  const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
		  ...prevFormData,
		  [name]: value
		}));
	  };

	  const handleSubmit = (event) => {
		event.preventDefault();
		actions.SubmitFormData(formData);
		setFormSubmitted(true);
	  };

	return (
	<div className="container">
		<h1 className="text-center">Add a new contact </h1>
		<form onSubmit={handleSubmit}>
  			<div class="mb-3">
    			<label for="PlaceName" className="form-label">Full Name</label>
    			<input type="text" name="name" onChange={handleChange} value={formData.name} className="form-control" id="PlaceName" placeholder="Full Name"/>
  			</div>
			<div className="mb-3">
    			<label for="PlaceEmail" className="form-label">Phone</label>
    			<input type="tel" name="phone" onChange={handleChange} value={formData.phone} className="form-control" id="PlaceEmail" placeholder="Enter Phone"/>
  			</div>
			  <div className="mb-3">
    			<label for="PlaceEmail" className="form-label">Email</label>
    			<input type="email" name="email" onChange={handleChange} value={formData.email} className="form-control" id="PlaceEmail" placeholder="Enter Email"/>
  			</div>
			<div className="mb-3">
    			<label for="PlaceEmail" className="form-label">Addres</label>
    			<input type="text" name="address" onChange={handleChange} value={formData.address} className="form-control" id="PlaceEmail" placeholder="Enter Addres"/>
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
