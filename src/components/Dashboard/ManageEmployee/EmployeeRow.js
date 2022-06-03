import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeRow = ({ user, setModal, setUpdateModal }) => {



    return (
        <tr>
            <th>{1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.designation}</td>
            <td>{user.role}</td>
            <td>
                <div className='flex gap-4'>
                    <label onClick={() => setUpdateModal(user)} for="employee-update-modal" className='btn btn-accent btn-sm'>Update</label>
                    {/* <Link to='/dashboard/update-employee'><button className='btn btn-accent btn-sm'>Update</button></Link> */}
                    <label onClick={() => setModal(user)} for="employee-delete-modal" className='btn btn-error btn-sm'>Delete</label>
                </div>
            </td>
        </tr>

    );
};

export default EmployeeRow;