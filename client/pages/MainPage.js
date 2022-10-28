import { useEffect, useState } from "react";
import Axios from "axios";
import { useRouter } from 'next/router';

const MainPage = () => {

    const [postList, setPostlist] = useState([]);
    const router = useRouter();

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((data) => {
            setPostlist(data.data)
        });
    }, []);

    const likePost = (id) => {
        Axios.post(`http://localhost:3001/api/like/${id}`).then((response) => {
            alert('Post Liked!')
        })
    }
    return (
        <div className="MainPage">
            <div className="PostContainer">
                {postList.map((val, key) => {
                    return (
                        <div className="Post" key={key} onClick={() => { router.push(`/post/${val.id}`) }}>
                            <h1>{val.title}</h1>
                            <p>{val.post_text.length > 500 ? val.post_text.substring(0, 500) + ' ...' : val.post_text}</p>
                            <div className="bottom">
                                <button onClick={() => { likePost(val.id) }}>Like</button>
                                <p>{val.likes}</p>
                            </div>
                            <h4>{val.user_name}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default MainPage;