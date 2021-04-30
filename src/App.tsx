import React, {useContext} from 'react';
import {AppContainer} from './styles';
import {Column} from "./Column";
import {AddNewItem} from "./AddNewItem";
import {AppStateContext} from "./state/AppStateContext";

export const App = () => {
    const {lists} = useContext(AppStateContext);

    return (
        <AppContainer>
            {lists.map(item => <Column key={item.id} id={item.id} text={item.text} />)}
            <AddNewItem onAdd={console.log} toggleButtonText={"+ Add another list"}/>
        </AppContainer>
    );
}
