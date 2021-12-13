import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const [disable, setDisable] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = info => {
        if (info.description.length < 10) {
            alert("Description must be at least 100 charecter");
        }
        else {
            setDisable(true);
            fetch("https://tourism-web-server-byrakib.herokuapp.com/blogs", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(info)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert("Your blog posted");
                        reset();
                        navigate("/");
                        setDisable(false);
                    }
                })
        }
    }
    return (
        <div className='h-full flex flex-col justify-between'>
            <form className="bg-white rounded-md flex flex-col p-4 m-10" onSubmit={handleSubmit(onSubmit)}>
                <input className="focus:outline-none text-4xl py-1 px-4" {...register("title", { required: true })} placeholder="Title here" />
                <textarea className="focus:outline-none py-2 px-4 text-xl" rows={15} {...register("description", { required: true })} placeholder="Description" />
                <button
                    disabled={disable}
                    className="btn absolute top-24 right-12 z-0"
                    type="submit">
                    Post
                </button>
            </form>
        </div>
    );
};

export default AddBlog;