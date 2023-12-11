import { create } from "zustand";

interface nav_status_interface {
  is_open: Boolean;
  open: () => void;
  close: () => void;
}

export const useNav = create<nav_status_interface>((set) => ({
  is_open: false,
  open: () => set({ is_open: true }),
  close: () => set({ is_open: false }),
}));
