import Popup from '@/components/Popup'
import TaskItem from '@/components/TaskItem'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Pagination from '../../components/Pagination'
import Select from '../../components/Select'
import { ALL, COMPLETED, CREATE, EDIT, INCOMPLETE, ITEM_PER_PAGE, REJECTED } from '../../constant'
import { Plus, Tick } from '../../icons'
import { AppDispatch, RootState } from '../../store/store'
import { addTask, deleteTask, fetchTasks, Task, updateTask } from '../../store/taskSlice'
import { cn } from '../../utils/func'
import { Filter, FormData, TypePopup } from './type'

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    const tasks = useSelector((state: RootState) => state.tasks.tasks)
    const [dataList, setDataList] = useState<Task[]>()
    const [itemSelected, setItemSelected] = useState<Task | null>(null)
    const [idDelete, setIdDelete] = useState<number | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [typePopup, setTypePopup] = useState<TypePopup>(CREATE)
    const [typeFilter, setTypeFilter] = useState<Filter>(ALL)
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
    const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>()

    const createTask = async (data: FormData) => {
        try {
            const task = {
                ...data,
                id: tasks?.length + 1,
                status: INCOMPLETE,
            }
            const action = await dispatch(addTask(task as Task))
            if (action?.meta?.requestStatus === REJECTED) {
                await dispatch(fetchTasks())
            }
            reset()
            closePopup()
        } catch (error) {
            console.log(error, 'action')
        }
    }
    const editTask = async (data: FormData) => {
        try {
            const task = {
                ...data,
                status: data?.status ? COMPLETED : INCOMPLETE,
                id: itemSelected?.id,
            }
            const action = await dispatch(updateTask(task as Task))
            if (action?.meta?.requestStatus === REJECTED) {
                await dispatch(fetchTasks())
            }
            reset()
            closePopup()
        } catch (error) {
            console.log(error, 'action')
        }
    }

    const onSubmit = async (data: FormData) => {
        if (typePopup === CREATE) {
            createTask(data)
        } else {
            editTask(data)
        }
    }
    const openPopup = () => {
        reset({ name: '', desc: '', status: '' })
        setTypePopup(CREATE)
        setIsPopupOpen(true)
    }
    const closePopup = () => setIsPopupOpen(false)
    const closePopupDelete = () => setIsOpenDelete(false)
    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])
    useEffect(() => {
        if (typeFilter !== ALL) {
            const updatedTasks = tasks?.filter((item) => item.status === typeFilter)
            setDataList(updatedTasks)
        } else {
            setDataList(() => tasks)
        }
        setCurrentPage(1)
    }, [tasks, typeFilter])

    const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value
        setTypeFilter(selected as Filter)
    }
    const handleDelete = (id: number) => {
        if (id) {
            setIdDelete(id)
            setIsOpenDelete(true)
        }
    }
    const confirmDelete = async () => {
        try {
            const action = await dispatch(deleteTask(idDelete as number))
            if (action?.meta?.requestStatus === REJECTED) {
                await dispatch(fetchTasks())
            }
            closePopupDelete()
        } catch (error) {
            console.log(error, 'action')
        }
    }
    const handleEdit = (item: Task) => {
        setItemSelected(item)
        setTypePopup(EDIT)
        setIsPopupOpen(true)
        reset({ name: item.name, desc: item.desc, status: item.status === COMPLETED })
    }
    const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target
        const newItem = { ...itemSelected, status: checked ? COMPLETED : INCOMPLETE } as Task
        setItemSelected(newItem)
    }
    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const calculateSlice = useMemo(() => {
        const calcItem = (currentPage - 1) * ITEM_PER_PAGE
        const listItem = dataList?.slice(calcItem, currentPage * ITEM_PER_PAGE)
        return listItem
    }, [currentPage, dataList])
    const taskIncomplete = useMemo(() => {
        return tasks?.filter((item) => item.status !== COMPLETED)
    }, [tasks])

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="xl:w-1/2 mt-10 rounded p-10 w-full lg:w-[80%]">
                <div className="flex flex-col items-start sm:flex-row justify-between sm:items-center">
                    <p className="sm:text-3xl text-lg font-semibold mb-2">
                        Your tasks will be displayed here
                    </p>
                    <button
                        onClick={openPopup}
                        className="w-6 h-6 sm:w-7 sm:h-7 gap-1 items-center justify-center text-sm border border-green-800 rounded-full hidden sm:flex"
                    >
                        <Plus />
                    </button>
                </div>
                <div className="flex items-center justify-between mt-2 mb-2">
                    <span className=" gap-1 items-center text-sm text-[#666] hidden sm:flex">
                        Incomplete tasks: {taskIncomplete?.length}
                    </span>
                    <button
                        onClick={openPopup}
                        className="w-6 h-6 gap-1 items-center justify-center text-sm border border-green-800 rounded-full flex  sm:hidden"
                    >
                        <Plus />
                    </button>
                    <Select onChange={handleChangeOption} />
                </div>
                <div className="flex items-center sm:hidden justify-center my-4">
                    <Pagination
                        currentPage={currentPage}
                        totalItems={dataList?.length ?? 0}
                        itemsPerPage={ITEM_PER_PAGE}
                        onPageChange={handlePageChange}
                    />
                </div>
                <div className="border-b border-gray-300">
                    {dataList && dataList?.length > 0 ? (
                        calculateSlice?.map((item) => (
                            <TaskItem
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                                key={`${item?.id + Math.random()}`}
                                name={item?.name}
                                id={item?.id}
                                status={item?.status}
                                desc={item?.desc}
                                dispatch={dispatch}
                            />
                        ))
                    ) : (
                        <span>No data</span>
                    )}
                </div>
                <div className="flex items-center justify-center sm:justify-between mt-4">
                    <span className="text-sm text-gray-600 hidden sm:block">
                        Total: {dataList?.length}
                    </span>
                    <Pagination
                        currentPage={currentPage}
                        totalItems={dataList?.length ?? 0}
                        itemsPerPage={ITEM_PER_PAGE}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            <ToastContainer />
            <Popup isOpen={isPopupOpen} closePopup={closePopup}>
                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-4 rounded-lg w-full">
                        <h2 className="text-xl font-semibold mb-4">
                            {typePopup === CREATE ? 'Create task' : 'Edit task'}
                        </h2>

                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Ex:Learn js"
                                {...register('name', { required: 'Name is required' })}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus-visible:border-gray-500 focus-visible:outline-gray-300"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="desc"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>
                            <textarea
                                id="desc"
                                placeholder="Ex:Learn js in 1 month"
                                {...register('desc')}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus-visible:border-gray-500 focus-visible:outline-gray-300"
                            />
                            {errors.desc && (
                                <p className="text-red-500 text-xs">{errors.desc.message}</p>
                            )}
                        </div>

                        {typePopup !== CREATE && (
                            <div className="mb-4">
                                <div className="flex items-center gap-2">
                                    <label className="flex items-center cursor-pointer relative">
                                        <input
                                            type="checkbox"
                                            {...register('status', {
                                                onChange: handleChangeStatus, // Register the onChange handler here
                                            })}
                                            className={cn(
                                                'peer h-5 w-5 cursor-pointer transition-all duration-300 appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-green-800 checked:border-green-800',
                                            )}
                                            id="check5"
                                        />
                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <Tick />
                                        </span>
                                    </label>
                                    <span className="hidden peer-checked:block">123123</span>
                                    <span
                                        className={cn(
                                            'text-sm text-gray-500',
                                            itemSelected?.status === COMPLETED && ' line-through',
                                        )}
                                    >
                                        {itemSelected?.status === COMPLETED
                                            ? COMPLETED
                                            : INCOMPLETE}
                                    </span>
                                </div>
                                {errors.status && (
                                    <p className="text-red-500 text-xs">{errors.status.message}</p>
                                )}
                            </div>
                        )}

                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="bg-green-800 text-white py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Popup>
            <Popup isOpen={isOpenDelete} closePopup={closePopupDelete} className="sm:w-fit">
                <div className="pt-6 px-1 text-sm text-gray-700">
                    <p className="font-medium">Are you sure to delete this task?</p>
                    <div className="flex items-center gap-4 w-full justify-end mt-6">
                        <button
                            type="button"
                            onClick={closePopupDelete}
                            className="bg-white border  text-green-800 border-green-800  h-9 px-4 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={confirmDelete}
                            className="bg-green-800 text-white h-9 px-4 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default Home
