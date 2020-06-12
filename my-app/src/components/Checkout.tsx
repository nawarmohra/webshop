import React from 'react';
//import "./MyForm.css"
import Header from "./Header";
import {Formik, Form } from 'formik'
import * as Yup from "yup";
import FormikSelect , { FormikSelectItem } from "../context/MySelectForm"
import Button from '@material-ui/core/Button' 
import FormikField from "../context/MyForm";
import Grid from "@material-ui/core/Grid";

interface FormValues {
    name: string;
    position: string;
}

const initialValues: FormValues = {
    name: '',
    position: ''
};
const positionItems: FormikSelectItem[] = [
    {
      label: "Kontort",
      value: "kontokort"
    },
    {
      label: "Faktura",
      value: "faktura"
    },
    {
      label: "Swish",
      value: "swish"
    }
  ];

  const positionItems2: FormikSelectItem[] = [
    {
      label: "PostNord",
      value: "postnord"
    },
    {
      label: "DHL",
      value: "dhl"
    },
    {
      label: "Schenker",
      value: "schenker"
    }
  ];

  
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .required("Required"),
    adress: Yup.string()
        .min(2, "Too Short!")
        .required("Required"),
    postnr: Yup.string()
        .min(2, "Too Short!")
        .required("Required"),
    phone: Yup.string()
        .min(2, "Too Short!")
        .required("Required"), 
    email: Yup.string()
        .min(2, "Too Short!")
        .required("Required"), 

    position: Yup.string().required("Required")
    

  });

export const MyForm: React.FC= () => {
    const handleSubmit = (values: FormValues): void => {
        alert(JSON.stringify(values));
    }
    
    return (
    <div >
        
        <Header />
        <Grid className="MyForm"
        xs={9}
        spacing={3}
        style={{ margin: "auto" }}
        > 
            <h1>Dina kontaktuppgifter</h1>
        <Formik 
            initialValues={initialValues}
            onSubmit = {handleSubmit}
            validationSchema ={SignupSchema}
        >
            {({dirty, isValid}) => {
                return (
                    
                    <Form>
                        <FormikField name ="name" label="Name" required />
                        <FormikField name ="adress" label="Adress" required />
                        <FormikField name ="postnr" label="Postnr och ort" required />
                        <FormikField name ="phone" label="Tel" required />
                        <FormikField name ="email" label="E-post" required />

                        <FormikSelect name="position" items={positionItems}label="Betalningssätt" required />
                        
                        <FormikSelect name="position" items={positionItems2}label="Fraktalternativ" required />

                        <Button variant="contained" color="primary" disabled={!dirty || !isValid} type = "submit">
                            Send
                        </Button>
                    </Form>
                    
                )
            }}
        </Formik>
    </Grid>
    </div>
    );
};
export default MyForm;
