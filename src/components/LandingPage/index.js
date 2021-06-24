import React from 'react'
import ArtistSlider from '../ArtistProfile'
import {Link} from 'react-router-dom'
function index() {
    return (
        <div>
            
            <ArtistSlider />
            <Link to='/artist-type'>
                get access
            </Link>
        </div>
    )
}

export default index
