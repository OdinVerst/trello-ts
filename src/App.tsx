import React from 'react';
import {AppContainer} from './styles';
import {Column} from "./Column";
import {Card} from "./Card";
import {AddNewItem} from "./AddNewItem";

export const App = () => {
    return (
        <AppContainer>
            <Column text={'Hello'}>
                <Card text={'New task'}/>
            </Column>
            <AddNewItem onAdd={console.log} toggleButtonText={"+ Add another list"} />
        </AppContainer>
    );
}
