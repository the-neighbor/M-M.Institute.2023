import { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Post from '../components/post'
import Profile from '../components/profile'
import {useParams} from 'react-router-dom';

export default function ProfilePage (props) {
    const [status, setStatus] = useState("")
    const [userData, setUserData] = useState({});

    const api_url= process.env.REACT_APP_API_URL;
    let { userName } = useParams();

    
    useEffect(() => {
        async function fetchData() {
            setStatus('Loading');
            var data = await fetch(`${api_url}users/${userName}`)
            var json = await data.json()
            console.log(json);
            setUserData(json);
        }
        fetchData();
    }, [userName])

    props = userData ? userData : {}
    const posts = userData.posts ? userData.posts : [];
    const profile = {...props}
    return (
        <>
        <div className="Background">
        <Container className="profile-page">
            <Row>
                <Col sm={12} md={4}>
                    {profile && profile.profile ? <Profile {...profile} /> : ""}
                </Col>
                <Col sm={12} md={8}>
                    {posts.map((post) => (<Post key={post._id} {...post} />))}
                </Col>
            </Row>  
        </Container>
        </div>
        </>
    );
}