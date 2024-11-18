// import React from 'react';  

// const CampaignDetails = () => {  
//   return (  
//     <div className="container mt-5">  
//       <h1 className="text-center">Campaign Title</h1>  
//       <div className="alert alert-danger text-center">  
//         This fundraiser is in urgent need of funds  
//       </div>  
//       <img src="path_to_image.jpg" alt="Campaign" className="img-fluid mb-4" />  
      
//       <div className="d-flex justify-content-between align-items-center mb-4">  
//         <h2>₹ 22,98,804</h2>  
//         <button className="btn btn-success">Contribute Now</button>  
//       </div>  
      
//       <div className="mb-4">  
//         <h5>1056 supporters</h5>  
//         <h5>27 Days left</h5>  
//       </div>  

//       <h3>About the Fundraiser</h3>  
//       <p>  
//         Dear friends and kind-hearted individuals,  
//         <br />  
//         My name is Bhuvan Chandra Upreti, and I am reaching out to you with a heartfelt plea to save my beloved son, Kapil. Our world has been turned upside down ever since Kapil was diagnosed with blood cancer.  
//       </p>  
//       <p>  
//         Kapil is currently undergoing treatment at Fortis Hospital in Noida, Uttar Pradesh. His doctors have laid out an extensive treatment plan, which includes rounds of chemotherapy, medications, and potentially a bone marrow transplant to give him a fighting chance.  
//       </p>  
//       <p>  
//         However, the cost of treatment is overwhelming and far beyond what our family can afford. The total cost of Kapil's treatment is estimated to be ₹30 lakh, more than what we have already managed to gather.  
//       </p>  
//       <p>  
//         Your generosity will be life-saving to him and will lift the burden off the shoulders of our family.  
//       </p>  

//       <h3>Fundraising Team</h3>  
//       <ul className="list-group mb-4">  
//         <li className="list-group-item">Kapil Upreti</li>  
//         <li className="list-group-item">Start a Supporting Fundraiser</li>  
//       </ul>  

//       <h3>Top Donors</h3>  
//       <ul className="list-group mb-4">  
//         <li className="list-group-item">Prabhat - ₹1,000</li>  
//         <li className="list-group-item">Devesh - ₹1,000</li>  
//       </ul>  

//       <h3>Most Generous</h3>  
//       <ul className="list-group mb-4">  
//         <li className="list-group-item">Devesh - ₹1,000</li>  
//         <li className="list-group-item">Well Wisher - ₹50,000</li>  
//       </ul>  
//     </div>  
//   );  
// };  

// export default CampaignDetails; 
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const CampaignDetails = () => {
  const { id } = useParams(); // Get campaign ID from URL
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/campaigns/${id}`);
        setCampaign(response.data);
      } catch (error) {
        console.error('Error fetching campaign:', error);
        setError('Failed to fetch campaign details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!campaign) {
    return <div>No campaign found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">{campaign.title}</h1>
      <div className="alert alert-danger text-center">
        This fundraiser is in urgent need of funds
      </div>
      <img src={campaign.imageUrl} alt={campaign.title} className="img-fluid mb-4" />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>₹ {campaign.amountRaised}</h2>
        <button className="btn btn-success" onClick={() => navigate(`/donation`)} >Contribute Now</button>
      </div>
      <div className="mb-4">
        <h5>{campaign.supporters} supporters</h5>
        <h5>{campaign.daysLeft} Days left</h5>
      </div>
      <h3>About the Fundraiser</h3>
      <p>{campaign.description}</p>
    </div>
  );
};

export default CampaignDetails;