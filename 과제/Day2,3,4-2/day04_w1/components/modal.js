export default{
    template:`
    <div id="modal">
        <label for="title">제목</label><input type="text" id="title" v-model="title"><br>
        <label for="content">내용</label><input type="text" id="content" v-model="content"><br>
        <button class="btn" @click="regist">추가하기</button>
        <button class="btn" @click="modalClose">취소하기</button>
    </div>
    `,
    data(){
        return{
            title: '',
            content: '',
        }
    },
    methods:{
        regist(){
            let todo={
                title: this.title,
                content: this.content,
                done: "미완료" 
            }
            document.getElementById("modal").style="display:none;";
        },
        modalClose(){
            document.getElementById("modal").style="display:none;";
        }
    }
}