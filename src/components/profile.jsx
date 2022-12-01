import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Profile (props) {
  return (
    <div className="profile">
    <Card>
        {/* <Card.Img variant="top" src={props.headerImg} /> */}
        <Card.Body>
        <Image className="profileImage" roundedCircle={true} src={props.profileImg} />
        <Card.Title>{props.displayName}</Card.Title>
        <Card.Link href={"/profile/" + props.userName}>@{props.userName}</Card.Link>
        <Card.Text>
            {props.bio}
        </Card.Text>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Profile