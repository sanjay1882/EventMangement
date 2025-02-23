document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const eventSelected = document.getElementById("event").value;

    const bookingData = {
        name: name,
        email: email,
        event: eventSelected
    };

  
    fetch("http://localhost:5000/book-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
           
            alert("Booking successful! Your Booking ID: " + data.bookingId);

           
            const qrContainer = document.getElementById("qrCode");
            qrContainer.innerHTML = ""; 
            const qrImage = document.createElement("img");
            qrImage.src = data.qrCode;
            qrImage.alt = "Your Booking QR Code";
            qrContainer.appendChild(qrImage);
        } else {
            alert("Booking failed. Please try again.");
        }
    })
    .catch(error => console.error("Error:", error));
});

const urlParams = new URLSearchParams(window.location.search);
const eventName = urlParams.get('event');
const eventDate = urlParams.get('date');
const bookingId = Math.floor(Math.random() * 1000000000); // Random booking ID


document.getElementById('eventName').textContent = eventName;
document.getElementById('eventDate').textContent = eventDate;
document.getElementById('bookingId').textContent = `#${bookingId}`;


setTimeout(() => {
  const qr = new QRious({
    element: document.getElementById('qrCode'),
    value: `Event: ${eventName}\nDate: ${eventDate}\nBooking ID: #${bookingId}`,
    size: 150
  });
  document.getElementById('qrCode').innerHTML = '';
  document.getElementById('downloadBtn').style.display = 'block'; 
}, 1000);

document.getElementById('downloadBtn').addEventListener('click', () => {
  html2canvas(document.getElementById('ticket')).then(canvas => {
    const link = document.createElement('a');
    link.download = `CROWDCARD-${bookingId}.png`;
    link.href = canvas.toDataURL();
    link.click();
  });
});
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const eventName = document.getElementById('event').value;
    const userName = document.getElementById('name').value;
    const bookingId = Math.floor(Math.random() * 1000000);

  
    document.getElementById('eventName').textContent = eventName;
    document.getElementById('bookingId').textContent = `#${bookingId}`;


    const qr = new QRious({
        element: document.getElementById('qrCode'),
        value: `${eventName} - ${userName} - ${bookingId}`,
        size: 150
    });

 
    document.getElementById('ticket').classList.add('active');
    document.getElementById('downloadBtn').style.display = 'block';
});
