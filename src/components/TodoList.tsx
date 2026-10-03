import TodoListItemEmpty from "@/components/TodoListItemEmpty";
import TodoListItem from "@/components/TodoListItem";

export default function TodoList(){
    return(
        <ul className="todo__list">
            {/* 할 일 목록이 없을 때 */}
            <TodoListItemEmpty />
            {/* 할 일 목록이 있을 때 */}
            <TodoListItem />
        </ul>
    );
}