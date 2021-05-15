import React from "react";
import Teams from "../Sports";
import ViewTeam from "./ViewTeam";
import AddTeam from "./AddTeam";
import THeader from "../teams/THeader";
import Footer from "../Footer";

const Team = () => {

    
    return (
        <div className="card text-center" style={{border: "none"}}>       
       <THeader />     
       <AddTeam />
        <div className="container">
            <div className="row">
            { 
                Teams.map(
                    (team) => <ViewTeam key={team.id} tname={team.name} pname={team.player.map(
                        (item) => {
                            return (
                            <span className="list-group-item" key={item.pid}>
                                {item.pname} 
                                <button className="btn btn-danger">
                                  <i className="fa fa-trash float-right" aria-hidden="true"></i>
                                </button>
                            </span>
                            );
                            } 
                         )
                        }/>
                      )
                    }
            </div>            
        </div>      
       <Footer />
    </div>
    );
}

export default Team;