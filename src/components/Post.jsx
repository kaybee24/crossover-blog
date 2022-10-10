import { useState, useEffect } from "react";

export default () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts/1") // http://localhost:8080/blogs
            .then((response) => response.json())
            .then((blogs) => {
                setBlogs(blogs);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div className="blog-entries">
            <div key={blogs.id}>
                <h2>{blogs.title}</h2>
                <p>{blogs.body}</p>
                <p>Written by {blogs.author}</p>
                <button onSubmit={handleDelete}>Delete Entry</button>
            </div>
        </div>
    );
};

/* {blogs.map(blog => (
                <div key={blogs.id}>
                    <h1>{blogs.title}</h1>
                    <p>{blogs.body}</p>
                    <p>Written by {blogs.author}</p>
                    <button onSubmit={handleDelete}>Delete Entry</button>
                </div>
))} */