let articles = document.querySelectorAll('.blog-article.short');
for (let article of articles) {
    let moreButton = article.querySelector('.more');
    moreButton.onclick = function() {
        article.classList.remove('short');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const moreButton = document.querySelector('.more');
    moreButton.addEventListener('click', function() {
        const newParagraph = document.createElement('p');
        newParagraph.classList.add('blog-article-description');
        newParagraph.textContent = 'Станьте свидетелем волнительных моментов презентации, где молодые предприниматели с пылом и вдохновением представляют свои проекты перед ведущими экспертами и инвесторами.';
        newParagraph.style.marginBottom = '0';
        const articleContent = this.closest('.blog-article-content');
        articleContent.appendChild(newParagraph);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const moreButton = document.querySelector('.more-blog-article-2');
    moreButton.addEventListener('click', function() {
        const newParagraph = document.createElement('p');
        newParagraph.classList.add('blog-article-description');
        newParagraph.textContent = 'В атмосфере непринуждённого общения вы сможете пообщаться с единомышленниками, узнать о новых проектах и вакансиях, а также найти партнёров и инвесторов для своих идей.'; // Содержимое нового параграфа
        newParagraph.style.marginBottom = '0';
        const articleContent = this.closest('.blog-article-content');
        const lastParagraph = articleContent.lastElementChild;
        articleContent.insertBefore(newParagraph, lastParagraph);
        const targetParagraph = document.querySelector('.blog-article-3.blog-article-description:last-child');
        targetParagraph.insertAdjacentHTML('afterend', '<p class="blog-article-description">Пока</p>');
    });
});
