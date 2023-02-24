import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [pic, setImage] = useState();
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                console.log(result);

                const profile = {
                    displayName: name,
                    photoURL: pic
                }

                updateUser(profile)
                    .then(() => {
                        form.reset();
                        navigate('/')
                    })
                    .catch(e => console.log(e))

            })
            .catch(error => {
                console.log(error);
            })

        // createUser(email, password)
        //     .then(result => {
        //         const profile = {
        //             displayName: name
        //         }
        //         updateUser(profile)
        //             .then(() => {
        //                 form.reset('')
        //             })
        //             .catch(error => {
        //                 console.log(error);
        //             })
        //     })
        //     .catch(error => {
        //         setError(error.message);
        //     })

    }

    const handleOnChange = (e) => {
        const image = e.target.files[0]
        console.log(image);

        const formData = new FormData();
        formData.append('image', image)

        fetch('https://api.imgbb.com/1/upload?expiration=600&key=aec445fc4a908742f845115f2dc069ae', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setImage(data.data.url)
            })
        // console.log(pic);
    }



    return (
        <div className='my-24 bg-slate-200 w-full md:w-3/4 mx-auto p-16 md:p-24 rounded-xl'>
            <h1 className='text-4xl text-center font-bold'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='w-full md:w-3/4 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Name:</span>
                    </label>
                    <input type="name" name='name' className="input input-bordered input-info w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Email:</span>
                    </label>
                    <input type="email" name='email' className="input input-bordered input-info w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Password:</span>
                    </label>
                    <input type="password" name='password' className="input input-bordered input-info w-full" required />
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Upload Your Profile Pic</span>
                    </label>
                    <input onChange={(e) => handleOnChange(e)} type="file" name='image' />
                </div>

                <input type="submit" value='Sign up' className='btn btn-info w-full my-3' />
            </form>
            <div className='w-3/4 mx-auto'>
                <p>Already Have an Account? <Link to='/login' className='text-info hover:text-sky-600 duration-200 underline'>Log in</Link> </p>
                <div className="divider">OR</div>
                {/* <button onClick={handleGoogleLogin} className='btn text-base btn-outline btn-info w-full text-white'>Continue With Google</button> */}
            </div>

        </div >
    );
};

export default Signup;