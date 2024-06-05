let articles = document.querySelectorAll('.blog-article.short');
for (let article of articles) {
    let moreButton = article.querySelector('.more');
    moreButton.onclick = function() {
        article.classList.remove('short');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку "Подробнее" внутри.blog-article-2
    const moreButton = document.querySelector('.more');

    // Добавляем обработчик события клика для кнопки
    moreButton.addEventListener('click', function() {
        // Скрываем кнопку
        this.style.display = 'none';

        // Создаем новый параграф
        const newParagraph = document.createElement('p');
        newParagraph.classList.add('blog-article-description');
        newParagraph.textContent = 'Станьте свидетелем волнительных моментов презентации, где молодые предприниматели с пылом и вдохновением представляют свои проекты перед ведущими экспертами и инвесторами.';

        // Находим родительский элемент.blog-article-content внутри.blog-article-2
        const articleContent = this.closest('.blog-article-content');

        // Добавляем новый параграф в конец.blog-article-content
        articleContent.appendChild(newParagraph);
    });
});