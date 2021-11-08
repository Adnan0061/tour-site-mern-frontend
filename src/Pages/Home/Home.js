import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './Home.css'
// import useCart from '../hooks/useCart';
// import { addToDb } from '../../utilities/fakedb';
// import { addToDb } from '../../utilities/fakedb';

const Home = () => {
    const [tours, setTours] = useState([])
    // const [ cart, setCart ] = useCart(tours)

    useEffect(()=>{
        fetch('https://stormy-headland-18612.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    },[])
    console.log(tours)


    return (
        <>

           {/* Hero Section */}
           <section className='hero-section' style={{height: '75vh'}}>
            <div id='hero-overlay' className='h-100 d-flex align-items-center'>    
                <div className='container text-center text-light'>
                    <h1 style={{fontSize: '56px'}}>Insight Cities Prague Tours <span style={{color:'#0dcaf0'}}>eHealth</span></h1>
                    <h3 className='fw-light' style={{fontSize: '48px'}}>At the Crossroads of European History</h3>
                    <Link to={'/home#tours'}><Button style={{backgroundColor:'#005395', color:'#58BDED'}} className='me-3' variant="info">Find Tours</Button></Link>
                    <Link to={'/my-orders'}><Button style={{backgroundColor:'#005395', color:'#58BDED'}} variant="warning">Your Orders</Button></Link>
                </div>
            </div>
            </section>

            {/* icon section */}
            <section className='container d-flex'>
                <Container>
                    <Row className='my-4'>
                        <Col xs={12} md={4} className='d-flex align-items-center g-4 p-4' >
                            <img className='me-3' src="https://www.insightcities.com/wp-content/uploads/2019/10/insight-new-icon-03.png" alt="" />
                            <h3>PhD & MA-Level Guides</h3>
                        </Col>
                        <Col xs={12} md={4} className='d-flex align-items-center g-4 p-4' >
                            <img className='me-3' src="https://www.insightcities.com/wp-content/uploads/2019/10/insight-new-icon-04.png" alt="" />
                            <h3>Private & Small-Group Guided Tours</h3>
                        </Col>
                        <Col xs={12} md={4} className='d-flex align-items-center g-4 p-4' >
                            <img className='me-3' src="https://www.insightcities.com/wp-content/uploads/2019/10/insight-new-icon-05.png" alt="" />
                            <h3>Customized Travel Experiences & Trip Planning</h3>
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </section>

            {/* Services section */}
            <section id='tours' className='my-5'>
                <Container>
                <h2 className='my-4' style={{fontSize: '42px'}}>Premium Private and Small Group Tours</h2>
                <h4 className='my-5' style={{fontSize: '28px'}}>Expert Guides Revealing Europe’s Intriguing Histories</h4>
                <p  className='my-4' style={{fontSize: '22px'}}>At the crossroads of European history for over 1,000 years, Prague’s soaring churches(opens in a new tab) and ancient synagogues(opens in a new tab) testify to the Czech, German, and Jewish communities that each left their mark on this fabled city, even before it was rebuilt by visionary Emperor Charles IV into the capital of an empire.</p>

                <p className='my-4' style={{fontSize: '22px'}}>
                On private and small-group tours, or day trips from Prague, Insight Cities’ historians help you discover the city’s dramatic role at the center of Europe’s religious conflicts. We walk in the footsteps of the leaders, musicians, artists, and intellectuals who shaped the city’s fortunes, even as we explore Prague’s modern ordeals under Nazi Occupation and Cold War authoritarianism(opens in a new tab). We are particularly proud to welcome you on our Prague Art Nouveau and Cubist Architecture tour(opens in a new tab), named by The Guardian as one of the ten best architecture tours in the world.(opens in a new tab)
                </p>

                <p className='my-4' style={{fontSize: '22px'}}>
                For those looking for a special gift for their loved ones, all our Prague tours – both live-stream and on-site – are available for our gift cards.
                </p>
                <div className='my-5'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {tours.map((tour) => (
                        <Col key={tour._id}>
                        <Card className='h-100 border-0'>
                            <Card.Img variant="top" src={tour.img} />
                            <Card.Body>
                                <Card.Title>{tour.title}</Card.Title>
                                <Card.Text><b>Spots: </b>{tour.spots}</Card.Text>
                                <Card.Text><b>Cost: </b>${tour.total} USD</Card.Text>
                                <Link to={`/tour/${tour._id}`}  ><Button style={{backgroundColor:'#005395', color:'#58BDED'}} variant="primary" className='px-5 mx-1' >Book now</Button></Link>
                                {/* <Button  onClick={() => handleAddToCart(tour)} variant="primary" className='px-5 mx-1'>Add to Cart</Button> */}
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
                </div>
                <hr />
                </Container>
            </section>

            {/* our experts */}
            <section className='my-5 '>
                <Container>
                    <Row>
                        <Col className='w-75 my-3'>
                        <h2 className='my-3'>About Our Experts</h2>
                        <p className='mb-5 w-75 mx-auto fs-5'>
                        Our tour guides are professors, grad students, art critics, and historians who are passionate about sharing the grand architecture, musical heritage, unique traditions and glorious natural scenery of Salzburg on a deeper level. We promise to surprise you with intriguing sites easy to miss without us and to help you explore in vivid ways that leave you with delighted memories. With expertise across diverse backgrounds, our brainy guides make sure that you use your time in Salzburg and the Lake District to enjoy an unforgettable experience of this legendary town and the magical Alpine landscape that surrounds it.
                        </p>
                        {/* <Button>READ MORE ABOUT US</Button>
                        <Button>MEET OUR GUIDES</Button> */}
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </section>
            
            {/* TESTIMONIAL */}
            <section className='my-5'>
                <Container>
                    <h2 className='my-5'>See What Our Guests are Saying</h2>
                <Carousel variant="dark" style={{height: 'auto', backgroundColor: 'lightgray'}}>
                    <Carousel.Item>
                    <div className='my-5 w-50 mx-auto text-center h-100'>
                            <h4>Jtmm1954</h4>
                        <p>TripAdvisor</p>
                        <div>
                            <p>We experienced a wonderful and informative tour of Prague through this company. Our guide was Vadim. He taught us so much history and culture of Prague. His knowledge was amazing. Would highly recommend this tour.</p>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='my-5 w-50 mx-auto text-center h-100'>
                        <h4>Theaterfan099</h4>
                        <p>TripAdvisor</p>
                        <div>
                            <p>It was like getting a taste of a fascinating college course – which makes sense because he and his wife Bonita (co-founder) are scholars. If I’m making this sound intimidating, it’s not – just a deeper understanding than what you would read in a guidebook or hear on a bus tour. InsightCities small group tours aren’t generally for one person, but they are so small that it’s like walking around with a knowledgeable and interesting friend. You will never want to take a typical tour again. I look forward to taking their tours in other cities, with other scholars.</p>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='my-5 w-50 mx-auto text-center h-100'>
                        <h4>JBTraveller</h4>
                        <p>TripAdvisor</p>
                        <div>
                            <p>Having true scholars organize and conduct such tours is a great concept which really added a special depth and created a uniquely special learning experience to these tours. Also, being private tours, our sights and discussions were not limited to just the actual tour objectives but we could digress into other subjects and sights that were of interests to us. The guides for both of these tours never had any trouble at all answering any of our questions and in fact could provide fascinating details that we would have never known otherwise.</p>
                        </div>
                    </div>
                    </Carousel.Item>
                </Carousel>
                </Container>
            </section>

        </>
    );
};

export default Home;