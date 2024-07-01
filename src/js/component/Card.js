import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faPhone,faEnvelope,faPen,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";
export const Card = ({contactInfo}) => {
    return(

            <div className="card">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://cdn.pixabay.com/photo/2020/04/13/20/48/dog-5040008_1280.jpg" className="img-fluid rounded-circle w-50 ms-4 "/>
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h5 className="card-title">{contactInfo.name}</h5>
                  <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex mb-3 me-auto">
                      <FontAwesomeIcon icon={faLocationDot} /><p className="ms-3">{contactInfo.address}</p>
                    </div>
                    <div className="d-flex mb-3 me-auto">
                      <FontAwesomeIcon icon={faPhone} /><p className="ms-3">{contactInfo.phone}</p>
                    </div>
                    <div className="d-flex mb-3 me-auto">
                      <FontAwesomeIcon icon={faEnvelope} /><p className="ms-3">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center mt-3">
                <button className="bg-white border border-0"> <FontAwesomeIcon icon={faPen} /> </button>
                <button className="ms-4 bg-white border border-0" > <FontAwesomeIcon icon={faTrash} /> </button>
              </div>
            </div>
          </div> 
    );
    }