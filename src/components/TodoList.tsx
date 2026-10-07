import TodoListItemEmpty from "@/components/TodoListItemEmpty";
import TodoListItem from "@/components/TodoListItem";

export default function TodoList({
  todo,toggleTodo,deleteTodo,modifyTodo,
  }:{
   todos:Todo[];
   toggleTodo:(id:number) => void;
   deleteTodo:(id:number) => void;
   modifyTodo:(id:number,title:string) => void;
  }){
    return(
        <ul className="todo__list">
            {/* 할 일 목록이 없을 때 */}
            {todos.length === 0 && <TodoListItemEmpty />}
            {todos.length > 0 &&
               todo.map((todo)=> <TodoListItem key={todo.id} todo={todo} 
               toggleTodo={toggleTodo} deleteTodo={deleteTodo} 
               modifyTodo={modifyTodo} />)}
        </ul>
    );
}