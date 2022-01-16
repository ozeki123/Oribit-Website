import { useRef, useState, useEffect } from 'react';
import { faCheck,  faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Signup.scss'

const NAME_REGEX = /^[A-Za-z.\s_-]+$/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,24}$/;
const EMAIL_REGEX = /\S+@\S+\.\S+/;

function Signup () {
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [user, setUser] = useState('');
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();

  }, [])
  //Validation for name field
  useEffect(() => {
    const result = NAME_REGEX.test(name);
    console.log(result);
    console.log(name);
    setValidName(result);

  }, [name])

  //Validation for username field
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidUser(result);

  }, [user])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email])

  //Validation for password field
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd])

  //Validation error message
  useEffect(() => {
    setErrMsg('');

  }, [user, pwd])


  return (
    <section>
      <p pref={errRef} className={errMsg ? "errmsg" : 
      "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign up for Orbit</h1>
      <form>
        <label htmlFor="name">
          Full Name
          <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={validName || !name ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter full name here"
          autoComplete="off"
          required
          onChange={(e) => setName(e.target.value)}
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="namenote"
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
        />
        <p id="namenote" className={nameFocus && name && 
        !validName ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle}/>
          Must only contain letters <br/>
        </p>

        <label htmlFor="username">
          Username
          <span className={validUser ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={validUser || !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span>
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter email address here"
          ref={userRef}
          autoComplete="off"
          required
          onChange={(e) => setUser(e.target.value)}
          aria-invalid={validUser ? "false" : "true"}
          aria-describedby="usernote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p id="usernote" className={userFocus && user && 
        !validUser ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle}/>
          4 to 24 characters. <br/>
          Must begin with a letter. <br/>
          Alphanumeric characters, underscores, hyphens are allowed.
        </p>

        <label htmlFor="email">
          Email address
          <span className={validEmail ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={validEmail || !email? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span>
        </label>
        <input 
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="emailnote"
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions": "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle}/>
          Invalid email address
        </p>

        <label htmlFor="password">
          Password:
          <span className={validPwd ? "valid:" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={validPwd || !pwd ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span>
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle}/>
          8 to 24 characters. <br/>
          Must include uppercase and lowercase letters, a number, and a special character. <br/>
        </p>
        <button disabled={!validName || !validUser || !validPwd ? true : false}>Sign Up</button>
      </form>
    </section>
  )
}

export default Signup
