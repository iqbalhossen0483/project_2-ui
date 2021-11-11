import React, { useEffect, useState } from 'react';
import CustomCss from '../CombineCss';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { header } = CustomCss();
    useEffect(() => {
        fetch("https://tourism-web-server-byrakib.herokuapp.com/gallery")
            .then(res => res.json())
            .then(data => {
                setGallery(data);
                setIsLoading(false)
            })
    }, []);

    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <div className="spinner"></div>
        </div>
    }
    return (
        <div className="my-16">
            <h3 className={header}>Tour Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4">
                {
                    gallery.map(img => <img key={img._id} className="h-full object-cover" src={img.img} alt="" />)
                }
            </div>
        </div>
    );
};

export default Gallery;