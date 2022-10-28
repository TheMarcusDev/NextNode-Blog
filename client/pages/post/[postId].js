import { useEffect, useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";

const Post = () => {

    const router = useRouter();
    const postId = router.query;

    const [post, setPost] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/getFromId/${postId.postId}`).then((data) => {
            setPost({
                title: data.data[0].title,
                postText: data.data[0].post_text,
                userName: data.data[0].user_name
            });
        });
    }, [])

    return (
        <div className="IndividualPost">
            <div className="Post individual">
                <h1>{post.title}</h1>
                <p>{post.postText}</p>
                <h4>{post.userName}</h4>
            </div>
        </div>
    );
}

export default Post;