import React from 'react'
import './signup.css'
import socialDesktop from '../images/social-desktop.PNG'
import socialMobile from '../images/social-mobile.PNG'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2'


const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //state for loading icon
    const [loading, setLoading] = useState(false);

    const signup = (event) => {
        event.preventDefault();
        setLoading(true);

        const requestData = { fullName: fullName, email, password }
        axios.post(`${API_BASE_URL}/signup`, requestData)
            .then((result) => {
                if (result.status === 201) {
                    setLoading(false);
                    Swal.fire({
                        icon: "success",
                        title: "User Successfully registerd"
                    })
                }
                setFullName('');
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Some error occurred please try again later"
                })
            })

    }
    return (
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
                            <h4 className="card-title text-center mt-3 fw-bold mb-4" >Sign Up</h4>
                            <form onSubmit={(e) => signup(e)}>
                                <div className="mb-2">
                                    <input type="text" className="form-control input-bg p-2" placeholder='Phone' />
                                </div>
                                <div className="mb-2">
                                    <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} className="form-control input-bg p-2" placeholder='Phone number,username or email' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" value={fullName} onChange={(ev) => setFullName(ev.target.value)} className="form-control input-bg p-2" placeholder='Fullname' />
                                </div>
                                <div className="mb-2">
                                    <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} className="form-control input-bg p-2" placeholder='Password' />
                                </div>
                                <div className='mt-4 d-grid'>
                                    <button className="custom-btn custom-btn-blue" type='Submit'>Sign Up</button>
                                </div>
                                <div className='my-4 '>
                                    <hr className='text-muted'></hr>
                                    <h5 className='text-muted text-center'>OR</h5>
                                    <hr className='text-muted'></hr>
                                </div>
                                <div className='mt-3 mb-5 d-grid'>
                                    <button className="custom-btn custom-btn-white" >
                                        <span className='text-muted fs-6'>Already have an account?</span>
                                        <Link to="/login" className='ms-1 text-info fw-bold'>Log In</Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup;