import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt="" />
            
        </div>
        <div className="about-text">
            <h2> {props.title} </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero facilis distinctio obcaecati dolore molestias praesentium ratione hic, inventore incidunt nisi est pariatur eligendi reprehenderit natus, ea quidem voluptatum reiciendis?</p>
            <button> {props.button} </button>
        </div>
    </div>
  )
}

export default About
