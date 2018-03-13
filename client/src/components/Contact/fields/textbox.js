import React from "react";
// label component
import Label from "./label";
// Error component
import Error from "./error";

const textbox = props => {
    // convert props to shorter variables for readability and cleanliness
    const info = props.info;
    const index = props.index;
    
    return(
        <div className="row">
            <Label name={info.label} />
            <div className="col-md-3">
                <input id={info.name} type={info.type} tabIndex={index + 1} required="required" onChange={props.handleChange(this)} />
            </div>
            {
                info.error ?
                    <Error error={info.error} />
                : (null)
            }
        </div>
    );
}

export default textbox;