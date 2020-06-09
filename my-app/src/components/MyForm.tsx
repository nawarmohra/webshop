import * as React from 'react';
import {TextField} from '@material-ui/core';
import {Formik, Form, Field} from 'formik';
import Button from '@material-ui/core/Button';
import { MyField } from './MyField';

interface Values{
    firstName: string;
    lastName: string;
    adress: string;
    postalCode: string;
    email: string;
}

interface Props {
    onSubmit: (values: Values) => void; //function
}

export const MyForm: React.FC<Props> = ({onSubmit}) => {
    return (
    <Formik initialValues = {{firstName: '', lastName: '', adress: '', postalCode: '', email: ''}} onSubmit = {(values) => {
        onSubmit(values)
    } } >
        { ({values}) => 
        <Form>
            <div>
                <Field name = 'firstName' placeholder='Förnamn' component={MyField}/>
            </div>
            <div>
            <Field name = 'lastName' placeholder='Efternamn' component={MyField}/>
            </div>
            <div>
             <Field name = 'adress' placeholder='Adress' component={MyField}/>
            </div>
            <div>
            <Field name = 'postalCode' placeholder='Postnr. och stad' component={MyField}/>
            </div>
            <div>
            <Field name = 'email' placeholder='E-post' component={MyField}/>
            </div>
            <Button type='submit'color="secondary" disableElevation>
                Submit
            </Button> 
            {/* <pre>
                {JSON.stringify(values, null, 2)}
            </pre> */}
         </Form>
    }</Formik>);
    
};