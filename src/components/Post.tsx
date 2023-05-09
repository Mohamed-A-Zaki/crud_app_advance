import { Button, Card } from "react-bootstrap";
import { PostType, deletePost } from "../store/PostsSlice";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

const Post = ({ id, title, description }: PostType) => {
  const [show, setShow] = useState(false);

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className="btn-sm ms-2">Edit</Button>
        <Button
          className="btn-sm ms-2"
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
