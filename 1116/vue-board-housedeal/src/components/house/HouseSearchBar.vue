<template>
  <b-row class="mt-4 mb-4 text-center">
    <!-- <b-col class="sm-3">
      <b-form-input
        v-model.trim="dongCode"
        placeholder="동코드 입력...(예 : 11110)"
        @keypress.enter="sendKeyword"
      ></b-form-input>
    </b-col>
    <b-col class="sm-3" align="left">
      <b-button variant="outline-primary" @click="sendKeyword">검색</b-button>
    </b-col> -->
    <b-col class="sm-3"> 
      <b-form-select v-model="sidoCode" :options="sidos" @change="gugunList"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="gugunCode" :options="guguns" @change="searchApt"></b-form-select>
    </b-col>
  </b-row>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';
export default {
  name: "HouseSearchBar",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
    };
  },
  computed:{
    ...mapState(["sidos", "guguns", "houses"]),
    // sidos(){
    //   return this.$store.state.sidos;
    // }
  },
  created(){
    // this.$store.dispatch('getSido');
    this.CLEAR_SIDO_LIST();
    this.sidoList();
  },
  methods: {
    ...mapActions(["getSido","getGugun", "getHouseList"]),
    ...mapMutations(["CLEAR_GUGUN_LIST","CLEAR_SIDO_LIST"]),
    sidoList(){
      this.CLEAR_GUGUN_LIST();
      this.getSido();
    },
    gugunList(){
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if(this.sidoCode){  
        this.getGugun(this.sidoCode);
      }
    },
    searchApt(){
      if(this.gugunCode){
        console.log("아파트");
        this.getHouseList(this.gugunCode);
      }
    },
    sendKeyword() {},
  },
};
</script>

<style></style>
