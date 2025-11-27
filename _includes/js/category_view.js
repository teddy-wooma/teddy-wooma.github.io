// _includes/js/category_view.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('category-container');
    const listViewBtn = document.getElementById('list-view-btn');
    const gridViewBtn = document.getElementById('grid-view-btn');

    // ** 1. 보기 전환 로직 **
    function setView(view) {
        if (view === 'grid') {
            container.classList.remove('list-view');
            container.classList.add('grid-view');
            listViewBtn.classList.remove('active');
            gridViewBtn.classList.add('active');
        } else {
            container.classList.remove('grid-view');
            container.classList.add('list-view');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        }
        localStorage.setItem('categoryView', view); // 선택 저장
    }

    // 로컬 저장소에서 마지막 보기 설정 불러오기
    const savedView = localStorage.getItem('categoryView') || 'list';
    setView(savedView);

    listViewBtn.addEventListener('click', () => setView('list'));
    gridViewBtn.addEventListener('click', () => setView('grid'));
});
