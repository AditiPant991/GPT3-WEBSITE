import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text gradient__header-content '>Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for traveling assistance inbulgence. Not thought all excise blessing, Inbulgence way everything joy alteration boisterous the attachement. Party we years to order allow asked of.</p>
          <div className='gpt3__header-content__input'>
            <input type={"email"}  placeholder="Enter email"/>
            <button type='button'>Get Start</button>
          </div>
          <div className='gpt3__header-content__people'>
            <img src={people} alt='people'/>
            <p>16,000 people requested account</p>
          </div>
      </div>

          <div className='gpt3__header-image'>
            <img src={ai} alt='ai' />
          </div>
    </div>
  )
}

export default Header