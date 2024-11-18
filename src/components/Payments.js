import React, { useState } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';  

const PaymentOptions = () => {  
  const [activeTab, setActiveTab] = useState('UPI');  

  const renderContent = () => {  
    switch (activeTab) {  
      case 'UPI':  
        return (  
          <div>  
            <h5>Scan the QR code from the app and make payment</h5>  
            <img src="https://randomqr.com/assets/images/randomqr-256.png" alt="QR Code" style={{ width: '200px', height: '200px' }} />  
            <div className="mt-3">  
              <h6>Choose Payment Method</h6>  
              <div className="d-flex justify-content-around">  
                <img src="https://uxdt.nic.in/wp-content/uploads/2020/06/BHIM_Preview.png?x79383" alt="BHIM" width="105" height="105"/>  
                <img src="https://i.pinimg.com/564x/8d/ec/e1/8dece15cc40aaf66ed47f6591b639d06.jpg" alt="Google Pay" width="105" height="105"/>  
                <img src="https://cdn.icon-icons.com/icons2/730/PNG/512/paytm_icon-icons.com_62778.png" alt="Paytm" width="105" height="105"/>  
                <img src="https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg" alt="PhonePe" width="105" height="105"/>  
                <img src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2020/11/WhatsApp-Pay-Feature-Image.jpg" alt="WhatsApp Pay" width="105" height="105"/>  
              </div>  
            </div>  
            <div className="mt-3">  
              <input type="text" placeholder="Enter UPI Address (VPA) *" className="form-control" required />  
              <small className="text-danger">This field is required</small>  
            </div>  
            <button className="btn btn-primary mt-3">Pay ₹ ....</button>  
          </div>  
        );  
      case 'Debit/Credit':  
        return (  
          <div>  
            <h5>Enter Card Details</h5>  
            <input type="text" placeholder="Card Number *" className="form-control" required />  
            <input type="text" placeholder="Exp Date *" className="form-control mt-2" required />  
            <input type="text" placeholder="CVV / CVC *" className="form-control mt-2" required />  
            <input type="text" placeholder="Name on Card *" className="form-control mt-2" required />  
            <small className="text-muted">Note: On clicking "Pay" button you might be taken to your bank's website for 3D secure authentication</small>  
            <button className="btn btn-primary mt-3">Pay ₹ .....</button>  
          </div>  
        );  
      case 'Net Banking':  
        return (  
          <div>  
            <h5>Select Bank</h5>  
            <select className="form-control" required>  
              <option value="">Select Bank *</option>  
              <option value="AXIS">AXIS</option>  
              <option value="HDFC">HDFC</option>  
              <option value="ICICI">ICICI</option>  
              <option value="KOTAK">KOTAK</option>  
              <option value="SBI">SBI</option>  
            </select>  
            <button className="btn btn-primary mt-3">Proceed To Pay ₹ .....</button>  
          </div>  
        );  
      case 'Paytm':  
        return (  
          <div>  
            <h5>Scan here to pay with Paytm Wallet</h5>  
            <img src="https://randomqr.com/assets/images/randomqr-256.png" alt="Paytm QR Code" style={{ width: '200px', height: '200px' }} />  
          </div>  
        );  
      default:  
        return null;  
    }  
  };  

  return (  
    <div className="container mt-5">  
      <h3>Choose payment option</h3>  
      <div className="d-flex justify-content-around mt-4">  
        <button className={`btn ${activeTab === 'UPI' ? 'btn-primary' : 'btn-light'}`} onClick={() => setActiveTab('UPI')}>UPI</button>  
        <button className={`btn ${activeTab === 'Debit/Credit' ? 'btn-primary' : 'btn-light'}`} onClick={() => setActiveTab('Debit/Credit')}>Debit/Credit</button>  
        <button className={`btn ${activeTab === 'Net Banking' ? 'btn-primary' : 'btn-light'}`} onClick={() => setActiveTab('Net Banking')}>Net Banking</button>  
        <button className={`btn ${activeTab === 'Paytm' ? 'btn-primary' : 'btn-light'}`} onClick={() => setActiveTab('Paytm')}>Paytm</button>  
      </div>  
      <div className="mt-4">  
        {renderContent()}  
      </div>  
    </div>  
  );  
};  

export default PaymentOptions;