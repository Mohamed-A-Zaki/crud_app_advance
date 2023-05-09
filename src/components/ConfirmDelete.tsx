import { Button, Modal } from "react-bootstrap";
import { useAppDispatch } from "../store/hooks";
import { deletePost } from "../store/PostsSlice";

type Props = {
  id: number;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmDelete = ({ id, show, setShow }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete Post {id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you shure you want To delete this post?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => dispatch(deletePost(id))}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDelete;
