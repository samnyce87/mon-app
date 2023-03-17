import React,{useState} from "react";

const Login = (props) => {

const [email,setEmail]=useState('');
const [pass,setPass]=useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email);
}

    return (
 <div className="auth-form-container">
    <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="your email" name="email" />
            <label htmlFor="passeword">passeword</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="passeword" placeholder="******" name="passeword" />
            <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("Register")}>Don't have an account? Register here.</button>
            </div>
    );
};

export default Login;