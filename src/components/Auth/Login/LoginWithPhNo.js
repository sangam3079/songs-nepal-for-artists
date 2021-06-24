import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles.scss'
import bgImg from '../../../assets/images/bg.png'
import logo from '../../../assets/images/logo.png'
import logoSN from '../../../assets/images/logoSN.png'
import fbLogo from '../../../assets/images/Icon awesome-facebook-f.png'
import googleLogo from '../../../assets/images/ui.png'
import arrowLeft from '../../../assets/images/Icon awesome-arrow-left.png'
import nepalIcon from '../../../assets/images/nepal (1).png'
import { ArrowLeftOutlined, UserOutlined,LockOutlined } from '@ant-design/icons';

import { Form, Input, Button, Tooltip, Typography } from 'antd';


function LoginWithNum() {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };


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
                            <Link to='/login'>
                                <img src={arrowLeft} alt='' />
                                <text>Back</text>
                            </Link>
                            
                        </div>
                    </div>
                    <div className='auth_container_main_content2'>
                        <div className='title'>
                            <text>Lets sign you in</text>
                            <p>Sign in with  your phone number</p>
                        </div>
                        
                        <div className='withPhoneNo'>
                            
                                <Form
                                    className='withPhoneNo_form'
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    >
                                    <div className='withPhoneNo_form_formItem'>    
                                        <Form.Item
                                            
                                            name="username"
                                           // bordered={false}
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                            ]}
                                        >   
                                            
                                            <Input bordered={false}  size="large" placeholder="username" prefix={<img src={nepalIcon} alt='nepalFlag' height={12}/>} defaultValue="+977"/>
                                        </Form.Item>
                                    </div>
                                    <span ></span>
                                    <div className='withPhoneNo_form_formItem'>
                                    <Form.Item
                                        
                                        name="password"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                        ]}
                                    >
                                        <Input.Password  bordered={false} size="large" placeholder="password" prefix={<LockOutlined/>} />
                                    </Form.Item>
                                    </div>
                                    <div className='forget-password'>
                                        <a className="login-form-forgot" href="">
                                            forgot password ?
                                        </a>
                                    </div>
                                    
                                    <Link to='/code-verification'>
                                        <button type="primary" htmlType="submit">
                                            Log In
                                        </button>
                                    </Link>
                                    
                                    
                                </Form>  
                                                      
                        </div>
                        
                        <div className='social-link'>
                           <p>you can also use social login if you haven't registered your account.</p>

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
            
        </div>
    )
}

export default LoginWithNum