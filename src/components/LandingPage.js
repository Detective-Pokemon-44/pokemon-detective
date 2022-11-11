import useInputState from '../hooks/useInputState';
import { useNavigate } from 'react-router-dom';

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
        <form className='LandingPage-form'>
          <label htmlFor='username'>Enter username</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          />
          <button type='submit' onClick={handleClick}>
            Start Game
          </button>
          <button onClick={(e) => {
            e.preventDefault();
            navigate('/highscores')
          }
          }>High Scores</button>
        </form>

      </div>
    </>
  )
}