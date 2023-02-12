import { randomValue } from "@/services/UtilityService";
import Monster from "@/classes/Actor/Monster";
import { Hero, winnerState, loosingState } from "@/classes/Actor/Hero";
const debug = true;

class GameLoop {
  constructor() {
    this.queue = [];
    this.currentActorIndex = 0;
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
    console.log(this.queue);
    if (this.queue.every((el) => el instanceof Monster)) {
      return loosingState;
    }
    if (this.queue.every((el) => el instanceof Hero)) {
      return winnerState;
    }
    let currentActor = this.queue[this.currentActorIndex];
    console.log(currentActor);
    if (currentActor instanceof Monster) {
      let randomIndex = randomValue(0, this.heroes.length - 1);
      currentActor.attack(this.heroes[randomIndex]);
      if (this.heroes[randomIndex].hp <= 0) {
        this.heroes.splice(randomIndex, 1);
      }
      this._popAllDead();
      this._setCurrentActorPositions(currentActor);
      this._nextPosition();
      this.nextMove();
    }
    this._popAllDead();
    this._setCurrentActorPositions(currentActor);
    this._nextPosition();
    return currentActor;
  }

  _popAllDead() {
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
    if (currentActor instanceof Monster) {
      this.currentActorIndex = this._searchMonsterPosition(currentActor);
    } else if (currentActor instanceof Hero) {
      this.currentActorIndex = this._searchHeroPosition(currentActor);
    } else {
      throw new Error(`${currentActor} is not a queue`);
    }
  }

  _searchHeroPosition(hero) {
    for (let i in this.queue) {
      if (this.queue[i] instanceof Hero && hero.id === this.queue[i].id) {
        return i;
      }
    }
    throw new Error(`Not hero with id:${hero.id}`);
  }
  _searchMonsterPosition(monster) {
    for (let i in this.queue) {
      if (this.queue[i] instanceof Monster && monster.id === this.queue[i].id) {
        return i;
      }
    }
    throw new Error(`Not monster with id:${monster.id}`);
  }

  _nextPosition() {
    if (this.currentActorIndex >= this.queue.length - 1) {
      this.queue.forEach((el) => el.workOutTheState());
      this.currentActorIndex = 0;
    } else {
      this.currentActorIndex++;
    }
  }

  setHeroes(heroesList) {
    this.heroes = heroesList;
  }

  setMonsters(monstersList) {
    this.monsters = monstersList;
  }
}
const gl = new GameLoop();
export { gl };
