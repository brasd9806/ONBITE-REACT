import {useState, useRef} from 'react';
// useState : 값이 변하면 재렌더링함.  / useRef: 값이 변경되어도 재렌더링 하지 않음

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        // console.log(e);
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    // const onChangeName = (e) => {
    //     // setName(e.target.value);
    //     setInput({
    //         ...input,  // name이 아닌 birth, country, bio값을 변경하지않고 그대로 유지
    //         name : e.target.value
    //     })
    // }

    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    };
    

    return (
        <div>
            
            <div>
                <input 
                    ref={inputRef}
                    value={input.name} 
                    name="name"
                    onChange={onChange} 
                    placeholder={"이름"} />
            </div>
            <div>
                <input value={input.birth}
                    name="birth"
                    onChange={onChange}
                    type="date" />
            </div>
            <div>
                <select value={input.country}
                name='country'
                 onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea value={input.bio} name='bio' onChange={onChange}/>
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;