<template>
  <div>
    <div v-if="currentHero.name === 'DEAD'">
      <h1 style="color: red">YOU LOOSE</h1>
    </div>
    <div v-else-if="currentHero.name === 'WIN'">
      <h1 style="color: blue">YOU WIN</h1>
    </div>
    <div v-else>
      <ul class="mob-list">
        <li
          v-for="(mob, index) of monsters"
          :key="index"
          @click="currentHero.attack(mob)"
        >
          <monster-view :monster="mob" v-if="mob.hp > 0"></monster-view>
        </li>
      </ul>
      <ul style="display: flex">
        <li v-for="hero of heroes" :key="hero.name">
          <hero-view :hero="hero"></hero-view>
        </li>
      </ul>
      <ul>
        <li v-for="(actor, index) of queue" :key="index">
          <span>{{ actor }} |</span>
        </li>
      </ul>
      <button type="button" v-if="inBattle" @click="nextMove">Next Move</button>
      <button type="button" v-else @click="init">Start Battle</button>
    </div>
  </div>
</template>

<script>
import { gl } from "@/services/GameLoopService";
import { shadowState } from "@/classes/Actor/Hero";
import { mapState } from "vuex";

import GetMonsterService from "@/services/GetMonsterService";

import MonsterView from "@/components/MonsterView";
import HeroView from "@/components/HeroView";
import store from "@/store";

export default {
  name: "BattleView",
  components: { HeroView, MonsterView },
  store,
  mapState,
  props: {
    location: {
      type: String,
      required: true,
    },
  },
  data() {
    console.log("hi");
    return {
      monsters: [],
      heroes: store.state.party.heroes,
      inBattle: false,
      currentHero: shadowState,
      queue: gl.getNameList(),
    };
  },
  methods: {
    init() {
      console.log(store.state.party.heroes);
      this.monsters = GetMonsterService(store.state[this.location].monsters, 3);
      gl.createLoop(this.monsters, this.heroes);
      this.inBattle = true;
      this.currentHero = gl.nextMove();
    },
    nextMove() {
      this.currentHero = gl.nextMove();
      this.queue = gl.getNameList();
    },
  },
};
</script>

<style scoped>
.mob-list {
  display: flex;
}
</style>
