import {memo} from 'react';
import "./TodoItem.css";

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return(
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">
                {new Date(date).toLocaleDateString()}
            </div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // True반환시 -> Props 바뀌지 않음 -> 리렌더링 X
//     // False반환시 -> Props 바뀜 -> 리렌더링 O

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.contnet) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });

// useCallback 함수를 이용하면 위에처럼 안해도된다! (최적화)
export default memo(TodoItem);