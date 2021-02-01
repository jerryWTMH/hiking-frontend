import React from 'react';
import './Register1.css';
import { useForm } from 'react-hook-form';

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // 輸出成 json
}

function Register1({ token }) {
  const { register, handleSubmit } = useForm();

  const handleClick = data => {
    console.log(data);
    postData('https://hiking-backend.herokuapp.com/api/profile', data)
    .then(data => console.log(data)) // JSON from `response.json()` call
    .catch(error => console.error(error))
  }

  return (
    <div className="container">
      <div className="R1title">建立個人資料</div>
      <form>
        <label className="text-label">名字</label><br />
        <input className="R1background"  type="text" id="name" name="name" placeholder="輸入您的名稱" ref={register} /><br />
        <label className="gender-label">性別</label>
        <select className="Genderbackground" type="text" id="gender" name="gender" ref={register} >        
            <option>請選擇</option>
            <option>男</option>
            <option>女</option>    
        </select>
        <br />
        <label className="phone-label">手機</label><br />
        <select className="BackgroundPhoneRegion" type="text" id="phone" name="phoneRegion" ref={register} >
            <option>台灣+8860</option>
            <option>香港+852</option>
            <option>伊拉克+964</option> 
        </select>
        <input className="BackgroundPhoneNumber" type="text" id="phone" name="phoneNumber"placeholder="輸入您的手機號碼" ref={register} />
        <br />
        <label className="text-label">生日</label><br />
        <input className="R1background" type="date" id="birth" name="birth" placeholder="請選擇" ref={register} /><br />
        <label className="text-label">居住地</label><br />
        <select className="R1background" type="text" id="live" name="live" ref={register} >
            <option>請選擇</option>
            <option>台北市</option>
            <option>台中市</option>    
        </select>
        <br />
        <input className="Rectangle" type="button" defaultValue='同意並註冊' onClick={handleSubmit(handleClick)} />
      </form>
    </div>
  );
}

export default Register1;
