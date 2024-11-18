import React from 'react'

const Profile = () => {
  return (
    <div class="container my-4">  
    <h2>User Profile</h2>  
    <p>Name: [User's Name]</p>  
    <p>Email: [User's Email]</p>  
    <a href="#" class="btn btn-primary">Edit Profile</a>  

    <h3>My Campaigns</h3>  
    <div class="row">  
        <div class="col-md-4">  
            <div class="card">  
                <img src="mycampaign.jpg" class="card-img-top" alt="My Campaign"/>  
                <div class="card-body">  
                    <h5 class="card-title">My Campaign Title</h5>  
                    <a href="#" class="btn btn-primary">View Campaign</a>  
                </div>  
            </div>  
        </div>  
    </div>  
</div>  
  )
}

export default Profile