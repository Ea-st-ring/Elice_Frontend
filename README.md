# Elice Frontend Team PA
## ⚙️ 개발 환경

- ``
nodejs v20.10.0
``
- ``
NextJS v14.1.0
``
- **ETC** : `styled-components` `axios` `ESLint` `prettier`


## 💻 기능 구현
### 1. UI
요구사항 명시된 사항들 그대로 작업하였습니다.
#### 개인 구현
- CourseCard hover effect 추가

- 데이터 로딩 화면 

- 검색 결과가 없는 경우의 화면

- 에러 토스트 알림: `react-toastify` 라이브러리 사용

- 필터 디자인 : 기존 production 페이지 참고

- 아이콘 : Figma 활용

- 페이지네이션 박스 : 최대 / 최소 4개 조건에 맞게 선택된 박스가 중앙 정렬되도록 구현

### 2. Middleware API

`fetchData` : `/api/course/list`로 GET 요청을 수행합니다. 이 때 파라미터로 `filter_conditions`, `offset`, `countPerPage`를 보냅니다.


- **페이지 초기 진입 클라이언트** : `offset = 0`, `count = 20`을 파라미터로 `pages/api/list`에 `GET` 요청
    
- **API Router** : Elice production url에 `GET` 요청, 필요한 데이터만을 정제하여 `status: 200, data` 반환 
    
- **검색, 필터 적용** : `offset`, `count`, `filter_condition`을 파라미터로 요청 받아 처리

- **개인 구현** : 기존 filter 조건에 구독 `enroll_type=4` 조건 추가 

- **Error** : `GET` 요청이 아닌 다른 요청, 필수 파라미터 누락에 대한 에러 핸들링

### 3. Pagination
- **상태관리** : Local State 사용 

`courses` : 현재 페이지의 course 배열

`offset`: 페이지 위치

`countPerPage` : 페이지 당 불러올 데이터의 개수 

`current` : 현재 페이지 번호

`handlePageChange(page: number) => void` : Arrow 혹은 Box 클릭 시 페이지 변경 함수

`courseCount` : 총 데이터 개수

`totalPages` : `courseCount`, `countPerPage`를 계산하여 얻은 총 페이지 수

#### 구현

`totalPages`에 따라 Box를 렌더링하였으며, `current`를 이용하여 Arrow에 조건부 스타일을 적용하였습니다.

`Box` 혹은 `Arrow` 클릭 시 `handlePageChange()`를 호출하여 페이지를 이동시켰습니다.

`handlePageChange()`에서는 인자로 넘어온 값에 따라 `offset` 값을 변경하고, `loading` 상태를 true로 설정합니다.

`fetchData()`를 호출하는 `useEffect` 훅의 `deps`에 `offset`이 포함되어 있어 데이터를 새로 요청합니다.

### 4. Search, Filter
- `use-debounce` 라이브러리의 `useDebouncedCallback` 훅을 이용하여 300ms debounced search를 구현하였습니다.
- `useRouter()`, `useSearchParams()`를 통해 query를 유지합니다.
- 이 때 기존 url query와 비교 후, 동일한 param 값의 존재 여부에 따라 추가 / 제거를 수행했습니다.
- 또한 검색어가 변경될 시 `handlePageChange()`를 호출, 1페이지로 설정하였습니다.


## 기타 
- 구현 초반 명세서를 잘못 이해하여 `MongoDB`에 저장된 데이터를 요청하는 식으로 구현하였습니다.

  `src/pages/api/course/mylist.tsx`, `src/util/db.ts`는 위와 관련한 파일입니다.

- 페이지네이션 상태 관리에 Local State가 아닌 `swr` 라이브러리를 통해 전역 상태 관리와 데이터 Fetching을 동시에 수행하는 것도 좋을 것 같았으나, 시간 관계상 구현하지 못했습니다.

- Nextjs에 대한 조예가 깊지 않아 프로젝트 구조 설계에 미흡함이 있었던 것 같습니다. 최대한 공식 문서를 참고하여 초기 설정을 하였습니다.

- 작업 후 `npm run build` 과정에서 `useSearchParams` 관련 이슈가 발생했습니다.

  시간 관계상 공식 문서를 참고, `Suspense`로 컴포넌트를 감싸주어 해결하려 했으나 계속해서 빌드에 실패했습니다.

  급한대로 `config` 설정을 통해 에러를 해결하였으나, CSR이 아닌 SSR 방식을 위해서는 이를 제대로 해결해야할 것 같습니다.

- `webpack-bundle-analyzer` 라이브러리를 통해 Tree-Shaking 혹은 Code-Spliting 기법을 통해 각 번들의 사이즈를 줄여보고 싶었으나 시간 관계상 진행하지 못했습니다.

