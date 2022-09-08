import React from 'react'
import './exprerience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Exprerience = () => { 
  return (
    <section id='exprerience'>
        <h5>What Skills We Have</h5>
        <h2>Our Experience</h2>
        <div className='container experience__container'>
            <div className='experience__frontend'>
                <h3>Frontend Development</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'  />
                        <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Basic</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>Reactjs</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>Vue</h4>
                        <small className='text-light'>basic</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='experience_backend'>
            <h3>Backend Development</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>Node JS</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>PHP</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>JavaScript ES6</h4>
                        <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>Python</h4>
                        <small className='text-light'>Basic</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>MySQL</h4>
                        <small className='text-light'>Basic</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                        <h4>MongoDB</h4>
                        <small className='text-light'>Basic</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Exprerience