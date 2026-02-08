// JavaScript Document

/*

TemplateMo 596 Electric Xtra

https://templatemo.com/tm-596-electric-xtra

*/


// Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                
                // Randomly assign orange or blue color
                if (Math.random() > 0.5) {
                    particle.style.setProperty('--particle-color', '#00B2FF');
                    const before = particle.style.getPropertyValue('--particle-color');
                    particle.style.background = '#00B2FF';
                }
                
                particlesContainer.appendChild(particle);
            }
        }

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Active navigation highlighting
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-link');

        function updateActiveNav() {
            const scrollPosition = window.pageYOffset + 100;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navItems.forEach(item => item.classList.remove('active'));
                    const currentNav = document.querySelector(`.nav-link[href="#${section.id}"]`);
                    if (currentNav) currentNav.classList.add('active');
                }
            });
        }

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            updateActiveNav();
        });

        // Initial active nav update
        updateActiveNav();

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Feature tabs functionality
        const tabs = document.querySelectorAll('.tab-item');
        const panels = document.querySelectorAll('.content-panel');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                
                // Remove active class from all tabs and panels
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding panel
                tab.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Initialize particles
        createParticles();

        // Text rotation with character animation
        const textSets = document.querySelectorAll('.text-set');
        let currentIndex = 0;
        let isAnimating = false;

        function wrapTextInSpans(element) {
            const text = element.textContent;
            element.innerHTML = text.split('').map((char, i) => 
                `<span class="char" style="animation-delay: ${i * 0.05}s">${char === ' ' ? '&nbsp;' : char}</span>`
            ).join('');
        }

        function animateTextIn(textSet) {
            const glitchText = textSet.querySelector('.glitch-text');
            const subtitle = textSet.querySelector('.subtitle');
            
            // Wrap text in spans for animation
            wrapTextInSpans(glitchText);
            
            // Update data attribute for glitch effect
            glitchText.setAttribute('data-text', glitchText.textContent);
            
            // Show subtitle after main text
            setTimeout(() => {
                subtitle.classList.add('visible');
            }, 800);
        }

        function animateTextOut(textSet) {
            const chars = textSet.querySelectorAll('.char');
            const subtitle = textSet.querySelector('.subtitle');
            
            // Animate characters out
            chars.forEach((char, i) => {
                char.style.animationDelay = `${i * 0.02}s`;
                char.classList.add('out');
            });
            
            // Hide subtitle
            subtitle.classList.remove('visible');
        }

        function rotateText() {
            if (isAnimating) return;
            isAnimating = true;

            const currentSet = textSets[currentIndex];
            const nextIndex = (currentIndex + 1) % textSets.length;
            const nextSet = textSets[nextIndex];

            // Animate out current text
            animateTextOut(currentSet);

            // After out animation, switch sets
            setTimeout(() => {
                currentSet.classList.remove('active');
                nextSet.classList.add('active');
                animateTextIn(nextSet);
                
                currentIndex = nextIndex;
                isAnimating = false;
            }, 600);
        }

        // Initialize first text set
        textSets[0].classList.add('active');
        animateTextIn(textSets[0]);

        // Start rotation after initial display
        setTimeout(() => {
            setInterval(rotateText, 5000); // Change every 5 seconds
        }, 4000);

        // Add random glitch effect
        setInterval(() => {
            const glitchTexts = document.querySelectorAll('.glitch-text');
            glitchTexts.forEach(text => {
                if (Math.random() > 0.95) {
                    text.style.animation = 'none';
                    setTimeout(() => {
                        text.style.animation = '';
                    }, 200);
                }
            });
        }, 3000);

const videos = document.querySelectorAll('.lazy-video');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target;
      const src = video.dataset.src;

      if (src) {
        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.load();
        observer.unobserve(video);
      }
    }
  });
});

videos.forEach(video => observer.observe(video));


        //sliding images and quotes
        var slideImg=document.getElementById("slideimg")
        const slideTitle = document.getElementById("slide-title");

