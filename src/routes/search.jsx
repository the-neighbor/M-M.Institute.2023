import { Container } from "react-bootstrap";
import Search from "../components/search";


export default function SearchPage (props) {
    return (
        <Container className="search-page">
            <Search />
        </Container>
    );
}