// 파일 경로: _includes/js/category-view-loader.js 내용 전체

(function() {
    'use strict'; 

    const container = document.getElementById('category-container');
    const listViewBtn = document.getElementById('list-view-btn');
    const gridViewBtn = document.getElementById('grid-view-btn');

    if (container && listViewBtn && gridViewBtn) {
        
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
            localStorage.setItem('categoryView', view); 
        }

        // 로컬 저장소에서 마지막 보기 설정 불러오기
        // *** 여기가 'list'에서 'grid'로 변경되었습니다. ***
        const savedView = localStorage.getItem('categoryView') || 'grid'; 
        setView(savedView);

        listViewBtn.addEventListener('click', () => setView('list'));
        gridViewBtn.addEventListener('click', () => setView('grid'));
    }
})();
