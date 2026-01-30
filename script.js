// Show patient detail screen (Parts 8-12)
function showPatientDetail(name, room, level, status) {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('patient-detail').style.display = 'block';

  document.getElementById('patient-name').innerText = `Patient: ${name}`;
  document.getElementById('patient-room').innerText = `Room ${room}`;
  document.getElementById('iv-level').innerText = `IV Level: ${level}%`;
  document.getElementById('iv-status-label').innerText = `Status: ${status}`;

  const ivDiv = document.getElementById('iv-status');
  ivDiv.className = 'iv-status';
  if(status === 'NORMAL') ivDiv.classList.add('normal');
  else if(status === 'LOW') ivDiv.classList.add('warning');
  else if(status === 'EMPTY') ivDiv.classList.add('critical');

  const now = new Date();
  const hours = now.getHours() > 12 ? now.getHours()-12 : now.getHours();
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  const minutes = now.getMinutes().toString().padStart(2,'0');
  document.getElementById('last-updated').innerText = `Last Updated: ${hours}:${minutes} ${ampm}`;
}

// Back button
function backToDashboard() {
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('patient-detail').style.display = 'none';
}

// IV replaced action
function ivReplaced() {
  alert("IV marked as replaced!");
}

// Acknowledge alert
function acknowledge(btn) {
  btn.parentElement.style.opacity = 0.5;
  alert("Alert acknowledged!");
}
