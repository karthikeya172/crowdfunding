import mongoose from "mongoose";  

const CampaignSchema = new mongoose.Schema({  
    title: { type: String, required: true },  
    description: { type: String, required: true },  
    imageUrl: { type: String, required: true }, 
    
    amountRaised: { type: Number, required: true },
  supporters: { type: Number, required: true },
  daysLeft: { type: Number, required: true },
});  

const Campaign = mongoose.model('Campaign', CampaignSchema);  
export default Campaign;  