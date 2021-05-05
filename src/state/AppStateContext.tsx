import {createContext, Dispatch, FC, useContext} from "react";
import {Actions} from "./actions";
import {appStateReducer} from "./appStateReducer";
import {useImmerReducer} from "use-immer";
import {DragItem} from "../DragItem";

type Task = {
    id: string;
    text: string;
}

type List = {
    id: string;
    text: string;
    tasks: Task[]
}

export type AppState = {
    lists: List[];
    draggedItem: DragItem | null;
}

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{id: "c0", text: "Generate app scaffold"}]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ],
    draggedItem: null
};

type AppStateContextProps = {
    lists: List[],
    draggedItem: DragItem | null,
    getTasksByID(id: string): Task[],
    dispatch: Dispatch<Actions>
}

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider: FC = ({children}) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    const { lists, draggedItem } = state;

    const getTasksByID = (id: string) => {
        return lists.find((item) => item.id === id)?.tasks || [];
    }

    return (
        <AppStateContext.Provider value={{ draggedItem, lists, getTasksByID, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}