import React, {useEffect, useState} from "react";
import {
    Link,
    NavLink // activeClassName active 상탱
} from "react-router-dom";
import axios from "axios";
// url을 조정가능하게 만듬
import {useDispatch, useSelector} from 'react-redux'
import {LogInfalse, LogIntrue} from "../action";


const Navbar = () =>{
    // const [account,SetAccount] = useState('');
    const dispatch = useDispatch();
    const [usercheck, setUsercheck] = useState('');
    const user = useSelector(state => state.Loginck.value);
    //console.log(user);
    const onSubmit =() => {
        axios.post('/logout')
        dispatch({type: LogInfalse})
    }


    useEffect(() => {
        },[user]);

    useEffect(() => {
        axios.get('/auth/acount') .then(response => {
            setUsercheck(response.data)
           console.log(usercheck);
        })
        if(JSON.parse(localStorage.getItem("hooMemberId")) === usercheck){
            console.log(user);
            dispatch({type: LogIntrue})
           // console.log(JSON.parse(localStorage.getItem("hooMemberId")));
            console.log(user);
        }
        else {
            dispatch({type: LogInfalse})
        }

    },[]);

// test

        // useEffect(() => { //랜더링 시 실행 즉 마운트라고 생각하는게 편함
    //     axios.get('/auth/acount') //JSONPlaceholder 받아온거임
    //         .then(response => { // 비동기 응답
    //             SetAccount(response.data);
    //               //  console.log(account);
    //         })
    // },); // 실행될때 한번만 데이터 가져오기

    if (user === 'false') {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink className="nav-link" to="/ani/hoojoin">회원가입</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/ani/login">로그인</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    else{
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink className="nav-link" to="/movies">Movies</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/ani">AniMalList</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/ani/login" onClick={onSubmit} >로그아웃</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>

        );


    }

}
export default Navbar;