import React from 'react'
import './login.css'
import socialDesktop from '../images/social-desktop.PNG'
import socialMobile from '../images/social-mobile.PNG'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div className='container login-container'>
                <div className='row'>
                    <div className='col-md-7 col-sm-12 d-flex justify-content-center align-items-center '>
                        <img src={socialDesktop} alt="reactogram" className='social-desktop-img'></img>
                        <img src={socialMobile} alt="reactogram" className='social-mobile-img'></img>
                    </div>
                    <div className='col-md-5 col-sm-12 '>
                        <div className="card shadow" >
                            <div className="card-body px-5">
                                <h4 className="card-title text-center mt-3 fw-bold mb-4" >Log In</h4>
                                <form>
                                    <div className="mb-2">
                                        <input type="email" className="form-control input-bg p-2" placeholder='Phone number,username or email' />
                                    </div>
                                    <div className="mb-2">
                                        <input type="password" className="form-control input-bg p-2" placeholder='Password' />
                                    </div>
                                    <div className='mt-4 d-grid'>
                                        <button className="custom-btn custom-btn-blue" >Login</button>
                                    </div>
                                    <div className='my-4 '>
                                        <hr className='text-muted'></hr>
                                        <h5 className='text-muted text-center'>OR</h5>
                                        <hr className='text-muted'></hr>
                                    </div>
                                    <div className='mt-3 mb-5 d-grid'>
                                        <button className="custom-btn custom-btn-white" >
                                            <span className='text-muted fs-6'>Don't have an account?</span>
                                            <Link to="/signup" className='ms-1 text-info fw-bold'>Sign up</Link>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Login;