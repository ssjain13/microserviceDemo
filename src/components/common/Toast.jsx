import React from "react";
import { Toast } from "react-bootstrap";

export const CustomToast = (props) => {
  return (
    <Toast
      onClose={props.handleClose}
      show={props.status}
      style={{ width: "17rem" }}
      delay={5000}
      bg="success"
    >
      <Toast.Header>{props.message}</Toast.Header>
    </Toast>
  );
};
