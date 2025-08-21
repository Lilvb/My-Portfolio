function initCVDownload() {
    const btn = document.getElementById('cvBtn');
    const msg = document.getElementById('successMsg');

    if (!btn || !msg) return;

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Start download animation
        this.classList.add('downloading');
        
        // Simulate download
        setTimeout(() => {
            this.classList.remove('downloading');
            msg.classList.add('show');
            
            // Create download link
            const link = document.createElement('a');
            // Replace with your actual CV file URL
            link.href = '/path/to/your/cv.pdf'; // or your base64 data
            link.download = 'Abanob_Thabet_CV.pdf';
            link.click();
            
            // Hide success message
            setTimeout(() => {
                msg.classList.remove('show');
            }, 3000);
        }, 2000);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCVDownload);
