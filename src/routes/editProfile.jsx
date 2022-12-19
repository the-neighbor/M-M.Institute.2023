import ProfileEditor from "../components/profileEditor";
import { Container } from 'react-bootstrap';
export default function EditProfilePage (props) {
    return (
        <Container className="edit-profile-page">
            <ProfileEditor />
        </Container>
    );
}