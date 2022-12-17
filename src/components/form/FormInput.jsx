import React from "react";

import "./forminput.css";

import axios from "axios";
import { useState } from "react";
import { Col, Row, Input, Typography } from "antd";

const { TextArea } = Input;

const FormInput = () => {
  const [input, setInput] = useState({
    title: "",
    body: "",
  });

  const postInput = async () => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        ...input,
      }
    );
    console.log(response.data);
    alert("POST data berhasil");
  };

  function inputTitleChange(e) {
    setInput({ ...input, title: e.target.value });
  }

  function inputBodyChange(e) {
    setInput({ ...input, body: e.target.value });
  }

  function submitInput(e) {
    e.preventDefault();

    if (input.title.trim() && input.body.trim()) {
      setInput({ ...input, title: "" });
      setInput({ ...input, body: "" });
      postInput();
    } else {
      alert("Inputan tidak boleh kosong");
    }
  }

  return (
    <Row>
      <Col className="container-form">
        <form className="form-post" onSubmit={submitInput}>
          <h2>POST data</h2>
          <Typography>Title</Typography>
          <Input
            className="input-ttl"
            name="title"
            type="text"
            value={input.title}
            onChange={inputTitleChange}
          />

          <Typography>Body</Typography>
          <TextArea
            className="input-bdy"
            name="body"
            type="text"
            value={input.body}
            onChange={inputBodyChange}
          />
          <button className="btn-form" type="submit">
            Submit
          </button>
        </form>
      </Col>
    </Row>
  );
};

export default FormInput;
