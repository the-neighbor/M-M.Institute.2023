import Feed from "../components/feed";
import { Container } from "react-bootstrap";

export default function FeedPage(props) {
    return (
        <Container className="feed-page">
        <Feed />
        </Container>
    );
}