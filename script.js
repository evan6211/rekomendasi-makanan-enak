// Mendapatkan elemen tombol dan menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Menambahkan event listener untuk tombol hamburger
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active'); // Menambahkan/menyembunyikan kelas 'active' saat tombol diklik
});
// Efek teks seperti diketik
const text = "Selamat Datang di Website Kami";
let index = 0;
function typeText() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}
document.addEventListener("DOMContentLoaded", typeText);