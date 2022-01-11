import React, {useEffect,useState} from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import AniMalList from "../components/AniMalList";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const AniMal = () =>{ // 동물 리스트 페이지

    const [aniMal, setAniMal] = useState([]); // 동물변수
    const [loading, setLoding] = useState(true); //화면로딩변수
    const user = useSelector(state => state.value); //리덕스 get 함수
    const history = useNavigate(); // 화면이동

    useEffect(() => { //랜더링시 동물 리스트 요청
        axios.get('/ani')
            .then(response => {
                setAniMal(response.data); // 동물 리스트 데이터 담기
                setLoding(false); // 성공시 스피너 오프
            })
    }, []);

    useEffect(() => {// 리스트 삭제나 수정 글쓰기등 변경 사항이 있을 시 랜더링

    },[aniMal]);
    if(user === 'false'){
        history('/ani/login');
    }
    else {
        return (
            <>
                <h1>Animal list</h1>
                {loading ? <Spinner/> :
                    <AniMalList user={aniMal}/>}
            </>

        );
    }
};
export default AniMal;