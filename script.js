document.addEventListener('DOMContentLoaded', function() {
    const likeBtn = document.getElementById('like-btn');
    const dislikeBtn = document.getElementById('dislike-btn');
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    // Like/Dislike button functionality
    likeBtn.addEventListener('click', function() {
        likeBtn.classList.toggle('active');
    });

    dislikeBtn.addEventListener('click', function() {
        dislikeBtn.classList.toggle('active');
    });

    // Comment form functionality
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentInput = document.getElementById('comment-input');
        const commentText = commentInput.value.trim();

        if (commentText) {
            const newComment = document.createElement('li');
            newComment.innerHTML = `<span class="comment-author">User:</span> <span class="comment-text">${commentText}</span>`;
            commentList.appendChild(newComment);
            commentInput.value = '';
        }
    });
});
