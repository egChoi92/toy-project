import { useRef, useState } from "react";

export default function UserForm({ handleSubmit, setUserInputData, button }) {
  const [isValid, setIsValid] = useState(false);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const passwordInputType = button.id === "signup" ? "text" : "password";

  const handleValid = () => {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    if (email.includes("@") && password.length >= 8) {
      setIsValid(true);
      setUserInputData({
        email,
        password,
      });
    } else {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="user-form__input">
        <label htmlFor="email-input" className="user-label">
          <span className="user-label__title">Email</span>
          <input type="email" id="email-input" data-testid="email-input" ref={emailInputRef} onInput={handleValid} />
        </label>
        <label htmlFor="password-input" className="label">
          <span className="label__title">Password</span>
          <input type={passwordInputType} id="password-input" data-testid="password-input" ref={passwordInputRef} onInput={handleValid} />
        </label>
      </div>
      <button type="submit" className="user-form__button" data-testid={`${button.id}-button`} disabled={!isValid}>
        {button.text}
      </button>
    </form>
  );
}
