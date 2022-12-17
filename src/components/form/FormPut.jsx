import React from "react";

import "./formput.css";

import axios from "axios";
import { useState } from "react";
import { Col, Row, Input, Typography } from "antd";

const FormPut = () => {
  const [put, setPut] = useState({
    title: "",
  });

  const putData = async () => {
    const response = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        ...put,
      }
    );
    console.log(response.data);
    alert("PUT data berhasil");
  };

  function putTitleChange(e) {
    setPut({ ...put, title: e.target.value });
  }

  function submitPut(e) {
    e.preventDefault();

    if (put.title.trim()) {
      setPut({ ...put, title: "" });
      putData();
    } else {
      alert("inputan tidak boleh kosong");
    }
  }

  return (
    <Row>
      <Col className="container-form">
        <form className="form-put" onSubmit={submitPut}>
          <h2>PUT data</h2>
          <Typography>Title</Typography>
          <Input
            className="put-ttl"
            name="title"
            type="text"
            value={put.title}
            onChange={putTitleChange}
          />
          <button className="btn-form" type="submit">
            Submit
          </button>
        </form>
      </Col>
    </Row>
  );
};

export default FormPut;
