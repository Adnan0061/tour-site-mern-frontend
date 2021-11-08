import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const UpdateOrder = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [order, setOrder] = useState([])
    const { register, handleSubmit, reset } = useForm();
    
    
    const onSubmit = data => {
        setIsLoading(true)
        console.log(data);
        axios.put(`https://stormy-headland-18612.herokuapp.com/order/${id}`, data)
        .then(res => {
            if(res.data){
                alert('Order is successfully updated')
                reset(data)
                setIsLoading(false)
            }
        })
    }
    
    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://stormy-headland-18612.herokuapp.com/order/${id}`)
        .then(res => res.json())
        .then(data => {
            setOrder(data)
            reset(data)
            setIsLoading(false)
        })
    },[reset])

    // useEffect(() => {
    //         fetch(`https://stormy-headland-18612.herokuapp.com/order/${id}`)
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
        {
            isLoading ? 
            <Spinner animation="border" />
        :
        <>
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
        </>
        }
        </Col>
        </Row>
        </Container>
    );
};

export default UpdateOrder;