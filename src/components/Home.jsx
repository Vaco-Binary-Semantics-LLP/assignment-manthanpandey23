import React from "react";
import Footer from "./Footer";

const Home= () => {
    return (
      <div className="card text-center" style={{border: "none"}}>
       
        <div className="card-body">
          <h5 className="card-title">Sports League</h5>
          <p className="card-text">Assignment</p>
          <a href="/team" className="btn btn-primary mr-4">Teams</a>
          <a href="/player" className="btn btn-success">Players</a>
        </div>
        <Footer />
    </div>
   
  );
}

export default Home;