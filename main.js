const container = document.getElementById('main-container');
function select(index) {
    console.log('called with index', index);
    const el = document.getElementById('item'+index);
    Array.from(container.children).forEach(el => {
        el.classList.remove('centerItem');
    });
    el.classList.add('centerItem');
}
