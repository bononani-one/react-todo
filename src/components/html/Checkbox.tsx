import {useId} from 'react';

type CheckboxProps = Omit<React.ComponentPropsWithRef<'input'>,'type'> & { 
    type ?:'checkbox';
    parentClassName:string;
};

export default function Checkbox(props:CheckboxProps){
    const {parentClassName,children,...rest} = props;
    const uuid = useId(); // 훅 사용해서 컴포넌트마다 고유한 id를 자동으로 생성
    return (
        <div className={parentClassName}>
            <input id={uuid} {...rest} />
            <label htmlFor={uuid}>{children}</label>
        </div>

    );
}