const modal = document.getElementById('toolModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-modal');

function openTool(toolPath) {
    modal.style.display = 'block';
    modalBody.innerHTML = `<iframe src="${toolPath}" class="tool-iframe"></iframe>`;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalBody.innerHTML = '';
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
});