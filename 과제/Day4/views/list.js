<div>
    <h1>코로나19 예방접종센터 목록</h1>
    <select v-model="selected" id="centerAddr">
        <option value="전체">전체</option>
        <option value="서울특별시">서울특별시</option>
        <option value="인천광역시">인천광역시</option>
    </select>
    <table class="table table-dark table-striped table-sm" style="width: 800px;">
        <thead>
            <tr>
                <th>번호</th>
                <th>센터명</th>
                <th>생성일</th>
                <th>4</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="center of newCenterList" v-if="selected=='전체'||selected==center.sido">
                <td class="content">{{ center.id }}</td>
                <td class="content"><a class="link" href="#">{{ center.centerName }}</a></td>
                <td class="content">{{ center.createdAt }}</td>
                <td class="content">{{ center.updatedAt }}</td>

            </tr>
        </tbody>
    </table>
</div>

data() {
    return {
        newCenterList: centerList.data,
        selected: '전체',
        check:true,
        sido:''
    }
},