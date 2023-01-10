import React from 'react'
import { Feature } from '../../components'
import './feature.css'
function Features() {

  const featuresData=[
    {
      title:'Improving end distrusts instantly',
      text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
      title:'Improving end distrusts instantly',
      text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
      title:'Improving end distrusts instantly',
      text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
      title:'Improving end distrusts instantly',
      text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
  ]

  return (
    <div className='gpt3__features section__padding'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It.Step into Future Today & Make it Happen.</h1>
     <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__features-container'>
        {
          featuresData.map((item,index)=>{
            return(
              <Feature text={item.text} title={item.title}  />
            )
          })
        }
      </div>

    </div>
  )
}

export default Features