import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Field, ErrorMessage} from 'formik';
//import "./FormikField.css";

interface FormikFieldProps {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
}
const FormikField: React.FC<FormikFieldProps> = ({name, label, type = "text", required = false}) => {
    return (
    <div className="FormikField">
        <Field 
        required={required}
        as ={TextField}
        label={label}
        name={name}
        fullWidth
        helperText = {<ErrorMessage name={name} />}
        />
        {/* <TextField label={label} fullWidth/> */}

    </div>
    );
};

export default FormikField;

