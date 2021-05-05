import {nanoid} from "nanoid";
import {Actions} from "./actions";
import {findItemByID} from "../utils/arrayUtils";

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

export const appStateReducer = (draft: AppState, actions: Actions):AppState | void => {
    switch (actions.type) {
        case 'ADD_ITEM':
            const { text, listID } = actions.payload;
            const targetListIndex = findItemByID(draft.lists, listID);

            draft.lists[targetListIndex].tasks.push({
                id: nanoid(),
                text: text
            })
            break;
        case 'ADD_LIST':
            draft.lists.push({
                id: nanoid(),
                text: actions.payload,
                tasks: []
            });
            break;
        default:
            break;
    }
}