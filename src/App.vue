<template>
  <Backgroundrain>
    <Depressionquote></Depressionquote>
  </Backgroundrain>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Depressionquote from "./components/depressionquote.vue";
import Backgroundrain from "./components/backgroundrain.vue";

@Component({
    components: {
        Depressionquote,
        Backgroundrain,
    },
})
export default class App extends Vue {}
</script>

<style>
html,
body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
}
</style>

