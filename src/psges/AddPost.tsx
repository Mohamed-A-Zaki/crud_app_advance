import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { insretPost } from "../store/PostsSlice";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.posts);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(insretPost({ title, description }))
      .unwrap()
      .then(() => navigate("/"));
  }

  return (
    <div className="add-post mt-4">
      <Container>
        {error && <ErrorMessage error={error} />}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Add Post"}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddPost;
