import React, { useState } from 'react';  
import { Container, Form, Button, Alert } from 'react-bootstrap';  
import { useNavigate } from 'react-router-dom'; 
const DonationForm = () => {  
  const [formData, setFormData] = useState({  
    donorName: '',  
    donorEmail: '',  
    donorPhone: '',  
    donationAmount: 2500, 
    message: ''  
  });  

  const [showAlert, setShowAlert] = useState(false);  
  const [alertMessage, setAlertMessage] = useState('');  
  const [alertVariant, setAlertVariant] = useState('success');  
  const navigate = useNavigate();
  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({  
      ...formData,  
      [name]: value  
    });  
  };  

  const handleAmountChange = (value) => {  
    setFormData({  
      ...formData,  
      donationAmount: value,  
      message: '' // Clear message when donation amount changes  
    });  
  };  

  const handleCustomAmountChange = (e) => {  
    setFormData({  
      ...formData,  
      donationAmount: e.target.value  
    });  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  

    // Here you can handle your form submission, e.g., sending data to an API  
    console.log('Donation Data:', formData);  

    // Show a success alert (you can customize this)  
    setAlertMessage('Thank you for your donation!');  
    setAlertVariant('success');  
    setShowAlert(true);  

    // Reset the form  
    setFormData({  
      donorName: '',  
      donorEmail: '',  
      donorPhone: '',  
      donationAmount: 2500, // Reset to default amount  
      message: ''  
    });  
  };  

  return (  
    <Container>  
      <h2 className="mt-5">Donate to Campaign</h2>  
      {showAlert && (  
        <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>  
          {alertMessage}  
        </Alert>  
      )}  

      <div className="text-center mb-4">  
        <h5>Choose a donation amount</h5>  
        <button className="btn btn-outline-primary mx-1" onClick={() => handleAmountChange(1000)}>₹ 1000</button>  
        <button className="btn btn-outline-primary mx-1" onClick={() => handleAmountChange(2500)}>₹ 2500</button>  
        <button className="btn btn-outline-primary mx-1" onClick={() => handleAmountChange(4000)}>₹ 4000</button>  
      </div>  

      <Form onSubmit={handleSubmit}>  

      <Form.Group controlId="formDonationAmount">  
          <Form.Label>Donation Amount(other) (₹)</Form.Label>  
          <Form.Control  
            type="number"  
            placeholder="Enter custom amount"  
            name="donationAmount"  
            value={formData.donationAmount}  
            onChange={handleCustomAmountChange}  
            required  
          />  
        </Form.Group>  

        <Form.Group controlId="formDonorName">  
          <Form.Label>Your Name</Form.Label>  
          <Form.Control  
            type="text"  
            placeholder="Enter your name"  
            name="donorName"  
            value={formData.donorName}  
            onChange={handleChange}  
            required  
          />  
        </Form.Group>  

        <Form.Group controlId="formDonorEmail">  
          <Form.Label>Your Email</Form.Label>  
          <Form.Control  
            type="email"  
            placeholder="Enter your email"  
            name="donorEmail"  
            value={formData.donorEmail}  
            onChange={handleChange}  
            required  
          />  
        </Form.Group>  

        <Form.Group controlId="formDonorPhone">  
          <Form.Label>Your Phone Number</Form.Label>  
          <Form.Control  
            type="text"  
            placeholder="Enter your phone number"  
            name="donorPhone"  
            value={formData.donorPhone}  
            onChange={handleChange}  
            required  
          />  
        </Form.Group>  

        <Form.Group controlId="formMessage">  
          <Form.Label>Message (Optional)</Form.Label>  
          <Form.Control  
            as="textarea"  
            rows={3}  
            placeholder="Enter a message (optional)"  
            name="message"  
            value={formData.message}  
            onChange={handleChange}  
          />  
        </Form.Group>  

        <Button variant="primary" type="submit" className="mt-3" onClick={() => navigate(`/payments`)}>  
          Proceed to pay  
        </Button>  
      </Form>  
    </Container>  
  );  
};  

export default DonationForm; 