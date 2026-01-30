// Patient Data
const patients = [
  {name:'Ana Cruz', room:201, level:70, status:'NORMAL'},
  {name:'Ben Reyes', room:203, level:25, status:'LOW'},
  {name:'Carla Santos', room:205, level:0, status:'EMPTY'}
];

// Populate Alerts (only Yellow & Red)
function populateAlerts() {
  const alertList = document.getElementById('alert-list');
  alertList.innerHTML = ''; // clear first

  patients.forEach(p => {
    if(p.status === 'LOW' || p.status === 'EMPTY') {
      const li = document.createElement('li');
      li.className = p.status === 'LOW' ? 'warning' : 'critical';
      li.innerHTML = `${p.status === 'LOW' ? '🟡' : '🔴'} ${p.name} | Room ${p.room} | IV ${p.level}% | <span class="alert-time">${getCurrentTime()}</span> 
                      <button onclick="ivReplacedAlert(this)">IV Replaced</button>`;
      alertList.appendChild(li);
    }
  });
}

// Show patient detail screen
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

  document.getElementById('last-updated').innerText = `Last Updated: ${getCurrentTime()}`;
}

// Back to dashboard
function backToDashboard() {
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('patient-detail').style.display = 'none';
}

// IV replaced button (in patient detail)
function ivReplaced() {
  alert("IV marked as replaced!");
  populateAlerts(); // update alerts after replacement
}

// IV replaced button (in alert)
function ivReplacedAlert(btn) {
  btn.parentElement.style.display = 'none';
  alert("IV replaced for this patient!");
}

// Get current time formatted
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours() > 12 ? now.getHours()-12 : now.getHours();
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  const minutes = now.getMinutes().toString().padStart(2,'0');
  return `${hours}:${minutes} ${ampm}`;
}

// Initialize
populateAlerts();
