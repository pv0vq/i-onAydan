import React, {useState, useEffect} from "react";
import {useLocation,useNavigate} from "react-router-dom"
import axios from "axios";

const Write = () =>{ // 동물 글쓰기 페이지

    const [neutering, setNeutering] = useState('');
    const [aninum, setAninum] = useState('');
    const [aniname, setAniname] = useState('');
    const [aniType, setAniType] = useState('');
    const [condition, setCondition] = useState('');
    const history =useNavigate()
    // const aniid = location.state.id


    const onSubmit =() => { // 동물 수정 서버에 요청
        axios.post('/aniadd',{
            animal_ID: aninum,
            intake_CONDITION: condition,
            sex_UPON_INTAKE: neutering,
            name:aniname,
            animal_TYPE:aniType
        });
        history('/ani');

    }

    return(
        <>
            <form onSubmit={onSubmit}>
                동물번호
                <input
                    type="text"
                    value={aninum}
                    placeholder = "동물번호" //인풋창의 기본 디폴트
                    onChange={(e) => setAninum(e.target.value)}
                />
                <br/>
                <br/>
                동물이름
                <input
                    type="text"
                    value={aniname}
                    placeholder = "동물이름" //인풋창의 기본 디폴트
                    onChange={(e) => setAniname(e.target.value)}
                />
                <br/>
                <br/>
                <div className="form-check">
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
                />
                <br/>
                <br/>
                <div className="form-check">
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
                />

                <br/>
                <br/>

                <select  onChange={(e) => setNeutering(e.target.value)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>중성화</option>
                    <option value={"Neutered Male"}>Neutered Male</option>
                    <option value={"Spayed Female"}>Spayed Female</option>
                    <option value={"Intact Female"}>Intact Female</option>
                    <option value={"Intact Male"}>Intact Male</option>
                </select>

                <div className="form-check">
                    <input onChange={(e) => setNeutering(e.target.value)} className="form-check-input" type="checkbox" value={"Neutered Male"}
                           id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Neutered Male
                    </label>
                </div>
                <div className="form-check">
                    <input onChange={(e) => setNeutering(e.target.value)} className="form-check-input" type="checkbox" value={"Spayed Female"}
                           id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Spayed Female
                    </label>
                </div>
                <div className="form-check">
                    <input onChange={(e) => setNeutering(e.target.value)} className="form-check-input" type="checkbox" value={"Intact Female"}
                           id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Intact Female
                    </label>
                </div>
                <div className="form-check">
                    <input onChange={(e) => setNeutering(e.target.value)} className="form-check-input" type="checkbox" value={"Intact Male"}
                           id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Intact Male
                    </label>
                </div>
                <button type="onSubmit">작성</button>
            </form>
        </>
    );
}
export default Write;