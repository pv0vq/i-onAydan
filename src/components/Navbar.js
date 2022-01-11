import React, {useEffect, useState} from "react";
import {
    Link,
    NavLink // activeClassName active 상탱
} from "react-router-dom";
import axios from "axios";
// url을 조정가능하게 만듬
import {useDispatch, useSelector} from 'react-redux'
import {LogInfalse} from "../redux/action";



const Navbar = () => { //네비게이션 바

    const dispatch = useDispatch(); //리덕스 set 함수
    const user = useSelector(state => state.value); //리덕스 get 함수


    const onSubmit = () => { // 로그인아웃시 서버에 요청, 리덕스값: false로 바꿈
        dispatch({type: LogInfalse});
    }


    if (user === 'false') { // 비로그인시 회원가입과 로그인 네비바
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
    } else { // 로그인시 게시판리스트와 로그아웃 네비바
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
                            <li className="nav-item"><NavLink className="nav-link" to="/ani">AniMalList</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/adm/user">UserList</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/ani/login"
                                                              onClick={onSubmit}>로그아웃</NavLink></li>

                        </ul>
                    </div>
                </div>
            </nav>

        );


    }

}
export default Navbar;