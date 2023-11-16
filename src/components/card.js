import React from 'react'
import './card.css';

const Card = () => {
    return (
        <div>

            <div className="card  shadow-sm ">
                <div className="card-body px-2">
                    <div className='row'>
                        <div className='col-6 d-flex'>
                            <img className='p-2 profile-pic' alt="profile" src="https://images.unsplash.com/photo-1682685797527-63b4e495938f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" />
                            <div className=' mt-2'>
                                <p className='fs-6 fw-bold'>title</p>
                                <p className='location'>discription</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <i class=" float-end fs-3 mt-3 fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                    <div className='row'>

                        <div className='col-12'>
                            <img style={{ borderRadius: '15px' }} className='p-2  img-fluid' alt='post-pic' src='https://images.unsplash.com/photo-1516705346105-1604914311cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvb2RpZSUyMG1vZGx8ZW58MHx8MHx8fDA%3D'></img>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-6 d-flex'>
                            <i class="ps-2 fs-4 fa-regular fa-heart"></i>
                            <i class="ps-2 fs-4 fa-regular fa-comment"></i>
                            <i class="ps-3 fs-4 fa-solid fa-location-arrow"></i>
                        </div>
                        <div className='col-6'>
                            <span className='pe-2 fs-6 fw-bold float-end'>  200 like</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <span className='p-2 text-muted '>2 Hours Ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Card;