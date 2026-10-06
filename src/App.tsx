import { useState } from "react";
import TodoEditor from "@/components/TodoEditor";
import TodoHeader from "@/components/TodoHeader";
import TodoList from "@/components/TodoList";

export default function App() {
  const [todos,setTodos] = useState<Todo[]>([]);
  const addTodo = (title:string) => {
    setTodos((todos)=>[
      ...todos,
      {
        id: new Date().getTime(),
        title,
        done:false,
      },
    ]);
  };
  const toggleTodo = (id:number) => {
      setTodos((todos) =>
         todos.map((todo) =>
            todo.id === id ? {...todo,done: !todo.done} : todo
           )
      );
  };
  return(
    <div className="todo">
     <TodoHeader />
      {/*할 일 등록*/}
      <TodoEditor />
      {/* 할 일 목록 */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}