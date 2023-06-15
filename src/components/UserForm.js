import { useRef, useState } from "react";

export default function UserForm({handleSubmit, setUserInputData, button}) {
  const [isValid, setIsValid] = useState(false);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  
  const passwordInputType = button.id === 'signup' ? 'text' : 'password';
  
  const handleValid = () => {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    if (email.includes('@') && password.length >= 8) {
      setIsValid(true)
      setUserInputData({
        email,
        password
      })
    } else {
      setIsValid(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" data-testid="email-input" ref={emailInputRef} onInput={handleValid} />
      <input type={passwordInputType} data-testid="password-input" ref={passwordInputRef} onInput={handleValid} />
      <button type="submit" data-testid={`${button.id}-button`} disabled={!isValid}>{button.text}</button>
    </form>
  )
}
