import Compose from '../components/compose';
import { Container } from 'react-bootstrap';

export default function ComposePage (props) {
    return (
        <Container className="compose-page">
            <Compose />
        </Container>
    );
}