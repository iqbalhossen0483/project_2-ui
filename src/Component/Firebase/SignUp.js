import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import CustomCss from '../CombineCss';
import useAuth from './useAuth';
import Footer from "../Footer/Footer"

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const url = location.state?.from?.pathname || "/home";
    const { logInWidthGoogle, signUpWithEmail, addUserName } = useAuth();
    //css
    const { form, input, submit } = CustomCss();
    //hook form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        signUpWithEmail(email, password, name)
            .then(result => {
                addUserName(name);
                reset();
                navigate(url, { replace: true })

            })
            .catch(err => console.log(err.message))
    }
    const withGoogle = () => {
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
                    <h2 className="text-center text-2xl my-3">Please Sing Up</h2>
                    <input placeholder="Enter your name" className={input} {...register("name", { required: true })} />
                    <input type="email" placeholder="Enter your email" className={input} {...register("email", { required: true })} />
                    <input type="password" placeholder="Enter a password" className={input} {...register("password", { required: true })} />
                    <input className={submit} type="submit" value="Sing Up" />
                    <p className="text-2xl text-center">Or</p>
                    <div className="flex justify-center my-3">
                        <img
                            onClick={withGoogle}
                            className="w-16 border rounded"
                            src="https://i.ibb.co/5xqcLt2/download.png" alt=""
                        />
                    </div>
                    <p className="text-center">Already have a account? <Link className="text-purple-600" to='/sign-in'>Log In</Link></p>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default SignUp;