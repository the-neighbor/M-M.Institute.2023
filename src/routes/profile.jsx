import { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Post from '../components/post'
import Profile from '../components/profile'
import {useParams} from 'react-router-dom';

export default function ProfilePage (props) {
    const [status, setStatus] = useState("")
    const [userData, setUserData] = useState({});

    const api_url= "http://localhost:3001"
    let { userName } = useParams();

    useEffect(() => {
        async function fetchData() {
            setStatus('Loading');
            var data = await fetch(`${api_url}/users/${userName}`)
            var json = await data.json()
            console.log(json);
            setUserData(json);
        }
        fetchData();
    })

    props = {
        displayName: "This is a test post",
        userName: userData.username,
        headerImg: "https://picsum.photos/500/300",
        profileImg: "https://picsum.photos/200/200",
        bio: userData.profile.bio
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