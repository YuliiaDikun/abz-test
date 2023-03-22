import React, { useEffect, useState } from "react";
import { getPositions } from "../../services/abzAPI";
import { useFormik } from 'formik';

const Form = () => {
  const [position, setPosition] = useState([]);

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



 
  
  return (
    <section className="form_section">
      <div className="container">
        <h2 className="title">Working with POST request</h2>
      </div>

    </section>
  );
};

export default Form;
