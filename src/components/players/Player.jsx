import React, { useState } from "react";
import ViewPlayer from "./ViewPlayer";
import Fuse from "fuse.js";
import Sports from "../Sports";
import Footer from "../Footer";

const Player = () => {

    const options = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        keys: [          
          "player.pname"
        ]
      };
    const [data, setData] = useState(Sports);
    const searchData = (pattern) => {
        if (!pattern) {
        setData(Sports);
        return;
        }

        const fuse = new Fuse(data, options);

        const result = fuse.search(pattern);
        const matches = [];
        if (!result.length) {
        setData([]);
        } else {
        result.forEach(({item}) => {
            matches.push(item);
        });
        setData(matches);
        }
    };
    

    return (           
        <div className="card text-center" style={{border: "none"}}>       
            <div className="card-body">
                <h5 className="card-title">Players</h5>
                <p className="card-text">All Player Details</p>        
                <div className="search-container">
                
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" onChange={(e) => searchData(e.target.value)} placeholder="Search Player" />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2"><i className="fa fa-search" aria-hidden="true"></i></span>
                        </div>
                    </div>
                   
                </div>    

                <div className="Container">
                <div className="row">
                    {data.map((item) => (
                            item.player.map((player) => <ViewPlayer key={player.pid} pname={player.pname} tname={item.name} />)
                        ))}
                </div>                   
                </div> 
            </div>           
           <Footer />
        </div>       
    );
}

export default Player;