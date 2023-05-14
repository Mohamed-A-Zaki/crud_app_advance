import { Button, Card } from "react-bootstrap";
import { PostType, getPost } from "../store/PostsSlice";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ConfirmDelete from "./ConfirmDelete";
import { useAppDispatch } from "../store/hooks";

const Post = ({ id, title, description }: PostType) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>
          <Link to={`/posts/${id}`} className="text-decoration-none">
            {id} - {title}
          </Link>
        </Card.Title>

        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <Card.Footer className="d-flex gap-2">
        <Button
          className="btn-sm"
          onClick={() => {
            dispatch(getPost(id))
              .unwrap()
              .then(() => navigate(`/posts/${id}/edit`));
          }}
        >
          Edit
        </Button>
        <Button
          className="btn-sm"
          variant="danger"
          onClick={() => setShow(true)}
        >
          Delete
        </Button>
        <ConfirmDelete id={id} show={show} setShow={setShow} />
      </Card.Footer>
    </Card>
  );
};

export default Post;
