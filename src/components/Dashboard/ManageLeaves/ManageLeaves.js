import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import LeaveRow from './LeaveRow';

const ManageLeaves = () => {

    // const [leaves, setLeaves] = useState([]);

    // fetch('http://localhost:5000/manage-leaves')
    //     .then(res => res.json())
    //     .then(data => setLeaves(data))

    const { data: leaves, isLoading } = useQuery('leaves', () => fetch('http://localhost:5000/manage-leaves', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    }).then(res => res.json()))

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
                            <th>Leave Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Total day</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leaves.map(leave => <LeaveRow key={leave._id} leave={leave} serial={leaves.indexOf(leave)}></LeaveRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageLeaves;