import { Session } from '../requests'
import { useNavigate } from 'react-router-dom'

function SignInPage(props) {
  const { onSignIn } = props
  
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const { currentTarget } = event;

    const formData = new FormData(currentTarget)
    const params = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    Session.create(params).then(data => {
      if (data.id) {
        onSignIn()
        // Navigated to Index page from the browser
        // We can 'push' on history to manipulate the browser
        // and direct our user to any page in our app
        // props.history.push('/questions') <--- not working
        navigate('/questions')
      }
    })
  }

  return(
    <main>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Sign In" />
      </form>
    </main>
  )
}

export default SignInPage

