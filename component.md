
## 컴포넌트
- ### Vue의 가장 강력한 기능 중 하나
- ### HTML Element를 확장하여 재사용 가능한 코드를 캡슐화
- ### Vue Component는 Vue Instance이기도 하기때문에 모든 옵션 객체를 사용
- ### data는 함수형태 return이 있어야 한다.(component/test03.html 참고)
- ### Life Cycle Hook 사용 가능
- ### 전역 컴포넌트와 지역 컴포넌트.
<br>

### 표기법
- ### 케밥 표기법
```javaScript
Vue.component('my-component-name', (/*...*/))
```
- ### 파스칼 표기법
``` javaScript
Vue.component('MyComponentName', (/*...*/))
```
### 주의 사항 DOM에 바로 쓸 때는 케밥 표기법 이름만 가능합니다.
### ex)
```javaScript
<div id="app1">
    <my-global></my-global>
    <my-global></my-global>
</div>
<div id="app2">
    <my-global></my-global>
    <my-global></my-global>
</div>
<script>
    Vue.component('MyGlobal', { // 전역 컴포넌트
    template: '<h2>전역 컴포넌트임</h2>',
    });
    new Vue({
    el: '#app1',
    });
    new Vue({
    el: '#app2',
    });
</script>
```
<br>

---
## Template
- ### 화면단이 표시할 요소 설정
```javaScript
Vue.component('컴포넌트 이름', {
        template: '<h2>템플릿 설정</h2>',
      });
```

```html
<template id="CountView">
    <div>
        <span>{{ count }}</span>
        <button @click="count++">클릭</button>
    </div>
</template>
    <script>
      Vue.component('CountView', {
        template: '#CountView',
        data() {
          return {
            count: 0,
          };
        },
      });
      new Vue({
        el: '#app',
      });
    </script>
```
---
<br>

## 컴포넌트간 동신
- ### 상위(부모) - 하위(자식) 컴포넌트 간의 data 전달 방법
- ### 부모에서 자식 : props라는 특별한 속성을 전달. (Pass Props)
- ### 자식에서 부모 : event로만 전달 가능.(Emit Event)
![image](https://user-images.githubusercontent.com/71022555/140693188-b4802885-af0b-4ba8-a21b-6886dfa1017f.png)
(component/test06 test07.html 참고)
```javaScript
.$emit('.on에 정의된 함수이름',매개변수...) // 자식이 부모에게 전달하기 위해 $emit
.$on('함수이름', function(...){})  // $on을 통해 데이터를 전달받는다.
```
---
<br>

## 랜더링 과정
1. ### new Vue()로 상위 컴포넌트인 인스턴스를 하나 생성.
2. ### Vue.component()를 이용하여 하위 컴포넌트인 child-component를 생성
3. ### ```html<div id="app">``` 내부에 <child-component>가 있기 때문에 하위 컴포넌트가 된다. 처음 생성한 인스턴스 객체가 #app의 요소를 가지기 때문에 부모와 자식 관계가 성립한다.
4. ### 하위 컴포넌트에 props속성을 정의한다 ['propsdata']
5. ### html에 컴포넌트 태그(child-component)를 추가한다.
6. ### 하위 컴포넌트에 v-bind 속성을 사용하면 상위 컴포넌트의 data의 key에 접근이 가능하다.(message)
7. ### 상위 컴포넌트의 message 속성 값인 String 값이 하위 컴포넌트의 propsdata로 전달된다.
8. ### 하위 컴포넌트의 template 속성에 정의된 ```html<span>{{}propsdata}}</span>```에게 전달된다.
---
<br>

## 사용자 정의 이벤트
- ### 이벤트 이름
  - ### 컴포넌트 및 props와는 달리, 이벤트는 자동 대소문자 변환을 제공하지 않는다.
  - ### 대소문자를 혼용하는 대신에 emit할 정확한 이벤트 이름을 작성하는 것을 권장
  - ### v-on 이벤트 리스너는 항상 자동으로 소문자로 변환되기 때문에 v-on:myEvent는 자동으로 v-on:myevent로 변환된다.이름이 my-event일 경우 myEvent 이벤트를 들을 수 없다.
  - ### 이러한 이유 때문에, 이벤트 이름에는 kebab-case를 사용하는 것이 권장된다.
ex)
```javaScript
<div id="app">
    <h4>당신이 좋아하는 파트를 선택하세요</h4>
    <h2>총 투표수 : {{ total }}</h2>
    <subject v-on:add-total-count="addTotalCount" title="코딩"></subject>
    <subject v-on:add-total-count="addTotalCount" title="알고리즘"><subject>
  </div>
  <script>
    Vue.component('Subject', {
      template: '<button v-on:click="addCount">{{title}} - {{ count }}</button>',
      props:{
        title:String,
      },
      data() {
        return {
          count: 0,
        };
      },
      methods: {
        addCount: function () {
          this.count += 1;
          // 부모 v-on: 이름에 해당하는 이름의 이벤트를 호출
          this.$emit('add-total-count');
        },
      },
    });

    new Vue({
      el: '#app',
      data: {
        total: 0,
      },
      methods: {
        addTotalCount: function () {
          this.total += 1;
        },
      },
    });
  </script>
```
결과
![image](https://user-images.githubusercontent.com/71022555/140698666-5c5900ec-f8c7-4796-ab6c-b74ae7eb4ebe.png)
---
<br>

## 하위에서 상위 컴포넌트로 event 전달
  - ### 하위 컴포넌트에서 상위 컴포넌트가 지정한 이벤트를 발생
  - ### 상위 컴포넌트는 하위 컴포넌트가 발생한 이벤트를 수신(on)하여 data처리
---

