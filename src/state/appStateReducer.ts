import {nanoid} from "nanoid";
import {Actions} from "./actions";
import {findItemByID, moveItem} from "../utils/arrayUtils";
import {DragItem} from "../DragItem";

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
    draggedItem: DragItem | null;
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
        case "SET_DRAGGED_ITEM":
            draft.draggedItem = actions.payload
            break
        case "MOVE_LIST":
            const { draggedID, hoverID } = actions.payload;
            const dragIndex = findItemByID(draft.lists, draggedID);
            const hoverIndex = findItemByID(draft.lists, hoverID);
            draft.lists = moveItem(draft.lists, dragIndex, hoverIndex)
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