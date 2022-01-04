import React, {useEffect,useState} from 'react';
import axios from "axios";
import Spinner from "../components/Spinner";
import {Link, useParams,useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";


const AniMalImpo = () => { // 동물 상세 페이지

    const [aniaml, setAniaml] = useState(null); //동물 변수
    const [loading, setLoding] = useState(true); // 로딩 변수
    const {id} =useParams(); //주소창의 파라미터값 들고옴
    const history =useNavigate(); //화면이동 변수


    useEffect(() => {  // 랜더링시 동물 상세 정보 요청
        axios.get('/ani/' + id)
            .then(response => {
                setAniaml(response.data);
                setLoding(false);
            })
    }, []); // 실행될때 한번만 데이터 가져오기

    useEffect(() => {},[aniaml]); //동물 상세 정보 변할 때 랜더링

        const aniMalDetail = loading ? <Spinner/> : ( //동물 상세 html
        <div>
            <div>동물이름:  {aniaml.name}</div>
            <div>컨티션:    {aniaml.intake_CONDITION}</div>
            <div>중성화여부: {aniaml.sex_UPON_INTAKE}</div>
            <div>보호날짜:  {aniaml.datetime}</div>
        </div>
    )
    const del = () => { //동물 삭제 요청
        axios.delete('/anidel/' + id)
            .then(response => {
                history('/ani') // 리스트 화면으로 이동
            })
    }
    const put = () => { //동물 수정 요청
        history('/ani/rewrite',
        { state:{id:id}}); // 수정화면으로 이동
    }
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>보호동물정보</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">AniMalImpo</Card.Subtitle>
            <Card.Text>
                {aniMalDetail}
            </Card.Text>
            <Card.Link onClick={del}>삭제 </Card.Link>
            <Card.Link onClick={put}>수정 </Card.Link>
        </Card.Body>
        </Card>
        </>
    );

}
export default AniMalImpo;
