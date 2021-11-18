<template>
  <div>
        <h1>코로나19 예방접종센터 목록</h1>
        <label for="selectedArea">지역</label>
        <select v-model="selectedArea" id="selectedArea">
            <option v-for="area in areaList" :value="area" :key="area">{{area}}</option>
        </select>
        <b-table class="table table-dark table-striped table-sm" style="width: 800px;">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>센터명</th>
                    <th>생성일</th>
                    <th>4</th>
                </tr>
            </thead>
            <tbody v-if="selectedCenters && selectedCenters.length >0">
                <tr v-for="center of selectedCenters" :key="center.id">
                    <td class="content">{{center.id}}</td>
                    <td class="content"><router-link :to="getUrl(center.id)" class="link">{{center.centerName}}</router-link></td>
                    <td class="content">{{center.createdAt}}</td>
                    <td class="content">{{center.updatedAt}}</td>

                </tr>
            </tbody>
        </b-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newCenterList: this.$store.state.centerList,
            areaList: ["전체", "서울특별시", "인천광역시", "부산광역시", "대전광역시", "대구광역시", "충청남도", "충청북도", "경상남도", "경상북도", "전라북도", "광주광역시", "경기도"],
            selectedArea: '전체',
        }
    },
    created(){
        this.$store.dispatch("createList");
    },
    computed: {
        selectedCenters() {
            if (this.selectedArea === '전체') {
                return this.newCenterList;
            }
            return this.newCenterList.filter((center) => { return center.sido == this.selectedArea })
        }
    },
    methods:{
        getUrl(id){
            return `/detail/${id}`;
        }
    }
}
</script>

<style>

</style>