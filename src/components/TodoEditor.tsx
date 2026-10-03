import { useState } from 'react';
import Button from '@/components/html/Button';
import Input from '@/components/html/Input';

export default function TodoEditor(){
    const [text,setText] = useState(''); //text 상태 정의, 초깃값 빈 문자열
    return(
        <form className='todo__form'>
            <div className='todo__editor'>
                <Input type='text' className='todo__input' placeholder='Enter Todo List'
                value={text} onChange={(e)=>setText(e.target.value)} />
                <Button className='todo__button' type='submit'>Add</Button>
            </div>
        </form>
    );
}