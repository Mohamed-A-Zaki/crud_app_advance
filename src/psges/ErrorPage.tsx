import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="error-page" className="text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link className="btn btn-dark btn-sm" to="/" replace>
        Go To Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
