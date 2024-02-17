const scriptURL =
        "https://script.google.com/macros/s/AKfycbwAdm4jgLK2yxt5Lmoz2yaDg9rRXwqOrXXlw8UdPv-GChF_c-8HmGXam35O2mYhU2Y7/exec";
      const form = document.forms["submit-to-google-sheet"];
      const msg = document.getElementById("msg");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
              msg.innerHTML = "";
            }, 5000);
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });
      
//Back to top script

      document.addEventListener("DOMContentLoaded", function () {
        var backButton = document.getElementById("back-to-top");
    
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backButton.style.display = "block";
            } else {
                backButton.style.display = "none";
            }
        };
    
        backButton.addEventListener("click", function () {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        });
    });
    