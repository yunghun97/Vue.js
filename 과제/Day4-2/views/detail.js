const detail = {
    template:`
    <div>
        <h2>코로나19 예방접종센터 상세 페이지</h2>
        <table class="table table-dark table-sm" style="width: 800px;">
            <thead>
            </thead>
            <tbody>
                <tr>
                    <th class="table-active" style="width: 150px; text-align: center;">센터명</th>
                    <td>{{center.centerName}}({{center.org}})</td>
                </tr>
                <tr>
                    <th class="table-active" style="width: 150px; text-align: center;">센터유형</th>
                    <td>{{center.centerType}}</td>
                </tr>
                <tr>
                    <th class="table-active" style="width: 150px; text-align: center;">주소</th>
                    <td>{{center.address}}</td>
                </tr>
                <tr>
                    <th class="table-active" style="width: 150px; text-align: center;">센터시설명</th>
                    <td>{{center.facilityName}}</td>
                </tr>
                <tr>
                    <th class="table-active" style="width: 150px; text-align: center;">전화번호</th>
                    <td>{{center.phoneNumber}}</td>
                </tr>
                <tr>
                    <th class="table-active" style="width: 150px; text-align: center;">생성일</th>
                    <td>{{center.createdAt}}</td>
                </tr>
                <tr>
                    <th class="table-active" style="width: 150px; text-align: center;">수정일</th>
                    <td>{{center.updatedAt}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `,
    data() {
        return {
            id: this.$route.params.id,
            center: ''
        }
    },
    mounted(){
        console.log('detail mounted');
        console.log('id', this.id);
        /* center = centerList.data.find((center)=>{
            return center.id == this.id
        }); */
        this.center = centerList.data.find(center => center.id == this.id); // true면 center를 return
    }
}