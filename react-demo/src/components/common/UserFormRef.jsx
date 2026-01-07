import { useEffect, useRef } from "react";

const UserFormRef = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    console.log("Re-rendered");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form is submitted:", {
      email: emailRef.current.value,
      passwordRef: passwordRef.current.value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserFormRef;
