# sparcs-simple-http-server

## To start

```
npm start
```

## 과제 목적

이 과제의 목적은 HTTP 요청 및 응답에 대한 이해와 우리가 평소 자주 사용하는 Express와 같은 프레임워크의 소중함을 아는 것이다.

## 구현 사항

- HTTP 버전이 1.1이 아닐 경우 사용자에게 적절한 응답 코드 보내 요청 거절하기
- 라우팅 정보 (다음 경로로 GET 요청이 왔을 때)
  - `/` : `public/index.html` 전송
  - `/login` : `public/login.html` 전송
- `/` 경로의 경우 유저의 로그인 상태 확인
  - 로그인하지 않은 유저는 `/login`으로 리디렉션
- 로그인 상태는 쿠키로 관리하되 클라이언트가 아닌 **서버 측에서 관리**한다
  - `/login`에서 유저가 로그인 버튼을 클릭할 경우 쿠키를 통해 유저가 로그인 했음을 저장하고 `/`로 이동
  - `index.html`에서 로그아웃 버튼을 클릭할 경우 쿠키를 제거해 로그아웃 상태로 전환하고 `/login`으로 이동
- 이외의 요청에는 404 응답과 함께 `public/not-found.html` 전송

<br />

---

### 다음 문서를 참고해보세요

https://nodejs.org/api/http.html
