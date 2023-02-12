import Item from "@/classes/item/Item";

class Accesory extends Item {
  constructor(name, str, dex, con) {
    super(name);
    this.str = str;
    this.dex = dex;
    this.con = con;
  }
}

export default Accesory;
