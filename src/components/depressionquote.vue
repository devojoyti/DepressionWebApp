<template>
  <div>
    <h5>{{ $store.getters.getDepressionQuote }}</h5>
    <div class="button is-medium" v-on:click="getAnotherQuote()">{{ $store.getters.getButtonMsg }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Depressionquote extends Vue {
    public getAnotherQuote() {
        this.$store.dispatch("getDepressionQuote");
        this.$store.commit("changeButtonMsgIndex");
    }

    public created() {
        this.getAnotherQuote();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
