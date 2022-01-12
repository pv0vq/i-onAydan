import AniMal from "./pages/AniMal";
import AniMalGridList from "./pages/AniMalGridList";
import AniMalImpo from "./pages/AniMalImpo";
import AniMalRewrite from "./pages/AniMalRewrite";
import AniMalWrite from "./pages/AniMalWrite";
import UserJoin from "./pages/UserJoin";
import UserLogin from "./pages/UserLogin";
import UserGridList from "./pages/UserGridList";


export default [ // 라우터 설정
    {
        path: '/',
        component: AniMalGridList
    },
    {
        path: '/ani',
        component: AniMal
    },
    {
        path: '/ani/:id',
        component: AniMalImpo

    },
    {
        path: '/ani/rewrite',
        component: AniMalRewrite

    },
    {
        path: '/ani/write',
        component: AniMalWrite

    },
    {
        path: '/ani/hoojoin',
        component: UserJoin

    },
    {
        path: '/ani/login',
        component: UserLogin

    },
    {
        path: '/adm/user',
        component: UserGridList

    },

];