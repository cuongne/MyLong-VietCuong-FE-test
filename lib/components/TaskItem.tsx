import { Props, Status } from '@/app/home/type'
import { COMPLETED, INCOMPLETE, REJECTED } from '@/constant'
import { fetchTasks, updateTask } from '@/store/taskSlice'
import { cn } from '@/utils/func'
import 'react-toastify/dist/ReactToastify.css'
import Checkbox from './Checkbox'
import { Delete, Edit } from '@/icons'

const TaskItem = ({ status, desc = '', id, name, dispatch, handleDelete, handleEdit }: Props) => {
    const handleChangeChecked = async (checked: boolean) => {
        try {
            const updatedTask = {
                status: checked ? (COMPLETED as Status) : (INCOMPLETE as Status),
                desc,
                id,
                name,
            }
            const action = await dispatch(updateTask(updatedTask))
            if (action?.meta?.requestStatus === REJECTED) {
                await dispatch(fetchTasks())
            }
        } catch (error) {
            console.log(error, 'action')
        }
    }
    const handleClickDelete = () => {
        handleDelete(id)
    }
    const handleClickEdit = () => {
        const item = {
            id,
            name,
            desc,
            status,
        }
        handleEdit(item)
    }
    return (
        <div
            className={cn(
                'relative border-t  border-gray-300 bg-white p-3 sm:p-4 flex items-center justify-between group',
                status === COMPLETED && 'bg-gray-100',
            )}
        >
            <div className="flex items-center gap-4">
                <Checkbox checked={status === COMPLETED} onChecked={handleChangeChecked} />
                <div className="flex flex-col gap-1">
                    <span
                        className={cn(
                            'font-medium text-gray-500',
                            status === INCOMPLETE && 'text-green-800',
                        )}
                    >
                        {name}
                    </span>
                    <span
                        className={cn(
                            'block text-sm text-[#7e7e7e] pointer-events-none line-clamp-1 sm:line-clamp-2',
                            status === COMPLETED && 'text-gray-500',
                        )}
                    >
                        {desc}
                    </span>
                </div>
            </div>
            <div className="sm:hidden flex items-center gap-2 absolute top-2 right-1">
                <button onClick={handleClickEdit}>
                    <Edit width="16px" height="16px" />
                </button>
                <button onClick={handleClickDelete}>
                    <Delete width="16px" height="16px" />
                </button>
            </div>
            <div className="sm:flex items-center gap-2 hidden ">
                <div className=" items-center gap-2 hidden sm:group-hover:flex">
                    <button onClick={handleClickEdit}>
                        <Edit />
                    </button>
                    <button onClick={handleClickDelete}>
                        <Delete />
                    </button>
                </div>
                <span
                    className={cn(
                        'text-sm text-green-700 hidden sm:block',
                        status === COMPLETED && 'text-gray-500 line-through',
                    )}
                >
                    {status === COMPLETED ? COMPLETED : INCOMPLETE}
                </span>
            </div>
        </div>
    )
}

export default TaskItem
