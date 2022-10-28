import { useState } from "react";
import Axios from "axios";


const CreatePost = () => {
    const [userName, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const submitPost = () => {
        Axios.post('http://localhost:3001/api/create', { userName: userName, title: title, text: text })
    }

    return (
        <div className="createPost">
            <div className="uploadPost">
                <label>UserName</label>
                <input type="text" onChange={(e) => { setUsername(e.target.value); }} />
                <label>Title</label>
                <input type="text" onChange={(e) => { setTitle(e.target.value); }} />
                <label>Message</label>
                <textarea onChange={(e) => { setText(e.target.value); }} />
                <button onClick={submitPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;