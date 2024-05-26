// Kakao 로그인 함수
function loginWithKakao() {
  Kakao.Auth.login({
    success: function (authObj) {
      // 로그인 성공 시 처리할 내용
      console.log(authObj); //access 토큰 값
      Kakao.Auth.setAccessToken(authObj.access_token); // access토큰값 저장
      getInfo(); // 사용자 정보 요청
      var favoriteModal = new bootstrap.Modal(document.getElementById('favoriteModal'));
      favoriteModal.show();

      //로그인 정보를 세션 스토리지에 저장
      sessionStorage.setItem("Authorization", authObj.access_token);
    },
    fail: function (err) {
      // 로그인 실패 시 처리할 내용
      console.error('로그인 실패:', err);
    }
  });
}

// 엑세스 토큰을 발급받고, 아래 함수를 호출시켜서 사용자 정보를 받아옴.
function getInfo() {
  Kakao.API.request({
    url: '/v2/user/me',
    success: function (res) {
      console.log(res);
      // 이메일, 닉네임, 프로필이미지 변수 선언 및 할당
      var userEmail = res.kakao_account.email;
      var profileNickname = res.kakao_account.profile.nickname;
      var profileImage = res.kakao_account.profile.thumbnail_image_url;
      // 이메일을 숨겨진 필드에 설정
      document.getElementById('userEmail').value = userEmail;
      console.log('Email set to hidden field: ' + userEmail); // 디버깅 로그 추가      
      // 가입 여부 확인 요청
      checkUser(userEmail, profileNickname, profileImage);
    },
    fail: function (error) {
      alert('카카오 로그인에 실패했습니다. 관리자에게 문의하세요.' + JSON.stringify(error));
    }
  });
}

// 서버에 사용자 존재 여부 확인 요청
function checkUser(userEmail, profileNickname, profileImage) {
  console.log('Sending user data to server:', { userEmail, profileNickname, profileImage });
  fetch('http://localhost:8080/api/check-user', {  // URL을 서버의 주소로 설정
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userEmail, profileNickname, profileImage })
  })
    .then(response => {
      console.log('Server response:', response);
      return response.json();
    })
    .then(data => {
      if (data.exists) {
      loginSuccess();
      } else {
        openModal();
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// 선호도 저장 함수
function saveFavorites() {
  var userEmail = document.getElementById('userEmail').value;
  console.log('Email retrieved from hidden field: ' + userEmail); // 디버깅 로그 추가
  var korean = document.getElementById('korean').checked;
  var japanese = document.getElementById('japanese').checked;
  var chinese = document.getElementById('chinese').checked;
  var western = document.getElementById('western').checked;
  var fastfood = document.getElementById('fastfood').checked;

  console.log('Sending data to server:', { userEmail, korean, japanese, chinese, western, fastfood });

  fetch('http://localhost:8080/api/save-favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userEmail, korean, japanese, chinese, western, fastfood })
  })
    .then(response => {
      console.log('Server response:', response);
      return response.json();
    })
    .then(data => {
      console.log('Server response data:', data);
      loginSuccess(); // main 페이지로 리다이렉트
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// openModal 함수 정의
function openModal() {
  var favoriteModal = new bootstrap.Modal(document.getElementById('favoriteModal'));
  favoriteModal.show();
}

// Kakao 로그인 성공 시 home_page.html로 리다이렉트
function loginSuccess() {
  window.location.href = "/home_page.html";
}