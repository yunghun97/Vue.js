export default {
    template : `
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
            <tr v-for="(book, index) in books" :key="index">
                <td>{{index + 1}}</td>
                <td>{{book.isbn}}</td>
                <td>
                <router-link :to="'/view?isbn='+book.isbn">{{book.title}}</router-link>
                </td>
                <td>{{book.author}}</td>
                <td>{{book.price}}원</td>
            </tr>
            </tbody>
        </table>
        </div>
        <div v-else class="text-center">게시글이 없습니다.</div>
    </div>
    `,
    // name: 'BookList',
    data() {
      return {
        // 도서목록을 저장할 배열
        books: [],
      };
    },
    created() {      
      console.log("list 불러옴");
      axios.get("http://localhost:9999/vuews/book",{

      })
      .then((response)=>{
        console.log(response);
        if(response.status===200){
          this.books = response.data;
        }else{
          alert("에러발생");
        }
      });
      console.log(this.$route)
      console.log(this.$router)
      // this.movePage();
    },
    methods: {
      movePage() {
        this.$router.push("/create")
      },
    },
  }