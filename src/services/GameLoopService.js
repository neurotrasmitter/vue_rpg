import { randomValue } from "@/services/UtilityService";
import Monster from "@/classes/Actor/Monster";
import { Hero, winnerState, loosingState } from "@/classes/Actor/Hero";
const debug = false;

class GameLoop {
  constructor() {
    this.queue = [];
    this.currentActorIndex = 0;
    this.first = true;
  }

  createLoop(monsters, heroes) {
    this.heroes = heroes;
    this.monsters = monsters;
    this.queue = this.monsters.concat(this.heroes);
    this.queue.sort(function (a, b) {
      return b.speed - a.speed;
    });
  }

  nextMove() {
    if (this.queue.every((el) => el instanceof Monster)) {
      return loosingState;
    }
    if (this.queue.every((el) => el instanceof Hero)) {
      this.heroes.forEach((el) => {
        el.hp = el.maxHp;
        el.stamina = el.maxStamina;
      });

      return winnerState;
    }

    this._popAllDead();
    if (this.first) {
      this.first = false;
    } else {
      this._nextPosition();
    }

    let currentActor = this.queue[this.currentActorIndex];

    while (currentActor instanceof Monster) {
      if (this.heroes.length == 0) {
        break;
      }
      let randomIndex = randomValue(0, this.heroes.length - 1);
      currentActor.attack(this.heroes[randomIndex]);
      if (this.heroes[randomIndex].hp <= 0) {
        this.heroes.splice(randomIndex, 1);
      }
      currentActor = this.nextMove();
    }

    this._setCurrentActorPositions(currentActor);
    return currentActor;
  }

  _popAllDead() {
    console.log("PAD");
    let currentArray = [];
    this.queue.forEach((el) => {
      if (el.hp > 0) {
        currentArray.push(el);
      }
    });
    this.queue = currentArray;

    if (debug == true) {
      console.log("----------POP ALL DEAD----------------");
      console.log(`currentArray ${currentArray.length}`);
      console.log(currentArray);
      console.log(`this.queue ${this.queue.length}`);
      console.log(this.queue);
      console.log("----------POP ALL DEAD----------------");
    }
  }

  _setCurrentActorPositions(currentActor) {
    let index = this.queue.indexOf(currentActor);
    if (index < 0) {
      throw new Error(`Actor with id:${currentActor.id} is not a queue`);
    }
    return index;
  }

  _nextPosition() {
    if (debug == true) {
      console.log(`current position ${this.currentActorIndex}`);
      console.log("currentHero");
      console.log(this.queue[this.currentActorIndex]);
    }

    if (this.currentActorIndex >= this.queue.length - 1) {
      this.queue.forEach((el) => el.workOutTheState());
      this.currentActorIndex = 0;
    } else {
      this.currentActorIndex++;
    }

    if (debug == true) {
      console.log(`changed position ${this.currentActorIndex}`);
      console.log("nextHero");
      console.log(this.queue[this.currentActorIndex]);
    }
  }

  setHeroes(heroesList) {
    this.heroes = heroesList;
  }

  setMonsters(monstersList) {
    this.monsters = monstersList;
  }

  getNameList() {
    let result = [];
    this.queue.forEach((el) => [].push(el.name));
    return result;
  }
}
const gl = new GameLoop();
export { gl };
