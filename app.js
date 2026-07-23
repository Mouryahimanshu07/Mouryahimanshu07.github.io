/* ==========================================================================
   HIMANSHU MOURYA PORTFOLIO - APPLICATION LOGIC & INTERACTIVE AI FEATURES
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Clear legacy localStorage from early template runs if present
    if (localStorage.getItem('antigravity_profile')) {
        localStorage.removeItem('antigravity_profile');
    }

    // ----------------------------------------------------------------------
    // 1. Profile State & Himanshu's Exact Resume Data
    // ----------------------------------------------------------------------
    const defaultProfile = {
        fullName: 'Himanshu Mourya',
        title: 'AI & Machine Learning Engineer | B.Tech CSE',
        status: 'B.Tech CSE Student @ J K Institute (CGPA: 8.87)',
        heroBio: 'Computer Science Engineering undergraduate passionate about Artificial Intelligence, Large Language Models (LLMs), LangChain, Computer Vision, and Deep Learning. Experienced in developing medical diagnostics AI and real-time emotion recognition systems.',
        aboutHeading: 'Driven by Machine Learning, Natural Language Processing & Computer Vision',
        aboutText1: "I am a Computer Science undergraduate specializing in state-of-the-art AI architectures. My work spans building Gemini-powered conversational QA agents, medical image diagnosis using Deep Transfer Learning CNNs, and real-time computer vision sentiment systems.",
        aboutText2: 'I actively solve real-world problems by deploying production ML models on Hugging Face, Kaggle, Gradio, and Streamlit. I focus on high predictive accuracy, model efficiency, hyperparameter tuning, and seamless document retrieval.',
        email: 'himanshumourya8057@gmail.com',
        phone: '+91-8057186162',
        location: 'Prayagraj, Uttar Pradesh, India',
        avatarUrl: 'assets/avatar.jpg',
        accentTheme: 'cyan',
        github: 'https://github.com/Mouryahimanshu',
        linkedin: 'https://www.linkedin.com/in/mourya-himanshu'
    };

    const skillsData = [
        // Languages
        { name: 'Python', category: 'languages', level: 95, icon: 'fa-brands fa-python', tag: 'Expert' },
        { name: 'C++', category: 'languages', level: 85, icon: 'fa-solid fa-code', tag: 'Advanced' },
        { name: 'C Language', category: 'languages', level: 80, icon: 'fa-solid fa-terminal', tag: 'Intermediate' },
        { name: 'HTML / CSS', category: 'languages', level: 88, icon: 'fa-brands fa-html5', tag: 'Advanced' },
        // Advanced Libraries & LLMs
        { name: 'LangChain & LLMs', category: 'adv-lib', level: 92, icon: 'fa-solid fa-brain', tag: 'Expert' },
        { name: 'Gemini API & Prompt Eng.', category: 'adv-lib', level: 94, icon: 'fa-solid fa-sparkles', tag: 'Expert' },
        { name: 'TensorFlow (Keras)', category: 'adv-lib', level: 88, icon: 'fa-solid fa-cubes', tag: 'Advanced' },
        { name: 'Scikit-learn', category: 'adv-lib', level: 90, icon: 'fa-solid fa-microchip', tag: 'Advanced' },
        { name: 'NLTK & NLP', category: 'adv-lib', level: 86, icon: 'fa-solid fa-language', tag: 'Advanced' },
        { name: 'Scapy', category: 'adv-lib', level: 75, icon: 'fa-solid fa-network-wired', tag: 'Intermediate' },
        // Data Science & CV
        { name: 'OpenCV & Computer Vision', category: 'ds-cv', level: 92, icon: 'fa-solid fa-eye', tag: 'Expert' },
        { name: 'Pandas & NumPy', category: 'ds-cv', level: 95, icon: 'fa-solid fa-table', tag: 'Expert' },
        { name: 'Matplotlib & Seaborn', category: 'ds-cv', level: 90, icon: 'fa-solid fa-chart-line', tag: 'Advanced' },
        // Tools & Platforms
        { name: 'Jupyter & Google Colab', category: 'tools', level: 95, icon: 'fa-solid fa-book-open', tag: 'Expert' },
        { name: 'Gradio & Streamlit', category: 'tools', level: 90, icon: 'fa-solid fa-rocket', tag: 'Advanced' },
        { name: 'VS Code & Linux/Windows', category: 'tools', level: 92, icon: 'fa-solid fa-laptop-code', tag: 'Expert' }
    ];

    const projectsData = [
        {
            id: 'proj-gemini-qa',
            title: 'QA-System-Using-Gemini',
            category: 'ai',
            image: 'assets/project1.jpg',
            shortDesc: 'AI-powered Question Answering system using Google Gemini API & LangChain for context-aware responses and semantic document search.',
            fullDesc: 'Developed an intelligent QA application leveraging Google Gemini and LangChain. Implemented semantic search and NLP-based retrieval techniques to improve query understanding and answer precision over custom datasets. Built scalable Python backend workflows with prompt engineering.',
            techTags: ['Python', 'LangChain', 'Gemini API', 'NLP', 'Semantic Search'],
            features: [
                'Context-aware conversational intelligence with Google Gemini',
                'Semantic search & NLP retrieval from custom datasets',
                'Prompt engineering pipelines for accurate outputs',
                'Scalable Python backend workflow'
            ],
            liveUrl: 'https://github.com/Mouryahimanshu/QA_system_using_gemini',
            githubUrl: 'https://github.com/Mouryahimanshu/QA_system_using_gemini'
        },
        {
            id: 'proj-bone-age',
            title: 'Bone-Age-Prediction',
            category: 'cv',
            image: 'assets/project2.jpg',
            shortDesc: 'Gradio-powered medical AI application predicting bone age from X-ray hand scans using fine-tuned ImageNet CNN models.',
            fullDesc: 'Built a Gradio-powered application that predicts bone age from X-ray scans, streamlining workflow for 50+ medical professionals and reducing analysis time by 40%. Applied transfer learning by fine-tuning ImageNet models, reducing training time by 40% while maintaining high predictive accuracy.',
            techTags: ['CNNs', 'Transfer Learning', 'ImageNet', 'Gradio', 'TensorFlow'],
            features: [
                'Predicts bone age from X-ray scans with high confidence',
                'Streamlined diagnostic workflow for 50+ medical professionals',
                'Evaluated 8 unique models monitoring loss & validation loss',
                '40% reduction in training duration via transfer learning'
            ],
            liveUrl: 'https://github.com/Mouryahimanshu/Bone-Age-Prediction',
            githubUrl: 'https://github.com/Mouryahimanshu/Bone-Age-Prediction'
        },
        {
            id: 'proj-emotion-detection',
            title: 'Realtime-Emotion-Detection',
            category: 'cv',
            image: 'assets/project3.jpg',
            shortDesc: 'Real-time computer vision system evaluating 7 facial human emotions using OpenCV and Deep Convolutional Neural Networks.',
            fullDesc: 'Implemented deep learning models capable of detecting seven human emotions: Angry, Disgust, Fear, Happy, Neutral, Sad, and Surprise. Developed a real-time emotion recognition system using OpenCV to analyze 5,000+ video clips for customer engagement insights. Evaluated model performance using Accuracy, Precision, Recall, and F1-Score metrics.',
            techTags: ['CNNs', 'OpenCV', 'Deep Learning', 'Computer Vision', 'Python'],
            features: [
                'Classifies 7 emotions: Angry, Disgust, Fear, Happy, Neutral, Sad, Surprise',
                'Analyzed 5,000+ video clips for customer engagement insights',
                'Evaluated via Accuracy, Precision, Recall, and F1-Score metrics',
                'Low-latency facial video processing with OpenCV'
            ],
            liveUrl: 'https://github.com/Mouryahimanshu/Realtime-Emotion-Detection',
            githubUrl: 'https://github.com/Mouryahimanshu/Realtime-Emotion-Detection'
        },
        {
            id: 'proj-heart-disease',
            title: 'Heart-disease-Detection',
            category: 'ml',
            image: 'assets/project4.jpg',
            shortDesc: 'Predictive diagnostic Machine Learning application using KNN, RandomForestClassifier, and LogisticRegression with hyperparameter tuning.',
            fullDesc: 'Developed and optimized machine learning models using KNN, RandomForestClassifier, and LogisticRegression. Applied hyperparameter tuning techniques to improve model performance and usability across multiple teams. Performed comparative analysis using Classification Reports and Confusion Matrix metrics to identify the best-performing model.',
            techTags: ['Scikit-learn', 'KNN', 'RandomForest', 'LogisticRegression', 'Python'],
            features: [
                'Optimized cardiac prediction using KNN, RandomForest & LogisticRegression',
                'Systematic hyperparameter tuning for maximum accuracy',
                'Comparative evaluation using Confusion Matrices and ROC curves',
                'Identified best performing model via Classification Reports'
            ],
            liveUrl: 'https://github.com/Mouryahimanshu/Heart_disease-Classification-using-machine-learning',
            githubUrl: 'https://github.com/Mouryahimanshu/Heart_disease-Classification-using-machine-learning'
        }
    ];

    let currentProfile = JSON.parse(localStorage.getItem('mourya_profile')) || defaultProfile;

    // Force exact URLs into state
    currentProfile.github = 'https://github.com/Mouryahimanshu';
    currentProfile.linkedin = 'https://www.linkedin.com/in/mourya-himanshu';

    // ----------------------------------------------------------------------
    // 2. DOM Updates & Render Functions
    // ----------------------------------------------------------------------
    function applyProfileData(profile) {
        document.getElementById('page-title').textContent = `${profile.fullName} | AI & ML Engineer`;
        document.getElementById('hero-display-name').textContent = profile.fullName;
        document.getElementById('hero-display-bio').textContent = profile.heroBio;
        document.getElementById('display-status').textContent = profile.status;
        document.getElementById('about-display-heading').textContent = profile.aboutHeading;
        document.getElementById('about-display-text1').textContent = profile.aboutText1;
        document.getElementById('about-display-text2').textContent = profile.aboutText2;

        document.getElementById('contact-display-email').textContent = profile.email;
        document.getElementById('contact-display-email').href = `mailto:${profile.email}`;
        document.getElementById('contact-display-location').textContent = profile.location;

        if (profile.avatarUrl) {
            document.getElementById('hero-avatar-img').src = profile.avatarUrl;
        }

        const nameParts = profile.fullName.split(' ');
        const firstName = nameParts[0] || profile.fullName;
        const lastName = nameParts.slice(1).join(' ') || '';

        const brandHTML = `${firstName}<span class="text-accent">${lastName ? ' ' + lastName : ''}</span>`;
        document.getElementById('nav-brand-name').innerHTML = brandHTML;
        document.getElementById('footer-brand-name').innerHTML = brandHTML;

        // Social Links
        if (document.getElementById('hero-github-link')) document.getElementById('hero-github-link').href = profile.github;
        if (document.getElementById('hero-linkedin-link')) document.getElementById('hero-linkedin-link').href = profile.linkedin;

        applyAccentTheme(profile.accentTheme || 'cyan');
    }

    function applyAccentTheme(themeName) {
        document.documentElement.setAttribute('data-accent-theme', themeName);
        document.body.setAttribute('data-accent-theme', themeName);

        document.querySelectorAll('.color-opt-btn').forEach(btn => {
            if (btn.dataset.accent === themeName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Render Skills Matrix
    function renderSkills(filterCategory = 'all') {
        const container = document.getElementById('skills-grid-container');
        container.innerHTML = '';

        const filtered = filterCategory === 'all'
            ? skillsData
            : skillsData.filter(s => s.category === filterCategory);

        filtered.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'skill-card glass-card';
            card.innerHTML = `
                <div class="skill-header">
                    <div class="skill-title-box">
                        <i class="${skill.icon} skill-icon"></i>
                        <span class="skill-name">${skill.name}</span>
                    </div>
                    <span class="skill-percentage">${skill.level}%</span>
                </div>
                <div class="skill-progress-bar">
                    <div class="skill-progress-fill" style="width: ${skill.level}%"></div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Render Projects Grid with Filter Support
    function renderProjects(filterCategory = 'all') {
        const container = document.getElementById('projects-grid-container');
        container.innerHTML = '';

        const filtered = filterCategory === 'all'
            ? projectsData
            : projectsData.filter(p => p.category === filterCategory);

        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card glass-card';
            card.innerHTML = `
                <div class="project-img-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="project-img">
                    <span class="project-badge">${project.category.toUpperCase()}</span>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.shortDesc}</p>
                    <div class="project-tech-chips">
                        ${project.techTags.map(t => `<span class="tech-chip">${t}</span>`).join('')}
                    </div>
                    <div class="project-actions">
                        <button class="btn btn-outline btn-sm btn-view-details" data-id="${project.id}">
                            <i class="fa-solid fa-circle-info"></i> Architecture
                        </button>
                        <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                            <i class="fa-brands fa-github"></i> Repository
                        </a>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        document.querySelectorAll('.btn-view-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projId = e.currentTarget.dataset.id;
                openProjectModal(projId);
            });
        });
    }

    function openProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        const modalTitle = document.getElementById('proj-modal-title');
        const modalBody = document.getElementById('proj-modal-body');

        modalTitle.textContent = project.title;
        modalBody.innerHTML = `
            <div class="project-modal-preview">
                <img src="${project.image}" alt="${project.title}" style="width:100%; height: 260px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
                <p style="font-size: 1.05rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.7;">
                    ${project.fullDesc}
                </p>
                <h4 style="font-family: var(--font-heading); margin-bottom: 0.8rem;"><i class="fa-solid fa-check-circle text-accent"></i> Key Features & Accomplishments:</h4>
                <ul style="margin-bottom: 1.5rem; padding-left: 1.2rem; color: var(--text-secondary); display: grid; gap: 0.5rem;">
                    ${project.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <h4 style="font-family: var(--font-heading); margin-bottom: 0.8rem;"><i class="fa-solid fa-layer-group text-accent"></i> Technologies Used:</h4>
                <div class="project-tech-chips" style="margin-bottom: 2rem;">
                    ${project.techTags.map(t => `<span class="tech-chip" style="font-size: 0.85rem; padding: 0.35rem 0.85rem;">${t}</span>`).join('')}
                </div>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="${project.githubUrl}" target="_blank" class="btn btn-primary"><i class="fa-brands fa-github"></i> View GitHub Code</a>
                </div>
            </div>
        `;

        document.getElementById('project-modal').classList.add('active');
    }

    // ----------------------------------------------------------------------
    // 3. Typing Effect
    // ----------------------------------------------------------------------
    const typingRoles = [
        'AI Systems & LLMs',
        'LangChain & Gemini API',
        'CNNs & Computer Vision',
        'OpenCV Sentiment Models'
    ];
    const typingElement = document.getElementById('typing-text');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = typingRoles[roleIndex];
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 90;
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            speed = 1800;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % typingRoles.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    // ----------------------------------------------------------------------
    // 4. Interactive AI Lab Simulators
    // ----------------------------------------------------------------------

    // X-Ray Bone Age Simulator
    const scanData = {
        child: { name: 'Child Hand Scan sample #1', age: '6.2 Years', conf: '96.4%' },
        teen: { name: 'Teen Hand Scan sample #2', age: '14.5 Years', conf: '94.8%' },
        adult: { name: 'Adult Hand Scan sample #3', age: '21.0 Years', conf: '98.2%' }
    };

    document.querySelectorAll('.picker-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.picker-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const scanKey = e.currentTarget.dataset.scan;
            const data = scanData[scanKey];

            document.getElementById('scan-name').textContent = data.name;
            document.getElementById('pred-age').textContent = data.age;
            document.getElementById('pred-confidence').textContent = data.conf;
        });
    });

    document.getElementById('btn-run-xray-sim').addEventListener('click', () => {
        const btn = document.getElementById('btn-run-xray-sim');
        const heatmap = document.getElementById('scan-heatmap');
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Running CNN Transfer Learning...`;
        heatmap.style.opacity = '1';

        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = `<i class="fa-solid fa-play"></i> Run Inference Simulation`;
            showToast('Bone Age Inference completed with 96.4% accuracy!', 'success');
        }, 1200);
    });

    // 7-Emotion Simulator (all 7 emotions from resume)
    const emotionScores = {
        Happy:   { Happy: 98, Surprise: 12, Sad: 2,  Angry: 1,  Neutral: 5,  Disgust: 1, Fear: 2  },
        Surprise:{ Happy: 25, Surprise: 94, Sad: 4,  Angry: 2,  Neutral: 10, Disgust: 3, Fear: 18 },
        Sad:     { Happy: 1,  Surprise: 2,  Sad: 92, Angry: 18, Neutral: 15, Disgust: 5, Fear: 12 },
        Angry:   { Happy: 1,  Surprise: 5,  Sad: 22, Angry: 95, Neutral: 8,  Disgust: 20, Fear: 6 },
        Neutral: { Happy: 8,  Surprise: 6,  Sad: 10, Angry: 4,  Neutral: 96, Disgust: 2, Fear: 3  },
        Disgust: { Happy: 2,  Surprise: 4,  Sad: 12, Angry: 25, Neutral: 6,  Disgust: 93, Fear: 8 },
        Fear:    { Happy: 3,  Surprise: 28, Sad: 20, Angry: 8,  Neutral: 5,  Disgust: 10, Fear: 91 }
    };

    const emotionEmoji = {
        Happy: '😊', Surprise: '😲', Sad: '😢', Angry: '😡',
        Neutral: '😐', Disgust: '🤢', Fear: '😨'
    };

    function renderEmotionBars(emoName) {
        const container = document.getElementById('emo-bars-container');
        const scores = emotionScores[emoName] || emotionScores.Happy;
        container.innerHTML = '';

        // Sort by score descending for professional look
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

        sorted.forEach(([emo, val]) => {
            const row = document.createElement('div');
            row.className = 'emo-bar-row';
            row.innerHTML = `
                <div class="emo-bar-label">
                    <span>${emotionEmoji[emo] || ''} ${emo}</span>
                    <span>${val}%</span>
                </div>
                <div class="emo-bar-bg">
                    <div class="emo-bar-fill" style="width: ${val}%"></div>
                </div>
            `;
            container.appendChild(row);
        });

        document.getElementById('emo-bbox-text').textContent = `${emoName.toUpperCase()} (${scores[emoName]}%)`;
    }

    document.querySelectorAll('.emo-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.emo-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderEmotionBars(e.currentTarget.dataset.emo);
        });
    });

    renderEmotionBars('Happy');

    // ----------------------------------------------------------------------
    // 5. Interactive CLI Terminal (`mourya-cli`)
    // ----------------------------------------------------------------------
    const terminalInput = document.getElementById('terminal-input');
    const terminalBody = document.getElementById('terminal-body');

    const cliCommands = {
        help: () => `Available commands:<br>
            - <span class="text-cyan">skills</span>: List technical skills & libraries<br>
            - <span class="text-cyan">projects</span>: Display AI & ML project overview<br>
            - <span class="text-cyan">education</span>: View college degree & CGPA details<br>
            - <span class="text-cyan">contact</span>: Show email & phone number<br>
            - <span class="text-cyan">run gemini_qa.py</span>: Execute Gemini Q&A demo code<br>
            - <span class="text-cyan">run bone_age.py</span>: Execute Bone Age prediction inference<br>
            - <span class="text-cyan">run emotion.py</span>: Execute OpenCV 7-emotion detection<br>
            - <span class="text-cyan">clear</span>: Clear terminal console`,
        skills: () => `<span class="text-green">Languages:</span> Python, C++, C, HTML/CSS<br>
            <span class="text-cyan">Advance Library:</span> Tensorflow (Keras), Scikit-learn, Scapy, NLTK, LangChain, LLMs<br>
            <span class="text-amber">Library:</span> OpenCV, Pandas, NumPy, Matplotlib, Seaborn<br>
            <span class="text-violet">Tools:</span> Jupyter Notebook, Google Colab, Gradio, VS Code`,
        projects: () => `1. <strong>QA-System-Using-Gemini</strong> [Python, LangChain, Gemini API, NLP]<br>
            2. <strong>Bone-Age-Prediction</strong> [CNNs, Transfer Learning, Gradio]<br>
            3. <strong>Realtime-Emotion-Detection</strong> [CNNs, OpenCV 7-Emotions]<br>
            4. <strong>Heart-disease-Detection</strong> [KNN, RandomForest, LogisticRegression]`,
        education: () => `<strong>B.Tech - Computer Science and Engineering</strong><br>
            J K Institute of Applied Physics and Technology, Prayagraj<br>
            CGPA: <span class="text-green">8.87</span> (2022 – 2026)<br><br>
            <strong>Intermediate (12th Grade)</strong><br>
            GuruNanak Inter College, Lakhimpur(Kheri) - <span class="text-cyan">85.40%</span> (2019 - 2021)`,
        contact: () => `Email: <span class="text-cyan">himanshumourya8057@gmail.com</span><br>
            Phone: <span class="text-green">+91-8057186162</span><br>
            LinkedIn: <a href="https://www.linkedin.com/in/mourya-himanshu" target="_blank" class="text-cyan">linkedin.com/in/mourya-himanshu</a><br>
            GitHub: <a href="https://github.com/Mouryahimanshu" target="_blank" class="text-green">github.com/Mouryahimanshu</a>`,
        'run gemini_qa.py': () => `<span class="text-amber">[EXEC] Initializing LangChain + Gemini API...</span><br>
            > Loading vector store embeddings... [OK]<br>
            > Query: "Explain Himanshu's AI expertise"<br>
            > Answer: "Himanshu Mourya is a CS student with 8.56 CGPA specializing in Gemini API, OpenCV, and TensorFlow models."`,
        'run bone_age.py': () => `<span class="text-amber">[EXEC] Loading Fine-Tuned ImageNet Model...</span><br>
            > Evaluating hand scan radiograph...<br>
            > Predicted Bone Age: <span class="text-green">6.2 Years (Confidence: 96.4%)</span>`,
        'run emotion.py': () => `<span class="text-amber">[EXEC] Initializing OpenCV Video Stream...</span><br>
            > Face mesh detected. Evaluating 7 emotion states...<br>
            > Classified: <span class="text-cyan">HAPPY (98.0%)</span>`
    };

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = terminalInput.value.trim().toLowerCase();
            terminalInput.value = '';

            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.innerHTML = `<span class="prompt-symbol">himanshu@ai:~$</span> ${cmd}`;
            terminalBody.appendChild(line);

            if (cmd === 'clear') {
                terminalBody.innerHTML = '';
                return;
            }

            const output = document.createElement('div');
            output.className = 'terminal-line';

            if (cliCommands[cmd]) {
                output.innerHTML = cliCommands[cmd]();
            } else if (cmd !== '') {
                output.innerHTML = `<span class="text-rose">Command not found: '${cmd}'. Type 'help' for options.</span>`;
            }

            terminalBody.appendChild(output);
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });

    // ----------------------------------------------------------------------
    // 6. Interactive Gemini AI Q&A Modal
    // ----------------------------------------------------------------------
    const aiModal = document.getElementById('ai-chat-modal');
    const openAiBtn = document.getElementById('btn-open-ai-chat');
    const drawerAiBtn = document.getElementById('drawer-btn-ai');
    const closeAiBtn = document.getElementById('btn-close-ai-chat');
    const aiInput = document.getElementById('ai-chat-input');
    const aiSendBtn = document.getElementById('btn-send-ai-msg');
    const aiMessages = document.getElementById('ai-chat-messages');

    openAiBtn.addEventListener('click', () => aiModal.classList.add('active'));
    drawerAiBtn.addEventListener('click', () => {
        document.getElementById('mobile-drawer').classList.remove('open');
        aiModal.classList.add('active');
    });
    closeAiBtn.addEventListener('click', () => aiModal.classList.remove('active'));

    const aiKnowledge = [
        { keywords: ['project', 'gemini', 'work', 'build'], answer: "Himanshu built 4 core projects: 1) QA-System-Using-Gemini (LangChain & Gemini API), 2) Bone-Age-Prediction (CNN transfer learning on X-rays), 3) Realtime-Emotion-Detection (OpenCV 7-emotions), 4) Heart-disease-Detection (KNN, RandomForest)." },
        { keywords: ['bone', 'age', 'xray', 'medical'], answer: "Himanshu's Bone Age Prediction app uses fine-tuned ImageNet CNN models to predict bone age from hand X-rays. It streamlined diagnostic workflow for 50+ medical professionals and reduced training time by 40%!" },
        { keywords: ['cgpa', 'college', 'education', 'marks', 'degree', 'school'], answer: "Himanshu is pursuing his B.Tech in Computer Science & Engineering at J K Institute of Applied Physics and Technology (Prayagraj) with a CGPA of 8.87 (2022–2026). He scored 85.40% in Intermediate at GuruNanak Inter College." },
        { keywords: ['skill', 'python', 'tools', 'stack', 'library'], answer: "Himanshu's stack includes Python, C++, C, TensorFlow (Keras), Scikit-learn, LangChain, LLMs, OpenCV, Pandas, NumPy, NLTK, Scapy, Gradio, Streamlit, Jupyter, Google Colab, and Linux." },
        { keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'whatsapp', 'github', 'linkedin'], answer: "You can reach Himanshu via email at himanshumourya8057@gmail.com, phone at +91-8057186162, GitHub at github.com/Mouryahimanshu, or LinkedIn at linkedin.com/in/mourya-himanshu." }
    ];

    function handleAiChat() {
        const query = aiInput.value.trim();
        if (!query) return;

        const userDiv = document.createElement('div');
        userDiv.className = 'chat-msg user-msg';
        userDiv.innerHTML = `<div class="msg-avatar"><i class="fa-solid fa-user"></i></div><div class="msg-text">${query}</div>`;
        aiMessages.appendChild(userDiv);
        aiInput.value = '';
        aiMessages.scrollTop = aiMessages.scrollHeight;

        setTimeout(() => {
            let matchedAnswer = "Himanshu Mourya is a Computer Science Engineer (CGPA 8.87, 2022–2026) specializing in LangChain, Gemini API, TensorFlow, and OpenCV. Ask me about his projects, skills, or contact info!";
            const lowerQ = query.toLowerCase();

            for (const item of aiKnowledge) {
                if (item.keywords.some(kw => lowerQ.includes(kw))) {
                    matchedAnswer = item.answer;
                    break;
                }
            }

            const botDiv = document.createElement('div');
            botDiv.className = 'chat-msg bot-msg';
            botDiv.innerHTML = `<div class="msg-avatar"><i class="fa-solid fa-robot"></i></div><div class="msg-text">${matchedAnswer}</div>`;
            aiMessages.appendChild(botDiv);
            aiMessages.scrollTop = aiMessages.scrollHeight;
        }, 500);
    }

    aiSendBtn.addEventListener('click', handleAiChat);
    aiInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleAiChat(); });

    document.querySelectorAll('.prompt-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            aiInput.value = e.currentTarget.dataset.q;
            handleAiChat();
        });
    });

    // ----------------------------------------------------------------------
    // 7. Interactive Canvas Physics Engine (Neural Nodes)
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('neural-canvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const numParticles = Math.min(Math.floor(width / 22), 60);

    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            radius: Math.random() * 2 + 1
        });
    }

    function drawNeuralCanvas() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.5)';
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 130) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(drawNeuralCanvas);
    }

    drawNeuralCanvas();

    // ----------------------------------------------------------------------
    // 8. General Interactions, Resume Modal & Toast
    // ----------------------------------------------------------------------

    // Resume Modal Handler
    const resumeModal = document.getElementById('resume-modal');
    const quickCvBtn = document.getElementById('btn-quick-cv');
    const closeResumeBtn = document.getElementById('btn-close-resume-modal');

    if (quickCvBtn) {
        quickCvBtn.addEventListener('click', () => {
            resumeModal.classList.add('active');
        });
    }
    if (closeResumeBtn) {
        closeResumeBtn.addEventListener('click', () => {
            resumeModal.classList.remove('active');
        });
    }

    // Theme Toggle
    const themeToggleBtn = document.getElementById('btn-theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const savedTheme = localStorage.getItem('mourya_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('mourya_theme', next);
        themeIcon.className = next === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
        showToast(`Theme switched to ${next} mode`, 'info');
    });

    // Mobile Drawer
    document.getElementById('btn-mobile-menu').addEventListener('click', () => {
        document.getElementById('mobile-drawer').classList.add('open');
    });
    document.getElementById('btn-close-drawer').addEventListener('click', () => {
        document.getElementById('mobile-drawer').classList.remove('open');
    });

    // Profile Editor
    const editorModal = document.getElementById('editor-modal');
    document.getElementById('btn-open-editor').addEventListener('click', () => {
        document.getElementById('edit-full-name').value = currentProfile.fullName;
        document.getElementById('edit-title').value = currentProfile.title;
        document.getElementById('edit-hero-bio').value = currentProfile.heroBio;
        document.getElementById('edit-about-text').value = currentProfile.aboutText1;
        document.getElementById('edit-email').value = currentProfile.email;
        document.getElementById('edit-location').value = currentProfile.location;
        document.getElementById('edit-status').value = currentProfile.status;
        document.getElementById('edit-avatar-url').value = currentProfile.avatarUrl;
        editorModal.classList.add('active');
    });
    document.getElementById('btn-close-editor').addEventListener('click', () => editorModal.classList.remove('active'));

    document.getElementById('editor-form').addEventListener('submit', (e) => {
        e.preventDefault();
        currentProfile.fullName = document.getElementById('edit-full-name').value.trim();
        currentProfile.title = document.getElementById('edit-title').value.trim();
        currentProfile.heroBio = document.getElementById('edit-hero-bio').value.trim();
        currentProfile.aboutText1 = document.getElementById('edit-about-text').value.trim();
        currentProfile.email = document.getElementById('edit-email').value.trim();
        currentProfile.location = document.getElementById('edit-location').value.trim();
        currentProfile.status = document.getElementById('edit-status').value.trim();
        currentProfile.avatarUrl = document.getElementById('edit-avatar-url').value.trim();

        localStorage.setItem('mourya_profile', JSON.stringify(currentProfile));
        applyProfileData(currentProfile);
        editorModal.classList.remove('active');
        showToast('Profile data saved!', 'success');
    });

    document.getElementById('btn-reset-profile').addEventListener('click', () => {
        currentProfile = { ...defaultProfile };
        localStorage.removeItem('mourya_profile');
        applyProfileData(currentProfile);
        editorModal.classList.remove('active');
        showToast('Reset to default profile.', 'info');
    });

    // Accent Color Palette Switcher (live preview in editor)
    document.querySelectorAll('.color-opt-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const accent = e.currentTarget.dataset.accent;
            currentProfile.accentTheme = accent;
            applyAccentTheme(accent);
            showToast(`Accent color switched to ${accent}!`, 'info');
        });
    });

    document.getElementById('btn-close-project-modal').addEventListener('click', () => {
        document.getElementById('project-modal').classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === editorModal) editorModal.classList.remove('active');
        if (e.target === aiModal) aiModal.classList.remove('active');
        if (e.target === resumeModal) resumeModal.classList.remove('active');
        if (e.target === document.getElementById('project-modal')) {
            document.getElementById('project-modal').classList.remove('active');
        }
    });

    // Copy Email
    document.getElementById('btn-copy-email').addEventListener('click', () => {
        navigator.clipboard.writeText(currentProfile.email);
        showToast('Email address copied to clipboard!', 'success');
    });

    // Contact Form Submit — Multi-Provider Engine (Web3Forms + FormSubmit + mailto fallback)
    document.getElementById('contact-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('btn-submit-contact');
        const senderName = document.getElementById('contact-name').value.trim();
        const senderEmail = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;

        let sentSuccess = false;

        // Provider 1: Web3Forms
        try {
            const res1 = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    access_key: '22926a1c-c883-4261-b8d4-67ad89d4bd85',
                    name: senderName,
                    email: senderEmail,
                    subject: `[Portfolio Inquiry] ${subject}`,
                    message: message,
                    from_name: `${senderName} via Portfolio`
                })
            });
            const data1 = await res1.json();
            if (data1.success) {
                sentSuccess = true;
            }
        } catch (err1) {
            console.warn('Web3Forms provider error:', err1);
        }

        // Provider 2: FormSubmit (if Provider 1 failed)
        if (!sentSuccess) {
            try {
                const res2 = await fetch('https://formsubmit.co/ajax/himanshumourya8057@gmail.com', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        name: senderName,
                        email: senderEmail,
                        _subject: `[Portfolio Inquiry] ${subject}`,
                        message: message
                    })
                });
                const data2 = await res2.json();
                if (data2.success === 'true' || data2.success === true) {
                    sentSuccess = true;
                }
            } catch (err2) {
                console.warn('FormSubmit provider error:', err2);
            }
        }

        if (sentSuccess) {
            e.target.reset();
            btn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Message Sent!`;
            showToast('✅ Message delivered to Himanshu\'s inbox!', 'success');
            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Message via Email`;
            }, 3000);
        } else {
            // Fallback: Direct Mailto
            const mailBody = `Hi Himanshu,\n\n${message}\n\nFrom: ${senderName}\nEmail: ${senderEmail}`;
            const mailtoLink = `mailto:himanshumourya8057@gmail.com?subject=${encodeURIComponent('[Portfolio] ' + subject)}&body=${encodeURIComponent(mailBody)}`;
            window.location.href = mailtoLink;
            btn.disabled = false;
            btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Message via Email`;
            showToast('📩 Opening your email app to send directly...', 'info');
        }
    });

    // Skills Filter Buttons
    document.querySelectorAll('[data-skill-filter]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('[data-skill-filter]').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderSkills(e.currentTarget.dataset.skillFilter);
        });
    });

    // Projects Filter Buttons
    document.querySelectorAll('[data-project-filter]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('[data-project-filter]').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderProjects(e.currentTarget.dataset.projectFilter);
        });
    });

    // Toast Alert Helper
    function showToast(msg, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `<i class="fa-solid fa-circle-info text-accent"></i><span>${msg}</span>`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Init
    applyProfileData(currentProfile);
    renderSkills('all');
    renderProjects('all');
    setTimeout(typeEffect, 500);
});
