<template>
    <div class="mt-3">
      <b-row>
        <b-col>
          <h1 class="underline">글 목록</h1>
        </b-col>
      </b-row>
      <b-row class="text-right">
        <b-col>           
            <b-button variant="outline-primary"  @click="movePage">글 등록</b-button>
        </b-col>
      </b-row>
        <div v-if="articles.length">
          
            <!-- <table id="book-list"> -->
              <b-table-simple hover small caption-top responsive>
                <colgroup>
                    <col style="width: 8%" />
                    <col style="width: 42%" />
                    <col style="width: 25%" />
                    <col style="width: 25%" />
                </colgroup>
                <b-thead head-variant="dark">
                  <b-tr>
                    <b-th>글번호</b-th>
                    <b-th>제목</b-th>
                    <b-th>작성자</b-th>
                    <b-th>작성일</b-th>
                  </b-tr>
                </b-thead>
                <tbody>
                <board-list-info v-for="(article, index) in articles" :key="index" v-bind="article"></board-list-info>
                </tbody>
              </b-table-simple>
            <!-- </table> -->
        </div>
        <div v-else class="text-center">게시글이 없습니다.</div>
    </div>
</template>

<script>
import http from "@/util/http-common.js";
import BoardListInfo from "@/components/board/BoardListInfo.vue";
export default {
  name: "BoardList",
  components:{
    BoardListInfo,
  },
  data() {
    return {
      articles: []
    };
  },
  created() {
    http.get("/api/board").then(({ data }) => {
      this.articles = data;
    });
  },
  methods: {
    movePage() {
      this.$router.push("/write");
    }
  }
}
</script>

<style>

</style>