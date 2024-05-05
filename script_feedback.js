document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const cancelButton = document.querySelector('.btn.cancel');
    const successMessage = document.getElementById('successMessage');
    const feedbackContainer = document.getElementById('feedbackContainer');
    const allStar = document.querySelectorAll('.rating .star');

    let ratingValue = 0;

    allStar.forEach((item, idx) => {
        item.addEventListener('click', function () {
            ratingValue = idx + 1;

            allStar.forEach(i => {
                i.classList.replace('bxs-star', 'bx-star');
                i.classList.remove('active');
            });

            for (let i = 0; i < allStar.length; i++) {
                if (i <= idx) {
                    allStar[i].classList.replace('bx-star', 'bxs-star');
                    allStar[i].classList.add('active');
                } else {
                    allStar[i].style.setProperty('--i', click);
                }
            }
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const opinion = document.querySelector('textarea[name="opinion"]').value;
        successMessage.style.display = 'block';

        // Display feedback content in a small box
        const feedbackBox = displayFeedbackContent(ratingValue, opinion);

        form.reset();
        ratingValue = 0; // Reset ratingValue
        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star');
            i.classList.remove('active');
        });

        // Hide success message and feedback content after 3 seconds
        setTimeout(function () {
            successMessage.style.display = 'none';
            feedbackContainer.removeChild(feedbackBox);
        }, 3000);
    });

    cancelButton.addEventListener('click', function (event) {
        event.preventDefault();
        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star');
            i.classList.remove('active');
        });
        const opinionField = document.querySelector('textarea[name="opinion"]');
        opinionField.value = '';
        form.reset();
        successMessage.style.display = 'none';
    });

    function displayFeedbackContent(rating, opinion) {
        const feedbackBox = document.createElement('div');
        feedbackBox.className = 'feedback-box';
        feedbackBox.innerHTML = `
            <p>Rating: ${rating}</p>
            <p>Opinion: ${opinion}</p>
        `;
        feedbackContainer.appendChild(feedbackBox);
        
        return feedbackBox; // Return the created feedback box
    }
});
