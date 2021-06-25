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


function SignUpWithNum() {

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
                        <Link to='/login' className='auth_container_main_header_back'>
                            <img src={arrowLeft} alt='' />
                            <text>Back</text>
                        </Link>
                    </div>
                    <div className='auth_container_main_content_signUpWithNum'>
                        <div className='withPhoneNoTitle'>
                            <text>Lets sign you in</text>
                            <p>Sign in with  your phone number</p>
                        </div>
                        
                        <div className='withPhoneNumSignUp'>
                            
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
                                            
                                            <Input bordered={false}  size="large" placeholder="username" prefix={<UserOutlined />} defaultValue=""/>
                                        </Form.Item>
                                    </div>
                                    <div className='withPhoneNo_form_formItem'>    
                                        <Form.Item
                                            
                                            name="username"
                                           // bordered={false}
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Please input your phone number!',
                                            },
                                            ]}
                                        >   
                                            
                                            <Input bordered={false}  size="large"  prefix={<img src={nepalIcon} alt='nepalFlag' height={12}/>} defaultValue="+977"/>
                                        </Form.Item>
                                    </div>
                                    
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
                                    
                                    <Link to='/code-verification' className='withPhoneNo_form_Btn'>
                                      <Button bordered={false}>Log In</Button>  
                                    </Link>
                                    
                                    
                                </Form>  
                                                      
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SignUpWithNum