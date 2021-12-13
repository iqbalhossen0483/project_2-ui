import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import CustomCss from '../CombineCss';
import useAuth from './useAuth';
import Footer from '../Footer/Footer'

const LogIn = () => {
    const { logInWidthGoogle, logInWithEmail } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state?.from.pathname || "/home";

    //css
    const { form, input, submit } = CustomCss();
    //hook form
    const { register, handleSubmit, reset } = useForm();

    //log in with email
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        logInWithEmail(email, password)
            .then(result => {
                reset();
                navigate(url, { replace: true });
            })
            .catch(err => console.log(err.message))
    };
    //log in with google
    const google = () => {
        logInWidthGoogle()
            .then(result => {
                navigate(url, { replace: true })
            })
            .catch(err => console.log(err.message))
    }
    return (
        <>
            <div className="px-4 md:px-0 md:w-1/4 mx-auto">
                <form className={form} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center text-2xl my-3">Please Log In</h2>
                    <input type="email" placeholder="Enter your email" className={input} {...register("email", { required: true })} />
                    <input type="password" placeholder="Enter a password" className={input} {...register("password", { required: true })} />
                    <input className={submit} type="submit" value="Sing in" />
                    <p className="text-2xl text-center">Or</p>
                    <div className="flex justify-center my-3">
                        <img
                            onClick={google}
                            className="w-16 border rounded"
                            src="https://i.ibb.co/5xqcLt2/download.png" alt=""
                        />
                    </div>
                    <p className="text-center">New to here? <Link className="text-purple-600" to='/sign-up'>Sign Up</Link></p>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default LogIn;