/* =============================================================
   ELIAS PORTFOLIO — JavaScript
   Matrix rain, typing effects, scroll reveals, project demos
   ============================================================= */

// ── Configuration ──
const CONFIG = {
    roles: [
        'Desenvolvedor Full-Stack',
        'Entusiasta de Open Source',
        'Criador de Soluções',
        'Apaixonado por Código',
        'Problem Solver'
    ],
    heroCommand: 'cat welcome.txt',
    typingSpeed: 60,
    deleteSpeed: 40,
    pauseDuration: 2200,
    matrixChars: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]|/\\',
    asciiName: `
 ███████╗██╗     ██╗ █████╗ ███████╗
 ██╔════╝██║     ██║██╔══██╗██╔════╝
 █████╗  ██║     ██║███████║███████╗
 ██╔══╝  ██║     ██║██╔══██║╚════██║
 ███████╗███████╗██║██║  ██║███████║
 ╚══════╝╚══════╝╚═╝╚═╝  ╚═╝╚══════╝`,

    skills: [
        { name: 'HTML / CSS', level: 85, color: 'orange' },
        { name: 'JavaScript', level: 80, color: 'yellow' },
        { name: 'Python', level: 75, color: 'blue' },
        { name: 'React / Vue', level: 65, color: 'cyan' },
        { name: 'Node.js', level: 70, color: 'green' },
        { name: 'Git / GitHub', level: 80, color: 'magenta' },
    ],

    socialLinks: [
        { icon: '📧', label: 'email', value: 'eliassantoscf7@gmail.com', href: 'mailto:eliassantoscf7@gmail.com' },
        { icon: '🐙', label: 'github', value: 'github.com/EliasPY1', href: 'https://github.com/EliasPY1' },
        { icon: '💼', label: 'linkedin', value: 'linkedin.com/in/elias--santos', href: 'https://www.linkedin.com/in/elias--santos/' },
    ],

    experience: [
        {
            title: 'Desenvolvedor Full-Stack',
            company: 'Freelancer / Projetos Pessoais',
            date: '2023 - Presente',
            description: 'Desenvolvimento de portfólios interativos, jogos de navegador e ferramentas web completas utilizando JavaScript, HTML, CSS, Node.js e Python.'
        }
    ],

    education: [
        {
            title: 'Análise e Desenvolvimento de Sistemas',
            institution: 'Uninove',
            date: 'Conclusão: 12/2024',
            description: 'Graduação tecnológica voltada para o desenvolvimento de software, modelagem de dados, arquitetura de sistemas e engenharia de requisitos.'
        }
    ],

    certifications: [
        {
            name: 'Desenvolvimento Web Full-Stack',
            issuer: 'Udemy / Outros',
            date: '2023'
        },
        {
            name: 'Algoritmos e Lógica de Programação',
            issuer: 'Udemy / Outros',
            date: '2022'
        }
    ],

    // ── PROJECTS ──
    // Adicione seus projetos aqui!
    // demoUrl: caminho para o arquivo HTML do projeto (será carregado via iframe)
    // codeUrl: link para o repositório no GitHub
    projects: [
        {
            id: 'calculadora',
            name: 'Calculadora',
            icon: '🧮',
            description: 'Calculadora científica com interface moderna, suporte a funções trigonométricas e histórico de operações.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            category: 'web',
            demoUrl: 'projetos/calculadora/index.html',
            codeUrl: '#'
        },
        {
            id: 'snake-game',
            name: 'Snake Game',
            icon: '🐍',
            description: 'Jogo da cobrinha clássico reimaginado com visual neon, pontuação, níveis de dificuldade e ranking local.',
            tags: ['JavaScript', 'Canvas', 'Game Dev'],
            category: 'games',
            demoUrl: 'projetos/snake/index.html',
            codeUrl: '#'
        },
        {
            id: 'todo-app',
            name: 'Todo App',
            icon: '✅',
            description: 'Gerenciador de tarefas com drag & drop, filtros, localStorage e modo escuro.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            category: 'web',
            demoUrl: 'projetos/todo/index.html',
            codeUrl: '#'
        },
        {
            id: 'weather-cli',
            name: 'Weather CLI',
            icon: '🌦️',
            description: 'Simulador de CLI que mostra informações climáticas com animações ASCII. Interface estilo terminal.',
            tags: ['JavaScript', 'API', 'CLI'],
            category: 'tools',
            demoUrl: 'projetos/weather/index.html',
            codeUrl: '#'
        },
        {
            id: 'pomodoro',
            name: 'Pomodoro Timer',
            icon: '🍅',
            description: 'Timer Pomodoro com notificações, estatísticas de produtividade e sons personalizáveis.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            category: 'tools',
            demoUrl: 'projetos/pomodoro/index.html',
            codeUrl: '#'
        },
        {
            id: 'pixel-art',
            name: 'Pixel Art Editor',
            icon: '🎨',
            description: 'Editor de pixel art com paleta de cores, exportação de imagem e grid customizável.',
            tags: ['Canvas', 'JavaScript', 'CSS'],
            category: 'tools',
            demoUrl: 'projetos/pixel/index.html',
            codeUrl: '#'
        }
    ]
};


