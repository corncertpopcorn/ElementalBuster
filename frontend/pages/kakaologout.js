// 카카오톡 로그아웃
function kakaoLogout() {
  if (!Kakao.Auth.getAccessToken()) {
    alert('로그아웃 성공')
    logoutSuccess(); //로그아웃 성공 시 index 페이지 리다이렉트
    return;
  }
  Kakao.Auth.logout(function() {
    alert('logout ok\naccess token -> ' + Kakao.Auth.getAccessToken());
  });
}

// Kakao 아웃 성공 시 index.html로 리다이렉트
function logoutSuccess() {
  window.location.href = "/";
}