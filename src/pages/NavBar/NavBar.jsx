import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const NavBar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                navigate('/login')
            })
    }
    return (
        <div className='bg-slate-200 text-black shadow-lg'>
            <div className="navbar w-11/12 mx-auto ">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-4xl">TS <span className='text-5xl font-bold text-red-700'>4</span> U</Link>
                </div>
                <div className="flex gap-5 text-lg font-bold">
                    <Link to='/profile'>Profile</Link>
                    {
                        user?.photoURL && <img className='w-12 h-12 object-cover rounded-full' src={user?.photoURL} alt="" />
                    }
                    <p>{user ? user.email : ''}</p>
                    {
                        user ?
                            <>
                                <p className='text-sm font-bold'>{user?.displayName ? user.displayName : 'No Name'}</p>
                                <p onClick={handleLogOut} className='btn btn-sm btn-error'>Log Out</p>
                            </>
                            :
                            <Link to='/login' className='btn btn-sm btn-success'>Log In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;