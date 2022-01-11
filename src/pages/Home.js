import React, { useEffect, useState} from "react";
import RealGrid, {GridView, LocalDataProvider} from "realgrid";
import {columns, fields} from "./AnimalRealGrid";
import realgridid from "../realgridid.css"
import axios from "axios";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";


let container, provider, gridView;
const Home = () => { // 메인페이지

    const user = useSelector(state => state.value); //리덕스 get 함수
    const history =useNavigate(); //화면이동 변수
    const writeLogin = () => { (user === 'false') ? history('/ani/login') :  history('/ani/write')}; //글쓰기는 로그인 판단



    const veiw = (e) => {
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

    const pageview = () => {
        var page = -1;
        var totalPage = -1;
        gridView.setPaging(true, 6);
        page = gridView.getPage();
        totalPage = gridView.getPageCount();
        document.getElementById("current-page-view").innerHTML = page + 1;
        document.getElementById("total-page-view").innerHTML = totalPage;

        gridView.onPageChanged = function(grid, page) {
            document.getElementById("current-page-view").innerHTML = page + 1;
        };

        gridView.onPageCountChanged = function(grid, pageCount) {
            document.getElementById("total-page-view").innerHTML = pageCount;
        };

        gridView.onPageChanged = function(grid, page) {
            document.getElementById("current-page-view").innerHTML = page + 1;
        };

        gridView.onPageCountChanged = function(grid, pageCount) {
            document.getElementById("total-page-view").innerHTML = pageCount;
        };

    }


    const setPrevPage = () => {
        var currentPage = gridView.getPage();
        gridView.setPage(currentPage - 1);

    }

    const setNextPagex = () => {
        var currentPage = gridView.getPage();
        gridView.setPage(currentPage + 1);
    }

    useEffect(() => {
        axios.get('/ani')
            .then(res => {
                veiw(res.data);
                // provider.setRows(res.data);
    });
        },);
    const del = () =>{
        gridView.setEditOptions({
            deletable: true
        });
        var current = gridView.getCurrent();
        var value = provider.getValue(current.dataRow, 'animalId');
        provider.removeRow(current.dataRow);

        axios.delete('/anidel/' + value , {
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
                <button onClick={setPrevPage}>
                    이전페이지
                </button>

                <span id="current-page-view"></span>/
                <span id="total-page-view"></span>
                <button onClick={setNextPagex}>
                    다음페이지
                </button>
            </div>

            <button onClick={writeLogin}>글쓰기</button>
            <button onClick={del}>삭제</button>
</>


    )
};

export default Home;