import Card from "react-bootstrap/Card";
import { Container, Form, Button } from "react-bootstrap";

function Compose(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formContent">
            <Form.Label>Content</Form.Label>
            <Form.Control className="composeContent" as="textarea" placeholder="Write your thoughts!" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Post!
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default Compose;
