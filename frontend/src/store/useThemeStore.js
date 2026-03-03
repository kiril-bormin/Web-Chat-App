import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    set({ theme });
  },
}));

// Apply saved theme on initial load
const savedTheme = localStorage.getItem("chat-theme") || "coffee";
document.documentElement.setAttribute("data-theme", savedTheme);
