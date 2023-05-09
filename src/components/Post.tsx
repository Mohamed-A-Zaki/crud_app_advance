import { Button, Card } from "react-bootstrap";
import { PostType } from "../store/PostsSlice";

const Post = ({ title, description }: PostType) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className="btn-sm ms-2">Edit</Button>
        <Button className="btn-sm ms-2" variant="danger">
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Post;
