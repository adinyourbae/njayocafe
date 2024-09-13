import { create } from 'zustand';

export const useStore = create(
  (set) => ({
    //cart
    cart: {
      pizzas: []
    },

    // add Pizza in cart
    addPizza: (data) =>
      set((state) => ({
        cart: {
          pizzas: [...state.cart.pizzas, data]
        }
      })),

    // Remove pizza
    removePizza: (index) =>
      set((state) => ({
        cart: {
          pizzas: state.cart.pizzas.filter((_, i) => i !== index)
        }
      })),

    resetCart: () =>
      set(() => ({
        cart: {
          pizzas: []
        }
      }))
  })
);

// Tambahkan ongkos kirim ke cart
export const addDeliveryCost = (index, cost) =>
  useStore.setState((state) => {
    const pizzas = [...state.cart.pizzas];
    pizzas[index] = {
      ...pizzas[index],
      deliveryCost: cost
    };

    return {
      cart: {
        pizzas
      }
    };
  });