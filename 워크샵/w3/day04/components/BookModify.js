export default {
    template: `
    <div class="regist">
        <h1 class="underline">SSAFY 도서 수정</h1>
        <div class="regist_form">
        <label for="isbn">도서번호</label>
        <input
            type="text"
            id="isbn"
            name="isbn"
            v-model="isbn"
            ref="isbn"
            disabled
        /><br />
        <label for="title">도서명</label>
        <input
            type="text"
            id="title"
            name="title"
            v-model="title"
            ref="title"
        /><br />
        <label for="author">저자</label>
        <input
            type="text"
            id="author"
            name="author"
            v-model="author"
            ref="author"
        /><br />
        <label for="price">가격</label>
        <input
            type="number"
            id="price"
            name="price"
            v-model="price"
            ref="price"
        /><br />
        <label for="content">설명</label>
        <br />
        <textarea
            id="content"
            name="content"
            v-model="content"
            ref="content"
            cols="35"
            rows="5"
        ></textarea
        ><br />
        <button @click="modifyBook">수정</button>
        <button @click="moveList">목록</button>
        </div>
    </div>
    `,
    name: 'BookModify',
    data() {
      return {
          isbn: '',
          title: '',
          author: '',
          price: '',
          content: '',
      };
    },
    created() {
      axios.get(`http://localhost:9999/vuews/book/${this.$route.query.isbn}`,{

      })
      .then(({data})=>{
        console.log(data);
        this.isbn = data.isbn;
        this.title = data.title;
        this.author = data.author;
        this.price = data.price;
        this.content = data.content;
      })
    },
    methods: {
      modifyBook() {
        console.log("클릭")
        axios.put(`http://localhost:9999/vuews/book/${this.isbn}`,{
          isbn: this.isbn,
          title: this.title,
          author: this.author,
          price: this.price,
          content: this.content,
        })
        .then(({status})=>{
          if(status===200){
            alert("수정 성공!");
          }
        })
        .catch((error)=>{
          alert("에러발생ㅠ.ㅠ");
        })
        this.$router.push('/list');
      },
      moveList() {
        this.$router.push('/list');
      },
    },
  }