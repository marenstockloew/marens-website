<!-- The p5.js sketch for drawing the clouds -->

<template></template>

<script setup>
import p5 from "p5";
import { useRoute } from 'vue-router';
const route = useRoute();

let s = (sk) => {
  sk.setup = () => {
    sk.createCanvas(document.body.clientWidth, document.body.clientWidth*9.5);
  };
  let task_done = false;
  let last_done = 0;
  sk.draw = () => {
    const delay = 200; //ms
    if (!task_done) {
      sk.display();
      task_done = true;
      last_done = sk.millis();
    } else {
      if (sk.millis() - last_done > delay) {
        task_done = false;
      }
    }
  };
  sk.mousePressed = () => {
    let currentRouteName = route.name;
    if (currentRouteName == "Home") {
      sk.createCanvas(document.body.clientWidth,document.body.clientWidth*9.5);
    }
  };
  sk.display = () => {
    sk.fill(255, 255, 255, 70);
    sk.textSize(80);
    sk.text("\u{2601}", sk.mouseX, sk.mouseY);
  };
  sk.windowResized = () => {
        sk.setup()
     }
};

const P5 = new p5(s);
</script>

<style>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
  max-width: 100%;
}
</style>
