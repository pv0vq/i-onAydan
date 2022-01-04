export const LogIntrue = 'LogIntrue'
export const LogInfalse = 'LogInfalse'

export function logIntrue(hooMemberId) { // 유저 아이디 액션
    return {
        type: LogIntrue,
        hooMemberId
    };
}

export function logInfalse() { // 로그아웃시 아이디 액션
    return {
        type: LogInfalse
    };
}