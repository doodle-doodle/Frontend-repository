import './List.css'
import TodoItem from './TodoItem';
import {useState, useMemo} from "react";

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e)=> {
        setSearch(e.target.value);

    };


    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => 
            todo.content.toLowerCase().includes(search.toLowerCase())); 
    };
    

    const filteredTodos = getFilteredData();

    // const getAnalyzedData = ()=>{
    //     console.log("getAnalyzedData 호출!");
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo)=> todo.isDone).length;
    //     const notDoneCount = totalCount - doneCount;

    //     return {
    //         totalCount, doneCount, notDoneCount
    //     }
    // };

    const {totalCount, doneCount, notDoneCount }= useMemo(()=>{
        
        console.log("getAnalyzedData 호출!");
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=> todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount, doneCount, notDoneCount
        }

    }, [todos]);
    // 의존성배열: deps 배열 변경 시에만 콜백함수 시행

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return (
        <div className='List'>
            <h4>Todo List 🪼</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>total: {doneCount}</div>
                <div>total: {notDoneCount}</div>
            </div>
            <input value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요.' />
            <div className='todos_wrapper'>
                {filteredTodos.map((todo)=>{
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
                })}
            </div>
        </div>
    ); // 맵 메서드를 활용해서 배열에 담긴 데이터를 리스트 형식으로 렌더링 
};

export default List;