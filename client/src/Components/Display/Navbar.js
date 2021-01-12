import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
const history = useHistory();
  return (
    <div className="bg-info">
      <div className="container text-white">
      <nav className="row">
       <button className="btn text-white" onClick={()=> history.push('/')} ><h4 className="px-2 p-2"> nodeChallange</h4></button>
      </nav>
    </div>
    </div>
    
  );
};

export default Navbar;
