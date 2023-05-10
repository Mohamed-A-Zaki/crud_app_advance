import { Button, Modal } from "react-bootstrap";
import { useAppDispatch } from "../store/hooks";
import { deletePost } from "../store/PostsSlice";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmDelete = ({ id, show, setShow }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleClose() {
    setShow(false);
  }

  function handleDelete() {
    dispatch(deletePost(id))
      .unwrap()
      .then(() => navigate("/"));
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete Post {id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you shure you want To delete this post?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDelete;
