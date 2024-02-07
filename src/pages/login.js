
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../actions/login.action";

export function Login(){

  const form = useRef();
  const dispatch = useDispatch();
    
  const postForm = async (e) => {
    e.preventDefault();
    console.log(form.current[0].value)
    console.log(form.current[1].value)

    const userLogin = {
      email: form.current[0].value,
      password: form.current[1].value,

    }
    dispatch(postLogin(userLogin))
  }


    return <>
     <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form ref={form} onSubmit={(e) => postForm(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
           {/* <Link to='/user' className="sign-in-button">Sign In</Link> */}
           <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
    </>
    
  }