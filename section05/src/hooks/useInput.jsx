import {useState} from 'react';

function useInput () {  // 커스텀 훅은 앞에 "use"를 붙히면 된다!
    const [input, setInput] = useState("");
    
    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;