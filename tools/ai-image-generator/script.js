// Elements
const promptInput = document.getElementById('promptInput');
const sizeSelect = document.getElementById('sizeSelect');
const numberSelect = document.getElementById('numberSelect');
const generateBtn = document.getElementById('generateBtn');
const loadingSection = document.getElementById('loadingSection');
const resultsSection = document.getElementById('resultsSection');
const imagesGrid = document.getElementById('imagesGrid');
const downloadAllBtn = document.getElementById('downloadAllBtn');
const errorSection = document.getElementById('errorSection');
const errorMessage = document.getElementById('errorMessage');

// Event listeners
generateBtn.addEventListener('click', generateImages);

// Generate images function
async function generateImages() {
    const prompt = promptInput.value.trim();
    const size = sizeSelect.value;
    const number = parseInt(numberSelect.value);
    
    if (!prompt) {
        showError('Please enter a description for the image');
        return;
    }
    
    // Show loading
    showLoading();
    hideError();
    hideResults();
    
    try {
        // DEMO MODE - Replace with actual API call
        if (prompt.toLowerCase().includes('demo')) {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            // Show demo results
            showDemoResults(number);
        } else {
            showError('This is a demo version. Add "demo" to your prompt to test. In real version, we will call AI API here.');
        }
    } catch (error) {
        showError('Error generating images: ' + error.message);
    } finally {
        hideLoading();
    }
}

// Show demo results (for testing)
function showDemoResults(number) {
    imagesGrid.innerHTML = '';
    
    for (let i = 0; i < number; i++) {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'generated-image';
        
        // Demo image URL (replace with actual generated images)
        const imageUrl = `https://picsum.photos/512?random=${i}`;
        
        imageDiv.innerHTML = `
            <img src="${imageUrl}" alt="Generated image ${i + 1}">
            <div class="image-actions">
                <button class="download-btn" onclick="downloadImage('${imageUrl}', 'image-${i + 1}.jpg')">
                    Download
                </button>
            </div>
        `;
        
        imagesGrid.appendChild(imageDiv);
    }
    
    showResults();
}

// Download single image
function downloadImage(url, filename) {
    // This would be implemented with actual download logic
    alert(`Would download: ${filename}\nURL: ${url}`);
}

// Show/hide sections
function showLoading() {
    generateBtn.disabled = true;
    loadingSection.style.display = 'block';
}

function hideLoading() {
    generateBtn.disabled = false;
    loadingSection.style.display = 'none';
}

function showResults() {
    resultsSection.style.display = 'block';
}

function hideResults() {
    resultsSection.style.display = 'none';
}

function showError(message) {
    errorMessage.textContent = message;
    errorSection.style.display = 'block';
}

function hideError() {
    errorSection.style.display = 'none';
}

// Download all images
downloadAllBtn.addEventListener('click', () => {
    alert('Download all functionality would be implemented in real version');
});

// Enter key to generate
promptInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        generateImages();
    }
});