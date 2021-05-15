import React from "react";

const ViewPlayer= (props) => {
    return (
        <div className="col-lg-4">
        <div className="card m-4" style={{width: "18rem"}}>
        <div className="card-header">
            {props.pname}
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><h2>{props.tname}</h2></li>                
        </ul>        
    </div>
    </div>
    );
}

export default ViewPlayer;