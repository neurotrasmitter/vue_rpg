import Item from "@/classes/item/Item";

class Boots extends Item {
  constructor(name, speed) {
    super(name);
    this.speed = speed;
  }
}
export default Boots;
