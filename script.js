/**
 * UNLIMITED SHINE - Core Logic
 * Vanilla JavaScript - No Frameworks
 */

// ==========================================
// 1. بيانات المشروع المركزية
// ==========================================
const PROJECT_DATA = {
    brandName: "UNLIMITED SHINE",
    whatsappNumber: "+966549778759",
    whatsappLink: "https://wa.me/966549778759",
    crNumber: "7049237196"
};

const NEIGHBORHOODS = [
    'السلي', 'المنار', 'الربوة', 'الروابي', 'الجزيرة', 'الفيحاء', 'السعادة',
    'النسيم', 'الريان', 'النور', 'الصفا', 'القادسية', 'الشهداء', 'النسيم الغربي',
    'المونسية', 'المعيزلة', 'غرناطة', 'اليرموك', 'إشبيليا', 'قرطبة', 'الندوة',
    'التعاون', 'المروج', 'الفلاح', 'النزهه', 'البيان', 'الوادي', 'الازدهار',
    'الربيع', 'الملك فهد', 'جامعة الامام محمد بن سعود الإسلامية', 'الورود',
    'جرير', 'السليمانية', 'النقل', 'المغرزات', 'الصحافه', 'الياسمين', 'الندى',
    'الملز', 'الضباط', 'العليا', 'المصيف', 'الغدير', 'الزهراء', 'المرسلات',
    'صلاح الدين', 'الملك عبدالعزيز'
];

const FAQ_DATA = [
    { q: "ليش لما ادفع من المتجر ما تظهر المواعيد؟", a: "الحجز وجدولة المواعيد يتم من خلال الواتساب لضمان تنسيق الوقت المناسب لك بدقة." },
    { q: "سعر الغسيل يفرق على حسب الحجم؟", a: "نعم، يوجد فرق بسيط بين السيارة الكبيرة والصغيرة وهو 5 ريال للسيارة المتوسطة و 10 ريال للسيارة الكبيرة." },
    { q: "الي يغسل دباب او سيارة؟", a: "نقوم بغسيل الدباب والسيارات." },
    { q: "متوفر عندكم ازالة بقع؟", a: "اختصاصنا غسيل خارجي وتنظيف داخلي، ازالة البقع والتنظيف العميق. أما التلميع الداخلي فهو غير متوفر حالياً." },
    { q: "في كاش عندكم؟", a: "لا، الدفع مسبق لتأكيد الحجز وضمان جدية الموعد." },
    { q: "وش المواد الي تستخدمونها؟", a: "نستخدم مواد ألمانية عالية الجودة. لا نكتفي بوضع واكس مرة واحدة، بل نضعه مرتين: في بداية الغسيل مع الشامبو، وبعد الانتهاء من الغسيل لضمان لمعة مثالية." }
];

const PACKAGES_DATA = {
    'internal-external': { name: 'باقة غسيل سيارة داخلي وخارجي', price: 35 },
    'gift': { name: 'باقة غسيل سيارة اهداء', price: 35 },
    'external': { name: 'غسيل سيارة خارجي فقط', price: 31, note: 'الأحياء المغطاة: شرق الرياض' },
    '4washes': { name: 'باقة غسيل سياره 4 غسلات (المدة شهران)', price: 132 },
    '8washes': { name: 'عرض 8 غسلات', price: 245, desc: 'مع عروض غسيل سيارات unlimited shine الجديد، سيارتك دائمًا في أبهى صورة، احصل على 8 غسلات شاملة (داخلي وخارجي) بسعر 280 ريال فقط، يعني الغسلة الواحدة بـ 35 ريال فقط...' },
    'national-day': { name: 'عرض اليوم الوطني 96', price: 96 }
};

// ==========================================
// 2. تهيئة الصفحة
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initHeaderScrollEffect();
    initFAQ();
    initNeighborhoods();
    initBeforeAfterSlider();
    initCountdown();
    
    // استرجاع آخر حي من LocalStorage
    const savedNeighborhood = localStorage.getItem('last_neighborhood');
    if (savedNeighborhood) {
        // يمكن استخدامه لملء الحقل تلقائياً إذا لزم الأمر
    }
});

// ==========================================
// 3. تأثيرات الحركة والتمرير
// ==========================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

