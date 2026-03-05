document.addEventListener('DOMContentLoaded', function () {
    const homeDistrictSelect = document.getElementById('home-district');
    const upazilaSelect = document.getElementById('upazila');
    const form = document.querySelector('form');

    // Comprehensive mapping of Home Districts to Upazilas (Partial list of BD districts for demonstration)
    const upazilasData = {
        dhaka: ["Savar", "Dhamrai", "Keraniganj", "Nawabganj", "Dohar"],
        faridpur: ["Faridpur Sadar", "Boalmari", "Alfadanga", "Madhukhali", "Bhanga", "Nagarkanda", "Charbhadrasan", "Sadarpur", "Shaltha"],
        gazipur: ["Gazipur Sadar", "Kaliakair", "Kapasia", "Sreepur", "Kaliganj"],
        gopalganj: ["Gopalganj Sadar", "Kashiani", "Kotalipara", "Muksudpur", "Tungipara"],
        kishoreganj: ["Kishoreganj Sadar", "Karimganj", "Tarail", "Hossainpur", "Pakundia", "Katiadi", "Bhairab", "Kuliarchar", "Itna", "Mithamain", "Austagram", "Nikli", "Bajitpur"],
        madaripur: ["Madaripur Sadar", "Kalkini", "Rajoir", "Shibchar"],
        manikganj: ["Manikganj Sadar", "Singair", "Shibalaya", "Saturia", "Harirampur", "Ghior", "Daulatpur"],
        munshiganj: ["Munshiganj Sadar", "Sreenagar", "Sirajdikhan", "Louhajang", "Gazaria", "Tongibari"],
        narayanganj: ["Narayanganj Sadar", "Bandar", "Araihazar", "Rupganj", "Sonargaon"],
        narsingdi: ["Narsingdi Sadar", "Belabo", "Monohardi", "Palash", "Raipura", "Shibpur"],
        rajbari: ["Rajbari Sadar", "Goalanda", "Pangsha", "Baliakandi", "Kalukhali"],
        shariatpur: ["Shariatpur Sadar", "Zanjira", "Naria", "Bhedarganj", "Damudya", "Gosairhat"],
        tangail: ["Tangail Sadar", "Sakhipur", "Basail", "Madhupur", "Ghatail", "Kalihati", "Nagarpur", "Mirzapur", "Gopalpur", "Delduar", "Bhuapur", "Dhanbari"],
        chattogram: ["Raozan", "Hathazari", "Fatikchhari", "Patiya", "Boalkhali", "Chandanaish", "Banshkhali", "Anwara", "Lohagara", "Satkania", "Mirsharai", "Sitakunda", "Sandwip", "Karnaphuli"],
        coxsbazar: ["Cox's Bazar Sadar", "Chakaria", "Kutubdia", "Ukhiya", "Moheshkhali", "Teknaf", "Ramu", "Pekua"],
        kumilla: ["Cumilla Adarsha Sadar", "Cumilla Sadar Dakshin", "Laksam", "Burichang", "Brahmanpara", "Chauddagram", "Barura", "Debidwar", "Muradnagar", "Daudkandi", "Meghna", "Homna", "Titas", "Nangalkot", "Lalmai"],
        brahmanbaria: ["Brahmanbaria Sadar", "Ashuganj", "Nasirnagar", "Nabinagar", "Bancharampur", "Kasba", "Akhaura", "Sarail", "Bijoynagar"],
        chandpur: ["Chandpur Sadar", "Haimchar", "Kachua", "Shahrasti", "Meherkali", "Matlab Dakshin", "Matlab Uttar", "Faridganj"],
        noakhali: ["Noakhali Sadar", "Begumganj", "Chatkhil", "Companyganj", "Shenbagh", "Hatiya", "Kabirhat", "Sonaimuri", "Suborno Char"],
        feni: ["Feni Sadar", "Chhagalnaiya", "Daganbhuiyan", "Parshuram", "Fulgazi", "Sonagazi"],
        lakshmipur: ["Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati", "Kamalnagar"],
        sylhet: ["Balaganj", "Beanibazar", "Bishwanath", "Companiganj", "Dakshin Surma", "Fenchuganj", "Golapganj", "Gowainghat", "Jaintiapur", "Kanaighat", "Osmani Nagar", "Sylhet Sadar", "Zakiganj"],
        moulvibazar: ["Moulvibazar Sadar", "Barlekha", "Juri", "Kamalganj", "Kulaura", "Rajnagar", "Sreemangal"],
        habiganj: ["Habiganj Sadar", "Nabiganj", "Baniachong", "Ajmiriganj", "Madhabpur", "Chunarughat", "Bahubal", "Lakhai", "Shayestaganj"],
        sunamganj: ["Sunamganj Sadar", "Dakshin Sunamganj", "Bishwambarpur", "Chhatak", "Jagannathpur", "Dowarabazar", "Tahirpur", "Dharmapasha", "Jamalganj", "Shalla", "Derai", "Madhyanagar"],
        barishal: ["Agailjhara", "Babuganj", "Bakerganj", "Banaripara", "Gaurnadi", "Hizla", "Mehendiganj", "Muladi", "Wazirpur", "Barishal Sadar"],
        bhola: ["Bhola Sadar", "Burhanuddin", "Char Fasson", "Daulatkhan", "Lalmohan", "Manpura", "Tazumuddin"],
        jhalokathi: ["Jhalokathi Sadar", "Kathalia", "Nalchity", "Rajapur"],
        pirojpur: ["Pirojpur Sadar", "Bhandaria", "Kawkhali", "Mathbaria", "Nazirpur", "Nesarabad", "Zianagar"],
        patuakhali: ["Patuakhali Sadar", "Bauphal", "Dashmina", "Galachipa", "Kala Para", "Mirzaganj", "Rangabali", "Dumki"],
        barguna: ["Barguna Sadar", "Amtali", "Bamna", "Betagi", "Patharghata", "Taltali"],
        khulna: ["Batiaghata", "Dacope", "Dumuria", "Dighalia", "Koyra", "Paikgachha", "Phultala", "Rupsha", "Terokhada"],
        bagerhat: ["Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola"],
        satkhira: ["Satkhira Sadar", "Assasuni", "Debhata", "Kalaroa", "Kaliganj", "Shyamnagar", "Tala"],
        jashore: ["Jashore Sadar", "Abhaynagar", "Bagherpara", "Chaugachha", "Jhikargachha", "Keshabpur", "Manirampur", "Sharsha"],
        magura: ["Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"],
        narail: ["Narail Sadar", "Kalia", "Lohagara"],
        chuadanga: ["Chuadanga Sadar", "Alamdanga", "Damurhuda", "Jibannagar"],
        kushtia: ["Kushtia Sadar", "Bheramara", "Daulatpur", "Khoksa", "Kumarkhali", "Mirpur"],
        meherpur: ["Meherpur Sadar", "Gangni", "Mujibnagar"],
        jhenaidah: ["Jhenaidah Sadar", "Harinakundu", "Kaliganj", "Kotchandpur", "Moheshpur", "Shailkupa"],
        rajshahi: ["Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Tanore"],
        natore: ["Natore Sadar", "Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Singra", "Naldanga"],
        naogaon: ["Naogaon Sadar", "Atrai", "Badalgachhi", "Dhamoirhat", "Manda", "Mahadebpur", "Niamatpur", "Patnitala", "Porasha", "Raninagar", "Sapahar"],
        pabna: ["Pabna Sadar", "Atgharia", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Santhia", "Sujanagar"],
        sirajganj: ["Sirajganj Sadar", "Belkuchi", "Chauhali", "Kamarkhanda", "Kazipur", "Raiganj", "Shahjadpur", "Tarash", "Ullahpara"],
        bogura: ["Bogura Sadar", "Adamdighi", "Dhunat", "Dupchanchia", "Gabtali", "Kahaloo", "Nandigram", "Sariakandi", "Sahajanpur", "Sherpur", "Shibganj", "Sonatola"],
        joypurhat: ["Joypurhat Sadar", "Akkelpur", "Kalai", "Khetlal", "Panchbibi"],
        chapainawabganj: ["Chapainawabganj Sadar", "Bholahat", "Gomastapur", "Nachole", "Shibganj"],
        rangpur: ["Rangpur Sadar", "Badarganj", "Gangachhara", "Kaunia", "Mithapukur", "Pirgachha", "Pirganj", "Taraganj"],
        dinajpur: ["Dinajpur Sadar", "Birampur", "Birganj", "Biral", "Bochaganj", "Chirirbandar", "Phulbari", "Ghoraghat", "Hakimpur", "Kaharole", "Khansama", "Nawabganj"],
        kurigram: ["Kurigram Sadar", "Bhurungamari", "Char Rajibpur", "Chilmari", "Phulbari", "Nageshwari", "Rajarhat", "Raomari", "Ulipur"],
        lalmonirhat: ["Lalmonirhat Sadar", "Aditmari", "Hatibandha", "Kaliganj", "Patgram"],
        nilphamari: ["Nilphamari Sadar", "Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Saidpur"],
        panchagarh: ["Panchagarh Sadar", "Atwari", "Boda", "Debiganj", "Tetulia"],
        thakurgaon: ["Thakurgaon Sadar", "Baliadangi", "Haripur", "Pirganj", "Ranisankail"],
        gaibandha: ["Gaibandha Sadar", "Phulchhari", "Gobindaganj", "Palashbari", "Sadullapur", "Sughatta", "Sundarganj"],
        mymensingh: ["Mymensingh Sadar", "Bhaluka", "Dhobaura", "Fulbaria", "Gaffargaon", "Gauripur", "Haluaghat", "Ishwarganj", "Muktagachha", "Nandail", "Phulpur", "Tara Khanda"],
        jamalpur: ["Jamalpur Sadar", "Baksiganj", "Dewanganj", "Islampur", "Madarganj", "Melandaha", "Sarishabari"],
        netrokona: ["Netrokona Sadar", "Atpara", "Barhatta", "Durgapur", "Khaliajuri", "Kalmakanda", "Kendua", "Madan", "Mohanganj", "Purbadhala"],
        sherpur: ["Sherpur Sadar", "Jhenaigati", "Nakla", "Nalitabari", "Sreebardi"]
    };

    // Update upazilas when district changes
    homeDistrictSelect.addEventListener('change', function () {
        const selectedDistrict = this.value;

        // Visual feedback
        this.style.borderColor = '#2b7898';
        this.style.boxShadow = '0 0 5px rgba(43, 120, 152, 0.5)';

        // Clear existing options
        upazilaSelect.innerHTML = '<option value="" selected disabled>--Select One--</option>';

        // Get upazilas for the selected district or load a default set if not found
        const upazilas = upazilasData[selectedDistrict] || ["Sadar Upazila", "Demo Upazila 1", "Demo Upazila 2", "Demo Upazila 3"];

        // Add new options
        upazilas.forEach(function (upazila) {
            const option = document.createElement('option');
            option.value = upazila.toLowerCase().replace(/\s+/g, '-');
            option.textContent = upazila;
            upazilaSelect.appendChild(option);
        });

        // Add a small animation effect
        upazilaSelect.style.transition = 'all 0.3s ease';
        upazilaSelect.style.transform = 'scale(1.02)';
        setTimeout(() => {
            upazilaSelect.style.transform = 'scale(1)';
            upazilaSelect.style.borderColor = '#9edb34';
        }, 150);
    });

    // Handle Form Submission nicely
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent standard POST

            // Check if form is valid
            if (this.checkValidity()) {
                const submitBtn = document.querySelector('.submit-btn');
                const originalText = submitBtn.innerText;

                // Show loading state
                submitBtn.innerText = 'Submitting...';
                submitBtn.style.opacity = '0.8';

                // Simulate network request
                setTimeout(() => {
                    alert('🎉 Congratulations! Your Student Registration Form has been submitted successfully.\n\nAll details look correct and have been recorded.');

                    // Reset form and UI
                    this.reset();
                    upazilaSelect.innerHTML = '<option value="" selected disabled>--Select One--</option>';
                    submitBtn.innerText = 'Data Submitted ✓';
                    submitBtn.style.background = '#28a745';

                    // Reset button text back after a while
                    setTimeout(() => {
                        submitBtn.innerText = originalText;
                        submitBtn.style.background = ''; // reset to css
                        submitBtn.style.opacity = '1';
                    }, 3000);

                }, 1000);
            } else {
                // Let HTML5 handle showing the required errors, but we can also alert
                alert('Please fill in all the required fields correctly.');
            }
        });
    }

    // Add visual interaction on inputs
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.opacity = '1';
        });
    });
});
