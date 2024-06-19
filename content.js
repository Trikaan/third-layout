document.addEventListener("DOMContentLoaded", function() {
    const pageButtons = document.querySelectorAll('.standard-button-number');
  
    pageButtons.forEach(button => {
      button.addEventListener('click', function() {
        pageButtons.forEach(btn => btn.classList.remove('selected-button-number'));
        this.classList.add('selected-button-number');
      });
    });
  });