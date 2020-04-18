import React from "react";
import { FaPlus } from "react-icons/fa";

import "./form.css";

export default function Form(props) {
  return (
    <form action="#" className="form" onSubmit={props.handleSubmit}>
      <input
        onChange={props.handleChange}
        type="text"
        value={props.novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
