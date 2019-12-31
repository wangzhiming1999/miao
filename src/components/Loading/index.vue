<template>
<body>
  
  <div class="animation02">
    <div class="square">
      <span class="square_item square_item01"></span>
      <span class="square_item square_item02"></span>
      <span class="square_item square_item03"></span>
      <span class="square_item square_item04"></span>
      <span class="square_item square_item05"></span>
      <span class="square_item square_item06"></span>
      <span class="square_item square_item07"></span>
      <span class="square_item square_item08"></span>
      <span class="circle_item01"></span>
      <span class="circle_item02"></span>
      <span class="circle_item03"></span>
      <span class="circle_item04"></span>
      <span class="circle_item05"></span>
      <span class="circle_item06"></span>
      <span class="circle_item01_1"></span>
      <span class="circle_item02_2"></span>
      <span class="circle_item03_3"></span>
      <span class="circle_item04_4"></span>
      <span class="circle_item05_5"></span>
      <span class="circle_item06_6"></span>
    </div>
  </div>
</body>
</template>
<script>
export default {
  name: "Loadind"
};
</script>
<style  scoped>
/*=================
Basic style
==================*/
html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  margin: 0;
}
img {
  vertical-align: bottom;
  max-width: 100%;
  width: 100%;
}
h1,
h2,
p {
  margin: 0;
}

