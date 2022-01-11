import React, {useState, useEffect} from "react";
import {useLocation,useNavigate} from "react-router-dom"
import axios from "axios";
import {Card, ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";

const Rewrite = () =>{ // 동물 리스트 수정 페이지

    const [neutering, setNeutering] = useState('');
    const [aniname, setAniname] = useState('');
    const [aniType, setAniType] = useState('');
    const [condition, setCondition] = useState('');
    const [animal, setAnimal] = useState(null);
    const location = useLocation();
    const history =useNavigate();
    const user = useSelector(state => state.value); //리덕스 get 함수


    useEffect(() => { //랜더링 시 실행 즉 마운트라고 생각하는게 편함
        axios.get('/ani/' + location.state.id) //JSONPlaceholder 받아온거임
            .then(response => { // 비동기 응답
                setAnimal(response.data); //useState안에 값을 넣음

            })
    }, []); // 실행될때 한번만 데이터 가져오기

    const onSubmit =() => { // 동물 수정 완료 axios
        axios.put('/aniput/'+ animal.animal_ID ,{
            animal_ID: animal.animal_ID,
            intake_CONDITION: condition,
            sex_UPON_INTAKE: neutering,
            name:aniname,
            animal_TYPE:aniType
        },{
            headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user
                }
        });
        history('/ani/' + location.state.id);

    }

    return(
    <>
        <form onSubmit={onSubmit}>
        <Card style={{ width: '18rem' }}>
            <Card.Header>동물상태표</Card.Header>
            <ListGroup variant="flush">
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
                <ListGroup.Item> <div className="form-check">
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
                <ListGroup.Item>   <select  onChange={(e) => setNeutering(e.target.value)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>중성화</option>
                    <option value={"Neutered Male"}>Neutered Male</option>
                    <option value={"Spayed Female"}>Spayed Female</option>
                    <option value={"Intact Female"}>Intact Female</option>
                    <option value={"Intact Male"}>Intact Male</option>
                </select>
                </ListGroup.Item>

            </ListGroup>
        </Card>
            <button type="onSubmit">수정</button>
        </form>

    </>
);
}
export default Rewrite;