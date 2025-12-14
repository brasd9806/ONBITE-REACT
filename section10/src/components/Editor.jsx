import "./Editor.css";
import {useState, useRef} from 'react';

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if(content === "") {
            contentRef.current.focus();  // 빈값을 입력했을때 focus하도록 설정(useRef사용)
            return;
        }
        onCreate(content);
        setContent(""); // 추가된 후, 빈값으로 초기화
    }

    // 사용자가 키보드를 누를 때 발생하는 이벤트
    const onKeydown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    return (
        <div className="Editor">
            <input value={content} 
                ref={contentRef}
                onChange={onChangeContent} 
                onKeyDown={onKeydown}
                placeholder="새로운 Todo..."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    )
};

export default Editor;