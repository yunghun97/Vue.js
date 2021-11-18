import Vue from 'vue';
import Vuex from 'vuex';
import http from "@/util/http-common.js"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    sidos: [{ value: null, text: '선택하세요' }],
    guguns:[{ value: null, text: '선택하세요' }],
    houses:[],
    house: null,
    qnalist:[],
  },
  mutations: {
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    SET_HOUSE_LIST(state, houses){
      state.houses = houses;
    },
    SET_DETAIL_HOUSE(state, house){
      state.house = house;
    },
    CLEAR_SIDO_LIST(state){
      state.sidos = [{ value: null, text: '선택하세요' }];
    },
    CLEAR_GUGUN_LIST(state){
      state.guguns = [{ value: null, text: '선택하세요' }];
    },
    CLEAR_QNA_LIST(state){
      state.qnalist = [];
    },
    SET_QNA_LIST(state, qnalist){
      state.qnalist = qnalist;
    },
  },
  actions: {
    getSido({commit}) {
      http.get("/map/sido")
        .then((response) => {
          commit('SET_SIDO_LIST', response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    getGugun({commit}, sidoCode){
      const params = {sido: sidoCode}
      http.get('/map/gugun', {params})
      .then((response) =>{
        commit('SET_GUGUN_LIST', response.data);
      })
      .catch((error) =>{
        console.log(error);
      })
    },
    getHouseList({commit}, gugunCode){
      const SERVICE_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
      const SERVICE_URL = "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev"
      const params = {
        LAWD_CD: gugunCode,
        DEAL_YMD: "202110",
        serviceKey: decodeURIComponent(SERVICE_KEY),
      }
      http.get(SERVICE_URL, {params})
      .then((response) =>{
        commit('SET_HOUSE_LIST', response.data.response.body.items.item);
      })
      .catch((error) =>{
        console.log(error);
      })
    },
    detailHouse({commit}, house){
      // 나중에 house 일련번호를 이용하여 API 호출
      commit("SET_DETAIL_HOUSE", house);
    },
    getQnaList({commit}){
      http.get('/qna/qnalist')
      .then((response) =>{
        commit('SET_QNA_LIST',response.data);
      })
      .catch((error) =>{
        alert(error);
      })
    }
  },
  getters: {
  },
  modules:{},
  plugins: [createPersistedState()],
});
