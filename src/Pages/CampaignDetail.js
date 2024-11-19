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
      <img src={campaign.imageUrl} alt={campaign.title} className="img-fluid" style={{ height: '300px', objectFit: 'cover' }}/>
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