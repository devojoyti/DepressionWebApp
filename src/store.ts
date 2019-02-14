import Vue from "vue";
import Vuex from "vuex";
import restClient from "./util/restclient";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        quote: "",
        buttomMsgIndex: 0,
        buttonMsg: [
            "More depression",
            "More like this..",
            "Next one!",
            "Haha..More!",
        ],
    },
    getters: {
        getDepressionQuote(state) {
            return state.quote;
        },
        getButtonMsg(state) {
            return state.buttonMsg[state.buttomMsgIndex];
        },
    },
    mutations: {
        setQuote(state, payload: any) {
            state.quote = payload;
        },
        changeButtonMsgIndex(state) {
            state.buttomMsgIndex = Math.floor(
                Math.random() * Math.floor(state.buttonMsg.length),
            );
        },
    },
    actions: {
        getDepressionQuote({ commit }) {
            restClient
                .GET_DepressionQuotes()
                .then((response) => {
                    const payload: any = response.data;
                    commit("setQuote", payload);
                })
                .catch((error) => {
                    console.log("Error during HTTP request!");
                    console.log("Error is: ", error);
                });
        },
    },
});
