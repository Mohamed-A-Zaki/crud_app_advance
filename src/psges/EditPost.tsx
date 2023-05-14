import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import ErrorMessage from "../components/ErrorMessage";
import { editPost } from "../store/PostsSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { loading, error, post } = useAppSelector((state) => state.posts);

  const [title, setTitle] = useState(post?.title as string);
  const [description, setDescription] = useState(post?.description as string);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(editPost({ id: Number(id), post: { title, description } }))
      .unwrap()
      .then(() => navigate("/"));
  }

  return (
    <div className="edit-post mt-4">
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
            {loading ? "Loading..." : "Edit"}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditPost;
