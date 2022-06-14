import React from 'react'
import aboutim from "../src/img/aboutimg.png"

function About() {
  return (
    <div className='container-fluid d-flex justify-content-center my-3'>
    <div className='row'>
        <div className='col-10 mx-auto'>
          <center><h1 style={{fontSize:"50px",color:"#2a293b"}}>About Me</h1></center>
            <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column'>
                    <div>
                    <center><h2>Hii there!! Rohit this side</h2></center>
                    <center><h1 className='my-3'>IT'S NICE TO MEET YOU 🖐️</h1></center>
                    </div>
                </div>

                <div className='col-lg-6 order-2 order-lg-1'>
                <img src={aboutim} className="img-fluid"></img>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default About