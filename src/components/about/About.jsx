import React from 'react'
import './about.css'
import ME from '../../assets/about_me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About US</h2>
        <div className='container about__container'>
            <div className='about__us'>
                <div className='about__me-image'>
                    <img src={ME} alt=''/>
                </div>
            </div>
            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                    <FaAward className='about__icon' />
                    <h5>Experience</h5>
                    <small>1+ Years Working</small>
                    </article>
                    <article className='about__card'>
                    <FiUsers className='about__icon' />
                    <h5>Client</h5>
                    <small>100+ Worldwide</small>
                    </article>
                    <article className='about__card'>
                    <VscFolderLibrary className='about__icon' />
                    <h5>Project</h5>
                    <small>10+ Completed</small>
                    </article>
                </div>
                <p>
                With a gathering of many individuals and students from different disciplines. 
                Our website will bring you technical knowledge such as hardware design, web design, mobile app, 
                embedded programming, IoT, Machine Learning....
                </p>
                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About