
function createService() {
  const name = document.getElementById('serviceName');
  const desc = document.getElementById('serviceDesc');
  const output = document.getElementById('serviceOutput');
  if (name && desc && output) {
    const n = name.value.trim();
    const d = desc.value.trim();
    if (!n) {
      output.innerHTML = "<p>Please enter a service name to create.</p>";
      return;
    }
    output.innerHTML = `<p>Creating service: <strong>${n}</strong><br>Description: ${d || "No description provided."}</p>`;
  }
}

function readService() {
  const name = document.getElementById('serviceName');
  const output = document.getElementById('serviceOutput');
  if (name && output) {
    const n = name.value.trim();
    if (!n) {
      output.innerHTML = "<p>Please enter a service name to read.</p>";
      return;
    }
    output.innerHTML = `<p>Displaying service: <strong>${n}</strong> (mock data)</p>`;
  }
}

function updateService() {
  const name = document.getElementById('serviceName');
  const desc = document.getElementById('serviceDesc');
  const output = document.getElementById('serviceOutput');
  if (name && desc && output) {
    const n = name.value.trim();
    const d = desc.value.trim();
    if (!n) {
      output.innerHTML = "<p>Please enter a service name to update.</p>";
      return;
    }
    output.innerHTML = `<p>Updating service: <strong>${n}</strong><br>New Description: ${d || "No description provided."}</p>`;
  }
}

function deleteService() {
  const name = document.getElementById('serviceName');
  const output = document.getElementById('serviceOutput');
  if (name && output) {
    const n = name.value.trim();
    if (!n) {
      output.innerHTML = "<p>Please enter a service name to delete.</p>";
      return;
    }
    output.innerHTML = `<p>Deleting service: <strong>${n}</strong></p>`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const chartCanvas = document.getElementById('campaignChart');
  if (chartCanvas && typeof Chart !== 'undefined') {
    const ctx = chartCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Email', 'SEO', 'PPC', 'Social'],
        datasets: [{
          label: 'Leads Generated',
          data: [120, 200, 150, 180],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
});
