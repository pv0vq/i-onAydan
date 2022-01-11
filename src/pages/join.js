import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {Button, Form} from "react-bootstrap";

const Join = () =>{ // 회원가입 페이지


    const [hooMemberId, setHooMemberId] = useState('');
    const [nickname, setnickname] = useState('');
    const [hooMemberPassword, setHooMemberPassword] = useState('');

    const history =useNavigate()


    const onSubmit =() => { // 회원가입 서버에 요청
        axios.post('http://localhost:8080/api/signup',{
            username: hooMemberId,
            nickname: nickname,
            password: hooMemberPassword,
        });

        history('/ani/login');

    }

    return(
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type="text" placeholder="Enter id" value={hooMemberId}
                                  onChange={(e) => setHooMemberId(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={hooMemberPassword}placeholder="Password"
                                  onChange={(e) => setHooMemberPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>닉네임</Form.Label>
                    <Form.Control type="text" value={nickname}placeholder="닉네임"
                                  onChange={(e) => setnickname(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}
export default Join;