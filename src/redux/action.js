export const LogIntrue = 'LogIntrue'
export const LogInfalse = 'LogInfalse'

export function logIntrue(hooMemberToken) { // 유저 아이디 액션
    return {
        type: LogIntrue,
        hooMemberToken
    };
}

export function logInfalse() { // 로그아웃시 아이디 액션
    return {
        type: LogInfalse
    };
}