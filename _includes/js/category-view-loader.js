// 파일 경로: _includes/js/category-view-loader.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('category-container');
    const listViewBtn = document.getElementById('list-view-btn');
    const gridViewBtn = document.getElementById('grid-view-btn');

    // 요소들이 모두 존재할 때만 로직을 실행하도록 최종 확인
    if (container && listViewBtn && gridViewBtn) {
        
        // ** 보기 전환 로직 **
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
        const savedView = localStorage.getItem('categoryView') || 'list';
        setView(savedView);

        listViewBtn.addEventListener('click', () => setView('list'));
        gridViewBtn.addEventListener('click', () => setView('grid'));
    }
});
