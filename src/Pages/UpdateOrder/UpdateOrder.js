import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const UpdateOrder = () => {
    const { id } = useParams()
    const [order, setOrder] = useState([])
    const { register, handleSubmit, reset } = useForm();
    
    
    const onSubmit = data => {
        console.log(data);
        axios.put(`https://agile-lowlands-13145.herokuapp.com/order/${id}`, data)
        .then(res => {
            if(res.data){
                alert('Order is successfully updated')
                reset()
            }
        })
    }
    
    useEffect(()=>{
        fetch(`https://agile-lowlands-13145.herokuapp.com/order/${id}`)
        .then(res => res.json())
        .then(data => {
            setOrder(data)
            reset(data)
        })
    },[reset])

    // useEffect(() => {
    //         fetch(`https://agile-lowlands-13145.herokuapp.com/order/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setOrder(data)
    //         })
    // },[onSubmit])
  
    console.log(order)
  
    return (
        <Container>
        <Row className='justify-content-center'> 
        <Col xs={12} md={9} className='m-5'>
        <h4>Edit and submit to update the <b>{order.Name}</b>'s order</h4>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <input disabled defaultValue={order.title} {...register("title", { required: true })} placeholder={order.title} />
            <input defaultValue={order.Name} {...register("Name", { required: true })} placeholder='Name' />
            <input defaultValue={order.Email} {...register("Email", { required: true })} placeholder="Email" />
            <input defaultValue={order.Mobile} type="tel" {...register("Mobile", { required: true })} placeholder="Mobile" />
            <input defaultValue={order.Address} {...register("Address", { required: true })}  placeholder="Address"/>
            <select {...register("Status")}>
                <option value="pending">pending</option>
                <option value="confirm">confirm</option>
                <option value="hold">hold</option>
            </select>
            <input type="submit"/>
        </form>
        </Col>
        </Row>
        </Container>
    );
};

export default UpdateOrder;