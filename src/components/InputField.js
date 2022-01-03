import React from "react";

const InputField = ({
                        type,
                        value,
                        placeholder,
                        onChange,
                        errorMessage
                    }) =>{
    //React.Fragment div를 생략하기위해 사용, <> </>가능
    return (
        <React.Fragment>
             <input style={{borderColor: 'red'}}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
             /><br />
                 <div style={{color: 'red'}}>{errorMessage}</div>
        </React.Fragment>);
};

export default InputField;