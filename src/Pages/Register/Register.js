import React, { useState } from 'react';
import { Form, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Github, Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import InitializeAuthentication from '../../Firebase/firebase.init';
import useAuth from '../hooks/useAuth';
// import useAuth from '../hooks/useAuth';


const Register = () => {
    const { registerWithEmail, createUserWithGoogle, createUserWithGitHub, isLoading, successMsg, setSuccessMsg, errorMsg, setErrorMsg } =useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [successMsg, setSuccessMsg] = useState('')

    const history = useHistory();
    
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegister = (e) => {
        console.log(name, email, password)
        e.preventDefault();
        setSuccessMsg('')
        setErrorMsg('')
        if(email !== ''  &&  password !== '' && name !== ''){
            registerWithEmail(name, email, password)
        }else{
            setErrorMsg("please enter name, email & password")
        }
    }
    const handleGoogle = () => {
        createUserWithGoogle()
        .then((result) => {
            history.push('/')
            setSuccessMsg('Your account is successfully created')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErrorMsg('Your account creation failed, try again')
        });
    }
    const handleGitHub = () => {
        createUserWithGitHub()
        .then((result) => {
            history.push('/')
            setSuccessMsg('Your account is successfully created')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErrorMsg(errorMessage)
          });
    }

    return (
        <div style={{height: '60vh'}}>
            <Container>
            <Row  className="justify-content-md-center my-5">
            <Col xs md={9} lg={4}>
            <h2>Register</h2>
            <p className='text-success'>{successMsg}</p>
            <p className='text-danger'>{errorMsg}</p>
            <Form onSubmit={handleRegister}  className='text-start'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onBlur={handleName} type="Text" required placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" required placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" required placeholder="Password" />
                </Form.Group>
                
                <Button onClick={handleRegister} variant="info" type="submit">Submit</Button>
                <span className='ms-5'>Already registered<Button as={Link} to={'/Login'} variant="link">Log in</Button></span>
            </Form>
            <h6 className='mt-3'>Register with Google</h6>
            <Button className='w-100' variant="danger" onClick={handleGoogle}><Google></Google></Button>
            {/* <Button className='w-50' variant="dark" onClick={handleGitHub}><Github></Github></Button> */}
            
            
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Register;