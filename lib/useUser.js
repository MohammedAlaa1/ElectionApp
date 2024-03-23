import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useUser = create(
    persist(
        (set) => ({
        userInfo: {},
        addUser: (userData) => set({ userInfo: userData }), // Update userInfo state with userData
        }),
        {
        name: 'user-storage',
        getStorage: () => createJSONStorage(() => localStorage),
        }
    )
);

export default useUser;