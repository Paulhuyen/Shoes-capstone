import React from 'react'
import "../../assets/styles.scss";

export default function Footer() {
  return (
    <div>
      <div className="footerHome">
        <div className="container">
          <div className="row">
             <div className="col-4">
              <span className='footer-title'>GET HELP</span>
              <p>Home</p>
              <p>Nike</p>
              <p>Adidas</p>
              <p>Contact</p>
             </div>
             <div className="col-4">
              <span className='footer-title'>GET HELP</span>
              <p>About</p>
              <p>Contact</p>
              <p>Home</p>
              <p>Phone</p>

             </div>
             <div className="col-4">
              <span className='footer-title'>GET HELP</span>
              <p>Register</p>
              <p>Login</p>
             </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>@ 2022 CyberSoft All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}
