import Item from "@/classes/item/Item";

class Gloves extends Item {
  constructor(name, atackPerRound) {
    super(name);
    this.atackPerRound = atackPerRound;
  }
}

export default Gloves;
