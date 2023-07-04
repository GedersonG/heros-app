import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogIn = () => {
    navigate('/marvel', {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogIn}
      >Log In</button>
    </div>
  )
}
