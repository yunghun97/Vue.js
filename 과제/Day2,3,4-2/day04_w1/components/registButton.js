export default {
    template: `
    <section class="buttonSection">
    <button class="btn" @click="modalShow">할일등록</button>
    </section>
    `,
    methods: {
        modalShow(){
            document.getElementById("modal").style="display:block;";
        },
    },
}