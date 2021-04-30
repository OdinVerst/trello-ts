import React, {FC, useContext} from 'react';
import {ColumnContainer, ColumnTitle} from './styles';
import {AddNewItem} from "./AddNewItem";
import {AppStateContext} from "./state/AppStateContext";
import {Card} from "./Card";

type ColumnProps = {
    text: string;
    id: string
}

export const Column: FC<ColumnProps> = ({text, id}) => {
    const {getTasksByID} = useContext(AppStateContext);

    const tasks = getTasksByID(id);

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => <Card key={task.id} text={task.text} id={task.id} />)}
            <AddNewItem onAdd={console.log} toggleButtonText={"+ Add another task"} dark />
        </ColumnContainer>
    );
};