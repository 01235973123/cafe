document.addEventListener("DOMContentLoaded", function() {
    const paymentForm = document.getElementById("payment-form");
    const paymentStatus = document.getElementById("payment-status");
  
    paymentForm.addEventListener("submit", function(event) {
      event.preventDefault();
      paymentStatus.textContent = "Processing payment...";
      setTimeout(() => {
        paymentStatus.textContent = "Payment successful!";
        paymentForm.reset();
      }, 2000);
    }

    )
    
  });
  
