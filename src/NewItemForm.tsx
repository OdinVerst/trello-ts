import React, {FC, useState} from 'react';
import {NewItemButton, NewItemFormContainer, NewItemInput} from './styles';
import {useFocus} from './utils/useFocus';

type NewItemFormProps = {
    onAdd(text: string): void
}

export const NewItemForm: FC<NewItemFormProps> = ({onAdd}) => {
    const [text, setText] = useState<string>('');
    const inputRef = useFocus()

    const submitHandler: React.FormEventHandler = (evt) => {
        evt.preventDefault();
        onAdd(text);
    }

    return (
        <NewItemFormContainer onSubmit={submitHandler}>
            <NewItemInput ref={inputRef} value={text} onChange={(evt) => setText(evt.target.value)}/>
            <NewItemButton>Create</NewItemButton>
        </NewItemFormContainer>
    );
};