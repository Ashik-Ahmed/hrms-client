import React from 'react';
import { useForm } from 'react-hook-form';
import login from '../../Assets/Images/login.jpg'

const Login = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;
        console.log(email, password)
    }

    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse justify-center mx-auto">
                    <div class="text-center hidden md:block w-2/5 lg:text-left">

                        <img className='-ml-36' src={login} alt="" />
                    </div>
                    <div className='md:w-2/5'>
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
                                        <input type="text" placeholder="password" class="input input-bordered"
                                            {...register('password', {
                                                required: {
                                                    value: true,
                                                    message: 'Password is required',
                                                }
                                            })}
                                        />
                                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500 text-left">{errors.password.message}</span>}

                                        <label class="label">
                                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
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