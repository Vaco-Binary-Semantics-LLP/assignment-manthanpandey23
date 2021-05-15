import React from "react";

const ViewTeam = (props) => {
    return (
        <div className="col-lg-4">
        <div className="card m-4 float-right" style={{width: "18rem"}}>
                <div className="card-header">
                    <h2>{props.tname}</h2>
                </div>
                <ul className="list-group list-group-flush">
                   <li className="list-group-item">{props.pname}</li>
                    <li className="list-group-item">
                        <button className="btn btn-success mx-4" data-toggle="tooltip" data-placement="top" title="Add Player" >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Remove Team" >
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </li>
                
                </ul>          
            </div>
    </div>
        
    );
}

export default ViewTeam;