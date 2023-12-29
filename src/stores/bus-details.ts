import { defineStore } from 'pinia';

export const useBusDetailsStore = defineStore('bus-details', {
  state: () => ({
    name: '',
  }),

  getters: {

  },

  actions: {
    setName (name: string) {
      this.name = name;
    }
  }
});
