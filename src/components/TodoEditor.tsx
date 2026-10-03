import Button from '@/components/html/Button';
import Input from '@/components/html/Input';

export default function TodoEditor(){
    return(
        <form className='todo__form'>
            <div className='todo__editor'>
                <Input type='text' className='todo__input' placeholder='Enter Todo List' />
                <Button className='todo__button' type='submit'>Add</Button>
            </div>
        </form>
    );
}