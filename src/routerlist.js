import AniMal from "./pages/AniMal";
import Home from "./pages/Home";
import AniMalImpo from "./pages/AniMalImpo";
import Rewrite from "./pages/Rewrite";
import Write from "./pages/write";
import Join from "./pages/join";
import Hoologin from "./pages/hoologin";
import UserList from "./pages/UserList";


export default [ // 라우터 설정
    {
        path: '/',
        component: Home
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
        component: Rewrite

    },
    {
        path: '/ani/write',
        component: Write

    },
    {
        path: '/ani/hoojoin',
        component: Join

    },
    {
        path: '/ani/login',
        component: Hoologin

    },
    {
        path: '/adm/user',
        component: UserList

    },

];