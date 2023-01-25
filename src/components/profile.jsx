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

    function renderImage(uri) {
      if (uri && uri !== "undefined") {
        const completeUri = (uri.match(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig)) ? uri : process.env.REACT_APP_API_URL + uri;
        return completeUri;
      }
      return "/assets/images/profile.png";
    }

    const formattedImage = renderImage(props.profile.image);
  return (
    <div className="profile">
    <Card>
        {/* <Card.Img variant="top" src={props.headerImg} /> */}
        <Card.Body>
        <Image className="profileImage" roundedCircle={true} src={formattedImage} />
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