// ── Matrix Rain ──
class MatrixRain {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.columns = [];
        this.fontSize = 14;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        const colCount = Math.floor(this.canvas.width / this.fontSize);
        this.columns = Array.from({ length: colCount }, () =>
            Math.floor(Math.random() * this.canvas.height / this.fontSize)
        );
    }

    draw() {
        this.ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.font = `${this.fontSize}px monospace`;

        for (let i = 0; i < this.columns.length; i++) {
            const char = CONFIG.matrixChars[Math.floor(Math.random() * CONFIG.matrixChars.length)];
            const x = i * this.fontSize;
            const y = this.columns[i] * this.fontSize;

            // Create gradient effect — brighter at the head
            const brightness = Math.random();
            if (brightness > 0.95) {
                this.ctx.fillStyle = '#fff';
            } else {
                this.ctx.fillStyle = `rgba(0, 255, 65, ${0.3 + Math.random() * 0.5})`;
            }

            this.ctx.fillText(char, x, y);

            if (y > this.canvas.height && Math.random() > 0.975) {
                this.columns[i] = 0;
            }
            this.columns[i]++;
        }
    }

    start() {
        const animate = () => {
            this.draw();
            requestAnimationFrame(animate);
        };
        animate();
    }
}


// ── Typing Effect ──
class TypeWriter {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.speed = options.speed || CONFIG.typingSpeed;
        this.deleteSpeed = options.deleteSpeed || CONFIG.deleteSpeed;
        this.pause = options.pause || CONFIG.pauseDuration;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let timeout = this.isDeleting ? this.deleteSpeed : this.speed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            timeout = this.pause;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            timeout = 300;
        }

        setTimeout(() => this.type(), timeout);
    }
}


// ── Hero Command Typing ──
function typeHeroCommand() {
    const commandEl = document.getElementById('hero-command');
    const outputEl = document.getElementById('hero-output');
    const asciiEl = document.getElementById('ascii-name');
    const command = CONFIG.heroCommand;
    let i = 0;

    const typeChar = () => {
        if (i < command.length) {
            commandEl.textContent += command[i];
            i++;
            setTimeout(typeChar, 80 + Math.random() * 60);
        } else {
            // Command typed, show output
            setTimeout(() => {
                asciiEl.textContent = CONFIG.asciiName;
                outputEl.classList.add('visible');

                // Start role typing
                setTimeout(() => {
                    new TypeWriter(
                        document.getElementById('typed-role'),
                        CONFIG.roles
                    );
                }, 500);
            }, 400);
        }
    };

    setTimeout(typeChar, 800);
}


