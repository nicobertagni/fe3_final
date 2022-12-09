import React from "react";
import Form from "../Components/Form";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

const Contact = () => {
  const { theme } = useEstadosGlobalesContext();

  return (
    <div className={theme.color}>
      <h1>Want to know more?</h1>
      <p className="centered">Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
