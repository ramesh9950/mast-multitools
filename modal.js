// Modal functionality
const modal = document.getElementById('toolModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-modal');

// Open modal with tool
function openTool(toolPath) {
    // Pehle modal ko center mein position karo
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    
    modalBody.innerHTML = `<iframe src="${toolPath}" class="tool-iframe"></iframe>`;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Iframe load hone ke baad scroll top kar do
    const iframe = document.querySelector('.tool-iframe');
    iframe.onload = function() {
        iframe.contentWindow.scrollTo(0, 0);
    };
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable background scrolling
    modalBody.innerHTML = ''; // Clear iframe
}

// Event listeners
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Escape key to close modal
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Modal ko resize hone par bhi center mein rakhna
window.addEventListener('resize', function() {
    if (modal.style.display === 'flex') {
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
    }
});

// Modal ke andar scrolling control karega
function setupModalScrolling() {
    const iframe = document.querySelector('.tool-iframe');
    if (iframe) {
        iframe.onload = function() {
            // Iframe ke content ko access karo
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            
            // Iframe ke body ko full height do
            iframeDoc.body.style.minHeight = '100vh';
            iframeDoc.body.style.boxSizing = 'border-box';
            
            // Footer ko hide karo agar dikh raha hai toh
            const iframeFooter = iframeDoc.querySelector('footer');
            if (iframeFooter) {
                iframeFooter.style.display = 'none';
            }
        };
    }
}