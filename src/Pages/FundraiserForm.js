import React, { useState } from 'react';  
import { Container, Form, Button } from 'react-bootstrap';  
import { useNavigate } from 'react-router-dom';
const FundraiserForm = () => {  
    const [formData, setFormData] = useState({  
        title: '',  
        description: '',  
        targetAmount: '',  
        endDate: '',  
        organizerName: '',  
        organizerEmail: '',  
        organizerMobile: '',   
        fundsFor: ''  
    });  
    const navigate = useNavigate();
    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setFormData({  
            ...formData,  
            [name]: value  
        });  
    };  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        alert("Form successfully submitted!")
        console.log('Fundraiser Data:', formData);    
    };  

    return (  
        <Container>  
            <h2 className="mt-5">Start a Fundraiser</h2>  
            <Form onSubmit={handleSubmit}>  
                <Form.Group controlId="formTitle">  
                    <Form.Label>Title</Form.Label>  
                    <Form.Control  
                        type="text"  
                        placeholder="Enter fundraiser title"  
                        name="title"  
                        value={formData.title}  
                        onChange={handleChange}  
                        required  
                    />  
                </Form.Group>  

                <Form.Group controlId="formDescription">  
                    <Form.Label>Description</Form.Label>  
                    <Form.Control  
                        as="textarea"  
                        rows={3}  
                        placeholder="Enter description"  
                        name="description"  
                        value={formData.description}  
                        onChange={handleChange}  
                    />  
                </Form.Group>  

                <Form.Group controlId="formTargetAmount">  
                    <Form.Label>Target Amount ($)</Form.Label>  
                    <Form.Control  
                        type="number"  
                        placeholder="Enter target amount"  
                        name="targetAmount"  
                        value={formData.targetAmount}  
                        onChange={handleChange}  
                        required  
                    />  
                </Form.Group>  

                <Form.Group controlId="formEndDate">  
                    <Form.Label>End Date</Form.Label>  
                    <Form.Control  
                        type="date"  
                        name="endDate"  
                        value={formData.endDate}  
                        onChange={handleChange}  
                        required  
                    />  
                </Form.Group>  

                <Form.Group controlId="formOrganizerName">  
                    <Form.Label>Organizer Name</Form.Label>  
                    <Form.Control  
                        type="text"  
                        placeholder="Enter your name"  
                        name="organizerName"  
                        value={formData.organizerName}  
                        onChange={handleChange}  
                    />  
                </Form.Group>  

                <Form.Group controlId="formOrganizerEmail">  
                    <Form.Label>Organizer Email</Form.Label>  
                    <Form.Control  
                        type="email"  
                        placeholder="Enter your email"  
                        name="organizerEmail"  
                        value={formData.organizerEmail}  
                        onChange={handleChange}  
                        required  
                    />  
                </Form.Group>  

                <Form.Group controlId="formOrganizerMobile">  
                    <Form.Label>Organizer Mobile Number</Form.Label>  
                    <Form.Control  
                        type="tel"  // Using tel type for mobile number  
                        placeholder="Enter your mobile number"  
                        name="organizerMobile"  
                        value={formData.organizerMobile}  
                        onChange={handleChange}  
                        required  
                    />  
                </Form.Group>  

                <Form.Group controlId="formFundsFor">  
                    <Form.Label>Whom are you raising funds for?</Form.Label>  
                    <Form.Control  
                        type="text"  
                        placeholder="Enter the name or entity"  
                        name="fundsFor"  
                        value={formData.fundsFor}  
                        onChange={handleChange}  
                        required  
                    />  
                </Form.Group>  

                <Button variant="primary" type="submit" className="mt-3">  
                    Start a Fundraiser  
                </Button>  
            </Form>  
        </Container>  
    );  
};  

export default FundraiserForm;     