var imageArray=[
        "Group images/group20.jpg",
        "Group images/QC1 (1).jpeg",
        "Group images/group4.jpg",
        "Group images/QC1 (14).jpeg",
        "Group images/QC1 (4).jpeg",
        "Group images/QC1 (6).jpeg",
        "Group images/QC1 (10).jpeg",
        "Group images/group1.jpg",
        "Group images/QC1 (9).jpeg",
        "Group images/QC1 (11).jpeg",
        "Group images/group22.jpg",
        "Group images/group6.jpg",
        "Group images/QC1 (12).jpeg",
        "Group images/group21.jpg",
        "Group images/group23.jpg",
        "Group images/QC1 (13).jpeg",
        "Group images/group24.jpg",
        "Group images/group25.jpeg",
        "Group images/QC1 (8).jpeg",
        "Group images/group35.jpg",
        "Group images/group a.jpeg",
        "Group images/group b.jpeg",
        "Group images/group h.jpeg",
    ]
    console.log(imageArray.length)
     // titles for each image
  const titles = [
   "Project defence day: Having the last dance as undergraduate students of University of Abuja.",
        "Signout ceremony, Celebrating the end of an era with amazing classmates and friends.",
        "First HOD cup trophy won in our 200 level ",
        "Career Day of our FYB week: Inspiring future Physicists and leaders.",
        "Another angle from our Signout ceremony",
        "Showcasing our FYB match medals",
        "Jersey Day of our FYB week",
        "Showcasing our HOD cup trophy",
        "Jersey Day of our FYB week",
        "Jersey Day of our FYB week",
        "Another angle from our Project defence day",
        "The Physics Ballers in our 100 level days",
        "Jersey Day of our FYB week",
        "Moments of celebraation after winning the HOD cup trophy",
        "Celebrating our victory after lifting the first ever University of Abuja interdepartmental trophy in 2024",
        "Jersey Day of our FYB week",
        "Group picture during NAPS week 2023",
        "Matriculation day group photo",
        "Physics Ballers at our FYB football match against Microbiology FYB 2025",
        "At the FOSSA Dinner and Awards Night 2025",
        "The Quantum Clan in front of the Physics Complex",
        "Career Day of our FYB week",
        "Moment of appreciation to Alade Joshua Alade for his immense contributions as our class rep",
  ];
  console.log(titles.length)
    var index=0
window.addEventListener("load", changeImg)

function changeImg(){
    if(index>imageArray.length-1 && index>titles.length-1){
        index=0
    }
    slideImg.src=imageArray[index]
    slideTitle.textContent=titles[index]
    index++
    setTimeout("changeImg()", 5000)
}  

var quotes=document.getElementById("quote")
var nameOfGraduands=document.getElementById("nameOfGraduands")
var namesClass=document.querySelectorAll(".names_class")
var agesClass=document.querySelectorAll(".age_class")
var contactsClass=document.querySelectorAll(".contacts_class")
var emailClass=document.querySelectorAll(".email_class")
const namesArray=Array.from(namesClass, para=>para.innerText)
var quoteImages=document.getElementById("quote_images")


var namesOfstudents=[
"Adegbeminuyi Joshua Alade",
"Abugu Lucy Nnedinso",
"Emeshie Kennedy Joshua",
"Musa Mustapha Muhammad",
"Omojadegbe Ifeoluwa Joseph",
"Francis Chiwete Mercy",
"Jacobs Oluwatimilehin David",
"Gbadamosi AbdulQuadri Taiwo",
"Hamza Bilkisu Jibrin",
"Sotinwa Idiopemipo Adeyorisayo",
"Kefas Solomon Suwukari",
"Abbas Musa Kirawa",
"James Modupe Mary",
"Agada Adanu",
"Daniel John Ocheme",
"Adio Kolawole James",
"Onyia Paschal Michael",
"Bello Akeem Gbolamiga",
"Afolayan Ayoola Oluwatomiloba",
"Adejumo Abdulganiyu Abayomi",
"Isaac Ezekiel Osiwuyame",
"Ejikeme Russell Chiedozie",
"Koiki Michael Ayomide",
"Hassan Khadijah Haruna",
"Ikechukwu Ephraim Chinonso",
"Badirudeen Qodir Olawale",
"Olasunkanmi Abdulwasiu Ayinde",
"Abdulsalam Abdulazeez Adekunle",
"Oladejo Abdulsamad Timileyin",
"Obi Promise Ifeanyi",
"Muhammad Usman",
"Bello Daniel Omokagbe",
"Toyin Abibat Yetunde",
"Innocent Miracle Godwin",
                ]


