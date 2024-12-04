// src/store/userSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../app/home/type';
import { toast } from 'react-toastify';

export interface Task {
    id: number;
    desc: string;
    status: Status;
    name: string;
}

export interface TaskState {
    tasks: Task[];
    loading: boolean;
    error: string | null;

}

const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: null,

};

export const fetchTasks = createAsyncThunk<Task[], void>('tasks/fetchTasks', async () => {
    const response = await fetch('http://localhost:3001/tasks');
    return response.json();
});

export const updateTask = createAsyncThunk(
    'task/updateTask',
    async (updatedTask: Task, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3001/tasks/${updatedTask.id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedTask),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                toast.error("Failed to update task. Please try again.");

                return rejectWithValue('Failed to update task');
            }
            toast.success("Updated task successfully!!!");

            // Returning the updated task data so it can be used in reducers
            return await response.json();  // Make sure to parse the response as JSON
        } catch (err) {
            console.log(err);
            toast.error("Failed to update task. Please try again.");

            return rejectWithValue('Failed to update task');
        }
    }
);
export const addTask = createAsyncThunk(
    'task/addTask',
    async (task: Task, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:3001/tasks", {
                method: 'POST',
                body: JSON.stringify(task),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                toast.error("Failed to create task. Please try again.");

                return rejectWithValue('Failed to create task');
            }
            toast.success("Created task successfully!!!");

            // Returning the updated task data so it can be used in reducers
            return await response.json();  // Make sure to parse the response as JSON
        } catch (err) {
            console.log(err);
            toast.error("Failed to create task. Please try again.");

            return rejectWithValue('Failed to create task');
        }
    }
);
export const deleteTask = createAsyncThunk(
    'task/deleteTask',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3001/tasks/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                toast.error("Failed to delete task. Please try again.");

                return rejectWithValue('Failed to delete task');
            }
            toast.success("Deleted task successfully!!!");

            // Returning the updated task data so it can be used in reducers
            return await response.json();  // Make sure to parse the response as JSON
        } catch (err) {
            console.log(err);
            toast.error("Failed to delete task. Please try again.");

            return rejectWithValue('Failed to delete task');
        }
    }
);

const taskSlider = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            //get all
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = [...action.payload];
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.loading = false;
            })
            //update
            .addCase(updateTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const updatedTask = action.payload;
                const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
                if (index >= 0) {
                    state.tasks[index] = updatedTask;
                }
                state.loading = false;
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            })
            //create
            .addCase(addTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                const addTask = action.payload;
                const newTasks = [...state.tasks, addTask]
                state.tasks = newTasks;
                state.loading = false;
            })
            .addCase(addTask.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            })
            //delete
            .addCase(deleteTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                const id = action.payload.id;
                
                const newTasks = state.tasks?.filter(task => +task.id !== +id)
                
                state.tasks = newTasks;
                state.loading = false;
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            });
    },
});

// Export actions and reducer
export const { setLoading } = taskSlider.actions;
export const taskReducer = taskSlider.reducer;
