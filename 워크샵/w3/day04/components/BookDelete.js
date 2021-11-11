export default {
    template: `
    <div>
        <h1>SSAFY 도서 삭제</h1>
        <div>삭제중...</div>
    </div>
    `,
    name: "BookDelete",
    created() {
      console.log(this.$route.query.isbn);
      axios.delete(`http://localhost:9999/vuews/book/${this.$route.query.isbn}`,{

      })
      .then(({status})=>{
        console.log(status);
        if(status===200){
          alert("삭제성공");
        }
        this.$router.push('/list');
      })
      .catch((error)=>{
        alert(error)
      })
    }
  }