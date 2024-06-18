function validateForm() {
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    if (email.value === '') {
        emailError.style.display = 'block';
        email.focus();
        return false;
    } else {
        emailError.style.display = 'none';
    }
    return true;
}

function openForm() {
    document.getElementById("feedbackForm").style.display = "block";
    document.getElementById("body").style.background=rgba(0, 0, 0, 0.5);
    setTimeout(() => {
        overlay.classList.add('show');
    }, 10);
  }
  
  function closeForm() {
    document.getElementById("feedbackForm").style.display = "none";
  }

