import express from 'express'; 
import cors from 'cors';
import mongoose from 'mongoose';  
import Campaign from './model/Campaign.js';  

const app = express();  
const PORT = process.env.PORT || 5001;  
app.use(cors(
    {  
    origin: 'http://localhost:3000', // Allow requests from this origin  
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods  
    credentials: true // Allow credentials if needed  
}));  
app.use(express.json());  
mongoose.connect('mongodb://localhost:27017/campaignDB', {  
    useNewUrlParser: true,  
    useUnifiedTopology: true,  
});  

app.get('/api/campaigns', async (req, res) => {  
    try {  
        const campaigns = await Campaign.find();  
        res.json(campaigns);  
    } catch (error) {  
        res.status(500).send(error);  
    }  
});  

app.get('/api/campaigns/:id', async (req, res) => {
    const { id } = req.params;
  
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid campaign ID format' });
    }
  
    try {
      const campaign = await Campaign.findById(id);
      if (!campaign) {
        return res.status(404).json({ error: 'Campaign not found' });
      }
      res.json(campaign);
    } catch (error) {
      console.error('Error fetching campaign:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

app.listen(PORT, () => {  
    console.log(`Server listening on port ${PORT}`);  
});  