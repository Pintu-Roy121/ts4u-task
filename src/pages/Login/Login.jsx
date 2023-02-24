import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [error, setError] = useState('');
    const { signin } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin = (data) => {

        signin(data.email, data.password)
            .then(result => {
                // toast.success('Login successful');
                // setLoginEmail(data.email)
                console.log(result);
                reset()
                navigate('/')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='my-12 bg-slate-200 w-full md:w-3/4 mx-auto p-16 md:p-24 rounded-xl'>
            <h1 className='text-4xl text-center font-bold'>Login</h1>
            <form onSubmit={handleSubmit(handleLogin)} className='w-full md:w-3/4 mx-auto' >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Email:</span>
                    </label>
                    <input type="text"
                        {...register("email", {
                            required: 'Email is Required'
                        })}
                        className="input input-bordered input-info w-full" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Password:</span>
                    </label>
                    <input type="password"
                        {...register("password", {
                            required: 'Password is Required'
                        })}
                        className="input input-bordered input-info w-full" />
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
                {
                    error ?
                        <p className='text-lg text-red-600 font-semibold'>{error}</p>
                        :
                        ""
                }
                <input type="submit" value='Login' className='btn btn-info w-full my-5' />
            </form>
            <div className='w-3/4 mx-auto'>
                <p>New to doctors Porta? <Link to='/signup' className='text-info hover:text-sky-600 duration-200 underline'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                {/* <button onClick={handleGoogleLogin} className='btn text-base btn-outline btn-info w-full text-white'>Continue With Google</button> */}
            </div>

        </div >
    );
};

export default Login;