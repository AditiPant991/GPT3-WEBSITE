import React from 'react'
import './possibility.css'

import possibilityImage from '../../assets/possibility.png'
function Possibility() {
  return (
    <div className='gpt3__possibility section_padding' id='possibility'>
      <div className='gpt3__possibility-image'>

        <img src={possibilityImage} alt="possiblityimg"/>
      </div>
      <div className='gpt3__possibility-content'>
      <h4 >Request Earcly Acess to get Started</h4>
        <h1 className='gradient-bar'>The Possibility</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        <h4 >Request Earcly Acess to get Started</h4>
      </div>
    </div>
  )
}

export default Possibility