var imagesForQuotesArray=[
    "main photos/Alade.jpeg",
    "main photos/IMG_1808 - Abugu Lucy.jpeg",
    "main photos/Kenny 1.jpeg",
    "main photos/2E258FFD-C071-4CDB-B753-751546B591E6 - Musa Mustapha.jpg",
    "main photos/IMG_3339 - Ifeoluwa Omojadegbe.jpeg",
    "main photos/mercy.jpg",
    "main photos/IMG-20231001-WA0090 - Timilehin Jacobs.jpg",
    "main photos/IMG_6264 - Love wins Always.jpeg",
    "main photos/My picture - Bilk J.jpg",
    "main photos/IMG_9768 - Ope Sotinwa.jpg",
    "main photos/Kefas Solomon Suwukari  - Kefas Solomon.jpg",
    "main photos/IMG_20240527_105827_919 - Abbas Musa.jpg",
    "main photos/IMG_20240906_095345_763 - Dupeoluwa James.jpg",
    "main photos/7199C6B0-17A9-48E3-8F20-AEECF2F99163 - adanu agada.png",
    "main photos/IMG_1755 - Daniel John.jpg",
    "main photos/IMG_6182 - Adio Kola.jpeg",
    "main photos/17364349268926450790392260803930 - Onyia Paschal.jpg",
    "main photos/2024_04_10_08_44_IMG_2829 - BELLO AKEEM GBOLAMIGA.jpg",
    "main photos/IMG_20240114_130706 - Ayoola Afolayan.jpg",
    "main photos/IMG_7276 - Abayomi Adejumo.jpeg",
    "main photos/image - flippy manny.jpg",
    "main photos/IMG_5422 - Russell Ejikeme.jpeg",
    "main photos/IMG_5136 - Michael Koiki.jpeg",
    "main photos/Snapchat-410880993 - Hassan Khadijah.jpg",
    "main photos/IMG-20241201-WA0010 - Ephraim Frosty.jpg",
    "main photos/IMG_20241218_133251_181~2 - Badirudeen Qodri Olawale.jpg",
    "main photos/IMG_20231008_144055_315 - Olasukanmi Abdulwasiu.jpg",
    "main photos/Screenshot_20250109_185442 - Azeez Salam.jpg",
    "main photos/IMG_20250109_154947 - ABDULSAMAD.jpg",
    "main photos/Screenshot_20241006-215009 - promise obi.png",
    "main photos/IMG_20240510_130403_048 - usman muhammad.jpg",
    "main photos/TEE_0098@-879128078 - Daniel Bello.JPG",
    "main photos/IMG_6439 - Abibat Yetunde.jpeg",
    "main photos/IMG_20230720_224842_699 - INNOCENT MIRACLE.jpg",
    "main photos/Snapchat-1881987535 - Kentro Genius (1).jpg",
    "main photos/IMG-20250101-WA0054 - Adirije Melody.jpg"
]

var quotesArray=[
    "Always remember what it took you to get this far, it will require even more to get you farther, keep working and keep looking up. I love you all",
    "It's not been an easy journey and we shall all archieve our goals.",

    "YÓÓ DÁÁ!!!!!",

    "Just be real and work hard",

"Obsession makes perfect",

"To my fellow graduands and the university community, as we close this chapter and embark on new adventures very soon, let's carry the lessons we've learned and the friendships we've made. Together, we've faced challenges and celebrated successes, and I believe our diverse paths will lead to incredible opportunities. Congratulations to all of us for being in finals, and here's to a bright future ahead",

"Focus and acquire skills rather than focusing on school, this country na connection",

"Keep reaching for your goals, it’s better than giving up",

"I would like to tell my fellow graduands to always work hard and don't be a nuisance to the society and university community should continue to be great as always",

"Follow your dreams",

"Study to make yourself approved and stay focused",

"Keep striving and you would succeed",

"I love you all. Keep thriving! The road to the top is rough but with focus, you'll embrace life challenges with so much joy and a high spirit",

"We’ve faced challenges that tested us, but we’ve proven that we’re capable of overcoming anything",

"Knowledge starts with interest",

"Embrace curiosity, value resilience, and never stop learning. Together, let’s use the knowledge we’ve gained to make meaningful contributions to the world and inspire the next generation to dream bigger",

"Study hard",

"Stay humble",

"That things will get better",

"Just keep on doing the good work and be consistent",

"It has been a pleasure passing through this stage of life with you all",

"I will miss you all",

"Consistency",

"Nil",

"School is not the end. Strive to progress wherever you find yourself. Don't cut corners",

"To believe in themselves, as nothing is impossible to achieve",

"Be a great student of the university",

"It never promised to be easy",

"CONSISTENCY. Even if you keep having bad grades, just be dedicated and consistent to your course",

"Best of luck",

"To my fellow graduands, let's continue to strive for excellence and be ambassadors of this great institution (University of Abuja). To the university community, thank you for your guidance and support",

"Work hard less, work smart more, and dream big and let your success inspire the world",

"Nil",
"All the best to us and a better future where we help the newer graduates to be better ambassadors (problem solvers) of a future deem fit for humanity."
]



