<template>
  <div>
    <h1 class="underline">도서 목록</h1>
    <div style="text-align: right">
      <button @click="movePage">도서 등록</button>
    </div>
    <div v-if="books.length">
      <table id="book-list">
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 20%" />
          <col style="width: 40%" />
          <col style="width: 20%" />
          <col style="width: 15%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>ISBN</th>
            <th>제목</th>
            <th>저자</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          <list-row
            v-for="(book, index) in books"
            :key="index"
            :no="`${index + 1}`"
            :isbn="book.isbn"
            :title="book.title"
            :author="book.author"
            :price="book.price"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// http-common 사용
import http from "@/util/http-common";
import ListRow from "@/components/book/include/ListRow.vue";

export default {
  data() {
    return {
      books: [],
    };
  },
  components: {
    ListRow,
  },
  created() {
    // axios의 get을 이용하여 비동기방식으로 서버와 통신.
    http.get().then(({ data }) => {
      this.books = data;
    });
  },
  methods: {
    movePage() {
      // name이 book-create인 route로 변경.
      this.$router.push({ name: "book-create" });
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped>
#book-list {
  border-collapse: collapse;
  width: 100%;
}

#book-list thead {
  background-color: #ccc;
  font-weight: bold;
}

#book-list td,
#book-list th {
  text-align: center;
  border-bottom: 1px solid #ddd;
  height: 50px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
