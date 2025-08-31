// Initialize Fabric Canvas
const canvas = new fabric.Canvas('thumbnailCanvas', {
    width: 1280,
    height: 720
});

// Image Upload
document.getElementById('imageUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            fabric.Image.fromURL(event.target.result, function(img) {
                canvas.add(img);
                canvas.renderAll();
            });
        };
        reader.readAsDataURL(file);
    }
});

// Add Text
function addText() {
    const text = new fabric.IText('Edit this text', {
        left: 100,
        top: 100,
        fontFamily: 'Arial',
        fill: '#000000'
    });
    canvas.add(text);
    canvas.setActiveObject(text);
}

// Download functionality
document.getElementById('downloadBtn').addEventListener('click', function() {
    const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1
    });
    const link = document.createElement('a');
    link.download = 'thumbnail.png';
    link.href = dataURL;
    link.click();
});

// Initialize
addText(); // Default text