// ── Skills Rendering ──
function renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    CONFIG.skills.forEach((skill, index) => {
        const item = document.createElement('div');
        item.className = 'skill-item';
        item.style.transitionDelay = `${index * 100}ms`;
        item.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-fill ${skill.color}" data-width="${skill.level}"></div>
            </div>
        `;
        grid.appendChild(item);
    });
}


// ── Social Links Rendering ──
function renderSocialLinks() {
    const container = document.getElementById('social-links');
    if (!container) return;

    CONFIG.socialLinks.forEach(link => {
        const el = document.createElement('a');
        el.className = 'social-link';
        el.href = link.href;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
        el.innerHTML = `
            <span class="social-icon">${link.icon}</span>
            <span><span class="social-label">${link.label}:</span> ${link.value}</span>
        `;
        container.appendChild(el);
    });
}


// ── Projects Rendering ──
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const filterContainer = document.getElementById('filter-buttons');
    if (!grid || !filterContainer) return;

    // Get unique categories
    const categories = [...new Set(CONFIG.projects.map(p => p.category))];

    // Render filter buttons
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.filter = cat;
        btn.textContent = `${cat}/*`;
        btn.addEventListener('click', () => filterProjects(cat));
        filterContainer.appendChild(btn);
    });

    // Render project cards
    CONFIG.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.category = project.category;
        card.style.transitionDelay = `${index * 100}ms`;

        card.innerHTML = `
            <div class="project-card-header">
                <div class="terminal-buttons">
                    <span class="terminal-btn close"></span>
                    <span class="terminal-btn minimize"></span>
                    <span class="terminal-btn maximize"></span>
                </div>
                <span class="project-card-title">${project.id}.exe</span>
            </div>
            <div class="project-card-body">
                <h3 class="project-name">
                    <span class="project-name-icon">${project.icon}</span>
                    ${project.name}
                </h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <button class="project-btn project-btn-demo" onclick="openProjectDemo('${project.id}')" aria-label="Executar demo de ${project.name}">
                        ▶ Executar
                    </button>
                    <a class="project-btn project-btn-code" href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" aria-label="Ver código de ${project.name}">
                        { } Código
                    </a>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}


// ── Experience & Education Rendering ──
function renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    CONFIG.experience.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'timeline-item reveal';
        el.style.transitionDelay = `${index * 100}ms`;
        el.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <h4 class="timeline-title">${item.title}</h4>
            <div class="timeline-subtitle">${item.company}</div>
            <p class="timeline-desc">${item.description}</p>
        `;
        container.appendChild(el);
    });
}

function renderEducation() {
    const container = document.getElementById('education-timeline');
    if (!container) return;

    CONFIG.education.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'timeline-item reveal';
        el.style.transitionDelay = `${index * 100}ms`;
        el.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <h4 class="timeline-title">${item.title}</h4>
            <div class="timeline-subtitle">${item.institution}</div>
            <p class="timeline-desc">${item.description}</p>
        `;
        container.appendChild(el);
    });
}

function renderCertifications() {
    const container = document.getElementById('certs-list');
    if (!container) return;

    CONFIG.certifications.forEach((cert, index) => {
        const el = document.createElement('div');
        el.className = 'cert-item reveal';
        el.style.transitionDelay = `${index * 100}ms`;
        el.innerHTML = `
            <span class="cert-icon">📜</span>
            <div class="cert-info">
                <div class="cert-name">${cert.name}</div>
                <div class="cert-issuer">${cert.issuer} (${cert.date})</div>
            </div>
        `;
        container.appendChild(el);
    });
}


// ── Project Filtering ──
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category || (category === 'all' && btn.dataset.filter === 'all'));
    });

    // If clicked on active filter again or 'all'
    if (category === 'all') {
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[0].classList.add('active');
    }

    // Filter cards
    cards.forEach((card, index) => {
        const show = category === 'all' || card.dataset.category === category;
        card.style.transitionDelay = `${index * 50}ms`;

        if (show) {
            card.style.display = '';
            requestAnimationFrame(() => {
                card.classList.add('visible');
            });
        } else {
            card.classList.remove('visible');
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}


// ── Project Demo Modal ──
function openProjectDemo(projectId) {
    const project = CONFIG.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const iframe = document.getElementById('project-iframe');
    const title = document.getElementById('modal-title');

    title.textContent = `${project.id}.exe — ${project.name}`;
    iframe.src = project.demoUrl;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    const iframe = document.getElementById('project-iframe');

    modal.classList.remove('open');
    modal.classList.remove('fullscreen');
    document.body.style.overflow = '';

    setTimeout(() => {
        iframe.src = '';
    }, 300);
}

function toggleFullscreen() {
    const modal = document.getElementById('project-modal');
    modal.classList.toggle('fullscreen');
}


// ── Scroll Reveal (Intersection Observer) ──
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate skill bars when visible
                const skillFills = entry.target.querySelectorAll('.skill-fill');
                skillFills.forEach(fill => {
                    const width = fill.dataset.width;
                    setTimeout(() => {
                        fill.style.width = `${width}%`;
                    }, 200);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements
    document.querySelectorAll('.section-title, .project-card, .skill-item, .about-line, .reveal').forEach(el => {
        observer.observe(el);
    });
}


// ── Navigation ──
function initNavigation() {
    const nav = document.getElementById('main-nav');
    const toggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.nav-link, .mobile-link');
    const scrollIndicator = document.getElementById('scroll-indicator');

    // Scroll effect on nav
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);

        // Hide scroll indicator
        if (scrollIndicator) {
            scrollIndicator.classList.toggle('hidden', window.scrollY > 200);
        }

        // Update active link based on scroll position
        updateActiveLink();
    });

    // Mobile toggle
    if (toggle) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });
    }

    // Link clicks
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Close mobile menu
            if (toggle) toggle.classList.remove('active');
            if (mobileMenu) mobileMenu.classList.remove('open');
        });
    });
}


function updateActiveLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === current);
    });
}




// ── Modal Event Listeners ──
function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    const fullscreenBtn = document.getElementById('modal-fullscreen');

    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
    if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Close on backdrop click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProjectModal();
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProjectModal();
    });
}


// ── Smooth Scroll for Anchor Links ──
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}


// ── Initialize Everything ──
document.addEventListener('DOMContentLoaded', () => {
    // Start matrix rain
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
        const matrix = new MatrixRain(canvas);
        matrix.start();
    }

    // Hero typing effect
    typeHeroCommand();

    // Render dynamic content
    renderSkills();
    renderSocialLinks();
    renderProjects();
    renderExperience();
    renderEducation();
    renderCertifications();

    // Initialize interactions
    initNavigation();
    initScrollReveal();
    initModal();
    initSmoothScroll();

    // Initial filter (show all)
    setTimeout(() => {
        filterProjects('all');
    }, 100);
});
