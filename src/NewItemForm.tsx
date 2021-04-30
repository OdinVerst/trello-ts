import React, {FC, useState} from 'react';
import {NewItemButton, NewItemFormContainer, NewItemInput} from './styles';

type NewItemFormProps = {
    onAdd(text: string): void
}

export const NewItemForm: FC<NewItemFormProps> = ({onAdd}) => {
    const [text, setText] = useState<string>('');

    const submitHandler: React.FormEventHandler = (evt) => {
        evt.preventDefault();
        onAdd(text);
    }

    return (
        <NewItemFormContainer onSubmit={submitHandler}>
            <NewItemInput value={text} onChange={(evt) => setText(evt.target.value)}/>
            <NewItemButton>Create</NewItemButton>
        </NewItemFormContainer>
    );
};