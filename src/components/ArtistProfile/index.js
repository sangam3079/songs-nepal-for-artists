import React from 'react'

import { Carousel } from 'antd';
import artist1 from '../../assets/images/ivana.png'
import artist2 from '../../assets/images/aiony.png'
import artist3 from '../../assets/images/oliver.png'



const index =() => {
    return (
        <div className='carousel'>
            <Carousel autoplay={true} autoplaySpeed={1000} dots={false} >
                <div>
                    <img src={artist1} alt='artist1' />
                </div>
                
                <div>
                <img src={artist2} alt='' />
                </div>
                <div>
                <img src={artist3} alt='' />
                </div>
                
                
            </Carousel>
        </div>
    )
}

export default index
