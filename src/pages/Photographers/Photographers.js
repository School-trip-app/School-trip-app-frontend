import React from 'react';
import './Photographers.css';
import PhotographersData from './PhotographersData';
import { FaStar,FaStarHalfAlt,FaEnvelope} from "react-icons/fa";


function Photographers() {
  return (
    <div>
         <section className='top-background'>
        <p>Photographers </p>
      </section>
      <section className='packages'>
        <div>
          <span className='check'>Photographers</span>
          <p className='upcome'>Best way to keep memories   by photos of course idiots </p>
        </div>
        
      </section>
        <div>
          <section className='section-sb'>
            <div className='container'>
              <h3>Photographers</h3>
              <div className='Cards'>

                {PhotographersData.map((PhotographersData) => (             

                <div key={PhotographersData.id} className='Card'>
                  <img src={PhotographersData.image} alt='Photographers' />
                  <h3 className='h1-sb' >{PhotographersData.name}</h3>
                  <p className=' icon '><FaEnvelope/>{PhotographersData.email}</p>
                  <p>{PhotographersData.phoneNumber}</p>
                  <p><FaStar/>{PhotographersData.rate}</p>
                  <button className='btn-book-sb'>Book</button>
                </div>
                ))}
                
              </div>
            </div>
          </section>
        </div>
      
    </div>
  );
}
 export default Photographers;