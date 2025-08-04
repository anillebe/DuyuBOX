document.addEventListener("DOMContentLoaded", () => {
  const form1 = document.getElementById("profilForm");
  const btn2 = document.getElementById("devamEt");
  const form3 = document.getElementById("geriForm");
  const anim = document.getElementById("gecis");

  if (form1) {
    form1.addEventListener("submit", function(e) {
      e.preventDefault();
      anim.style.display = "block";
      setTimeout(() => {
        window.location.href = "veli_kutu.html";
      }, 2500);
    });
  }

  if (btn2) {
    btn2.addEventListener("click", function() {
      anim.style.display = "block";
      setTimeout(() => {
        window.location.href = "veli_geri_bildirim.html";
      }, 2500);
    });
  }

  if (form3) {
    form3.addEventListener("submit", function(e) {
      e.preventDefault();
      anim.style.display = "block";
      setTimeout(() => {
        alert("Teşekkür ederiz! Geri bildiriminiz alınmıştır.");
        window.location.href = "index.html";
      }, 2500);
    });
  }
});
