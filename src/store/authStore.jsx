import {create} from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isLoggedIn: false,

  login: (username, password) => {
    set({
      user: { username, password },
      isLoggedIn: true
    });
    localStorage.setItem("user", JSON.stringify({ username, password }));
  },

  logout: () => {
    set({ user: null, isLoggedIn: false });
    localStorage.removeItem("user");
  }
}));
