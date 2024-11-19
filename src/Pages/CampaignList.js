import React, { useEffect, useState } from 'react';  
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
const CampaignList = () => {  
    const [campaigns, setCampaigns] = useState([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);   
    const navigate = useNavigate();
    useEffect(() => {  
        const fetchCampaigns = async () => {  
            try {  
                const response = await axios.get('http://localhost:5001/api/campaigns');  
                setCampaigns(response.data);  
            } catch (error) {  
                console.error("Error fetching campaigns:", error);  
                setError("Failed to fetch campaigns. Please try again later.");  
            } finally {  
                setLoading(false);  
            }  
        };  

        fetchCampaigns();  
    }, []);  
 

    if (loading) {  
        return <div>Loading...</div>;  
    }  

    if (error) {  
        return <div>Error: {error}</div>;  
    }  

    if (campaigns.length === 0) {  
        return <div>No campaigns available.</div>;  
    }  

    return (  
        <div className="container my-4">  
            <h2>All Campaigns</h2>  
            <div className="row row-spacing">  
                {campaigns.map((campaign) => (  
                    <div className="col-md-4" key={campaign._id}>  
                        <div className="card h-100">  
                            <img src={campaign.imageUrl} className="card-img-top" alt={campaign.title} />  
                            <div className="card-body">  
                                <h5 className="card-title">{campaign.title}</h5>  
                                <p className="card-text">{campaign.description}</p>  
                                {/* <a href="#" className="btn btn-primary">View Campaign</a>   */}
                                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/campaign/${campaign._id}`)} // Redirects to details page
                >
                  View Campaign
                </button>
                            </div>  
                        </div>  
                    </div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default CampaignList;  