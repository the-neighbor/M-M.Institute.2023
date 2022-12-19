import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from './post';
import { Button, Container, Row, Col } from 'react-bootstrap';
import {getTag } from "../utils/fetching"

export default function Tag (props) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getTag(props.tag);
            setPosts(data);
            setLoading(false);
        };
        fetchPosts();
    }, [props.tag]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h2>#{props.tag}</h2>
        <div className="feed">
            {posts.map(post => (
                <Post key={post._id} {...post} />
            ))}
        </div>
        </Container>
    );
}