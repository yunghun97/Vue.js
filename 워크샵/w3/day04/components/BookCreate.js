export default {
    template: `
    <div class="regist">
        <h1 class="underline">SSAFY 도서 등록</h1>
        <div class="regist_form">
            <label for="isbn">도서번호</label>
            <input type="text" id="isbn" name="isbn" v-model="isbn" ref="isbn" /><br />
            <label for="title">도서명</label>
            <input type="text" id="title" name="title" v-model="title" ref="title" /><br />
            <label for="author">저자</label>
            <input type="text" id="author" name="author" v-model="author" ref="author" /><br />
            <label for="price">가격</label>
            <input type="number" id="price" name="price" v-model="price" ref="price" /><br />
            <label for="content">설명</label>
            <br />
            <textarea id="content" name="content" v-model="content" ref="content" cols="35" rows="5"></textarea><br />
            <button @click="registBook">등록</button>
            <button @click="moveList">목록</button>
        </div>
    </div>        
    `,
    name: "BookCreate",
    data() {
      return {
        isbn: "",
        title: "",
        author: "",
        price: "",
        content: ""
      };
    },
    methods: {
      registBook() {
        // POST http://localhost:9999/vuews/book
        axios.post("http://localhost:9999/vuews/book",{
          isbn: this.isbn,
          title: this.title,
          author: this.author,
          price: this.price,
          content: this.content
        })
        .then((response) =>{
          console.dir(response);
          // 등록 성공 메세지 출력
          alert("등록이 완료되었습니다.");
          this.moveList();
        })
        .catch(() =>{
          alert("등록 실패.");
        });
        
      },
      moveList() {
        this.$router.push("/list");
      }
    }
  };