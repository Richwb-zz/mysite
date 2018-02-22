import React from 'react';
import '../global.css';
import './contact.css';

const Contact = props => {
    return (
        <div className="container content-window">
            <form id="contactform" className="form-margin">
                <div className="row fieldspacing">
                    <div className="col-md-2 offset-md-3">
                        <label for="fname" className="font-weight-bold">First Name:</label>
                    </div>
                    <div className="col-md-4">
                        <input id="fname" type="text" tabindex="1" required="required"/>
                    </div>
                </div>
                <div className="row fieldspacing">
                    <div className="col-md-2 offset-md-3">
                        <label for="lname" className="font-weight-bold">Last Name:</label>
                    </div>
                    <div className="col-md-4">
                        <input id="lname" type="text" tabindex="2" required="required"/>
                    </div>
                </div>
                <div className="row fieldspacing">
                    <div className="col-md-2 offset-md-3">
                        <label for="email" className="font-weight-bold">Email:</label>
                    </div>
                    <div className="col-md-4">
                        <input id="email" type="email" tabindex="3" required="required"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 offset-md-3">
                        <label for="message" className="font-weight-bold">Message:</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 offset-md-3">
                        <textarea id="message" rows="6" cols="50" tabindex="4" required="required"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <input id="contactsubmit" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;