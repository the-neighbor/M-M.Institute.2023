import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Profile (props) {
  console.log(props)
  return (
    <div className="profile">
    <Card>
        {/* <Card.Img variant="top" src={props.headerImg} /> */}
        <Card.Body>
        <Image className="profileImage" roundedCircle={true} src={props.profile.profileImg} />
        <Card.Title>{props.profile.displayname}</Card.Title>
        <Card.Link href={"/profile/" + props.username}>@{props.username}</Card.Link>
        <Card.Text>
            {props.profile.bio}
        </Card.Text>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Profile