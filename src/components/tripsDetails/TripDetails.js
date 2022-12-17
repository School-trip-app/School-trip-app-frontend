import React from 'react';
import './tripDetails.css';
import { FaDirections, FaRegCalendarAlt, FaRegClock, FaDollarSign, FaMapMarkerAlt, FaStar, FaUsers, FaConciergeBell } from 'react-icons/fa';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';




function TripDetails({ packageName, city, description, date, price, rate, startTime, endTime, pickup, drop, images, people, meals }) {

  const location = useLocation();
  const { state } = location;
  console.log(state.startTime)

  return (
    < div className='TripDetails' >
      <div className='TripDetails-head'>
        <img src='https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg' alt='sdasdasd' />
      </div>
      <div className='TripDetails-body'>
        <h2>{state.packageName}</h2>
        <p>({state.city})</p>
        <div className='TripDetails-body-part2'>
          <div className='TripDetails-body-part2-wicon'>
          </div>
          <div className='TripDetails-body-part2-wicon'>
            <FaDirections />
            <p className='title'>Description</p>
          </div>
          <p>{state.description}</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaUsers />
            <p className='title'>Number of people</p>
          </div>
          <p>{state.people} People</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaRegCalendarAlt />
            <p className='title'>Date</p>
          </div>
          <p>{state.date}</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaConciergeBell />
            <p className='title'>Meals</p>
          </div>
          <p>{state.meals}</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaDollarSign />
            <p className='title'>Price</p>
          </div>
          <p>{state.price} JD/Person</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaRegClock />
            <p className='title'>Starting & Ending time</p>
          </div>
          <p>{`${state.startTime} - ${state.endTime}`}</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaMapMarkerAlt />
            <p className='title'>Pick & Drop points</p>
          </div>
          <p>From {state.pickup} To {state.drop}</p>
          <div className='TripDetails-body-part2-wicon'>
            <FaStar />
            <p className='title'>Rate</p>
          </div>
          <p>{state.rate}</p>
        </div>
        <button>Book Now</button>
      </div>
    </div >
  )
}

export default TripDetails