document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactAlert = document.getElementById('contactAlert');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        console.log("Contact form detected."); // Debugging
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("Form submitted."); // Debugging

            // 1. Ambil Data Form
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            const name = nameInput ? nameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const subject = subjectInput ? subjectInput.value.trim() : "";
            const message = messageInput ? messageInput.value.trim() : "";

            // 2. Persiapkan Alert
            contactAlert.classList.remove('d-none');
            contactAlert.className = "alert alert-fade mb-4 alert-info"; // Tampilkan warna biru info dulu
            contactAlert.textContent = "Sedang memproses pesan Anda...";

            // 3. Logika Validasi
            if (name && email && subject && message) {
                // SEMUA DIISI: Simulasi Berhasil
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Memproses...';

                setTimeout(() => {
                    contactAlert.textContent = "Pesan Berhasil Terkirim! Tim Bikenjoy akan segera menghubungi Anda.";
                    contactAlert.className = "alert alert-fade mb-4 alert-success";
                    
                    // Reset Form
                    contactForm.reset();
                    
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="bi bi-send-fill me-2"></i> Kirim Pesan Sekarang';
                }, 1500);

            } else {
                // ADA YANG KOSONG: Tampilkan Gagal
                contactAlert.textContent = "Gagal Mengirim! Harap isi semua formulir dengan benar.";
                contactAlert.className = "alert alert-fade mb-4 alert-danger";
            }

            // 4. Sembunyikan alert setelah 8 detik
            setTimeout(() => {
                contactAlert.classList.add('d-none');
            }, 8000);
        });
    } else {
        console.error("Contact form NOT found!");
    }
});
