import React, { useEffect, useState, useRef } from "react";
import { getPositions } from "../../services/abzAPI";
import { useFormik, Field, FormikProvider } from "formik";
import { userSchema } from "../../utils/validationSchema";
const Form = () => {
  const [position, setPosition] = useState([]);
  const fileRef = useRef(null);
  useEffect(() => {
    const getAllPosition = async () => {
      try {
        const res = await getPositions();
        const positions = res.positions;
        setPosition(positions);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPosition();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position_id: "",
      photo: null,
    },
    onSubmit: ({ name, email, phone, position_id, photo }, { resetForm }) => {
      const user = {
        name,
        email,
        phone,
        position_id,
        photo,
      };
      console.log(user);
      resetForm();
    },
    validationSchema: userSchema,
  });

  const { handleSubmit, handleChange, values, touched, errors, setFieldValue } =
    formik;

  return (
    <section className="form_section">
      <div className="container">
        <h2 className="title">Working with POST request</h2>
        <FormikProvider value={formik}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form_wrapper">
              <input
                className={`input ${
                  errors.name && touched.name ? "error" : ""
                } `}
                type="name"
                name="name"
                id="name"
                placeholder=" "
                value={values.name}
                onChange={handleChange}
              />
              <label htmlFor="name" className="label">
                Your name
              </label>
              {errors.name && touched.name && (
                <p className="errorText">{errors.name}</p>
              )}
            </div>
            <div className="form_wrapper">
              <input
                className={`input ${
                  errors.name && touched.name ? "error" : ""
                } `}
                type="email"
                name="email"
                id="email"
                placeholder=" "
                value={values.email}
                onChange={handleChange}
              />
              <label htmlFor="email" className="label">
                E-mail
              </label>
              {errors.email && touched.email && (
                <p className="errorText">{errors.email}</p>
              )}
            </div>
            <div className="form_wrapper">
              <input
                className={`input ${
                  errors.name && touched.name ? "error" : ""
                } `}
                type="phone"
                name="phone"
                id="phone"
                placeholder=" "
                value={values.phone}
                onChange={handleChange}
              />
              <label htmlFor="phone" className="label">
                Phone
              </label>
              {!errors.phone && !touched.phone && (
                <p className="maskText">+38 (XXX) XXX - XX - XX</p>
              )}
              {errors.phone && touched.phone && (
                <p className="errorText">{errors.phone}</p>
              )}
            </div>
            <div className="form_wrapper">
              <p id="position_id" className="select_title">
                Select your position
              </p>
              <div
                role="group"
                aria-labelledby="position_id"
                className="select_group"
              >
                {position.map((p) => (
                  <label key={p.id} className="check_label">
                    <Field
                      className="check_input visually-hidden"
                      type="radio"
                      name="position_id"
                      id={p.id}
                      value={p.id}
                      onChange={() => setFieldValue("position_id", p.id)}
                    />
                    <span className="check_box"></span>                    
                    {p.name}
                  </label>
                ))}
              </div>
              {errors.position_id && touched.position_id && (
                <p>{errors.position_id}</p>
              )}
            </div>
            <div className="form_wrapper">
              <input
                ref={fileRef}
                type="file"
                hidden
                name="photo"
                accept=".jpg,.jpeg"
                onChange={(event) => {
                  setFieldValue("photo", event.currentTarget.files[0]);
                }}
              />
              <button type="button" onClick={() => fileRef.current.click()}>
                Upload
              </button>
              {values.photo ? (
                <p>Selected file: {values.photo.name}</p>
              ) : (
                <p>Upload your photo</p>
              )}
              {errors.photo && touched.photo && <p>{errors.photo}</p>}
            </div>

            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </FormikProvider>
      </div>
    </section>
  );
};

export default Form;