function initHeaderScrollEffect() {
    const header = document.getElementById('main-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ==========================================
// 4. الأسئلة الشائعة
// ==========================================
function initFAQ() {
    const container = document.getElementById('faq-container');
    if (!container) return;
    
    container.innerHTML = FAQ_DATA.map((faq, i) => `
        <div class="faq-item">
            <button class="faq-question" onclick="toggleFAQ(this)">
                <span>${faq.q}</span>
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
                <p>${faq.a}</p>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(btn) {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');
    
    // إغلاق جميع العناصر الأخرى
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
    
    // فتح العنصر الحالي إذا لم يكن مفتوحاً
    if (!isActive) {
        item.classList.add('active');
    }
}

// ==========================================
// 5. الأحياء والبحث
// ==========================================
function initNeighborhoods() {
    const list = document.getElementById('neighborhood-list');
    if (!list) return;
    
    list.innerHTML = NEIGHBORHOODS.map(n => `
        <div class="neighborhood-item" data-name="${n}" onclick="selectNeighborhood(this)">${n}</div>
    `).join('');
}

function filterNeighborhoods() {
    const input = document.getElementById('neighborhood-search').value.toLowerCase();
    document.querySelectorAll('.neighborhood-item').forEach(item => {
        const name = item.dataset.name.toLowerCase();
        item.style.display = name.includes(input) ? 'block' : 'none';
    });
}

// ==========================================
// 6. Before / After Slider
// ==========================================
function initBeforeAfterSlider() {
    const wrapper = document.querySelector('.before-after-wrapper');
    const beforeWrapper = document.querySelector('.before-image-wrapper');
    const handle = document.getElementById('ba-handle');
    if (!wrapper || !beforeWrapper || !handle) return;

    let isDragging = false;

    const updateSlider = (x) => {
        const rect = wrapper.getBoundingClientRect();
        let pos = ((x - rect.left) / rect.width) * 100;
        pos = Math.max(0, Math.min(100, pos));
        
        beforeWrapper.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
        handle.style.left = `${pos}%`;
    };

    wrapper.addEventListener('mousedown', (e) => { isDragging = true; updateSlider(e.clientX); });
    window.addEventListener('mousemove', (e) => { if (isDragging) { e.preventDefault(); updateSlider(e.clientX); } });
    window.addEventListener('mouseup', () => { isDragging = false; });

    wrapper.addEventListener('touchstart', (e) => { isDragging = true; updateSlider(e.touches[0].clientX); }, { passive: true });
    wrapper.addEventListener('touchmove', (e) => { 
        if (isDragging) { 
            updateSlider(e.touches[0].clientX); 
        } 
    }, { passive: true });
    wrapper.addEventListener('touchend', () => { isDragging = false; });
}

function openLightbox() {
    const img = document.querySelector('.after-image').src;
    document.getElementById('lightbox-img').src = img;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

// ==========================================
// 7. نظام الحجز (Booking System)
// ==========================================
let bookingState = {
    step: 1,
    packageId: null,
    packageName: '',
    basePrice: 0,
    carSize: null,
    carSizeName: '',
    carSizeDiff: 0,
    neighborhood: null,
    period: null,
    periodName: '',
    addons: []
};

function openBooking(packageId) {
    const pkg = PACKAGES_DATA[packageId];
    if (!pkg) return;

    bookingState = {
        step: 1,
        packageId: packageId,
        packageName: pkg.name,
        basePrice: pkg.price,
        carSize: null,
        carSizeName: '',
        carSizeDiff: 0,
        neighborhood: localStorage.getItem('last_neighborhood') || null,
        period: null,
        periodName: '',
        addons: []
    };

    // إعادة تعيين واجهة الحجز
    document.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
    document.querySelector('.booking-step[data-step="1"]').classList.add('active');
    
    // ملء خيار الخدمة تلقائياً
    const serviceOptions = document.querySelector('.service-options');
    serviceOptions.innerHTML = `
        <div class="size-card selected" style="cursor: default;">
            <div class="size-title">${pkg.name}</div>
            <div class="size-price">${pkg.price} ريال</div>
        </div>
    `;
    if (pkg.note) {
        serviceOptions.innerHTML += `<p style="color: var(--color-warning); font-size: 0.875rem; margin-top: 0.5rem; text-align: center;">${pkg.note}</p>`;
    }

    updateStepper();
    updateNavigationButtons();
    document.getElementById('booking-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBooking() {
    document.getElementById('booking-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function selectCarSize(el) {
    document.querySelectorAll('.size-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    
    bookingState.carSize = el.dataset.size;
    bookingState.carSizeName = el.querySelector('.size-title').textContent;
    bookingState.carSizeDiff = parseInt(el.dataset.diff);
    
    setTimeout(() => nextStep(), 300);
}

function selectNeighborhood(el) {
    document.querySelectorAll('.neighborhood-item').forEach(i => i.classList.remove('selected'));
    el.classList.add('selected');
    
    bookingState.neighborhood = el.dataset.name;
    localStorage.setItem('last_neighborhood', bookingState.neighborhood);
    setTimeout(() => nextStep(), 300);
}

function selectPeriod(el) {
    document.querySelectorAll('.period-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    
    bookingState.period = el.dataset.period;
    bookingState.periodName = el.querySelector('.period-title').textContent;
    setTimeout(() => nextStep(), 300);
}

// منطق الإضافات المتبادل
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.addon-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const value = this.value;
            const price = parseInt(this.dataset.price);
            const name = this.nextElementSibling.textContent;

            if (this.checked) {
                if (value === 'none') {
                    // إلغاء باقي الإضافات
                    document.querySelectorAll('.addon-option input[type="checkbox"]').forEach(cb => {
                        if (cb.value !== 'none') {
                            cb.checked = false;
                        }
                    });
                    bookingState.addons = [{ name: 'بدون تكييس', price: 0 }];
                } else {
                    // إلغاء "بدون تكييس"
                    const noneCb = document.querySelector('input[value="none"]');
                    if (noneCb) noneCb.checked = false;
                    
                    // إضافة الإضافة الجديدة
                    bookingState.addons = bookingState.addons.filter(a => a.name !== 'بدون تكييس');
                    if (!bookingState.addons.find(a => a.name === name)) {
                        bookingState.addons.push({ name, price });
                    }
                }
            } else {
                bookingState.addons = bookingState.addons.filter(a => a.name !== name);
            }
            
            updateBookingSummary();
        });
    });
});

function updateBookingSummary() {
    const totalAddonsPrice = bookingState.addons.reduce((sum, a) => sum + a.price, 0);
    const totalPrice = bookingState.basePrice + bookingState.carSizeDiff + totalAddonsPrice;

    document.getElementById('summary-service').textContent = bookingState.packageName;
    document.getElementById('summary-car-size').textContent = bookingState.carSizeName || '-';
    document.getElementById('summary-neighborhood').textContent = bookingState.neighborhood || '-';
    document.getElementById('summary-period').textContent = bookingState.periodName || '-';
    document.getElementById('summary-addons').textContent = bookingState.addons.length > 0 
        ? bookingState.addons.map(a => a.name).join('، ') 
        : 'لا يوجد';
    document.getElementById('summary-total-price').textContent = `${totalPrice} ريال`;

    // تحديث معاينة الواتساب
    const waMessage = `طلب حجز جديد – UNLIMITED SHINE\n\n` +
        `الخدمة: ${bookingState.packageName}\n` +
        `حجم السيارة: ${bookingState.carSizeName || 'غير محدد'}\n` +
        `الحي: ${bookingState.neighborhood || 'غير محدد'}\n` +
        `الفترة: ${bookingState.periodName || 'غير محدد'}\n` +
        `الإضافات: ${bookingState.addons.length > 0 ? bookingState.addons.map(a => a.name).join('، ') : 'لا يوجد'}\n` +
        `الإجمالي: ${totalPrice} ريال`;
    
    document.getElementById('whatsapp-message').textContent = waMessage;
}

function updateBookingPrice() {
    updateBookingSummary();
}

function nextStep() {
    if (!validateStep(bookingState.step)) {
        alert('يرجى إكمال الاختيار المطلوب للمتابعة.');
        return;
    }

    if (bookingState.step < 6) {
        document.querySelector(`.booking-step[data-step="${bookingState.step}"]`).classList.remove('active');
        bookingState.step++;
        document.querySelector(`.booking-step[data-step="${bookingState.step}"]`).classList.add('active');
        
        if (bookingState.step === 6) {
            updateBookingSummary();
        }
        
        updateStepper();
        updateNavigationButtons();
    }
}

function prevStep() {
    if (bookingState.step > 1) {
        document.querySelector(`.booking-step[data-step="${bookingState.step}"]`).classList.remove('active');
        bookingState.step--;
        document.querySelector(`.booking-step[data-step="${bookingState.step}"]`).classList.add('active');
        
        updateStepper();
        updateNavigationButtons();
    }
}

function validateStep(step) {
    if (step === 2 && !bookingState.carSize) return false;
    if (step === 3 && !bookingState.neighborhood) return false;
    if (step === 4 && !bookingState.period) return false;
    return true;
}

function updateStepper() {
    document.querySelectorAll('.stepper-item').forEach(item => {
        const s = parseInt(item.dataset.step);
        item.classList.remove('active', 'completed');
        if (s === bookingState.step) item.classList.add('active');
        else if (s < bookingState.step) item.classList.add('completed');
    });
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    
    prevBtn.style.display = bookingState.step === 1 ? 'none' : 'inline-flex';
    
    if (bookingState.step === 6) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'inline-flex';
        nextBtn.textContent = bookingState.step === 5 ? 'مراجعة الحجز ✓' : 'التالي →';
    }
}

function confirmBooking() {
    const message = document.getElementById('whatsapp-message').textContent;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${PROJECT_DATA.whatsappLink}?text=${encodedMessage}`, '_blank');
    closeBooking();
}

function scrollToBooking() {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
}

function openPackagePage(packageId) {
    // في هذه المرحلة، يمكن توجيه المستخدم لصفحة تفاصيل الباقة
    // حالياً سنفتح الحجز مباشرة مع تحديد الباقة
    openBooking(packageId);
}

// ==========================================
// 8. عداد اليوم الوطني
// ==========================================
function initCountdown() {
    const endDate = new Date('2026-09-25T23:59:59').getTime();
    const el = document.getElementById('countdown-date');
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;
        
        if (distance < 0) {
            clearInterval(timer);
            if (el) el.textContent = 'انتهى العرض';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        if (el) el.textContent = `ينتهي خلال ${days} يوم (25 سبتمبر)`;
    }, 1000 * 60 * 60); // تحديث كل ساعة لتوفير الأداء
}

// إغلاق Lightbox عند الضغط خارجه أو زر Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        closeBooking();
    }
});

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});
