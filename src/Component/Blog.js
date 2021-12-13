import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://tourism-web-server-byrakib.herokuapp.com/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className='h-screen flex flex-col justify-between'>
            <div className='grid grid-cols-3 gap-5 m-7'>
                {
                    blogs.map(blog => <div
                        key={blog._id}
                        className='rounded bg-white p-4'>
                        <h1 className='text-2xl font-semibold mb-2'>{blog.title}</h1>
                        <p>{blog.description.slice(0, 150) + "..."}</p>
                        <div className='flex justify-center mt-3'>
                            <Link to={`/blogs/${blog._id}`}>
                                <button className='btn'>View full</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Blog;