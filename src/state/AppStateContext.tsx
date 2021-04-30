import {createContext, FC} from "react";

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
    lists: List[]
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
    ]
};

type AppStateContextProps = {
    lists: List[],
    getTasksByID(id: string): Task[]
}

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider: FC = ({children}) => {
    const { lists } = appData;

    const getTasksByID = (id: string) => {
        return lists.find((item) => item.id === id)?.tasks || [];
    }

    return (
        <AppStateContext.Provider value={{lists, getTasksByID}}>
            {children}
        </AppStateContext.Provider>
    )
}