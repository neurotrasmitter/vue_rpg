import Monster from "@/classes/Actor/Monster";
let id = 0;
function getMonster(monsterList, numberOfMonsters) {
  let result = [];
  for (let i = 0; i < numberOfMonsters; i++) {
    let mobStat = monsterList[Math.floor(Math.random() * monsterList.length)];
    result.push(
      new Monster(
        id++,
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

export default getMonster;
