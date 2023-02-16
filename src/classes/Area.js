import Monster from "@/classes/Actor/Monster";

class Area {
  constructor(name, monsterlist, resourceList) {
    this.name = name;
    this.monsterlist = monsterlist;
    this.resourceList = resourceList;
  }

  getMonsterList(numberOfMonster) {
    let result = [];
    for (let i = 0; i < numberOfMonster; i++) {
      let mobStat =
        this.monsterlist[Math.floor(Math.random() * this.monsterlist.length)];
      result.push(
        new Monster(
          mobStat.img,
          mobStat.name,
          mobStat.hp,
          mobStat.atk,
          mobStat.speed
        )
      );
    }
    return result;
  }
}

export default Area;
