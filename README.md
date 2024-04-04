## Us Alliance


#### 🔗 Link

[배포 링크](https://us-7s5bonnuk-gayun00s-projects.vercel.app/)

<br>

#### Command

로컬 서버 실행: `yarn dev`

스토리북 로컬 실행: `yarn storybook`


<br>


#### Tech stack

- 프레임워크: Next.js
- 언어: Typescript
- 상태관리: React-Query, Redux-toolkit
- 컴포넌트 문서: Storybook
- css: Tailwind-css

<br>


#### 📒 구현 사항
- 로그인 페이지
  - 로그인, 로그아웃 기능
- 홈 페이지
  - 무한 스크롤 (5개씩 콘텐츠 표시)
- 콘텐츠 세부 페이지
  - 콘텐츠 클릭 시 세부 페이지로 이동
  - 각 타입별 콘텐츠 표시
  - 오디오 10초 전후 이동 기능



|로그인|홈 페이지|세부 페이지 > 오디오|
|--|--|--|
|![2024-04-046 51 52-ezgif com-video-to-gif-converter](https://github.com/Gayun00/Us/assets/67543454/d9047de0-3c43-4dfd-82b7-959145bb7f8b)|![2024-04-047 15 10-ezgif com-video-to-gif-converter](https://github.com/Gayun00/Us/assets/67543454/46a1f072-09a9-4403-94d2-1fb6424d3864)|![ezgif com-video-to-gif-converter](https://github.com/Gayun00/Us/assets/67543454/08a369e4-82c3-439f-be94-7ff5e72b1624)|

<br>

#### 📒 Point
- **useInfiniteQuery, intersectionObserver를 사용한 무한스크롤 구현**
  - useIntersectionObserver 커스텀 훅을 사용
  - InfiniteScrollTrigger 컴포넌트를 사용하여 해당 훅을 선언
    - 요소가 뷰포트에 들어올 때 추가 데이터 패칭을 트리거 하는 로직을 추상화하고, 이를 사용하는 컴포넌트 내부에서는 해당 로직에 대한 세부사항을 알 필요 없도록 했습니다.
      
- **테스트가 용이하고 재사용성 높은 컴포넌트 설계**
  - 스토리북을 사용해 독립적인 UI만을 담당하는 컴포넌트를 분리해 작성하고 문서화했습니다.
    <img width="600" alt="스크린샷 2024-04-04 오후 7 19 26" src="https://github.com/Gayun00/Us/assets/67543454/c510f879-9813-4bd1-a7ca-af4c2242401c">

- **변경되는 요구사항에 유연하게 대응할 수 있는 컴포넌트 설계**
  - 홈 페이지 목록에서 표시되는 콘텐츠 카드의 경우, UI에 대한 요구사항이 빈번하게 변경될 수 있다는 상황을 가정하여 각 영역별 컴포넌트를 조립해 사용하고 유연성 및 확장성을 높일 수 있도록 Compound component pattern을 적용했습니다.
  - 또한 렌더링할 데이터의 뎁스가 깊어짐에 따라 props drilling을 방지하도록 했습니다.

- **Suspense를 사용한 선언적인 비동기 로직 처리**
  - Suspense와 ErrorBoundary를 사용해 에러처리 및 데이터 로드 상태에 따른 Skeleton UI를 구현했습니다.
    
- **queries, apis 폴더에 각 훅 및 api 호출 로직 랩핑함수 선언**

- **api 호출 로직 캡슐화**
  - api 호출 로직을 캡슐화하여 http 메서드별 모듈화된 구조를 만들어 재사용성을 높였습니다. 제네릭 타입을 사용해 요청과 응답의 타입을 명시함으로써 안전하고 예측가능한 코드를 작성할 수 있도록 했습니다. 또한 실무 래벨에서 생각했을 때 인증 토큰관리 등에 api 호출시 대응해야하는 사항에 대한 유언성과 확장성을 고려하였습니다.



<br>


#### 📒 CI/CD

- Vercel을 사용해 자동 배포를 진행했습니다.

  
<br>

#### 📒 Task
- github issue 생성을 통해 task를 관리하고, 관련 PR에 연결해 히스토리를 관리할 수 있도록 했습니다.
