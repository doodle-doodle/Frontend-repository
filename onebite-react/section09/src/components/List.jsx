import './List.css'
import TodoItem from './TodoItem';
import {useState} from "react";

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

    return (
        <div className='List'>
            <h4>Todo List 🪼</h4>
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