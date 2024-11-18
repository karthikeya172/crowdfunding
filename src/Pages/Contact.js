import React from 'react'

const Contact = () => {
  return (
    <div><div class="container my-4">  
    <h2>Contact Us</h2>  
    <form>  
        <div class="form-group">  
            <label for="name">Name</label>  
            <input type="text" class="form-control" id="name" placeholder="Enter your name"/>  
        </div>  
        <div class="form-group">  
            <label for="email">Email</label>  
            <input type="email" class="form-control" id="email" placeholder="Enter your email"/>  
        </div>  
        <div class="form-group">  
            <label for="message">Message</label>  
            <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>  
        </div>  
        <button type="submit" class="btn btn-primary">Send Message</button>  
    </form>  
</div>  </div>
  )
}

export default Contact