window.addEventListener("load", displayQuotes)
i=0

function displayQuotes(){
   
    if(i>quotesArray.length-1 && i>namesArray.length-1 && i>imagesForQuotesArray.length-1){
        i=0
    }
    quoteImages.src=imagesForQuotesArray[i]
    quotes.textContent=quotesArray[i]
    nameOfGraduands.textContent=namesArray[i]
    i++
    setTimeout("displayQuotes()", 6000)
}    
var images=document.querySelectorAll(".images")
var newImagesArray=[
"modal photos/Alade.jpg",
"main photos/IMG_1808 - Abugu Lucy.jpeg",
"main photos/Kenny 1.jpeg",
"main photos/2E258FFD-C071-4CDB-B753-751546B591E6 - Musa Mustapha.jpg",
"main photos/IMG_3339 - Ifeoluwa Omojadegbe.jpeg",
"main photos/mercy.jpg",
"main photos/IMG-20231001-WA0090 - Timilehin Jacobs.jpg",
"main photos/IMG_6264 - Love wins Always.jpeg",
"main photos/My picture - Bilk J.jpg",
"main photos/IMG_9768 - Ope Sotinwa.jpg",
"main photos/Kefas Solomon Suwukari  - Kefas Solomon.jpg",
"main photos/IMG_20240527_105827_919 - Abbas Musa.jpg",
"main photos/IMG_20240906_095345_763 - Dupeoluwa James.jpg",
"main photos/7199C6B0-17A9-48E3-8F20-AEECF2F99163 - adanu agada.png",
"main photos/IMG_1755 - Daniel John.jpg",
"main photos/IMG_6182 - Adio Kola.jpeg",
"main photos/17364349268926450790392260803930 - Onyia Paschal.jpg",
"main photos/2024_04_10_08_44_IMG_2829 - BELLO AKEEM GBOLAMIGA.jpg",
"main photos/IMG_20240114_130706 - Ayoola Afolayan.jpg",
"main photos/IMG_7276 - Abayomi Adejumo.jpeg",
"main photos/image - flippy manny.jpg",
"main photos/IMG_5422 - Russell Ejikeme.jpeg",
"main photos/IMG_5136 - Michael Koiki.jpeg",
"main photos/Snapchat-410880993 - Hassan Khadijah.jpg",
"main photos/IMG-20241201-WA0010 - Ephraim Frosty.jpg",
"main photos/IMG_20241218_133251_181~2 - Badirudeen Qodri Olawale.jpg",
"main photos/IMG_20231008_144055_315 - Olasukanmi Abdulwasiu.jpg",
"main photos/Screenshot_20250109_185442 - Azeez Salam.jpg",
"main photos/IMG_20250109_154947 - ABDULSAMAD.jpg",
"main photos/Screenshot_20241006-215009 - promise obi.png",
"main photos/IMG_20240510_130403_048 - usman muhammad.jpg",
"main photos/TEE_0098@-879128078 - Daniel Bello.JPG",
"main photos/IMG_6439 - Abibat Yetunde.jpeg",
"main photos/IMG_20230720_224842_699 - INNOCENT MIRACLE.jpg",
"main photos/Snapchat-1881987535 - Kentro Genius (1).jpg",
    "main photos/IMG-20250101-WA0054 - Adirije Melody.jpg"
]

var about_images= document.querySelectorAll("img")
images.forEach((paragraph, index) =>{
    if([index]){
        paragraph.src=newImagesArray[index]
    }
}
)
//nav bar
const navbar = document.getElementById('navbar');
const Toggle = document.getElementById('menu-toggle');
const mainnavLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

Toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const tourButtons = document.querySelectorAll(".tour");
    const allBriefInfos = document.querySelectorAll(".briefinfo");
    tourButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent click from bubbling up

 

            // Remove active class from all
            allBriefInfos.forEach(info => info.classList.remove("active"));
            tourButtons.forEach(b => b.classList.add("hidden"));

            // Show the clicked one
            const briefInfo = btn.parentElement.querySelector(".briefinfo");
            if (briefInfo) {
                briefInfo.classList.add("active");
            }
        });
    });

    // Clicking outside closes all
    document.body.addEventListener("click", (e) => {
        if (e.target.closest(".briefinfo")) return;

        allBriefInfos.forEach(info => info.classList.remove("active"));
        tourButtons.forEach(b => b.classList.remove("hidden"));
    });
});

