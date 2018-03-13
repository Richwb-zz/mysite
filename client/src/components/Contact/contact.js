// Conact Form

import React, {Component} from 'react';
// Create form Component
import CreateForm from "./createform";
// create submit button component
import Submit from "./fields/submit.js";
// API for comment submission
import API from "../../api/api";
// CSS files
import '../global.css';
import './contact.css';


class Contact extends Component {
    
    // form object holds information regarding each field in order to create it as well as the content the user is typing into it and error comments
    // errors is a general error flag that is switch should any of the check conditions match.
    state = {
        form: [
            {label: "First Name", name: "fname", input: "textbox", type: "text", content: "", error: ""},
            {label: "Last Name", name: "lname", input: "textbox", type: "text", content: "", error: false},
            {label: "Email Address", name: "email", input: "textbox", type: "email", content: "", error: false},
            {label: "Comment", name: "comment", input:"textarea", type: "", content: "", error: false}
        ],
        errors: false
    }

    // updates the state form object as user enters details
    // Makes a copy (newForm) of the state form object, updates newForm with the new input info, sets the state of form using newForm
    handleChange = event => {
        const index = event.target.dataset.index;
        let newForm = [...this.state.form];
        newForm[index]["content"] = event.target.value;
        this.setState({form: newForm});
    };

    // Validates form on submission prior to sending the info to the server.
    checkForm = event => {
        // Stops page from refreshing
        event.preventDefault();
        // hold state form in const called form for shorter reference
        const form = this.state.form;
        // Ensure that the general errors flag is cleared
        this.setState({errors: false});

        // Loop though the form elements and validate inputs
        for(let index in form){
            
            // Set current form index to field for legibility;
            const field = form[index];
            // reset error to false to clear out any previous errors for that field
            this.setState({[field["error"]] : false});
            
            // If content of field is empty set error message for the field and set errors to true
            if(field.content === ""){
                // If true set state of general error and field error
                field.error = "Field cannot be blank";
                this.setState({[form[index]] : field});
                this.setState({errors: true});
            }else{
            
                // If name is "fname" or "lname" ensure that content only contains letters.   
                 if(field.name === ("fname" || "lname") && !/^[a-zA-Z]+$/.test(field.content)){
                    // If true set state of general error and field error
                    field.error = "Can only contain letters";
                    this.setState({[form[index]] : field});
                    this.setState({errors: true});
                }

                // If content is "email" verify that the email has all neccesary parts (<address> @ domain .<top level domain>). 
                if(field.type === "email" && !/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(field.content)){
                    // If true set state of general error and field error
                    field.error = "Not a valid email address"
                    this.setState({[form[index]] : field});
                    this.setState({errors: true});
                }
            
            }
        };

        // If no error call API
        if(!this.state.errors){
            // API.submitMessage();
        }
    };
    
    render(){
        return (
            // Comment form
            <form key="form-container" className="container content-window" onSubmit={(event) => this.checkForm(event)}>
                {/* Calls createForm component to create the form */}
                <CreateForm key="contact-form" form={this.state.form} handleChange={() => this.handleChange.bind(this)} />
                {/* Calls Submit component to create submit button */}
                <Submit index={this.state.form.length} />
            </form>
        );
    };
}

export default Contact;