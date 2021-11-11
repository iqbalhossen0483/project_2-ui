import React from 'react';
import { useForm } from "react-hook-form";
import CustomCss from '../CombineCss';
import useAuth from "../Firebase/useAuth"

const PlaceOrder = () => {
    const { form, input, submit } = CustomCss();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: user.displayName,
            email: user.email
        }
    });
    const onSubmit = order => {
        order.status = "pending";
        fetch("https://tourism-web-server-byrakib.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Your order is in proccess");
                    reset();
                }
            })
    };
    return (
        <div className="w-1/4 mx-auto">
            <form className={form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl text-center my-2">Please place your order</h2>
                <input className={input} type="text" placeholder="Enter your name" {...register("name")} />
                <input className={input} type="email" placeholder="Enter your email" {...register("email")} />
                <input className={input} type="text" placeholder="Where to?" {...register("location")} />
                <input className={input} type="date" {...register("date")} />
                <input className={input} type="text" placeholder="Enter your destination" {...register("destination")} />
                <input className={input} type="text" placeholder="Type (bus, airplane)" {...register("type")} />
                <input className={submit} type="submit" value="place order" />
            </form>
        </div>
    );
};

export default PlaceOrder;