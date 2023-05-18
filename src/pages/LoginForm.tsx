import { Button, Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Login, setError } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

import * as Yup from "yup";
import { Formik } from "formik";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);

  return (
    <Formik
      initialValues={{
        email: "example@example.com",
        password: "asd",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      })}
      onSubmit={({ email, password }) => {
        if (email === "example@example.com" && password === "asd") {
          dispatch(Login());
          navigate("/");
        } else {
          dispatch(setError("Error in email or password"));
        }
      }}
    >
      {({ handleSubmit, getFieldProps, isSubmitting, errors, touched }) => (
        <Form
          className="login-form my-5 mx-100 m-auto shadow py-5 px-4 rounded-4 border"
          onSubmit={handleSubmit}
          style={{ width: 600 }}
        >
          <Container>
            {error && <ErrorMessage error={error} />}

            <h2 className="text-center">Login Form</h2>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...getFieldProps("email")}
                isInvalid={!!(errors.email && touched.email)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                {...getFieldProps("password")}
                isInvalid={!!(errors.password && touched.password)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
