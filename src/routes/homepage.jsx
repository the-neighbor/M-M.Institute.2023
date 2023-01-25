import {Card, Col, Container, Row } from 'react-bootstrap';
import Post from '../components/post';
import Profile from '../components/profile';

export default function HomePage () {
    const demoPost = {
        title: "This is a test post",
        author: "testuser",
        image: "https://picsum.photos/500/300",
        body: "test body"
    }
    const demoProfile = {
        username: "testuser",
        profile: {
            displayname: "Test User",
            bio: "This is a test user",
            image: ""
        }
    }

    return (
        <div className="home-page">
            <div className="p-5 bg-dark text-white jumbotron">
                <Container>
                    <h1>M-M Social</h1>
                    <h2>Join the Conversation</h2>
                </Container>
            </div>
            <Container className="home-page-content p-5 bg-white border">
            <main>
                <section>
                    <Row>
                        <Col>
                            <h2>What is M-M Social?</h2>
                            <p>M-M Social is a social media platform made possible by the members of the M-M Institute. It provides a common forum for students, staff, and other members of the community to socialize, share, and promote original ideas and content.</p>
                        </Col>
                        <Col>
                            <Post {...demoPost}/>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row>
                        <Col>
                            <Profile {...demoProfile}/>
                        </Col>
                        <Col>
                            <h2>How do I use M-M Social?</h2>
                            <p>It's easy! Just register an account and start posting! You can also follow other users to see their posts on your feed.</p>
                        </Col>
                    </Row>

                </section>
            </main>
        </Container>
        </div>
        
    );
}