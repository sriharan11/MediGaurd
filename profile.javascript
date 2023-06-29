function toggleEditMode() {
  const form = document.getElementById('profileForm');
  const saveButton = document.getElementById('saveButton');

  if (form.hasAttribute('readonly')) {
    form.removeAttribute('readonly');
    saveButton.removeAttribute('disabled');
    document.querySelector('.edit-button').textContent = 'Cancel';
  } else {
    form.setAttribute('readonly', 'readonly');
    saveButton.setAttribute('disabled', 'disabled');
    document.querySelector('.edit-button').textContent = 'Edit';
  }
}

function displayProfilePic(event) {
  const profilePic = document.getElementById('profilePic');
  profilePic.src = URL.createObjectURL(event.target.files[0]);
}

function checkData() {
  // Perform data validation or error checking here
  alert('Data checked successfully!');
}

document.getElementById('profileForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform form submission or data update here
});
