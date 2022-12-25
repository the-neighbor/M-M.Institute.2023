import { useEffect, useState } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Post from '../components/post'
import Profile from '../components/profile'

export default function MyProfilePage (props) {
    const [status, setStatus] = useState("")
    const [userData, setUserData] = useState({});
    const [view, setView] = useState("posts");
    const api_url= process.env.REACT_APP_API_URL;

    useEffect(() => {
        async function fetchData() {
            setStatus('Loading');
            var data = await fetch(`${api_url}/me`, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            })
            var json = await data.json()
            console.log(json);
            setUserData(json);
        }
        fetchData();
    }, [])

    props = userData ? userData : {}
    let posts = userData.posts ? userData.posts : [];
    const likes = userData.profile && userData.profile.likes ? userData.profile.likes : []
    if (view === "likes") {
        posts = likes
    }
    const profile = {...props}
    return (
        <>
        <div className="Background">
        <Container className="profile-page">
            <Row>
                <Col sm={12} md={4}>
                    {profile && profile.profile ? <Profile {...profile} /> : ""}
                    <a href="/me/edit"><Button>Edit Profile</Button></a>
                </Col>
                <Col sm={12} md={8}>
                    <Row className='text-center'>
                        <Col>
                            <Button onClick={()=>{setView("posts")}}>Posts</Button>
                        </Col>
                        <Col>
                            <Button onClick={()=>{setView("likes")}}>Likes</Button>
                        </Col>
                    </Row>
                    {posts.map((post) => (<Post key={post._id} {...post} />))}
                </Col>
            </Row>  
        </Container>
        </div>
        </>
    );
}