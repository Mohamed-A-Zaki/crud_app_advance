import { Button, Card } from "react-bootstrap";
import { PostType } from "../store/PostsSlice";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import ConfirmDelete from "./ConfirmDelete";

const Post = ({ id, title, description }: PostType) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { isLogin } = useAppSelector((state) => state.auth);

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
          onClick={() => navigate(`/posts/${id}/edit`)}
          disabled={!isLogin}
        >
          Edit
        </Button>

        <Button
          className="btn-sm"
          variant="danger"
          onClick={() => setShow(true)}
          disabled={!isLogin}
        >
          Delete
        </Button>
        <ConfirmDelete id={id} show={show} setShow={setShow} />
      </Card.Footer>
    </Card>
  );
};

export default Post;
