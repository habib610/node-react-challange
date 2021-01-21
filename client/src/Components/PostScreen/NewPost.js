import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
const NewPost = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [postMessage, setPostMessage] = useState("");
  const handleSubmit = (e) => {
    // later
    e.preventDefault();
 
    axios.post("/api/articles/post", { title, details })
    .then((res) => {
        console.log(res)
      setPostMessage(res.data.message);
    });

    e.reset();
  };
  return (
    <div className="container">
      {postMessage && (
        <div className="row justify-content-center">
          <div className="clo-6">
            <Alert variant="success block">{postMessage}</Alert>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-center my-5">
        <div className="col-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter title"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Post Details</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Enter details"
              />
            </Form.Group>

            <button className="btn btn-info" type="submit">
              Create new post
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
