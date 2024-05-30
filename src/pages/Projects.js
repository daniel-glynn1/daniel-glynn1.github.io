import React, { useState } from 'react';

import todo0 from '../assets/todo-screenshot0.png';
import todo1 from '../assets/todo-screenshot1.png';
import todo2 from '../assets/todo-screenshot2.png';
import todo3 from '../assets/todo-screenshot3.png';
import todo4 from '../assets/todo-screenshot4.png';
import todo5 from '../assets/todo-screenshot5.png';
import todo6 from '../assets/todo-screenshot6.png';
import todo7 from '../assets/todo-screenshot7.png';
import dice from '../assets/dice-screenshot.png';
import pigs from '../assets/pigs-screenshot.png';
import regis1 from '../assets/regis-screenshot1.png';
import regis2 from '../assets/regis-screenshot2.png';
import nba1 from '../assets/nba-screenshot1.png';
import nba2 from '../assets/nba-screenshot2.png';

import '../styles/Projects.css';

const Projects = () => {
  const [isTodoExpanded, setIsTodoExpanded] = useState(false);
  const [isDiceExpanded, setIsDiceExpanded] = useState(false);
  const [isPigsExpanded, setIsPigsExpanded] = useState(false);
  const [isRegisExpanded, setIsRegisExpanded] = useState(false);
  const [isNBAExpanded, setIsNBAExpanded] = useState(false);

  function todoClicked() {
    setIsTodoExpanded(!isTodoExpanded);
  }
  function diceClicked() {
    setIsDiceExpanded(!isDiceExpanded);
  }
  function pigsClicked() {
    setIsPigsExpanded(!isPigsExpanded);
  }
  function regisClicked() {
    setIsRegisExpanded(!isRegisExpanded);
  }
  function nbaClicked() {
    setIsNBAExpanded(!isNBAExpanded);
  }

  return (
    <div className='projectsOuter'>
      <div className='projectsHeader'>
        <h2 className='projectsTitle'>PROJECTS</h2>
      </div>
      <div className='projectsBody'>   
        <h2> Todo Today - Habit Tracker </h2> 
        <h3>A daily task tracking app designed to help you build habits</h3>
        <a href="https://daniel-glynn1.github.io/todotoday-info/" target="_blank" rel="noreferrer">
          Todo Today Information
        </a>
        {
          isTodoExpanded ? 
          <>   
            <p>Features:</p>
            <ul>
              <li>See how you've been doing by checking the history tab</li>
              <li>View history by week or month</li>
              <li>See how many days in a row you've done a task and earn a badge for doing a task every day for an entire week or month</li>
              <div class="todoImages">
                <img src={todo0} alt="todo today" />
                <img src={todo1} alt="todo today" />
                <img src={todo2} alt="todo today" />
                <img src={todo3} alt="todo today" />
              </div>
              <li>Need to make a note about a particular task for today? Open up the journal and write it there</li>
              <li>Hide a task if you don't need to worry about it for a while</li>
              <li>Skip a task if you don't need to do it today, and your streak won't be stopped</li>
              <li>Create subtasks to keep track of the different parts of a task</li>
              <li>Reorder, rename, and delete tasks to stay organized</li>
              <li>Tutorial when users open the app for the first time</li>
              <li>Customizable home screen</li>
              <li>Show tasks in a grid or list format</li>
              <li>Set daily reminders for each task</li>
              <li>Dark mode / Light mode</li>
              <div class="todoImages">
                <img src={todo4} alt="todo today" />
                <img src={todo5} alt="todo today" />
                <img src={todo6} alt="todo today" />
                <img src={todo7} alt="todo today" />
              </div>
              <li>And many more!</li>
            </ul>

            <p>Technical Details:</p>
            <ul>
              <li>For iOS only</li>
              <li>Built in Swift and SwiftUI</li>
              <li>All data stored locally</li>
              <li>Check it out in the iOS App Store</li>
            </ul>
          </> : <></>
        }
        <button class="expandButton" onClick={todoClicked}>
          {isTodoExpanded ? "Show less" : "Show more"}
        </button>
        
          
        <h2>Pass 'Em</h2>
        <h3>Online multiplayer alternative to Pass the Pigs (a dice game)</h3>   
        <a href="https://pass-em.onrender.com/" target="_blank" rel="noreferrer">
          Pass 'Em
        </a>
        { isPigsExpanded ?
          <>
            <div class="pigsImages">
              <img src={pigs} alt="pigs" />
            </div>
            
            <p>About:</p>
            <ul>
              <li>Play the game "Pass the Pigs" with your friends online</li>
              <li>Create/join a room by name and password or join a random room</li>
              <li>Chat functionality built in to communicate with the other players</li>
              <li>Adjust game settings (number of players, target score) to play the game how you like it</li>
              <li>See the rules of the game in the rules tab</li>
              <li>Messages from the server when someone joins or leaves</li>
              <li>Fun pig rolling animation when you roll</li>
              <li>See the scores of all players in the game</li>
              <li>Restart game button to start the fun again when someone wins</li>
            </ul>

            <p>Technical Details:</p>
            <ul>
              <li>Front-end built in React using TypeScript and CSS</li>
              <li>Back-end built using Node.js, Express, and socket.io</li>
              <li>Hosting/Deployment coming soon!</li>
            </ul>
            <a href="https://github.com/daniel-glynn1/pass_em_1" target="_blank" rel="noreferrer">
              Pass 'Em  GitHub Repository
            </a>
          </> : <></>
        }
        <button class="expandButton" onClick={pigsClicked}>
          {isPigsExpanded ? "Show less" : "Show more"}
        </button>


        <h2> Are My Dice Rigged?</h2>
        <h3>Web app that tells you the statistical significance of a set of 2-die sums</h3>
        <a href="https://daniel-glynn1.github.io/dice-rigged/" target="_blank" rel="noreferrer">
          Are My Dice Rigged?
        </a>
        {
          isDiceExpanded ?
          <>
            <div class="diceImages">
              <img src={dice} alt="dice" />
            </div>
            

            <p>About:</p>
            <ul>
              <li>Enter the count of each 2-dice sum in its corresponding box and hit calculate</li>
              <li>Once calculated, you are presented with a graph of the expected values and the actual values, as well as the p-value for the chi-square goodness of fit test that was performed.</li>
              <li>Gives insight into how likely the results you saw were just due to random chance</li>
            </ul>

            <p>Technical Details:</p>
            <ul>
              <li>Built using React and JavaScript, as well as HTML/CSS</li>
              <li>Used a chi-square JavaScript library for the p-value calculations</li>
              <li>Works entirely on the local browser - no connection to a server necessary</li>
            </ul>
          </> : <></>
        }
        <button class="expandButton" onClick={diceClicked}>
          {isDiceExpanded ? "Show less" : "Show more"}
        </button>


        <h2>Web-based Lumber Market Simulation game</h2>
        <h3>Front-end redesign</h3>
        {isRegisExpanded ?
          <>
            <div class="regisImages">
              <img src={regis1} alt="regis" />
              <img src={regis2} alt="regis" />
            </div>
            
            <p>About:</p>
            <ul>
              <li>Front-end development and refactoring of a web-based lumber market simulation game.</li>
              <li>Buy/sell lumber in different regions to capitalize on the market</li>
              <li>View messages of actions taken by other players in the game</li>
              <li>Chat feature to communicate with other players</li>
            </ul>

            <p>Technical Details:</p>
            <ul>
              <li>Built using React, Material-UI, and JavaScript</li>
              <li>This was a front-end refactor and redesign, not built from the ground up</li>
              <li>Designed the website to look good on both desktop and mobile devices</li>
              <li>Group project with other students from Colorado School of Mines students.</li>
              <li>Worked closely with our client, The Regis Company, to meet their requirements.</li>
            </ul>
          </> : <></>
        }
        <button class="expandButton" onClick={regisClicked}>
          {isRegisExpanded ? "Show less" : "Show more"}
        </button>

        <h2>"Which Statistics Best Predict the Results of NBA games?"</h2>
        <h3>NBA Boxscore Data Analysis Project</h3>
        {isNBAExpanded ?
          <>
            <p>About:</p>
            <ul>
              <li>Data Science project working with an NBA boxscore dataset</li>
              <li>Multiple machine learning models fitted to data and
                assessed to determine which game statistics correlate most with winning and best predict high winning teams</li>
            </ul>

            <p>Technical Details:</p>
            <ul>
              <li>Used Python, scikit-learn, Jupyter notebooks</li>
            </ul>

            <p>Some graphs from the report:</p>
            <div class="nbaImages">
              <img src={nba1} alt="nba" />
              <img src={nba2} alt="nba" />
            </div>
          </> : <></>
        }
        <button class="expandButton" onClick={nbaClicked}>
          {isNBAExpanded ? "Show less" : "Show more"}
        </button>
          
        </div>
     
    </div>


  );
};

export default Projects;