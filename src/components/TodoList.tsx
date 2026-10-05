import TodoListItemEmpty from "@/components/TodoListItemEmpty";
import TodoListItem from "@/components/TodoListItem";

export default function TodoList({todos}:{todos:Todo[]}){
    return(
        <ul className="todo__list">
            {/* 할 일 목록이 없을 때 */}
            {todos.length === 0 && <TodoListItemEmpty />}
            {todos.length > 0 &&
               todo.map((todo)=> <TodoListItem key={todo.id} todo={todo} />)}
        </ul>
    );
}