

const services = [];

function renderTable() {
  const tbody = document.querySelector('#serviceTable tbody');
  tbody.innerHTML = '';
  services.forEach((svc, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${svc.name}</td>
      <td>${svc.desc}</td>
      <td>
        <button onclick="startEdit(${index})">Edit</button>
        <button onclick="removeService(${index})">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function createService() {
  const nameField = document.getElementById('serviceName');
  const descField = document.getElementById('serviceDesc');
  const name = nameField.value.trim();
  const desc = descField.value.trim();
  if (!name) {
    alert('Please enter a service name.');
    return;
  }
  services.push({ name, desc });
  renderTable();
  document.getElementById('serviceForm').reset();
}

function startEdit(index) {
  const svc = services[index];
  document.getElementById('serviceName').value = svc.name;
  document.getElementById('serviceDesc').value = svc.desc;
  const btn = document.querySelector('button[onclick="createService()"]');
  btn.textContent = 'Update';
  btn.onclick = () => confirmUpdate(index);
}

function confirmUpdate(index) {
  const nameField = document.getElementById('serviceName');
  const descField = document.getElementById('serviceDesc');
  const name = nameField.value.trim();
  const desc = descField.value.trim();
  if (!name) {
    alert('Please enter a service name.');
    return;
  }
  services[index] = { name, desc };
  renderTable();
  document.getElementById('serviceForm').reset();
  const btn = document.querySelector('button');
  btn.textContent = 'Create';
  btn.onclick = createService;
}

function removeService(index) {
  services.splice(index, 1);
  renderTable();
}

document.addEventListener('DOMContentLoaded', () => {
  // Only render table if on Manage Services page
  const table = document.getElementById('serviceTable');
  if (table) {
    renderTable();
  }
  // Initialize Chart.js specifically for analytics page
  const chartCanvas = document.getElementById('campaignChart');
  if (chartCanvas && typeof Chart !== 'undefined') {
    const ctx = chartCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Email', 'SEO', 'PPC', 'Social Media'],
        datasets: [{
          label: 'Leads Generated',
          data: [150, 120, 95, 200],
          backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Leads Generated' }
          },
          x: {
            title: { display: true, text: 'Channel' }
          }
        }
      }
    });
  }
});
