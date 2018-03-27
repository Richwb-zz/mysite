const sanitizeHTML = require('sanitize-html');

checkForm = form => {
    let formCopy = form;

    // General error flag
    let error = false;
    // Loop though the form elements and validate content property
    for(let i = 0, length = formCopy.form.length; i < length; i++){

        const field = formCopy.form[i];
        // Tracks errors for the field being verified
        let fieldError = false;
        // Trim the content
        const content = field.content.trim();
        // Set field content to that of the newly trimmed and sanitized version
        field.content = content;

        //content = sanitizeHtml(content);
  
        if(content === 0){
            fieldError = "Field cannot be blank";
            error = true;
        }else{
             if(field.name === ("fname" || "lname") && !/^[a-zA-Z]+$/.test(field.content)){
                fieldError = "Can only contain letters";
                error = true;
            }

            // If content is "email" verify that the email has all neccesary parts (<address> @ domain .<top level domain>). 
            if(field.type === "email" && !/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(field.content)){
                fieldError = "Not a valid email address"
                error = true;
            }
        
        }
        field.error = fieldError
        formCopy.form[i] = field;
    };
    
    formCopy.errors = error;
    return formCopy;
}

module.exports = checkForm;