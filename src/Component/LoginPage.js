import React,{useState} from "react";
import { Form,Card, Container, Row, Col,Button,FormControl } from "react-bootstrap";
import StudentDetails from "./StudentDetails";
import { BrowserRouter, Routes, Router,Link } from "react-router-dom";



const LoginPage = () => {
    const [loginForm, setLoginForm] = useState({email:"", password:""});

    const handleChange = (event) => {
        setLoginForm({...loginForm,[event.target.name]:event.target.value
}
            );
      };

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(loginForm);
    }



  return (
    <Container>

        <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
            <Card style={{ width: "40rem", height: "20rem" }}>
                <Card.Body >

                    <Card.Title>Login to evaluate the course : </Card.Title>
                    <Form  onSubmit={handleSubmit} style={{marginTop:"50px"}}>
                        <Form.Group as={Row} className="mb-3 " >
                            <Form.Label as={Col}  sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <FormControl
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        value={loginForm.email}
                                        onChange={handleChange}
                                    />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <FormControl
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={loginForm.password}
                                        onChange={handleChange}
                                    />
                            </Col>
                        </Form.Group>
                        <Link to="/StudentDetails">

                            <Button type="submit"  variant="success"  style={{ width: "100%" }}>Login</Button>{' '}
                        </Link>
                    </Form>
                    
            </Card.Body>
            </Card>
        </div>
  </Container>
  );
};

export default LoginPage;