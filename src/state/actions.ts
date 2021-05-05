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

interface MoveItemAction {
    type: "MOVE_ITEM",
    payload: {
        draggedID: string,
        hoverID: string
    }
}

export type Actions = AddItemAction | AddListAction | MoveItemAction;

export const addTask = (text:string, listID:string):Actions => {
    return {
        type: "ADD_ITEM",
        payload: {
            text, listID
        }
    }
}

export const moveTask = (draggedID:string, hoverID:string):Actions => {
    return {
        type: "MOVE_ITEM",
        payload: {
            draggedID,
            hoverID
        }
    }
}

export const addList = (payload: string):Actions => {
    return {
        type: "ADD_LIST",
        payload
    }
}


