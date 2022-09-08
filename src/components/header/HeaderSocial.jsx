import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {GrFacebook} from 'react-icons/gr'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="-blank"><FaGithub/></a>
        <a href="https://dribbble.com" target="_blank"><FiDribbble/></a>
        <a href='https://www.facebook.com/' target="_blank"><GrFacebook/></a>
    </div>
  )
}

export default HeaderSocial