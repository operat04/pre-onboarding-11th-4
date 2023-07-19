# 원티드 프리 온보딩 인터쉽 과제

## Get start client

```
$ git clone https://github.com/kjungit/pre-onboarding-11th-searchBar.git
$ npm install
$ npm start
```

## Get start server

```
$ git clone git@github.com:walking-sunset/assignment-api.git
$ npm install
$ npm start
```

## 개발 환경

- 개발언어 : Javascript
- 스타일 : styled-components
- HTTP Client: axios

## 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

## API를 호출할 때 마다 console.info("calling api") 출력

## API 호출별로 로컬 캐싱 구현

API 호출 시 localStorage에 검색어와 호출된 데이터 , expiration(현재 설정은 10초)을 함께 저장
다음 Input 변경 시에는 localStorage를 먼저 탐색 후 있을 경우 expiration 확인 expiration이 지났으면 데이터 삭제 후 다시 API 통신 후 갱신

## 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

디바운싱 기법을 이용해 Debounce 함수를 만들어 input 입력 후 0.5초 뒤에 데이터 호출 함수가 작동되도록 하여 , input이 바뀔 땐 API호출을 줄임.

## 키보드만으로 추천 검색어들로 이동 가능하도록 구현

focusIdx State를 만들어 input창에서 OnkeyDown이 작동할 때 focusIdx를 관리하여 데이터의 index와 비교 후 해당 요소를 선택할 수 있도록 함.
