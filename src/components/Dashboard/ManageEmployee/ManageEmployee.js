import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import EmployeeDeleteModal from './EmployeeDeleteModal';
import EmployeeRow from './EmployeeRow';

const ManageEmployee = () => {

    const [modal, setModal] = useState(false)


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },

    }).then(res => res.json()))



    const handleUserDelete = (id) => {

        fetch(`http://localhost:5000/delete-user/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
        console.log('Delete')
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div class="overflow-x-auto p-4 rounded-md shadow-xl bg-base-100">
                <table class="table table-zebra w-full border-2">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Designation</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <EmployeeRow key={user._id} user={user} setModal={setModal}></EmployeeRow>)
                        }

                        {
                            modal && <EmployeeDeleteModal user={modal} handleUserDelete={handleUserDelete}></EmployeeDeleteModal>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageEmployee;