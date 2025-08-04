document.addEventListener("DOMContentLoaded", () => {
  const form1 = document.getElementById("profilForm");
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
});
