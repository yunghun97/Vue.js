export default{
    template:`
    <div>
        <div class="task" v-for="(item,index) in todoList">
                <label :for="item.title">제목 : </label><span :id="item.title">{{item.title}}</span><br>
                <label :for="item.title">내용 : </label><span :id="item.content">{{item.content}}</span><br>
                <label :for="item.title">완료여부 : </label><span :id="item.done">{{item.done}}</span><br>
                <div v-if="item.done==='미완료'">
                <button class="btn" @click="done(index)">완료</button>
                <button class="btn" @click="remove(index)">삭제</button>
            </div>    
        </div>
    </div>
    `,
    data(){
        return{
            todoList: [],
        }
    },
    created() {
        let todo = {
            title: "SSAFY Vue.js 강의듣기",
            content: "SSAFY에서 제공하는 온라인 강의 듣기",
            done: "미완료"
        }
        this.todoList.push(todo);
        todo = {
            title: "SSAFY Vue.js 강의듣기2",
            content: "SSAFY에서 제공하는 온라인 강의 듣기2",
            done: "미완료"
        }
        this.todoList.push(todo);
        console.log(this.msg);
    },
    methods: {
        done(index){
            this.todoList[index].done="완료";
        },
        remove(index){                
            this.todoList.splice(index,1);
        },
    },
}