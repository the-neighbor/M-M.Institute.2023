import Card from "react-bootstrap/Card";
import { Container, Form, Button } from "react-bootstrap";

function ProfileEditor(props) {
  function findTags(string) {
    const regex = /#\w+/g;
    const matches = string.match(regex);
    return matches;
  }
  async function handleSubmit(event)
  {
    event.preventDefault();
    const bio = event.target.editBio.value;
    const birthday = event.target.editBirthday.value;
    const image = event.target.editAvatar.files[0];
    const tags = findTags(bio);
    const formData = new FormData();
    formData.append('image', image);
    formData.append('bio', bio);
    formData.append('tags', tags);
    const result = await fetch(`${process.env.REACT_APP_API_URL}users/edit`, {
      method: 'PUT',
      body: formData,
      headers: {
        'Authorization': localStorage.getItem('token')
      },
    });
    const data = await result.json();
    console.log(data);
    window.location.replace("/me")
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>Edit Profile</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="editBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" placeholder="Describe yourself here" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="editAvatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="file"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Profile
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default ProfileEditor;
