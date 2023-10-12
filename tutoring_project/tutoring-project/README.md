# 튜터링 프로젝트

## 시작 가이드
### 요구 사항
프로젝트 실행을 위해선 아래와 항목이 필요합니다.
- Node.js 18.4.0
- Npm 8.12.1   
### 설치 및 실행
```terminal
git clone https://github.com/egChoi92/tutoring_project.git
cd tutoring_project
npm install
```   
<b>서버 실행</b>
```terminal
node server.js
```   
<b>클라이언트 실행</b>
```terminal
npm run start
```   
<br>

## 기술 스택
### Environment
<img src="https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

### Config
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/node-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

<br>

## 주요 기능
### 토픽 카테고리
- 카테고리를 선택하면 선택한 카테고리로 토픽 리스트가 필터링되는 기능   
### 토픽 검색
- 텍스트 입력 값이 포함된 토픽 타이틀을 가진 모든 토픽을 검색하는 기능
- ex) ‘발음’ 검색 → ‘발음 교정’, ‘발음하자!’ 등의 토픽 검색   
### 토픽 좋아요
- 각 토픽에 대한 좋아요 를 표시할 수 있는 기능
- 웹 로컬 스토리지에 저장되어 동일 컴퓨터, 브라우저에서 데이터 유지   
### 성능 최적화
- 무한 스크롤 페이징네이션
- 이미지 Lazy Loading 적용   
<br>

## 디렉토리 구조
```bash
root
 ┣📦public
 ┃ ┣ 📂image
 ┃ ┗ index.html
 ┣📦src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┣ 📜TopicObserver.js
 ┃ ┃ ┣ 📜TopicFilter.js
 ┃ ┃ ┣ 📜TopicImage.js
 ┃ ┃ ┣ 📜TopicItem.js
 ┃ ┃ ┣ 📜TopicLike.js
 ┃ ┃ ┣ 📜TopicList.js
 ┃ ┃ ┗ 📜TopicSearch.js
 ┃ ┣ 📂context
 ┃ ┃ ┗ 📜Context.js
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useDebounce.js
 ┃ ┃ ┗ 📜useMemoContext.js
 ┃ ┣ 📂reducers
 ┃ ┃ ┗ 📜topicReducer.js
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜GlobalStyles.js
 ┃ ┃ ┗ 📜ThemeStyle.js
 ┃ ┣ 📜App.js
 ┃ ┗ 📜index.js
 ┣ 📜db.json
 ┗ 📜server.js
```