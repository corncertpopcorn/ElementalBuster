document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.querySelector('.comment-form');
    const commentList = document.querySelector('.comment-list');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const contentInput = document.getElementById('comment-content');

        if (contentInput.value.trim() === '') {
            alert('댓글 내용을 입력해주세요.');
            return;
        }

        const newComment = document.createElement('li');
        newComment.classList.add('comment-item');

        const authorParagraph = document.createElement('p');
        const contentParagraph = document.createElement('p');

        // 임의로 로그인된 사용자 이름을 할당합니다. 실제 구현에서는 로그인한 사용자 이름을 사용해야 합니다.
        const loggedInUser = '홍길동';

        authorParagraph.innerHTML = `<strong>${loggedInUser}</strong>`;
        contentParagraph.textContent = contentInput.value;

        newComment.appendChild(authorParagraph);
        newComment.appendChild(contentParagraph);

        // 답글 버튼 추가
        const replyButton = document.createElement('button');
        replyButton.classList.add('btn', 'btn-primary', 'reply-button');
        replyButton.textContent = '답글';
        replyButton.addEventListener('click', function() {
            const replyForm = document.createElement('form');
            replyForm.classList.add('comment-form');
            replyForm.innerHTML = `
                <div class="form-group">
                    <label for="reply-content">답글 작성</label>
                    <textarea id="reply-content" class="form-control" rows="3" placeholder="답글 내용을 입력하세요"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">등록</button>
                <button type="button" class="btn btn-secondary cancel-reply">취소</button>
            `;

            // 취소 버튼 클릭 시 답글 폼 제거
            replyForm.querySelector('.cancel-reply').addEventListener('click', function() {
                replyForm.remove();
            });

            // 답글 폼 제출 시 처리
            replyForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const replyContent = replyForm.querySelector('#reply-content').value;
                console.log('답글 내용:', replyContent);
                // 여기서 서버에 답글을 전송하는 등의 로직을 추가하면 됩니다.

                // 답글 폼 제거
                replyForm.remove();
            });

            // 댓글 아이템 뒤에 답글 폼 추가
            const commentItem = this.parentElement;
            commentItem.appendChild(replyForm);
        });

        newComment.appendChild(replyButton);

        commentList.appendChild(newComment);

        contentInput.value = '';
    });
});

function deleteComment(button) {
  if (confirm("댓글을 삭제하시겠습니까?")) {
      const commentContainer = button.closest('.comment-container');
      commentContainer.remove();
  }
}

function toggleReplyForm(button) {
  const replyForm = button.closest('.comment-item').querySelector('.reply-form');
  if (replyForm.style.display === 'none') {
      replyForm.style.display = 'block';
  } else {
      replyForm.style.display = 'none';
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const commentList = document.querySelector('.comment-list');

  commentList.addEventListener('click', function(event) {
      const target = event.target;

      // 댓글 폼 토글
      if (target.classList.contains('reply-button')) {
          const commentItem = target.closest('.comment-item');
          const replyForm = commentItem.querySelector('.reply-form');
          replyForm.classList.toggle('show');
      }

      // 답글 작성 폼 제출
      if (target.classList.contains('reply-submit')) {
          event.preventDefault();

          const replyContent = target.previousElementSibling.value;
          if (replyContent.trim() === '') {
              alert('댓글 내용을 입력해주세요.');
              return;
          }

          const replyItem = document.createElement('div');
          replyItem.classList.add('comment-item', 'reply-item');
          replyItem.innerHTML = `
              <p><strong>작성자</strong></p>
              <p>${replyContent}</p>
          `;

          const parentCommentItem = target.closest('.comment-item');
          parentCommentItem.appendChild(replyItem);

          target.previousElementSibling.value = '';
          target.closest('.reply-form').classList.remove('show');
      }

      // 댓글 삭제
      if (target.classList.contains('delete-button')) {
          if (confirm('댓글을 삭제하시겠습니까?')) {
              const commentItem = target.closest('.comment-item');
              commentItem.remove();
          }
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    renderComments();
});
