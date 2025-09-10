import React, { useState } from 'react'

const Contactus = (e) => {
  const [name,setName]=useState("");
  const [email,setEmail]= useState("");
  const [message,setMessage]=useState("")

  const handleName=(e)=>{
    setName(e.target.Value)
  };
  const handleEmaill=(e)=>{
    setEmail(e.target.Value)
  };
  const handleMessage=()=>{
    setEmail(e.target.Value)
  };

  
  return (
    <div>
     
      <div class="form-container">
 
    <form class="form-c">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your name" onChange={handleName}/>
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email" onChange={handleEmaill} />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" placeholder="Write your message..." onChange={handleMessage}></textarea>
      </div>

      <button type="submit" class="btn" onClick={Contactus}>Get Value</button>
    </form>
  </div></div>
  )
}

export default Contactus;