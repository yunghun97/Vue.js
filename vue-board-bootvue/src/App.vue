<template>

<div id="app">
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">
      
      <router-link to="/"><b-icon icon="suit-club" animation="fade " font-scale="4"></b-icon></router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link :to="{name: 'BoardList'}" class="link">게시판</router-link></b-nav-item>
        <b-nav-item href="#"><router-link :to="{name: 'BoardWrite'}" class="link">글등록</router-link></b-nav-item>
      </b-navbar-nav>

        <b-button class="ml-auto" variant="primary" pill>
          <router-link to="" class="link">로그인</router-link>
        </b-button>
        <b-button variant="info" pill>
          <router-link to="" class="link">로그아웃</router-link>
        </b-button>
    </b-collapse>
  </b-navbar>

  <router-view></router-view>

</div>
</template>

<style>
a {
  text-decoration: none;
  color: #787878;
}
input,
textarea,
.view {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
label {
  display: inline-block;
  width: 80px;
}
button{
  width: 8%;
  background-color: #d0d3d0;
  color: rgb(80, 82, 79);
  padding: 14px 20px;
  margin: 8px 0;
  border: 1px solid #787878;
  border-radius: 4px;
  font-size: large;
  cursor: pointer;
}
.regist {
  padding: 10px;
}
.regist_form {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.ssafy_logo {
  width: 150px;
}
.logo {
  display: inline-block;
  font-size: 30pt;
  font-weight: bold;
}
.underline {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, cyan 30%);
}
#book-list {
  border-collapse: collapse;
  width: 100%;
}

#book-list thead {
  background-color: #ccc;
  font-weight: bold;
}

#book-list td,
#book-list th {
  text-align: center;
  border-bottom: 1px solid #ddd;
  height: 50px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
.link{
  color: whitesmoke;
}
</style>
