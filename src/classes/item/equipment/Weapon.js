import Item from "@/classes/item/Item";

class Weapon extends Item {
  constructor(name, atack) {
    super(name);
    this.atack = atack;
  }
}

export default Weapon;
