import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeRow = ({ user, setModal }) => {



    return (
        <tr >
            <th>{1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.designation}</td>
            <td>{user.role}</td>
            <td>
                <div className='flex gap-4'>
                    <Link to='/dashboard/update-employee'><button className='btn btn-accent btn-sm'>Update</button></Link>
                    <label onClick={() => setModal(user)} for="my-modal-6" className='btn btn-error btn-sm'>Delete</label>
                </div>
            </td>
        </tr>

    );
};

export default EmployeeRow;