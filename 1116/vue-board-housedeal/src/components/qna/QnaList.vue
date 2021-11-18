<template>
<div>
  <b-container v-if="qnalist&& qnalist.length != 0" class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>글목록</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="outline-primary" @click="moveWrite()">글쓰기</b-button>
      </b-col>
    </b-row>
    <b-table-simple hover responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>글번호</b-th>
              <b-th>제목</b-th>
              <b-th>조회수</b-th>
              <b-th>작성자</b-th>
              <b-th>작성일</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <!-- 하위 component인 qnaRow에 데이터 전달(props) -->
            <qna-list-row v-for="(qna, index) in qnalist" :key="index" v-bind="qna" v-bind:index="index" />
          </tbody>
      </b-table-simple>
  </b-container>
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show>Q&#38;A 목록이 없습니다.</b-alert></b-col>
    </b-row>
  </b-container>
</div>  
</template>

<script>
import {mapState} from "vuex";
import {mapActions} from "vuex";
import {mapMutations} from "vuex";
import QnaListRow from "@/components/qna/child/QnaListRow.vue";
export default {
    name: "QnaList",
    components:{
        QnaListRow,
    },
    created(){
      this.QnaList();
      console.log(this.qnalist);
    },
    computed:{
        ...mapState(['qnalist']),
    },
    methods:{
      ...mapMutations(["CLEAR_QNA_LIST"]),
      ...mapActions(["getQnaList"]),
      QnaList(){
        // this.CLEAR_QNA_LIST();
        this.getQnaList();
      }
    }
}
</script>

<style>

</style>