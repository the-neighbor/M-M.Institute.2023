import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';

function Profile (props) {
  console.log(props)
  let [following, setFollowing] = useState(false);
  async function updateFollowing() {
    const response = await fetch(process.env.REACT_APP_API_URL + "me", {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    });
    const data = await response.json();
    console.log(data)
    if (data.profile.following.some((user) => user._id === props._id)) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  }
  async function handleFollow(event) {
    event.preventDefault();
    const response = await fetch(process.env.REACT_APP_API_URL + "users" + '/follow/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({ user: props._id })
    }
    );
    const data = await response.json();
    console.log(data);
    updateFollowing();
  }
  async function handleUnfollow(event) {
    event.preventDefault();
    const response = await fetch(process.env.REACT_APP_API_URL + "users" + '/unfollow/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({ user: props._id })
    }
    );
    const data = await response.json();
    console.log(data);
    updateFollowing();
  }
  useEffect(() => {
    updateFollowing();
    }, [props._id, following]);

  return (
    <div className="profile">
    <Card>
        {/* <Card.Img variant="top" src={props.headerImg} /> */}
        <Card.Body>
        <Image className="profileImage" roundedCircle={true} src={process.env.REACT_APP_API_URL + props.profile.image} />
        <Card.Title>{props.profile.displayname}</Card.Title>
        <Card.Link href={"/profile/" + props.username}>@{props.username}</Card.Link>
        <Card.Text>
            {props.profile.bio}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
          {
            following ? <Button onClick={handleUnfollow}>Unfollow</Button> : <Button onClick={handleFollow}>Follow</Button>
          }
          </Card.Footer>
    </Card>
    </div>
  )
}

export default Profile