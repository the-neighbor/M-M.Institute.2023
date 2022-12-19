import Login from '../components/login';
import { Container } from 'react-bootstrap';

export default function LoginPage (props) {
    return (
        <Container className="compose-page">
            <Login />
        </Container>
    );
}