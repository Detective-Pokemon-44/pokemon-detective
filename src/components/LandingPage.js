import { useNavigate, Link } from 'react-router-dom';
import useInputState from '../hooks/useInputState';
import { useUpdateUsername } from './ContextUsername';
import { CSSTransition } from 'react-transition-group';
import pokemonLogo from '../assets/images/pd-logo.png';
import aboutIcon from '../assets/images/circle-info-solid.svg';
import { Modal } from '@mui/material';
import swal from 'sweetalert';
import { useRef } from 'react';


export default function LandingPage() {
  const navigate = useNavigate();
  const nodeRef = useRef(null);

  const updateUser = useUpdateUsername();
  // realtime updates input value with built in reset function
  const [username, updateUsername, resetUsername] = useInputState("");
  // updates username w/user input then resets input field

  function handleClick(e) {
    e.preventDefault();
    !username && swal('Hey Detective! Please enter your name.');
    updateUser(username);
    resetUsername();
  }


  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames="card"
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div className='LandingPage card' ref={nodeRef}>
          <div className="LandingPage-aboutContainer">
            <Link to="/about">
              <img src={aboutIcon} className="LandingPage-aboutIcon" alt="about" />
            </Link>
          </div>
          <div className="LandingPage-imgContainer">
            <img src={pokemonLogo} alt="logo" />
          </div>
          <form className='LandingPage-form'>
            <label htmlFor='username' className='LandingPage-formUsername'>Please Enter Your Name</label>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            />
            <div className="LandingPage-formButtonContainer">
              <button type='submit' onClick={handleClick}>
                Start Game
              </button>
              <button onClick={(e) => {
                e.preventDefault();
                navigate('/highscores')
              }
              }>High Scores</button>
            </div>
          </form>
        </div>
      </CSSTransition>
    </>
  )
}