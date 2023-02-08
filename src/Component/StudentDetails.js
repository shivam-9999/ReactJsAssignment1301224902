import React, { useState,useEffect } from "react";
import { Form,FormControl,Card, Container, Row, Col,Button } from "react-bootstrap";
import { Link,Route ,Routes} from "react-router-dom";
import FinalPage from "./FinalPage";
import { Navigate } from 'react-router-dom';
import LoginPage from "./LoginPage";



const StudentDetails = () => {
    
 
    const [StudentDetails, setStudentDetails] = useState({courseCode:"", courseName:"", studentEmail:"", Comments:""});
    const [finalPage,setFinalPage] = useState(false);

    const handleChange = (event) => {
         setStudentDetails({...StudentDetails,[event.target.name]:event.target.value});
      };

    const handleSubmit=(e)=>{
        e.preventDefault();
         
        setFinalPage(true);
        console.log(StudentDetails);
    }
  
    if(finalPage===true){
        return <Navigate to="/Finalpage" state={StudentDetails}/>
    }
   


  return (
    <Container>
        <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
            <Card style={{ width: "40rem", height: "30rem" }}>
                <Card.Body >

                    <Card.Title>Login to evaluate the course : </Card.Title>
                    <Form style={{marginTop:"50px"}}  onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
                            <Form.Label as={Col}  sm="2">
                                Course Code :
                            </Form.Label>
                            <Col sm="10">
                            <FormControl
                                type="text"
                                name="courseCode"
                                placeholder="Course Code "
                                value={StudentDetails.courseCode}
                                onChange={handleChange}
                            />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label as={Col}  sm="2">
                                    Course Name :
                                </Form.Label>
                                <Col sm="10">
                                <FormControl
                                    type="text"
                                    name="courseName"
                                    placeholder="Course Name "
                                    value={StudentDetails.courseName}
                                    onChange={handleChange}
                                />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label as={Col}  sm="2">
                                    Student Email:
                                </Form.Label>
                                <Col sm="10">
                                <FormControl
                                    type="text"
                                    name="studentEmail"
                                    placeholder="Student Email"
                                    value={StudentDetails.studentEmail}
                                    onChange={handleChange}
                                />
                                </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label as={Col}  sm="2">
                                    Your Comments :
                                </Form.Label>
                                <Col sm="10">
                                <FormControl
                                    type="text"
                                    name="Comments"
                                    as="textarea" rows="3"
                                    placeholder="Comments"
                                    value={StudentDetails.Comments}
                                    onChange={handleChange}
                                />
                                </Col>
                        </Form.Group>
                            <Button type="submit"  variant="success"  style={{ width: "100%" }}>Login</Button>{' '}
                        </Form>
                    
                      
            </Card.Body>
            </Card>
                       
                        
        </div>
  </Container>
  );
};

export default StudentDetails;