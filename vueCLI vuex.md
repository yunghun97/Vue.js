## ESLint 
- ### 문법검사용


Vue CLI 시작

```
vue create '이름'
```
<br>

다운로드
```
vue install '이름'
```

```javaScript
import HelloWorld from '@/components/HelloWorld.vue'  // @는 src까지 바로 이동
```

## BootStrap 적용


## VueEx
- ### Vuex는 Vue.js 애플리케이션에 대한 상태 관리 패턴 + 라이브러리 입니다. 애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할을 하며 예측 가능한 방식으로 상태를 변경할 수 있습니다. 또한 Vue의 공식 devtools 확장 프로그램 (opens new window)과 통합되어 설정 시간이 필요 없는 디버깅 및 상태 스냅 샷 내보내기/가져오기와 같은 고급 기능을 제공합니다.

### 기존형태  

![image](https://user-images.githubusercontent.com/71022555/141711690-51ef0016-cda4-4e2f-b205-e913507f233b.png)
![image](https://user-images.githubusercontent.com/71022555/141711727-8fccf29b-71cd-4cfa-aa36-5fba4fe0085e.png)  

### Vuex 형태
![image](https://user-images.githubusercontent.com/71022555/141713505-bd7042bd-ef27-429f-a8a3-d66e85166638.png)
<br>

## Actions 
- ### 서버에 접속해서 데이터를 가져오는 역할 (비동기 통신 역할)
- ### 비동기로 데이터를 처리한다.
<br>

## Mutations
- ### Actions에서 얻어온 데이터를 가지고 데이터를 처리, 수정
- ### 동기적으로 데이터를 처리한다.
- ### Devtools는 Mutations의 발생한 기록을 남긴다.
- ### Mutations는 직접 호출이 불가능하고 store.commit('정의된 이름')으로 호출
<br>

## State
- ### Mutations에서 가공된 최종 형태의 데이터
- ### State 데이터를 사용할 때 getters를 통해 조회
<br>

## Getters
- ### Vue Instance의 Computed와 같은 역할 State를 기반으로 계산(computed)
<br>

## mapState MapGetters MapMutations MapActions
- ### 편하게 사용 key:value 형태, 해당하는 mapGetters안에 이름을 바로 호출하면 바로 매핑 됨, es6 객체 디스트럭처링 사용시 편하게 사용가능 반환
```javaScript
import { mapState} from 'vuex';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions} from 'vuex';
export default {
  state:{
    count: 0,
  }
  getters:{
    countMsg(state){
      console.log(state.count);
    }
  }
  computed: { 
    ...mapState(['이름']);

    ...mapGetters({
      countMsg: 'countMsg',
      msg1: 'msg1',
      msg2: 'msg2',
      msg3: 'msg3',
    }) 
    // ...mapGetters(["countMsg", "msg1", "msg2", "msg3"]) 객체 디스처럭처링 활용
    // 기본 형태 호출 할 때 : this.$store.state.count;
    // 
  },
  methods: {
      ...mapMutations({
      addMOne: "ADD_ONE",
      addMTenCount: "ADD_TEN_COUNT",
      addMObjCount: "ADD_OBJ_COUNT",
    }),
  },
    // mutation 호출할 때
    // 기본 형태
    this.$store.commit('ADD_ONE');
    // mapMutations 사용 시
    this.addMObjCount({ num }); // 객체 전달 가능
    this.addMOne();
  methods:{
    ...mapActions({
      addMOne: "ADD_ONE",
      addMTenCount: "ADD_TEN_COUNT",
      addMObjCount: "ADD_OBJ_COUNT",
    }),
    //...mapActions(["asyncAddOne"]),
  }
    // 기본 형태
    this.$store.dispatch("asyncAddOne");
    // mapActions에 선언
    this.asyncAddOne();
```

### 참고 자료 1115/vuex-test