import React from "react";

const THeader = () => {
    return ( 
    <div className="card-body">
        <h5 className="card-title">Teams</h5>
        <p className="card-text">All Team Details</p> 
        <button className="btn btn-primary" data-placement="top" title="Add New Team" data-toggle="modal" data-target="#exampleModal">Add Team</button>       
    </div>  );
}

export default THeader