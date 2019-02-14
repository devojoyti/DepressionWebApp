<template>
  <div id="body">
    <div class="rain front-row"></div>
    <div class="rain back-row"></div>
    <div id="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import $ from "jquery";

@Component
export default class Backgroundrain extends Vue {
    private makeItRain() {
        $(".rain").empty();

        let increment = 0;
        let drops = "";
        let backDrops = "";

        while (increment < 100) {
            //couple random numbers to use for various randomizations
            //random number between 98 and 1
            const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
            //random number between 5 and 2
            const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
            //increment
            increment += randoFiver;
            //add in a new raindrop with various randomizations to certain CSS properties
            drops +=
                '<div class="drop" style="left: ' +
                increment +
                "%; bottom: " +
                (randoFiver + randoFiver - 1 + 100) +
                "%; animation-delay: 0." +
                randoHundo +
                "s; animation-duration: 0.5" +
                randoHundo +
                's;"><div class="stem" style="animation-delay: 0.' +
                randoHundo +
                "s; animation-duration: 0.5" +
                randoHundo +
                's;"></div><div class="splat" style="animation-delay: 0.' +
                randoHundo +
                "s; animation-duration: 0.5" +
                randoHundo +
                's;"></div></div>';
            backDrops +=
                '<div class="drop" style="right: ' +
                increment +
                "%; bottom: " +
                (randoFiver + randoFiver - 1 + 100) +
                "%; animation-delay: 0." +
                randoHundo +
                "s; animation-duration: 0.5" +
                randoHundo +
                's;"><div class="stem" style="animation-delay: 0.' +
                randoHundo +
                "s; animation-duration: 0.5" +
                randoHundo +
                's;"></div><div class="splat" style="animation-delay: 0.' +
                randoHundo +
                "s; animation-duration: 0.5" +
                randoHundo +
                's;"></div></div>';
        }

        $(".rain.front-row").append(drops);
        $(".rain.back-row").append(backDrops);
    }

    mounted() {
        this.makeItRain();
    }
}
</script>

<style>
#slot {
    width: 30rem;
    height: 18rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 0.5rem;
    padding: 1rem;
    z-index: 3;
    background-color: rgb(39, 41, 61);
}

#body {
    height: 100%;
    overflow: hidden;
    background: linear-gradient(to bottom, #202020, #111119);
}

.rain {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.rain.back-row {
    z-index: 1;
    opacity: 0.5;
}

#body .back-row-toggle .rain.back-row {
    display: block;
}

.drop {
    position: absolute;
    bottom: 100%;
    width: 15px;
    height: 120px;
    pointer-events: none;
    animation: drop 0.5s linear infinite;
}

@keyframes drop {
    0% {
        transform: translateY(0vh);
    }
    75% {
        transform: translateY(90vh);
    }
    100% {
        transform: translateY(90vh);
    }
}

.stem {
    width: 1px;
    height: 60%;
    margin-left: 7px;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.25)
    );
    animation: stem 0.5s linear infinite;
}

@keyframes stem {
    0% {
        opacity: 1;
    }
    65% {
        opacity: 1;
    }
    75% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}

.splat {
    width: 15px;
    height: 10px;
    border-top: 2px dotted rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    opacity: 1;
    transform: scale(0);
    animation: splat 0.5s linear infinite;
}

#body .splat-toggle .splat {
    display: block;
}

@keyframes splat {
    0% {
        opacity: 1;
        transform: scale(0);
    }
    80% {
        opacity: 1;
        transform: scale(0);
    }
    90% {
        opacity: 0.5;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(1.5);
    }
}

#body .single-toggle .drop {
    display: none;
}

#body .single-toggle .drop:nth-child(10) {
    display: block;
}
</style>

