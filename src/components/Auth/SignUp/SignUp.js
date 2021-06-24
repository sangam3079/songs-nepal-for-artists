import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles.scss'
import bgImg from '../../../assets/images/bg.png'
import logo from '../../../assets/images/logo.png'
import logoSN from '../../../assets/images/logoSN.png'
import fbLogo from '../../../assets/images/Icon awesome-facebook-f.png'
import googleLogo from '../../../assets/images/ui.png'
import arrowLeft from '../../../assets/images/Icon awesome-arrow-left.png'

function SignUp() {
    return (
        <div className='auth'>
            <div className='auth_container'>
                <div className='auth_container_image'>
                    <img className='auth_container_image_bgColor' src={bgImg} alt='bgImg'/>
                    <div className='auth_container_image_content'>
                        <img className='auth_container_image_content_logo' src={logoSN} alt='logo'/>
                        <div className='auth_container_image_content_textField'>
                            <text>Don't have an account ?</text>
                            <p>Sign Up</p>
                        </div>
                    

                    </div>
                </div>
                <div className='auth_container_main'>
                    <div className='auth_container_main_header'>
                        <img src={logo} alt='' />
                        <div className='auth_container_main_header_back'>
                            <Link to='/artist-type'>
                                <img src={arrowLeft} alt='' />
                                <text>Back</text>
                            </Link>
                            
                        </div>
                    </div>
                    <div className='auth_container_main_content'>
                        <text>Create an  account</text>
                        <Link to='/' className='Btn_phNo'>Continue with phone number</Link>
                        <Link to='/' className='Btn_email'>Continue with email</Link>
                        <Link to='/' className='Btn_google'>
                            <img src={googleLogo} alt='google logo' />
                            <text> Log in with google </text>
                           
                        </Link>
                        <Link to='/' className='Btn_facebook'>
                            <img src={fbLogo} alt='fblogo' />
                            <text> Log in with facebook </text>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp
