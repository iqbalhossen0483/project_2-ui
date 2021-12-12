import React from 'react';
import { useForm } from "react-hook-form";
import CustomCss from '../CombineCss';

const AddService = () => {
    const { form, input } = CustomCss();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = service => {
        fetch("https://tourism-web-server-byrakib.herokuapp.com/services", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("A service was added");
                    reset();
                }
            })
    };
    return (
        <div className="flex justify-center">
            <form className="bg-white rounded-md flex flex-col w-96 p-4 my-10" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center mb-2 text-2xl">Add a tourist place</h2>
                <input className={input} {...register("name", { required: true })} placeholder="Enter place name" />
                <input className={input} {...register("img", { required: true })} placeholder="Enter image url" />
                <textarea rows={5} className={input} {...register("description", { required: true })} placeholder="Enter description" />
                <input className="btn mt-3" type="submit" />
            </form>
        </div>
    );
};

export default AddService;