import React from 'react'
import image from '../../images/Recipe-Connect-App.png'
import image2 from '../../images/Restaurant-Reviewer-App.png'
import image3 from '../../images/Restaurants-App.png'
import './Projects.css'

function Projects() {
  return (
    <div className='projects'>
      <div className='container'>
        <div className='card-container'>
           <div>
            <img src={image} alt="Recipe Connect App"/>
          </div> 
          <div>
            <h2 className='project-title'>Recipe Connect App</h2>
            <div className='links'>
              <a className='project-link' href='https://youtu.be/i_HBBA5H6gQ'>Demo</a>
              <a className='project-link' href='https://github.com/adrianic92/recipe-connect-app'>Github</a>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='card-container'>
          <div>
            <img src={image2} alt="Restaurant Reviewer App"/>
          </div>
          <div >
            <h2 className='project-title'>Restaurant Reviewer App</h2>
            <div className='links'>
              <a className='project-link' href='https://youtu.be/t6XgzwaYsQM'>Demo</a>
              <a className='project-link' href='https://github.com/adrianic92/restaurant-reviewer-app'>Github</a>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='card-container'>
          <div>
            <img src={image3} alt="Restaurant App"/>
          </div>
          <div>
            <h2 className='project-title'>Restaurants App</h2>
            <div className='links'>
              <a className='project-link' href='https://youtu.be/Tcf-bte3KLE'>Demo</a>
              <a className='project-link' href='https://github.com/adrianic92/phase-3-sinatra-react-project'>Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects