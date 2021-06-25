import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import arrowLeft from '../../../assets/images/Icon awesome-arrow-left.png'
import deviceImg from '../../../assets/images/Group 11.png'
import {Input} from 'antd'

function CodeVerification() {
    return (
        <div className='codeVerification'>
            <div className='codeVerification_container'>
                <div className='codeVerification_container_header'>
                    <img className="codeVerification_container_header_logo" src={logo} alt='logo' />
                    <Link to='/login-no' className='codeVerification_container_header_back'>
                        <img className="codeVerification_container_header_back_arrowLeft" src={arrowLeft} alt='back arrow' />
                        <text>Back</text>
                    </Link>

                </div>
                <div className='codeVerification_container_main'>
                    <div className='codeVerification_conatiner_main_device'>
                        <img src={deviceImg} alt='device img' />
                    </div>
                    <div className='codeVerification_container_main_textField'>
                        <text>Enter code sent to your phone</text>
                        <p>A conformation code has sent to your phone number 98***</p>
                    </div>
                    <div className='codeVerification_container_main_codeInputField'>
                        <Input placeholder='0' bordered={false} />
                        <Input placeholder='0' bordered={false} />
                        <Input placeholder='0' bordered={false} />
                        <Input placeholder='0' bordered={false} />
                    </div>
                </div>
                <div className='codeVerification_container_footer'>
                    <div className='codeVerification_container_footer_textField'>
                        <text>It may take a minute to receive your code</text>
                        <text>Haven't received it? <Link>Resend a new code.</Link></text>
                    </div>
                    <Link to='/claim' className='codeVerification_container_footer_submitBtn'>
                        Submit
                    </Link>
                    

                </div>
            </div>
        </div>
    )
}

export default CodeVerification
