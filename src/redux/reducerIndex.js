import {createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import Loginck from "./loginck";

const persistConfig = {
    key: "hooMemberId", // 로컬저장소 키값 설정

    storage // 저장소 설정(localStorage)
    //  whitelist: ["Loginck"]
};

const counterReducer = persistReducer(persistConfig, Loginck);  // 스토어 정의

export default function configureStore() { // 리덕스 정의
    const store = createStore(counterReducer);
    const persistor = persistStore(store);
    return {store, persistor};
};