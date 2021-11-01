import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const UpdateOrder = () => {
    const { id } = useParams()
    const [order, setOrder] = useState([])
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        axios.put(`http://localhost:5000/order/${id}`, data)
        .then(res => {
            if(res.data){
                alert('Order is successfully updated')
                reset()
            }
        })
    }
    
    useEffect(() => {
            fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    },[onSubmit])
    console.log(order)
    return (
        <div>
        {/* <h4>Edit and submit to update the <b>{order.Name}</b>'s' order</h4>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={order.Name} {...register("Name", { required: true })} placeholder='Name' />
            <textarea defaultValue={order.Email} {...register("Email", { required: true })} placeholder="Email" />
            <input defaultValue={order.Mobile} type="number" {...register("Mobile", { required: true })} placeholder="Mobile" />
            <input defaultValue={order.Address} {...register("Address", { required: true })}  placeholder="Address"/>
            <input type="submit"/>
        </form> */}
    </div>
    );
};

export default UpdateOrder;