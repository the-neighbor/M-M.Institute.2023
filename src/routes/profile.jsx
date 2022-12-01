import { Col, Row, Container } from 'react-bootstrap';
import Post from '../components/post'
import Profile from '../components/profile'

export default function ProfilePage (props) {
    props = {
        displayName: "This is a test post",
        userName: "testuser",
        headerImg: "https://picsum.photos/500/300",
        profileImg: "https://picsum.photos/200/200",
        bio: "test body"
    }
    const posts = [{
            title: "This is a test post",
            author: "testuser",
            body: "test body"
        },
        {
            title: "This is a test post",
            author: "testuser",
            image: "https://picsum.photos/500/300",
            body: "test body"
        },
        {
            title: "This is a test post",
            author: "testuser",
            image: "https://picsum.photos/500/300",
            body: "test body"
        }
    ]
    return (
        <Container className="profile-page">
            <Row>
                <Col sm={12} md={4}>
                    <Profile {...props} />
                </Col>
                <Col sm={12} md={8}>
                    {posts.map((post) => (<Post {...post} />))}
                </Col>
            </Row>
            
        </Container>
    );
}