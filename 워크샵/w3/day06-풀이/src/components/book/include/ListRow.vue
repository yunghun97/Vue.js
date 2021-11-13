<template>
  <tr>
    <td>{{ no }}</td>
    <td>{{ isbn }}</td>
    <td>
      <router-link :to="`/book/view/${isbn}`">{{ title }}</router-link>
    </td>
    <td>{{ author }}</td>
    <td>{{ numberWithCommas(price) }}원</td>
  </tr>
</template>

<script>
export default {
  name: "listrow",
  props: {
    // 상위 component로 부터 넘어온 도서정보
    no: String,
    isbn: String,
    title: String,
    author: String,
    price: Number,
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
<style scope>
td {
  text-align: center;
  border-bottom: 1px solid #ddd;
  height: 50px;
}
</style>
