// Conact Form

import React, {Component} from 'react';
// Create form Component
import CreateForm from "./createform";
// create submit button component
import Submit from "./fields/submit.js";
// Modal component
import ModalHandler from "../modal/modal.js";
// API for comment submission
import API from "../../api/api";

import ReCAPTCHA from "react-google-recaptcha";

// CSS files
import '../global.css';
import './contact.css';


class Contact extends Component {
    // State can easily be converted to obtain information from a database at a later time
    // Form object holds information regarding each field in order to create it as well as the content the user is typing into it and error comments
    // Errors is a general error flag that is switch should any of the check conditions match.
    // SubmitForm is a flag to ensure that all information has updated in state prior to submiting the form.
    state = {
        formErrors: false,
        form:{
            form: [
                {label: "First Name", name: "fname", input: "textbox", type: "text", content: "", error: false},
                {label: "Last Name", name: "lname", input: "textbox", type: "text", content: "", error: false},
                {label: "Email Address", name: "email", input: "textbox", type: "email", content: "", error: false},
                {label: "Comment", name: "comment", input:"textarea", type: "", content: "", error: false}
            ],
            
            recaptcha: null
        },
        modal: {
            status: "",
            message: ""
        }
    }

    // Updates the state form object as user enters details
    // Makes a copy (newForm) of the state form object, updates newForm with the new input info, sets the state of form using newForm
    handleChange = event => {
        const index = event.target.tabIndex -1;
        let form = {...this.state.form};
        form.form[index]["content"] = event.target.value;
        this.setState({form});
    };

    // Validates form on submission prior to sending the info to the server.
    checkForm = event => {
        // Stops page from refreshing
        event.preventDefault();
        
        // Hold state form in const called form for shorter reference
        
        const form = {...this.state.form};
        let formInput = {...form.form}
        let formErrors = {...form.formErrors}
        formErrors = false;
        // Ensure that the general errors flag is cleared
        this.setState({form});
        
        if(this.state.form.recaptcha === null){
            formErrors = true;
        }

        // Loop though the form elements and validate inputs
        for(let index in formInput){
            
            // Set current form index to field for legibility;
            const field = formInput[index];
            const content = field.content.trim();
            
            // Set field content to that of the newly trimmed version
            field.content = content;
            // Reset error to false to clear out any previous errors for that field
            field.error = false;

            // If content of field is empty set error message for the field and set errors to true
            if(field.content.length === 0){
                // If true set state of general error and field error
                field.error = "Field cannot be blank";
                formErrors = true;
            }else{
            
                // If name is "fname" or "lname" ensure that content only contains letters.   
                 if(field.name === ("fname" || "lname") && !/^[a-zA-Z]+$/.test(content)){
                    // If true set state of general error and field error
                    field.error = "Can only contain letters";
                    formErrors = true;
                }

                // If content is "email" verify that the email has all neccesary parts (<address> @ domain .<top level domain>). 
                if(field.type === "email" && !/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(field.content)){
                    // If true set state of general error and field error
                    field.error = "Not a valid email address"
                    formErrors = true;
                }    
            }
        
            this.setState({form});
            
        };

        // If no error call API
        if(!formErrors){
            this.submitMessage();
        }
    };

    // sets submit from to true and processes submit message API as callback with a nested call back to handle the results
    submitMessage(){
        API.submitMessage(this.state.form, this.handleResult);
    }

    handleResult = (result) => {
        const modalInfo = this.state.modal;
        
        this.setState({result});
        
        if(result.status === 200 && !result.data.errors){
            modalInfo.status = "Submitted";
            modalInfo.message = "Your message was successfully submitted. Thank you!";

        }else{
            modalInfo.status = "An Error Occurred";
            modalInfo.message = result.response.data;
        }

        modalInfo.isModalVisible = true;
        this.setState({modal: modalInfo});
        
    }

    clearModal = () => {
        const resetModal = {
            status: "",
            message: ""
        }

        this.setState({modal: resetModal})
    }

    setRecaptcha = (response) => {
        let form = {...this.state.form};
        form.recaptcha = response
        this.setState({form});
    }

    // Checks if the submitForm state is true to safe guard against submitting the form while state changes are still queued
    // Once true proceed

    render(){
        return (
            // Comment form
            <div>
               {this.state.modal.status !== "" ? <ModalHandler info={this.state.modal} isOpen={true} close={this.clearModal} /> : (null)}
                <form key="form-container" className="container content-window" onSubmit={(event) => this.checkForm(event)}>
                    {/* Calls createForm component to create the form */}
                    <CreateForm key="contact-form" form={this.state.form.form} handleChange={() => this.handleChange.bind(this)} />
                    <ReCAPTCHA
                        ref="recaptcha"
                        sitekey="6Lf9PUcUAAAAAFIm2YgjAKUjCNO2liTqkyev2eqW"
                        onChange={response => this.setRecaptcha(response)}
                    />
                    {/* Calls Submit component to create submit button */}
                    
                    <Submit index={this.state.form.length} />
                </form>
            </div>
        );
    };
}

export default Contact;