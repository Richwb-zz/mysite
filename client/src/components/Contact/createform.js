import React, {Component} from "react";
import TextArea from "./fields/textarea";
import TextBox from "./fields/textbox";

class CreateForm extends Component {
      
    form () {
        // convert state.form to shorter variable for convience and cleanliness
        const form = this.props.form
        return form.map((field, index) => {
            // uses field's input property to see which input component should be created
            switch (field.input){
                case "textbox":
                    // Calls and return Textbox component
                    return <TextBox key={field.name} info={field} index={index} handleChange={this.props.handleChange} />
                case "textarea":
                    // Calls and returns TextArea component
                    return <TextArea key={field.name} info={field} index={index} handleChange={this.props.handleChange} />
                default:
                    return console.log("error");
            }
        })
    }
    
    render () {
        return (
            this.form()
        );
    }
}

export default CreateForm;