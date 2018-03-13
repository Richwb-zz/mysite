// Creates a submit button

import React from "react";

const Submit = props => {
    return(
        <div className="row">
            <button type="submit" tabIndex={props.index}>Submit</button>
        </div>
    )
}

export default Submit;