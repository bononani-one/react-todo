interface Todo {
    id:number;
    title:string;
    done:boolean;
}
interface TodoAction {
    addTodo:(title:string) => void;
    deleteTodo:(id:number) => void;
    modifyTodo:(id:number,title:string) => void;
    toggleTodo:(id:number) => void;
}
interface TodoContext {
    todos: Todo[];
}