<template>
  <div id="info" v-bind:class="{ attachToBottom : attachToBottom, attachToTop: !attachToBottom }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
    @Prop({
        default: true,
    })
    private attachToBottom!: boolean;
}
</script>

<style scoped>
#info {
    width: 100%;
    position: absolute;
    padding-left: 2vw;
    padding-right: 2vw;
    /* This is extra, and specific to this project, remove it */
    z-index: 3;
}

.attachToBottom {
    bottom: 0;
    margin-top: 2vh;
    margin-bottom: 3vh;
}

.attachToTop {
    top: 0;
    margin-top: 3vh;
    margin-bottom: 2 vh;
}
</style>
