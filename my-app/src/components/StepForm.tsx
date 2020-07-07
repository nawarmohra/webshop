import React, { useState, Fragment } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import AddressForm from "./AddressForm";
import PaymentMethod from "./paymentMethod";
import DeliverFrom from "./deliverFrom";
import Success from "./Success";
//import Header from "./Header";
import creditCard from "./payments/creditCard";

const emailRegex = RegExp(/^[^@]+@[^@]+\.[^@]+$/);
const phoneRegex = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/);
const zipRegex = RegExp(/^\D?(\d{3})\D?\D?(\d{0})\D?(\d{2})$/);

const labels = ["Adressuppgifter", "Betalning", "Bekräftelse"];

const StepForm = () => {
  const [steps, setSteps] = useState(0);
  // const [payment] = this.state;
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    zip: "",
    city: "",
    email: "",
    phone: "",
    shipping: "",
    payment: "",
    date: "",
  });

  const [filedError, setFieldError] = useState({
    ...fields,
  });

  const [isError, setIsError] = useState(false);

  const handleNext = () => setSteps(steps + 1);

  const handleBack = () => setSteps(steps - 1);

  // Handle fields change
  const handleChange = (input) => ({ target: { value } }) => {
    // Set values to the fields
    setFields({
      ...fields,
      [input]: value,
    });

    // Handle errors
    const formErrors = { ...filedError };
    const lengthValidate = value.length > 0 && value.length < 2;

    switch (input) {
      case "firstName":
        formErrors.firstName = lengthValidate ? "Minst två bokstäver" : "";
        break;
      case "lastName":
        formErrors.lastName = lengthValidate ? "Minst två bokstäver" : "";
        break;
      case "adress":
        formErrors.adress = lengthValidate ? "Minst två bokstäver" : "";
        break;
      case "zip":
        formErrors.zip = zipRegex.test(value)
          ? ""
          : "Ange giltligt postnr, fem siffror.";
        break;
      case "city":
        formErrors.city = lengthValidate ? "Minst två bokstäver" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Ogiltlig e-postadress";
        break;
      case "phone":
        formErrors.phone = phoneRegex.test(value) ? "" : "Ogiltlig telefonnr. ";
        break;
      // case "cardNumber":
      //   formErrors.swish = lengthValidate ? "Minst två bokstäver" : "";
      //   break;
      // break;
      // case "credit":
      //   formErrors.credit = lengthValidate
      //     ? "Minst två bokstäver"
      //     : "";
      // break;
      // case "swish":
      //   formErrors.swish = lengthValidate
      //     ? "Minst två bokstäver"
      //     : "";
      // break;
      // case "paypal":
      //   formErrors.paypal = lengthValidate
      //     ? "Minst två bokstäver"
      //     : "";
      // break;
      // case "cardNumber":
      //   formErrors.cardNumber = lengthValidate
      //     ? "Minst två bokstäver"
      //     : "";
      // break;

      //selected, credit, swish, paypal, cardNumber, cvv

      default:
        break;
    }

    // set error hook
    Object.values(formErrors).forEach((error) =>
      error.length > 0 ? setIsError(true) : setIsError(false)
    );
    // set errors hook
    setFieldError({
      ...formErrors,
    });
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <AddressForm
            handleNext={handleNext}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        );
      case 1:
        return (
          <PaymentMethod
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        );
      case 2:
        return (
          <DeliverFrom
            handleNext={handleNext}
            handleBack={handleBack}
            values={fields}
          />
        );
      default:
        break;
    }
  };
  // Handle components
  return (
    <Fragment>
      {steps === labels.length ? (
        <Success />
      ) : (
        <Fragment>
          <Stepper
            activeStep={steps}
            style={{ paddingTop: 30, paddingBottom: 50 }}
            alternativeLabel
          >
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepContent(steps)}
        </Fragment>
      )}
    </Fragment>
  );
};
export default StepForm;
