import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import DaumPost from "../components/DaumPost";

const UserJoin = () =>{ // 회원가입 페이지


    const [hooMemberId, setHooMemberId] = useState('');
    const [nickname, setnickname] = useState('');
    const [hooMemberPassword, setHooMemberPassword] = useState('');
    const [phone, setPhone] = useState('');

    const [address, setAdress] = useState('');
    const [addressDetail, setAdressDetail] = useState('');

    const [isOpenPost, setIsOpenPost] = useState(false); // 다음주소api판단
    const onChangeOpenPost = () => {
        setIsOpenPost(!isOpenPost);
    };

    const history =useNavigate()


    const onSubmit =() => { // 회원가입 서버에 요청
        axios.post('http://localhost:8080/api/signup',{
            username: hooMemberId,
            nickname: nickname,
            password: hooMemberPassword,
            phone: phone,
            adress: address,
            adressDetail: addressDetail
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

                <Form.Group className="mb-3" controlId="formBasicNickname">
                    <Form.Label>닉네임</Form.Label>
                    <Form.Control type="text" value={nickname} placeholder="닉네임"
                                  onChange={(e) => setnickname(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>휴대폰</Form.Label>
                    <Form.Control type="phone" value={phone} placeholder="휴대폰"
                                  onChange={(e) => setPhone(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAdress">
                    <Form.Label>주소</Form.Label>
                    <Form.Control onClick={onChangeOpenPost} placeholder="주소" defaultValue={address} />
                    {isOpenPost  ? (
                        <DaumPost setAdress = {setAdress} setIsOpenPost ={setIsOpenPost}/>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAdressDetail">
                    <Form.Label>상세주소</Form.Label>
                    <Form.Control type="text" value={addressDetail} placeholder="상세주소"
                                  onChange={(e) => setAdressDetail(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}
export default UserJoin;