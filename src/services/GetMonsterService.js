import Monster from "@/classes/Actor/Monster";
function getMonster(monsterList, numberOfMonsters) {
  let result = [];
  console.log(monsterList);
  for (let i = 0; i < numberOfMonsters; i++) {
    let mobStat = monsterList[Math.floor(Math.random() * monsterList.length)];
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

export default getMonster;
