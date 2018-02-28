// Conact Form

import React, {Component} from 'react';
import '../global.css';
import './contact.css';


class Contact extends Component {
// Form object: Holds user input for the matching field
// Form errors: Holds error message or false if no errors for matching field
// Errors: Quick referance set to true if one of the form errors is set or false if all of the form errors are false

    state = {
        form: {
            fname: "",
            lname: "",
            email: "",
            message: ""
        },
        formErrors: {
            fnameError: false,
            lnameError: false,
            emailError: false,
            messageError: false
        },
        errors: false
    }

    // updates the state form object as user enters details
    // Makes a copy (newForm) of the state form object, updates newForm with the new input info, sets the state of form using newForm
    handleChange = (fieldName, event) => {
        let newForm = this.state.form;
        newForm[fieldName] = event.target.value;
        this.setState({form: newForm});
    };

    // Validates form on submission prior to sending the info to the server.
    checkForm = event => {
        // Stops page from refreshing
        event.preventDefault();
        
        // Copy State form Errors to variable called errors to hold updated information
        let errors = this.state.formErrors;
        // Ensure that the general errors flah is cleared
        this.setState({errors: false});

        // turn the state form object into an array then loop through it with map
        // i is the object key
        Object.keys(this.state.form).map(i => {
            
            // reset error to false to clear out any previous errors for that key
            errors[i + "Error"] = false;

            // If key is "fname" or "lname" ensure that value only contains letters.    
            if(i === "fname" || i === "lname"){
                if(!/^[a-zA-Z]+$/.test(this.state.form[i])){
                    errors[i + "Error"] = "Can only contain letters";
                    this.setState({errors: true});
                }
            }

            // If key is "email" verify that the email has all neccesary parts (<address> @ domain .<top level domain>). 
            // check for invalid characters
            if(i === "email"){
                if(!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.state.form[i])){
                    errors[i + "Error"] = "Not a valid email address";
                    this.setState({errors: true});
                }
            }
            
            // If the value of the key is empty set error message for the field and set errors to true
            if(this.state.form[i] === ""){
                errors[i + "Error"] = "Field cannot be blank";
                this.setState({errors: true});
             }

           return null;
        })
       
        // Set state for formErrors to the new values in the errors object
        this.setState({formErrors: errors});

        if(!this.state.errors){

        }
    };
    
    // Creates the form
    buildContactForm = () =>{
        // List of field ids
        const fields=["fname","lname","email"];
        // Labels for the fields
        const labels=["First Name","Last Name","Email"];
        
        return(
            <form id="contactform" className="form-margin" onSubmit={this.checkForm}>
                {/* Loop through the fields array using .map and create a label and input field with each one */}
                {fields.map((field, index) => {
                    return(
                        // Set the htmlFor with the name of the field and set the input id to the fields array name
                        <div key={field + "-spacing"} className="row fieldspacing">
                            <div key={field + "-labelcol"} className="col-md-2 offset-md-3">
                                <label key={field + "-label"} htmlFor={field} className="font-weight-bold">{labels[index]}</label>
                            </div>
                            <div key={field + "-inputcol"} className="col-md-3">
                                <input key={field + "-input"} id={field} type="text" tabIndex={index + 1} onChange={this.handleChange.bind(this, field)} />
                            </div>
                            {/* Ternary if statement to check if the errors field for that input has been set. If so display the column with the error message
                                by calling the state for that inputs error. Error class for error div displays the text in red  */}
                            {this.state.formErrors[field + "Error"] ? 
                                <div key={field + "-error"} className="col-md-3 error">{this.state.formErrors[field + "Error"]}</div>
                                : (null)
                            }
                        </div>
                    );
                })},
                {/* not in .map loop as it is a text area not an input field */}
                <div className="row">
                    <div key={"message-labelcol"} className="col-md-1 offset-md-3">
                        <label key="message-label" htmlFor="message" className="font-weight-bold">Message:</label>
                    </div>
                    {/* Ternary if statement to check if the errors field for that input has been set. If so display the column with the error message
                        by calling the state for that inputs error. Error class for error div displays the text in red */}
                    {this.state.formErrors["messageError"] ? 
                        <div key="message-error" className="col-md-3 error">{this.state.formErrors["messageError"]}</div>
                        : (null)
                    }
                </div>
                {/* When user takes finger off the key onKeyUp calls the handleChange function */}
                <div key={"message-messagerow"} className="row">
                    <div key={"message-textcol"} className="col-md-9 offset-md-3">
                        <textarea key="message-textarea" id="message" rows="6" cols="50" tabIndex="4" onKeyUp={this.handleChange.bind(this, "message")} ></textarea>
                    </div>
                </div>
                <div key={"submit-row"} className="row">
                <div key={"submit-col"} className="col-md-12 text-center">
                    <button key={"message-submit"}>Submit</button>
                </div>
                </div>
            </form>
        ); 
    
    }
     
    render(){
        return (
            <div className="container content-window">
                {/* Calls buildContactForm to create the form */}
                {this.buildContactForm()}
            </div>
        );
    };
}

export default Contact;