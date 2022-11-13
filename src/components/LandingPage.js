import useInputState from '../hooks/useInputState';
import { useNavigate } from 'react-router-dom';
import pokemonLogo from '../assets/images/pokemon-detective-low-resolution-logo-white-on-transparent-background.png'

export default function LandingPage({ handleUsername }) {
  const navigate = useNavigate();
  // realtime updates input value with built in reset function
  const [username, updateUsername, resetUsername] = useInputState("")
  // updates username w/user input then resets input field

  function handleClick(e) {
    e.preventDefault()
    handleUsername(username)
    resetUsername()
  }

  return (
    <>
      <div className='LandingPage card'>
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
    </>
  )
}