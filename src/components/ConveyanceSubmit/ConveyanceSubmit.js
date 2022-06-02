import React from 'react';
import { useForm } from 'react-hook-form';
import image from '../../Assets/Images/login.jpg'

const ConveyanceSubmit = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {



        console.log("Submitted");
    }

    // const handleConveyanceSubmit = (event) => {
    //     event.preventDefault();

    //     const date = event.target.date.value;
    //     const from = event.target.from.value;
    //     const destination = event.target.destination.value;
    //     const vehicle = event.target.vehicle.value;
    //     const travelPartner = event.target.travelPartner.value;
    //     const amount = event.target.amount.value;

    //     console.log(date, from, destination, vehicle, travelPartner, amount);
    // }

    return (
        <div>

            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card flex-shrink-0  md:max-w-md shadow-2xl ">
                        <div class="card-body">
                            <h3 className='text-xl font-semibold underline text-secondary'>Conveyance Bill</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='text-left mb-2'>
                                    <label htmlFor="from">Date</label>
                                    <div>
                                        <div className='w-full text-right border rounded p-2 bg-base-100'>
                                            <input className='bg-base-100' type="date" name="date" id="from"

                                                {...register('date', {
                                                    required: {
                                                        value: true,
                                                        message: 'Date is required',
                                                    }
                                                })}
                                            />
                                        </div>

                                        {errors.date?.type === 'required' && <span class="label-text-alt text-red-500">{errors.date.message}</span>}
                                    </div>
                                </div>
                                <div className='md:flex gap-4 w-fit'>
                                    <div class="form-control md:w-1/2">
                                        <label class="label">
                                            <span class="label-text">From</span>
                                        </label>
                                        <input type="text" name='from' placeholder="From" class="input input-bordered"
                                            {...register('from', {
                                                required: {
                                                    value: true,
                                                    message: 'From Location is required',
                                                }
                                            })}
                                        />
                                        {errors.from?.type === 'required' && <span class="label-text-alt text-red-500 text-left">{errors.from.message}</span>}
                                    </div>
                                    <div class="form-control md:w-1/2">
                                        <label class="label">
                                            <span class="label-text">Destination</span>
                                        </label>
                                        <input type="text" name='destination' placeholder="Destination" class="input input-bordered"
                                            {...register('destination', {
                                                required: {
                                                    value: true,
                                                    message: 'Destination is required',
                                                }
                                            })}
                                        />
                                        {errors.destination?.type === 'required' && <span className='label-text-alt text-red-500 text-left'>{errors.destination.message}</span>}
                                    </div>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Amount</span>
                                    </label>
                                    <input type="number" name='amount' placeholder="Amount" class="input input-bordered"
                                        {...register('amount', {
                                            required: {
                                                value: true,
                                                message: 'Amount is required'
                                            }
                                        })}
                                    />
                                    {errors.amount?.type === 'required' && <span className='label-text-alt text-red-500 text-left'>{errors.amount.message}</span>}
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Vehicle</span>
                                    </label>
                                    <input type="text" name='vehicle' placeholder="Vehicle" class="input input-bordered"
                                        {...register('vehicle', {
                                            required: {
                                                value: true,
                                                message: 'Vehicle name is required',
                                            }
                                        })}
                                    />
                                    {errors.vehicle?.type === 'required' && <span className='label-text-alt text-red-500 text-left'>{errors.vehicle.message}</span>}
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Travelled with</span>
                                    </label>
                                    <input type="text" name='travelPartner' placeholder="Travelled with" class="input input-bordered"
                                        {...register('vehicle', {
                                            required: {
                                                value: true,
                                                message: 'Vehicle name is required',
                                            }
                                        })}
                                    />
                                    {errors.vehicle?.type === 'required' && <span className='label-text-alt text-red-500 text-left'>{errors.vehicle.message}</span>}

                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ConveyanceSubmit;