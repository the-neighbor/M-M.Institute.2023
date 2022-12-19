import Card from "react-bootstrap/Card";
import { Container, Form, Button } from "react-bootstrap";

function Compose(props) {
  function findTags(string) {
    const regex = /#\w+/g;
    const matches = string.match(regex);
    return matches || [];
  }
  async function handleSubmit(event)
  {
    event.preventDefault();
    const title = event.target.formTitle.value;
    const content = event.target.formContent.value;
    const image = event.target.formImage.files[0];
    const tags = [...(findTags(content)), ...(findTags(title))];
    console.log(tags);
    console.log(image);
    console.log(content)
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('content', content);
    formData.append('tags', tags);
    const result = await fetch(`${process.env.REACT_APP_API_URL}posts/create`, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': localStorage.getItem('token')
      },
    });
    const data = await result.json();
    window.location.replace("/me")
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Compose A Post!</Card.Title>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control className="composeTitle" type="text" placeholder="Title your post!" />
          </Form.Group>
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
