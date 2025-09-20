const seatsContainer = document.querySelector('.seats');
const count = document.getElementById('count');
const total = document.getElementById('total');
const bookBtn = document.getElementById('bookBtn');

const ticketPrice = 200;
let selectedSeats = [];

// Generate 48 seats
for (let i = 0; i < 48; i++) {
  const seat = document.createElement('div');
  seat.classList.add('seat');

  // Randomly mark some as booked
  if (Math.random() < 0.2) seat.classList.add('booked');

  seat.addEventListener('click', () => {
    if (!seat.classList.contains('booked')) {
      seat.classList.toggle('selected');
      updateSelectedCount();
    }
  });

  seatsContainer.appendChild(seat);
}

function updateSelectedCount() {
  const selected = document.querySelectorAll('.seat.selected');
  const selectedCount = selected.length;
  count.innerText = `${selectedCount} Tickets`;
  total.innerText = `₹${selectedCount * ticketPrice}`;
}

// Book button
bookBtn.addEventListener('click', () => {
  const selected = document.querySelectorAll('.seat.selected');
  if (selected.length === 0) {
    alert("Please select at least one seat!");
    return;
  }

  // Save booking info
  localStorage.setItem("tickets", selected.length);
  localStorage.setItem("amount", selected.length * ticketPrice);

  // Redirect to ticket page
  window.location.href = "ticket.html";
});
