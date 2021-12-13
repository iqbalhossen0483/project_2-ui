import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer/Footer';

const BlogDetails = () => {
    const [blog, setBlog] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://tourism-web-server-byrakib.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                setIsLoading(false);
            })
    }, [id])
    const { title, description } = blog;

    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <div className="spinner"></div>
        </div>
    }
    return (
        <div className='h-screen flex flex-col justify-between'>
            <div className='m-10 bg-white rounded-md p-5'>
                <h1 className='text-2xl font-semibold mb-2'>{title}</h1>
                <p>{description}</p>
            </div>
            <Footer />
        </div>
    );
};

export default BlogDetails;