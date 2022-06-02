import React from "react";
import Form from "react-bootstrap/Form";

export const Input = (props) => {
  return (
    <Form.Group className="mb-3" controlId={props.controlId}>
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.title}
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
        disabled={props.disabled}
      />
    </Form.Group>
  );
};
