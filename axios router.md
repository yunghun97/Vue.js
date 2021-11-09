# Axios
- ## Vue에서 권고하는 HTTP 통신 라이브러리
- ## Priomise 기반의 HTTP 통신 라이브러리이며 상대적으로 다른 HTTP 통신 라이브러리들에 비해 문서화가 잘되어 있고 API 가 다양하다
- ## axios.get(URL) <<Promise 객체를 return>> then catch 사용가능
---
<br>

## Promis
- ### 자바스립트는 단일 스레드로 코드를 처리하기 때문에 특정 로직의 처리가 끝날 때까지 기다려 주지 않는다. 따라서 데이터를 요청하고 받아올 때까지 기다렸다가 화면에 나타내는 로직을 실행해야 할 때 Promise를 활용한다.

```javascript
const promise = new Promise((성공(resolve), 실패(reject)) => {  // 이름 마음대로 가능
    console.log('Promise');
    resolve('resolve'); // >> then 부분 실행
    // reject('reject'); // >> catch 부분 실행
    });

    promise
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        console.log(data);
    });
```
---
<br>

## Axois API
|API 유형|처리결과|
|:---|:---|
|axios.get('URL 주소').then().catch()|해당 URL에 HTTP GET 요청 성공시 .then() 실패시 .catch()|
|axios.post('URL 주소').then().catch()|해당 URL에 HTTP post 요청 성공시 .then() 실패시 .catch()|
|axois({옵션 속성})|HTTP  요청에 대한 자세한 속성들을 직접 정의하여 보낼 수 있다. 보낼 URL, HTTP 요청방식, 보내는 데이터 유형 등...|
<br>

# Router
## Vue-router
- ### 라우팅 : 웹 페이지 간의 이동 방법
- ### Vue.js의 공식 라우터
- ### 라우터는 컴포넌트와 매핑
- ### Vue를 이용한 SPA를 제작할 때 유용
- ### URL에 따라 컴포넌트를 연결하고 설정된 컴포넌트를 보여준다.

```javaScript
<div id="app">
    <h1>SSAFY - Router</h1>
    <p>
      <router-link to="/">HOME</router-link>
      <router-link to="/board">게시판</router-link>
      <router-link to="/qna">QnA</router-link>
      <router-link to="/gallery">갤러리</router-link>
    </p>

    <!-- 현재 라우트에 맞는 컴포넌트가 렌더링 -->
    <router-view></router-view>
  </div>
  <script>
    // 라우트 컴포넌트
    const Main = {
      template: '<div>메인 페이지</div>',
    };
    const Board = {
      template: '<div>자유 게시판</div>',
    };
    const QnA = {
      template: '<div>질문 게시판</div>',
    };
    const Gallery = {
      template: '<div>갤러리 게시판</div>',
    };

    // 라우터 객체 생성
    const router = new VueRouter({
      routes: [
        {
          path:"/",
          component:Main,
        },
        {
          path:"/board",
          component:Board,
        },
        {
          path:"/qna",
          component:QnA,
        },
        {
          path:"/gallery",
          component:Gallery,
        },
        ],
      });
      
    // Vue 인스턴트 라우터 주입
    const app = new Vue({
      el: '#app',
      router,
    });
</script>
```
<br>

---
## vue-router 이동 및 렌더링
- ### 네비게이션을 위해 router-link 컴포넌트를 사용
- ### 속성은 'to' prop을 사용
- ### 기본적으로 ```<router-link>```는 ```<a>``` 태그로 렌더링
```javaScript
{
  path: '/',
  component: Main,
},
{
  path: '/board',
  component: board2,
},
// 사용할 때
<router-link to="/">HOME</router-link>
<router-link to="/board">게시판</router-link>
```
---
<br>

## 이름을 가지는 라우트
- ### 라우트는 연결하거나 탐색을 수행할 때 이름이 있는 라우트를 사용
- ### Router Instance를 생성한느 동안 routes 옵션에 지정
```javaScript
{
  path: '/',
  name: 'main',
  component: Main,
},
// 사용할 때
<router-link :to="{name: 'main'}">HOME</router-link>
```
<br>

---
## 프로그래밍 방식 라우터
- ### ```<router-link>```를 사용하여 선언적 네비게이션용 anchor 태그를 만드는 것 외에도 라우터의 instance method를 사용하여 프로그래밍으로 수행
```html
<p>
  <a href="#main" @click="$router.push('/')">HOME</a>
  <a href="#board" @click="$router.push('/board')">게시판</a>
  <a href="#qna" @click="$router.push({name: 'qna'})">QnA</a>
  <a href="#gallery" @click="$router.push({name: 'gallery'})">갤러리</a>
</p>
```






---
https://github.com/axios/axios