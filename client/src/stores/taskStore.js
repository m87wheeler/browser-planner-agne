import { writable } from "svelte/store";

const initialState = [];

const TaskStore = () => {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    populate: (tasks) => update((state) => [...state, ...tasks]),
    addTask: (task) => update((state) => [...state, task]),
    deleteTask: (id) =>
      update((state) => {
        const newArr = state.filter((task) => task._id !== id);
        return newArr;
      }),
    toggleComplete: (id) => {
      update((state) => {
        const newArr = state.map((task) => {
          if (task._id === id) return { ...task, complete: !task.complete };
          return task;
        });
        return newArr;
      });
    },
  };
};

export const taskStore = TaskStore();
