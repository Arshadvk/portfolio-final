import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link to='https://www.instagram.com/https.arshaad/' className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>

      <Link to='https://www.linkedin.com/in/arshad-vk' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      
      <Link to='/' className="cs-center">
        <Icon icon="fa6-brands:facebook" />               
      </Link>


      <Link to='https://github.com/Arshadvk' className="cs-center">
        <Icon icon="fa6-brands:github" />              
      </Link>
      
      <Link to='/' className="cs-center">
        <Icon icon="fa6-brands:whatsapp" />              
      </Link>
    </Div>
  )
}
