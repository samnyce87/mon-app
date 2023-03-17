import React,{useState} from "react";

const Register = (props) => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [name,setName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>  
            <input value={name} onChange={(e)=>setName(e.target.value)} type="name" id="name" placeholder="Full name" name="name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="your email" name="email" />
            <label htmlFor="passeword">passeword</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="passeword" placeholder="******" name="passeword" />
            <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("Login")}>Already have an account? Login here.</button>
            </div>
    );
};

export default Register;