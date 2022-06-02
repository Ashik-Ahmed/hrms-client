import React from 'react';
import useUser from '../../../Hooks/useUser';
import Loading from '../../Shared/Loading';

const LeaveRow = ({ leave, serial }) => {

    const [user] = useUser(leave.empId);

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
                    <button className='btn btn-error btn-sm'>Reject</button>
                </div>
            </td>
        </tr>
    );
};

export default LeaveRow;