import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { insretPost } from "../store/PostsSlice";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

import * as Yup from "yup";
import { Formik } from "formik";

const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { error } = useAppSelector((state) => state.posts);
  const { isLogin } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      validationSchema={Yup.object({
        title: Yup.string().required(),
        description: Yup.string().required(),
      })}
      onSubmit={(values) => {
        dispatch(insretPost(values))
          .unwrap()
          .then(() => navigate("/"));
      }}
    >
      {({ handleSubmit, getFieldProps, errors, touched, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className="mt-4">
          <Container>
            {error && <ErrorMessage error={error} />}

            <h2 className="text-center">Add Post</h2>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                {...getFieldProps("title")}
                isInvalid={!!(errors.title && touched.title)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...getFieldProps("description")}
                isInvalid={!!(errors.description && touched.description)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Add Post"}
            </Button>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default AddPost;
