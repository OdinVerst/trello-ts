import {Actions} from "./actions";
import {nanoid} from "nanoid";

export type Task = {
    id: string
    text: string
}
export type List = {
    id: string
    text: string
    tasks: Task[]
}
export type AppState = {
    lists: List[]
}

export const appStateReducer = (state: AppState, actions: Actions):AppState => {
    switch (actions.type) {
        case 'ADD_ITEM':
             return {...state, lists: state.lists.map(item => {
                    if (item.id === actions.payload.listID) {
                        item.tasks.push({id: nanoid(), text: actions.payload.text})
                    }
                    return item;
                 })}
        case 'ADD_LIST':
            return {...state, lists: [...state.lists, {id: nanoid(), text: actions.payload, tasks: []}]}
        default:
            return state
    }
}