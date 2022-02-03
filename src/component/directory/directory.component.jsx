import React, { useState } from 'react';
import { DATA } from '../../data';
import './directory.styles.scss'

import PriceCard from '../price-card/price-card.component';
const Directory =()=>{

    const [data,setData]=useState(DATA)
    return(

        <div className='directory'>

        {DATA.map(({...priceCardProps})=> 
        <PriceCard {...priceCardProps}/>)}
        
        
        </div>


    )
}

export default Directory