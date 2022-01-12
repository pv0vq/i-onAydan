import REACT, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';

const DaumPost = (props) => { // 다음 주소 api 컴포넌트
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        props.setAdress(fullAddress);
        props.setIsOpenPost(false);
    }
    return (<DaumPostCode onComplete={handleComplete} className="post-code" />);
}
export default DaumPost;