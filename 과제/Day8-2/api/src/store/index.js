import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import http from "@/util/http-common.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    centerList:{}
  },
  getters:{
  },
  mutations: {
    CREATE_LIST(state, response){
      return this.state.centerList = response.data;
    }
  },
  actions: {
    createList({commit}){
      console.log("데이터가져오기...");
      http.get("https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=1000&serviceKey=pzv4UpTuGz3HMtLEXYMjaNXIPjXV5MwAfse%2FZgMuFdw1hXxwUGQQsl5ka14i4LuAapNA4NqChrh59MScqxN3Ng%3D%3D")
      .then((response) =>{
        console.dir(response);
        commit('CREATE_LIST',response);
      })
      .catch((error) =>{
        alert(error);
      })
    }
  },
  plugins: [createPersistedState()] // 새로고침 방지용
})