/*===================
animation02
====================*/
.animation02 {
  position: absolute;
  width: 100%;
  height: 100%;
}
.square {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 8vw;
  height: 8vw;
  background-color: #c03d5c;
  animation: square 0.2s ease-in-out 0.6s forwards;
  opacity: 0;
  z-index: 100;
}
@keyframes square {
  0% {
    transform: rotate(45deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    opacity: 1;
  }
}
.square_item {
  display: block;
  position: absolute;
  margin: auto;
  width: 0.5vw;
  height: 0.5vw;
  background-color: #c03d5c;
  border-radius: 50%;
  opacity: 0;
}
.square_item01 {
  top: -105%;
  right: 0;
  bottom: 0;
  left: 0;
  animation: square_item01 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s;
}
.square_item02 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 99%;
  animation: square_item02 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s;
}
.square_item03 {
  top: 105;
  right: 0;
  bottom: 0;
  left: 0;
  animation: square_item03 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s;
}
.square_item04 {
  top: 0;
  right: 0;
  bottom: 0;
  left: -99%;
  animation: square_item04 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s;
}
.square_item05 {
  top: -105%;
  right: 0;
  bottom: 0;
  left: 99%;
  animation: square_item05 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s;
}
.square_item06 {
  top: 105%;
  right: 0;
  bottom: 0;
  left: 99%;
  animation: square_item06 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s;
}
.square_item07 {
  top: 105%;
  right: 0;
  bottom: 0;
  left: -99%;
  animation: square_item07 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s;
}
.square_item08 {
  top: -105%;
  right: 0;
  bottom: 0;
  left: -99%;
  animation: square_item08 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s;
}
@keyframes square_item01 {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-7vw);
    opacity: 1;
  }
}
@keyframes square_item02 {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(7vw);
    opacity: 1;
  }
}
@keyframes square_item03 {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(7vw);
    opacity: 1;
  }
}
@keyframes square_item03 {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(7vw);
    opacity: 1;
  }
}
@keyframes square_item04 {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-7vw);
    opacity: 1;
  }
}
@keyframes square_item05 {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(3.5vw, -3.5vw, -3.5vw);
    opacity: 1;
  }
}
@keyframes square_item06 {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(3.5vw, 3.5vw, 3.5vw);
    opacity: 1;
  }
}
@keyframes square_item07 {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-3.5vw, 3.5vw, 3.5vw);
    opacity: 1;
  }
}
@keyframes square_item08 {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-3.5vw, -3.5vw, 3.5vw);
    opacity: 1;
  }
}
.circle_item01 {
  position: absolute;
  top: 150%;
  right: 0;
  bottom: 0;
  left: 90%;
  margin: auto;
  width: 5vw;
  height: 5vw;
  background-color: #6f919a;
  border-radius: 50%;
  animation: circle_item 1s cubic-bezier(0.19, 1, 0.22, 1) 1.1s forwards;
  opacity: 0;
}
.circle_item02 {
  position: absolute;
  top: 125%;
  right: 0;
  bottom: 0;
  left: 125%;
  margin: auto;
  width: 5vw;
  height: 5vw;
  background-color: #c24a50;
  border-radius: 50%;
  animation: circle_item 1s cubic-bezier(0.19, 1, 0.22, 1) 1.15s forwards;
  opacity: 0;
}
.circle_item03 {
  position: absolute;
  top: 100%;
  right: 0;
  bottom: 0;
  left: 158%;
  margin: auto;
  width: 5vw;
  height: 5vw;
  background-color: #d6a2a6;
  border-radius: 50%;
  animation: circle_item 1s cubic-bezier(0.19, 1, 0.22, 1) 1.2s forwards;
  opacity: 0;
}
.circle_item04 {
  position: absolute;
  top: -150%;
  right: 0;
  bottom: 0;
  left: -158%;
  margin: auto;
  width: 5vw;
  height: 5vw;
  background-color: #6f919a;
  border-radius: 50%;
  animation: circle_item 1s cubic-bezier(0.19, 1, 0.22, 1) 1.1s forwards;
  opacity: 0;
}
.circle_item05 {
  position: absolute;
  top: -125%;
  right: 0;
  bottom: 0;
  left: -227%;
  margin: auto;
  width: 5vw;
  height: 5vw;
  background-color: #c24a50;
  border-radius: 50%;
  animation: circle_item 1s cubic-bezier(0.19, 1, 0.22, 1) 1.15s forwards;
  opacity: 0;
}
.circle_item06 {
  position: absolute;
  top: -100%;
  right: 0;
  bottom: 0;
  left: -298%;
  margin: auto;
  width: 5vw;
  height: 5vw;
  background-color: #d6a2a6;
  border-radius: 50%;
  animation: circle_item 1s cubic-bezier(0.19, 1, 0.22, 1) 1.2s forwards;
  opacity: 0;
}
@keyframes circle_item {
  0% {
    transform: scale3d(0, 0, 1);
    opacity: 1;
  }
  75% {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
  100% {
    transform: scale3d(0.5, 0.5, 1);
    opacity: 1;
  }
}
.circle_item01_1 {
  position: absolute;
  top: 150%;
  right: 0;
  bottom: 0;
  left: 106%;
  margin: auto;
  width: 2.5vw;
  height: 2.5vw;
  background-color: #6f919a;
  border-radius: 50%;
  animation: circle_twice 0.25s linear 2s forwards;
  opacity: 0;
}
.circle_item02_2 {
  position: absolute;
  top: 175%;
  right: 0;
  bottom: 0;
  left: 141%;
  margin: auto;
  width: 2.5vw;
  height: 2.5vw;
  background-color: #c24a50;
  border-radius: 50%;
  animation: circle_twice 0.245s linear 2.05s forwards;
  opacity: 0;
}
.circle_item03_3 {
  position: absolute;
  top: 200%;
  right: 0;
  bottom: 0;
  left: 175%;
  margin: auto;
  width: 2.5vw;
  height: 2.5vw;
  background-color: #d6a2a6;
  border-radius: 50%;
  animation: circle_twice 0.24s linear 2.1s forwards;
  opacity: 0;
}
.circle_item04_4 {
  position: absolute;
  top: -150%;
  right: 0;
  bottom: 0;
  left: -158%;
  margin: auto;
  width: 2.5vw;
  height: 2.5vw;
  background-color: #6f919a;
  border-radius: 50%;
  animation: circle_third 0.25s linear 2s forwards;
  opacity: 0;
}
.circle_item05_5 {
  position: absolute;
  top: -175%;
  right: 0;
  bottom: 0;
  left: -227%;
  margin: auto;
  width: 2.5vw;
  height: 2.5vw;
  background-color: #c24a50;
  border-radius: 50%;
  animation: circle_third 0.245s linear 2.05s forwards;
  opacity: 0;
}
.circle_item06_6 {
  position: absolute;
  top: -200%;
  right: 0;
  bottom: 0;
  left: -298%;
  margin: auto;
  width: 2.5vw;
  height: 2.5vw;
  background-color: #d6a2a6;
  border-radius: 50%;
  animation: circle_third 0.24s linear 2.1s forwards;
  opacity: 0;
}
@keyframes circle_twice {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  25% {
    transform: translate3d(75%, -120%, 0);
    opacity: 1;
  }
  50% {
    transform: translate3d(100%, -240%, 0);
    opacity: 1;
  }
  75% {
    transform: translate3d(75%, -360%, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -480%, 0);
    opacity: 1;
  }
}
@keyframes circle_third {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  25% {
    transform: translate3d(75%, 120%, 0);
    opacity: 1;
  }
  50% {
    transform: translate3d(100%, 240%, 0);
    opacity: 1;
  }
  75% {
    transform: translate3d(75%, 360%, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 480%, 0);
    opacity: 1;
  }
}

</style>