document.addEventListener('DOMContentLoaded', () => {
   
    const TOTAL_PAGES = 2;
    let currentPage = 1;

    const page1El = document.getElementById('page-1');
    const page2El = document.getElementById('page-2');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnPage1 = document.getElementById('page-btn-1');
    const btnPage2 = document.getElementById('page-btn-2');

    if (!page1El || !page2El) return; 

    function goToPage(n) {
        currentPage = n;

       
        page1El.style.display = n === 1 ? '' : 'none';
        page2El.style.display = n === 2 ? '' : 'none';

       
        btnPage1.classList.toggle('active', n === 1);
        btnPage2.classList.toggle('active', n === 2);

       
        btnPrev.classList.toggle('disabled', n === 1);
        btnNext.classList.toggle('disabled', n === TOTAL_PAGES);
    }

   
    goToPage(1);

    btnPrev.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage > 1) goToPage(currentPage - 1);
    });

    btnNext.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage < TOTAL_PAGES) goToPage(currentPage + 1);
    });

    btnPage1.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        goToPage(1);
    });

    btnPage2.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        goToPage(2);
    });
});