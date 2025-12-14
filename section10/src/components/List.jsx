import "./List.css";
import TodoItem from "./TodoItem";
import {useState, useMemo} from 'react';

const List = ({todos, onUpdate, onDelete}) => {
    // 검색한 값
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    // 검색 필터
    const getFilteredData = () => {
        if(search === ""){
            return todos;
        }

        return todos.filter((todo) => 
            todo.content
                .toLowerCase()
                .includes(search.toLowerCase()));
    }

    // 필터된 값을 이 컴포넌트가 리렌더링 될 때마다 호출함
    const filteredTodos = getFilteredData();

    const {totalCount, doneCount, notDoneCount} = 
        useMemo(() => {
            console.log("getAnalyzedData 호출!");
            const totalCount = todos.length;
            const doneCount = todos.filter((todo)=> todo.isDone).length;
            const notDoneCount = totalCount - doneCount;

            return {
                totalCount,
                doneCount,
                notDoneCount
            };
    }, [todos])
    // 의존성배열: deps


    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
        <div>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>notDone: {notDoneCount}</div>
        </div>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요"/>
            <div className="todos_wrapper">
                {/* 배열에 담긴 값(todos)을 리스트 형태로 반복적으로 렌더링 */}
                {/* 컴포넌트에 반드시 key라는 고유한 값으로 전달해줘야함 */}
                {filteredTodos.map((todo)=> {
                    return (
                        <TodoItem 
                            key={todo.id} 
                            {...todo}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default List;