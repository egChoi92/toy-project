import { useRef, useState } from "react";

export default function UserForm({handleSubmit, setUserInputData, button}) {
  const [isValid, setIsValid] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  const handleValid = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
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
      <input data-testid="email-input" ref={emailRef} onInput={handleValid} />
      <input data-testid="password-input" ref={passwordRef} onInput={handleValid} />
      <button data-testid={button.id} disabled={!isValid}>{button.text}</button>
    </form>
  )
}
