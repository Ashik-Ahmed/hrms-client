import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import login from '../../Assets/Images/login.jpg'
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';

const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();


    const [token] = useToken(user);

    // getting the redirect location from Require Auth 
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    // user sign in successful and failed notification 
    useEffect(() => {
        if (user) {
            toast.success("Successfully Logged in");
            navigate(from, { replace: true });
        }
        if (error) {
            switch (error?.code) {
                case "auth/user-not-found":
                    toast.warn("No account with this email")
                    break;
                case "auth/wrong-password":
                    toast.warn("Wrong Password")
                    break;
                default:
                    toast.warn("Login failed")
                    break;
            }
        }
    }, [user, error])


    //handle login button click
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password)


    }

    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse justify-center mx-auto">
                    <div class="text-center hidden md:block w-2/5 lg:text-left">

                        <img className='-ml-36' src={login} alt="" />
                    </div>
                    <div className='w-full md:w-2/5'>
                        <div className='text-center'>
                            <h3 className='text-5xl font-bold text-primary mb-4'>Please Login</h3>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="card flex-shrink-0 w-full shadow-2xl">
                                <div class="card-body">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" class="input input-bordered"
                                            {...register('email', {
                                                required: {
                                                    value: true,
                                                    message: 'Email is required',
                                                }
                                            })}
                                        />
                                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500 text-left">{errors.email.message}</span>}

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" class="input input-bordered"
                                            {...register('password', {
                                                required: {
                                                    value: true,
                                                    message: 'Password is required',
                                                }
                                            })}
                                        />
                                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500 text-left">{errors.password.message}</span>}

                                        <label class="label">
                                            {/* <button class="label-text-alt link link-hover">Forgot password?</button> */}
                                            <p class="label-text-alt text-right">New here? <Link to='/signup' className='text-primary font-semibold  link link-hover'>Signup now.</Link></p>
                                        </label>
                                    </div>
                                    <div class="form-control mt-6">
                                        <button class="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;