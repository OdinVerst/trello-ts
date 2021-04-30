import React, {useContext, useReducer} from 'react';
import {AppContainer} from './styles';
import {Column} from "./Column";
import {AddNewItem} from "./AddNewItem";
import {AppStateContext} from "./state/AppStateContext";
import {addList} from "./state/actions";
import {appStateReducer} from "./state/appStateReducer";

export const App = () => {
    const [{lists}, dispatch] = useReducer(appStateReducer, useContext(AppStateContext))

    return (
        <AppContainer>
            {lists.map(item => <Column key={item.id} id={item.id} text={item.text} />)}
            <AddNewItem onAdd={(text) => dispatch(addList(text))} toggleButtonText={"+ Add another list"}/>
        </AppContainer>
    );
}
