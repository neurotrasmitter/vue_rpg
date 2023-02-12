import Item from "@/classes/item/Item";
const rarityList = ["Quest", "Normal", "Rare", "UltraRare"];

class Resource extends Item {
  constructor(name, rarity) {
    super(name);
    if (Number.isInteger(rarity) && rarity >= 0 && rarity <= 3) {
      this.rarity = rarityList[rarity];
    } else {
      throw new Error("Некоректная редкость");
    }
  }
}

export default Resource;
