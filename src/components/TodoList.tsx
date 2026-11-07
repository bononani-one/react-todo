import { useTodoContext } from "@/hooks/useTodoContext";
import TodoListItemEmpty from "@/components/TodoListItemEmpty";
import TodoListItem from "@/components/TodoListItem";

export default function TodoList(){
    const {todos} = useTodoContext();
    return(
        <ul className="todo__list">
            {/* 할 일 목록이 없을 때 */}
            {todos.length === 0 && <TodoListItemEmpty />}
            {todos.length > 0 &&
               todos.map((todo)=><TodoListItem key={todo.id} todo={todo} />)}
        </ul>
    );
}