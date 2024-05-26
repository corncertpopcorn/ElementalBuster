<script>
    const posts = [];

    document.getElementById('write-form').addEventListener('submit', function(event) {
        event.preventDefault(); // 폼 제출 기본 동작 방지
        const formData = new FormData(this);
        const newPost = {
            id: posts.length + 1, // 새 게시글의 ID는 현재 게시글 개수 + 1
            title: formData.get('title'),
            content: formData.get('content'),
            authorID: 'currentUserID', // 현재 사용자의 ID 또는 세션 정보에서 가져온 ID
            hits: 0, // 새 게시글의 조회수는 초기값으로 0 설정
            hasFile: !!formData.get('file').name, // 파일 여부는 파일 입력 필드의 값으로 결정
            visibility: formData.get('btnradio') // 공개 범위 설정
        };
        posts.unshift(newPost); // 새 게시글을 배열의 맨 앞에 추가
        renderBoardList(); // 목록을 다시 렌더링하여 새 게시글을 추가합니다.
        this.reset(); // 폼을 초기화합니다.
    });

    function renderBoardList() {
        const boardContainer = document.getElementById('board-container');
        boardContainer.innerHTML = ''; // 기존 목록 삭제
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2 class="post-title">${post.title}</h2>
                <p class="post-info">${post.content}</p>
                <p class="post-info">작성자: ${post.authorID}</p>
                <p class="post-info">조회수: ${post.hits}</p>
            `;
            boardContainer.appendChild(postElement); // 게시글을 목록에 추가합니다.
        });
    }
</script>

function renderBoardList() {
  const boardContainer = document.getElementById('board-container');
  boardContainer.innerHTML = ''; // 기존 목록을 초기화

  posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      
      const titleElement = document.createElement('h2');
      titleElement.classList.add('post-title');
      titleElement.textContent = post.title;

      const contentElement = document.createElement('p');
      contentElement.classList.add('post-content');
      contentElement.textContent = post.content;

      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      
      boardContainer.appendChild(postElement);
  });
}


