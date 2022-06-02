import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateEmployee = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        const id = data.id;
        const name = data.name;
        const designation = data.designation;
        const role = data.role;
    }

    return (
        <div>
            <div class="hero bg-base-200">
                <div class="hero-content w-full">
                    <div class="card w-full shadow-2xl bg-base-100">
                        <div>
                            <h3 className='text-xl font-semibold text-secondary'>Employee Information</h3>
                        </div>
                        <div>
                            <h4>Employee Name: { }</h4>
                            <h4>Employee Email: { }</h4>
                        </div>
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='md:flex gap-12'>
                                    <div>
                                        <div className='flex gap-4'>
                                            <div class="form-control">
                                                <label class="label">
                                                    <span class="label-text">Employee ID</span>
                                                </label>
                                                <input type="number" name='id' placeholder="Employee ID" class="input input-bordered"
                                                    {...register("id", {
                                                        required: {
                                                            value: true,
                                                            message: 'ID is required',
                                                        }
                                                    })}
                                                />
                                                <label class="label">
                                                    {errors.id?.type === 'required' && <span class="label-text-alt text-red-500">{errors.id.message}</span>}

                                                </label>
                                            </div>
                                            <div class="form-control">
                                                <label class="label">
                                                    <span class="label-text">Employee Name</span>
                                                </label>
                                                <input type="text" name='name' placeholder="Employee Name" class="input input-bordered"
                                                    {...register("name", {
                                                        required: {
                                                            value: true,
                                                            message: 'Name is required',
                                                        }
                                                    })}
                                                />
                                                <label class="label">
                                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <div className='flex gap-4'>
                                            <div class="form-control">
                                                <label class="label">
                                                    <span class="label-text">Designation</span>
                                                </label>
                                                <input type="text" name='designation' placeholder="Designation" class="input input-bordered"
                                                    {...register("designation", {
                                                        required: {
                                                            value: true,
                                                            message: 'Designation is required',
                                                        }
                                                    })}
                                                />
                                                {errors.designation?.type === 'required' && <span class="label-text-alt text-red-500">{errors.designation.message}</span>}

                                            </div>
                                            <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                    <span class="label-text">Role</span>
                                                </label>
                                                <select name='role' class="select select-bordered"
                                                    {...register("role", {
                                                        required: {
                                                            value: true,
                                                            message: 'Role is required',
                                                        }
                                                    })}
                                                >
                                                    <option disabled selected>Pick one</option>
                                                    <option value='User'>User</option>
                                                    <option>Human Resource</option>
                                                    <option>Accounts</option>
                                                    <option>CEO</option>
                                                    <option>Director</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-control mt-6">
                                    <input className='btn btn-primary w-1/2 mx-auto' type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployee;