import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='bg-base-200'>

            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <label for="my-drawer-2" class="btn btn-primary mt-12 drawer-button lg:hidden">Dashboard</label>

                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='my-conveyance'>My Conveyance</Link></li>
                        <li><Link to='my-leave'>My Leave</Link></li>
                        <li><Link to='add-employee'>Add Employee</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;