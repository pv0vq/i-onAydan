import {LogInfalse, LogIntrue} from "./action";

export const AcountCheck = { // state 초기값 (false)
    value : 'false'
}

const Loginck = (state = AcountCheck, action) => { //리덕스 함수 액션 발생시 실행 (store)
    switch(action.type) {
        case LogIntrue:
            return {
                ...state,
                value: action.hooMemberId //액션발생시 유저아이디 저장
            }
        case LogInfalse:
            return {
                value: 'false' // 로그아웃시 false
            }
        default:
            return state
    }
};

export default Loginck;
