import React from 'react'
import Header from './Home/Header'
import Footer from './Home/Footer'
const Aboutus = () => {
  return (
    <div><Header/>
      <section class="hero">
        <h1>About-Us</h1>
      </section>
      <div>
        <h1>
          We drive transformation from the forefront.
        </h1>
        <h2> Welcome to Inforag Technology, where innovation meets excellence!</h2>
        <p>
          At Inforag Technology, we are committed to delivering cutting-edge solutions tailored to meet the evolving needs of our clients. Founded on the principles of integrity, creativity, and customer-centricity, we strive to empower businesses with the tools and technology they need to thrive in today’s dynamic digital landscape.
        </p>

        <img src='https://inforag.com/wp-content/uploads/2025/02/audience-segmentation-abstract-concept-illustration-1536x1536.png' alt='logo'/>
      </div>
          <Footer/>    </div>
    
  )
}

export default Aboutus