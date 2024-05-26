<script>
    // 각 게시물을 클릭했을 때 post_detail_page.html로 이동하는 함수
    function goToPostDetail() {
        window.location.href = 'post_detail_page.html';
    }

    // 각 게시물 요소에 클릭 이벤트를 추가
    document.querySelectorAll('.post').forEach(post => {
        post.addEventListener('click', goToPostDetail);
    });
</script>
