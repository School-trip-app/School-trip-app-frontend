import React from 'react'
import { useEffect ,useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import './Profile.css'

import cookies from 'react-cookies';
import { BiImageAdd } from 'react-icons/bi';
import axios from 'axios';




function Profile() {

    

    const  handelchange = (e) => {

        const id = cookies.load('userId');
        console.log(id);
        const updatepost = e.target.files[0];
        const formData = new FormData();
        formData.append('image', updatepost);

        axios.put(`https://sophisticated-steel-production.up.railway.app/user/${id}`, updatepost,
            {
                headers: {
                    Authorization: `Bearer ${cookies.load('token')}`
                }
            }
        ).then(res => {
            console.log(res.data);
            let x =('https://sophisticated-steel-production.up.railway.app/'+`${res.data.imageprofile}`);
            console.log(x);
            cookies.save('imageprofile', x);
        }
        ).catch(err => {
            console.log(err);
        }
        )

    }

    return (
        <>
            <Navbar />
            <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                            <div className="m-b-25">
                                <img className='img-radius' src={cookies.load('imageprofile')} alt='UserProfileImage' />

                            </div>
                            <h6 className="f-w-600">WELCOME</h6>
                            <p>{cookies.load('username')}</p>
                            <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-blocki">
                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">Email</p>
                                    <h6 className="text-muted f-w-400">{cookies.load('email')}</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">Phone</p>
                                    <h6 className="text-muted f-w-400">{cookies.load('phonenumber')}</h6>
                                </div>
                            </div>
                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">.</h6>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">UserRole</p>
                                    <h6 className="text-muted f-w-400">{cookies.load('userRole')}</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="m-b-10 f-w-600">Change Image </p>

                                    <h6 className="text-muted f-w-400">
                                        <label for="file-upload" name='file' className="custom-file-upload">
                                            <i className="fa fa-cloud-upload"></i> <BiImageAdd style={{ color: 'rgb(26, 45, 109)', fontSize: '35px' }} />
                                        </label>
                                        <input id="file-upload" type="file" onChange={handelchange} />
                                    </h6>


                                </div>
                            </div>
                            <ul class="social-link list-unstyled m-t-40 m-b-10">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )

}

export default Profile;