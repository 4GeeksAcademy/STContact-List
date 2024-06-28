import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faPhone,faEnvelope,faPen,faTrash } from '@fortawesome/free-solid-svg-icons';
export const Card = () => {
    return(

            <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://cdn.pixabay.com/photo/2020/11/16/18/19/crocodile-5749911_640.jpg" className="img-fluid rounded-circle"/>
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h5 className="card-title">A little Crocodile</h5>
                  <div>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <FontAwesomeIcon icon={faPhone} />
                    <FontAwesomeIcon icon={faEnvelope} />


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