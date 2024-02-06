import React from 'react'
import './Partner.css'
import push from '../assets/img/push.webp'
const Partner = () => {
  return (
    <div className='partner-container container-fluid d-flex'>
        <div className='partner-title col-md-4'>
                <h1>Trusted By Partners</h1>
            </div>
        <div className='partner-content col-md-8'>
            <img src={push} alt='push-protocol' />
            </div>
        </div>
  )
}

export default Partner