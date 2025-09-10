import React, { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='contain '>

            <div className='homepage'>

                <div>

                    <div class="top-bar">
                        <div class="left">
                            # Boost your online presence with IT & digital marketing expert
                        </div>

                        <div class="right">
                            <img id="supprt-logo" src='s.jpeg' alt='logo' />
                            <span><i class="fa fa-headphones"></i> Our Support Team</span>
                            <img id="supprt-logo" src='l.jpeg' alt='logo' />
                            <span><i class="fa fa-location-dot"></i> Indore, India</span>
                        </div>
                    </div>


                    <div class="header">
                        <div class="logo"><img src='inforag_technolog.png' alt='logo' /></div>
                        <div class="contact">
                            <div class="contact-item">
                                <img id="call" src='Red Phone.jpeg' alt='logo' />
                                <div>

                                    <div>Call Anytime</div>
                                    <strong>+91-9165-234-695</strong>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div>   <img id="call" src='E-mail icon.jpeg' alt='logo' /></div>
                                <div>
                                    <div>Get a Estimate</div>
                                    <strong >info@inforag.com</strong>
                                </div>
                                <div>   <img id="cal" src='i.jpeg' alt='logo' /></div>
                                <div>   <img id="cal" src='G.jpeg' alt='logo' /></div>
                                <div>   <img id="cal" src='sea.jpeg' alt='logo' /></div>
                            </div>
                        </div>
                    </div>
                </div>



                <nav class="navbar">
                    <input type="checkbox" id="menu-toggle" class="menu-toggle-checkbox" />
                    <label for="menu-toggle" class="menu-toggle-label">&#9776;</label>

                    <ul class="nav-links">

                        <li><a href="/">Home</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/products">Product</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contactus">Contact Us</a></li>
                        <li><input type='text' class="search-new" placeholder=' Search...' /></li>


                    </ul>
                    <div class="cont">

                        <img class="cont-1" src='sea.jpeg' alt="logo" />
                        <img class="cont-2" src='sup.jpeg' alt="logo" />
                        <div class="whatsapp"><p>+91-9165234-695</p></div>
                    </div>
                </nav>
                <div>
                </div>


                <section class="back">
                    <div class="slide">
                        <div class="content">
                            <div class="tagline">Welcome to Inforag Technology</div>
                            <h1>IT & Digital Marketing Services</h1>
                            <p> We offer innovative IT solutions and digital marketing services, helping businesses<br /> thrive with customized strategies for growth and success in the digital world.</p>
                            <button class="btnn">Get Started</button>
                        </div>
                    </div>

                </section>




            </div >



            <div class=" card-for-service">

                <div class="service-cardes">

                    <img src="https://inforag.com/wp-content/uploads/al_opt_content/IMAGE/inforag.com/wp-content/plugins/desert-companion//inc/themes/softme/assets/images/service/img01.jpg.bv_resized_desktop.jpg.bv.webp?bv_host=inforag.com" alt="Expert Team" />
                    <div class="overlay">

                        <h3>Quality Service</h3>
                        <p>Delivering expert IT solutions with our professional team.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>

                <div class="service-cardes">
                    <img src='https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg' alt='logo' />
                    <div class="overlay">




                        <h3>Expert Team</h3>
                        <p>Delivering expert IT solutions with our professional team.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div class="service-cardes">
                    <img src="https://inforag.com/wp-content/uploads/al_opt_content/IMAGE/inforag.com/wp-content/plugins/desert-companion//inc/themes/softme/assets/images/service/img02.jpg.bv_resized_desktop.jpg.bv.webp?bv_host=inforag.com" alt="Expert Team" />
                    <div class="overlay">

                        <h3>Excellent Support</h3>
                        <p>Delivering expert IT solutions with our professional team.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div class="service-cardes">
                    <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" alt="Expert Team" />
                    <div class="overlay">

                        <h3>Managment</h3>
                        <p>Delivering expert IT solutions with our professional team.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header