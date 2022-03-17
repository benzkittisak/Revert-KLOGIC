import React, { useState } from "react";
import { connect } from "react-redux";
import {signInStart} from '../../redux/user/user.actions';

const LoginPage = ({signInStart}) => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInStart({username , password})
  }

  const {username , password} = userData;

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form row">
        <div className="login-form-img">
          <img
            src="https://cdn.discordapp.com/attachments/950973417216180244/952618006821867561/Master_Logo_KMUTNB_Thai-02.png"
            className="img-fluid"
            alt="KMUTNB_LOGO"
          />
        </div>

        <div className="col-lg-12 mb-3">
          <label htmlFor="username" className="form-label">
            รหัสนักศึกษา
          </label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            value={username}
            className="form-control"
          />
        </div>

        <div className="col-lg-12 mb-3">
          <label htmlFor="password" className="form-label">
            รหัสผ่าน 
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            className="form-control"
          />
        </div>
        <div className="col-lg-12 mb-3 d-flex justify-content-end">
          <button type="submit" className="btn btn-coral">เข้าสู่ระบบ</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInStart: (usernameAndPassword) => dispatch(signInStart(usernameAndPassword)),
})

export default connect(null, mapDispatchToProps)(LoginPage);
