// Import necessary modules
import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Create the useUser hook
const useUser = create(
    persist(
        (set) => ({
            userInfo: {}, // Initialize userInfo as an empty object
            // Method to update userInfo state with userData
            addUser: (userData) => set({ userInfo: userData }),
            // Method to clear userInfo state, effectively logging out the user
            logout: () => set({ userInfo: {} }),
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage), // Use storage option instead of getStorage
        }
    )
);

export default useUser;
