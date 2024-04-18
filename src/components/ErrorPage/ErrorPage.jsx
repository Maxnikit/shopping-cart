import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div data-testid="errorPage">
    <h1>Oh no, this route does not exist!</h1>
    <Link data-testid="errorPageLink" to="/">
      You can go back to the home page by clicking here, though!
    </Link>
  </div>
);

export default ErrorPage;
