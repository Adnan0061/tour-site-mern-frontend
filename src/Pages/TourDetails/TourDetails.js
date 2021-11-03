import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Table, Button, useAccordionButton } from 'react-bootstrap';
import { Clock, Eye, Search } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import { addToDb } from '../../utilities/fakedb';
import useAuth from '../hooks/useAuth';
// import useCart from '../hooks/useCart';


const TourDetails = () => {
    const { id } = useParams();
    const [ tour, setTour ] = useState([]);
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
 
 
    const onSubmit = data => {
        console.log(data)

        fetch('https://agile-lowlands-13145.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Your Booking has accepted')
                reset()
            }    
        })
    };
    console.log(errors);
     
    useEffect(()=>{
        fetch(`https://agile-lowlands-13145.herokuapp.com/tour/${id}`)
        .then(res => res.json())
        .then(data => {
            setTour(data)
            reset(data)
        })
    },[reset])

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={9} style={{backgroundColor: 'lightgray', padding: '15px 35px'}}>
                        <h2 className='mt-3 mb-5 text-start'>{tour.title}</h2>
                        <Row>
                            <Col className='d-flex justify-content-start align-items-top'>
                                <Row>
        
                                    <Col xs={2}><Clock size={'24px'}></Clock></Col>
                                    <Col xs={10}><h5 className='ps-0'>{tour.duration}</h5></Col>
                                </Row>
                            </Col>
                            <Col className='d-flex justify-content-start align-items-top'>
                                <Row>
                                    <Col xs={2} md={1}><Search size={'24px'}></Search></Col>
                                    <Col xs={10} md={11}><h5 className='ps-3 text-start'>{tour.feel}</h5></Col>
                                </Row>
                            </Col>
                            <Col className='d-flex justify-content-start align-items-top'>
                                <Row>
                                    <Col xs={2} md={1}><Eye size={'24px'}></Eye></Col>
                                    <Col xs={10} md={11}><h5 className='ps-3 text-start'>{tour.spots}</h5></Col>
                                </Row>
                            </Col>
                        </Row>
                        <img className='img-fluid w-100 my-3' src={tour.img} alt="" />
                        <p style={{fontSize: '19px'}} className='text-start'>{tour.description}</p>
                    </Col>

                    <Col xs={12} md={3} className=''>
                    <div className='p-4' style={{backgroundColor: 'lightgray', padding: '15px 35px'}}>
                    <h3 className='my-3 text-start'>Book You Tour</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className='text-start'>
                    <div>
                        <label htmlFor="Name">Name: </label>
                        <br/>
                        <input readOnly type="text" id='Name' placeholder="Name" {...register(`Name`, {required: true}, {maxLength: 80})} defaultValue={user.displayName} />
                    </div>
                    <div>
                        <label htmlFor="Email">Email: </label>
                        <br/>
                        <input readOnly type="text" id='Email'  placeholder="Email" {...register("Email", {required: true}, {pattern: /^\S+@\S+$/i})}  defaultValue={user.email}/>
                    </div>
                        <div>
                        <label htmlFor="Mobile">Mobile No.</label>
                        <br/>
                        <input type="number" id='Mobile'  {...register("Mobile", {required: true})}/>
                        </div>
                        <div>
                        <label htmlFor="Address">Address</label>
                        <br/>
                        <input type="text" id='Address' {...register("Address", {required: true})}/>
                        </div>
                        {/* <div>
                        <input defaultChecked {...register ('Title', {required: true})} id='Title' type="radio" value={tour.title} />
                        <label htmlFor="Title">{tour.title}</label>
                        </div> */}
                        {/* <br/> */}
                        {/* <div>
                        <input defaultChecked  {...register ('groupSize', {required: true})} id='groupSize' type="radio" value={tour.groupSize} />
                        <label htmlFor="groupSize">{tour.groupSize} persons</label>
                        </div> */}
                        {/* <br/> */}
                        {/* <div>
                        <input defaultChecked  {...register ('Total', {required: true})} id='Total' type="radio" value={tour.total} />
                        <label htmlFor="Total">${tour.total} USD</label>
                        </div> */}
                        {/* <br/> */}
                        <select hidden {...register("Status")}>
                            <option value="pending">pending</option>
                            <option value="confirm">confirm</option>
                            <option value="hold">hold</option>
                        </select>
                        <br/>
                        <input type="submit" value='Book Tour'/>
                    </form>
                    </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={9} style={{backgroundColor: 'lightgray', padding: '15px 35px'}}>
                        <h3 className='text-start'>Tour details</h3>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>PRICE</td>
                                    <td>{tour.price} {tour.priceText}</td>
                                </tr>
                                <tr>
                                    <td>DEPARTURE TIME</td>
                                    <td>{tour.time}</td>
                                </tr>
                                <tr>
                                    <td>MEETING POINT</td>
                                    <td>{tour.meetingPoint}</td>
                                </tr>
                                <tr>
                                    <td>AVAILABILITY</td>
                                    <td>{tour.availability}</td>
                                </tr>
                                <tr>
                                    <td>DURATION</td>
                                    <td>{tour.duration}</td>
                                </tr>
                                <tr>
                                    <td>GROUP SIZE</td>
                                    <td>{tour.groupSize} persons</td>
                                </tr>
                                <tr>
                                    <td>Total Package Price</td>
                                    <td>${tour.total} USD</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TourDetails;