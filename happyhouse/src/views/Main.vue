<template>
  <section id="mainSection">
    <!-- 지도 -->
    <img id="mainImg" src="@/assets/mainImg.jpg" alt="My Image">
	
    <!-- 뉴스 -->
    <b-table class="table table-border table-hover" id="newsTable">
        <b-tr><b-td style="font-weight: bold; font-size: 20px; background: #ffbd47;">부동산 실시간 뉴스</b-td></b-tr>
        <tbody id="real-time"></tbody>
    </b-table>
  </section>
</template>

<script>
// import axios from "axios";
export default {
  name: "Main",
  mounted() {
    /*axios.get("https://realestate.daum.net/news/recent/hotissue/1155212", function(data){
      let tbl = '';
        $(data).find('#mCenter>.wrap_issue>.list_partnews>li>.cont>.tit>.link_txt').each(function(index, item){
            // 10개만 출력할 것.
            //https://realestate.daum.net
            if(index < 10){ 
                tbl += `<tr><td>
                <a class="article" href="https://realestate.daum.net\${item.pathname}">\${item.innerText}</a>  
                </td></tr>`
            }
        });
        $('#real-time').empty().append(tbl);
    });
  },
  methods:{
    /*
    $("#houseLink").click(function(){
		  $.ajax({
      url: '${root}/views/house.html',
			dataType: 'html',
			success: function(data){
				$("#mainSection").html(data);
			}
		  }); // ajax 끝
	  }); // 클릭 이벤트 끝
	  $("#boardLink").click(function(){
  		$.ajax({
	  		url: '${root}/views/boardList.html',
			  dataType: 'html',
			  success: function(data){
  				$("#mainSection").html(data);
			  }
		  });
	  });*/
  }
}
</script>

<style scoped>
#mainSection{
	margin-top: 10px;
}

</style>