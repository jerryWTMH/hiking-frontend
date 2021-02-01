import React from 'react';
import './Register0.css';
import BackButton from '../components/BackButton';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

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

function Register0() {
  const { register, handleSubmit } = useForm();

  let history = useHistory();
  const handleClick = data => {
    history.push("/register1"); // turn page
    console.log(data);

    postData('https://hiking-backend.herokuapp.com/api/register', data)
    .then(data => console.log(data)) // JSON from `response.json()` call
    .catch(error => console.error(error))

    const token = data.token;

    console.log('post finish');
  }

  return (
    <div className="container">
      <BackButton />
      <div className="title">註冊帳號</div>
      <form>
        <label className="form-label">電子信箱</label><br />
        <input className="background" type="text" id="email" name="email" placeholder="請輸入電子信箱" ref={register} /><br />
        <hr className="divider"></hr>
        <div className="error-info">錯誤資訊</div>
        <label className="form-label">密碼</label><br />
        <input className="background" type="text" id="password" name="password" placeholder="請輸入密碼" ref={register} /><br />
        <hr className="divider"></hr>
        <div className="password-info">密碼必須包含8個字元以上</div>
        <label className="form-label">確認密碼</label><br />
        <input className="background" type="text" placeholder="請重新輸入密碼" /><br />
        <hr className="divider"></hr>
        <div className="privacy-info">使用這個應用程式前，請先詳閱「Go Hiking」的<br />
          《<span className="text-style-1">隱私權政策</span>》及《<span className="text-style-1">服務條款</span>》
        </div>
        <input className="Rectangle" type="button" defaultValue='同意並註冊' onClick={handleSubmit(handleClick)} />
      </form>
    </div>
  );
}

export default Register0;