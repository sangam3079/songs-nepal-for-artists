import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import artistType1 from '../../assets/images/artisttype1.png'
import artistType2 from '../../assets/images/1@2x.png'
import infoImg from '../../assets/images/1.png'
import artist1 from '../../assets/images/ivana.png'
import './ArtistType.scss'
import { Card } from 'antd';

const { Meta } = Card;


function index() {
    return (
        <div className='ArtistType'>
            <div className='ArtistType_main'>
                <div className='ArtistType_main_header'>
                    <Link to='/'><img src={logo} alt=''/></Link>
                    <div className='ArtistType_main_header_login'>
                        <p>Already part of team?</p>
                        <Link to='/login'>Login</Link>
                    </div>    
                </div>
                <div className='ArtistType_main_container'>
                    <div className='ArtistType_main_container_top'>
                        <text>Get Songs Nepal For Artists</text>
                        <p>Tell us who you are.</p>
                    </div>
                    <div className='ArtistType_main_container_card'>
                        <div className='ArtistType_main_container_card_left'>
                        <Link to='/signup'>   
                          {/* <img src={artist1} alt='artisttype1' /> */}
                          <div className='ArtistType_main_container_card_left_info' >
                            <img  src={infoImg} alt='infoImg' />
                            <div className='ArtistType_main_container_card_left_info_text'>
                                <p>Artist or Manager</p>
                            </div>
                          </div>
                        </Link>  
                        </div>
                        <div className='ArtistType_main_container_card_left'>
                          <Link to='/signup'>  
                          {/* <img src={artist1} alt='artisttype1' /> */}
                          <div className='ArtistType_main_container_card_left_info' >
                            <img  src={infoImg} alt='infoImg' />
                            <div className='ArtistType_main_container_card_left_info_text'>
                                <p>Music label or Company</p>
                            </div>
                          </div>
                          </Link>
                        </div>
                    </div>
                    <div className='ArtistType_main_container_bottom'>
                        <p>Not sure which to choose ?</p>
                    </div>
                </div>
            </div>
            <div className='ArtistType_footer'>
            </div>
        </div>
    )
}

export default index
