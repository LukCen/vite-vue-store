import { createPinia, defineStore } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// initialize the store
export const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export const useStore = defineStore('basket', {

  state: () => ({
    items: [] as BasketDataItem[]
  }),
  persist: true,
  getters: {
    /**
     * @param state items - contents of the basket
     * @returns Returns item with the given id
     */
    getItem: (state) => {
      return (id: number): BasketDataItem | null => {
        return state.items.find((e) => Number(e.id) === id) ?? null;
      };
    },
    /**
     * @returns {BasketDataItems[]} Contents of the basket
     */
    getAllItems(): BasketDataItem[] {
      return this.items ?? null
    },
    /**
     * @returns {number} Total amount of items in the basket
     */
    getTotalItems(): number {
      return this.items.length;
    }
  },
  actions: {
    addItem(item: BasketDataItem): void {
      this.items.push(item);
    },
    removeItem(id: number | string): void {
      const itemToRemove = this.items.find((e) => e.id === id) ?? null
      if (itemToRemove) {
        this.items.splice(this.items.indexOf(itemToRemove), 1)
      }
    }
  }
})
