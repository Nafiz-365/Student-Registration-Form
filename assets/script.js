document.addEventListener('DOMContentLoaded', function () {
    const homeDistrictSelect = document.getElementById('home-district');
    const upazilaSelect = document.getElementById('upazila');
    const form = document.getElementById('registration-form');
    const summaryCourse = document.getElementById('summary-course');
    const summaryDistrict = document.getElementById('summary-district');
    const summaryUpazila = document.getElementById('summary-upazila');
    const summaryName = document.getElementById('summary-name');
    const summaryContact = document.getElementById('summary-contact');

    const upazilasData = {
        dhaka: ['Savar', 'Dhamrai', 'Keraniganj', 'Nawabganj', 'Dohar'],
        faridpur: [
            'Faridpur Sadar',
            'Boalmari',
            'Alfadanga',
            'Madhukhali',
            'Bhanga',
            'Nagarkanda',
            'Charbhadrasan',
            'Sadarpur',
            'Shaltha',
        ],
        gazipur: [
            'Gazipur Sadar',
            'Kaliakair',
            'Kapasia',
            'Sreepur',
            'Kaliganj',
        ],
        gopalganj: [
            'Gopalganj Sadar',
            'Kashiani',
            'Kotalipara',
            'Muksudpur',
            'Tungipara',
        ],
        kishoreganj: [
            'Kishoreganj Sadar',
            'Karimganj',
            'Tarail',
            'Hossainpur',
            'Pakundia',
            'Katiadi',
            'Bhairab',
            'Kuliarchar',
            'Itna',
            'Mithamain',
            'Austagram',
            'Nikli',
            'Bajitpur',
        ],
        madaripur: ['Madaripur Sadar', 'Kalkini', 'Rajoir', 'Shibchar'],
        manikganj: [
            'Manikganj Sadar',
            'Singair',
            'Shibalaya',
            'Saturia',
            'Harirampur',
            'Ghior',
            'Daulatpur',
        ],
        munshiganj: [
            'Munshiganj Sadar',
            'Sreenagar',
            'Sirajdikhan',
            'Louhajang',
            'Gazaria',
            'Tongibari',
        ],
        narayanganj: [
            'Narayanganj Sadar',
            'Bandar',
            'Araihazar',
            'Rupganj',
            'Sonargaon',
        ],
        narsingdi: [
            'Narsingdi Sadar',
            'Belabo',
            'Monohardi',
            'Palash',
            'Raipura',
            'Shibpur',
        ],
        rajbari: [
            'Rajbari Sadar',
            'Goalanda',
            'Pangsha',
            'Baliakandi',
            'Kalukhali',
        ],
        shariatpur: [
            'Shariatpur Sadar',
            'Zanjira',
            'Naria',
            'Bhedarganj',
            'Damudya',
            'Gosairhat',
        ],
        tangail: [
            'Tangail Sadar',
            'Sakhipur',
            'Basail',
            'Madhupur',
            'Ghatail',
            'Kalihati',
            'Nagarpur',
            'Mirzapur',
            'Gopalpur',
            'Delduar',
            'Bhuapur',
            'Dhanbari',
        ],
        chattogram: [
            'Raozan',
            'Hathazari',
            'Fatikchhari',
            'Patiya',
            'Boalkhali',
            'Chandanaish',
            'Banshkhali',
            'Anwara',
            'Lohagara',
            'Satkania',
            'Mirsharai',
            'Sitakunda',
            'Sandwip',
            'Karnaphuli',
        ],
        coxsbazar: [
            "Cox's Bazar Sadar",
            'Chakaria',
            'Kutubdia',
            'Ukhiya',
            'Moheshkhali',
            'Teknaf',
            'Ramu',
            'Pekua',
        ],
        cumilla: [
            'Cumilla Adarsha Sadar',
            'Cumilla Sadar Dakshin',
            'Laksam',
            'Burichang',
            'Brahmanpara',
            'Chauddagram',
            'Barura',
            'Debidwar',
            'Muradnagar',
            'Daudkandi',
            'Meghna',
            'Homna',
            'Titas',
            'Nangalkot',
            'Lalmai',
        ],
        brahmanbaria: [
            'Brahmanbaria Sadar',
            'Ashuganj',
            'Nasirnagar',
            'Nabinagar',
            'Bancharampur',
            'Kasba',
            'Akhaura',
            'Sarail',
            'Bijoynagar',
        ],
        chandpur: [
            'Chandpur Sadar',
            'Haimchar',
            'Kachua',
            'Shahrasti',
            'Meherkali',
            'Matlab Dakshin',
            'Matlab Uttar',
            'Faridganj',
        ],
        noakhali: [
            'Noakhali Sadar',
            'Begumganj',
            'Chatkhil',
            'Companyganj',
            'Shenbagh',
            'Hatiya',
            'Kabirhat',
            'Sonaimuri',
            'Suborno Char',
        ],
        feni: [
            'Feni Sadar',
            'Chhagalnaiya',
            'Daganbhuiyan',
            'Parshuram',
            'Fulgazi',
            'Sonagazi',
        ],
        lakshmipur: [
            'Lakshmipur Sadar',
            'Raipur',
            'Ramganj',
            'Ramgati',
            'Kamalnagar',
        ],
        sylhet: [
            'Balaganj',
            'Beanibazar',
            'Bishwanath',
            'Companiganj',
            'Dakshin Surma',
            'Fenchuganj',
            'Golapganj',
            'Gowainghat',
            'Jaintiapur',
            'Kanaighat',
            'Osmani Nagar',
            'Sylhet Sadar',
            'Zakiganj',
        ],
        moulvibazar: [
            'Moulvibazar Sadar',
            'Barlekha',
            'Juri',
            'Kamalganj',
            'Kulaura',
            'Rajnagar',
            'Sreemangal',
        ],
        habiganj: [
            'Habiganj Sadar',
            'Nabiganj',
            'Baniachong',
            'Ajmiriganj',
            'Madhabpur',
            'Chunarughat',
            'Bahubal',
            'Lakhai',
            'Shayestaganj',
        ],
        sunamganj: [
            'Sunamganj Sadar',
            'Dakshin Sunamganj',
            'Bishwambarpur',
            'Chhatak',
            'Jagannathpur',
            'Dowarabazar',
            'Tahirpur',
            'Dharmapasha',
            'Jamalganj',
            'Shalla',
            'Derai',
            'Madhyanagar',
        ],
        barishal: [
            'Agailjhara',
            'Babuganj',
            'Bakerganj',
            'Banaripara',
            'Gaurnadi',
            'Hizla',
            'Mehendiganj',
            'Muladi',
            'Wazirpur',
            'Barishal Sadar',
        ],
        bhola: [
            'Bhola Sadar',
            'Burhanuddin',
            'Char Fasson',
            'Daulatkhan',
            'Lalmohan',
            'Manpura',
            'Tazumuddin',
        ],
        jhalokathi: ['Jhalokathi Sadar', 'Kathalia', 'Nalchity', 'Rajapur'],
        pirojpur: [
            'Pirojpur Sadar',
            'Bhandaria',
            'Kawkhali',
            'Mathbaria',
            'Nazirpur',
            'Nesarabad',
            'Zianagar',
        ],
        patuakhali: [
            'Patuakhali Sadar',
            'Bauphal',
            'Dashmina',
            'Galachipa',
            'Kala Para',
            'Mirzaganj',
            'Rangabali',
            'Dumki',
        ],
        barguna: [
            'Barguna Sadar',
            'Amtali',
            'Bamna',
            'Betagi',
            'Patharghata',
            'Taltali',
        ],
        khulna: [
            'Batiaghata',
            'Dacope',
            'Dumuria',
            'Dighalia',
            'Koyra',
            'Paikgachha',
            'Phultala',
            'Rupsha',
            'Terokhada',
        ],
        bagerhat: [
            'Bagerhat Sadar',
            'Chitalmari',
            'Fakirhat',
            'Kachua',
            'Mollahat',
            'Mongla',
            'Morrelganj',
            'Rampal',
            'Sarankhola',
        ],
        satkhira: [
            'Satkhira Sadar',
            'Assasuni',
            'Debhata',
            'Kalaroa',
            'Kaliganj',
            'Shyamnagar',
            'Tala',
        ],
        jashore: [
            'Jashore Sadar',
            'Abhaynagar',
            'Bagherpara',
            'Chaugachha',
            'Jhikargachha',
            'Keshabpur',
            'Manirampur',
            'Sharsha',
        ],
        magura: ['Magura Sadar', 'Mohammadpur', 'Shalikha', 'Sreepur'],
        narail: ['Narail Sadar', 'Kalia', 'Lohagara'],
        chuadanga: ['Chuadanga Sadar', 'Alamdanga', 'Damurhuda', 'Jibannagar'],
        kushtia: [
            'Kushtia Sadar',
            'Bheramara',
            'Daulatpur',
            'Khoksa',
            'Kumarkhali',
            'Mirpur',
        ],
        meherpur: ['Meherpur Sadar', 'Gangni', 'Mujibnagar'],
        jhenaidah: [
            'Jhenaidah Sadar',
            'Harinakundu',
            'Kaliganj',
            'Kotchandpur',
            'Moheshpur',
            'Shailkupa',
        ],
        rajshahi: [
            'Bagha',
            'Bagmara',
            'Charghat',
            'Durgapur',
            'Godagari',
            'Mohanpur',
            'Paba',
            'Puthia',
            'Tanore',
        ],
        natore: [
            'Natore Sadar',
            'Bagatipara',
            'Baraigram',
            'Gurudaspur',
            'Lalpur',
            'Singra',
            'Naldanga',
        ],
        naogaon: [
            'Naogaon Sadar',
            'Atrai',
            'Badalgachhi',
            'Dhamoirhat',
            'Manda',
            'Mahadebpur',
            'Niamatpur',
            'Patnitala',
            'Porasha',
            'Raninagar',
            'Sapahar',
        ],
        pabna: [
            'Pabna Sadar',
            'Atgharia',
            'Bera',
            'Bhangura',
            'Chatmohar',
            'Faridpur',
            'Ishwardi',
            'Santhia',
            'Sujanagar',
        ],
        sirajganj: [
            'Sirajganj Sadar',
            'Belkuchi',
            'Chauhali',
            'Kamarkhanda',
            'Kazipur',
            'Raiganj',
            'Shahjadpur',
            'Tarash',
            'Ullahpara',
        ],
        bogura: [
            'Bogura Sadar',
            'Adamdighi',
            'Dhunat',
            'Dupchanchia',
            'Gabtali',
            'Kahaloo',
            'Nandigram',
            'Sariakandi',
            'Sahajanpur',
            'Sherpur',
            'Shibganj',
            'Sonatola',
        ],
        joypurhat: [
            'Joypurhat Sadar',
            'Akkelpur',
            'Kalai',
            'Khetlal',
            'Panchbibi',
        ],
        chapainawabganj: [
            'Chapainawabganj Sadar',
            'Bholahat',
            'Gomastapur',
            'Nachole',
            'Shibganj',
        ],
        rangpur: [
            'Rangpur Sadar',
            'Badarganj',
            'Gangachhara',
            'Kaunia',
            'Mithapukur',
            'Pirgachha',
            'Pirganj',
            'Taraganj',
        ],
        dinajpur: [
            'Dinajpur Sadar',
            'Birampur',
            'Birganj',
            'Biral',
            'Bochaganj',
            'Chirirbandar',
            'Phulbari',
            'Ghoraghat',
            'Hakimpur',
            'Kaharole',
            'Khansama',
            'Nawabganj',
        ],
        kurigram: [
            'Kurigram Sadar',
            'Bhurungamari',
            'Char Rajibpur',
            'Chilmari',
            'Phulbari',
            'Nageshwari',
            'Rajarhat',
            'Raomari',
            'Ulipur',
        ],
        lalmonirhat: [
            'Lalmonirhat Sadar',
            'Aditmari',
            'Hatibandha',
            'Kaliganj',
            'Patgram',
        ],
        nilphamari: [
            'Nilphamari Sadar',
            'Dimla',
            'Domar',
            'Jaldhaka',
            'Kishoreganj',
            'Saidpur',
        ],
        panchagarh: [
            'Panchagarh Sadar',
            'Atwari',
            'Boda',
            'Debiganj',
            'Tetulia',
        ],
        thakurgaon: [
            'Thakurgaon Sadar',
            'Baliadangi',
            'Haripur',
            'Pirganj',
            'Ranisankail',
        ],
        gaibandha: [
            'Gaibandha Sadar',
            'Phulchhari',
            'Gobindaganj',
            'Palashbari',
            'Sadullapur',
            'Sughatta',
            'Sundarganj',
        ],
        mymensingh: [
            'Mymensingh Sadar',
            'Bhaluka',
            'Dhobaura',
            'Fulbaria',
            'Gaffargaon',
            'Gauripur',
            'Haluaghat',
            'Ishwarganj',
            'Muktagachha',
            'Nandail',
            'Phulpur',
            'Tara Khanda',
        ],
        jamalpur: [
            'Jamalpur Sadar',
            'Baksiganj',
            'Dewanganj',
            'Islampur',
            'Madarganj',
            'Melandaha',
            'Sarishabari',
        ],
        netrokona: [
            'Netrokona Sadar',
            'Atpara',
            'Barhatta',
            'Durgapur',
            'Khaliajuri',
            'Kalmakanda',
            'Kendua',
            'Madan',
            'Mohanganj',
            'Purbadhala',
        ],
        sherpur: [
            'Sherpur Sadar',
            'Jhenaigati',
            'Nakla',
            'Nalitabari',
            'Sreebardi',
        ],
    };

    function formatSelectedValue(value) {
        return value
            ? value
                  .replace(/-/g, ' ')
                  .replace(/\b\w/g, (char) => char.toUpperCase())
            : 'Not selected';
    }

    function updateSummary() {
        const course = document.getElementById('course');
        const district = document.getElementById('district');
        const districtName =
            district.options[district.selectedIndex]?.text || 'Not selected';
        const upazilaName =
            upazilaSelect.options[upazilaSelect.selectedIndex]?.text ||
            'Not selected';
        const studentName = document
            .getElementById('student-name')
            .value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone-number').value.trim();

        summaryCourse.textContent =
            course.options[course.selectedIndex]?.text || 'Not selected';
        summaryDistrict.textContent = districtName;
        summaryUpazila.textContent = upazilaName;
        summaryName.textContent = studentName || 'Not selected';
        summaryContact.textContent = email || phone || 'Not added';
    }

    homeDistrictSelect.addEventListener('change', function () {
        const selectedDistrict = this.value;
        upazilaSelect.innerHTML =
            '<option value="" selected disabled>--Select One--</option>';

        const upazilas = upazilasData[selectedDistrict] || ['Sadar Upazila'];
        upazilas.forEach((upazila) => {
            const option = document.createElement('option');
            option.value = upazila.toLowerCase().replace(/\s+/g, '-');
            option.textContent = upazila;
            upazilaSelect.appendChild(option);
        });

        updateSummary();
    });

    ['course', 'district', 'student-name', 'email', 'phone-number'].forEach(
        (fieldId) => {
            const element = document.getElementById(fieldId);
            if (element) {
                element.addEventListener('input', updateSummary);
                element.addEventListener('change', updateSummary);
            }
        },
    );

    upazilaSelect.addEventListener('change', updateSummary);

    function validateImageInput(input) {
        const file = input.files[0];
        const maxSize = 2 * 1024 * 1024;

        if (!file) {
            input.setCustomValidity('Please choose a valid image file.');
            return;
        }

        const allowedTypes = ['image/jpeg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
            input.setCustomValidity(
                'Only JPG, JPEG, or PNG files are allowed.',
            );
            return;
        }

        if (file.size > maxSize) {
            input.setCustomValidity(
                'Please choose an image smaller than 2 MB.',
            );
            return;
        }

        input.setCustomValidity('');
    }

    ['photo', 'signature'].forEach((id) => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('change', function () {
                validateImageInput(this);
                if (this.validationMessage) {
                    this.reportValidity();
                }
            });
        }
    });

    document.getElementById('current-year').textContent =
        new Date().getFullYear();

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!this.checkValidity()) {
                this.reportValidity();
                return;
            }

            const submitBtn = document.querySelector('.submit-btn');
            const message = document.querySelector('.form-message');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(
                    '🎉 Your student registration has been submitted successfully. We will review your information and contact you shortly.',
                );

                this.reset();
                upazilaSelect.innerHTML =
                    '<option value="" selected disabled>--Select One--</option>';
                message.textContent =
                    'Application submitted successfully. We will contact you using the information you provided.';
                message.classList.add('is-visible');
                submitBtn.textContent = 'Submitted ✓';
                submitBtn.style.background =
                    'linear-gradient(135deg, #1ea76d 0%, #1f9a67 100%)';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 2800);
            }, 800);
        });
    }

    updateSummary();
});
