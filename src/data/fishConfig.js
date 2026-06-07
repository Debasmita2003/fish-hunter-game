import bettafish from "../assets/bettafish.png";
import clownfish from "../assets/clownfish.png";
import goldfish from "../assets/goldfish.png";
import shark from "../assets/shark.png";
import seahorse from "../assets/seahorse.png";
import octopus from "../assets/octopus.png";

export const fishConfig = [
  {
    id: "goldfish",
    image: goldfish,
    points: 100,
    speed: 3,
    width: 150,
    laneY: 140,
    movement: "zigzag",
    zIndex: 18,
  },

  {
    id: "clownfish",
    image: clownfish,
    points: 25,
    speed: 3.5,
    width: 140,
    laneY: 240,
    movement: "horizontal",
    zIndex: 17,
  },

  {
    id: "bettafish",
    image: bettafish,
    points: 10,
    speed: 2.4,
    width: 160,
    laneY: 340,
    movement: "wave",
    zIndex: 15,
  },

  {
    id: "shark",
    image: shark,
    points: -20,
    speed: 1.5,
    width: 400,
    laneY: 400,
    movement: "patrol",
    zIndex: 11,
  },

  {
    id: "seahorse",
    image: seahorse,
    points: 50,
    speed: 1.5,
    width: 180,
    laneY: 620,
    movement: "drift",
    zIndex: 5,
  },

  {
    id: "octopus",
    image: octopus,
    points: 75,
    speed: 0.5,
    width: 180,
    laneY: 520,
    movement: "wander",
    zIndex: 3,
  },
];