document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactAlert = document.getElementById('contactAlert');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        console.log("Contact form detected."); 
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("Form submitted."); 

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            const name = nameInput ? nameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const subject = subjectInput ? subjectInput.value.trim() : "";
            const message = messageInput ? messageInput.value.trim() : "";

            contactAlert.classList.remove('d-none');
            contactAlert.className = "alert alert-fade mb-4 alert-info"; 
            contactAlert.textContent = "Sedang memproses pesan Anda...";

            if (name && email && subject && message) {

                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Memproses...';

                setTimeout(() => {
                    contactAlert.textContent = "Pesan Berhasil Terkirim! Tim Bikenjoy akan segera menghubungi Anda.";
                    contactAlert.className = "alert alert-fade mb-4 alert-success";

                    contactForm.reset();
                    
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="bi bi-send-fill me-2"></i> Kirim Pesan Sekarang';
                }, 1500);

            } else {

                contactAlert.textContent = "Gagal Mengirim! Harap isi semua formulir dengan benar.";
                contactAlert.className = "alert alert-fade mb-4 alert-danger";
            }

            setTimeout(() => {
                contactAlert.classList.add('d-none');
            }, 8000);
        });
    } else {
        console.error("Contact form NOT found!");
    }
});

