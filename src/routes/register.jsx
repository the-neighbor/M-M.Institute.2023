import Register from '../components/register';
import { Container } from 'react-bootstrap';

export default function RegisterPage (props) {
    return (
        <Container className="compose-page">
            <Register />
        </Container>
    );
}