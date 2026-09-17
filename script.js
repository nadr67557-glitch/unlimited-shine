/**
 * UNLIMITED SHINE - Core Logic v17
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

const NATIONAL_OFFER_END_DATE = '2026-09-25T23:59:59';

// ==========================================
// 2. قائمة الأحياء (48 حي)
// ==========================================
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

// ==========================================
// 3. بيانات الباقات الكاملة
// ==========================================
const PACKAGES_DATA = {
    'internal-external': {
        id: 'internal-external',
        name: 'باقة غسيل سيارة داخلي وخارجي',
        currentPrice: 35,
        oldPrice: 50,
        image: 'images/packages/internal-external.jpg',
        rating: { stars: 5, count: 7, recommendation: '100% أوصوا بالمنتج' },
        description: 'تجربة غسيل سيارة داخلي و خارجي مع unlimited shine تمنح سيارتك الرعاية التي تستحقها من الداخل والخارج، نحن نوفر لك خدمة متكاملة تضمن نظافة السيارة بالكامل، مما يعزز مظهرها وأناقتها ويجعلها تبدو وكأنها جديدة.',
        features: [
            'تنظيف خارجي متقن',
            'حماية وتلميع',
            'راحة في المكان والزمان',
            'أدوات تنظيف احترافية',
            'تنظيف داخلي مميز'
        ],
        notes: [],
        hasCarSize: true,
        hasPeriod: true,
        hasAddons: true,
        isMultiWash: false,
        totalWashes: 1
    },
    'gift': {
        id: 'gift',
        name: 'باقة غسيل سيارة اهداء',
        currentPrice: 35,
        oldPrice: 50,
        image: 'images/packages/gift.jpg',
        tagline: 'خلها نظيفة - اهدي الغسلة لمن تحب',
        description: 'لأننا في Unlimited Shine نؤمن إن الجودة ما تعني التعقيد، ونقدم لك راحة تامة مع أداء يفوق التوقعات.',
        features: [
            'نخدمك وين ما تكون - بدون مشاوير ولا انتظار.',
            'فريق مدرب يهتم بأدق التفاصيل في تنظيف السيارة.',
            'نستخدم مواد احترافية وآمنة 100%.',
            'حجزوات سهلة، مواعيد مرنة، ودعم سريع.',
            'نضمن لك تجربة تنظيف استثنائية في كل مرة.'
        ],
        notes: [
            'إزالة الأغراض الشخصية.',
            'الشركة غير مسؤولة عن المفقودات.',
            'إعادة الجدولة/الإلغاء/الاسترداد قبل الموعد بساعة على الأقل.',
            'تنظيف الشنطة والأدراج والسنادة فقط عند طلب العميل.',
            'انتظار الكابتن 15 دقيقة.',
            'إذا لم يتم الدفع أو إرسال الموقع قبل الموعد بـ30 دقيقة يتم إلغاء الموعد تلقائيًا.'
        ],
        hasCarSize: true,
        hasPeriod: true,
        hasAddons: true,
        isMultiWash: false,
        totalWashes: 1
    },
    'external': {
        id: 'external',
        name: 'غسيل سيارة خارجي فقط',
        currentPrice: 31,
        oldPrice: 45,
        image: 'images/packages/external.jpg',
        tagline: 'خلها نظيفة - غسيل خارجي فقط',
        description: 'غسيل احترافي للهيكل الخارجي باستخدام الصابون ومناشف المايكروفايبر.',
        features: [
            'غسيل الهيكل الخارجي',
            'استخدام صابون عالي الجودة',
            'مناشف مايكروفايبر لحماية الطلاء'
        ],
        notes: [
            'الأحياء المغطاة: شرق الرياض'
        ],
        hasCarSize: true,
        hasPeriod: true,
        hasAddons: true,
        isMultiWash: false,
        totalWashes: 1
    },
    '4washes': {
        id: '4washes',
        name: 'باقة غسيل سياره 4 غسلات ( المدة شهران )',
        currentPrice: 132,
        oldPrice: 200,
        image: 'images/packages/4washes.jpg',
        validity: 'شهران',
        rating: { stars: 5, count: 1 },
        description: 'مع عروض غسيل سيارات unlimited shine الجديد، سيارتك دائماً في أبهى صورة.',
        features: [
            '4 غسلات داخلية وخارجية متكاملة.',
            'سعر الغسلة 33 ريال فقط.',
            'تنظيف داخلي شامل: الأرضيات، الطبلون، المقاعد، الزجاج، وكل التفاصيل.',
            'غسيل خارجي بأحتراف ومواد امنة.',
            'خدمة متنقلة سريعة ومريحة في أي مكان يناسبك.',
            'مثالية للعلات أو أصحاب المشاوير الكثيررة.'
        ],
        notes: [
            'عند الاشتراك في الباقة، ما يححق للعميل إلغاء الاشتراك أو استرجاع المبلغ المدفوع.',
            'يرجى إزالة أي أغراض شخصية من السيارة، والشركة غير مسؤولة عن أي مفقودات.',
            'إذا بغيت تعيد جدولة الموعد، تلغيه، أو تسترجع المبلغ، لازم يكون قبل الموعد بساعة على الأقل، وإذا ما صار التغيير في الوقت المطلوب، ينخصم المبلغ كامل.',
            'تنظيف الشنطة، الأدراج، أو السنادة يتم فقط إذا طلب العميل ذلك.',
            'الكابتن ينتظر 15 دقيقة فقط، وإذا ما حضرت، يلغي الموعد وينخصم المبلغ كامل.',
            'إذا حجزت الموعد وما دفعت أو ما أرسلت الموقع قبل الموعد بـ30 دقيقة، يلغي الموعد تلقائيًا.'
        ],
        hasCarSize: true,
        hasPeriod: false,
        hasAddons: false,
        isMultiWash: true,
        totalWashes: 4
    },
    '8washes': {
        id: '8washes',
        name: 'عرض 8 غسلات',
        currentPrice: 245,
        oldPrice: 400,
        image: 'images/packages/8washes.jpg',
        validity: '4 أشهر',
        description: 'مع عروض غسيل سيارات unlimited shine الجديد، سيارتك دائمًا في أبهى صورة، احصل على 8 غسلات شاملة (داخلي وخارجي) بسعر 280 ريال فقط، يعني الغسلة الواحدة بـ 35 ريال فقط، ووفر وقتك وجهدك واهتم بسيارتك في نفس الوقت،',
        features: [
            '4 غسلات داخلية وخارجية متكاملة',
            'صلاحية الاستخدام مفتوح ما يعني مرونة في المواعيد',
            'سعر الغسلة 35 ريال فقط، قيمة عالية بسعر منخفض',
            'تنظيف داخلي شامل: الأرضيات، الطبلون، المقاعد، الزجاج، وكل التفاصيل',
            'غسيل خارجي بأحتراف ومواد امنة',
            'خدمة متنقلة سريعة ومريحة في أي مكان يناسبك',
            'مثالية للعائلات أو أصحاب المشاوير الكثيرة'
        ],
        notes: [
            'عند الاشتراك في الباقة، ما يحق للعميل إلغاء الاشتراك أو استرجاع المبلغ المدفوع.',
            'يرجى إزالة أي أغراض شخصية من السيارة، والشركة غير مسؤولة عن أي مفقودات.',
            'إذا بغيت تعيد جدولة الموعد، تلغيه، أو تسترجع المبلغ، لازم يكون قبل الموعد بساعة على الأقل، وإذا ما صار التغيير في الوقت المطلوب، ينخصم المبلغ كامل.',
            'تنظيف الشنطة، الأدراج، أو السنادة يتم فقط إذا طلب العميل ذلك.',
            'الكابتن ينتظر 15 دقيقة فقط، وإذا ما حضرت، يلغي الموعد وينخصم المبلغ كامل.',
            'إذا حجزت الموعد وما دفعت أو ما أرسلت الموقع قبل الموعد بـ30 دقيقة، يلغي الموعد تلقائيًا.'
        ],
        hasCarSize: true,
        hasPeriod: false,
        hasAddons: false,
        isMultiWash: true,
        totalWashes: 8
    },
    'national-day': {
        id: 'national-day',
        name: 'عرض دام عزك يا وطن 🇸🇦',
        currentPrice: 96,
        oldPrice: null,
        image: 'images/packages/national-offer.jpg',
        validity: 'شهر واحد',
        endDate: '25 سبتمبر',
        description: 'اليوم الوطني السعودي 96 - نخدم وطننا .. ونعتني بسيارتك - دام عزك يا وطن',
        features: [
            '4 غسلات',
            'عناية تليق بسيارتك',
            'منظفات آمنة',
            'في الوقت المناسب',
            'خدمة منزلية'
        ],
        notes: [],
        hasCarSize: true,
        hasPeriod: true,
        hasAddons: true,
        isMultiWash: true,
        totalWashes: 4
    }
};

// ==========================================
// 4. أحجام السيارات
// ==========================================
const CAR_SIZES = [
    { id: 'small', name: 'صغيرة — سيدان', priceDiff: 0, showPrice: false },
    { id: 'medium', name: 'وسط — جيب 5 مقاعد', priceDiff: 20, showPrice: true },
    { id: 'large', name: 'كبيرة — جيب 7 مقاعد', priceDiff: 40, showPrice: true }
];

// ==========================================
// 5. الأسئلة الشائعة
// ==========================================
const FAQ_DATA = [
    { q: "ليش لما ادفع من المتجر ما تظهر المواعيد؟", a: "الحجز وجدولة المواعيد يتم من خلال الواتساب لضمان تنسيق الوقت المناسب لك بدقة." },
    { q: "سعر الغسيل يفرق على حسب الحجم؟", a: "نعم، يوجد فرق بسيط بين السيارة الكبيرة والصغيرة وهو 20 ريال للسيارة المتوسطة و 40 ريال للسيارة الكبيرة." },
    { q: "الي يغسل دباب او سيارة؟", a: "نقوم بغسيل الدباب والسيارات." },
    { q: "متوفر عندكم ازالة بقع؟", a: "اختصاصنا غسيل خارجي وتنظيف داخلي، ازالة البقع والتنظيف العميق. أما التلميع الداخلي فهو غير متوفر حالياً." },
    { q: "في كاش عندكم؟", a: "لا، الدفع مسبق لتأكيد الحجز وضمان جدية الموعد." },
    { q: "وش المواد الي تستخدمونها؟", a: "نستخدم مواد ألمانية عالية الجودة. لا نكتفي بوضع واكس مرة واحدة، بل نضعه مرتين: في بداية الغسيل مع الشامبو، وبعد الانتهاء من الغسيل لضمان لمعة مثالية." }
];

// ==========================================
// 6. حالة التطبيق العامة
// ==========================================
let bookingState = {
    step: 1,
    packageId: null,
    packageName: '',
    basePrice: 0,
    totalWashes: 1,
    isMultiWash: false,
    carSize: null,
    carSizeName: '',
    carSizeDiff: 0,
    neighborhood: null,
    period: null,
    periodName: '',
    addons: [],
    addonsPrice: 0,
    totalPrice: 0
};

let cart = { items: [] };
let currentPackageDetailsId = null;

let sliderState = {
    currentIndex: 0,
    totalSlides: 5,
    isDragging: false,
    startX: 0
};

let baSliderState = {
    currentIndex: 0,
    totalPairs: 3,
    isDragging: false,
    startX: 0
};

// ==========================================
// 7. تهيئة الصفحة
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initHeaderScrollEffect();
    initNeighborhoods();
    initFAQ();
    initBeforeAfterSlider();
    initPackageSlider();
    initAnimatedMessage();
    checkAndSwitchOffer();
    loadCartFromLocalStorage();
    updateCartUI();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            closeBooking();
            closePackageDetails();
            closeCart();
        }
    });

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') closeLightbox();
        });
    }

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
});

// ==========================================
// 8. تأثيرات الحركة والتمرير
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
// 9. المربع المتحرك
// ==========================================
function initAnimatedMessage() {
    const messages = document.querySelectorAll('.message-slide');
    if (messages.length < 2) return;

    let currentIndex = 0;

    setInterval(() => {
        messages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % messages.length;
        messages[currentIndex].classList.add('active');
    }, 4000);
}

// ==========================================
// 10. التبديل التلقائي بين العروض + العداد الحي
// ==========================================
function checkAndSwitchOffer() {
    const now = new Date().getTime();
    const endDate = new Date(NATIONAL_OFFER_END_DATE).getTime();

    const nationalOffer = document.getElementById('national-offer');
    const packagesOffer = document.getElementById('8-packages-offer');

    if (now > endDate) {
        if (nationalOffer) nationalOffer.style.display = 'none';
        if (packagesOffer) packagesOffer.style.display = 'block';
        if (window.countdownInterval) clearInterval(window.countdownInterval);
        updateCountdown(0);
    } else {
        if (nationalOffer) nationalOffer.style.display = 'block';
        if (packagesOffer) packagesOffer.style.display = 'none';

        updateCountdown(endDate - now);
        if (!window.countdownInterval) {
            window.countdownInterval = setInterval(() => {
                const remaining = endDate - new Date().getTime();
                if (remaining <= 0) {
                    checkAndSwitchOffer();
                } else {
                    updateCountdown(remaining);
                }
            }, 1000);
        }
    }
}

function updateCountdown(remainingMs) {
    const el = document.getElementById('countdown-date');
    if (!el) return;

    if (remainingMs <= 0) {
        el.textContent = 'انتهى';
        return;
    }

    const days = Math.ceil(remainingMs / 86400000);
    if (days <= 1) {
        el.textContent = 'آخر يوم';
    } else {
        el.textContent = 'تبقى ' + days + ' أيام';
    }
}

// ==========================================
// 11. سلايدر الباقات
// ==========================================
function initPackageSlider() {
    const track = document.getElementById('slider-track');
    const viewport = document.querySelector('.slider-viewport');
    if (!track || !viewport) return;

    viewport.addEventListener('touchstart', (e) => {
        sliderState.isDragging = true;
        sliderState.startX = e.touches[0].clientX;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
        if (!sliderState.isDragging) return;
        sliderState.isDragging = false;
        const endX = e.changedTouches[0].clientX;
        const diff = sliderState.startX - endX;

        if (diff > 50) {
            nextPackageSlide();
        } else if (diff < -50) {
            prevPackageSlide();
        }
    });

    viewport.addEventListener('mousedown', (e) => {
        sliderState.isDragging = true;
        sliderState.startX = e.clientX;
        viewport.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', (e) => {
        if (!sliderState.isDragging) return;
        sliderState.isDragging = false;
        viewport.style.cursor = '';
        const endX = e.clientX;
        const diff = sliderState.startX - endX;

        if (diff > 50) {
            nextPackageSlide();
        } else if (diff < -50) {
            prevPackageSlide();
        }
    });

    updateSliderPosition();
}

function nextPackageSlide() {
    if (sliderState.currentIndex < sliderState.totalSlides - 1) {
        sliderState.currentIndex++;
        updateSliderPosition();
    }
}

function prevPackageSlide() {
    if (sliderState.currentIndex > 0) {
        sliderState.currentIndex--;
        updateSliderPosition();
    }
}

function goToPackageSlide(index) {
    if (index >= 0 && index < sliderState.totalSlides) {
        sliderState.currentIndex = index;
        updateSliderPosition();
    }
}

function updateSliderPosition() {
    const track = document.getElementById('slider-track');
    if (!track) return;

    const slide = track.querySelector('.package-slide');
    if (!slide) return;

    const slideWidth = slide.offsetWidth;
    const gap = 12;
    const offset = sliderState.currentIndex * (slideWidth + gap);

    track.style.transform = `translateX(${offset}px)`;

    document.querySelectorAll('.slider-dots .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === sliderState.currentIndex);
    });
}

// ==========================================
// 12. Before/After Slider - حل بكسل مستقل عن الاتجاه
// ==========================================
function initBeforeAfterSlider() {
    for (let i = 1; i <= 3; i++) {
        initSingleBeforeAfter(i);
    }

    const viewport = document.querySelector('.ba-slider-viewport');
    if (!viewport) return;

    viewport.addEventListener('touchstart', (e) => {
        baSliderState.isDragging = true;
        baSliderState.startX = e.touches[0].clientX;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
        if (!baSliderState.isDragging) return;
        baSliderState.isDragging = false;
        const diff = baSliderState.startX - e.changedTouches[0].clientX;
        if (diff > 40) nextBeforeAfter();
        else if (diff < -40) prevBeforeAfter();
    }, { passive: true });

    viewport.addEventListener('mousedown', (e) => {
        baSliderState.isDragging = true;
        baSliderState.startX = e.clientX;
        viewport.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', (e) => {
        if (!baSliderState.isDragging) return;
        baSliderState.isDragging = false;
        viewport.style.cursor = '';
        const diff = baSliderState.startX - e.clientX;
        if (diff > 40) nextBeforeAfter();
        else if (diff < -40) prevBeforeAfter();
    });

    window.addEventListener('resize', () => {
        updateBeforeAfterPosition();
    });

    updateBeforeAfterPosition();
}

function initSingleBeforeAfter(index) {
    const wrapper = document.getElementById(`ba-wrapper-${index}`);
    const beforeWrapper = wrapper ? wrapper.querySelector('.before-image-wrapper') : null;
    const handle = document.getElementById(`ba-handle-${index}`);

    if (!wrapper || !beforeWrapper || !handle) return;

    let dragging = false;
    let axis = null;
    let startX = 0;
    let startY = 0;

    const setPos = (x) => {
        const rect = wrapper.getBoundingClientRect();
        let pos = ((x - rect.left) / rect.width) * 100;
        pos = Math.max(0, Math.min(100, pos));
        beforeWrapper.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
        handle.style.left = `${pos}%`;
    };

    // Mouse: مقارنة في أي مكان داخل الصورة
    wrapper.addEventListener('mousedown', (e) => {
        dragging = true;
        axis = 'x';
        setPos(e.clientX);
        e.preventDefault();
        e.stopPropagation();
    });

    window.addEventListener('mousemove', (e) => {
        if (dragging) setPos(e.clientX);
    });

    window.addEventListener('mouseup', () => {
        dragging = false;
        axis = null;
    });

    // Touch: قفل المحور - أفقي = مقارنة، عمودي = تمرير الصفحة
    wrapper.addEventListener('touchstart', (e) => {
        dragging = true;
        axis = null;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        e.stopPropagation();
    }, { passive: true });

    wrapper.addEventListener('touchmove', (e) => {
        if (!dragging) return;
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;

        if (axis === null) {
            if (Math.abs(x - startX) > 8 || Math.abs(y - startY) > 8) {
                axis = Math.abs(x - startX) > Math.abs(y - startY) ? 'x' : 'y';
            } else {
                return;
            }
        }

        if (axis === 'x') {
            setPos(x);
            e.preventDefault();
            e.stopPropagation();
        }
    }, { passive: false });

    wrapper.addEventListener('touchend', (e) => {
        dragging = false;
        axis = null;
        e.stopPropagation();
    });
}

function nextBeforeAfter() {
    if (baSliderState.currentIndex < baSliderState.totalPairs - 1) {
        baSliderState.currentIndex++;
        updateBeforeAfterPosition();
    }
}

function prevBeforeAfter() {
    if (baSliderState.currentIndex > 0) {
        baSliderState.currentIndex--;
        updateBeforeAfterPosition();
    }
}

function goToBeforeAfter(index) {
    if (index >= 0 && index < baSliderState.totalPairs) {
        baSliderState.currentIndex = index;
        updateBeforeAfterPosition();
    }
}

function updateBeforeAfterPosition() {
    const track = document.getElementById('ba-slider-track');
    if (!track) return;

    const pairs = track.querySelectorAll('.ba-pair');
    if (pairs.length === 0) return;

    let shift = 0;
    if (pairs.length > 1) {
        // المسافة بين زوجين متتاليين (سالبة في RTL) - مستقل عن الاتجاه الحالي
        const step = pairs[1].getBoundingClientRect().left - pairs[0].getBoundingClientRect().left;
        shift = -baSliderState.currentIndex * step;
    }

    track.style.transform = `translateX(${shift}px)`;

    document.querySelectorAll('.ba-slider-dots .ba-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === baSliderState.currentIndex);
    });
}

function openLightbox() {
    const currentIndex = baSliderState.currentIndex;
    const afterImg = document.querySelector(`#ba-wrapper-${currentIndex + 1} .after-image`);
    if (afterImg) {
        const img = document.getElementById('lightbox-img');
        if (img) {
            img.src = afterImg.src;
            img.alt = afterImg.alt;
        }
        document.getElementById('lightbox').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('active');
    document.body.style.overflow = '';
}

// ==========================================
// 13. الأسئلة الشائعة - Accordion
// ==========================================
function initFAQ() {
    const container = document.getElementById('faq-container');
    if (!container) return;

    container.innerHTML = FAQ_DATA.map((item) => `
        <div class="faq-item">
            <button type="button" class="faq-question" aria-expanded="false" onclick="toggleFAQ(this)">
                <span>${item.q}</span>
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer"><p>${item.a}</p></div>
        </div>
    `).join('');
}

function toggleFAQ(btn) {
    const item = btn.closest('.faq-item');
    if (!item) return;
    const isOpen = item.classList.contains('active');
    item.classList.toggle('active', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
}

// ==========================================
// 14. Modal تفاصيل الباقة
// ==========================================
function openPackageDetails(packageId) {
    const pkg = PACKAGES_DATA[packageId];
    if (!pkg) return;

    currentPackageDetailsId = packageId;

    const img = document.getElementById('pd-image');
    if (img) {
        img.src = pkg.image;
        img.alt = pkg.name;
    }

    const title = document.getElementById('pd-title');
    if (title) title.textContent = pkg.name;

    const currentPrice = document.getElementById('pd-current-price');
    if (currentPrice) currentPrice.textContent = `${pkg.currentPrice} ريال`;

    const oldPrice = document.getElementById('pd-old-price');
    if (oldPrice) {
        if (pkg.oldPrice) {
            oldPrice.textContent = `${pkg.oldPrice} ريال`;
            oldPrice.style.display = 'inline';
        } else {
            oldPrice.style.display = 'none';
        }
    }

    const validitySection = document.getElementById('pd-validity');
    if (validitySection && pkg.validity) {
        validitySection.style.display = 'flex';
        const validityText = document.getElementById('pd-validity-text');
        if (validityText) validityText.textContent = `المدة: ${pkg.validity}`;
    } else if (validitySection) {
        validitySection.style.display = 'none';
    }

    const desc = document.getElementById('pd-description');
    if (desc) desc.textContent = pkg.description;

    fillList('pd-features-section', 'pd-features', pkg.features);
    fillList('pd-notes-section', 'pd-notes', pkg.notes);

    document.getElementById('package-details-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fillList(sectionId, listId, items) {
    const section = document.getElementById(sectionId);
    const list = document.getElementById(listId);

    if (!section || !list) return;

    if (items && items.length > 0) {
        section.style.display = 'block';
        list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    } else {
        section.style.display = 'none';
    }
}

function closePackageDetails() {
    const modal = document.getElementById('package-details-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
    currentPackageDetailsId = null;
}

function bookThisPackage() {
    if (!currentPackageDetailsId) return;
    const id = currentPackageDetailsId;
    closePackageDetails();
    setTimeout(() => {
        openBooking(id);
    }, 300);
}

// ==========================================
// 15. السلة
// ==========================================
function loadCartFromLocalStorage() {
    try {
        const saved = localStorage.getItem('unlimitedShineCart');
        if (saved) {
            cart = JSON.parse(saved);
            if (!cart.items) cart.items = [];
        }
    } catch (e) {
        cart = { items: [] };
    }
}

function saveCartToLocalStorage() {
    try {
        localStorage.setItem('unlimitedShineCart', JSON.stringify(cart));
    } catch (e) {
        console.warn('فشل حفظ السلة:', e);
    }
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        const count = cart.items.length;
        countEl.textContent = count;
        countEl.style.display = count > 0 ? 'flex' : 'none';
    }

    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    const emptyMsg = document.getElementById('cart-empty');
    const totalSection = document.getElementById('cart-total-section');

    if (!container) return;

    if (cart.items.length === 0) {
        if (emptyMsg) emptyMsg.style.display = 'block';
        if (totalSection) totalSection.style.display = 'none';
        container.innerHTML = '';
        return;
    }

    if (emptyMsg) emptyMsg.style.display = 'none';
    if (totalSection) totalSection.style.display = 'flex';

    container.innerHTML = cart.items.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-header">
                <div class="cart-item-name">${item.packageName}</div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="حذف">&times;</button>
            </div>
            <div class="cart-item-details">
                <div class="cart-item-detail-row">
                    <span>حجم السيارة:</span>
                    <span>${item.carSizeName}</span>
                </div>
                <div class="cart-item-detail-row">
                    <span>الحي:</span>
                    <span>${item.neighborhood}</span>
                </div>
                ${item.period ? `<div class="cart-item-detail-row"><span>الفترة:</span><span>${item.period}</span></div>` : ''}
                ${item.addons && item.addons.length > 0 ? `<div class="cart-item-detail-row"><span>الإضافات:</span><span>${item.addons.map(a => a.name).join('، ')}</span></div>` : ''}
            </div>
            <div class="cart-item-price">${item.totalPrice} ريال</div>
        </div>
    `).join('');

    const totalEl = document.getElementById('cart-total-price');
    if (totalEl) {
        const total = cart.items.reduce((sum, item) => sum + item.totalPrice, 0);
        totalEl.textContent = `${total} ريال`;
    }
}

function openCart() {
    renderCartItems();
    document.getElementById('cart-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cart-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function removeFromCart(id) {
    cart.items = cart.items.filter(item => item.id !== id);
    saveCartToLocalStorage();
    updateCartUI();
}

function clearCart() {
    if (confirm('هل أنت متأكد من إفراغ السلة؟')) {
        cart.items = [];
        saveCartToLocalStorage();
        updateCartUI();
    }
}

function proceedToBooking() {
    if (cart.items.length === 0) {
        alert('السلة فارغة');
        return;
    }

    let message = `طلب حجز جديد من السلة – UNLIMITED SHINE\n\n`;
    let grandTotal = 0;

    cart.items.forEach((item, index) => {
        message += `العنصر ${index + 1}:\n`;
        message += `الباقة: ${item.packageName}\n`;
        message += `حجم السيارة: ${item.carSizeName}\n`;
        message += `الحي: ${item.neighborhood}\n`;
        if (item.period) {
            message += `الفترة: ${item.period}\n`;
        }
        if (item.addons && item.addons.length > 0) {
            message += `الإضافات: ${item.addons.map(a => a.name).join('، ')}\n`;
        } else {
            message += `الإضافات: لا يوجد\n`;
        }
        message += `السعر: ${item.totalPrice} ريال\n\n`;
        grandTotal += item.totalPrice;
    });

    message += `الإجمالي النهائي: ${grandTotal} ريال`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`${PROJECT_DATA.whatsappLink}?text=${encodedMessage}`, '_blank');

    cart.items = [];
    saveCartToLocalStorage();
    updateCartUI();
    closeCart();
}

// ==========================================
// 16. إضافة مباشرة للسلة من البطاقة
// ==========================================
function quickAddToCart(packageId) {
    const pkg = PACKAGES_DATA[packageId];
    if (!pkg) return;

    const newItem = {
        id: Date.now().toString(),
        packageId: pkg.id,
        packageName: pkg.name,
        carSize: 'small',
        carSizeName: CAR_SIZES[0].name,
        carSizeDiff: 0,
        neighborhood: 'يُؤكد عبر الواتساب',
        period: '',
        addons: [],
        addonsPrice: 0,
        totalWashes: pkg.totalWashes || 1,
        totalPrice: pkg.currentPrice
    };

    cart.items.push(newItem);
    saveCartToLocalStorage();
    updateCartUI();
    showToast('تمت الإضافة إلى السلة ✓');
}

function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

// ==========================================
// 17. نظام الحجز
// ==========================================
function getValidSteps() {
    const pkg = PACKAGES_DATA[bookingState.packageId];
    if (!pkg) return [1, 2, 3, 4, 5, 6];

    if (!pkg.hasPeriod && !pkg.hasAddons) {
        return [1, 2, 3, 6];
    }
    return [1, 2, 3, 4, 5, 6];
}

function openBooking(packageId, preselected = {}) {
    const pkg = PACKAGES_DATA[packageId];
    if (!pkg) return;

    let initCarSize = preselected.carSize || null;
    let initCarSizeName = '';
    let initCarSizeDiff = 0;

    if (initCarSize) {
        const sizeData = CAR_SIZES.find(s => s.id === initCarSize);
        if (sizeData) {
            initCarSizeName = sizeData.name;
            initCarSizeDiff = sizeData.priceDiff;
        }
    }

    bookingState = {
        step: 1,
        packageId: packageId,
        packageName: pkg.name,
        basePrice: pkg.currentPrice,
        totalWashes: pkg.totalWashes || 1,
        isMultiWash: pkg.isMultiWash || false,
        carSize: initCarSize,
        carSizeName: initCarSizeName,
        carSizeDiff: initCarSizeDiff,
        neighborhood: localStorage.getItem('last_neighborhood') || null,
        period: null,
        periodName: '',
        addons: preselected.addons || [],
        addonsPrice: 0,
        totalPrice: pkg.currentPrice
    };

    document.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
    document.querySelector('.booking-step[data-step="1"]').classList.add('active');

    const serviceOptions = document.querySelector('.service-options');
    if (serviceOptions) {
        serviceOptions.innerHTML = `
            <div class="size-card selected" style="cursor: default;">
                <div class="size-title">${pkg.name}</div>
                <div class="size-price">${pkg.currentPrice} ريال</div>
            </div>
        `;
    }

    const periodStep = document.getElementById('period-step');
    const addonsStep = document.getElementById('addons-step');
    const periodStepperItem = document.getElementById('period-stepper-item');
    const addonsStepperItem = document.getElementById('addons-stepper-item');
    const periodStepperLine = document.getElementById('period-stepper-line');
    const addonsStepperLine = document.getElementById('addons-stepper-line');
    const summaryPeriodRow = document.getElementById('summary-period-row');

    if (pkg.hasPeriod === false) {
        if (periodStep) periodStep.style.display = 'none';
        if (periodStepperItem) periodStepperItem.style.display = 'none';
        if (periodStepperLine) periodStepperLine.style.display = 'none';
        if (summaryPeriodRow) summaryPeriodRow.style.display = 'none';
    } else {
        if (periodStep) periodStep.style.display = 'block';
        if (periodStepperItem) periodStepperItem.style.display = 'flex';
        if (periodStepperLine) periodStepperLine.style.display = 'block';
        if (summaryPeriodRow) summaryPeriodRow.style.display = 'flex';
    }

    if (pkg.hasAddons === false) {
        if (addonsStep) addonsStep.style.display = 'none';
        if (addonsStepperItem) addonsStepperItem.style.display = 'none';
        if (addonsStepperLine) addonsStepperLine.style.display = 'none';
    } else {
        if (addonsStep) addonsStep.style.display = 'block';
        if (addonsStepperItem) addonsStepperItem.style.display = 'flex';
        if (addonsStepperLine) addonsStepperLine.style.display = 'block';
    }

    document.querySelectorAll('.addon-option input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });

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

    const sizeId = el.dataset.size;
    const sizeData = CAR_SIZES.find(s => s.id === sizeId);

    if (sizeData) {
        bookingState.carSize = sizeData.id;
        bookingState.carSizeName = sizeData.name;
        bookingState.carSizeDiff = sizeData.priceDiff;
    }

    updateBookingPrice();
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

document.addEventListener('DOMContentLoaded', () => {
    const addonCheckboxes = document.querySelectorAll('.addon-option input[type="checkbox"]');
    addonCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const value = this.value;
            const price = parseInt(this.dataset.price);
            const name = this.nextElementSibling.textContent;

            if (this.checked) {
                if (value === 'none') {
                    document.querySelectorAll('.addon-option input[type="checkbox"]').forEach(cb => {
                        if (cb.value !== 'none') cb.checked = false;
                    });
                    bookingState.addons = [{ name: 'بدون تكييس', price: 0 }];
                } else {
                    const noneCb = document.querySelector('input[value="none"]');
                    if (noneCb) noneCb.checked = false;

                    bookingState.addons = bookingState.addons.filter(a => a.name !== 'بدون تكييس');
                    if (!bookingState.addons.find(a => a.name === name)) {
                        bookingState.addons.push({ name, price });
                    }
                }
            } else {
                bookingState.addons = bookingState.addons.filter(a => a.name !== name);
            }

            updateBookingPrice();
        });
    });
});

function updateBookingPrice() {
    bookingState.addonsPrice = bookingState.addons.reduce((sum, a) => sum + a.price, 0);

    if (bookingState.isMultiWash) {
        bookingState.totalPrice = bookingState.basePrice + (bookingState.carSizeDiff * bookingState.totalWashes) + bookingState.addonsPrice;
    } else {
        bookingState.totalPrice = bookingState.basePrice + bookingState.carSizeDiff + bookingState.addonsPrice;
    }

    updateBookingSummary();
}

function updateBookingSummary() {
    document.getElementById('summary-service').textContent = bookingState.packageName;
    document.getElementById('summary-car-size').textContent = bookingState.carSizeName || '-';
    document.getElementById('summary-neighborhood').textContent = bookingState.neighborhood || '-';
    document.getElementById('summary-period').textContent = bookingState.periodName || '-';
    document.getElementById('summary-addons').textContent = bookingState.addons.length > 0
        ? bookingState.addons.map(a => a.name).join('، ')
        : 'لا يوجد';
    document.getElementById('summary-total-price').textContent = `${bookingState.totalPrice} ريال`;
}

function nextStep() {
    if (!validateStep(bookingState.step)) {
        alert('يرجى إكمال الاختيار المطلوب للمتابعة.');
        return;
    }

    const validSteps = getValidSteps();
    const currentIndex = validSteps.indexOf(bookingState.step);

    if (currentIndex < validSteps.length - 1) {
        const nextStepNum = validSteps[currentIndex + 1];

        document.querySelector(`.booking-step[data-step="${bookingState.step}"]`).classList.remove('active');
        bookingState.step = nextStepNum;
        document.querySelector(`.booking-step[data-step="${bookingState.step}"]`).classList.add('active');

        if (bookingState.step === 6) {
            updateBookingSummary();
        }

        updateStepper();
        updateNavigationButtons();
    }
}

function prevStep() {
    const validSteps = getValidSteps();
    const currentIndex = validSteps.indexOf(bookingState.step);

    if (currentIndex > 0) {
        const prevStepNum = validSteps[currentIndex - 1];

        document.querySelector(`.booking-step[data-step="${bookingState.step}"]`).classList.remove('active');
        bookingState.step = prevStepNum;
        document.querySelector(`.booking-step[data-step="${bookingState.step}"]`).classList.add('active');

        updateStepper();
        updateNavigationButtons();
    }
}

function validateStep(step) {
    if (step === 2 && !bookingState.carSize) return false;
    if (step === 3 && !bookingState.neighborhood) return false;

    const pkg = PACKAGES_DATA[bookingState.packageId];
    if (pkg && pkg.hasPeriod && step === 4 && !bookingState.period) return false;

    return true;
}

function updateStepper() {
    const validSteps = getValidSteps();
    document.querySelectorAll('.stepper-item').forEach(item => {
        const s = parseInt(item.dataset.step);
        item.classList.remove('active', 'completed');

        if (!validSteps.includes(s)) {
            item.style.display = 'none';
            const nextSibling = item.nextElementSibling;
            if (nextSibling && nextSibling.classList.contains('stepper-line')) {
                nextSibling.style.display = 'none';
            }
        } else {
            item.style.display = 'flex';
            const line = item.nextElementSibling;
            if (line && line.classList.contains('stepper-line')) {
                line.style.display = 'block';
            }

            if (s === bookingState.step) {
                item.classList.add('active');
            } else if (validSteps.indexOf(s) < validSteps.indexOf(bookingState.step)) {
                item.classList.add('completed');
            }
        }
    });
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    const validSteps = getValidSteps();
    const currentIndex = validSteps.indexOf(bookingState.step);
    const isLastStep = currentIndex === validSteps.length - 1;

    if (prevBtn) {
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'inline-flex';
    }

    if (nextBtn) {
        if (isLastStep) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'inline-flex';
            const nextStepNum = validSteps[currentIndex + 1];
            nextBtn.textContent = nextStepNum === 6 ? 'مراجعة الطلب ✓' : 'التالي →';
        }
    }
}

function addToCartFromBooking() {
    if (!bookingState.packageId) return;

    const newItem = {
        id: Date.now().toString(),
        packageId: bookingState.packageId,
        packageName: bookingState.packageName,
        carSize: bookingState.carSize,
        carSizeName: bookingState.carSizeName,
        carSizeDiff: bookingState.carSizeDiff,
        neighborhood: bookingState.neighborhood,
        period: bookingState.periodName,
        addons: [...bookingState.addons],
        addonsPrice: bookingState.addonsPrice,
        totalWashes: bookingState.totalWashes,
        totalPrice: bookingState.totalPrice
    };

    cart.items.push(newItem);
    saveCartToLocalStorage();
    updateCartUI();
    closeBooking();
    showToast('تمت الإضافة إلى السلة ✓');

    bookingState = {
        step: 1,
        packageId: null,
        packageName: '',
        basePrice: 0,
        totalWashes: 1,
        isMultiWash: false,
        carSize: null,
        carSizeName: '',
        carSizeDiff: 0,
        neighborhood: null,
        period: null,
        periodName: '',
        addons: [],
        addonsPrice: 0,
        totalPrice: 0
    };
}

// ==========================================
// 18. دوال مساعدة
// ==========================================
function initNeighborhoods() {
    const list = document.getElementById('neighborhood-list');
    if (!list) return;

    list.innerHTML = NEIGHBORHOODS.map(n => `
        <div class="neighborhood-item" data-name="${n}" onclick="selectNeighborhood(this)" role="button" tabindex="0">${n}</div>
    `).join('');
}

function filterNeighborhoods() {
    const input = document.getElementById('neighborhood-search');
    if (!input) return;
    const searchTerm = input.value.toLowerCase().trim();

    document.querySelectorAll('.neighborhood-item').forEach(item => {
        const name = item.dataset.name.toLowerCase();
        item.style.display = name.includes(searchTerm) ? 'block' : 'none';
    });
}
