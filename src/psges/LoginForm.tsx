import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Login, setError } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

const LoginForm = () => {
  const [email, setEmail] = useState("example@example.com");
  const [password, setPassword] = useState("asd");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email === "example@example.com" && password === "asd") {
      dispatch(Login());
      navigate("/");
    } else {
      dispatch(setError("Error in email or password"));
    }
  }

  return (
    <Form className="mt-3" onSubmit={handleSubmit}>
      <Container>
        {error && <ErrorMessage error={error} />}

        <h2 className="text-center">Login Form</h2>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Container>
    </Form>
  );
};

export default LoginForm;
