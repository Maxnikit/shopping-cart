import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div data-testid="errorPage">
    <h1>Oh no, this route does not exist!</h1>
    <Link data-testid="errorPageLink" to="/shop">
      You can go back to the shop page by clicking here, though!
    </Link>
  </div>
);

export default ErrorPage;
