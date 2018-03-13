// Create a textbox with label and error message

import React from 'react';
// label component
import Label from "./label";
// Error component
import Error from "./error";

const textArea = props => {

    // convert props to shorter variables for readability and cleanliness
    // Carries over all field info in state
    const info = props.info;
    // Index number in the array
    const index = props.index;

    return (
        <div>
            <div className="row">
                {/* Calls label component*/}
                <Label name={info.label} />
            </div>
            {
                info.error ?
                    <div className="row">
                        <Error error={info.error} />
                    </div>
                :   (null)
            }
            
            <div className="row">
                {/* Calls error component*/}
                <Error error={info.error} />
            </div>
            <div className="row">
                <div className="col-md-9">
                    <textarea rows="6" cols="50" tabIndex={index + 1} required="required" onChange={props.handleChange(this)} ></textarea>
                </div>
            </div>
        </div>
    );

}

export default textArea;