import { Row, Container, Col, Form } from "react-bootstrap";
import { useState } from "react";
import Post from "../components/post";
import Profile from "../components/profile";

export default function Search (props) {
    function findTags(string) {
        const regex = /#\w+/g;
        const matches = string.match(regex) || [];
        return matches;
      }
      function findUsers(string) {
        const regex = /@\w+/g;
        const matches = string.match(regex) || [];
        return matches.map(match => match.slice(1));
      }
      async function searchUsers(usernames, tags) {
        const response = await fetch((`${process.env.REACT_APP_API_URL}users/search?usernames=${usernames}&tags=${tags}`));
        const data = await response.json();
        return data;
      }
      async function searchPosts(usernames, tags) {
        const response = await fetch((`${process.env.REACT_APP_API_URL}posts/search?usernames=${usernames}&tags=${tags}`));
        const data = await response.json();
        return data;
      }
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const handleSubmit =  async (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);
        let tags = encodeURIComponent(findTags(search).join(','));
        let users = findUsers(search).join(',');
        console.log(users, tags);
        users = await searchUsers(users, tags);
        let posts = await searchPosts(users, tags);
        setUsers(users);
        setPosts(posts);
        console.log(users, posts)
    }
    return (
        <>
            <h1>Search</h1>
            <Container className="search-page">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="search">
                        <Form.Control type="text" placeholder="Search" />
                    </Form.Group>
                </Form>
                <h3>Users</h3>
                <Row className="userResults">
                {users.map((user) => {
                    return (
                        <Col xs={12} md={6} lg={4} key={user._id}>
                            <Profile key={user._id} {...user} />
                        </Col>
                    )
                    })}
                </Row>
                <Row>
                    <Col>
                    {posts.map((post) => {
                    return (
                        <Col xs={12} md={6} lg={4} key={post._id}>
                            <Post key={post._id} {...post} />;
                        </Col>
                   )
                    })}
                    </Col>
                </Row>
            </Container>
        </>
    );
}