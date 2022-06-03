import React from 'react';

const EmployeeDeleteModal = ({ user, handleUserDelete }) => {
    return (
        <div>
            <input type="checkbox" id="employee-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Delete user!</h3>
                    <p class="py-4">Name: {user.name}</p>
                    <div class="modal-action">
                        <label for="employee-delete-modal" class="btn btn-accent">No, Cancel</label>
                        <label onClick={() => handleUserDelete(user._id)} for="employee-delete-modal" class="btn btn-error">Yes, Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDeleteModal;