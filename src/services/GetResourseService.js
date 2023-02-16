import { randomValue } from "@/services/UtilityService";

function getResourceList(resourceList) {
  let loot = {};
  for (let res of resourceList) {
    if (res.rarity === "Normal") {
      if (randomValue(1, 100) < 71) {
        loot[res.name] = randomValue(1, 4);
      }
    }
    if (res.rarity === "Rare") {
      if (randomValue(1, 100) < 31) {
        loot[res.name] = randomValue(1, 2);
      }
    }
    if (res.rarity === "UltraRare") {
      if (randomValue(1, 100) < 6) {
        loot[res.name] = 1;
      }
    }
  }
}

export default getResourceList;
