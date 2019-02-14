<template>
  <div class="msgbox">
    <h1
      class="has-text-centered has-text-grey-lighter is-size-5 has-text-weight-light"
    >{{ $store.getters.getDepressionQuote }}</h1>
    <div
      class="button is-medium is-fullwidth nextquotebutton has-text-grey-lighter has-text-weight-light"
      v-on:click="getAnotherQuote()"
    >{{ $store.getters.getButtonMsg }}</div>
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
.msgbox {
    position: relative;
    height: 100%;
}

.nextquotebutton {
    position: absolute;
    bottom: 0px;
    background-color: rgb(34, 35, 53);
}
</style>
