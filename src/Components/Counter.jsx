import React, { useState } from 'react'
import './Counter.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faGoogle  } from '@fortawesome/free-brands-svg-icons';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if (counter >= 0 || counter <= 0) setCounter(counter + 1);
  }
  const decrementCounter = () => {
    if (counter >= 0 || counter <= 0) setCounter(counter - 1);
  }

  const resetCounter = () => {
    if (counter > 0 || counter < 0) setCounter(0);
  }

  return (
      <section className='container'>
        <header className='header'>
          Welcome! Try it out!
        </header>

        <div className='container-counter'>
          <aside className='counter'>

            <figure className='count'>
              <font>{counter}</font>
            </figure>

          </aside>
        </div>

        <article className='buttons'>
          <button type='button' onClick={decrementCounter} className='btn'>
            <FontAwesomeIcon icon={faMinus} size='lg' className='btn-icon' />
          </button>
          
          <button type="reset" onClick={resetCounter} className='btn'>
            <FontAwesomeIcon icon={faRefresh} size='lg' className='btn-icon' />
          </button>

          <button type='button' onClick={incrementCounter} className='btn'>
            <FontAwesomeIcon icon={faPlus} size='lg' className='btn-icon' />
          </button>
        </article>
        
        <aside className='autor'>
          <a href='https://www.linkedin.com/in/miguelbricenodev/' target='_blank' rel='noopener' >
            <FontAwesomeIcon icon={faLinkedinIn} className='icon-autor' />
          </a>
          <a href='https://github.com/mikejbp' target='_blank' rel='noopener'>
            <FontAwesomeIcon icon={faGithub} className='icon-autor' />
          </a>
          <a href='mailto:migueljbriceno@gmail.com'>
            <FontAwesomeIcon icon={faGoogle} className='icon-autor'/>
          </a>
          
        </aside>
      </section>
  )
}

export default Counter