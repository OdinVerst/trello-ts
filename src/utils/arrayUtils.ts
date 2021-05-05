type Item = {
    id: string
};

export const findItemByID = <TItem extends Item>(items: TItem[], id: string) => {
    return items.findIndex((item: TItem) => item.id === id);
}

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
    const item = array[from]
    return insertItemAtIndex(removeItemAtIndex(array, from), item, to)
}

export const removeItemAtIndex = <TItem>(array: TItem[], index: number) => {
    return array.filter((item, i) => index !== i);
}

export const insertItemAtIndex = <TItem>(array: TItem[], item: TItem, index: number) => {
    return [...array.slice(0, index), item, ...array.splice(index)]
}