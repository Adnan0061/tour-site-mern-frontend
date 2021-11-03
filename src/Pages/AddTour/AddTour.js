import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../AddTour/Addtour.css'

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        // console.log(data);
        axios.post('https://agile-lowlands-13145.herokuapp.com/tours', data)
        .then(res => {
            if(res.data.insertedId){
                alert('New Tour is successfully added')
                reset()
            }
        })
    }
    return (
        <Container>
            <Row className='justify-content-center'> 
            <Col xs={12} md={9}>
            <h1>Add new Tour service</h1>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 200 })} placeholder='Title' />
                <input {...register("duration", { required: true })} placeholder='Duration' />
                <input {...register("feel", { required: true })} placeholder='Speciality' />
                <input {...register("spots", { required: true })} placeholder='Spots' />
                <textarea {...register("description", { required: true})} placeholder="description" />
                <input type="number" {...register("price")} placeholder="Price per person" />
                <input {...register("priceText", { required: true })}  defaultValue='USD per person' placeholder='daily at 10 AM and 2 P' />
                <input {...register("meetingPoint", { required: true })}  placeholder='Meeting Point' />
                <input {...register("availability", { required: true })}  placeholder='availability(year round)' />
                <input type="number" {...register("groupSize")} placeholder="groupSize" />
                <input type="number" {...register("total")} placeholder="Total Cost" />
                <input {...register("img")} placeholder="image url"/>
                <input type="submit"/>
            </form>
            </Col>
            </Row>
        </Container>
    );
};

export default AddTour;