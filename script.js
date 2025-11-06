// Theme Toggle Functionality
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');

  // Change button text dynamically
  if (document.body.classList.contains('light-theme')) {
    themeBtn.textContent = 'Switch to Dark Mode';
  } else {
    themeBtn.textContent = 'Switch to Light Mode';
  }
});

// Feedback Box Interaction
const feedbackInput = document.getElementById('feedbackInput');
const sendFeedback = document.getElementById('sendFeedback');
const response = document.getElementById('response');

sendFeedback.addEventListener('click', () => {
  const message = feedbackInput.value.trim();
  if (message === '') {
    response.textContent = '⚠️ Please type something before sending!';
    response.style.color = 'orange';
  } else {
    response.textContent = `✅ Thanks for your feedback: "${message}"`;
    response.style.color = 'lightgreen';
    feedbackInput.value = '';
  }
});
