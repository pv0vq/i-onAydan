import React, { useEffect, useState} from "react";
import RealGrid, {GridView, LocalDataProvider} from "realgrid";
import {columns, fields} from "./AnimalRealGrid";
import realgridid from "../realgridid.css"
import axios from "axios";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";


let container, provider, gridView;
const Home = () => { // 메인페이지

    const user = useSelector(state => state.value); //리덕스 get 함수
    const history =useNavigate(); //화면이동 변수
    const writeLogin = () => { (user === 'false') ? history('/ani/login') :  history('/ani/write')}; //글쓰기는 로그인 판단

    useEffect(() => { //랜더링시 그리드 시작
        axios.get('/ani')
            .then(res => {
                veiw(res.data);
                // provider.setRows(res.data);
            });
    },);

    const veiw = (e) => { // 동물 그리드에 데이터 연결
       container = document.getElementById('realgrid');
       provider = new LocalDataProvider(false); //데이터를 관리하는 중요한 객체
       gridView = new GridView(container); //눈에 보이는 부분을 담당하는 중요한 객체
       gridView.setDataSource(provider); // 화면에 데이터 뿌려줌
       provider.setFields(fields); // 데이터 저장을 위한 논리적 장소를 담당하는 객체
       gridView.setColumns(columns); // DataField의 정보를 화면에 표현하기 위한 속성을 담고 있는 객체
       provider.fillJsonData(e, {fillMode: "set"}); //json 데이터 받기
       gridView.setStateBar({visible: false});// 상태바 삭제
       gridView.setCheckBar({visible: false});//체크박스 삭제
       gridView.orderBy( // 시작시 정렬
           ['animalId'], // 칼럼명
           ['ascending'], // 오름차순
           ['insensitive'] //대소문자 구별
       );
        pageview();


    }

    const pageview = () => { // 그리드 페이징
        var page = -1; //현재 페이지 초기화
        var totalPage = -1; // 토탈 페이지 초기화
        gridView.setPaging(true, 6); // 페이징 사이즈
        page = gridView.getPage(); // 현재 페이지
        totalPage = gridView.getPageCount(); // 토탈 페이지
        document.getElementById("current-page-view").innerHTML = page + 1;
        document.getElementById("total-page-view").innerHTML = totalPage;

        gridView.onPageChanged = function(grid, page) {//페이지가 바뀐 다음 호출
            document.getElementById("current-page-view").innerHTML = page + 1;
        };

        gridView.onPageCountChanged = function(grid, pageCount) { // 페이지 갯수가 바뀐 다음 호출
            document.getElementById("total-page-view").innerHTML = pageCount;
        };

        gridView.onPageChanged = function(grid, page) {
            document.getElementById("current-page-view").innerHTML = page + 1;
        };

        gridView.onPageCountChanged = function(grid, pageCount) {
            document.getElementById("total-page-view").innerHTML = pageCount;
        };

    }


    const setPrevPage = () => { // 그리드 페이징 이전페이지 버튼
        var currentPage = gridView.getPage();
        gridView.setPage(currentPage - 1);

    }

    const setNextPagex = () => {// 그리드 페이징 다음페이지 버튼
        var currentPage = gridView.getPage();
        gridView.setPage(currentPage + 1);
    }

    const del = () =>{ // 그리드 삭제 버튼
        gridView.setEditOptions({ // 삭제 활성화
            deletable: true
        });
        var current = gridView.getCurrent(); //현재 포커스를 갖는 셀의 CellIndex 값을 가져옴
        var value = provider.getValue(current.dataRow, 'animalId'); // 포커스 갖는 셀에서 동물아이디 담기
        provider.removeRow(current.dataRow); // 포커스 가는 셀 그리드 삭제

        axios.delete('/anidel/' + value , { // 서버에 동물 정보 삭제 요청
            headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user
                }})
            .then(res => {alert("삭제");});
    }




    return(
        <>
            <br/>

   <div id ='realgrid'></div>
            <div className="toolbar">
                <Button variant="outline-primary" onClick={setPrevPage}> 이전페이지</Button>{' '}
                <span id="current-page-view"></span>/
                <span id="total-page-view"></span>
                <Button variant="outline-primary" onClick={setNextPagex}> 다음페이지</Button>{' '}
            </div>
            <Button variant="outline-dark"  onClick={writeLogin}>글쓰기</Button>
            <Button variant="outline-danger" onClick={del}>삭제</Button>{' '}

</>


    )
};

export default Home;