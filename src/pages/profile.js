import React from 'react'
import './profile.css'
import horizontalImg from '../images/horizontalMoreAction.PNG'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

const Profile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showPost, setShowPost] = useState(false);

    const handlPostClose = () => setShowPost(false);
    const handlePostShow = () => setShowPost(true);


    return (
        <div className='container shadow mt-3 p-4'>
            <div className='row'>
                <div className='col-md-6 d-flex flex-column'>
                    <img className='p-2 profile-pic img-fluid' alt='post-pic' src='https://images.unsplash.com/photo-1516705346105-1604914311cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvb2RpZSUyMG1vZGx8ZW58MHx8MHx8fDA%3D'></img>
                    <p className=' ms-3 fs-5 fw-bold' >Pragul_P</p>
                    <p className=' ms-3 fs-6' >Pragnesh singh</p>
                    <p className=' ms-3 fs-6' >Full Stack Devloper</p>
                    <p className=' ms-3 fs-6' >My Linkd<i className="fa-brands fa-linkedin"></i> profile on  <a href='www.linkedin.com/in/pragnesh-singh-3ba409213'><b>Pragnesh singh</b></a></p>

                </div>
                <div className='col-md-6 d-flex flex-column justify-content-between mt-3' >
                    <div className='follow-detail d-flex justify-content-equal mx-auto '>
                        <div className='count-section  pe-4 pe-md-5  text-center fw-bold' >
                            <h4>10</h4>
                            <p>Posts</p>
                        </div>
                        <div className='count-section px-4 px-md-5 text-center fw-bold'>
                            <h4>20</h4>
                            <p >Followers</p>
                        </div>
                        <div className='ps-md-5 ps-4 text-center fw-bold'>
                            <h4>20</h4>
                            <p>Following</p>
                        </div>
                    </div>
                    <div className='mx-auto mt-md-0 mt-4'>
                        <button className="custom-btn custom-btn-white me-md-3" >
                            <span className='fs-6'>Edit Profile</span>
                        </button>
                        <button className="custom-btn custom-btn-white" onClick={handlePostShow} >
                            <span className='fs-6'>Upload Post</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-12'>
                    <hr></hr>
                </div>
            </div>
            <div className='row mb-4'>
                <div className='col-md-4 col-sm-12'>
                    <div className="card" onClick={handleShow}>
                        <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" classNameName="card-img-top" alt="nature" />
                    </div>

                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className="card" >
                        <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" classNameName="card-img-top" alt="nature" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" classNameName="card-img-top" alt="nature" />
                    </div>
                </div>
            </div>
            <div className='row mb-4'>
                <div className='col-md-4 col-sm-12 '>
                    <div className="card" >
                        <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" classNameName="card-img-top" alt="nature" />
                    </div>

                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className="card" >
                        <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" classNameName="card-img-top" alt="nature" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" classNameName="card-img-top" alt="nature" />
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className="col-md-6">
                            <div>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="https://images.unsplash.com/photo-1634401609694-f6ac6dd8474b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpd2FsaXxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://images.unsplash.com/photo-1608865413696-fb1e4220173f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpd2FsaXxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWF8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div>
                                <div className='row'>
                                    <div className='col-6 d-flex'>
                                        <img className='p-2 profile-pic-pop' alt="profile" src="https://images.unsplash.com/photo-1682685797527-63b4e495938f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" />
                                        <div className=' mt-2 ms-2'>
                                            <p className='fs-6 fw-bold'>title</p>
                                            <p className='location'>discription</p>
                                        </div>
                                    </div>
                                    <div class="dropdown col-6 " >
                                        <a class="btn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" >
                                            <img alt='more action' src={horizontalImg}></img>

                                        </a>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">
                                                <i class="fa-regular fa-pen-to-square px-2"></i>
                                                <span>Edit Post</span>
                                            </a></li>
                                            <li><a class="dropdown-item" href="#">
                                                <i class="fa-regular fa-trash-can px-2"></i>
                                                <span>Delete Post</span>
                                            </a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <span className=' text-muted '>2 Hours Ago</span>
                                    </div>
                                </div>
                                <div className='row mt-2'>

                                    <div className='col-12 mt-2'>
                                        <p>Lorem ipsum</p>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-6 d-flex'>
                                        <i className="fa-regular fa-heart pe-3"></i>
                                        <i className="fa-regular fa-comment pe-3"></i>
                                        <i className="fa-solid fa-location-arrow "></i>
                                    </div>
                                    <div className='col-12 mt-2 ms-2'>
                                        <span className='fs-6 fw-bold '>  200 like</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>

            <Modal show={showPost} onHide={handlPostClose} size='lg' centered>
                <Modal.Header closeButton>
                    <span className='fw-bold fs-5'> Upload Post</span>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                            <div className='upload-box'>
                                <div>
                                    <input type="file" id='drop_zone ' className='FileUpload' accept=".jpg,.png,.gif" onchange="handleFileSelect(this)"></input>
                                    <div className='dropZoneOverlay'><i class="fa-solid fa-cloud-arrow-up fs-2"></i><br />Upload Photo From Device</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 d-flex flex-column justify-content-between'>
                            <div className='row'>
                                <div className='col-sm-12  mb-3 me-2'>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Add caption" id="floatingTextarea"></textarea>
                                        <label for="floatingTextarea">Add Caption</label>
                                    </div>
                                </div>
                                <div className='col-sm-12 '>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder='Add Location' />
                                        <label for="floatingInput"> <i className="fa-solid fa-location-dot"></i>Add Location</label>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12  mb-3'>
                                    <button className="custom-btn custom-btn-pink float-end"  >
                                        <span className='fs-6 fw-700'>Post</span>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default Profile;