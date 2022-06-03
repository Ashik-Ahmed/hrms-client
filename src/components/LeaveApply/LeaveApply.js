import { format } from 'date-fns';
import { differenceInCalendarDays, parseISO } from 'date-fns/esm';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const LeaveApply = () => {

    // const [modal, setModal] = useState(false);

    const [user] = useAuthState(auth);
    const [day, setDay] = useState(0);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handledayCount = (e) => {
        console.log(e.target.to.value)
    }

    const onSubmit = async (data) => {

        console.log("Clicked")

        const type = data.type;
        const from = format(parseISO(data.from), 'dd/MM/yyyy');
        // const from = parseISO(data.from);
        const to = format(parseISO(data.to), 'dd/MM/yyyy');
        const total = data.total;
        const reliever = data.reliever;
        const reason = data.reason;

        const application = {
            userEmail: user.email,
            type,
            from,
            to,
            total,
            reliever,
            reason
        }

        // const result = differenceInCalendarDays(to, from);
        // console.log(result);


        // send leave application to server 
        fetch('http://localhost:5000/leave-apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(application),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Leave application submitted successfully")
                }
                console.log(data)
            })

        console.log(type, from, to, total, reliever, reason)
    }

    return (
        <div className=' bg-base-200'>
            <div className='md:flex hidden'>
                <div class="card w-96     ">
                    <div class="card-body text-center">
                        <h2 class="text-3xl">15</h2>
                        <p className='bg-green-300 uppercase w-fit mx-auto px-1 '>Casual Leave</p>
                        <p>Available</p>
                    </div>
                </div>
                <div class="card w-96     ">
                    <div class="card-body text-center">
                        <h2 class="text-3xl">15</h2>
                        <p className='bg-red-300 uppercase w-fit mx-auto px-1 '>Medical Leave</p>
                        <p>Available</p>
                    </div>
                </div>
                <div class="card w-96     ">
                    <div class="card-body text-center">
                        <h2 class="text-3xl">15</h2>
                        <p className='bg-blue-300 uppercase w-fit mx-auto px-1 '>Emergency Leave</p>
                        <p>Available</p>
                    </div>
                </div>
                <div class="card w-96     ">
                    <div class="card-body text-center">
                        <h2 class="text-3xl">15</h2>
                        <p className='bg-violet-300 uppercase w-fit mx-auto px-1 '>Annual Leave</p>
                        <p>Available</p>
                    </div>
                </div>
                <div class="card w-96     ">
                    <div class="card-body text-center">
                        <h2 class="text-3xl">15</h2>
                        <p className='bg-yellow-300 uppercase w-fit mx-auto px-1 '>Maternity Leave</p>
                        <p>Available</p>
                    </div>
                </div>
            </div>


            <div className='bg-base-100 md:m-10 md:p-10 md:w-2/3 p-4 border mx-auto shadow-xl text-center'>
                <h3 className='text-left mb-8 text-3xl font-semibold text-secondary'>Apply Leave</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='md:flex justify-between'>
                        <div>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Leave Type</span>
                                </label>
                                <select name='type' class="select select-bordered"
                                    {...register('type', {
                                        required: {
                                            value: true,
                                            message: 'Leave type is required'
                                        }
                                    })}
                                >
                                    <option disabled selected>Select one</option>
                                    <option>Casual Leave</option>
                                    <option>Emergency Leave</option>
                                    <option>Medical Leave</option>
                                    <option>Annual Leave</option>
                                    <option>Maternity Leave</option>
                                    <option>Without Pay</option>
                                </select>
                            </div>

                            <div className='flex gap-4'>
                                <div className='text-left mb-2'>
                                    <label htmlFor="from">From</label>
                                    <div className='w-fit border rounded p-2 bg-base-200'>
                                        <input className='bg-base-200' type="date" name="from" id="from"
                                            {...register('from', {
                                                required: {
                                                    value: true,
                                                    message: 'From date is required'
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.from?.type === 'required' && <span class="label-text-alt text-red-500">{errors.from.message}</span>}
                                </div>
                                <div className='text-left mb-2'>
                                    <label htmlFor="from">To</label>
                                    <div className='w-fit border rounded p-2  bg-base-200'>
                                        <input onChange={handledayCount} className='bg-base-200' type="date" name="to" id="to"
                                            {...register('to', {
                                                required: {
                                                    value: true,
                                                    message: 'To date is required'
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.to?.type === 'required' && <span class="label-text-alt text-red-500">{errors.to.message}</span>}
                                </div>
                            </div>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Total Day</span>
                                </label>
                                <input type="number" name='total' placeholder="Type here" class="input input-bordered w-full max-w-xs"
                                    {...register('total', {
                                        required: {
                                            value: true,
                                            message: 'Total day is required'
                                        }
                                    })}
                                />
                                {errors.total?.type === 'required' && <span class="label-text-alt text-red-500 text-left">{errors.total.message}</span>}
                            </div>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Reliever's name</span>
                                </label>
                                <input type="text" name='reliever' placeholder="Type here" class="input input-bordered w-full max-w-xs"
                                    {...register('reliever', {
                                        required: {
                                            value: true,
                                            message: "Reliever's name is required"
                                        }
                                    })}
                                />
                                {errors.reliever?.type === 'required' && <span class="label-text-alt text-red-500 text-left">{errors.reliever.message}</span>}
                            </div>

                        </div>
                        <div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Reason <small>(Optional)</small> </span>
                                </label>
                                <textarea name='reason' class="textarea textarea-bordered" placeholder="Type here"
                                    {...register('reason')}
                                ></textarea>
                            </div>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Attachment <small>(Optional)</small></span>
                                </label>
                                <input type="file" name='attachment' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                    <div class="form-control mt-10 w-1/4 mx-auto">
                        <button class="btn btn-primary px-4">Apply</button>
                    </div>
                </form>

                {/* {
                    modal &&
                    <div>
                        <input type="checkbox" id="leave-apply-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Successfully Placed your leave application</h3>

                                <div class="modal-action">
                                    <label for="leave-apply-modal" class="btn">Close</label>
                                </div>
                            </div>
                        </div>
                    </div>
                } */}

            </div>
        </div>
    );
};

export default LeaveApply;