import { fontSize } from '@mui/system'
import React from 'react'
import Slider from "./Slider"
import './style.css'
function Skills() {
  return (
    <div className='container-fluid my-3'>
      <div className='row'>
        <div className='col-10 mx-auto'>
            <center className="my-3"><h2><b><span style={{color:"blueviolet"}}>Skills</span> & Experiences</b></h2></center>
            <div className='row '>
                <div className='col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column my-3'>
                <div className='example my-3' style={{overflow:'scroll',height:'60vh', maxWidth:'600px'}}>
                <Slider />
                </div>
                

                </div>
                <div className='col-lg-6 order-1 order-lg-2'>
                    <div className='row d-flex my-3'>
                        <div className='ico_div col'>
                            <center><a style={{fontSize:"40px"}}><i className='fab fa-react'></i></a></center>
                            <center><p style={{fontSize:"20px"}}>ReactJS</p></center>
                        </div>

                        <div className='ico_div col'>
                            <center><a style={{fontSize:"40px"}}><i className='fab fa-java'></i></a></center>
                            <center><p style={{fontSize:"20px"}}>Java</p></center>
                        </div>

                        <div className='ico_div col'>
                            <center><a style={{fontSize:"40px"}}><i className='fab fa-python'></i></a></center>
                            <center><p style={{fontSize:"20px"}}>Python</p></center>
                        </div>
                        </div>

                        <div className='row d-flex my-3'>
                        <div className='ico_div col'>
                            <center><a style={{fontSize:"40px"}}><i className='fab fa-git-alt'></i></a></center>
                            <center><p style={{fontSize:"20px"}}>Git</p></center>
                        </div>

                        <div className='ico_div col'>
                            <center><a><img src="https://img.icons8.com/color//undefined/mysql-logo.png"/></a></center>
                            <center><p style={{fontSize:"20px"}}>MySQL</p></center>
                        </div>

                        <div className='ico_div col'>
                            <center><a><img src="https://img.icons8.com/color/48/undefined/c-programming.png"/></a></center>
                            <center><p style={{fontSize:"20px"}}>C language</p></center>
                        </div>
                        </div>

                        <div className='row d-flex my-3'>

                        <div className='ico_div col'>
                            <center><a><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/undefined/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"/></a></center>
                            <center><p style={{fontSize:"20px"}}>MongoDB</p></center>
                        </div>

                        <div className='ico_div col'>
                            <center><a><img src="https://img.icons8.com/color/48/undefined/nodejs.png"/></a></center>
                            <center><p style={{fontSize:"20px"}}>NodeJS</p></center>
                        </div>

                        <div className='ico_div col'>
                            <center><a style={{fontSize:"40px"}}><i className='fab fa-python'></i></a></center>
                            <center><p style={{fontSize:"20px"}}>ScikitLearn</p></center>
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills