import {DragItem} from "../DragItem";

export const isHidden = (dragItem: DragItem | null, itemType: string, id: string): boolean => {
    return Boolean(dragItem && dragItem.type === itemType && dragItem.id === id);
}