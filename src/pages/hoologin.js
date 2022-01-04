import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {LogInfalse, LogIntrue} from "../redux/action";

const Hoologin = () => { //로그인 페이지


    const [hooMemberId, setHooMemberId] = useState(''); //유저 아이디
    const [hooMemberPassword, setHooMemberPassword] = useState(''); // 유저 비밀번호


    const history = useNavigate(); // 화면이동
    const dispatch = useDispatch(); // 리덕스 전달


    const frm = new FormData() // 유저정보를 폼데이터로 담기
    frm.append('username', hooMemberId);
    frm.append('password', hooMemberPassword);


    const onSubmit = async () => { // 로그인 요청
     axios.post('/auth/loginProc', frm) // 로그인 정보 폼데이터로 전송
            .then(res => {  dispatch({type: LogIntrue, hooMemberId});
                }, error => { // 로그인 실패 시
                dispatch({type: LogInfalse});
                alert('로그인 실패');
            });
     history('/');
    }


    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type="text" placeholder="Enter id" value={hooMemberId}
                                  onChange={(e) => setHooMemberId(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={hooMemberPassword} placeholder="Password"
                                  onChange={(e) => setHooMemberPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}
export default Hoologin;