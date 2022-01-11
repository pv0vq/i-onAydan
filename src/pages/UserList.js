import React, {useEffect, useState} from "react";
import {GridView, LocalDataProvider} from "realgrid";
import axios from "axios";
import {useSelector} from "react-redux";
import {Usercolumns, Userfields} from "../components/UserRealGrid";
import {Button} from "react-bootstrap";

let container, provider, gridView;
const UserList = () => { // 메인페이지


    const [userInfo, setUserInfo] = useState([]); // 동물변수
    const user = useSelector(state => state.value); //리덕스 get 함수


    useEffect(async () => { // 유저그리드 시작
        await axios.get('/admin/Hoouser', {
            headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user
                }
        })
            .then(res => {
                view(res.data);
            });

    },[] );

    const view = (e) =>{ // 유저그리드화면에 데이터 연결
        container = document.getElementById('realgrid');
        provider = new LocalDataProvider(false); //데이터를 관리하는 중요한 객체
        gridView = new GridView(container); //눈에 보이는 부분을 담당하는 중요한 객체
        gridView.setDataSource(provider); // 화면에 데이터 뿌려줌
        provider.setFields(Userfields); // 데이터 저장을 위한 논리적 장소를 담당하는 객체
        gridView.setColumns(Usercolumns); // DataField의 정보를 화면에 표현하기 위한 속성을 담고 있는 객체
        // provider.setRows(res.data);
        provider.fillJsonData(e,{ fillMode: "set" }); //json 데이터 받기
        gridView.orderBy( // 시작시 정렬
            ['userId' ], // 칼럼명
            ['ascending' ], // 오름차순
            ['insensitive' ] //대소문자 구별
        );
        gridView.setEditOptions({ // 그리드 편집기 사용 선언
            editable: true,
            updatable: true,
            deletable: true
        });
        gridView.columnByName("userId").editable = false; // userId 편집 비활성화
        gridView.columnByName("username").editable = false;  // username 편집 비활성화
        pageview();
        userput();

    }

    const pageview = () => { // 유저 그리드 페이징
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


    const setPrevPage = () => { // 그리드 페이징 이전페이지 버튼
        var currentPage = gridView.getPage();
        gridView.setPage(currentPage - 1);

    }

    const setNextPagex = () => { // 그리드 페이징 다음페이지 버튼
        var currentPage = gridView.getPage();
        gridView.setPage(currentPage + 1);
    }

    const userput = () =>{ // 그리드 유저 수정
        var curr = gridView.getCurrent(); //beginUpdateRow() 통한 편집
        gridView.beginUpdateRow(curr.itemIndex); // 해당 인덱스 설정
        gridView.showEditor(); // 에디터화면
        gridView.setFocus(); // 포커스잡기
        provider.onRowUpdated = function(provider, row) { // 해당로우에서 편집된 데이터를 axios로 전송
            var r = provider.getJsonRow(row); //편집데이터담기
            axios.put('/admin/HoouserIns', JSON.stringify(r), { //편집된 데이터를 axios로 전송
                headers:
                    {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + user
                    }})
                .then(res => {alert("수정");});
        };

    }
    // const putPut = () => {
    //        var curr = gridView.getCurrent(); //beginUpdateRow() 통한 편집
    //         gridView.beginUpdateRow(curr.itemIndex); // 해당 인덱스 설정
    //         gridView.showEditor(); //
    //         gridView.setFocus(); //
    //         provider.onRowUpdating = function(provider, row) {
    //         var item = gridView.getEditingItem(row); // 현재 편집 중인 행 정보와 값을 가져옵니다.
    //         console.log(item);
    //         var r = provider.getJsonRow(item);
    //         axios.put('/admin/HoouserIns', JSON.stringify(r), {
    //             headers:
    //                 {
    //                     "Content-Type": "application/json",
    //                     "Authorization": "Bearer " + user
    //                 }
    //         })
    //             .then(res => {
    //                 alert("수정");
    //             });
    //
    //     }
    // }


    const del = () =>{ // 그리드 삭제 버튼
        gridView.setEditOptions({ // 그리드 삭제 선언
            deletable: true
        });
        var current = gridView.getCurrent();
        var value = provider.getValue(current.dataRow, 'userId');
        provider.removeRow(current.dataRow);
        axios.delete('/admin/deleteuser/' + value , {
            headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user
                }})
            .then(res => {alert("삭제");});
    }

    return (
        <>
            <div id='realgrid'></div>
            <div className="toolbar">
                <Button variant="outline-primary" onClick={setPrevPage}> 이전페이지</Button>{' '}
                <span id="current-page-view"></span>/
                <span id="total-page-view"></span>
                <Button variant="outline-primary" onClick={setNextPagex}> 다음페이지</Button>{' '}
            </div>
            <Button variant="outline-danger" onClick={del}>삭제</Button>{' '}
            {/*<Button variant="outline-warning" onClick={putPut} >수정</Button>{' '}*/}
        </>


    )
};

export default UserList;