import React from 'react';
import './App.css';
import consoleApp from './Twenty-Twenty-Twenty-Console.exe';

function App() {
  return (
    <div className="App">
      <header>
        <div className='row headerText'>
          <div className='col col-1of3'>
            <span>TWENTY</span>
          </div>
          <div className='col col-1of3'>
            <span>TWENTY</span>
          </div>
          <div className='col col-1of3'>
            <span>TWENTY</span>
          </div>
        </div>
        <div className='row header-buttons'>
          <div className='col col-1of2'>
            <a href={consoleApp}>Download</a>
          </div>
          <div className='col col-1of2'>
            <a href="https://github.com/billbobphil/Twenty-Twenty-Twenty-Console">Source Code</a>
          </div>
        </div>
      </header>
      <div className='description-container'>
        Spending long periods looking at computer, phone, or tablet screens can strain the eyes, 
        and often results in <a href="https://en.wikipedia.org/wiki/Computer_vision_syndrome">Computer Vision Syndrome</a>.
        One way to help prevent this problem is to use the 20-20-20 rule.
        The rule says that for every 20 minutes spent looking at a screen, a person should focus their eyes something 20 feet away for 20 seconds.
        The only problem is, it can be really hard to remember to take a break every 20 minutes.
        The Twenty-Twenty-Twenty app aims to help with that. 
        It is a lightweight, console only app that aims to be as unintrusive as possible while still ensuring you take a break to help your eyes.
      </div> 
    </div>
  );
}

export default App;
