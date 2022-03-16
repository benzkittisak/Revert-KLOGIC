import React, { useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import MEMBER_DATA from '../../assets/data/member.data';

const LoginPage = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:9000/api/province/find/622cae1a7e014563065a21c6`)
    .then((res) => {
        if(username.match(/[a-zA-Zก-ฮ]/g) || username.length > 13){
            return alert("ใส่ให้ถูกสิว๊ะ")
        }
        else if(res.data){
           if(password !== MEMBER_DATA.password){
               return alert("รหัสผ่านไม่ถูกต้อง")
           }
           else {
               return alert("เข้าสู่ระบบสำเร็จ")
           }
        }
        else {
            return alert("ไม่พบข้อมูล")
        }
    })
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
          <Link to={process.env.PUBLIC_URL + '/account'} className="btn btn-coral">เข้าสู่ระบบ</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
