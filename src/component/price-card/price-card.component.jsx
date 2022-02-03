import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './price-card.styles.scss'

const PriceCard=({type,price,user,storage,
publicProjects,access,privateProjects,
privateProjectsStatus,phoneSupport,
phoneSupportStatus,subdomain,subdomainStatus,
reports,reportsStatus})=>{


    return(

        <div className='price-card'>
        <div className='header'>
        <span className='title'>{type.toUpperCase()}</span>
        <h1 className='price'>{price}<sub className='subscript'>/month</sub></h1>
        
        </div>
        <div className='body'>
        <span className='body-text'>{user}</span>
        <span className='body-text'>{storage}</span>
        <span className='body-text'>{publicProjects}</span>
        <span className='body-text'>{access}</span>
        <span className={privateProjectsStatus ? `${privateProjectsStatus} 
        body-text` : 'body-text'}>{privateProjects}</span>
        <span className={phoneSupportStatus ? `${phoneSupportStatus}
         body-text` : 'body-text'}>{phoneSupport}</span>
        <span className={subdomainStatus ? `${subdomainStatus}
         body-text` : 'body-text'}>{subdomain}</span>
        <span className={reportsStatus ? `${reportsStatus} body-text` : 'body-text'}>{reports}</span>
        </div>
        <div className='footer'>
        <CustomButton/>
        </div>
        </div>
    )
}

export default PriceCard