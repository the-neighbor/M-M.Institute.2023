import Card from 'react-bootstrap/Card';

function Post (props) {
  return (
    <div className="post">
    <Card>
        {props.image ? <Card.Img variant="top" src={props.image} /> : null}
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text>
            {props.body}
        </Card.Text>
        <Card.Link href={"/profile/" + props.author}>By @{props.author}</Card.Link>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Post