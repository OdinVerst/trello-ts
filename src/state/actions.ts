import {DragItem} from "../DragItem";

interface AddListAction {
    type: "ADD_LIST",
    payload: string
}

interface AddItemAction {
    type: "ADD_ITEM",
    payload: {
        text: string,
        listID: string
    }
}

interface MoveListAction {
    type: "MOVE_LIST",
    payload: {
        draggedID: string,
        hoverID: string
    }
}

interface MoveItemAction {
    type: "MOVE_TASK"
    payload: {
        draggedItemID: string,
        hoveredItemID: string | null,
        sourceColumnID: string,
        targetColumnID: string
    }
}

interface setDraggedItemAction {
    type: "SET_DRAGGED_ITEM",
    payload: DragItem | null
}

export type Actions = AddItemAction | AddListAction | MoveListAction | setDraggedItemAction | MoveItemAction;

export const addTask = (text: string, listID: string): Actions => {
    return {
        type: "ADD_ITEM",
        payload: {
            text, listID
        }
    }
}

export const setDraggedItem = (draggedItem: DragItem | null): Actions => {
    return {
        type: "SET_DRAGGED_ITEM",
        payload: draggedItem
    }
}

export const moveList = (draggedID: string, hoverID: string): Actions => {
    return {
        type: "MOVE_LIST",
        payload: {
            draggedID,
            hoverID
        }
    }
}

export const moveTask = (draggedItemID: string, hoveredItemID: string | null, sourceColumnID: string, targetColumnID: string): Actions => {
    return {
        type: "MOVE_TASK",
        payload: {
            draggedItemID,
            hoveredItemID,
            sourceColumnID,
            targetColumnID
        }
    }
}

export const addList = (payload: string): Actions => {
    return {
        type: "ADD_LIST",
        payload
    }
}


