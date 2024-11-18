
import mongoose from "mongoose";  
import Campaign from './model/Campaign.js';  

mongoose.connect('mongodb://localhost:27017/campaignDB', {  
    useNewUrlParser: true,  
    useUnifiedTopology: true,  
});  

const campaigns = [  
    {  
        "_id": "6739c8a93e642a65b847dd90",  
        "title": "Support Local Artists",  
        "description": "Help us create a platform for local artists to showcase their talents and connect with the community through art exhibitions and workshops.",  
        "imageUrl": "https://c9admin.cottage9.com/uploads/2383/The-Beauty-Of-Handmade-Art-Supporting-Local-Artists-1.jpg",
        "amountRaised": "120000",
        "supporters": "200",
        "daysLeft": "15",  
        "__v": 0  
    },  
    {  
        "_id": "6739c8a93e642a65b847dd91",  
        "title": "Food for the Homeless",  
        "description": "We are raising funds to provide meals and essential supplies for the homeless in our city. Your donations will directly feed those in need.",  
        "imageUrl": "https://www.indiaspend.com/h-upload/old_images/1600x960_342741-homeless-family1440.jpg", 
        "amountRaised": "156000",
        "supporters": "210",
        "daysLeft": "17",  
        "__v": 0  
    },  
    {  
        "_id": "6739c8a93e642a65b847dd92",  
        "title": "Wildlife Conservation Project",  
        "description": "Join us in protecting endangered species and their habitats. Your contributions will fund conservation efforts and educational programs in local communities.",  
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF73Co8oKBDXQKvq7LBMiYGLKONLZAJpsuQ&s", 
        "amountRaised": "250000",
        "supporters": "350",
        "daysLeft": "27",   
        "__v": 0  
    },  
    {  
        "_id": "6739c8a93e642a65b847dd93",  
        "title": "After-School Program for Kids",  
        "description": "Help us provide engaging after-school activities for children in our community, focusing on education, arts, and sports.",  
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQb05ZBVs3vIdlHOmQLbKznNG8RERhkxeskA&s",
        "amountRaised": "190000",
        "supporters": "290",
        "daysLeft": "7",    
        "__v": 0  
    },  
    {  
        "_id": "6739c8a93e642a65b847dd94",  
        "title": "Aid for Earthquake Victims",  
        "description": "Support the victims of the recent earthquake in our region. Your donations will help provide food, shelter, and medical assistance.",  
        "imageUrl": "https://scx1.b-cdn.net/csz/news/800a/2016/survivalofqu.jpg", 
        "amountRaised": "126000",
        "supporters": "170",
        "daysLeft": "23",   
        "__v": 0  
    },  
    {  
        "_id": "6739c8a93e642a65b847dd95",  
        "title": "Tech for Rural Schools",  
        "description": "We aim to bridge the digital divide by providing computers and internet access to rural schools. Your support can change lives through education!",  
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIia6AjNhufFIPYLgJiiWNTg7QrUl7oZBag&s",
        "amountRaised": "14700",
        "supporters": "20",
        "daysLeft": "9",    
        "__v": 0  
    },  
    {  
        "_id": "6739c8a93e642a65b847dd96",  
        "title": "Rebuild Our Community Center",  
        "description": "Help us rebuild our community center that was damaged in the storm. This center provides vital programs and services for our residents.",  
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sonoma_Grammar_School%2C_276_E._Napa_St.%2C_Sonoma%2C_CA_6-12-2010_5-02-54_PM.JPG/1200px-Sonoma_Grammar_School%2C_276_E._Napa_St.%2C_Sonoma%2C_CA_6-12-2010_5-02-54_PM.JPG", 
        "amountRaised": "143570",
        "supporters": "29",
        "daysLeft": "6",   
        "__v": 0  
    },  
    {  
        "_id": "6739c8a93e642a65b847dd97",  
        "title": "Scholarship Fund for Veterans",  
        "description": "We are establishing a scholarship fund to assist veterans in pursuing higher education. Your donations can help empower those who served our country.",  
        "imageUrl": "https://registrar.miami.edu/_assets/images/veterans-affairs/graduating-students-480x320.jpg",
        "amountRaised": "133000",
        "supporters": "34",
        "daysLeft": "28",    
        "__v": 0  
    }  
];  

Campaign.insertMany(campaigns)  
    .then(() => {  
        console.log('Campaigns inserted');  
        mongoose.connection.close();  
    })  
    .catch(err => {  
        console.error("Error inserting campaigns: ", err);  
    });  