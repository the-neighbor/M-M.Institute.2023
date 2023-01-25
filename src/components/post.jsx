import Card from 'react-bootstrap/Card';
import { getMe, getPost, deletePost } from '../utils/fetching';
import { useState, useEffect } from 'react';

function Post (props) {
  const [liked, setLiked] = useState(false);
  const [repost, setRepost] = useState({});
  const [isMine, setIsMine] = useState(false);
  async function fetchRepost() {
    const data = await getPost(props.repost);
    setRepost(data);
  }
  async function sendDeletePost(id) {
    await deletePost(id);
    window.location.reload();
  }
  function renderText(text) {
    let final = []
    if (text && text.length > 0)
    {
    let parts = text.split(/#\w+/g) // re is a matching regular expression
    let matches = text.match(/#\w+/g) // re is a matching regular expression
    
    for (let i = 0; i < parts.length; i++) {
        final.push(parts[i])
        if (matches && i < matches.length) {
          matches[i] = <a key={'tag' + i} href={"/tags/" + matches[i].slice(1)}>{matches[i]}</a>
          final.push(matches[i])
        }
      
    }
    }
    return final
  }
  function handleRepost(id) {
    window.location.href = "/compose?repost=" + id;
  }
  const likePost = async (id) => {
    await fetch(process.env.REACT_APP_API_URL + 'posts/like', {
      method: 'POST',
      body: JSON.stringify({ post:id }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    updateLike(id);
  };
  async function unlikePost(id) {
    await fetch(process.env.REACT_APP_API_URL + 'posts/unlike', {
      method: 'POST',
      body: JSON.stringify({ post:id }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    updateLike(id);
  };
  async function updateLike() {
    const id = props._id;
    const me = await getMe();
    if (me.profile.likes.some((post) => post._id === id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
    if (me.posts.some((post) => post._id === id)) {
      setIsMine(true);
    }
  }
    useEffect(() => {
      updateLike(props._id);
    }, [props._id, liked])
    useEffect(() => {
      if (props.repost)
      {
        fetchRepost();
      }
    }, [props])

    function renderImage(uri) {
      if (uri) {
        const completeUri = (uri.match(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig)) ? uri : process.env.REACT_APP_API_URL + uri;
        return <Card.Img variant="top" src={completeUri} />
      }
      return "";
    }

    const formattedTitle = renderText(props.title);
    const formattedContent = renderText(props.content);
    const formattedImage = renderImage(props.imageUri)
  return (
    <div className="post">
    <Card>
        {formattedImage}
        <Card.Body>
          {props.repost? <Post {...repost}/> : null}
        <Card.Title>{formattedTitle}</Card.Title>

        <Card.Text>
            {formattedContent}
        </Card.Text>
        <Card.Link href={"/profile/" + props.username}>By @{props.username}</Card.Link>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">{props.date}</small>
            {/* like button */}
            {liked ? <button className="btn btn-primary btn-sm" onClick={() => unlikePost(props._id)}>Unlike</button> : <button className="btn btn-primary btn-sm" onClick={() => likePost(props._id)}>Like</button>}
            {/* repost button */}
            <button className="btn btn-primary btn-sm" onClick={()=> handleRepost(props._id)}>Repost</button>
            {/* delete button */}
            {isMine ? <button className="btn btn-primary btn-sm" onClick={() => {sendDeletePost(props._id)}}>Delete</button> : null}
        </Card.Footer>
    </Card>
    </div>
  )
}

export default Post