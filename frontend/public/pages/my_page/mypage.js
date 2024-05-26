// 사용자 이름을 표시하는 함수
function displayUsername(username) {
  var usernameElement = document.getElementById('username');
  if (usernameElement) {
      usernameElement.innerText = username;
  } else {
      console.error('Element with id "username" not found.');
      
  }
}

// // 현재 사용자의 이메일을 확인하는 함수
// function getCurrentUserEmail() {
//   fetch('http://localhost:8080/api/check-user', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email, profileNickname, profileImage })
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Current user email:', data.email);
//     // 여기서 사용자 이메일을 가져와서 필요한 작업을 수행할 수 있습니다.
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }

// // 페이지 로드 시 getCurrentUserEmail 함수를 호출하여 현재 사용자의 이메일을 가져옴
// document.addEventListener("DOMContentLoaded", function () {
//   getCurrentUserEmail();
// });

// 페이지 로드 시 자동으로 현재 사용자의 이메일을 확인하는 코드
document.addEventListener("DOMContentLoaded", function () {
  fetch('http://localhost:8080/api/current-user', {
    method: 'GET', // GET 메서드 사용
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Current user email:', data.userEmail);
    // 여기서 사용자 이메일을 가져와서 필요한 작업을 수행할 수 있습니다.
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
