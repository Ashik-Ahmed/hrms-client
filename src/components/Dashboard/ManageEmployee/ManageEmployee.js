import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import EmployeeDeleteModal from './EmployeeDeleteModal';
import EmployeeRow from './EmployeeRow';
import EmployeeUpdateModal from './EmployeeUpdateModal';

const ManageEmployee = () => {

    const [modal, setModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)



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
            .then(data => {
                console.log(data);
                refetch();
            })
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
                            users.map(user => <EmployeeRow key={user._id} user={user} setModal={setModal} setUpdateModal={setUpdateModal}></EmployeeRow>)
                        }

                        {
                            modal && <EmployeeDeleteModal user={modal} handleUserDelete={handleUserDelete}></EmployeeDeleteModal>
                        }
                        {
                            updateModal && <EmployeeUpdateModal user={updateModal} setUpdateModal={setUpdateModal}></EmployeeUpdateModal>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageEmployee;