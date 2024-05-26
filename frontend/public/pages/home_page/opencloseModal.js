
document.addEventListener('DOMContentLoaded', () => {

    // 메시지를 수신하여 처리하는 함수 정의
    function handleMessage(event) {
      if (event.data === 'closeIframe') {
        // 특정 div의 display 속성을 none으로 변경
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.style.display = 'none';
        }
        window.removeEventListener('message', handleMessage, false);
      }
    }
    // 부모 페이지로 메시지를 보내는 함수 정의
    function sendMessageToParent(message) {
      window.parent.postMessage(message, '*');
    }

    // 메시지를 수신하여 처리하는 함수 정의
    window.addEventListener('message', handleMessage);  

    // 모든 닫기 버튼에 대한 이벤트 리스너 등록
    const cancelButtons = document.querySelectorAll('.btn-primary');
    cancelButtons.forEach(button => {
      button.addEventListener('click', () => {
        sendMessageToParent('closeIframe');
      });
    });

    // 취소 버튼 클릭 이벤트 리스너 등록
    const cancelButton1 = document.getElementById('cancelButton1');
    cancelButton1.addEventListener('click', () => {
      closeModal();
        // 메시지를 수신하여 처리하는 함수 정의
        window.addEventListener('message', handleMessage);
    });

    const cancelButton2 = document.getElementById('cancelButton2');
    cancelButton2.addEventListener('click', () => {
      closeModal('myModal2');
    });
});

function closeModal() {
  const parentModal = window.parent.document.getElementById('myModal');
  if (parentModal) {
    parentModal.style.display = "none";
    document.getElementById('myModal1').style.display = 'block';
    document.getElementById('myModal2').style.display = 'none';
    document.getElementById('myModal3').style.display = 'none';
  }
}