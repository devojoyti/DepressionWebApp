import Vue from 'vue';
import Vuex from 'vuex';
import restClient from './util/restclient';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        quote: ""
    },
    getters: {
        getDepressionQuote(state) {
            return state.quote;
        }
    },
    mutations: {
        setQuote(state, payload: any) {
            state.quote = payload;
        }
    },
    actions: {
        getDepressionQuote({commit}) {
            restClient.GET_DepressionQuotes().then((response) => {
                const payload: any = response.data; 
                commit("setQuote", payload); 
            }).catch((error) => {
                console.log("Error during HTTP request!"); 
                console.log("Error is: ", error); 
            });
        }
    },
});
