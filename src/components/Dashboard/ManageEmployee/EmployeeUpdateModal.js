import React from 'react';

const EmployeeUpdateModal = ({ user, setUpdateModal }) => {



    const handleUserUpdate = (event) => {

        event.preventDefault();

        const id = event.target.id.value;
        const name = event.target.name.value;
        const designation = event.target.designation.value;
        const role = event.target.role.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;

        const updatedUser = {
            id,
            name,
            designation,
            role,
            phone,
            address
        }
        console.log(updatedUser)

        setUpdateModal(null);
    }

    return (
        <div>
            <input type="checkbox" id="employee-update-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="employee-update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Update Employee Information</h3>
                    <p class="py-4 text-accent font-bold">Email: {user.email}</p>

                    <form onSubmit={handleUserUpdate}>
                        <div>
                            <div className='flex gap-4'>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Employee ID</span>
                                    </label>
                                    <input type="number" name='id' placeholder={`${user.employeeId || 'Employee ID'}`} class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Employee Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder={`${user.name || 'Full Name'}`} class="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Designation</span>
                                    </label>
                                    <input type="text" name='designation' placeholder={`${user.designation || 'Designation'}`} class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Role</span>
                                    </label>
                                    <select name='role' class="select select-bordered">
                                        <option disabled selected>{`${user.role || 'Pick One'}`}</option>
                                        <option value='User'>User</option>
                                        <option>Human Resource</option>
                                        <option>Accounts</option>
                                        <option>CEO</option>
                                        <option>Director</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" name='phone' placeholder={`${user.phone || 'Phone Number'}`} class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <textarea type="text" name='address' placeholder={`${user.address || 'Address'}`} class="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <input type="submit" value="Submit" className='btn btn-primary mt-8 flex mx-auto' />
                        </div>
                    </form>
                    {/* <div class="modal-action">
                        <label for="employee-update-modal" class="btn btn-accent">No, Cancel</label>
                        <label onClick={() => handleUserUpdate(user._id)} for="employee-update-modal" class="btn btn-error">Yes, Delete</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default EmployeeUpdateModal;