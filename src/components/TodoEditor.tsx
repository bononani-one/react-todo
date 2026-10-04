import { useState } from 'react';
import Button from '@/components/html/Button';
import Input from '@/components/html/Input';

export default function TodoEditor({addTodo,}:{addTodo:(title:string)=>void;})
{
    const [text,setText] = useState(''); //text 상태 정의, 초깃값 빈 문자열
    const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();//페이지 새로고침 막기
        addTodo(text); //App의 addTodo가 실행됨
        setText(''); //입력칸 비우기
    };
    return(
        <form className='todo__form' onSubmit={handleSubmit}>
            <div className='todo__editor'>
                <Input type='text' className='todo__input' placeholder='Enter Todo List'
                value={text} onChange={(e)=>setText(e.target.value)} />
                <Button className='todo__button' type='submit'>Add</Button>
            </div>
        </form>
    );
}