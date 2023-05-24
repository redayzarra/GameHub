import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>Oops...</h1>
      <p>{isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected Error"}</p>
    </>
  );
};

export default ErrorPage;
