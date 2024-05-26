// DOMContentLoaded 이벤트를 사용하여 DOM이 완전히 로드되었을 때 실행될 함수를 등록
document.addEventListener('DOMContentLoaded', () => {
    // 선택 버튼 요소를 가져옴
    const selectButton = document.getElementById('selectButton');

    selectButton.addEventListener('click', () => {
      document.getElementById('myModal1').style.display = 'none';
      document.getElementById('myModal2').style.display = 'block';
    // 추가 동작을 여기에 추가
    });

  // 카테고리 선택 버튼 클릭 시 동작 정의
  const categorySelectButton = document.getElementById('categorySelectButton');

  categorySelectButton.addEventListener('click', () => {
    document.getElementById('myModal2').style.display = 'none';
    document.getElementById('myModal3').style.display = 'block';
    // 추가 동작을 여기에 추가
  });
});

function recommand(){
  // 카테고리 선택 버튼 클릭 시 동작 정의
  const recommendButton = document.getElementById('recommendButton');

  recommendButton.addEventListener('click', () => {
    const parentModal = window.parent.document.getElementById('myModal');
    if (parentModal) {
      parentModal.style.display = "none";
      document.getElementById('myModal2').style.display = 'none';
      document.getElementById('myModal3').style.display = 'none';
      document.getElementById('myModal1').style.display = 'block';
    }
  });
}




