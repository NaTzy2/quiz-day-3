import React from "react";

import "./formpatch.css";

import axios from "axios";
import { useState } from "react";
import { Col, Row, Input, Typography } from "antd";

const { TextArea } = Input;

const Formpatch = () => {
  const [edit, setEdit] = useState({
    title: "",
    body: "",
  });

  const patchInput = async () => {
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        ...edit,
      }
    );
    console.log(response.data);
    alert("PATCH data berhasil");
  };

  function editTitleChange(e) {
    setEdit({ ...edit, title: e.target.value });
  }

  function editBodyChange(e) {
    setEdit({ ...edit, body: e.target.value });
  }

  function submitEdit(e) {
    e.preventDefault();

    if (edit.title.trim() && edit.body.trim()) {
      setEdit({ ...edit, title: "" });
      setEdit({ ...edit, body: "" });
      patchInput();
    } else {
      alert("Inputan tidak boleh kosong");
    }
  }

  return (
    <Row>
      <Col className="container-form">
        <form className="form-patch" onSubmit={submitEdit}>
          <h2>PATCH data</h2>
          <Typography>Title</Typography>
          <Input
            className="patch-ttl"
            name="title"
            type="text"
            value={edit.title}
            onChange={editTitleChange}
          />

          <Typography>Body</Typography>
          <TextArea
            className="patch-bdy"
            name="body"
            type="text"
            value={edit.body}
            onChange={editBodyChange}
          />
          <button className="btn-form" type="submit">
            Submit
          </button>
        </form>
      </Col>
    </Row>
  );
};

export default Formpatch;
