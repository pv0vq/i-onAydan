import React, {useEffect,useState} from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import AniMalList from "../components/AniMalList";
import {Link} from "react-router-dom";
const AniMal = () =>{
    const [aniMal, setAniMal] = useState([]);
    const [loading, setLoding] = useState(true);
      

    useEffect(() => { //랜더링 시 실행 즉 마운트라고 생각하는게 편함
        axios.get('/ani') //JSONPlaceholder 받아온거임
            .then(response => { // 비동기 응답
                setAniMal(response.data); //useState안에 값을 넣음
                setLoding(false);
            })
    }, []); // 실행될때 한번만 데이터 가져오기

    useEffect(() => {
        //console.log(aniMal); // [] 값만들어지고
    },[aniMal]); // user변경사항 있을때 실행

    return (
        <>
            <h1>Animal list</h1>
            {loading ? <Spinner/> : //트루면 <Spinner/> 실행 아니면  <AniMalList aniMal = {aniMal}/> 실행
            <AniMalList user = {aniMal}/>}
            {/*props를 넘겨줌 */}
        </>

    );
};
export default AniMal;