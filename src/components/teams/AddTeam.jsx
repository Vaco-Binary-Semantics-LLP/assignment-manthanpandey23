import React from "react";

const AddTeam=() => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Team</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Team Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter team name..." />                        
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Player Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter player name..." />
                </div>    
                <div className="form-group">
                    <button className="btn btn-success">Add more player</button>
                </div>                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>                    
            </div>
            </div>
        </div>
    </div>
    );
}

export default AddTeam;