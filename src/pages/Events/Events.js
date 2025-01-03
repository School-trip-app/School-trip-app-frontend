import React from 'react';
import Card from '../../pages/Events/card/Card';
import './trip.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { stateAuth, setLoadingOff, setLoadingOn } from '../../store/auth';
import Register from '../../components/register/Register';
import { useSelector, useDispatch } from "react-redux";
import { getpackagesAsync, selectpackages } from '../../store/package-re';
import { useEffect } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import Loader from '../../components/Loader/Loader';

function Trips() {

  const state = useSelector(stateAuth);


  const dispatch = useDispatch();
  const packages = useSelector(selectpackages);
  const getUser = async () => {
    dispatch(setLoadingOn())
    await axios.get(`https://school-trip-app-backend.onrender.com/user/${cookies.load('userId')}`).then((res) => {
      cookies.save('capabilities', res.data.capabilities);
      dispatch(setLoadingOff())

    }).catch((err) => {
      console.log(err);
      dispatch(setLoadingOff())

    })
  }
  useEffect(() => {
    dispatch(getpackagesAsync());
  }, [dispatch]);

  useEffect(() => {
    getUser();
  }, [])
  return (
    <>
      {state.isLogin &&
        <>
          {state.isLoading && <Loader />}
          <Navbar />
          <div className='trips-page'>
            <section className='top-background-trips'>
              <p>All Trips</p>
            </section>
            <section className='packages'>
              <div>
                <span className='check'>Check Our Best Promotional Tour</span>
                <p className='upcome'>Upcoming Trips</p>
              </div>
              <div className='trips-box'>
                {packages.length > 0 && packages.map((item) => {
                  return (
                    <Card key={item.id} packageName={item.packageName} price={item.price} date={item.tripDate} time={`${item.startingTime} - ${item.startingTime}`} image={item.packageImages} city={item.city}
                      data={item}
                    />
                  )

                })}
              </div>
            </section>
          </div>
          <Footer />
        </>}
      {!state.isLogin && <Register />}
    </>

  )
}

export default Trips