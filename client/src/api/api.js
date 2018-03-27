// API Calls to node server

import axios from "axios";

export default {
    // processes form submission of contact page with handleResult as a callback
    submitMessage: (contactForm, handleResult) =>{
        axios.post("/api/comment",contactForm)
            .then(response =>{
                handleResult(response);
            }).catch(error => {
                if(error) handleResult(error);
            });
    }
}