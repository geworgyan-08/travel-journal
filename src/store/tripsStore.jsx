import { create } from "zustand";

export const useTripStore = create((set) => ({
  tripsInJournal: [], 

  addTrip: (trip) => {
    set((state) => ({
      tripsInJournal: [...state.tripsInJournal, trip] 
    }));
  },

  removeTrip: (id) => {
    set((state) => ({
      tripsInJournal: state.tripsInJournal.filter((t) => t.id !== id)
    }));
  },
}));
