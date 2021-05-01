import React, {FC, useContext} from 'react';
import {ColumnContainer, ColumnTitle} from './styles';
import {AddNewItem} from "./AddNewItem";
import {AppStateContext} from "./state/AppStateContext";
import {Card} from "./Card";
import {addTask} from "./state/actions";

type ColumnProps = {
    text: string;
    id: string
}

export const Column: FC<ColumnProps> = ({text, id}) => {
    const {getTasksByID, dispatch} = useContext(AppStateContext);

    const tasks = getTasksByID(id);

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => <Card key={task.id} text={task.text} id={task.id} />)}
            <AddNewItem onAdd={(text) => dispatch(addTask(text, id))} toggleButtonText={"+ Add another task"} dark />
        </ColumnContainer>
    );
};