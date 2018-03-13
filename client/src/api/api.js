import axios from "axios";

export default {
    submitMessage: (contactForm) =>{
        return axios.post("/comment/", contactForm)
            .then(response =>{
                return response
            }).catch(error => {
                if(error){
                    return error
                }
            });

    }
}