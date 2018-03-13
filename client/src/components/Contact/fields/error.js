import React from "react";
import '../contact.css';

const error = props => {
  
    return(
        <div className="col-md-3 error">{props.error}</div>
    )
}

export default error;