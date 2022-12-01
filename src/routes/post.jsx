import Post from '../components/post'

export default function PostPage (props) {
    props = {
        title: "This is a test post",
        author: "testuser",
        image: "https://picsum.photos/500/300",
        body: "test body"
    }
    return (
        <div className="post-page absolute-center">
            <Post {...props} />
        </div>
    );
}