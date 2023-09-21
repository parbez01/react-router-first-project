import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex'>
        
            <div className='w-[20%] bg-red-600 mt-20 ml-2 p-6 text-white font-bold'>
                <ul>
                    <li><Link to ="/dashboard"> Dashboard</Link></li>
                    <li><Link to ="/dashboard/profile">Profile</Link></li>
                    <li><Link to ="/dashboard/editProfile">Edit Profile</Link></li>
                </ul>
            </div>
            <div className='w-[80%] ml-20 mt-20  p-6 text-black font-bold bg-gray-500'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;