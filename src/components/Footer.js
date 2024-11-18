import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer() {
  return (
    <footer class="bg-dark text-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h5>About Us</h5>
        <p>
          We are a platform dedicated to connecting creators with backers to fund innovative projects and bring creative ideas to life.
        </p>
      </div>
      <div class="col-md-2">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="http://localhost:3000/" class="text-light">Home</a></li>
          <li><a href="http://localhost:3000/campaigns" class="text-light">Campaigns</a></li>
          <li><a href="http://localhost:3000/about" class="text-light">About Us</a></li>
          <li><a href="#" class="text-light">FAQ</a></li>
          <li><a href="#" class="text-light">Contact</a></li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5>Contact</h5>
        <ul class="list-unstyled">
          <li>Email: <a href="mailto:info@crowdfunding.com" class="text-light">info@crowdfunding.com</a></li>
          <li>Phone: <a href="tel:+1234567890" class="text-light">+1 234 567 890</a></li>
          <li>Address: 123 Crowdfund St, New York, NY 10001</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5>Follow Us</h5>
        <div class="d-flex mb-3">
          <a href="#" class="text-light me-3"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="#" class="text-light me-3"><i class="fab fa-twitter fa-lg"></i></a>
          <a href="#" class="text-light me-3"><i class="fab fa-instagram fa-lg"></i></a>
          <a href="#" class="text-light"><i class="fab fa-linkedin fa-lg"></i></a>
        </div>
        
        <h5>Subscribe</h5>
        <form class="d-flex">
          <input type="email" class="form-control me-2" placeholder="Email Address"/>
          <button class="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col text-center">
        <p class="mb-0">&copy; 2024 Crowdfunding Inc. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer;