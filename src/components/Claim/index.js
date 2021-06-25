import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './ClaimStyles.scss'
import {Button} from 'antd'

function Claim() {
    return (
        <div className='claim'>
            <div className='claim_header'>
                <Link to='/'><img src={logo} alt='logo' /></Link>
            </div>
            <div className='claim_main'>
                <div className='claim_main_container'>
                    <div className='claim_main_container_title'>
                      <text>claim an artist profile.</text>
                      <p>If you already have music on Songs Nepal, you can get access to stats, pitch tracks to our editors, and more.</p>
                    </div>
                    <div className='claim_main_container_Btn'>
                       <Button bordered={false}>CONTINUE</Button> 
                    </div>
                    <div className='claim_main_container_askQuestion'>
                        <Link to='/'>Music not yet live ?</Link>
                        <Link to='/'>Are you part of a label team ? </Link>
                    </div>
                </div>

            </div>
            <div className='claim_footer'>


            </div>
        </div>
    )
}

export default Claim
