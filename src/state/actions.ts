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

export type Actions = AddItemAction | AddListAction;

export const addTask = (text:string, listID:string):Actions => {
    return {
        type: "ADD_ITEM",
        payload: {
            text, listID
        }
    }
}

export const addList = (payload: string):Actions => {
    return {
        type: "ADD_LIST",
        payload
    }
}

