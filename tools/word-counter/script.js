const textArea = document.getElementById('textInput');
const wordCountElement = document.getElementById('wordCount');
const charCountElement = document.getElementById('charCount');

textArea.addEventListener('input', function() {
    const text = textArea.value;
    charCountElement.textContent = text.length;

    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCountElement.textContent = words.length;
});