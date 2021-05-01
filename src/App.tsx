import React, {useContext} from 'react';
import {AppContainer} from './styles';
import {Column} from "./Column";
import {AddNewItem} from "./AddNewItem";
import {AppStateContext} from "./state/AppStateContext";
import {addList} from "./state/actions";

export const App = () => {
    const {lists, dispatch} = useContext(AppStateContext);

    return (
        <AppContainer>
            {lists.map(item => <Column key={item.id} id={item.id} text={item.text} />)}
            <AddNewItem onAdd={(text) => dispatch(addList(text))} toggleButtonText={"+ Add another list"}/>
        </AppContainer>
    );
}
