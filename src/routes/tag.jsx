import Tag from "../components/tag";
import { Container } from "react-bootstrap";
import {useParams} from 'react-router-dom';

export default function FeedPage(props) {
    const {tag} = useParams();
    return (
        <Container className="feed-page">
        <Tag tag={tag} />
        </Container>
    );
}