import React from 'react'

function Contact() {
  return (

    <div className='container-fluid my-5'>
        <div className='row'>
            <div className='col-12 mx-auto'>

                <center><h2>Let's Collaborate :)</h2></center>
                <div className='row justify-content-center my-5'>
                
                <div class="card mx-2 my-2" style={{width: "18rem",backgroundColor:"#ffb701"}}>
                <center><a style={{fontSize:"60px"}}><i class="fas fa-envelope"></i></a></center>
                    <div class="card-body">
                        <center><h2 class="card-text">Email</h2></center>
                        <center><p>gupta2002rohit@gmail.com</p></center>
                    </div>
                 </div>
                
                <div class="card mx-2 my-2" style={{width: "18rem",backgroundColor:"#ffb701"}}>
                <center><a style={{fontSize:"60px"}}><i class="fas fa-phone"></i></a></center>
                    <div class="card-body">
                        <center><h2 class="card-text">Phone</h2></center>
                        <center><p>(+91) 8306357208</p></center>
                    </div>
                 </div>
                
                <div class="card mx-2 my-2" style={{width: "18rem",backgroundColor:"#ffb701"}}>
                    <center><a style={{fontSize:"60px"}}><i class="fas fa-home"></i></a></center>
                    <div class="card-body">
                        <center><h2 class="card-text">Location</h2></center>
                        <center><p>Dehradun, India</p></center>
                    </div>
                 </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact