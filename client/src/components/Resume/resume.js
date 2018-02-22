import React from 'react';
import { Document} from 'react-pdf/build/entry.webpack';
import '../global.css';

const Resume = props => {
    return(
        <div className="container content-window">
            <Document file="resume.pdf" error="failed to load file" />
        </div>
    );
}

export default Resume;