import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useUser from '../../../Hooks/useUser';
import Loading from '../../Shared/Loading';

const LeaveRow = ({ leave, serial }) => {


    const [user] = useUser(leave.userEmail);

    if (!user) {
        return <Loading />
    }

    return (
        <tr>
            <th>{serial + 1}</th>
            <td>{user.name}</td>
            <td>{leave.type}</td>
            <td>{leave.from}</td>
            <td>{leave.to}</td>
            <td>{leave.total}</td>
            <td>{leave.status || 'Pending'}</td>
            <td>
                <div className='flex gap-4'>
                    <button className='btn btn-accent btn-sm'>Approve</button>
                    <button className='btn btn-warning btn-sm'>Reject</button>
                    <button className='btn btn-error btn-sm'>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default LeaveRow;