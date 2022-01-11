import React, {useEffect, useState} from "react";
import {GridView, LocalDataProvider} from "realgrid";
import axios from "axios";
import {useSelector} from "react-redux";
import {Usercolumns, Userfields} from "../components/UserRealGrid";

let container, provider, gridView;
const UserList = () => { // 메인페이지


    const [userInfo, setUserInfo] = useState([]); // 동물변수

    const user = useSelector(state => state.value); //리덕스 get 함수
    // const history =useNavigate(); //화면이동 변수
    // const writeLogin = () => { (user === 'false') ? history('/ani/login') :  history('/ani/write')}; //글쓰기는 로그인 판단

    const view = (e) =>{
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
        userput();

    }

    const userput = () =>{
        gridView.setEditOptions({ // 편집기 사용 선언
            editable: true,
            updatable: true,
            deletable: true
        });
        gridView.columnByName("userId").editable = false; // 편집 비활성화
        gridView.columnByName("username").editable = false;
        var curr = gridView.getCurrent(); //beginUpdateRow() 통한 편집
        gridView.beginUpdateRow(curr.itemIndex); // 해당 인덱스 설정
        gridView.showEditor(); //
        gridView.setFocus(); //
        provider.onRowUpdated = function(provider, row) { // 해당로우에서 편집된 데이터를 axios로 전송
            var r = provider.getJsonRow(row);
            axios.put('/admin/HoouserIns', JSON.stringify(r), {
                headers:
                    {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + user
                    }})
                .then(res => {alert("수정");});
        };
    }

    useEffect(async () => {
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



    const del = () =>{
        gridView.setEditOptions({
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
            <button onClick={del}>
                삭제
            </button>
        </>


    )
};

export default UserList;