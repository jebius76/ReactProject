import React from "react";
import "./FormPage.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormPage = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Must be 3 characters at least")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .min(3, "Must be 3 characters at least")
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="formContainer fadeEffect">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="errorMsg fadeEffect">{formik.errors.firstName}</div>
        ) : (
          <div className="errorMsg"></div>
        )}

        <br></br>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="errorMsg">{formik.errors.lastName}</div>
        ) : <div className="errorMsg"></div>}

        <br></br>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="errorMsg">{formik.errors.email}</div>
        ) : <div className="errorMsg"></div>}

        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
