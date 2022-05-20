import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=' text-center fixed top-0 bg-blue-500 font-bold text-lg text-white'>
            <div className='flex flex-row justify-center w-screen'>
                <Link to="/">
                    <div className=' p-4'> Home</div>
                </Link>
                <Link to="/about">
                    <div className=' p-4'>About</div>
                </Link>
                <Link to="/articles-list">
                    <div className=' p-4'>Articles</div>
                </Link>
                
            </div>
        
        </nav>
    );
};

export default Navbar;