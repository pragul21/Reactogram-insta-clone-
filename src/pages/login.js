import React from 'react'
import './login.css'
import socialDesktop from '../images/social-desktop.PNG'
import socialMobile from '../images/social-mobile.PNG'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2'
import { useState } from 'react';
import { useDispatch } from 'react-redux'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //state for loading icon
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = (event) => {
        event.preventDefault();
        debugger;
        setLoading(true);

        const requestData = { email, password }
        axios.post(`${API_BASE_URL}/login`, requestData)
            .then((result) => {
                debugger;
                if (result.status == 200) {
                    setLoading(false);
                    localStorage.setItem("token", result.data.result.token)
                    localStorage.setItem('user', JSON.stringify(result.data.result.user))
                    dispatch({ type: "LOGIN_SUCCESS", payload: result.data.result.user })
                    setLoading('false');
                    navigate('/myprofile')
                }

            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: error.response.data.error
                })
            })

    }
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
                            {loading ? <div className='col-md-12 mt-3 text-center'>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div> : ''}
                            <div className="card-body px-5">
                                <h4 className="card-title text-center mt-3 fw-bold mb-4" >Log In</h4>
                                <form onSubmit={(e) => login(e)}>
                                    <div className="mb-2">
                                        <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} className="form-control input-bg p-2" placeholder='Phone number,username or email' />
                                    </div>
                                    <div className="mb-2">
                                        <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} className="form-control input-bg p-2" placeholder='Password' />
                                    </div>
                                    <div className='mt-4 d-grid'>
                                        <button type='Submit' className="custom-btn custom-btn-blue" >Login</button>
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