import Item from "@/classes/item/Item";

class Armor extends Item {
  constructor(name, hp) {
    super(name);
    this.hp = hp;
  }
}

export default Armor;
