<template>
    <div>
        <h5>
            {{  $store.getters.getDepressionQuote }}
        </h5>
        <button v-on:click=getAnotherQuote()> 
            Get New Quote
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Depressionquote extends Vue {
    public getAnotherQuote() {
        this.$store.dispatch("getDepressionQuote");
    }

    public created() {
        this.getAnotherQuote();  
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
