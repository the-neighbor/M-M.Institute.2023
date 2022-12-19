import Card from "react-bootstrap/Card";
import { Form, Button } from "react-bootstrap";


function Register(props) {
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(process.env)
    const username = event.target.formUsername.value;
    const password = event.target.formPassword.value;
    const email = event.target.formEmail.value;
    const result = await fetch(`${process.env.REACT_APP_API_URL}users/create`, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, username, password })
    });
    const data = await result.json();
    console.log(data);
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className="loginUsername" type="email" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control className="loginUsername" type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default Register;
