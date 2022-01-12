import React, {useState, useEffect} from "react";
import {useLocation,useNavigate} from "react-router-dom"
import axios from "axios";
import {Button, Card, ListGroup} from "react-bootstrap";
import FroalaEditor from 'react-froala-wysiwyg';
import ReactDOM from "react-dom";

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import {useSelector} from "react-redux";

// Require Font Awesome.
// import 'font-awesome/css/font-awesome.css';


const AniMalWrite = () =>{ // 동물 글쓰기 페이지

    const [neutering, setNeutering] = useState("Neutered Male"); //중성화파악
    const [aniname, setAniname] = useState('');
    const [aniType, setAniType] = useState('');
    const [condition, setCondition] = useState('');
    const [context, setContext] = useState('');
    const user = useSelector(state => state.value); //리덕스 get 함수
    const history =useNavigate()


    const handleModelChange = (e) => { // 프로알라 context
        //태그제거정규식
        // const extractTextPattern = /(<([^>]+)>)/gi;
        //태그제거
        // const content = contentVal.replace(extractTextPattern,"");
        setContext(e.valueOf())
    }

    const onSubmit =() => { // 동물 수정 서버에 요청
        console.log(context);
        axios.post('/aniadd',{
            intakeCondition: condition,
            sexUponIntake: neutering,
            name:aniname,
            animalType:aniType,
            context:context
        },{
            headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user
                }
        });
      history('/');

    }


    return(
        <>
            <br/>
            <form onSubmit={onSubmit} >
            <Card style={{ width: '40rem'}} >
            <Card.Header>동물 상태 작성표</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>동물이름:
                    <input
                        type="text"
                        value={aniname}
                        placeholder = "동물이름" //인풋창의 기본 디폴트
                        onChange={(e) => setAniname(e.target.value)}
                    /></ListGroup.Item>
                <ListGroup.Item> <div className="form-check">
                    <input onChange={(e) => setAniType(e.target.value)} className="form-check-input" type="checkbox" value={"Dog"}
                           id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Dog
                    </label>
                </div>
                    <div className="form-check">
                        <input onChange={(e) => setAniType(e.target.value)} className="form-check-input" type="checkbox" value={"Cat"}
                               id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Cat
                        </label>
                    </div>
                    <input
                        type="text"
                        value={aniType}
                        placeholder="기타" //인풋창의 기본 디폴트
                        onChange={(e) => setAniType(e.target.value)}
                    /></ListGroup.Item>
                <ListGroup.Item>  <div className="form-check">
                    <input onChange={(e) => setCondition(e.target.value)} className="form-check-input" type="checkbox" value={"Sick"}
                           id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Sick
                    </label>
                </div>
                    <div className="form-check">
                        <input onChange={(e) => setCondition(e.target.value)} className="form-check-input" type="checkbox" value={"Nomal"}
                               id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Nomal
                        </label>
                    </div>
                    <input
                        type="text"
                        value={condition}
                        placeholder="기타" //인풋창의 기본 디폴트
                        onChange={(e) => setCondition(e.target.value)}
                    /></ListGroup.Item>
                <ListGroup.Item>

                    <select
                             onChange={(e) => setNeutering(e.target.value)}
                             className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >

                    <option value={neutering}>Neutered Male</option>
                    <option value="Spayed Female">Spayed Female</option>
                    <option value="Intact Female">Intact Female</option>
                    <option value="Intact Male">Intact Male</option>
                </select>
                </ListGroup.Item>
                </ListGroup>
                {/*프로알라 에디터*/}
                <FroalaEditor
                    id ='context'
                    type='textarea'
                    onModelChange={handleModelChange}
                />
            </Card>
                <Button variant="outline-info" type="onSubmit">작성</Button>{' '}
</form>
        </>
    );
}
export default AniMalWrite;