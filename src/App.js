import React from 'react'

import {CTA,Brand,Navbar} from './components';
import {Footer,Blog,Possibility,Features,Whatgpt3,Header} from './containers'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Whatgpt3 />
        <Features />
        <Possibility />

        <Footer />
    </div>
  )
}

export default App