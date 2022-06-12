import React from 'react'
import imgs from "../src/img/imgs.jpg";



function Home() {
  return (
    <div className='container-fluid d-flex'>
    <div className='row'>
        <div className='col-10 mx-auto'>
            <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                    <div>
                    <center><h2>Hii there!! Rohit this side</h2></center>
                    <center><h1 className='my-3'>IT'S NICE TO MEET YOU 🖐️</h1></center>
                    </div>
                    <div className='icons my-3'>
                    <center>
                    <div>

                        <a typeof='button' href="https://www.linkedin.com/in/rohit-gupta-2019901b1" className="fab fa-linkedin mx-2" style={{fontSize:"35px",cursor:"pointer",color:"black"}}></a>
                        <a typeof='button' href="https://github.com/rohit-gupta09" className="fab fa-github mx-2" style={{fontSize:"35px",cursor:"pointer",color:"black"}}></a>
                      </div>
                    </center>
                      
                    </div>
                </div>

                <div className='col-lg-6 order-1 order-lg-2'>
                <img src={imgs} className="img-fluid"></img>
                </div>
            </div>
        </div>
    </div>
  </div>

  )
}

export default Home;