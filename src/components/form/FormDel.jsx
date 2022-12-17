import React from "react";

import "./formdel.css";

import axios from "axios";
import { useState } from "react";
import { Col, Row, Input, Typography } from "antd";

const FormDel = () => {
  const [del, setDel] = useState({
    id: "",
  });

  const delData = async () => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${del.id}`
    );
    console.log(response.data);
    alert("DELETE data berhasil");
  };

  function delIdChange(e) {
    setDel({ ...del, id: e.target.value });
  }

  function submitDel(e) {
    e.preventDefault();

      setDel({ ...del, id: "" });
      delData();
  }

  return (
    <Row>
      <Col className="container-form">
        <form className="form-del" onSubmit={submitDel}>
          <h2>DELETE data</h2>
          <Typography>ID</Typography>
          <Input
            className="del-ttl"
            name="title"
            type="text"
            value={del.id}
            onChange={delIdChange}
          />
          <button className="btn-form" type="submit">
            Submit
          </button>
        </form>
      </Col>
    </Row>
  );
};

export default FormDel;
