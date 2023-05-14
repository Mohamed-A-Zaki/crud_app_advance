import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import ErrorMessage from "../components/ErrorMessage";
import { editPost, getPost } from "../store/PostsSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();
  const { loading, error, post } = useAppSelector((state) => state.posts);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPost(Number(id)))
      .unwrap()
      .then(() => {
        setTitle(String(post?.title));
        setDescription(String(post?.description));
      });
  }, [dispatch, id, post?.description, post?.title]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const updated_post = { id: Number(id), title, description };
    dispatch(editPost(updated_post))
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
