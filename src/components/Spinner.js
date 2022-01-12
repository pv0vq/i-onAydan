import React from "react";
const Spinner = () => { // 로딩중 화면 css, 스피너 컴포넌트
        return(
            <div className="d-flex justify-content-center">
                <div
                    className="spinner-grow text-danger"
                    style={{width: '3rem', height: '3rem'}}
                    role="status">
                <span
                    className="visually-hidden">
                    Loading...</span>
                </div>
            </div>
        )
};

export default Spinner;