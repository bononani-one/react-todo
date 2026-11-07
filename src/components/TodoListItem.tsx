import {memo,useState} from 'react';
import { useTodoStore } from '@/store/todoStore';
import SvgPencil from "@/components/svg/SvgPencil";
import SvgClose from "@/components/svg/SvgClose";
import Button from "@/components/html/Button";
import Checkbox from "@/components/html/Checkbox"

export default memo(function TodoListItem({todo}:{todo:Todo;}){
     const toggleTodo = useTodoStore((state)=>state.toggleTodo);
     const deleteTodo = useTodoStore((state)=>state.deleteTodo);
     const modifyTodo = useTodoStore((state)=>state.modifyTodo);

     const [isModify,setIsModify]=useState(false);
     const [modifyTitle,setModifyTitle]=useState('');
     //수정버튼 클릭 시 수정모드로 전환
     const modifyHandler = () =>{
        setIsModify((modify) => !modify);
        setModifyTitle(modifyTitle === '' ? todo.title : modifyTitle);
        if(modifyTitle.trim() != '' && modifyTitle !== todo.title) {
           modifyTodo(todo.id,modifyTitle);
        }
    };
    console.log('TodoListItem rendering');
    return(
       // 할 일이 완료되면 .todo__item--complete 추가 
        <li className={`todo__item ${todo.done && 'todo__item--complete'}`}>
          {!isModify && (
            <Checkbox parentClassName="todo__checkbox-group" 
            type="checkbox" className="todo__checkbox"
            checked={todo.done} onChange={()=>toggleTodo(todo.id)}>{todo.title}
            </Checkbox>
           )}
          {isModify && (
            <input type="text" className="todo__modify-input" 
             value={modifyTitle} onChange={(e) => setModifyTitle(e.target.value)} />
          )}
            <div className="todo__button-group">
            <Button className="todo__action-button" onClick={modifyHandler}>
                <SvgPencil />
            </Button>
            <Button className="todo__action-button" onClick={()=>deleteTodo(todo.id)}>
                <SvgClose />
            </Button>
            </div>
        </li>
    );
});