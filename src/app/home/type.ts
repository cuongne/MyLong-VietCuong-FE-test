import { AppDispatch } from "@/store/store";
import { Task } from "@/store/taskSlice";

export type Status = "Complete" | "Incomplete";
export type TypePopup = "edit" | "create";
export type Props = { status: Status, desc: string, id: number, name: string, dispatch: AppDispatch, handleDelete: (id: number) => void, handleEdit: (item: Task) => void }
export type Filter = 'All' | 'Complete' | 'Incomplete'
export type FormData = {
    name: string | null,
    desc: string | null,
    status: boolean | string | null,
}