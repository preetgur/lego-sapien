import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { persist } from "zustand/middleware";

export type Status = "TODO" | "IN_PROGRESS" | "DONE";

export type User = {
  first_name: string;
  last_name: string;
  company?: number;
};

export type State = {
  //   draggedTask: string | null;
  user: User | null;
};

export type Actions = {
  //   dragTask: (id: string | null) => void;
  //   updateTask: (title: string, status: Status) => void;
  setUser: (user: User) => void;
  logout: () => void;
};

export const useStore = create<State & Actions>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: async () => {
        // Perform logout server action
        await fetch("/api/logout", { method: "POST" });

        // Clear user state
        set({ user: null });
      },
      //   draggedTask: null,
      //   addTask: (title: string, description?: string) =>
      //     set((state) => ({
      //       tasks: [
      //         ...state.tasks,
      //         { id: uuid(), title, description, status: "TODO" },
      //       ],
      //     })),
      //   dragTask: (id: string | null) => set({ draggedTask: id }),
      //   removeTask: (id: string) =>
      //     set((state) => ({
      //       tasks: state.tasks.filter((task) => task.id !== id),
      //     })),
      //   updateTask: (id: string, status: Status) =>
      //     set((state) => ({
      //       tasks: state.tasks.map((task) =>
      //         task.id === id ? { ...task, status } : task
      //       ),
      //     })),
    }),
    { name: "app-store", skipHydration: true }
  )
);

// hydrate persisted store after on mount
//   useEffect(() => {
//     useStore.persist.rehydrate();
//   }, []);
