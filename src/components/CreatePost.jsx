import { useState } from "react";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        // console.log(blog)
        /*         fetch('http://localhost:8080/blogs', {
                    method: 'POST',
                    headers: "Content-Type: application/json",
                    body: JSON.strongify(blog)
                }).then(() => { */
        console.log('new blog added')
        /*         }) */
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                ></input>
                <button>Add Blog</button>
                <h2>{title}</h2>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div >
    );
}

export default CreatePost;