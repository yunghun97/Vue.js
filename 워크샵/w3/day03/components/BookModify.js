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
    naem: 'BookModify',
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
      // url에서 파라미터정보 얻기.
      const params = new URL(document.location).searchParams;
      // localStorage에서 booklist로 저장된 도서 목록을 얻어온 후 JSON객체로 parsing한다.
      const booklist = JSON.parse(localStorage.getItem('booklist'));
      // booklist.books의 길이만큼 반복
      for (let obj of booklist.books) {
        // 수정할 isbn과 books의 isbn이 같을 경우(수정할 도서)
        if (params.get('isbn') == obj.isbn) {
          this.isbn = obj.isbn;
          this.title = obj.title;
          this.author = obj.author;
          this.price = obj.price;
          this.content = obj.content;
          break;
        }
      }
    },
    methods: {
      modifyBook() {
        const params = new URL(document.location).searchParams;
        const booklist = JSON.parse(localStorage.getItem('booklist'));
        for (let i = 0; i < booklist.books.length; i++) {
          // 수정할 도서일 경우
          if (booklist.books[i].isbn == params.get('isbn')) {
            // 도서의 정보를 수정한다.
            booklist.books[i] = {
              isbn: this.isbn,
              title: this.title,
              author: this.author,
              price: this.price,
              content: this.content,
            };
            break;
          }
        }

        // 로컬스트리지 저장
        localStorage.setItem('booklist', JSON.stringify(booklist));
        // 수정 성공 메세지 출력
        alert('수정이 완료되었습니다.');
        // 목록 페이지로 이동하기
        location.href = './list.html';
      },
      moveList() {
        location.href = 'list.html';
      },
    },
  }