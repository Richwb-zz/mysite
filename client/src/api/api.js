Axios require 'axios'

export default {
    sendcomment: (contactForm) =>{
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