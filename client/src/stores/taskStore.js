import { writable } from "svelte/store";

const initialState = {
  tasks: [],
  enableInput: false,
  taskModel: {
    task: "",
    type: "",
    date: "",
  },
};

const TaskStore = () => {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    // ? task related
    populate: (tasks) =>
      update((state) => ({
        ...state,
        tasks: [...state.tasks, ...tasks],
      })),
    addTask: (id) => {
      update((state) => {
        const newTask = {
          _id: id,
          ...state.taskModel,
          complete: false,
        };
        return {
          ...state,
          taskModel: {
            task: "",
            type: "",
            date: "",
          },
          tasks: [...state.tasks, newTask],
        };
      });
    },
    deleteTask: (id) =>
      update((state) => {
        const newArr = state.tasks.filter((task) => task._id !== id);
        return {
          ...state,
          tasks: [...newArr],
        };
      }),
    toggleComplete: (id) => {
      update((state) => {
        const newArr = state.tasks.map((task) => {
          if (task._id === id) return { ...task, complete: !task.complete };
          return task;
        });
        return {
          ...state,
          tasks: [...newArr],
        };
      });
    },
    // ? input related
    toggleInput: (date, type, bool = undefined) => {
      bool !== undefined
        ? update((state) => ({
            ...state,
            enableInput: bool,
            taskModel: { ...state.taskModel, date, type },
          }))
        : update((state) => ({
            ...state,
            enableInput: !state.enableInput,
            taskModel: { ...state.taskModel, date, type },
          }));
    },
    taskInput: (str) =>
      update((state) => ({
        ...state,
        taskModel: {
          ...state.taskModel,
          task: str,
        },
      })),
  };
};

export const taskStore = TaskStore();