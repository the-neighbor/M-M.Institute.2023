import React, { useState, useEffect } from 'react';
import Post from './post';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { getFeed, getGlobalFeed, getTagsFeed } from "../utils/fetching"

export default function Feed (props) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [view,setView] = useState('users');
    const fetchers = {
        users: getFeed,
        global: getGlobalFeed,
        tags: getTagsFeed
    };

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await fetchers[view]();
            setPosts(data);
            setLoading(false);
        };
        fetchPosts();
    }, [view]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Row>
                <Col><Button onClick={() => setView('users')}>Followed Users</Button></Col>
                <Col><Button onClick={() => setView('tags')}>Followed Tags</Button></Col>
                <Col><Button onClick={() => setView('global')}>Global</Button></Col>
            </Row>
        <div className="feed">
            {posts.map(post => (
                <Post key={post._id} {...post} />
            ))}
        </div>
        </Container>
    );
}