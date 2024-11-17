function redirectToPage(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
    var buyButtons = document.querySelectorAll('.card-button-buy');
    var rentButtons = document.querySelectorAll('.card-button-locate');

    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            redirectToPage('pages/akira.html'); 
        });
    });

    rentButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            redirectToPage('pages/akira.html'); 
        });
    });

    var submitReviewButton = document.getElementById('submit-review');

    submitReviewButton.addEventListener('click', function() {
        var comment = document.getElementById('comment').value;
        var rating = document.getElementById('rating').value;

        if (comment.trim() === '') {
            alert('Por favor, escreva um comentário.');
            return;
        }

        var reviewContainer = document.getElementById('reviews');
        var reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        var ratingElement = document.createElement('div');
        ratingElement.classList.add('rating');
        ratingElement.textContent = 'Classificação: ' + '★'.repeat(rating);

        var commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = comment;

        reviewElement.appendChild(ratingElement);
        reviewElement.appendChild(commentElement);
        reviewContainer.appendChild(reviewElement);

        document.getElementById('comment').value = '';
        document.getElementById('rating').value = '1';
    });

    toggleDarkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelectorAll('button').forEach(function(button) {
      button.classList.toggle('dark-mode');
    });
    document.getElementById('review-section').classList.toggle('dark-mode');
    document.getElementById('review-form').classList.toggle('dark-mode');
    document.getElementById('reviews').classList.toggle('dark-mode');
    document.querySelectorAll('.review').forEach(function(review) {
      review.classList.toggle('dark-mode');
    });
  });
});
