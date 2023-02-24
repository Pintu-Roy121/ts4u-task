import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import photo from '../../download (4).png'

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='h-screen w-11/12 mx-auto text-center text-3xl font-bold mt-5'>
            {
                user?.photoURL ?

                    <img className='rounded-full w-48 flex mx-auto border-2 border-orange-500' src={user?.photoURL} alt="" />
                    :
                    <img className='rounded-full w-48 flex mx-auto border-2' src={photo} alt="" />


            }
            <p className='text-4xl mt-4 font-bold'>Name: {user?.displayName}</p>
        </div>
    );
};

export default Profile;