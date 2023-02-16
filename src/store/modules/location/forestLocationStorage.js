import Resource from "@/classes/item/Resource";

export default {
  namespaced: true,
  state: {
    monsters: [
      {
        img: require("@/assets/monster/goblin_with_sword.png"),
        name: "sworded goblin",
        hp: 8,
        atk: 3,
        speed: 3,
      },
      {
        img: require("@/assets/monster/goblin_with_axe.png"),
        name: "axed goblin",
        hp: 8,
        atk: 4,
        speed: 2,
      },
      {
        img: require("@/assets/monster/goblin_with_hammer.png"),
        name: "smashing goblins",
        hp: 8,
        atk: 5,
        speed: 1,
      },
      {
        img: require("@/assets/monster/goblin_with_staff.png"),
        name: "mage goblin",
        hp: 3,
        atk: 5,
        speed: 3,
      },
      {
        img: require("@/assets/monster/angry_slime.png"),
        name: "Slime",
        hp: 8,
        atk: 2,
        speed: 2,
      },
      {
        img: require("@/assets/monster/angry_slime1.png"),
        name: "Red Slime",
        hp: 10,
        atk: 3,
        speed: 5,
      },
      {
        img: require("@/assets/monster/angry_slime2.png"),
        name: "Angry slime",
        hp: 3,
        atk: 6,
        speed: 6,
      },
    ],
    resource: [
      new Resource("Cursed log", 2),
      new Resource("Log", 1),
      new Resource("Magiactive log", 3),
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
};
