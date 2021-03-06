import React from 'react';
import {AppContainer} from './styles';
import {Column} from "./Column";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "./state/AppStateContext";
import {addList} from "./state/actions";
import {CustomDragLayer} from "./CustomDragLayer";

export const App = () => {
    const {lists, dispatch} = useAppState();

    return (
        <AppContainer>
            <CustomDragLayer />
            {lists.map(item => <Column key={item.id} id={item.id} text={item.text} />)}
            <AddNewItem onAdd={(text) => dispatch(addList(text))} toggleButtonText={"+ Add another list"}/>
        </AppContainer>
    );
}
