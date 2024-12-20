import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 py-6 mt-20'>
      <img width={160} src={assets.logo} alt="Logo" className='mb-4 lg:mb-0' />
      <p className='text-center lg:text-left mb-4 lg:mb-0'>Copyright @imrohitsampannavar.dev | All rights reserved.</p>
      <div className='flex gap-4'>
        <img width={38} src={assets.facebook_icon} alt="Facebook" />
        <img width={38} src={assets.twitter_icon} alt="Twitter" />
        <img width={38} src={assets.instagram_icon} alt="Instagram" />
      </div>
    </div>
  );
}

export default Footer;
