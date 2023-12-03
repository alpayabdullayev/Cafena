import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, date } from "yup";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import "./index.scss";
import useLocalStorage from "../../hooks/useLocalStorage";
import { BeigeButton } from "../Button";
import sendEmail from "../EmailJs/index"; 


const ReservationForm = () => {

  const [local, setLocal] = useLocalStorage("signUp");

  const SignUpSchema = object().shape({
    username: string()
      .min(3, "min 3 xarakter olmalıdır")
      .max(15, "max 15 xarakter olmalidir")
      .required("zəhmət olmasa doldurun")
      .matches(
        /^[A-Z][a-z]*$/,
        "Zəhmət Olmasa Ilk Hərf Böyük və ya düzgün daxil edin"
      ),
     tel: string()
  .matches(
    /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    "Zəhmət Olmasa Yalnız Nömrələrdən İstifadə Edin"
  )
  .required("zəhmət olmasa doldurun"),
    state: string()
      .min(3, "min 3 xarakter olmalıdır")
      .max(15, "max 20 xarakter olmalidir")
      .matches(
        /^[A-Z][a-z]*$/,
        "zəhmət olmasa Ilk Hərf Böyük və ya düzgün daxil edin"
      )
      .required("bos olmasin"),
    email: string()
      .email("zəhmət olmasa duzgun daxil edin")
      .required("zəhmət olmasa doldurun")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        "zəhmət olmasa duzgun daxil edin"
      ),
      date: date()
      .required("zəhmət olmasa doldurun")
      .min(new Date(), "Zəhmət Olmasa Keçmiş Tarixi Seçməyin"),
      time: string()
      .test('is-valid-time', 'Zəhmət Olmasa Düzgün saat formatı daxil edin', (value) => {
        return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value);
      })
      .required("zəhmət olmasa doldurun"),
  });

  const handleFormSubmit = async (values, { resetForm }) => {
    setLocal(values);


    const templateParams = {
      to_name: "Recipient Name",
      from_name: values.username,
      from_email: values.email,
      from_state: values.state,
      message: "Reservation details: " + JSON.stringify(values),
    };

    await sendEmail(templateParams);

    // Show success message
    const MySwal = withReactContent(Swal);
    await MySwal.fire({
      title: "REZERV Uğurla Başa Çatdı!",
      text: "You clicked the button!",
      icon: "success",
    });

    resetForm();
  };
  return (
    <>
      <div className="formikYupContainer">
        <div className="formik">
          <div className="reservTitle">
            <h1>RESERVATION FORM</h1>
          </div>
          <Formik
            initialValues={{
              username: "",
              tel:"",
              state: "",
              date: "",
              time: "",
              email: "",

            }}
            validationSchema={SignUpSchema}
            onSubmit={handleFormSubmit}
          >
            {({ values }) => (
              <Form>
                
                <div className="row">
                <div className="fieldContainer col-12 col-md-6 ">
                  {console.log(values)}
                  <Field
                    className="field"
                    placeholder="Enter First Name..."
                    type="text"
                    name="username"
                  />
                  <br />
                  <h6 className="errorMesage">
                    <ErrorMessage name="username" />
                  </h6>
                </div>
                <div className="fieldContainer col-12 col-md-6 ">
                  {console.log(values)}
                  <Field
                    className="field"
                    placeholder="Enter your Number..."
                    type="tel"
                    name="tel"
                  />
                  <br />
                  <h6 className="errorMesage">
                    <ErrorMessage name="tel" />
                  </h6>
                </div>

                <div className="fieldContainer col-12 col-md-6 ">
                  <Field
                    className="field"
                    placeholder="Enter State..."
                    type="text"
                    name="state"
                  />
                  <br />
                  <h6 className="errorMesage">
                    <ErrorMessage name="state" />
                  </h6>
                </div>
                <div className="fieldContainer col-12 col-md-6 ">
                  <Field
                    className="field"
                    placeholder="Enter date..."
                    type="date"
                    name="date"
                  />
                  <br />
                  <h6 className="errorMesage">
                    <ErrorMessage name="date" />
                  </h6>
                </div>
                <div className="fieldContainer col-12 col-md-6 ">
                  <Field
                    className="field"
                    placeholder="Enter time..."
                    type="time"
                    name="time"
                  />
                  <br />
                  <h6 className="errorMesage">
                    <ErrorMessage name="time" />
                  </h6>
                </div>

                <div className="fieldContainer col-12 col-md-6">
                  <Field
                    className="field"
                    placeholder="Enter Email Adress..."
                    type="text"
                    name="email"
                  />
                  <br />
                  <h6 className="errorMesage">
                    <ErrorMessage name="email" />
                  </h6>
                </div>
                </div>





              <BeigeButton className="salam" text={"SUBMIT YOUR REQUEST"} />
              </Form>
            )}
          </Formik>
        </div>
        <img className="reservimgInx" src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-1.png" alt="" />
      </div>

    </>
  );
};

export default ReservationForm;
