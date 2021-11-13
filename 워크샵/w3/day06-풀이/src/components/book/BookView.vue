<template>
  <div>
    <!-- 하위 compoenet로 book 전달(props) -->
    <view-detail :book="book" />
  </div>
</template>

<script>
// http-common 사용
import http from "@/util/http-common";
import ViewDetail from "@/components/book/include/ViewDetail.vue";

export default {
  data: function () {
    return {
      book: null,
    };
  },
  components: {
    ViewDetail,
  },
  created() {
    // axios의 get을 이용하여 비동기방식으로 서버와 통신.
    http.get(`/${this.$route.params.isbn}`).then(({ data }) => {
      this.book = data;
    });
  },
};
</script>

<style scoped>
.regist {
  padding: 10px;
}
.regist_form {
  text-align: left;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
input,
textarea,
.view {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
</style>
