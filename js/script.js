const search = document.querySelector('.search');
const filter = document.querySelector('.blog-filter-dropdown');
const body = document.querySelector('body');

search.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.add('search-active');
});

filter.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.add('show');
});

body.addEventListener('click', function () {
    search.classList.remove('search-active');
    filter.classList.remove('show');
});


