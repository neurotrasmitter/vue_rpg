import { Hero } from "@/classes/Actor/Hero";

export default {
  namespaced: true,
  store: {
    heroes: [
      new Hero(1, require("@/assets/heroes/Knight.png"), "Stan", 10, 10, 10),
      new Hero(1, require("@/assets/heroes/Knight.png"), "Stan", 10, 10, 10),
      new Hero(2, require("@/assets/heroes/Rogue.png"), "Stiven", 5, 20, 5),
    ],
    loot: {},
  },
  getters: {},
  action: {},
  mutations: {},
};
