import { useRouteError } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container className="absolute-center">
        <Card className="my-auto">
            <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            </div>
        </Card>
    </Container>
  );
}