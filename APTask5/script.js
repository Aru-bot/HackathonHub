// Enhanced Moving Coding Background
function createMovingCodingBackground() {
    console.log('Creating moving coding background...');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3';
    canvas.style.pointerEvents = 'none';
    
    document.body.appendChild(canvas);
    
    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Enhanced code characters
    const codeChars = '01{}[]()<>/\\|&^%$#@!~`+-=*;:,."\'?';
    const jsKeywords = ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'class', 'import', 'export', 'async', 'await', 'try', 'catch', 'finally', 'switch', 'case', 'break', 'continue', 'throw', 'new', 'this', 'super', 'static', 'public', 'private', 'protected', 'interface', 'type', 'enum', 'namespace', 'module', 'require', 'console', 'log', 'error', 'warn', 'info', 'debug', 'setTimeout', 'setInterval', 'addEventListener', 'querySelector', 'getElementById', 'innerHTML', 'textContent', 'style', 'className', 'classList', 'dataset', 'appendChild', 'removeChild', 'createElement', 'JSON', 'parse', 'stringify', 'localStorage', 'sessionStorage', 'fetch', 'Promise', 'resolve', 'reject', 'then', 'catch', 'finally', 'all', 'race', 'any', 'allSettled'];
    const htmlTags = ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'img', 'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'form', 'input', 'button', 'textarea', 'select', 'option', 'label', 'section', 'article', 'header', 'footer', 'nav', 'aside', 'main', 'canvas', 'svg', 'path', 'circle', 'rect', 'line', 'polygon', 'text', 'g', 'defs', 'clipPath', 'mask', 'filter', 'feGaussianBlur', 'feOffset', 'feMerge', 'feMergeNode', 'feColorMatrix', 'feComponentTransfer', 'feFuncR', 'feFuncG', 'feFuncB', 'feFuncA'];
    const cssProps = ['color', 'background', 'margin', 'padding', 'border', 'display', 'position', 'top', 'left', 'right', 'bottom', 'width', 'height', 'font-size', 'font-weight', 'font-family', 'text-align', 'line-height', 'opacity', 'transform', 'transition', 'animation', 'flex', 'grid', 'justify-content', 'align-items', 'flex-direction', 'flex-wrap', 'order', 'flex-grow', 'flex-shrink', 'flex-basis', 'grid-template-columns', 'grid-template-rows', 'grid-gap', 'grid-area', 'z-index', 'box-shadow', 'border-radius', 'overflow', 'cursor', 'pointer-events', 'user-select', 'visibility', 'opacity', 'filter', 'backdrop-filter', 'clip-path', 'mask', 'gradient', 'linear-gradient', 'radial-gradient', 'conic-gradient', 'repeating-linear-gradient', 'repeating-radial-gradient'];
    
    const allChars = codeChars.split('');
    const allKeywords = [...jsKeywords, ...htmlTags, ...cssProps];
    
    // Rain drops with different types
    const drops = [];
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Initialize drops with different types
    for (let i = 0; i < columns; i++) {
        drops[i] = {
            y: Math.random() * canvas.height,
            speed: 0.5 + Math.random() * 1.5,
            type: Math.random() > 0.7 ? 'keyword' : 'char',
            opacity: 0.3 + Math.random() * 0.7,
            length: Math.random() > 0.8 ? Math.floor(3 + Math.random() * 8) : 1
        };
    }
    
    // Animation function
    function draw() {
        // Semi-transparent background to create fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw drops
        for (let i = 0; i < drops.length; i++) {
            const drop = drops[i];
            
                         if (drop.type === 'keyword') {
                 // Draw keyword
                 const keyword = allKeywords[Math.floor(Math.random() * allKeywords.length)];
                 ctx.fillStyle = `rgba(0, 255, 0, ${drop.opacity * 2})`;
                 ctx.font = `${fontSize}px 'Courier New', monospace`;
                 ctx.fillText(keyword, i * fontSize, drop.y);
                 
                 // Add syntax highlighting effect
                 if (Math.random() > 0.95) {
                     ctx.fillStyle = `rgba(255, 255, 0, ${drop.opacity})`;
                     ctx.fillText(keyword, i * fontSize, drop.y);
                 }
            } else {
                // Draw character sequence
                                 for (let j = 0; j < drop.length; j++) {
                     const char = allChars[Math.floor(Math.random() * allChars.length)];
                     const yPos = drop.y - (j * fontSize);
                     
                     if (yPos > 0) {
                         const opacity = drop.opacity * (1 - j * 0.2) * 2;
                         ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
                         ctx.font = `${fontSize}px 'Courier New', monospace`;
                         ctx.fillText(char, i * fontSize, yPos);
                     }
                 }
            }
            
            // Move drop down
            drop.y += drop.speed;
            
            // Reset drop when it goes off screen
            if (drop.y > canvas.height + (drop.length * fontSize)) {
                drop.y = -drop.length * fontSize;
                drop.type = Math.random() > 0.7 ? 'keyword' : 'char';
                drop.opacity = 0.3 + Math.random() * 0.7;
                drop.length = Math.random() > 0.8 ? Math.floor(3 + Math.random() * 8) : 1;
            }
        }
        
        // Add occasional code blocks
        if (Math.random() > 0.995) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const codeBlock = [
                'function hackathon() {',
                '  const ideas = [];',
                '  ideas.push("AI Project");',
                '  ideas.push("Web App");',
                '  return ideas;',
                '}'
            ];
            
                         ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
            ctx.font = `${fontSize}px 'Courier New', monospace`;
            codeBlock.forEach((line, index) => {
                ctx.fillText(line, x, y + (index * fontSize));
            });
        }
    }
    
    // Start animation
    setInterval(draw, 30);
    
    // Test if background is working
    console.log('Moving coding background started!');
    console.log('Canvas size:', canvas.width, 'x', canvas.height);
    console.log('Number of drops:', drops.length);
}

// Global variables
let currentQuizQuestion = 0;
let quizAnswers = [];
let savedIdeas = JSON.parse(localStorage.getItem('savedIdeas')) || [];
let selectedSkills = new Set();
let selectedTopics = new Set();
let apiIdeas = []; // Store ideas from APIs
let isLoading = false;
let teams = JSON.parse(localStorage.getItem('teams')) || [];
let upcomingHackathons = [];
let timerInterval;

// Skills database
const skillsData = [
    {
        category: "Frontend Development",
        skills: [
            "HTML", "CSS", "JavaScript", "React", "Vue.js", "Angular", "TypeScript", 
            "Sass/SCSS", "Bootstrap", "Tailwind CSS", "Next.js", "Nuxt.js", "Gatsby", 
            "Webpack", "Vite", "Redux", "Vuex", "Zustand", "Styled Components", 
            "Emotion", "Framer Motion", "Three.js", "D3.js", "Chart.js"
        ]
    },
    {
        category: "Backend Development",
        skills: [
            "Node.js", "Python", "Java", "C#", "PHP", "Ruby", "Go", "Rust", 
            "Express.js", "Django", "Flask", "Spring Boot", "FastAPI", "Laravel", 
            "ASP.NET", "Koa.js", "Hapi.js", "NestJS", "Strapi", "Sanity", 
            "GraphQL", "REST APIs", "Microservices", "Serverless", "WebSockets"
        ]
    },
    {
        category: "Database & Cloud",
        skills: [
            "MongoDB", "MySQL", "PostgreSQL", "Firebase", "AWS", "Google Cloud", 
            "Azure", "Redis", "Supabase", "PlanetScale", "Neon", "CockroachDB", 
            "Cassandra", "Elasticsearch", "InfluxDB", "AWS RDS", "AWS DynamoDB", 
            "Google BigQuery", "Azure Cosmos DB", "Docker", "Kubernetes", "Terraform"
        ]
    },
    {
        category: "AI & Data Science",
        skills: [
            "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", 
            "Scikit-learn", "Pandas", "NumPy", "Data Analysis", "Computer Vision", 
            "NLP", "OpenAI API", "Hugging Face", "LangChain", "Streamlit", 
            "Jupyter", "Matplotlib", "Seaborn", "Plotly", "Apache Spark", 
            "Apache Kafka", "MLOps", "AutoML", "Neural Networks", 
            "Reinforcement Learning", "Speech Recognition"
        ]
    },
    {
        category: "Mobile Development",
        skills: [
            "React Native", "Flutter", "Swift", "Kotlin", "Android", "iOS", 
            "Xamarin", "Ionic", "Mobile UI/UX", "Expo", "NativeScript", 
            "Cordova", "PhoneGap", "SwiftUI", "Jetpack Compose", "Firebase Mobile", 
            "Push Notifications", "Mobile Testing", "App Store Optimization"
        ]
    },
    {
        category: "DevOps & Tools",
        skills: [
            "Git", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions", 
            "Linux", "Shell Scripting", "AWS DevOps", "GitLab CI", "CircleCI", 
            "Travis CI", "Ansible", "Chef", "Puppet", "Prometheus", "Grafana", 
            "ELK Stack", "Splunk", "Vagrant", "Terraform", "CloudFormation", 
            "Helm", "Istio", "ArgoCD"
        ]
    },
    {
        category: "Design & UX",
        skills: [
            "UI/UX Design", "Figma", "Adobe XD", "Sketch", "Photoshop", 
            "Illustrator", "Prototyping", "User Research", "Wireframing", 
            "InVision", "Principle", "Framer", "Webflow", "Design Systems", 
            "Accessibility", "Usability Testing", "A/B Testing", "User Personas", 
            "Journey Mapping", "Information Architecture", "Visual Design", 
            "Interaction Design"
        ]
    },
    {
        category: "Blockchain & Web3",
        skills: [
            "Solidity", "Ethereum", "Smart Contracts", "Web3.js", "DeFi", 
            "NFTs", "Blockchain Development", "Cryptocurrency", "Hardhat", 
            "Truffle", "OpenZeppelin", "IPFS", "Polygon", "Binance Smart Chain", 
            "Cardano", "Polkadot", "Cosmos", "MetaMask", "WalletConnect", 
            "DApp Development", "Token Standards", "DAO Development"
        ]
    },
    {
        category: "Game Development",
        skills: [
            "Unity", "Unreal Engine", "C++", "C#", "Game Design", "3D Modeling", 
            "Blender", "Maya", "Game Physics", "Godot", "GameMaker Studio", 
            "Construct", "Phaser.js", "Three.js", "WebGL", "OpenGL", "DirectX", 
            "Vulkan", "Game AI", "Procedural Generation", "Level Design", 
            "Sound Design", "Game Testing"
        ]
    },
    {
        category: "IoT & Hardware",
        skills: [
            "Arduino", "Raspberry Pi", "Embedded Systems", "C/C++", "IoT Protocols", 
            "Sensors", "Hardware Design", "PCB Design", "ESP32", "ESP8266", 
            "MicroPython", "CircuitPython", "MQTT", "CoAP", "LoRaWAN", "Zigbee", 
            "Bluetooth Low Energy", "WiFi", "5G", "Edge Computing", 
            "Firmware Development", "Hardware Testing", "Prototyping"
        ]
    },
    {
        category: "Cybersecurity",
        skills: [
            "Network Security", "Penetration Testing", "Ethical Hacking", 
            "Cryptography", "Security Auditing", "Incident Response", 
            "Security Tools", "Burp Suite", "Wireshark", "Metasploit", "Nmap", 
            "OWASP", "Security Frameworks", "Threat Modeling", 
            "Vulnerability Assessment", "Security Monitoring", "SIEM", 
            "Firewall Configuration", "IDS/IPS", "Security Compliance", 
            "GDPR", "SOC 2", "ISO 27001"
        ]
    },
    {
        category: "Data & Analytics",
        skills: [
            "Data Engineering", "ETL/ELT", "Data Warehousing", "Big Data", 
            "Apache Hadoop", "Apache Spark", "Apache Kafka", "Airflow", "dbt", 
            "Snowflake", "Databricks", "Tableau", "Power BI", "Looker", 
            "Data Visualization", "Business Intelligence", "Data Governance", 
            "Data Quality", "Data Modeling", "SQL Optimization", 
            "Real-time Analytics", "Predictive Analytics"
        ]
    },
    {
        category: "Emerging Technologies",
        skills: [
            "Quantum Computing", "Augmented Reality", "Virtual Reality", 
            "Mixed Reality", "Extended Reality", "5G Networks", "Edge Computing", 
            "Serverless Computing", "Microservices", "API Gateway", 
            "Service Mesh", "Event-Driven Architecture", "Reactive Programming", 
            "Functional Programming", "Low-Code/No-Code", "RPA", "Digital Twins", 
            "Smart Cities", "Autonomous Vehicles", "Robotics"
        ]
    },
    {
        category: "Soft Skills",
        skills: [
            "Project Management", "Team Leadership", "Communication", 
            "Problem Solving", "Agile/Scrum", "Public Speaking", "Mentoring", 
            "Collaboration", "Time Management", "Critical Thinking", 
            "Creativity", "Adaptability", "Emotional Intelligence", 
            "Conflict Resolution", "Negotiation", "Strategic Thinking", 
            "Innovation", "Customer Focus", "Cross-functional Collaboration", 
            "Remote Work", "Cultural Intelligence"
        ]
    }
];

// Topic categories for project ideas
const topicCategories = [
    {
        id: "ai-ml",
        name: "AI & Machine Learning",
        icon: "🤖",
        description: "Build intelligent systems, chatbots, recommendation engines, and predictive analytics",
        color: "#FF6B6B",
        examples: ["ChatGPT-like assistant", "Image recognition app", "Stock prediction tool"]
    },
    {
        id: "web-dev",
        name: "Web Development",
        icon: "🌐",
        description: "Create modern web apps, e-commerce platforms, and interactive websites",
        color: "#4ECDC4",
        examples: ["Social media platform", "E-learning system", "Project management tool"]
    },
    {
        id: "mobile",
        name: "Mobile Apps",
        icon: "📱",
        description: "Develop iOS, Android apps for productivity, entertainment, and social impact",
        color: "#45B7D1",
        examples: ["Fitness tracker", "Language learning app", "Local business finder"]
    },
    {
        id: "blockchain",
        name: "Blockchain & Web3",
        icon: "⛓️",
        description: "Build decentralized apps, smart contracts, and cryptocurrency solutions",
        color: "#96CEB4",
        examples: ["NFT marketplace", "DeFi platform", "Supply chain tracker"]
    },
    {
        id: "iot",
        name: "IoT & Hardware",
        icon: "🔌",
        description: "Connect devices, build smart homes, and create hardware solutions",
        color: "#FFEAA7",
        examples: ["Smart home system", "Environmental monitor", "Agricultural sensor"]
    },
    {
        id: "vr",
        name: "Virtual Reality",
        icon: "🥽",
        description: "Create immersive VR experiences for gaming, education, and therapy",
        color: "#A29BFE",
        examples: ["VR therapy platform", "Educational VR games", "Virtual training simulations"]
    },
    {
        id: "gaming",
        name: "Game Development",
        icon: "🎮",
        description: "Build interactive games, educational platforms, and entertainment apps",
        color: "#FD79A8",
        examples: ["Educational game platform", "AR gaming experiences", "Multiplayer games"]
    },
    {
        id: "healthcare",
        name: "Healthcare",
        icon: "🏥",
        description: "Develop health monitoring, medical diagnosis, and wellness applications",
        color: "#00B894",
        examples: ["Health monitoring app", "Medical diagnosis AI", "Fitness tracking platform"]
    },
    {
        id: "finance",
        name: "Finance",
        icon: "💰",
        description: "Create financial planning, investment, and banking solutions",
        color: "#FDCB6E",
        examples: ["Personal finance tracker", "Investment platform", "DeFi lending system"]
    },
    {
        id: "security",
        name: "Cybersecurity",
        icon: "🔒",
        description: "Build security tools, authentication systems, and privacy protection",
        color: "#E17055",
        examples: ["Phishing awareness platform", "Digital identity system", "Security monitoring tool"]
    },
    {
        id: "education",
        name: "Education & Learning",
        icon: "📚",
        description: "Create learning platforms, educational games, and knowledge sharing tools",
        color: "#81C784",
        examples: ["Online course platform", "Language learning app", "Study group finder"]
    },
    {
        id: "environment",
        name: "Environment & Sustainability",
        icon: "🌱",
        description: "Build climate solutions, sustainability tools, and environmental monitoring",
        color: "#4CAF50",
        examples: ["Carbon footprint tracker", "Recycling guide app", "Environmental sensor network"]
    },
    {
        id: "social",
        name: "Social Impact",
        icon: "🤝",
        description: "Build community platforms, social justice tools, and humanitarian projects",
        color: "#FF7043",
        examples: ["Community forum", "Volunteer matching", "Social cause tracker"]
    },
    {
        id: "productivity",
        name: "Productivity & Tools",
        icon: "⚡",
        description: "Develop productivity apps, automation tools, and utility software",
        color: "#7986CB",
        examples: ["Task management app", "Time tracking tool", "Workflow automation"]
    }
];

// Project ideas database
const projectIdeas = [
    {
        id: 1,
        title: "Phishing Awareness Training Platform",
        description: "An interactive web application that simulates phishing attacks to educate users about online security threats. Features include realistic email simulations, progress tracking, and educational content.",
        difficulty: "intermediate",
        category: "social",
        topics: ["web-dev", "education", "social"],
        skills: ["javascript", "html", "css", "nodejs", "mongodb"],
        socialImpact: true,
        teamRoles: ["Frontend Developer", "Backend Developer", "Security Expert", "UI/UX Designer"],
        learningPath: [
            "Learn HTML/CSS fundamentals",
            "Master JavaScript DOM manipulation",
            "Build Node.js backend with Express",
            "Implement MongoDB database",
            "Add security best practices"
        ],
        githubSearch: "phishing awareness training",
        githubLinks: [
            "https://github.com/OWASP/owasp-phishing-prevention",
            "https://github.com/microsoft/PhishingSimulator",
            "https://github.com/security-awareness/phishing-toolkit"
        ],
        presentationTips: [
            "Demonstrate real phishing scenarios",
            "Show user engagement metrics",
            "Highlight security impact",
            "Discuss scalability potential"
        ]
    },
    {
        id: 2,
        title: "Smart Traffic Management System",
        description: "AI-powered traffic optimization system that analyzes real-time data to reduce congestion and improve commute times. Integrates with traffic cameras and sensors.",
        difficulty: "advanced",
        category: "ai",
        topics: ["ai-ml", "iot", "environment", "social"],
        skills: ["python", "ai", "javascript", "react", "nodejs"],
        socialImpact: true,
        teamRoles: ["AI/ML Engineer", "Full-stack Developer", "Data Scientist", "DevOps Engineer"],
        learningPath: [
            "Learn Python programming",
            "Study machine learning basics",
            "Explore computer vision",
            "Build React frontend",
            "Deploy with cloud services"
        ],
        githubSearch: "traffic management AI",
        githubLinks: [
            "https://github.com/IBM/traffic-prediction",
            "https://github.com/uber/athena",
            "https://github.com/google-research/traffic-prediction"
        ],
        presentationTips: [
            "Show traffic flow improvements",
            "Demonstrate real-time processing",
            "Highlight environmental benefits",
            "Discuss city integration potential"
        ]
    },
    {
        id: 3,
        title: "Volunteer Matching Platform",
        description: "A platform connecting volunteers with organizations in need. Features include skill matching, scheduling, impact tracking, and community building tools.",
        difficulty: "intermediate",
        category: "social",
        topics: ["web-dev", "social", "productivity"],
        skills: ["javascript", "react", "nodejs", "mongodb", "teamwork"],
        socialImpact: true,
        teamRoles: ["Frontend Developer", "Backend Developer", "UI/UX Designer", "Product Manager"],
        learningPath: [
            "Learn React fundamentals",
            "Build RESTful APIs",
            "Implement user authentication",
            "Add real-time features",
            "Deploy to production"
        ],
        githubSearch: "volunteer matching platform",
        githubLinks: [
            "https://github.com/volunteer-match/volunteer-platform",
            "https://github.com/codeforamerica/volunteer-match",
            "https://github.com/opensource/volunteer-connect"
        ],
        presentationTips: [
            "Show user testimonials",
            "Demonstrate matching algorithm",
            "Highlight community impact",
            "Discuss future partnerships"
        ]
    },
    {
        id: 4,
        title: "Personal Finance Tracker",
        description: "A comprehensive financial management app with expense tracking, budgeting, investment monitoring, and financial goal setting features.",
        difficulty: "beginner",
        category: "web",
        skills: ["javascript", "html", "css", "react"],
        socialImpact: false,
        teamRoles: ["Frontend Developer", "UI/UX Designer", "Data Analyst"],
        learningPath: [
            "Learn HTML/CSS basics",
            "Master JavaScript fundamentals",
            "Build React components",
            "Add data visualization",
            "Implement local storage"
        ],
        githubSearch: "personal finance tracker",
        githubLinks: [
            "https://github.com/firefly-iii/firefly-iii",
            "https://github.com/actualbudget/actual",
            "https://github.com/ledger/ledger"
        ],
        presentationTips: [
            "Show user interface mockups",
            "Demonstrate data visualization",
            "Highlight user experience",
            "Discuss monetization strategy"
        ]
    },
    {
        id: 5,
        title: "Eco-Friendly Shopping Assistant",
        description: "A browser extension that helps users make environmentally conscious shopping decisions by analyzing product sustainability and providing eco-friendly alternatives.",
        difficulty: "intermediate",
        category: "social",
        skills: ["javascript", "html", "css", "python", "ai"],
        socialImpact: true,
        teamRoles: ["Browser Extension Developer", "AI Engineer", "Sustainability Expert", "UI Designer"],
        learningPath: [
            "Learn browser extension development",
            "Study web scraping techniques",
            "Implement AI classification",
            "Build user-friendly interface",
            "Deploy to extension stores"
        ],
        githubSearch: "eco-friendly shopping extension",
        githubLinks: [
            "https://github.com/ecosia/ecosia-browser-extension",
            "https://github.com/greenpeace/planet4-browser-extension",
            "https://github.com/ethical-consumer/eco-shopping-extension"
        ],
        presentationTips: [
            "Demonstrate extension functionality",
            "Show environmental impact metrics",
            "Highlight user adoption potential",
            "Discuss partnership opportunities"
        ]
    },
    {
        id: 6,
        title: "Mental Health Support Chatbot",
        description: "An AI-powered chatbot that provides mental health support, resources, and crisis intervention. Includes mood tracking and professional referral system.",
        difficulty: "advanced",
        category: "ai",
        skills: ["python", "ai", "javascript", "react", "nodejs"],
        socialImpact: true,
        teamRoles: ["AI/ML Engineer", "Full-stack Developer", "Mental Health Expert", "UI/UX Designer"],
        learningPath: [
            "Learn natural language processing",
            "Study mental health guidelines",
            "Build conversational AI",
            "Create empathetic interface",
            "Implement safety protocols"
        ],
        githubSearch: "mental health chatbot",
        githubLinks: [
            "https://github.com/microsoft/BotFramework-Emulator",
            "https://github.com/woebot/woebot",
            "https://github.com/mental-health-ai/chatbot-framework"
        ],
        presentationTips: [
            "Show conversation examples",
            "Demonstrate safety features",
            "Highlight accessibility",
            "Discuss clinical partnerships"
        ]
    },
    {
        id: 7,
        title: "AI-Powered Language Learning Platform",
        description: "An intelligent language learning application that uses AI to personalize learning experiences, provide real-time pronunciation feedback, and adapt to individual learning styles. The platform combines speech recognition, natural language processing, and machine learning to create an immersive learning environment that mimics real-world conversations and cultural contexts.",
        detailedDescription: "This AI-powered language learning platform revolutionizes language education through personalized learning experiences. The system assesses user proficiency through adaptive testing and creates customized learning paths that adapt to individual progress. Advanced speech recognition provides real-time pronunciation feedback, while natural language processing enables contextual learning and cultural understanding. Interactive AI tutors engage in realistic conversations, gently correcting mistakes and providing cultural insights. Gamification elements like achievement badges and progress tracking maintain user motivation. The platform supports multiple learning modes including structured lessons, conversation practice, and cultural immersion activities. Mobile apps enable learning anywhere with offline capabilities, while collaborative features connect learners worldwide.",
        difficulty: "advanced",
        category: "ai",
        topics: ["ai-ml", "education", "mobile", "web-dev"],
        skills: ["python", "ai", "javascript", "react", "nodejs", "speech-recognition", "nlp"],
        socialImpact: true,
        teamRoles: ["AI/ML Engineer", "Full-stack Developer", "Mobile Developer", "UI/UX Designer", "Educational Content Creator"],
        learningPath: [
            "Study natural language processing fundamentals",
            "Learn speech recognition and synthesis",
            "Build adaptive learning algorithms",
            "Create interactive conversation interfaces",
            "Implement gamification and progress tracking"
        ],
        githubSearch: "AI language learning platform",
        githubLinks: [
            "https://github.com/openai/whisper",
            "https://github.com/huggingface/transformers",
            "https://github.com/duolingo/duolingo-api"
        ],
        presentationTips: [
            "Demonstrate real-time speech recognition",
            "Show personalized learning paths",
            "Highlight cultural immersion features",
            "Discuss educational impact metrics"
        ]
    },
    {
        id: 8,
        title: "Sustainable Energy Management System",
        description: "A comprehensive IoT-based system that monitors, optimizes, and manages renewable energy sources in smart homes and communities. The platform integrates solar panels, wind turbines, battery storage, and grid connectivity to maximize energy efficiency and reduce carbon footprint.",
        detailedDescription: "This comprehensive IoT-based energy management system optimizes renewable energy usage through intelligent monitoring and control. Real-time sensors track solar panel output, battery levels, and grid connectivity, while AI algorithms predict energy needs and optimize distribution. Smart load balancing shifts energy-intensive tasks to peak renewable generation periods, maximizing clean energy usage. Battery management systems extend battery life and ensure reliable storage. Grid integration allows selling excess energy back to utilities, creating revenue while supporting community sustainability. User-friendly apps provide energy insights and cost savings calculations. The system supports multiple energy sources and includes predictive maintenance, weather integration, and community energy sharing features.",
        difficulty: "advanced",
        category: "iot",
        topics: ["iot", "environment", "ai-ml", "productivity"],
        skills: ["python", "iot", "ai", "javascript", "react", "embedded-systems"],
        socialImpact: true,
        teamRoles: ["IoT Engineer", "AI/ML Engineer", "Full-stack Developer", "Electrical Engineer", "UI/UX Designer"],
        learningPath: [
            "Learn IoT sensor integration and data collection",
            "Study renewable energy systems and grid integration",
            "Build machine learning models for energy prediction",
            "Create real-time monitoring dashboards",
            "Implement smart home automation features"
        ],
        githubSearch: "sustainable energy management IoT",
        githubLinks: [
            "https://github.com/home-assistant/core",
            "https://github.com/openenergymonitor/emonpi",
            "https://github.com/solar-watch/solar-watch"
        ],
        presentationTips: [
            "Show real-time energy monitoring dashboard",
            "Demonstrate predictive energy optimization",
            "Highlight environmental impact metrics",
            "Discuss cost savings and ROI calculations"
        ]
    },
    {
        id: 9,
        title: "Blockchain-Based Supply Chain Transparency Platform",
        description: "A decentralized platform that provides end-to-end transparency in supply chains using blockchain technology. The system tracks products from raw materials to final delivery, ensuring ethical sourcing, reducing fraud, and building consumer trust.",
        detailedDescription: "This blockchain-based platform ensures complete supply chain transparency by tracking products from raw materials to final delivery. Each product receives a unique digital identifier containing origin, manufacturing, and transportation details. Smart contracts automatically execute when conditions are met, ensuring compliance and reducing errors. IoT devices capture real-time data about environmental conditions and handling procedures. Consumer-facing apps allow scanning QR codes to access product information, building trust through transparency. The platform supports multiple industries with industry-specific compliance requirements. Advanced analytics help businesses optimize operations while maintaining transparency. Integration with ERP systems enables seamless adoption without disrupting current operations.",
        difficulty: "advanced",
        category: "blockchain",
        topics: ["blockchain", "productivity", "social", "ai-ml"],
        skills: ["solidity", "javascript", "react", "nodejs", "blockchain", "ai"],
        socialImpact: true,
        teamRoles: ["Blockchain Developer", "Full-stack Developer", "Supply Chain Expert", "UI/UX Designer", "Security Engineer"],
        learningPath: [
            "Learn blockchain fundamentals and smart contract development",
            "Study supply chain management and logistics",
            "Build decentralized applications (DApps)",
            "Implement IoT integration and data collection",
            "Create transparency and compliance features"
        ],
        githubSearch: "blockchain supply chain transparency",
        githubLinks: [
            "https://github.com/ethereum/go-ethereum",
            "https://github.com/hyperledger/fabric",
            "https://github.com/IBM/blockchain-supply-chain"
        ],
        presentationTips: [
            "Demonstrate end-to-end product tracking",
            "Show real-time transparency features",
            "Highlight ethical sourcing verification",
            "Discuss consumer trust and brand value"
        ]
    },
    {
        id: 10,
        title: "AR-Powered Educational Gaming Platform",
        description: "An augmented reality gaming platform that transforms learning into immersive, interactive experiences. The platform combines AR technology with educational content to create engaging learning environments for students of all ages.",
        detailedDescription: "This AR-powered educational gaming platform transforms learning through immersive, interactive experiences that combine physical and digital elements. Students explore historical events through virtual recreations, conduct scientific experiments via AR simulations, and learn complex concepts through 3D visualizations. Adaptive learning algorithms adjust content difficulty based on individual performance and preferences. Gamification elements like achievement systems and progress tracking motivate student engagement. The platform supports multiple subjects with subject-specific AR experiences and collaborative learning environments. Content creation tools allow educators to develop custom AR experiences tailored to their curriculum. The system includes virtual field trips, laboratories, and cultural experiences accessible across various AR devices.",
        difficulty: "advanced",
        category: "gaming",
        topics: ["gaming", "education", "ai-ml", "mobile"],
        skills: ["unity", "csharp", "javascript", "react", "ar", "ai"],
        socialImpact: true,
        teamRoles: ["AR/VR Developer", "Game Developer", "Educational Content Creator", "UI/UX Designer", "AI/ML Engineer"],
        learningPath: [
            "Learn AR development with Unity and ARKit/ARCore",
            "Study educational game design principles",
            "Build interactive 3D content and simulations",
            "Implement adaptive learning algorithms",
            "Create collaborative AR experiences"
        ],
        githubSearch: "AR educational gaming platform",
        githubLinks: [
            "https://github.com/Unity-Technologies/Unity-RenderStreaming",
            "https://github.com/google-ar/arcore-unity-sdk",
            "https://github.com/apple/arkit-starter"
        ],
        presentationTips: [
            "Demonstrate immersive AR learning experiences",
            "Show adaptive learning features",
            "Highlight collaborative AR capabilities",
            "Discuss educational impact and engagement metrics"
        ]
    },
    {
        id: 11,
        title: "AI-Powered Healthcare Diagnosis Assistant",
        description: "An intelligent healthcare platform that assists medical professionals in diagnosis, treatment planning, and patient care using advanced AI algorithms and medical imaging analysis.",
        detailedDescription: "This sophisticated AI-powered healthcare diagnosis assistant represents a breakthrough in medical technology, designed to support healthcare professionals in making more accurate diagnoses, developing effective treatment plans, and improving patient outcomes. The platform leverages advanced machine learning algorithms trained on vast datasets of medical images, patient records, and clinical research to provide intelligent assistance in medical decision-making. The system begins with comprehensive medical image analysis using deep learning models that can detect abnormalities, measure anatomical structures, and identify patterns that might be missed by human observation. These AI models are trained on diverse datasets including X-rays, CT scans, MRI images, ultrasound, and pathology slides, ensuring broad applicability across different medical specialties. The platform includes natural language processing capabilities that can analyze patient symptoms, medical histories, and clinical notes to identify potential diagnoses and suggest relevant tests or treatments. Advanced predictive analytics help healthcare providers anticipate patient deterioration, identify at-risk patients, and optimize treatment timing for better outcomes. The system features comprehensive medical knowledge integration that includes the latest clinical guidelines, drug interactions, treatment protocols, and medical research findings. Real-time decision support provides healthcare professionals with evidence-based recommendations while maintaining their clinical judgment and decision-making authority. The platform includes features for tracking patient progress over time, analyzing treatment effectiveness, and identifying patterns that could inform future care decisions. Advanced security and privacy features ensure compliance with healthcare regulations such as HIPAA while protecting sensitive patient information. The system supports multiple medical specialties including radiology, cardiology, oncology, neurology, and emergency medicine, with specialty-specific AI models and clinical workflows. Integration with existing electronic health record (EHR) systems enables seamless adoption without disrupting current clinical workflows. The platform includes features for medical education and training, helping healthcare students and professionals develop diagnostic skills through AI-assisted learning experiences. Advanced analytics provide insights into diagnostic accuracy, treatment outcomes, and healthcare system efficiency. The system includes features for managing medical imaging workflows, prioritizing urgent cases, and optimizing resource allocation in healthcare facilities. Real-time collaboration tools enable healthcare teams to work together on complex cases, share insights, and coordinate patient care effectively. The platform includes features for patient engagement and education, helping patients understand their conditions, treatment options, and care plans. Advanced reporting capabilities provide detailed analytics on diagnostic performance, treatment outcomes, and healthcare quality metrics. The system includes features for managing clinical trials, tracking research outcomes, and contributing to medical knowledge advancement. Integration with medical devices and monitoring systems enables real-time patient data collection and analysis. The platform includes features for managing population health, identifying health trends, and developing preventive care strategies. Advanced visualization tools help healthcare professionals understand complex medical data and communicate effectively with patients and colleagues. The system includes features for managing medical emergencies, providing rapid diagnostic support, and coordinating emergency care protocols. Continuous learning capabilities ensure the AI models improve over time based on new data, clinical feedback, and medical research advancements.",
        difficulty: "advanced",
        category: "healthcare",
        topics: ["ai-ml", "healthcare", "productivity", "social"],
        skills: ["python", "ai", "javascript", "react", "medical-imaging", "nlp"],
        socialImpact: true,
        teamRoles: ["AI/ML Engineer", "Full-stack Developer", "Medical Expert", "UI/UX Designer", "Security Engineer"],
        learningPath: [
            "Study medical imaging and deep learning",
            "Learn healthcare data analysis and privacy",
            "Build AI models for medical diagnosis",
            "Create secure healthcare applications",
            "Implement clinical workflow integration"
        ],
        githubSearch: "AI healthcare diagnosis medical imaging",
        githubLinks: [
            "https://github.com/Project-MONAI/MONAI",
            "https://github.com/facebookresearch/fastMRI",
            "https://github.com/radiopaedia/radiopaedia"
        ],
        presentationTips: [
            "Demonstrate medical image analysis capabilities",
            "Show diagnostic accuracy improvements",
            "Highlight patient safety and privacy features",
            "Discuss clinical validation and regulatory compliance"
        ]
    },
    {
        id: 12,
        title: "Smart City IoT Infrastructure Platform",
        description: "A comprehensive IoT platform that manages and optimizes urban infrastructure including traffic, lighting, waste management, and environmental monitoring to create sustainable, efficient smart cities.",
        detailedDescription: "This comprehensive Smart City IoT Infrastructure Platform represents a holistic approach to urban management, leveraging the Internet of Things to create more efficient, sustainable, and livable cities. The platform integrates thousands of IoT sensors and devices throughout urban environments to collect real-time data on various aspects of city life and infrastructure performance. The system begins with intelligent traffic management that uses sensors, cameras, and AI algorithms to monitor traffic flow, detect congestion, and optimize signal timing to reduce travel times and improve road safety. Smart lighting systems automatically adjust brightness based on pedestrian and vehicle presence, weather conditions, and time of day, significantly reducing energy consumption while maintaining public safety. Environmental monitoring networks track air quality, noise levels, temperature, humidity, and other environmental factors to identify pollution sources and implement targeted interventions. Waste management systems use smart bins with fill-level sensors and route optimization algorithms to improve collection efficiency and reduce operational costs. The platform includes comprehensive water management features that monitor water quality, detect leaks, and optimize distribution systems to ensure reliable access to clean water while reducing waste. Energy management systems integrate renewable energy sources, smart grids, and demand response programs to optimize energy distribution and reduce carbon emissions. Public safety features include intelligent surveillance systems, emergency response coordination, and predictive policing algorithms that help law enforcement agencies prevent crime and respond more effectively to emergencies. The platform features advanced data analytics that process vast amounts of IoT data to identify patterns, predict trends, and provide insights for urban planning and policy development. Real-time dashboards provide city officials, emergency responders, and citizens with up-to-date information about city services and conditions. The system includes citizen engagement features that allow residents to report issues, access city services, and participate in urban planning decisions through mobile applications and web portals. Integration with existing city infrastructure enables gradual adoption without disrupting current services or requiring massive capital investments. The platform includes features for managing public transportation systems, optimizing routes, and providing real-time information to commuters. Smart parking systems help drivers find available parking spaces quickly, reducing traffic congestion and improving the overall urban experience. The system includes comprehensive security features that protect IoT devices, data transmission, and city infrastructure from cyber threats and physical attacks. Advanced predictive maintenance capabilities monitor infrastructure health and alert city officials to potential issues before they become problems. The platform supports multiple city departments and services, enabling coordinated management and optimization of urban resources. Real-time collaboration tools enable city officials, emergency responders, and service providers to coordinate effectively during emergencies and special events. The system includes features for managing public events, coordinating emergency responses, and optimizing resource allocation during large gatherings. Advanced visualization tools help city planners and officials understand complex urban data and make informed decisions about infrastructure development and service delivery. The platform includes features for managing urban agriculture, community gardens, and green spaces to promote sustainability and community engagement. Integration with weather forecasting systems enables proactive management of weather-related challenges and emergency preparedness. The system includes comprehensive reporting and analytics that provide insights into city performance, service quality, and citizen satisfaction. Advanced machine learning algorithms analyze historical data to predict future trends and optimize city services accordingly. The platform includes features for managing public health initiatives, tracking disease outbreaks, and coordinating healthcare services across the city. Real-time communication systems enable rapid dissemination of important information to citizens during emergencies or special events.",
        difficulty: "advanced",
        category: "iot",
        topics: ["iot", "environment", "ai-ml", "social", "productivity"],
        skills: ["python", "iot", "ai", "javascript", "react", "embedded-systems"],
        socialImpact: true,
        teamRoles: ["IoT Engineer", "AI/ML Engineer", "Full-stack Developer", "Urban Planner", "UI/UX Designer"],
        learningPath: [
            "Learn IoT sensor integration and data collection",
            "Study urban planning and smart city concepts",
            "Build real-time data processing systems",
            "Create intelligent automation and optimization",
            "Implement citizen engagement and communication features"
        ],
        githubSearch: "smart city IoT infrastructure platform",
        githubLinks: [
            "https://github.com/fiware/fiware-orion",
            "https://github.com/eclipse/kura",
            "https://github.com/thingsboard/thingsboard"
        ],
        presentationTips: [
            "Show real-time city monitoring dashboard",
            "Demonstrate intelligent infrastructure optimization",
            "Highlight environmental and efficiency improvements",
            "Discuss citizen engagement and quality of life metrics"
        ]
    },
    {
        id: 13,
        title: "Decentralized Finance (DeFi) Lending Platform",
        description: "A blockchain-based lending platform that enables peer-to-peer lending, borrowing, and yield farming using smart contracts and cryptocurrency assets.",
        detailedDescription: "This innovative Decentralized Finance (DeFi) lending platform represents a fundamental shift in how people access financial services, eliminating traditional intermediaries and creating a more inclusive, transparent, and efficient financial ecosystem. The platform leverages blockchain technology and smart contracts to enable peer-to-peer lending, borrowing, and yield farming without the need for traditional banks or financial institutions. The system begins with comprehensive asset management that supports multiple cryptocurrencies, stablecoins, and tokenized assets, allowing users to lend, borrow, and earn interest on their digital assets. Smart contracts automatically execute lending agreements, manage collateral, and distribute interest payments, ensuring transparency and eliminating the need for trust in third parties. The platform features advanced risk management algorithms that assess borrower creditworthiness, determine appropriate interest rates, and manage collateral requirements based on market conditions and asset volatility. Liquidity pools enable users to provide assets to the platform and earn interest while maintaining the ability to withdraw their funds at any time. The system includes comprehensive yield farming features that allow users to earn additional rewards by providing liquidity to specific trading pairs or participating in governance activities. Advanced analytics provide users with detailed insights into their lending performance, risk exposure, and potential returns across different assets and strategies. The platform includes features for managing multiple lending positions, tracking interest earnings, and optimizing portfolio performance. Real-time market data integration provides users with current interest rates, asset prices, and market trends to inform their lending and borrowing decisions. The system features comprehensive security measures including multi-signature wallets, insurance protocols, and emergency pause mechanisms to protect user assets and maintain platform stability. Governance features allow platform users to participate in decision-making processes, propose changes, and vote on platform upgrades and policy modifications. The platform includes features for managing cross-chain lending, enabling users to borrow assets on one blockchain using collateral from another blockchain. Advanced automation features enable users to set up automated lending strategies, rebalance portfolios, and optimize returns based on market conditions. The system includes comprehensive educational resources that help users understand DeFi concepts, risk management strategies, and platform features. Integration with traditional financial services enables users to bridge between conventional banking and DeFi services. The platform includes features for managing institutional lending, enabling businesses and organizations to participate in the DeFi ecosystem. Advanced reporting capabilities provide detailed analytics on platform performance, user activity, and market trends. The system includes features for managing regulatory compliance, ensuring adherence to relevant financial regulations and reporting requirements. Real-time notifications keep users informed about important events, market changes, and opportunities for optimizing their positions. The platform includes features for managing social lending, enabling users to lend to specific causes, projects, or communities. Advanced risk assessment tools help users understand the risks associated with different lending strategies and asset combinations. The system includes features for managing insurance and protection products that help users mitigate risks and protect their investments. Integration with external DeFi protocols enables users to access additional services and opportunities across the broader DeFi ecosystem. The platform includes comprehensive customer support features that help users navigate the platform, understand DeFi concepts, and resolve issues effectively. Advanced portfolio management tools enable users to track their positions across multiple DeFi protocols and optimize their overall DeFi strategy. The system includes features for managing tax reporting and compliance, helping users track their DeFi activities for tax purposes. Real-time market analysis tools provide users with insights into market trends, opportunities, and risks to inform their DeFi strategies.",
        difficulty: "advanced",
        category: "blockchain",
        topics: ["blockchain", "finance", "ai-ml", "productivity"],
        skills: ["solidity", "javascript", "react", "nodejs", "blockchain", "ai"],
        socialImpact: false,
        teamRoles: ["Blockchain Developer", "Full-stack Developer", "Financial Expert", "UI/UX Designer", "Security Engineer"],
        learningPath: [
            "Learn blockchain fundamentals and smart contract development",
            "Study DeFi protocols and financial instruments",
            "Build secure lending and borrowing systems",
            "Implement risk management and analytics",
            "Create user-friendly DeFi interfaces"
        ],
        githubSearch: "DeFi lending platform smart contracts",
        githubLinks: [
            "https://github.com/aave/aave-v3-core",
            "https://github.com/compound-finance/compound-protocol",
            "https://github.com/Uniswap/uniswap-v3-core"
        ],
        presentationTips: [
            "Demonstrate peer-to-peer lending functionality",
            "Show yield farming and liquidity features",
            "Highlight security and risk management",
            "Discuss financial inclusion and accessibility"
        ]
    },
    {
        id: 14,
        title: "AI-Powered Personal Fitness Coach",
        description: "An intelligent fitness platform that provides personalized workout plans, real-time form analysis, and comprehensive health tracking using computer vision and machine learning.",
        detailedDescription: "This advanced AI-powered personal fitness coach represents a comprehensive solution for personalized fitness and health management, leveraging cutting-edge technology to create individualized training experiences that adapt to each user's unique needs, goals, and progress. The platform begins with comprehensive health assessment that includes fitness level evaluation, body composition analysis, medical history review, and goal setting to create a personalized fitness profile. Advanced computer vision technology uses smartphone cameras or dedicated devices to analyze exercise form in real-time, providing instant feedback on technique, posture, and movement patterns to prevent injuries and maximize workout effectiveness. The system features intelligent workout planning that creates customized training programs based on user goals, available equipment, time constraints, and fitness level, automatically adjusting difficulty and progression as users improve. Machine learning algorithms analyze user performance data, recovery patterns, and progress trends to optimize training schedules, prevent overtraining, and ensure continuous improvement. The platform includes comprehensive nutrition tracking and meal planning features that integrate with fitness goals, providing personalized dietary recommendations and tracking macronutrient intake. Real-time heart rate monitoring and cardiovascular analysis help users optimize their training intensity and track cardiovascular fitness improvements over time. The system features advanced sleep tracking and recovery monitoring that analyzes sleep quality, recovery metrics, and stress levels to optimize training schedules and prevent burnout. Social features enable users to connect with friends, join fitness challenges, and participate in community events, creating motivation and accountability through social support. The platform includes features for managing multiple fitness goals simultaneously, whether users want to build strength, improve endurance, lose weight, or enhance flexibility. Advanced analytics provide detailed insights into progress, performance trends, and areas for improvement, helping users understand their fitness journey and make informed decisions. The system includes features for managing injuries and rehabilitation, providing modified exercises and recovery protocols while maintaining fitness progress. Integration with wearable devices and fitness equipment enables comprehensive data collection and analysis across multiple platforms and devices. The platform includes features for managing group fitness sessions, enabling trainers to create and manage virtual classes with real-time feedback and interaction. Advanced goal tracking features help users set and achieve both short-term and long-term fitness objectives with detailed progress monitoring and milestone celebrations. The system includes comprehensive educational content that teaches users about exercise science, nutrition, recovery, and injury prevention. Real-time coaching features provide verbal cues, encouragement, and motivation during workouts to enhance the training experience. The platform includes features for managing different training modalities including strength training, cardio, yoga, pilates, and sports-specific training. Advanced scheduling features help users plan their workouts around their daily routines, travel schedules, and other commitments. The system includes features for managing nutrition and supplementation, providing personalized recommendations based on training intensity, goals, and dietary preferences. Integration with healthcare providers enables users to share fitness data with medical professionals for comprehensive health management. The platform includes features for managing fitness competitions and events, enabling users to participate in virtual races, challenges, and tournaments. Advanced recovery tracking features monitor stress levels, sleep quality, and recovery metrics to optimize training schedules and prevent overtraining. The system includes comprehensive reporting features that provide detailed analytics on fitness progress, performance improvements, and health metrics. Real-time communication features enable users to connect with personal trainers, nutritionists, and other fitness professionals for personalized guidance and support. The platform includes features for managing family fitness, enabling parents to track and support their children's fitness activities and health goals. Advanced gamification features include achievement systems, progress badges, and competitive challenges that motivate users to maintain consistent fitness routines. The system includes features for managing fitness equipment and home gyms, providing guidance on equipment selection, setup, and maintenance. Integration with social media platforms enables users to share their fitness achievements and connect with like-minded individuals in the fitness community.",
        difficulty: "intermediate",
        category: "healthcare",
        topics: ["ai-ml", "healthcare", "mobile", "gaming"],
        skills: ["python", "ai", "javascript", "react", "computer-vision", "mobile"],
        socialImpact: true,
        teamRoles: ["AI/ML Engineer", "Mobile Developer", "Fitness Expert", "UI/UX Designer", "Health Coach"],
        learningPath: [
            "Learn computer vision and pose estimation",
            "Study fitness science and exercise physiology",
            "Build real-time form analysis systems",
            "Create personalized workout planning algorithms",
            "Implement health tracking and analytics features"
        ],
        githubSearch: "AI fitness coach computer vision",
        githubLinks: [
            "https://github.com/tensorflow/tensorflow",
            "https://github.com/CMU-Perceptual-Computing-Lab/openpose",
            "https://github.com/google/mediapipe"
        ],
        presentationTips: [
            "Demonstrate real-time form analysis",
            "Show personalized workout planning",
            "Highlight health tracking and progress monitoring",
            "Discuss accessibility and inclusivity features"
        ]
    },
    {
        id: 15,
        title: "Smart Agriculture IoT Platform",
        description: "A comprehensive IoT platform that optimizes agricultural operations through precision farming, automated irrigation, crop monitoring, and predictive analytics for sustainable food production.",
        detailedDescription: "This comprehensive Smart Agriculture IoT Platform represents a revolutionary approach to farming that leverages advanced technology to optimize agricultural operations, increase crop yields, and promote sustainable farming practices. The platform integrates a network of IoT sensors, drones, automated machinery, and data analytics to create a complete precision farming ecosystem. The system begins with comprehensive soil monitoring that uses sensors to track soil moisture, temperature, pH levels, nutrient content, and organic matter to optimize soil health and crop growth conditions. Advanced weather monitoring systems provide real-time weather data, forecasts, and alerts to help farmers make informed decisions about planting, irrigation, and harvesting schedules. The platform features intelligent irrigation systems that automatically adjust water delivery based on soil moisture levels, weather conditions, crop requirements, and water availability, significantly reducing water waste while optimizing crop growth. Drone technology provides aerial monitoring of crop health, growth patterns, and potential issues such as pest infestations, disease outbreaks, or nutrient deficiencies. The system includes comprehensive crop management features that track planting dates, growth stages, expected harvest dates, and yield predictions based on historical data and current conditions. Advanced pest and disease monitoring uses computer vision and machine learning to detect early signs of problems and recommend targeted interventions to minimize crop damage and reduce pesticide use. The platform features automated machinery integration that enables remote monitoring and control of tractors, harvesters, and other agricultural equipment for improved efficiency and reduced labor costs. Predictive analytics help farmers anticipate market conditions, optimize crop selection, and plan harvest timing to maximize profitability and market opportunities. The system includes comprehensive inventory management that tracks seeds, fertilizers, pesticides, and equipment to optimize resource allocation and reduce waste. Real-time market data integration provides farmers with current prices, demand trends, and market opportunities to inform their production and sales decisions. The platform features advanced financial management tools that track costs, revenues, and profitability across different crops and farming operations. The system includes features for managing sustainable farming practices such as crop rotation, cover cropping, and integrated pest management to promote long-term soil health and environmental sustainability. Integration with supply chain systems enables farmers to connect directly with buyers, processors, and retailers to optimize sales and reduce intermediaries. The platform includes comprehensive reporting and analytics that provide insights into farm performance, crop yields, and operational efficiency. Advanced automation features enable farmers to remotely monitor and control various aspects of their operations, reducing the need for constant physical presence on the farm. The system includes features for managing livestock operations, including health monitoring, feeding optimization, and breeding management for integrated farming systems. Real-time collaboration tools enable farmers to work with agricultural experts, consultants, and other farmers to share knowledge and best practices. The platform includes features for managing organic certification, tracking compliance requirements, and maintaining detailed records for certification audits. Advanced data visualization tools help farmers understand complex agricultural data and make informed decisions about their operations. The system includes features for managing farm safety, monitoring equipment status, and providing alerts for potential hazards or maintenance requirements. Integration with government agricultural programs enables farmers to access subsidies, insurance, and other support services through the platform. The platform includes comprehensive educational resources that help farmers learn about new technologies, best practices, and sustainable farming methods. Advanced forecasting capabilities help farmers plan for future seasons, anticipate challenges, and optimize their long-term farming strategies. The system includes features for managing farm succession planning, enabling smooth transitions between generations and ensuring the long-term viability of family farms. Real-time communication features enable farmers to connect with agricultural experts, suppliers, and buyers for immediate support and opportunities. The platform includes features for managing farm tourism and educational programs, enabling farmers to diversify their income sources and share their knowledge with the public. Advanced sustainability tracking features monitor environmental impact, resource usage, and compliance with sustainable farming standards and certifications.",
        difficulty: "advanced",
        category: "iot",
        topics: ["iot", "environment", "ai-ml", "productivity"],
        skills: ["python", "iot", "ai", "javascript", "react", "embedded-systems"],
        socialImpact: true,
        teamRoles: ["IoT Engineer", "AI/ML Engineer", "Agricultural Expert", "Full-stack Developer", "UI/UX Designer"],
        learningPath: [
            "Learn IoT sensor integration and agricultural monitoring",
            "Study precision farming and sustainable agriculture",
            "Build automated irrigation and crop management systems",
            "Create predictive analytics for agricultural optimization",
            "Implement drone and aerial monitoring features"
        ],
        githubSearch: "smart agriculture IoT precision farming",
        githubLinks: [
            "https://github.com/farmbot/farmbot-web-app",
            "https://github.com/OpenAgricultureFoundation/openag-brain",
            "https://github.com/agriculture-iot/agriculture-platform"
        ],
        presentationTips: [
            "Show real-time crop monitoring dashboard",
            "Demonstrate automated irrigation and precision farming",
            "Highlight sustainability and resource optimization",
            "Discuss yield improvements and economic benefits"
        ]
    },
    {
        id: 16,
        title: "Virtual Reality Therapy Platform",
        description: "An immersive VR platform designed for mental health therapy, phobia treatment, and stress management using virtual environments and guided therapeutic experiences.",
        detailedDescription: "This innovative Virtual Reality Therapy Platform represents a breakthrough in mental health treatment, leveraging immersive technology to create safe, controlled environments for therapeutic interventions. The platform addresses a wide range of mental health challenges including anxiety disorders, phobias, post-traumatic stress disorder (PTSD), depression, and stress-related conditions through carefully designed virtual experiences. The system begins with comprehensive patient assessment that evaluates mental health status, identifies specific challenges, and creates personalized treatment plans tailored to individual needs and therapeutic goals. Advanced VR environments recreate real-world scenarios that trigger specific responses, allowing therapists to guide patients through exposure therapy in a safe, controlled setting. The platform features progressive exposure therapy modules that gradually increase difficulty and intensity, helping patients build confidence and develop coping mechanisms at their own pace. Biofeedback integration monitors physiological responses such as heart rate, breathing patterns, and skin conductance to provide real-time feedback and track therapeutic progress. The system includes guided meditation and relaxation environments that use immersive visuals, soothing sounds, and breathing exercises to promote stress reduction and emotional regulation. Social anxiety treatment modules create virtual social situations where patients can practice social skills, build confidence, and overcome social fears in a supportive environment. PTSD treatment features include trauma-focused therapy environments that help patients process traumatic experiences under professional guidance. The platform includes comprehensive therapist tools that allow mental health professionals to customize treatment sessions, monitor patient progress, and adjust therapeutic approaches based on real-time feedback. Advanced analytics provide detailed insights into treatment effectiveness, patient engagement, and progress tracking to inform therapeutic decisions. The system features multi-user environments that enable group therapy sessions, family therapy, and couples counseling in virtual spaces. Accessibility features ensure the platform is usable by patients with different abilities, including customizable controls, audio descriptions, and alternative interaction methods. Integration with electronic health records enables seamless documentation and coordination with other healthcare providers. The platform includes features for managing treatment adherence, scheduling sessions, and providing between-session support through mobile applications. Advanced security and privacy features ensure patient confidentiality and compliance with healthcare regulations such as HIPAA. The system supports multiple therapeutic modalities including cognitive behavioral therapy (CBT), dialectical behavior therapy (DBT), mindfulness-based interventions, and exposure therapy. Real-time collaboration tools enable therapists to work with patients remotely, expanding access to mental health care for individuals in underserved areas. The platform includes comprehensive training modules for therapists to learn VR therapy techniques and best practices. Advanced content creation tools allow therapists to develop custom therapeutic environments and scenarios for specific patient needs. The system features integration with wearable devices for comprehensive physiological monitoring during therapy sessions. Progress tracking features help patients visualize their improvement over time, providing motivation and reinforcement for continued treatment. The platform includes features for managing crisis intervention, providing immediate support and resources during mental health emergencies. Advanced reporting capabilities provide detailed analytics on treatment outcomes, patient satisfaction, and therapeutic effectiveness. The system includes features for managing medication tracking and integration with psychiatric care when appropriate. Real-time communication features enable patients to connect with therapists, support groups, and crisis hotlines when needed. The platform includes features for managing family involvement in treatment, providing education and support for family members. Advanced gamification elements motivate patients to engage with therapeutic activities and track their progress through achievement systems. The system includes features for managing relapse prevention, providing ongoing support and resources after initial treatment completion. Integration with research institutions enables data collection for advancing mental health treatment knowledge and improving therapeutic approaches. The platform includes comprehensive educational resources that help patients understand their conditions and treatment options. Advanced customization features allow for cultural adaptation and personalization of therapeutic experiences to meet diverse patient needs.",
        difficulty: "advanced",
        category: "healthcare",
        topics: ["vr", "healthcare", "ai-ml", "social"],
        skills: ["unity", "csharp", "javascript", "react", "vr", "ai"],
        socialImpact: true,
        teamRoles: ["VR Developer", "Mental Health Expert", "AI/ML Engineer", "UI/UX Designer", "Clinical Psychologist"],
        learningPath: [
            "Learn VR development with Unity and Oculus/SteamVR",
            "Study mental health therapy and clinical psychology",
            "Build immersive therapeutic environments",
            "Implement biofeedback and physiological monitoring",
            "Create secure healthcare applications"
        ],
        githubSearch: "VR therapy mental health platform",
        githubLinks: [
            "https://github.com/ValveSoftware/openvr",
            "https://github.com/oculus-samples/Unity-TheWorldBeyond",
            "https://github.com/mental-health-vr/vr-therapy-platform"
        ],
        presentationTips: [
            "Demonstrate immersive therapeutic environments",
            "Show biofeedback and progress tracking",
            "Highlight accessibility and safety features",
            "Discuss clinical validation and patient outcomes"
        ]
    },
    {
        id: 17,
        title: "Autonomous Drone Delivery Network",
        description: "A comprehensive drone delivery system that provides fast, efficient, and environmentally friendly package delivery for urban and rural areas using autonomous flight technology.",
        detailedDescription: "This revolutionary Autonomous Drone Delivery Network represents a paradigm shift in logistics and transportation, leveraging cutting-edge drone technology to create a sustainable, efficient, and accessible delivery system. The platform addresses the growing demand for fast, reliable delivery services while reducing environmental impact and improving accessibility for remote and underserved areas. The system begins with comprehensive route optimization that uses advanced algorithms to calculate the most efficient delivery paths, considering factors such as weather conditions, airspace regulations, battery life, and package weight. Autonomous flight technology enables drones to navigate complex urban environments, avoid obstacles, and maintain safe distances from buildings, people, and other aircraft. The platform features intelligent fleet management that coordinates multiple drones simultaneously, optimizing delivery schedules, battery charging, and maintenance operations to maximize efficiency and minimize downtime. Advanced weather monitoring systems provide real-time updates on wind conditions, precipitation, and visibility to ensure safe and reliable flight operations. The system includes comprehensive safety features such as collision avoidance systems, emergency landing protocols, and real-time monitoring of all drone operations. Package handling systems ensure secure loading, transport, and delivery of various package types and sizes with appropriate protection and handling procedures. The platform features user-friendly mobile applications that allow customers to track deliveries in real-time, receive notifications, and provide delivery instructions or preferences. Integration with existing e-commerce platforms enables seamless order processing and delivery coordination for online retailers and businesses. The system includes features for managing delivery scheduling, allowing customers to choose preferred delivery times and locations for maximum convenience. Advanced analytics provide insights into delivery performance, customer satisfaction, and operational efficiency to inform business decisions and service improvements. The platform features comprehensive regulatory compliance tools that ensure adherence to aviation regulations, privacy laws, and safety standards across different jurisdictions. The system includes features for managing special delivery requirements such as temperature-controlled transport for food and medical supplies, secure delivery for valuable items, and oversized package handling. Real-time communication systems enable coordination between drones, ground control stations, and customer service representatives for optimal service delivery. The platform includes features for managing delivery hubs and charging stations that serve as central coordination points for drone operations and maintenance. Advanced battery management systems optimize charging schedules and battery life to ensure reliable operation and minimize environmental impact. The system includes comprehensive insurance and liability management features that protect customers, businesses, and the platform from potential risks and damages. Integration with local businesses enables same-day delivery services and supports local economic development. The platform features accessibility features that ensure delivery services are available to individuals with disabilities and those in remote or underserved areas. Advanced security features protect packages during transport and ensure secure delivery to intended recipients. The system includes features for managing international deliveries, coordinating with customs agencies, and complying with international shipping regulations. Real-time environmental monitoring tracks the environmental impact of drone operations and helps optimize routes for minimal ecological footprint. The platform includes comprehensive customer support features that provide assistance with delivery issues, package tracking, and service inquiries. Advanced predictive analytics help anticipate delivery demand, optimize fleet deployment, and improve service reliability. The system includes features for managing emergency deliveries such as medical supplies, disaster relief, and urgent documents. Integration with smart city infrastructure enables coordination with traffic management systems and urban planning initiatives. The platform includes comprehensive reporting and analytics that provide insights into delivery patterns, customer behavior, and market trends. Advanced automation features enable seamless integration with warehouse management systems and inventory tracking. The system includes features for managing seasonal demand fluctuations and special event deliveries. Real-time collaboration tools enable coordination with ground delivery services for hybrid delivery solutions. The platform includes comprehensive training and certification programs for drone operators and maintenance personnel. Advanced research and development features support ongoing innovation in drone technology, safety systems, and delivery optimization.",
        difficulty: "advanced",
        category: "iot",
        topics: ["iot", "environment", "ai-ml", "productivity"],
        skills: ["python", "ai", "javascript", "react", "embedded-systems", "aviation"],
        socialImpact: true,
        teamRoles: ["Drone Engineer", "AI/ML Engineer", "Full-stack Developer", "Logistics Expert", "UI/UX Designer"],
        learningPath: [
            "Learn autonomous flight systems and drone technology",
            "Study logistics and supply chain management",
            "Build route optimization and fleet management systems",
            "Create real-time tracking and monitoring applications",
            "Implement safety and regulatory compliance features"
        ],
        githubSearch: "autonomous drone delivery network",
        githubLinks: [
            "https://github.com/ArduPilot/ardupilot",
            "https://github.com/PX4/PX4-Autopilot",
            "https://github.com/drone-delivery/drone-platform"
        ],
        presentationTips: [
            "Demonstrate autonomous flight capabilities",
            "Show real-time delivery tracking",
            "Highlight environmental and efficiency benefits",
            "Discuss safety and regulatory compliance"
        ]
    },
    {
        id: 18,
        title: "AI-Powered Creative Writing Assistant",
        description: "An intelligent writing platform that helps authors, content creators, and students develop compelling stories, improve writing skills, and overcome creative blocks using advanced natural language processing.",
        detailedDescription: "This sophisticated AI-Powered Creative Writing Assistant represents a revolutionary tool for writers, content creators, and anyone seeking to improve their writing skills and creative expression. The platform leverages advanced natural language processing, machine learning, and creative AI to provide comprehensive writing support across multiple genres and styles. The system begins with comprehensive writing analysis that evaluates grammar, style, tone, and structure to provide personalized feedback and improvement suggestions. Advanced story generation features help writers develop plot ideas, create character profiles, and build compelling narratives through AI-assisted brainstorming and creative prompts. The platform features intelligent writing prompts that adapt to individual writing styles, genres, and creative goals, helping writers overcome creative blocks and maintain inspiration. Real-time writing assistance provides suggestions for word choice, sentence structure, and stylistic improvements while preserving the writer's unique voice and creative vision. The system includes comprehensive character development tools that help writers create complex, believable characters with detailed backgrounds, motivations, and personality traits. Plot structure analysis helps writers organize their stories effectively, identify plot holes, and maintain narrative coherence throughout their work. The platform features genre-specific writing guidance that provides specialized advice and techniques for different writing styles including fiction, non-fiction, poetry, screenwriting, and technical writing. Advanced collaboration features enable writers to work together on shared projects, provide feedback, and co-create content in real-time. The system includes comprehensive research assistance that helps writers gather information, fact-check content, and integrate relevant details into their writing. Writing goal tracking features help writers set and achieve writing targets, maintain consistent writing habits, and track their progress over time. The platform features advanced editing tools that provide detailed feedback on clarity, conciseness, and effectiveness while maintaining the writer's original intent and style. The system includes comprehensive publishing guidance that helps writers prepare their work for publication, including formatting, submission guidelines, and market analysis. Real-time writing analytics provide insights into writing patterns, productivity trends, and areas for improvement to help writers develop their skills systematically. The platform features accessibility tools that support writers with different abilities, including voice-to-text capabilities, reading assistance, and adaptive interfaces. Integration with writing communities enables writers to connect with peers, share their work, and receive constructive feedback from the writing community. The system includes features for managing writing projects, organizing drafts, and maintaining version control for complex writing projects. Advanced language learning features help non-native speakers improve their writing skills and develop fluency in their target language. The platform features comprehensive educational resources that teach writing techniques, literary devices, and creative writing principles. Real-time translation features enable writers to work in multiple languages and reach global audiences. The system includes features for managing writing portfolios, showcasing work samples, and building professional writing profiles. Advanced content optimization tools help writers improve readability, engagement, and SEO performance for digital content. The platform features comprehensive citation and reference management tools for academic and research writing. Real-time plagiarism detection ensures original content while providing guidance on proper attribution and citation practices. The system includes features for managing writing deadlines, scheduling writing sessions, and maintaining consistent productivity. Advanced storytelling tools help writers develop compelling narratives, create emotional impact, and engage readers effectively. The platform features comprehensive market analysis that helps writers understand audience preferences, market trends, and publishing opportunities. Real-time feedback systems provide immediate suggestions and corrections to help writers improve their work as they write. The system includes features for managing writing workshops, facilitating group writing sessions, and coordinating writing events. Advanced analytics provide detailed insights into writing effectiveness, reader engagement, and content performance. The platform features comprehensive backup and recovery systems that protect writers' work and ensure data security. Integration with publishing platforms enables seamless submission and publication of completed work. The system includes features for managing writing income, tracking royalties, and building sustainable writing careers. Advanced creative inspiration tools help writers develop unique ideas, explore new genres, and expand their creative horizons.",
        difficulty: "intermediate",
        category: "ai",
        topics: ["ai-ml", "education", "productivity", "social"],
        skills: ["python", "ai", "javascript", "react", "nlp", "writing"],
        socialImpact: true,
        teamRoles: ["AI/ML Engineer", "Full-stack Developer", "Writing Expert", "UI/UX Designer", "Content Creator"],
        learningPath: [
            "Study natural language processing and text generation",
            "Learn creative writing principles and techniques",
            "Build intelligent writing assistance systems",
            "Create collaborative writing features",
            "Implement writing analytics and feedback systems"
        ],
        githubSearch: "AI creative writing assistant NLP",
        githubLinks: [
            "https://github.com/openai/gpt-3",
            "https://github.com/huggingface/transformers",
            "https://github.com/creative-writing-ai/writing-assistant"
        ],
        presentationTips: [
            "Demonstrate intelligent writing assistance",
            "Show creative prompt generation",
            "Highlight collaboration and feedback features",
            "Discuss writing skill development and accessibility"
        ]
    },
    {
        id: 19,
        title: "Smart Home Energy Optimization System",
        description: "An intelligent home automation platform that optimizes energy consumption, reduces utility costs, and improves home comfort through AI-powered device management and predictive analytics.",
        detailedDescription: "This comprehensive Smart Home Energy Optimization System represents a complete solution for intelligent home management, leveraging advanced technology to create more efficient, comfortable, and sustainable living environments. The platform integrates with existing smart home devices and appliances to create a unified system that optimizes energy consumption while maintaining or improving home comfort and convenience. The system begins with comprehensive device integration that connects smart thermostats, lighting systems, appliances, and energy monitoring devices to create a complete home automation network. Advanced machine learning algorithms analyze household energy patterns, occupancy schedules, and weather conditions to predict energy needs and optimize device operation accordingly. The platform features intelligent climate control that automatically adjusts heating, ventilation, and air conditioning (HVAC) systems based on occupancy, weather forecasts, and energy prices to maximize comfort while minimizing energy consumption. Smart lighting systems automatically adjust brightness, color temperature, and scheduling based on natural light availability, occupancy patterns, and user preferences to create optimal lighting conditions while reducing energy waste. The system includes comprehensive appliance management that optimizes the operation of major appliances such as refrigerators, washing machines, dishwashers, and water heaters based on energy prices, usage patterns, and household schedules. Advanced energy monitoring provides real-time insights into energy consumption patterns, identifies energy-intensive devices, and suggests optimization opportunities to help homeowners make informed decisions about their energy usage. The platform features predictive maintenance capabilities that monitor device health, identify potential issues, and schedule maintenance to prevent breakdowns and ensure optimal performance. Integration with renewable energy systems such as solar panels and battery storage enables the platform to optimize energy usage based on renewable energy availability and grid electricity prices. The system includes comprehensive user interfaces that provide homeowners with easy access to energy data, device controls, and optimization settings through mobile applications and web dashboards. Advanced automation features enable the platform to learn user preferences and automatically adjust device settings to create personalized home environments. The platform features integration with utility companies and smart grid systems to participate in demand response programs and earn incentives for reducing energy consumption during peak periods. Real-time alerts and notifications keep homeowners informed about energy usage, device status, and optimization opportunities. The system includes comprehensive security features that protect smart home devices from cyber threats while maintaining user privacy and data protection. Advanced analytics provide detailed insights into energy savings, cost reductions, and environmental impact to help homeowners understand the benefits of their smart home investments. The platform features accessibility tools that ensure smart home benefits are available to users with different abilities and technical comfort levels. Integration with voice assistants and smart speakers enables hands-free control of home systems and devices. The system includes features for managing multiple homes and properties, enabling property managers and landlords to optimize energy usage across multiple locations. Advanced scheduling features help homeowners plan energy-intensive activities during off-peak hours to take advantage of lower electricity rates. The platform includes comprehensive educational resources that help users understand energy efficiency, smart home technology, and sustainable living practices. Real-time weather integration provides accurate forecasts that help the system optimize energy usage based on expected weather conditions. The system includes features for managing home security and safety systems, integrating with smart locks, cameras, and alarm systems for comprehensive home protection. Advanced reporting capabilities provide detailed analytics on energy performance, cost savings, and environmental impact over time. The platform features integration with electric vehicle charging systems to optimize charging schedules and reduce energy costs. The system includes features for managing water usage and conservation, integrating with smart irrigation systems and water monitoring devices. Advanced machine learning capabilities enable the platform to continuously improve its optimization algorithms based on user feedback and changing household patterns. The platform includes comprehensive customer support features that provide assistance with device setup, troubleshooting, and optimization strategies. Real-time collaboration tools enable family members to coordinate energy usage and share control of home systems. The system includes features for managing home entertainment systems, optimizing audio and video equipment for energy efficiency while maintaining quality. Advanced integration capabilities enable the platform to work with a wide range of smart home devices and protocols, ensuring compatibility and flexibility for different home setups. The platform includes comprehensive backup and recovery systems that protect user data and ensure reliable operation of smart home systems. Integration with insurance companies enables homeowners to receive discounts for implementing smart home security and safety features. The system includes features for managing home maintenance schedules, tracking appliance warranties, and coordinating service appointments. Advanced energy forecasting capabilities help homeowners plan for future energy needs and optimize their energy investments.",
        difficulty: "intermediate",
        category: "iot",
        topics: ["iot", "environment", "ai-ml", "productivity"],
        skills: ["python", "iot", "ai", "javascript", "react", "home-automation"],
        socialImpact: true,
        teamRoles: ["IoT Engineer", "AI/ML Engineer", "Full-stack Developer", "Energy Expert", "UI/UX Designer"],
        learningPath: [
            "Learn IoT device integration and home automation",
            "Study energy management and optimization strategies",
            "Build predictive analytics for energy consumption",
            "Create user-friendly smart home interfaces",
            "Implement security and privacy protection features"
        ],
        githubSearch: "smart home energy optimization IoT",
        githubLinks: [
            "https://github.com/home-assistant/core",
            "https://github.com/openhab/openhab-core",
            "https://github.com/smart-home-energy/optimization-platform"
        ],
        presentationTips: [
            "Show real-time energy monitoring dashboard",
            "Demonstrate intelligent device automation",
            "Highlight cost savings and environmental benefits",
            "Discuss user experience and accessibility features"
        ]
    },
    {
        id: 20,
        title: "Blockchain-Based Digital Identity Platform",
        description: "A decentralized digital identity system that provides secure, verifiable, and user-controlled identity management using blockchain technology and zero-knowledge proofs.",
        detailedDescription: "This revolutionary Blockchain-Based Digital Identity Platform represents a fundamental shift in how individuals manage and control their personal information, addressing critical challenges in digital identity, privacy, and security. The platform leverages blockchain technology's immutability and decentralization to create a secure, verifiable, and user-controlled identity system that eliminates the need for centralized identity providers and reduces the risk of identity theft and fraud. The system begins with comprehensive identity creation that allows users to establish their digital identity with verified credentials such as government-issued documents, educational certificates, and professional qualifications. Advanced cryptographic techniques including zero-knowledge proofs enable users to prove their identity and credentials without revealing sensitive personal information, ensuring privacy while maintaining verifiability. The platform features selective disclosure capabilities that allow users to share only specific pieces of information required for different transactions, maintaining control over their personal data. Decentralized identity verification eliminates the need for trusted third parties while ensuring the authenticity and validity of identity claims through consensus mechanisms and cryptographic verification. The system includes comprehensive credential management that allows users to store, update, and revoke various types of credentials including educational degrees, professional certifications, and government documents. Advanced privacy features ensure that users maintain complete control over their personal information and can choose what to share, when to share it, and with whom. The platform features integration with existing identity systems and government databases to enable seamless verification and interoperability with current identity infrastructure. Real-time identity verification enables instant authentication for online services, financial transactions, and access control without the need for traditional username and password systems. The system includes comprehensive security features that protect against identity theft, fraud, and unauthorized access through advanced encryption and multi-factor authentication. Advanced analytics provide insights into identity usage patterns, verification success rates, and security incidents to help users and organizations understand and improve identity management practices. The platform features accessibility tools that ensure digital identity benefits are available to individuals with different abilities and technical comfort levels. Integration with mobile devices and biometric authentication enables convenient and secure identity verification using fingerprint, facial recognition, and other biometric factors. The system includes features for managing organizational identities, enabling businesses and institutions to issue and verify credentials for employees, students, and members. Real-time collaboration tools enable identity verification across multiple organizations and jurisdictions while maintaining privacy and security standards. The platform includes comprehensive compliance features that ensure adherence to data protection regulations such as GDPR, CCPA, and other privacy laws. Advanced reporting capabilities provide detailed analytics on identity verification activities, security incidents, and compliance status. The system includes features for managing identity recovery and backup, ensuring users can regain access to their digital identity if they lose their credentials or devices. Integration with financial services enables secure and efficient identity verification for banking, lending, and other financial transactions. The platform includes features for managing digital signatures and document authentication, enabling legally binding digital transactions and agreements. Advanced machine learning capabilities help detect and prevent identity fraud by analyzing patterns and identifying suspicious activities. The system includes comprehensive educational resources that help users understand digital identity concepts, security best practices, and privacy protection strategies. Real-time notifications keep users informed about identity verification activities, security alerts, and important updates. The platform includes features for managing family identities, enabling parents to manage digital identities for children and dependents. Advanced integration capabilities enable the platform to work with existing identity systems, government services, and private sector applications. The system includes features for managing identity portability, enabling users to transfer their digital identity between different platforms and services. Comprehensive audit trails provide detailed records of all identity-related activities for security, compliance, and dispute resolution purposes. The platform includes features for managing identity federation, enabling seamless authentication across multiple services and platforms. Advanced backup and recovery systems ensure that users can always access their digital identity even if they lose their primary devices or credentials. Integration with healthcare systems enables secure and efficient identity verification for medical services and health records. The system includes features for managing identity inheritance and estate planning, ensuring that digital assets and identities can be properly managed after death or incapacity. Real-time communication features enable users to connect with identity support services and resolve issues quickly and efficiently. The platform includes comprehensive testing and validation tools that help organizations verify the effectiveness of their identity management systems and processes.",
        difficulty: "advanced",
        category: "blockchain",
        topics: ["blockchain", "security", "productivity", "social"],
        skills: ["solidity", "javascript", "react", "nodejs", "blockchain", "cryptography"],
        socialImpact: true,
        teamRoles: ["Blockchain Developer", "Security Engineer", "Full-stack Developer", "Privacy Expert", "UI/UX Designer"],
        learningPath: [
            "Learn blockchain fundamentals and smart contract development",
            "Study cryptography and zero-knowledge proofs",
            "Build secure identity verification systems",
            "Implement privacy protection and data control features",
            "Create user-friendly identity management interfaces"
        ],
        githubSearch: "blockchain digital identity platform",
        githubLinks: [
            "https://github.com/decentralized-identity/did-resolver",
            "https://github.com/hyperledger/indy",
            "https://github.com/identity-foundation/digital-identity"
        ],
        presentationTips: [
            "Demonstrate secure identity verification",
            "Show privacy protection and selective disclosure",
            "Highlight user control and data ownership",
            "Discuss security and regulatory compliance"
        ]
    },
    {
        id: 21,
        title: "AI-Powered Music Composition Platform",
        description: "An intelligent music creation platform that uses AI to compose, arrange, and produce original music across various genres and styles, helping musicians and content creators develop unique compositions.",
        detailedDescription: "This innovative AI-Powered Music Composition Platform represents a revolutionary tool for musicians, composers, and content creators, leveraging advanced artificial intelligence to democratize music creation and expand creative possibilities. The platform combines machine learning algorithms, music theory, and creative AI to assist users in composing original music across various genres, styles, and moods. The system begins with comprehensive music analysis that understands musical structure, harmony, rhythm, and emotional expression to create compositions that resonate with listeners. Advanced AI models trained on vast datasets of musical compositions from different cultures, genres, and historical periods enable the platform to generate music that reflects diverse musical traditions and contemporary trends. The platform features intelligent composition tools that help users develop melodies, harmonies, and rhythms through AI-assisted suggestions and creative prompts. Real-time collaboration features enable multiple musicians to work together on compositions, with AI providing suggestions for harmonization, arrangement, and musical development. The system includes comprehensive genre-specific composition tools that provide specialized guidance and techniques for different musical styles including classical, jazz, rock, electronic, world music, and contemporary pop. Advanced arrangement features help users develop full compositions from simple melodies, automatically suggesting chord progressions, bass lines, and instrumental parts. The platform features intelligent mixing and mastering tools that automatically balance levels, apply effects, and optimize audio quality for different listening environments and platforms. Real-time performance features enable musicians to improvise with AI accompaniment that adapts to their playing style and musical choices. The system includes comprehensive educational resources that teach music theory, composition techniques, and production skills through interactive lessons and AI-guided practice. Advanced sound design tools help users create unique sounds, textures, and effects using AI-generated audio synthesis and processing. The platform features integration with digital audio workstations (DAWs) and music production software to enable seamless workflow integration for professional musicians. Real-time feedback systems provide immediate suggestions for improving compositions, arrangements, and performances. The system includes comprehensive copyright and licensing management tools that help users protect their original compositions and navigate music industry regulations. Advanced analytics provide insights into musical patterns, listener preferences, and market trends to help musicians understand their audience and develop their artistic voice. The platform features accessibility tools that enable individuals with different abilities to create and enjoy music through adaptive interfaces and assistive technologies. Integration with streaming platforms and social media enables musicians to share their compositions and build audiences for their work. The system includes features for managing music projects, organizing compositions, and maintaining version control for complex musical works. Advanced collaboration tools enable remote music production and composition sessions with real-time audio streaming and synchronization. The platform features comprehensive royalty tracking and revenue management tools that help musicians monetize their compositions and track their earnings. Real-time translation features enable musicians to work with lyrics and vocal compositions in multiple languages. The system includes features for managing live performances, coordinating backing tracks, and synchronizing visual elements with musical compositions. Advanced machine learning capabilities enable the platform to learn from user preferences and create personalized musical experiences. The platform includes comprehensive backup and recovery systems that protect musicians' work and ensure data security. Integration with music education institutions enables the platform to support formal music education and training programs. The system includes features for managing music licensing, synchronization rights, and commercial use of compositions. Advanced performance analysis tools help musicians improve their playing technique and musical expression through detailed feedback and practice recommendations. The platform features comprehensive community features that enable musicians to connect, collaborate, and share their work with peers and audiences. Real-time composition sharing enables instant collaboration and feedback from other musicians and listeners. The system includes features for managing music publishing, distribution, and promotion to help musicians build sustainable careers. Advanced creative inspiration tools help musicians overcome creative blocks and develop new musical ideas through AI-generated suggestions and prompts. The platform includes comprehensive quality assurance tools that ensure compositions meet professional standards and industry requirements. Integration with virtual reality and augmented reality platforms enables immersive musical experiences and interactive performances. The system includes features for managing music therapy and wellness applications, supporting the use of music for health and healing purposes. Advanced research and development features support ongoing innovation in music technology and AI-assisted composition techniques.",
        difficulty: "advanced",
        category: "ai",
        topics: ["ai-ml", "gaming", "education", "social"],
        skills: ["python", "ai", "javascript", "react", "audio-processing", "music-theory"],
        socialImpact: true,
        teamRoles: ["AI/ML Engineer", "Music Producer", "Full-stack Developer", "Audio Engineer", "UI/UX Designer"],
        learningPath: [
            "Study music theory and composition principles",
            "Learn audio processing and digital signal analysis",
            "Build AI models for music generation and analysis",
            "Create real-time audio processing systems",
            "Implement collaborative music creation features"
        ],
        githubSearch: "AI music composition platform",
        githubLinks: [
            "https://github.com/magenta/magenta",
            "https://github.com/openai/jukebox",
            "https://github.com/ai-music-composition/platform"
        ],
        presentationTips: [
            "Demonstrate AI-generated music composition",
            "Show real-time collaboration features",
            "Highlight accessibility and educational benefits",
            "Discuss creative expression and artistic innovation"
        ]
    },
    {
        id: 22,
        title: "Smart Waste Management IoT Platform",
        description: "A comprehensive IoT platform that optimizes waste collection, recycling, and disposal through smart sensors, route optimization, and data analytics to create sustainable waste management systems.",
        detailedDescription: "This comprehensive Smart Waste Management IoT Platform represents a revolutionary approach to waste management that leverages advanced technology to create more efficient, sustainable, and environmentally friendly waste collection and processing systems. The platform addresses critical challenges in urban waste management including overflowing bins, inefficient collection routes, low recycling rates, and environmental pollution through intelligent monitoring and optimization. The system begins with comprehensive waste monitoring through smart sensors installed in waste bins, dumpsters, and collection points that track fill levels, waste composition, and collection frequency in real-time. Advanced route optimization algorithms analyze collection data, traffic conditions, and bin fill levels to create the most efficient collection routes, reducing fuel consumption, emissions, and operational costs. The platform features intelligent waste sorting and classification that uses computer vision and machine learning to automatically identify and separate different types of waste including recyclables, organic waste, and hazardous materials. Real-time analytics provide insights into waste generation patterns, collection efficiency, and recycling rates to inform waste management strategies and policy decisions. The system includes comprehensive recycling optimization features that track recycling participation, identify contamination issues, and provide feedback to improve recycling quality and rates. Advanced predictive analytics help waste management companies anticipate collection needs, optimize fleet deployment, and plan for seasonal variations in waste generation. The platform features integration with smart city infrastructure to coordinate waste collection with other urban services and minimize disruption to city operations. Real-time communication systems enable coordination between collection crews, supervisors, and customers to ensure efficient and responsive waste management services. The system includes comprehensive customer engagement features that provide residents and businesses with information about waste collection schedules, recycling guidelines, and waste reduction tips. Advanced reporting capabilities provide detailed analytics on waste management performance, environmental impact, and cost savings to demonstrate the value of smart waste management investments. The platform features accessibility tools that ensure waste management services are available to individuals with different abilities and those in underserved areas. Integration with renewable energy systems enables waste-to-energy conversion and reduces the environmental impact of waste processing. The system includes features for managing hazardous waste collection, ensuring proper handling and disposal of dangerous materials. Advanced security features protect waste management infrastructure from vandalism, theft, and cyber threats. Real-time environmental monitoring tracks the impact of waste management operations on air quality, water quality, and soil health. The platform includes comprehensive training and certification programs for waste management personnel to ensure safe and efficient operations. Advanced automation features enable remote monitoring and control of waste processing facilities and equipment. The system includes features for managing waste reduction programs, tracking progress toward sustainability goals, and measuring environmental impact. Integration with government agencies enables compliance with waste management regulations and reporting requirements. Real-time collaboration tools enable coordination between multiple waste management companies and municipal services. The platform includes features for managing waste education and outreach programs to increase public awareness and participation. Advanced machine learning capabilities enable the platform to continuously improve its optimization algorithms based on operational data and feedback. The system includes comprehensive backup and recovery systems that ensure reliable operation of waste management services. Integration with financial systems enables accurate billing, cost tracking, and budget management for waste management operations. Real-time alerts and notifications keep stakeholders informed about collection schedules, service disruptions, and important updates. The platform includes features for managing waste management contracts, tracking service levels, and ensuring quality standards. Advanced visualization tools help stakeholders understand complex waste management data and make informed decisions. The system includes features for managing waste management emergencies, coordinating response efforts, and minimizing environmental impact. Integration with research institutions enables data collection for advancing waste management knowledge and improving environmental outcomes. The platform includes comprehensive customer support features that provide assistance with waste management issues and service inquiries. Advanced forecasting capabilities help waste management companies plan for future growth, changing regulations, and emerging technologies. Real-time performance monitoring tracks key performance indicators and identifies opportunities for improvement. The system includes features for managing waste management partnerships, coordinating with recycling facilities, and optimizing material recovery. Advanced data analytics provide insights into waste composition, generation trends, and recycling opportunities to inform waste reduction strategies. The platform includes comprehensive quality assurance tools that ensure waste management services meet environmental and safety standards. Integration with circular economy initiatives enables waste reduction, material recovery, and sustainable resource management.",
        difficulty: "intermediate",
        category: "iot",
        topics: ["iot", "environment", "ai-ml", "productivity"],
        skills: ["python", "iot", "ai", "javascript", "react", "embedded-systems"],
        socialImpact: true,
        teamRoles: ["IoT Engineer", "AI/ML Engineer", "Environmental Expert", "Full-stack Developer", "UI/UX Designer"],
        learningPath: [
            "Learn IoT sensor integration and waste monitoring",
            "Study waste management and environmental science",
            "Build route optimization and fleet management systems",
            "Create real-time monitoring and analytics platforms",
            "Implement environmental impact tracking features"
        ],
        githubSearch: "smart waste management IoT platform",
        githubLinks: [
            "https://github.com/smart-waste-management/platform",
            "https://github.com/waste-iot/sensors",
            "https://github.com/recycling-optimization/ai-platform"
        ],
        presentationTips: [
            "Show real-time waste monitoring dashboard",
            "Demonstrate route optimization and efficiency improvements",
            "Highlight environmental impact and sustainability benefits",
            "Discuss cost savings and operational improvements"
        ]
    },
    {
        id: 23,
        title: "AI-Powered Personal Finance Advisor",
        description: "An intelligent financial planning platform that provides personalized investment advice, budgeting strategies, and financial goal tracking using advanced AI algorithms and market analysis.",
        detailedDescription: "This sophisticated AI-Powered Personal Finance Advisor represents a comprehensive solution for intelligent financial management, leveraging advanced artificial intelligence to help individuals make informed financial decisions, achieve their financial goals, and build long-term wealth. The platform combines machine learning algorithms, financial analysis, and personalized recommendations to create a complete financial planning and advisory system. The system begins with comprehensive financial assessment that analyzes income, expenses, assets, liabilities, and financial goals to create a personalized financial profile and risk tolerance assessment. Advanced AI models trained on vast datasets of financial markets, economic indicators, and investment performance enable the platform to provide data-driven investment recommendations and market insights. The platform features intelligent portfolio management that automatically rebalances investments, diversifies assets, and adjusts strategies based on market conditions, personal goals, and risk tolerance. Real-time market analysis provides up-to-date information on investment opportunities, market trends, and economic developments to help users make informed financial decisions. The system includes comprehensive budgeting tools that track spending patterns, identify savings opportunities, and provide personalized recommendations for improving financial health. Advanced goal tracking features help users set and achieve financial objectives including retirement planning, debt reduction, emergency fund building, and major purchase planning. The platform features intelligent tax optimization that identifies tax-saving opportunities, tracks deductions, and provides strategies for minimizing tax liability while ensuring compliance with tax regulations. Real-time alerts and notifications keep users informed about important financial events, market changes, and opportunities for optimizing their financial position. The system includes comprehensive educational resources that teach financial literacy, investment principles, and money management skills through interactive lessons and personalized guidance. Advanced risk management features assess financial risks, provide insurance recommendations, and help users protect their assets and income. The platform features integration with financial institutions and investment platforms to enable seamless account management and transaction processing. Real-time performance tracking provides detailed insights into investment returns, portfolio performance, and progress toward financial goals. The system includes comprehensive retirement planning tools that help users estimate retirement needs, optimize savings strategies, and plan for a secure financial future. Advanced debt management features help users develop strategies for paying off debt efficiently, consolidating loans, and improving credit scores. The platform features accessibility tools that ensure financial planning benefits are available to individuals with different abilities and financial knowledge levels. Integration with tax preparation software enables seamless tax planning and filing processes. Real-time collaboration tools enable users to work with financial advisors, family members, and other stakeholders on financial planning decisions. The system includes features for managing multiple financial accounts, tracking net worth, and maintaining comprehensive financial records. Advanced machine learning capabilities enable the platform to learn from user behavior and provide increasingly personalized financial recommendations. The platform includes comprehensive security features that protect sensitive financial information and ensure compliance with financial privacy regulations. Integration with estate planning tools enables users to plan for wealth transfer and legacy building. Real-time market research provides insights into investment opportunities, economic trends, and financial planning strategies. The system includes features for managing charitable giving, tracking donations, and optimizing tax benefits for philanthropic activities. Advanced reporting capabilities provide detailed analytics on financial performance, goal achievement, and wealth building progress. The platform includes features for managing financial emergencies, providing guidance on accessing emergency funds and credit options. Integration with insurance providers enables users to compare coverage options and optimize insurance portfolios. Real-time financial coaching provides personalized guidance on financial decisions, market opportunities, and risk management strategies. The system includes features for managing financial education, tracking learning progress, and building financial literacy skills. Advanced predictive analytics help users anticipate financial needs, plan for major expenses, and optimize financial strategies. The platform includes comprehensive backup and recovery systems that protect financial data and ensure reliable access to financial planning tools. Integration with social security and government benefit systems enables comprehensive retirement and benefit planning. Real-time financial news and analysis provide context for financial decisions and market understanding. The system includes features for managing financial stress, providing resources for financial wellness, and supporting mental health in financial planning. Advanced portfolio optimization tools help users maximize returns while managing risk through sophisticated asset allocation strategies. The platform includes comprehensive customer support features that provide assistance with financial planning questions and technical issues. Real-time financial benchmarking enables users to compare their financial position with peers and industry standards. The system includes features for managing financial transitions, such as job changes, marriage, divorce, and retirement planning. Advanced financial modeling tools help users project future financial scenarios and plan for various life events and circumstances.",
        difficulty: "intermediate",
        category: "finance",
        topics: ["ai-ml", "finance", "productivity", "social"],
        skills: ["python", "ai", "javascript", "react", "financial-analysis", "data-science"],
        socialImpact: true,
        teamRoles: ["AI/ML Engineer", "Financial Advisor", "Full-stack Developer", "Data Scientist", "UI/UX Designer"],
        learningPath: [
            "Study financial markets and investment principles",
            "Learn financial data analysis and risk modeling",
            "Build AI models for financial prediction and optimization",
            "Create secure financial applications",
            "Implement regulatory compliance and security features"
        ],
        githubSearch: "AI personal finance advisor platform",
        githubLinks: [
            "https://github.com/quantopian/zipline",
            "https://github.com/ranaroussi/yfinance",
            "https://github.com/ai-finance/personal-advisor"
        ],
        presentationTips: [
            "Demonstrate personalized financial planning",
            "Show investment optimization and portfolio management",
            "Highlight financial education and literacy features",
            "Discuss security and regulatory compliance"
        ]
    },
    {
        id: 24,
        title: "Smart Transportation Network Platform",
        description: "A comprehensive transportation management system that optimizes public transit, ride-sharing, and mobility services using AI-powered routing, real-time tracking, and demand prediction.",
        detailedDescription: "This comprehensive Smart Transportation Network Platform represents a revolutionary approach to urban mobility that leverages advanced technology to create more efficient, accessible, and sustainable transportation systems. The platform addresses critical challenges in urban transportation including traffic congestion, inefficient public transit, limited accessibility, and environmental impact through intelligent optimization and real-time management. The system begins with comprehensive transportation monitoring that tracks vehicle locations, passenger demand, traffic conditions, and service performance in real-time across multiple transportation modes. Advanced AI algorithms analyze transportation patterns, predict demand fluctuations, and optimize routes to minimize travel times, reduce congestion, and improve service reliability. The platform features intelligent demand prediction that uses machine learning to anticipate transportation needs based on historical data, events, weather conditions, and real-time factors. Real-time optimization algorithms adjust service frequency, route assignments, and vehicle deployment to meet changing demand patterns and minimize wait times. The system includes comprehensive multimodal integration that coordinates different transportation options including buses, trains, ride-sharing, bike-sharing, and walking to provide seamless end-to-end journeys. Advanced user interfaces provide real-time information about service status, arrival times, and alternative routes to help passengers make informed transportation decisions. The platform features intelligent fare management that optimizes pricing strategies, provides flexible payment options, and ensures equitable access to transportation services. Real-time collaboration tools enable coordination between different transportation providers, emergency services, and urban planners to optimize overall transportation system performance. The system includes comprehensive accessibility features that ensure transportation services are available to individuals with disabilities, elderly passengers, and those with limited mobility. Advanced analytics provide insights into transportation patterns, service performance, and user satisfaction to inform system improvements and policy decisions. The platform features integration with smart city infrastructure to coordinate transportation with traffic management, parking systems, and urban planning initiatives. Real-time communication systems enable passengers to report issues, request assistance, and receive updates about service disruptions and delays. The system includes comprehensive environmental monitoring that tracks the environmental impact of transportation operations and helps optimize routes for minimal ecological footprint. Advanced predictive maintenance capabilities monitor vehicle health, identify potential issues, and schedule maintenance to prevent breakdowns and ensure reliable service. The platform features comprehensive customer support features that provide assistance with trip planning, fare questions, and service issues. Real-time performance tracking provides detailed analytics on service reliability, passenger satisfaction, and operational efficiency. The system includes features for managing transportation emergencies, coordinating response efforts, and minimizing service disruptions. Advanced machine learning capabilities enable the platform to continuously improve its optimization algorithms based on operational data and user feedback. The platform includes comprehensive security features that protect transportation infrastructure from cyber threats and ensure passenger safety. Integration with mobile applications enables passengers to plan trips, purchase tickets, and track their journeys in real-time. Real-time collaboration tools enable transportation providers to coordinate services, share resources, and optimize overall system performance. The system includes features for managing transportation data, ensuring privacy protection, and complying with data protection regulations. Advanced visualization tools help stakeholders understand complex transportation data and make informed decisions about system improvements. The platform includes features for managing transportation education and outreach programs to increase public awareness and encourage sustainable transportation choices. Real-time alerts and notifications keep passengers informed about service changes, delays, and important updates. The system includes features for managing transportation partnerships, coordinating with private providers, and optimizing public-private collaboration. Advanced forecasting capabilities help transportation agencies plan for future growth, changing demand patterns, and emerging transportation technologies. Real-time quality assurance tools ensure transportation services meet safety, reliability, and accessibility standards. The platform includes features for managing transportation research and development, supporting innovation in mobility technology and service delivery. Integration with electric vehicle infrastructure enables support for sustainable transportation options and reduces environmental impact. Real-time financial management tools help transportation agencies track costs, optimize revenue, and ensure financial sustainability. The system includes features for managing transportation workforce, coordinating schedules, and ensuring adequate staffing for reliable service delivery. Advanced data analytics provide insights into transportation equity, accessibility gaps, and opportunities for improving service for underserved communities. The platform includes comprehensive backup and recovery systems that ensure reliable operation of transportation services during emergencies and system failures. Integration with weather forecasting systems enables proactive management of weather-related transportation challenges and service adjustments. Real-time collaboration with emergency services enables rapid response to transportation incidents and coordination of emergency transportation needs.",
        difficulty: "advanced",
        category: "iot",
        topics: ["iot", "environment", "ai-ml", "social", "productivity"],
        skills: ["python", "iot", "ai", "javascript", "react", "transportation"],
        socialImpact: true,
        teamRoles: ["Transportation Engineer", "AI/ML Engineer", "Full-stack Developer", "Urban Planner", "UI/UX Designer"],
        learningPath: [
            "Learn transportation systems and urban mobility",
            "Study AI algorithms for route optimization and demand prediction",
            "Build real-time tracking and monitoring systems",
            "Create multimodal transportation coordination features",
            "Implement accessibility and equity features"
        ],
        githubSearch: "smart transportation network IoT platform",
        githubLinks: [
            "https://github.com/transit-app/transit",
            "https://github.com/mobility-data-specification/mobility-data-specification",
            "https://github.com/smart-transportation/network-platform"
        ],
        presentationTips: [
            "Show real-time transportation monitoring dashboard",
            "Demonstrate intelligent route optimization and demand prediction",
            "Highlight accessibility and environmental benefits",
            "Discuss efficiency improvements and user experience enhancements"
        ]
    },
    {
        id: 25,
        title: "Blockchain-Based Carbon Credit Trading Platform",
        description: "A decentralized platform that enables transparent, verifiable trading of carbon credits using blockchain technology to support environmental sustainability and climate action initiatives.",
        detailedDescription: "This innovative Blockchain-Based Carbon Credit Trading Platform represents a breakthrough in environmental finance and climate action, leveraging blockchain technology to create a transparent, efficient, and accessible market for carbon credits and environmental assets. The platform addresses critical challenges in carbon markets including lack of transparency, verification difficulties, market inefficiencies, and limited accessibility for small-scale environmental projects. The system begins with comprehensive carbon credit verification that uses blockchain technology to create immutable records of carbon reduction projects, ensuring transparency and preventing double-counting of environmental benefits. Advanced smart contracts automatically execute carbon credit transactions, manage escrow accounts, and distribute payments to project developers while ensuring compliance with regulatory requirements and market standards. The platform features intelligent carbon credit pricing that uses market dynamics, project quality, and environmental impact to determine fair market values for different types of carbon credits. Real-time market analytics provide insights into carbon credit supply, demand, pricing trends, and market opportunities to help participants make informed trading decisions. The system includes comprehensive project verification that uses IoT sensors, satellite imagery, and third-party audits to verify carbon reduction claims and ensure environmental integrity. Advanced analytics provide detailed insights into carbon credit performance, environmental impact, and market trends to inform investment decisions and policy development. The platform features integration with renewable energy projects, reforestation initiatives, and other environmental programs to expand the supply of high-quality carbon credits. Real-time collaboration tools enable coordination between project developers, investors, verifiers, and regulatory agencies to ensure efficient market operation. The system includes comprehensive regulatory compliance features that ensure adherence to international carbon market standards, national regulations, and voluntary carbon market protocols. Advanced security features protect against fraud, market manipulation, and cyber threats while maintaining market integrity and participant confidence. The platform features accessibility tools that ensure carbon credit trading benefits are available to small-scale project developers and individual investors. Integration with environmental monitoring systems enables real-time tracking of carbon reduction projects and verification of environmental outcomes. Real-time reporting capabilities provide detailed analytics on carbon credit transactions, market performance, and environmental impact. The system includes features for managing carbon credit retirement, ensuring that credits are properly retired to offset emissions and prevent double-counting. Advanced machine learning capabilities help detect market anomalies, predict price trends, and optimize trading strategies for market participants. The platform includes comprehensive educational resources that help participants understand carbon markets, environmental finance, and climate action strategies. Real-time notifications keep participants informed about market changes, regulatory updates, and important trading opportunities. The system includes features for managing carbon credit portfolios, tracking performance, and optimizing environmental investment strategies. Advanced verification tools ensure the quality and integrity of carbon credits through rigorous assessment of project methodologies and environmental outcomes. The platform includes features for managing carbon credit certification, ensuring compliance with international standards and voluntary market protocols. Real-time collaboration with environmental organizations enables coordination of climate action initiatives and expansion of carbon reduction projects. The system includes features for managing carbon credit auctions, enabling efficient price discovery and market clearing for carbon credit transactions. Advanced forecasting capabilities help participants anticipate market trends, regulatory changes, and opportunities in the carbon credit market. Real-time environmental impact tracking provides detailed analytics on the environmental benefits of carbon credit projects and market activities. The platform includes features for managing carbon credit derivatives, enabling risk management and advanced trading strategies for market participants. Integration with corporate sustainability programs enables businesses to offset their carbon footprint and achieve climate neutrality goals. Real-time market research provides insights into carbon market trends, policy developments, and investment opportunities. The system includes features for managing carbon credit insurance, protecting participants against project risks and market uncertainties. Advanced data analytics provide insights into carbon market efficiency, liquidity, and accessibility to inform market development and policy decisions. The platform includes comprehensive customer support features that provide assistance with carbon credit trading, project development, and market participation. Real-time collaboration with research institutions enables data collection for advancing carbon market knowledge and improving environmental outcomes. The system includes features for managing carbon credit education and outreach programs to increase public awareness and participation in climate action. Advanced integration capabilities enable the platform to work with existing carbon markets, environmental registries, and financial systems. Real-time quality assurance tools ensure carbon credit quality, market integrity, and environmental effectiveness. The platform includes features for managing carbon credit innovation, supporting new project types, and expanding market opportunities. Integration with climate finance initiatives enables coordination of funding for carbon reduction projects and climate action programs. Real-time performance monitoring tracks carbon market performance, environmental outcomes, and participant satisfaction. The system includes features for managing carbon credit legacy and ensuring long-term environmental impact of carbon reduction projects. Advanced research and development features support ongoing innovation in carbon market technology, verification methods, and environmental finance.",
        difficulty: "advanced",
        category: "blockchain",
        topics: ["blockchain", "environment", "finance", "social"],
        skills: ["solidity", "javascript", "react", "nodejs", "blockchain", "environmental-science"],
        socialImpact: true,
        teamRoles: ["Blockchain Developer", "Environmental Expert", "Full-stack Developer", "Financial Analyst", "UI/UX Designer"],
        learningPath: [
            "Learn blockchain fundamentals and smart contract development",
            "Study carbon markets and environmental finance",
            "Build transparent carbon credit trading systems",
            "Implement verification and compliance features",
            "Create user-friendly environmental finance interfaces"
        ],
        githubSearch: "blockchain carbon credit trading platform",
        githubLinks: [
            "https://github.com/ethereum/go-ethereum",
            "https://github.com/carbon-credit/trading-platform",
            "https://github.com/environmental-finance/blockchain-platform"
        ],
        presentationTips: [
            "Demonstrate transparent carbon credit trading",
            "Show verification and compliance features",
            "Highlight environmental impact and climate action",
            "Discuss market efficiency and accessibility improvements"
        ]
    }
];

// Quiz questions
const quizQuestions = [
    {
        question: "What's your primary goal for this hackathon?",
        options: [
            "Learn new technologies",
            "Build something impactful",
            "Win prizes",
            "Network with others"
        ]
    },
    {
        question: "What's your experience level?",
        options: [
            "Beginner (0-1 years)",
            "Intermediate (1-3 years)",
            "Advanced (3+ years)",
            "Expert (5+ years)"
        ]
    },
    {
        question: "What type of project interests you most?",
        options: [
            "Web applications",
            "Mobile apps",
            "AI/ML projects",
            "Social impact tools"
        ]
    },
    {
        question: "How much time can you dedicate?",
        options: [
            "Weekend only",
            "A few hours daily",
            "Full-time during hackathon",
            "Ongoing development"
        ]
    },
    {
        question: "What's your preferred team size?",
        options: [
            "Solo project",
            "2-3 people",
            "4-5 people",
            "6+ people"
        ]
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing app...');
    initializeApp();
    setupEventListeners();
    loadSavedIdeas();
    displayTeams();
    
    // Load hackathons and start timer
    fetchUpcomingHackathons().then(() => {
        displayUpcomingHackathons();
        startHackathonTimer();
    });
    
    loadGitHubProjects();
    console.log('App initialization complete');
});

function initializeApp() {
    // Create moving coding background
    createMovingCodingBackground();
    
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

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Active navigation highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Apply button styles
    setTimeout(applyButtonStyles, 500);
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Load user-submitted ideas
    loadUserSubmittedIdeas();
    
    // Apply button styles
    applyButtonStyles();
    
    // Generate ideas button
    const generateIdeasBtn = document.getElementById('generateIdeasBtn');
    console.log('Generate Ideas button:', generateIdeasBtn);
    if (generateIdeasBtn) {
        generateIdeasBtn.addEventListener('click', generateIdeas);
        console.log('Generate Ideas event listener added');
    }

    // Refresh API button
    const refreshApiBtn = document.getElementById('refreshApiBtn');
    if (refreshApiBtn) {
        refreshApiBtn.addEventListener('click', refreshApiIdeas);
    }

    // Topic selection
    setupTopicSelection();
    
    // Skills selection
    setupSkillsSelection();
}

function setupTopicSelection() {
    const topicsGrid = document.getElementById('topicsGrid');
    if (!topicsGrid) return;

    topicsGrid.innerHTML = topicCategories.map(topic => `
        <div class="topic-card" data-topic="${topic.id}" style="border-left: 4px solid ${topic.color}">
            <div class="topic-header">
                <div class="topic-icon" style="background: ${topic.color}20">${topic.icon}</div>
                <div class="topic-content">
                    <h4>${topic.name}</h4>
                    <p>${topic.description}</p>
                </div>
                <div class="topic-checkbox">
                    <input type="checkbox" id="topic-${topic.id}" value="${topic.id}">
                    <label for="topic-${topic.id}">
                        <i class="fas fa-check"></i>
                    </label>
                </div>
            </div>
            <div class="topic-examples">
                <h5>Example Projects:</h5>
                <div class="example-tags">
                    ${topic.examples.map(example => `<span class="example-tag">${example}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners for topic selection
    topicsGrid.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const topicId = e.target.value;
            const topicCard = e.target.closest('.topic-card');
            
            if (e.target.checked) {
                selectedTopics.add(topicId);
                topicCard.classList.add('selected');
                topicCard.style.transform = 'translateY(-4px)';
                topicCard.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            } else {
                selectedTopics.delete(topicId);
                topicCard.classList.remove('selected');
                topicCard.style.transform = 'translateY(0)';
                topicCard.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
        }
    });

    // Add click event for topic cards
    topicsGrid.addEventListener('click', (e) => {
        const topicCard = e.target.closest('.topic-card');
        if (topicCard && e.target.type !== 'checkbox' && !e.target.closest('.topic-checkbox')) {
            const checkbox = topicCard.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event('change'));
        }
    });
}

function setupSkillsSelection() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = skillsData.map(category => `
        <div class="skill-category">
            <h3>${category.category}</h3>
            <div class="skill-tags">
                ${category.skills.map(skill => `
                    <label class="skill-tag">
                        <input type="checkbox" value="${skill.toLowerCase().replace(/\s+/g, '')}">
                        <span>${skill}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Add event listeners for skill selection
    skillsGrid.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const skillValue = e.target.value;
            
            if (e.target.checked) {
                selectedSkills.add(skillValue);
            } else {
                selectedSkills.delete(skillValue);
            }
        }
    });

    // Quiz button
    const startQuizBtn = document.getElementById('startQuizBtn');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', startQuiz);
    }

    // Explore ideas button
    const exploreIdeasBtn = document.getElementById('exploreIdeasBtn');
    if (exploreIdeasBtn) {
        exploreIdeasBtn.addEventListener('click', () => {
            document.getElementById('ideas').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Filter event listeners
    const difficultyFilter = document.getElementById('difficultyFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', filterIdeas);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterIdeas);
    }

    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModal);
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    });

    // Team finder buttons
    const createTeamBtn = document.getElementById('createTeamBtn');
    const joinTeamBtn = document.getElementById('joinTeamBtn');
    
    if (createTeamBtn) {
        createTeamBtn.addEventListener('click', createTeam);
    }
    if (joinTeamBtn) {
        joinTeamBtn.addEventListener('click', joinTeam);
    }

    // Add idea button
    const addIdeaBtn = document.getElementById('addIdeaBtn');
    if (addIdeaBtn) {
        addIdeaBtn.addEventListener('click', showAddIdeaModal);
    }

    // Add idea form
    const addIdeaForm = document.getElementById('addIdeaForm');
    if (addIdeaForm) {
        addIdeaForm.addEventListener('submit', handleAddIdea);
    }

    // Cancel add idea button
    const cancelAddIdeaBtn = document.getElementById('cancelAddIdea');
    if (cancelAddIdeaBtn) {
        cancelAddIdeaBtn.addEventListener('click', closeAddIdeaModal);
    }

    // Navigation smooth scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        mobileMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

async function generateIdeas() {
    if (isLoading) return;
    
    isLoading = true;
    const generateBtn = document.getElementById('generateIdeasBtn');
    const originalText = generateBtn.innerHTML;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading Ideas...';
    generateBtn.disabled = true;
    
    try {
        // Get selected skills and topics
        const selectedSkillsArray = Array.from(selectedSkills);
        const selectedTopicsArray = Array.from(selectedTopics);
        const socialImpactFilter = document.getElementById('socialImpact').checked;
        
        // Filter local ideas based on skills, topics, and preferences
        let filteredIdeas = projectIdeas.filter(idea => {
            const hasRequiredSkills = selectedSkillsArray.length === 0 || 
                idea.skills.some(skill => selectedSkillsArray.includes(skill));
            const matchesTopics = selectedTopicsArray.length === 0 || 
                (idea.topics && idea.topics.some(topic => selectedTopicsArray.includes(topic)));
            const matchesSocialImpact = !socialImpactFilter || idea.socialImpact;
            return hasRequiredSkills && matchesTopics && matchesSocialImpact;
        });

        // If no skills or topics selected, show all local ideas
        if (selectedSkillsArray.length === 0 && selectedTopicsArray.length === 0) {
            filteredIdeas = projectIdeas.filter(idea => {
                return !socialImpactFilter || idea.socialImpact;
            });
        }

        // Fetch additional ideas from APIs
        const apiPromises = [];
        
        // GitHub projects based on selected skills
        if (selectedSkillsArray.length > 0) {
            selectedSkillsArray.forEach(skill => {
                apiPromises.push(fetchGitHubProjects(skill, 3));
            });
        } else {
            // Default searches if no skills selected
            apiPromises.push(fetchGitHubProjects('hackathon project', 5));
        }
        
        // Social impact projects if filter is enabled
        if (socialImpactFilter) {
            apiPromises.push(fetchOpenSourceIdeas());
        }
        
        // Fetch all API data
        const apiResults = await Promise.all(apiPromises);
        const apiIdeas = apiResults.flat();
        
        // Filter API ideas based on preferences
        const filteredApiIdeas = apiIdeas.filter(idea => {
            const hasRequiredSkills = selectedSkillsArray.length === 0 || 
                idea.skills.some(skill => selectedSkillsArray.includes(skill));
            const matchesTopics = selectedTopicsArray.length === 0 || 
                (idea.topics && idea.topics.some(topic => selectedTopicsArray.includes(topic)));
            const matchesSocialImpact = !socialImpactFilter || idea.socialImpact;
            return hasRequiredSkills && matchesTopics && matchesSocialImpact;
        });
        
        // Combine local and API ideas
        const allIdeas = [...filteredIdeas, ...filteredApiIdeas];
        
        // Remove duplicates based on title
        const uniqueIdeas = allIdeas.filter((idea, index, self) => 
            index === self.findIndex(i => i.title.toLowerCase() === idea.title.toLowerCase())
        );
        
        // Sort by difficulty (beginner first), then by source (local first)
        uniqueIdeas.sort((a, b) => {
            const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
            const difficultyDiff = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
            
            if (difficultyDiff !== 0) return difficultyDiff;
            
            // Local ideas first, then API ideas
            const aIsLocal = projectIdeas.some(local => local.id === a.id);
            const bIsLocal = projectIdeas.some(local => local.id === b.id);
            
            if (aIsLocal && !bIsLocal) return -1;
            if (!aIsLocal && bIsLocal) return 1;
            return 0;
        });
        
        displayIdeas(uniqueIdeas);
        
        // Show success message
        showNotification(`Found ${uniqueIdeas.length} project ideas!`, 'success');
        
        // Scroll to ideas section
        document.getElementById('ideas').scrollIntoView({ behavior: 'smooth' });
        
    } catch (error) {
        console.error('Error generating ideas:', error);
        showNotification('Error loading ideas. Please try again.', 'error');
        
        // Fallback to local ideas only
        const selectedSkillsArray = Array.from(selectedSkills);
        const selectedTopicsArray = Array.from(selectedTopics);
        const socialImpactFilter = document.getElementById('socialImpact').checked;
        
        let filteredIdeas = projectIdeas.filter(idea => {
            const hasRequiredSkills = selectedSkillsArray.length === 0 || 
                idea.skills.some(skill => selectedSkillsArray.includes(skill));
            const matchesTopics = selectedTopicsArray.length === 0 || 
                (idea.topics && idea.topics.some(topic => selectedTopicsArray.includes(topic)));
            const matchesSocialImpact = !socialImpactFilter || idea.socialImpact;
            return hasRequiredSkills && matchesTopics && matchesSocialImpact;
        });

        if (selectedSkillsArray.length === 0 && selectedTopicsArray.length === 0) {
            filteredIdeas = projectIdeas.filter(idea => {
                return !socialImpactFilter || idea.socialImpact;
            });
        }
        
        displayIdeas(filteredIdeas);
    } finally {
        isLoading = false;
        generateBtn.innerHTML = originalText;
        generateBtn.disabled = false;
    }
}

function displayIdeas(ideas) {
    const ideasGrid = document.getElementById('ideasGrid');
    if (!ideasGrid) return;

    ideasGrid.innerHTML = '';

    if (ideas.length === 0) {
        ideasGrid.innerHTML = `
            <div class="no-ideas">
                <h3>No ideas found</h3>
                <p>Try selecting different skills or adjusting your filters.</p>
            </div>
        `;
        return;
    }

    ideas.forEach(idea => {
        const ideaCard = createIdeaCard(idea);
        ideasGrid.appendChild(ideaCard);
    });
}

function createIdeaCard(idea) {
    const card = document.createElement('div');
    card.className = 'idea-card';
    
    card.innerHTML = `
        <div class="idea-header">
            <h3 class="idea-title">${idea.title}</h3>
            <div class="idea-meta">
                <span class="idea-difficulty ${idea.difficulty}">${idea.difficulty}</span>
                <span class="idea-category">${idea.category}</span>
                ${idea.socialImpact ? '<span class="idea-social-impact">🌱 Social Impact</span>' : ''}
                ${idea.source === 'user-submitted' ? '<span class="idea-user-submitted">👤 User Submitted</span>' : ''}
                ${idea.source && idea.source !== 'local' && idea.source !== 'user-submitted' ? `<span class="idea-source">📡 ${idea.source}</span>` : ''}
            </div>
        </div>
        <div class="idea-body">
            <p class="idea-description">${idea.description}</p>
            <div class="idea-skills">
                ${idea.skills.map(skill => `<span class="idea-skill">${skill}</span>`).join('')}
            </div>
            ${idea.stars ? `<div class="idea-stats">
                <span class="idea-stars">⭐ ${idea.stars.toLocaleString()} stars</span>
                ${idea.language ? `<span class="idea-language">💻 ${idea.language}</span>` : ''}
            </div>` : ''}
            <div class="idea-actions">
                <button class="btn btn-primary" onclick="saveIdea(${idea.id})">
                    <i class="fas fa-bookmark"></i>
                    Save
                </button>
                
            </div>
            <div class="idea-secondary-actions">
                <button class="btn btn-outline" onclick="viewIdeaDetails(${idea.id})">
                    <i class="fas fa-info-circle"></i>
                    Details
                </button>
                <button class="btn btn-outline" onclick="showGitHubLinks(${idea.id})">
                    <i class="fab fa-github"></i>
                    GitHub Links
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function saveIdea(ideaId) {
    const idea = projectIdeas.find(i => i.id === ideaId);
    if (!idea) return;

    const savedIdea = {
        ...idea,
        savedAt: new Date().toISOString(),
        notes: ''
    };

    // Check if already saved
    const existingIndex = savedIdeas.findIndex(saved => saved.id === ideaId);
    if (existingIndex !== -1) {
        savedIdeas[existingIndex] = savedIdea;
    } else {
        savedIdeas.push(savedIdea);
    }

    localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
    
    // Show success message
    showNotification('Idea saved to your journal!', 'success');
}

function viewIdeaDetails(ideaId) {
    const idea = projectIdeas.find(i => i.id === ideaId);
    if (!idea) return;

    const modal = document.getElementById('ideaJournalModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="idea-details">
            <h3>${idea.title}</h3>
            <p class="idea-description">${idea.description}</p>
            
            <div class="idea-info">
                <h4>Team Roles</h4>
                <ul>
                    ${idea.teamRoles.map(role => `<li>${role}</li>`).join('')}
                </ul>
                
                <h4>Learning Path</h4>
                <ol>
                    ${idea.learningPath.map(step => `<li>${step}</li>`).join('')}
                </ol>
                
                <h4>Presentation Tips</h4>
                <ul>
                    ${idea.presentationTips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            
            <div class="idea-actions">
                <button class="btn btn-primary" onclick="saveIdea(${idea.id})">
                    <i class="fas fa-bookmark"></i>
                    Save to Journal
                </button>
                <button class="btn btn-outline" onclick="findGitHubProjects('${idea.githubSearch}')">
                    <i class="fab fa-github"></i>
                    Find Similar Projects
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function startQuiz() {
    currentQuizQuestion = 0;
    quizAnswers = [];
    
    const modal = document.getElementById('quizModal');
    const quizContainer = document.getElementById('quizContainer');
    
    showQuizQuestion();
    modal.style.display = 'block';
}

function showQuizQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    const question = quizQuestions[currentQuizQuestion];
    
    quizContainer.innerHTML = `
        <div class="quiz-question">
            <h4>Question ${currentQuizQuestion + 1} of ${quizQuestions.length}</h4>
            <p>${question.question}</p>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectQuizOption(${index})">
                        <span>${option}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function selectQuizOption(optionIndex) {
    quizAnswers[currentQuizQuestion] = optionIndex;
    
    // Remove selected class from all options
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selected class to chosen option
    event.target.closest('.quiz-option').classList.add('selected');
    
    // Wait a moment then move to next question
    setTimeout(() => {
        currentQuizQuestion++;
        
        if (currentQuizQuestion < quizQuestions.length) {
            showQuizQuestion();
        } else {
            showQuizResults();
        }
    }, 500);
}

function showQuizResults() {
    const quizContainer = document.getElementById('quizContainer');
    
    // Analyze answers and recommend ideas
    const recommendations = analyzeQuizAnswers();
    
    quizContainer.innerHTML = `
        <div class="quiz-results">
            <h4>Your Perfect Project Matches</h4>
            <div class="recommendations">
                ${recommendations.map(idea => `
                    <div class="recommendation-card">
                        <h5>${idea.title}</h5>
                        <p>${idea.description}</p>
                        <div class="recommendation-actions">
                            <button class="btn btn-primary" onclick="saveIdea(${idea.id})">
                                Save Idea
                            </button>
                            <button class="btn btn-outline" onclick="viewIdeaDetails(${idea.id})">
                                Learn More
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" onclick="closeModal()">
                Start Building!
            </button>
        </div>
    `;
}

function analyzeQuizAnswers() {
    // Simple recommendation logic based on quiz answers
    let recommendedIdeas = [...projectIdeas];
    
    // Filter based on experience level
    const experienceLevel = quizAnswers[1];
    if (experienceLevel === 0) { // Beginner
        recommendedIdeas = recommendedIdeas.filter(idea => idea.difficulty === 'beginner');
    } else if (experienceLevel === 1) { // Intermediate
        recommendedIdeas = recommendedIdeas.filter(idea => idea.difficulty !== 'advanced');
    }
    
    // Filter based on project type preference
    const projectType = quizAnswers[2];
    if (projectType === 3) { // Social impact
        recommendedIdeas = recommendedIdeas.filter(idea => idea.socialImpact);
    }
    
    return recommendedIdeas.slice(0, 3); // Return top 3 recommendations
}

function filterIdeas() {
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    
    let filteredIdeas = projectIdeas;
    
    if (difficultyFilter) {
        filteredIdeas = filteredIdeas.filter(idea => idea.difficulty === difficultyFilter);
    }
    
    if (categoryFilter) {
        filteredIdeas = filteredIdeas.filter(idea => idea.category === categoryFilter);
    }
    
    displayIdeas(filteredIdeas);
}

async function fetchUpcomingHackathons() {
    try {
        // Sample hackathon data
        const hackathonData = [
            {
                name: "HackMIT 2024",
                date: "2024-12-15",
                location: "Cambridge, MA",
                description: "MIT's premier hackathon for students worldwide.",
                url: "https://hackmit.org/",
                type: "University"
            },
            {
                name: "PennApps 2024",
                date: "2024-12-20",
                location: "Philadelphia, PA",
                description: "University of Pennsylvania's hackathon focused on innovation.",
                url: "https://pennapps.com/",
                type: "University"
            },
            {
                name: "Hack the Valley 2024",
                date: "2024-12-25",
                location: "Toronto, Canada",
                description: "Canada's largest student hackathon with focus on AI and fintech.",
                url: "https://hackthevalley.io/",
                type: "University"
            }
        ];
        
        // Sort by date
        hackathonData.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        upcomingHackathons = hackathonData;
        return hackathonData;
        
    } catch (error) {
        console.error('Error fetching hackathons:', error);
        return [];
    }
}

function startHackathonTimer() {
    // Get the next upcoming hackathon
    const nextHackathon = upcomingHackathons.length > 0 ? 
        new Date(upcomingHackathons[0].date) : 
        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = nextHackathon.getTime() - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(timerInterval);
            const countdownElement = document.getElementById('countdown');
            if (countdownElement) {
                countdownElement.innerHTML = '<h3>Hackathon is Live!</h3>';
            }
        }
    }
    
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function displayUpcomingHackathons() {
    const hackathonTimer = document.getElementById('hackathonTimer');
    if (!hackathonTimer) return;
    
    if (upcomingHackathons.length === 0) {
        hackathonTimer.innerHTML = `
            <div class="timer-card">
                <h3>No Upcoming Hackathons</h3>
                <p>Check back later for new hackathon announcements!</p>
            </div>
        `;
        return;
    }
    
    const nextHackathon = upcomingHackathons[0];
    const otherHackathons = upcomingHackathons.slice(1, 4);
    
    hackathonTimer.innerHTML = `
        <div class="timer-card">
            <h3>${nextHackathon.name}</h3>
            <p class="hackathon-info">
                <span class="hackathon-date">📅 ${new Date(nextHackathon.date).toLocaleDateString()}</span>
                <span class="hackathon-location">📍 ${nextHackathon.location}</span>
                <span class="hackathon-type">🏆 ${nextHackathon.type}</span>
            </p>
            <p class="hackathon-description">${nextHackathon.description}</p>
            <div class="countdown" id="countdown">
                <div class="time-unit">
                    <span id="days">00</span>
                    <label>Days</label>
                </div>
                <div class="time-unit">
                    <span id="hours">00</span>
                    <label>Hours</label>
                </div>
                <div class="time-unit">
                    <span id="minutes">00</span>
                    <label>Minutes</label>
                </div>
                <div class="time-unit">
                    <span id="seconds">00</span>
                    <label>Seconds</label>
                </div>
            </div>
            <div class="hackathon-actions">
                <button class="btn btn-primary" onclick="window.open('${nextHackathon.url}', '_blank')">
                    Learn More
                </button>
                <button class="btn btn-outline" onclick="showAllHackathons()">
                    View All Hackathons
                </button>
            </div>
        </div>
        
        ${otherHackathons.length > 0 ? `
            <div class="other-hackathons">
                <h4>Other Upcoming Hackathons</h4>
                <div class="hackathon-list">
                    ${otherHackathons.map(hack => `
                        <div class="hackathon-item">
                            <div class="hackathon-header">
                                <h5>${hack.name}</h5>
                                <span class="hackathon-type">${hack.type === "University" ? "🏆 <span class='university-highlight' style='color: #ffff00 !important; background: #000000 !important; font-weight: bold !important;'>University</span>" : hack.type}</span>
                            </div>
                            <p class="hackathon-date">📅 ${new Date(hack.date).toLocaleDateString()}</p>
                            <p class="hackathon-location">📍 ${hack.location}</p>
                            <button class="btn btn-outline btn-small" onclick="window.open('${hack.url}', '_blank')">
                                Learn More
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    `;
}

function showAllHackathons() {
    const modal = document.getElementById('ideaJournalModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="all-hackathons">
            <h3>Upcoming Hackathons</h3>
            <div class="hackathon-grid">
                ${upcomingHackathons.map(hack => `
                    <div class="hackathon-card">
                        <div class="hackathon-header">
                            <h4>${hack.name}</h4>
                            <span class="hackathon-type">${hack.type === "University" ? "🏆 <span class='university-highlight' style='color: #ffff00 !important; background: #000000 !important; font-weight: bold !important;'>University</span>" : hack.type}</span>
                        </div>
                        <div class="hackathon-info">
                            <p class="hackathon-date">📅 ${new Date(hack.date).toLocaleDateString()}</p>
                            <p class="hackathon-location">📍 ${hack.location}</p>
                            <p class="hackathon-description">${hack.description}</p>
                        </div>
                        <div class="hackathon-actions">
                            <button class="btn btn-primary" onclick="window.open('${hack.url}', '_blank')">
                                Learn More
                            </button>
                            <button class="btn btn-outline" onclick="createTeamForHackathon('${hack.name}')">
                                Create Team
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function createTeamForHackathon(hackathonName) {
    // Pre-fill the hackathon field when creating a team
    createTeam();
    
    // Set the hackathon value after the form is created
    setTimeout(() => {
        const hackathonSelect = document.getElementById('hackathon');
        if (hackathonSelect) {
            hackathonSelect.value = hackathonName;
        }
    }, 100);
}

async function loadGitHubProjects() {
    const githubProjectsContainer = document.getElementById('githubProjects');
    if (!githubProjectsContainer) return;

    // Sample GitHub projects (in a real app, you'd fetch from GitHub API)
    const sampleProjects = [
        {
            name: "Phishing Awareness Tool",
            url: "https://github.com/OWASP/owasp-phishing-prevention",
            description: "OWASP's comprehensive phishing prevention guide"
        },
        {
            name: "Traffic Management AI",
            url: "https://github.com/IBM/traffic-prediction",
            description: "IBM's AI-powered traffic prediction system"
        },
        {
            name: "Volunteer Matching Platform",
            url: "https://github.com/volunteer-match/volunteer-platform",
            description: "Open source volunteer matching system"
        },
        {
            name: "Mental Health Chatbot",
            url: "https://github.com/microsoft/BotFramework-Emulator",
            description: "Microsoft's bot framework for mental health apps"
        },
        {
            name: "Personal Finance Tracker",
            url: "https://github.com/firefly-iii/firefly-iii",
            description: "Popular open source personal finance manager"
        },
        {
            name: "Eco-Friendly Shopping Assistant",
            url: "https://github.com/ecosia/ecosia-browser-extension",
            description: "Browser extension for sustainable shopping"
        },
        {
            name: "Local Business Discovery",
            url: "https://github.com/openstreetmap/openstreetmap-website",
            description: "OpenStreetMap for local business discovery"
        },
        {
            name: "Educational Game Platform",
            url: "https://github.com/scratchfoundation/scratch-gui",
            description: "Scratch's educational game development platform"
        }
    ];

    githubProjectsContainer.innerHTML = sampleProjects.map(project => `
        <div class="github-project" onclick="window.open('${project.url}', '_blank')">
            <i class="fab fa-github"></i>
            <div>
                <strong>${project.name}</strong>
                <p>${project.description}</p>
            </div>
        </div>
    `).join('');
}

function findGitHubProjects(searchTerm) {
    const githubUrl = `https://github.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(githubUrl, '_blank');
}

function showGitHubLinks(ideaId) {
    const idea = projectIdeas.find(i => i.id === ideaId);
    if (!idea || !idea.githubLinks) return;

    const modal = document.getElementById('ideaJournalModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="github-links">
            <h3>GitHub Projects for: ${idea.title}</h3>
            <p>Here are some relevant open-source projects you can study and learn from:</p>
            
            <div class="github-projects-list">
                ${idea.githubLinks.map((link, index) => {
                    const projectName = link.split('/').slice(-2).join('/');
                    return `
                        <div class="github-project-item">
                            <div class="project-info">
                                <h4>${projectName}</h4>
                                <p>${getProjectDescription(idea.title, index)}</p>
                            </div>
                            <div class="project-actions">
                                <button class="btn btn-primary" onclick="window.open('${link}', '_blank')">
                                    <i class="fab fa-github"></i>
                                    View Project
                                </button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="github-search">
                <p>Want to find more projects?</p>
                <button class="btn btn-outline" onclick="findGitHubProjects('${idea.githubSearch}')">
                    <i class="fab fa-github"></i>
                    Search GitHub
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function getProjectDescription(ideaTitle, index) {
    const descriptions = {
        "Phishing Awareness Training Platform": [
            "OWASP's comprehensive guide for phishing prevention and awareness training",
            "Microsoft's phishing simulation tool for security training",
            "Open-source toolkit for creating phishing awareness programs"
        ],
        "Smart Traffic Management System": [
            "IBM's AI-powered traffic prediction and optimization system",
            "Uber's traffic analysis and prediction platform",
            "Google Research's traffic prediction algorithms"
        ],
        "Volunteer Matching Platform": [
            "Open-source volunteer matching and management system",
            "Code for America's volunteer coordination platform",
            "Community-driven volunteer connection platform"
        ],
        "Personal Finance Tracker": [
            "Popular open-source personal finance management system",
            "Modern budgeting application with cloud sync",
            "Command-line personal finance tracker"
        ],
        "Eco-Friendly Shopping Assistant": [
            "Browser extension for sustainable shopping decisions",
            "Greenpeace's environmental impact browser extension",
            "Ethical consumer shopping assistant"
        ],
        "Mental Health Support Chatbot": [
            "Microsoft's bot framework for building mental health applications",
            "AI-powered mental health conversation bot",
            "Open-source chatbot framework for mental health"
        ],
        "Local Business Discovery App": [
            "OpenStreetMap's local business and location platform",
            "Foursquare's location-based business discovery API",
            "Yelp's business discovery and review platform"
        ],
        "Educational Game Platform": [
            "MIT's Scratch visual programming platform for education",
            "Khan Academy's interactive exercise platform",
            "Duolingo's language learning API and platform"
        ]
    };
    
    return descriptions[ideaTitle]?.[index] || "Relevant open-source project for learning and inspiration";
}

function createTeam() {
    const modal = document.getElementById('ideaJournalModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="team-creation">
            <h3>Create a New Team</h3>
            <form id="createTeamForm" class="team-form">
                <div class="form-group">
                    <label for="teamName">Team Name *</label>
                    <input type="text" id="teamName" required placeholder="Enter team name">
                </div>
                
                <div class="form-group">
                    <label for="projectIdea">Project Idea *</label>
                    <textarea id="projectIdea" required placeholder="Describe your project idea"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="teamSize">Team Size</label>
                    <select id="teamSize">
                        <option value="2-3">2-3 people</option>
                        <option value="4-5">4-5 people</option>
                        <option value="6+">6+ people</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="requiredSkills">Required Skills</label>
                    <div class="skills-checkboxes">
                        <label><input type="checkbox" value="javascript"> JavaScript</label>
                        <label><input type="checkbox" value="react"> React</label>
                        <label><input type="checkbox" value="python"> Python</label>
                        <label><input type="checkbox" value="nodejs"> Node.js</label>
                        <label><input type="checkbox" value="design"> UI/UX Design</label>
                        <label><input type="checkbox" value="ai"> AI/ML</label>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="hackathon">Target Hackathon</label>
                    <select id="hackathon">
                        <option value="">Any hackathon</option>
                        ${upcomingHackathons.map(hack => `<option value="${hack.name}">${hack.name}</option>`).join('')}
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="contactInfo">Contact Information</label>
                    <input type="text" id="contactInfo" placeholder="Email, Discord, or phone">
                </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Create Team</button>
                    <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Add form submission handler
    document.getElementById('createTeamForm').addEventListener('submit', handleCreateTeam);
}

function handleCreateTeam(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const teamName = document.getElementById('teamName').value;
    const projectIdea = document.getElementById('projectIdea').value;
    const teamSize = document.getElementById('teamSize').value;
    const hackathon = document.getElementById('hackathon').value;
    const contactInfo = document.getElementById('contactInfo').value;
    
    // Get selected skills
    const requiredSkills = Array.from(document.querySelectorAll('.skills-checkboxes input:checked'))
        .map(cb => cb.value);
    
    const newTeam = {
        id: Date.now(),
        name: teamName,
        projectIdea: projectIdea,
        teamSize: teamSize,
        requiredSkills: requiredSkills,
        hackathon: hackathon,
        contactInfo: contactInfo,
        members: [],
        createdAt: new Date().toISOString(),
        status: 'recruiting'
    };
    
    teams.push(newTeam);
    localStorage.setItem('teams', JSON.stringify(teams));
    
    showNotification('Team created successfully!', 'success');
    closeModal();
    displayTeams();
}

function joinTeam() {
    const modal = document.getElementById('ideaJournalModal');
    const modalBody = modal.querySelector('.modal-body');
    
    if (teams.length === 0) {
        modalBody.innerHTML = `
            <div class="no-teams">
                <h3>No Teams Available</h3>
                <p>There are currently no teams looking for members. Be the first to create a team!</p>
                <button class="btn btn-primary" onclick="createTeam()">Create a Team</button>
            </div>
        `;
    } else {
        modalBody.innerHTML = `
            <div class="team-browsing">
                <h3>Available Teams</h3>
                <div class="teams-list">
                    ${teams.filter(team => team.status === 'recruiting').map(team => `
                        <div class="team-item">
                            <div class="team-header">
                                <h4>${team.name}</h4>
                                <span class="team-status ${team.status}">${team.status}</span>
                            </div>
                            <p class="team-project">${team.projectIdea}</p>
                            <div class="team-details">
                                <span class="team-size">👥 ${team.teamSize}</span>
                                <span class="team-skills">🛠️ ${team.requiredSkills.join(', ')}</span>
                                ${team.hackathon ? `<span class="team-hackathon">🏆 ${team.hackathon}</span>` : ''}
                            </div>
                            <div class="team-contact">
                                <strong>Contact:</strong> ${team.contactInfo}
                            </div>
                            <div class="team-actions">
                                <button class="btn btn-primary" onclick="joinSpecificTeam(${team.id})">Join Team</button>
                                <button class="btn btn-outline" onclick="viewTeamDetails(${team.id})">View Details</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    modal.style.display = 'block';
}

function joinSpecificTeam(teamId) {
    const team = teams.find(t => t.id === teamId);
    if (!team) return;
    
    const modal = document.getElementById('ideaJournalModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="join-team">
            <h3>Join Team: ${team.name}</h3>
            <p><strong>Project:</strong> ${team.projectIdea}</p>
            <p><strong>Required Skills:</strong> ${team.requiredSkills.join(', ')}</p>
            
            <form id="joinTeamForm" class="team-form">
                <div class="form-group">
                    <label for="memberName">Your Name *</label>
                    <input type="text" id="memberName" required placeholder="Enter your name">
                </div>
                
                <div class="form-group">
                    <label for="memberSkills">Your Skills</label>
                    <div class="skills-checkboxes">
                        <label><input type="checkbox" value="javascript"> JavaScript</label>
                        <label><input type="checkbox" value="react"> React</label>
                        <label><input type="checkbox" value="python"> Python</label>
                        <label><input type="checkbox" value="nodejs"> Node.js</label>
                        <label><input type="checkbox" value="design"> UI/UX Design</label>
                        <label><input type="checkbox" value="ai"> AI/ML</label>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="memberContact">Your Contact Info *</label>
                    <input type="text" id="memberContact" required placeholder="Email, Discord, or phone">
                </div>
                
                <div class="form-group">
                    <label for="memberMessage">Message to Team</label>
                    <textarea id="memberMessage" placeholder="Why do you want to join this team?"></textarea>
                </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Send Join Request</button>
                    <button type="button" class="btn btn-outline" onclick="joinTeam()">Back to Teams</button>
                </div>
            </form>
        </div>
    `;
    
    document.getElementById('joinTeamForm').addEventListener('submit', (e) => handleJoinTeam(e, teamId));
}

function handleJoinTeam(e, teamId) {
    e.preventDefault();
    
    const memberName = document.getElementById('memberName').value;
    const memberContact = document.getElementById('memberContact').value;
    const memberMessage = document.getElementById('memberMessage').value;
    
    const memberSkills = Array.from(document.querySelectorAll('.skills-checkboxes input:checked'))
        .map(cb => cb.value);
    
    const team = teams.find(t => t.id === teamId);
    if (!team) return;
    
    const newMember = {
        name: memberName,
        skills: memberSkills,
        contact: memberContact,
        message: memberMessage,
        joinedAt: new Date().toISOString()
    };
    
    team.members.push(newMember);
    localStorage.setItem('teams', JSON.stringify(teams));
    
    showNotification(`Join request sent to ${team.name}!`, 'success');
    closeModal();
}

function viewTeamDetails(teamId) {
    const team = teams.find(t => t.id === teamId);
    if (!team) return;
    
    const modal = document.getElementById('ideaJournalModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="team-details-view">
            <h3>${team.name}</h3>
            <div class="team-info">
                <p><strong>Project Idea:</strong> ${team.projectIdea}</p>
                <p><strong>Team Size:</strong> ${team.teamSize}</p>
                <p><strong>Required Skills:</strong> ${team.requiredSkills.join(', ')}</p>
                ${team.hackathon ? `<p><strong>Target Hackathon:</strong> ${team.hackathon}</p>` : ''}
                <p><strong>Contact:</strong> ${team.contactInfo}</p>
                <p><strong>Created:</strong> ${new Date(team.createdAt).toLocaleDateString()}</p>
            </div>
            
            ${team.members.length > 0 ? `
                <div class="team-members">
                    <h4>Team Members (${team.members.length})</h4>
                    ${team.members.map(member => `
                        <div class="member-item">
                            <div class="member-info">
                                <strong>${member.name}</strong>
                                <span class="member-skills">${member.skills.join(', ')}</span>
                            </div>
                            <div class="member-contact">${member.contact}</div>
                            ${member.message ? `<div class="member-message">"${member.message}"</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : '<p>No members yet. Be the first to join!</p>'}
            
            <div class="team-actions">
                <button class="btn btn-primary" onclick="joinSpecificTeam(${team.id})">Join Team</button>
                <button class="btn btn-outline" onclick="joinTeam()">Back to Teams</button>
            </div>
        </div>
    `;
}

function displayTeams() {
    const teamsList = document.getElementById('teamsList');
    if (!teamsList) return;
    
    if (teams.length === 0) {
        teamsList.innerHTML = '';
        return;
    }
    
    teamsList.innerHTML = teams.map(team => `
        <div class="team-card">
            <div class="team-header">
                <h3>${team.name}</h3>
                <span class="team-status ${team.status}">${team.status}</span>
            </div>
            <p class="team-project">${team.projectIdea}</p>
            <div class="team-meta">
                <span class="team-size">👥 ${team.teamSize}</span>
                <span class="team-members">${team.members.length} members</span>
                <span class="team-skills">🛠️ ${team.requiredSkills.join(', ')}</span>
            </div>
            <div class="team-actions">
                <button class="btn btn-primary" onclick="viewTeamDetails(${team.id})">View Details</button>
                <button class="btn btn-outline" onclick="joinSpecificTeam(${team.id})">Join Team</button>
            </div>
        </div>
    `).join('');
}

function loadSavedIdeas() {
    const savedIdeasContainer = document.getElementById('savedIdeas');
    if (!savedIdeasContainer) return;

    if (savedIdeas.length === 0) {
        savedIdeasContainer.innerHTML = '<p>No saved ideas yet. Start exploring projects to save them here!</p>';
        return;
    }

    savedIdeasContainer.innerHTML = savedIdeas.map(idea => `
        <div class="saved-idea">
            <h4>${idea.title}</h4>
            <p>${idea.description}</p>
            <small>Saved on ${new Date(idea.savedAt).toLocaleDateString()}</small>
            <div class="saved-idea-actions">
                <button class="btn btn-outline" onclick="viewIdeaDetails(${idea.id})">
                    View Details
                </button>
                <button class="btn btn-outline" onclick="removeSavedIdea(${idea.id})">
                    Remove
                </button>
            </div>
        </div>
    `).join('');
}

function removeSavedIdea(ideaId) {
    savedIdeas = savedIdeas.filter(idea => idea.id !== ideaId);
    localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
    loadSavedIdeas();
    showNotification('Idea removed from journal', 'success');
}

function loadUserSubmittedIdeas() {
    const userSubmittedIdeas = JSON.parse(localStorage.getItem('userSubmittedIdeas')) || [];
    // Add user-submitted ideas to the main projectIdeas array
    userSubmittedIdeas.forEach(idea => {
        // Check if idea already exists to avoid duplicates
        const exists = projectIdeas.some(existingIdea => existingIdea.id === idea.id);
        if (!exists) {
            projectIdeas.unshift(idea);
        }
    });
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

function showAddIdeaModal() {
    const modal = document.getElementById('addIdeaModal');
    if (modal) {
        modal.style.display = 'flex';
        // Reset form
        document.getElementById('addIdeaForm').reset();
    }
}

function closeAddIdeaModal() {
    const modal = document.getElementById('addIdeaModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function handleAddIdea(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const ideaData = {
        id: 'user_' + Date.now(),
        title: formData.get('title').trim(),
        description: formData.get('description').trim(),
        difficulty: formData.get('difficulty'),
        category: formData.get('category'),
        skills: formData.get('skills') ? formData.get('skills').split(',').map(s => s.trim()).filter(s => s) : [],
        topics: formData.get('topics') ? formData.get('topics').split(',').map(t => t.trim()).filter(t => t) : [],
        features: formData.get('features').trim(),
        impact: formData.get('impact').trim(),
        resources: formData.get('resources').trim(),
        author: formData.get('author').trim() || 'Anonymous',
        socialImpact: formData.get('socialImpact') === 'on' || formData.get('impact').trim().length > 0,
        source: 'user-submitted',
        submittedAt: new Date().toISOString(),
        stars: 0,
        language: 'Mixed',
        teamRoles: ['Developer', 'Designer', 'Project Manager'],
        learningPath: ['Research the problem', 'Plan the solution', 'Build MVP', 'Test and iterate'],
        presentationTips: ['Focus on the problem you\'re solving', 'Show real-world impact', 'Demonstrate technical innovation'],
        githubLinks: []
    };

    // Validate required fields
    if (!ideaData.title || !ideaData.description || !ideaData.difficulty || !ideaData.category) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }

    // Add to project ideas array
    projectIdeas.unshift(ideaData);
    
    // Save to localStorage
    localStorage.setItem('userSubmittedIdeas', JSON.stringify(
        JSON.parse(localStorage.getItem('userSubmittedIdeas') || '[]').concat(ideaData)
    ));

    // Close modal
    closeAddIdeaModal();
    
    // Show success message
    showNotification(`"${ideaData.title}" has been added successfully!`, 'success');
    
    // Refresh ideas display if currently showing ideas
    const ideasGrid = document.getElementById('ideasGrid');
    if (ideasGrid && ideasGrid.children.length > 0) {
        generateIdeas();
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 300px;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification button {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    }
`;
document.head.appendChild(style);

// Skill selection handling
document.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox' && e.target.closest('.skill-tag')) {
        const skill = e.target.value;
        if (e.target.checked) {
            selectedSkills.add(skill);
        } else {
            selectedSkills.delete(skill);
        }
    }
});

// API Integration Functions
async function fetchGitHubProjects(query, maxResults = 5) {
    try {
        // Using GitHub Search API (public, no authentication required for basic search)
        const response = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=${maxResults}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        return data.items.map(item => ({
            id: `github-${item.id}`,
            title: item.name,
            description: item.description || `A ${query} project`,
            difficulty: getDifficultyFromStars(item.stargazers_count),
            category: getCategoryFromTopics(item.topics || []),
            skills: getSkillsFromTopics(item.topics || []),
            socialImpact: hasSocialImpact(item.topics || [], item.description || ''),
            teamRoles: getTeamRolesFromProject(item),
            learningPath: getLearningPathFromProject(item),
            githubSearch: query,
            githubLinks: [item.html_url],
            presentationTips: getPresentationTipsFromProject(item),
            source: 'github',
            stars: item.stargazers_count,
            language: item.language,
            url: item.html_url,
            topics: item.topics || []
        }));
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
}

async function fetchHackathonIdeas() {
    try {
        // Using Devpost API or similar hackathon platform
        const response = await fetch('https://api.devpost.com/software/search?query=hackathon&sort_by=recently_added');
        
        if (!response.ok) {
            throw new Error(`Devpost API error: ${response.status}`);
        }
        
        const data = await response.json();
        return data.software.map(item => ({
            id: `devpost-${item.id}`,
            title: item.name,
            description: item.description || 'A hackathon project',
            difficulty: 'intermediate',
            category: getCategoryFromTags(item.tags || []),
            skills: getSkillsFromTags(item.tags || []),
            socialImpact: hasSocialImpact(item.tags || [], item.description || ''),
            teamRoles: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer'],
            learningPath: getLearningPathFromTags(item.tags || []),
            githubSearch: item.name,
            githubLinks: [item.github_url],
            presentationTips: getPresentationTipsFromProject(item),
            source: 'devpost',
            url: item.url,
            tags: item.tags || []
        }));
    } catch (error) {
        console.error('Error fetching Devpost projects:', error);
        return [];
    }
}

async function fetchOpenSourceIdeas() {
    try {
        // Using Open Source Initiative API or similar
        const response = await fetch('https://api.github.com/search/repositories?q=open+source+social+impact&sort=stars&order=desc&per_page=5');
        
        if (!response.ok) {
            throw new Error(`Open Source API error: ${response.status}`);
        }
        
        const data = await response.json();
        return data.items.map(item => ({
            id: `opensource-${item.id}`,
            title: item.name,
            description: item.description || 'An open source social impact project',
            difficulty: getDifficultyFromStars(item.stargazers_count),
            category: 'social',
            skills: getSkillsFromTopics(item.topics || []),
            socialImpact: true,
            teamRoles: getTeamRolesFromProject(item),
            learningPath: getLearningPathFromProject(item),
            githubSearch: item.name,
            githubLinks: [item.html_url],
            presentationTips: getPresentationTipsFromProject(item),
            source: 'opensource',
            stars: item.stargazers_count,
            language: item.language,
            url: item.html_url
        }));
    } catch (error) {
        console.error('Error fetching open source projects:', error);
        return [];
    }
}

// Helper functions for API data processing
function getDifficultyFromStars(stars) {
    if (stars > 1000) return 'advanced';
    if (stars > 100) return 'intermediate';
    return 'beginner';
}

function getCategoryFromTopics(topics) {
    const topicString = topics.join(' ').toLowerCase();
    if (topicString.includes('ai') || topicString.includes('ml') || topicString.includes('machine-learning')) return 'ai';
    if (topicString.includes('mobile') || topicString.includes('android') || topicString.includes('ios')) return 'mobile';
    if (topicString.includes('web') || topicString.includes('react') || topicString.includes('vue')) return 'web';
    return 'social';
}

function getSkillsFromTopics(topics) {
    const skills = [];
    const topicString = topics.join(' ').toLowerCase();
    
    if (topicString.includes('javascript') || topicString.includes('js')) skills.push('javascript');
    if (topicString.includes('react')) skills.push('react');
    if (topicString.includes('vue')) skills.push('vue');
    if (topicString.includes('python')) skills.push('python');
    if (topicString.includes('node') || topicString.includes('nodejs')) skills.push('nodejs');
    if (topicString.includes('mongodb')) skills.push('mongodb');
    if (topicString.includes('mysql')) skills.push('mysql');
    if (topicString.includes('ai') || topicString.includes('ml')) skills.push('ai');
    if (topicString.includes('design') || topicString.includes('ui')) skills.push('design');
    
    return skills.length > 0 ? skills : ['javascript', 'html', 'css'];
}

function getSkillsFromTags(tags) {
    const skills = [];
    const tagString = tags.join(' ').toLowerCase();
    
    if (tagString.includes('javascript')) skills.push('javascript');
    if (tagString.includes('react')) skills.push('react');
    if (tagString.includes('python')) skills.push('python');
    if (tagString.includes('nodejs')) skills.push('nodejs');
    if (tagString.includes('ai')) skills.push('ai');
    if (tagString.includes('design')) skills.push('design');
    
    return skills.length > 0 ? skills : ['javascript', 'html', 'css'];
}

function hasSocialImpact(topics, description) {
    const text = (topics.join(' ') + ' ' + description).toLowerCase();
    const socialKeywords = ['social', 'impact', 'community', 'health', 'education', 'environment', 'sustainability', 'charity', 'volunteer', 'nonprofit'];
    return socialKeywords.some(keyword => text.includes(keyword));
}

function getTeamRolesFromProject(project) {
    const roles = ['Frontend Developer', 'Backend Developer'];
    if (project.topics && project.topics.some(t => t.includes('design'))) roles.push('UI/UX Designer');
    if (project.topics && project.topics.some(t => t.includes('ai'))) roles.push('AI/ML Engineer');
    if (project.topics && project.topics.some(t => t.includes('data'))) roles.push('Data Scientist');
    return roles;
}

function getLearningPathFromProject(project) {
    const path = [];
    if (project.language === 'JavaScript') {
        path.push('Learn JavaScript fundamentals');
        path.push('Master DOM manipulation');
        path.push('Explore modern frameworks');
    } else if (project.language === 'Python') {
        path.push('Learn Python programming');
        path.push('Study relevant libraries');
        path.push('Build practical projects');
    } else {
        path.push('Learn the core technology');
        path.push('Practice with small projects');
        path.push('Build your main project');
    }
    return path;
}

function getLearningPathFromTags(tags) {
    const path = [];
    if (tags.some(t => t.includes('javascript'))) {
        path.push('Learn JavaScript fundamentals');
        path.push('Master DOM manipulation');
        path.push('Explore modern frameworks');
    } else if (tags.some(t => t.includes('python'))) {
        path.push('Learn Python programming');
        path.push('Study relevant libraries');
        path.push('Build practical projects');
    } else {
        path.push('Learn the core technology');
        path.push('Practice with small projects');
        path.push('Build your main project');
    }
    return path;
}

function getPresentationTipsFromProject(project) {
    return [
        'Show the problem you\'re solving',
        'Demonstrate your solution',
        'Highlight the impact',
        'Discuss future improvements'
    ];
}

function getCategoryFromTags(tags) {
    const tagString = tags.join(' ').toLowerCase();
    if (tagString.includes('ai') || tagString.includes('ml')) return 'ai';
    if (tagString.includes('mobile')) return 'mobile';
    if (tagString.includes('web')) return 'web';
    return 'social';
}

async function refreshApiIdeas() {
    if (isLoading) return;
    
    isLoading = true;
    const refreshBtn = document.getElementById('refreshApiBtn');
    const originalText = refreshBtn.innerHTML;
    refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
    refreshBtn.disabled = true;
    
    try {
        // Fetch fresh ideas from multiple sources
        const [githubIdeas, openSourceIdeas] = await Promise.all([
            fetchGitHubProjects('hackathon project', 10),
            fetchOpenSourceIdeas()
        ]);
        
        // Combine and display
        const allApiIdeas = [...githubIdeas, ...openSourceIdeas];
        
        if (allApiIdeas.length > 0) {
            displayIdeas(allApiIdeas);
            showNotification(`Refreshed with ${allApiIdeas.length} new ideas from APIs!`, 'success');
        } else {
            showNotification('No new ideas found. Try again later.', 'info');
        }
        
    } catch (error) {
        console.error('Error refreshing API ideas:', error);
        showNotification('Error refreshing ideas. Please try again.', 'error');
    } finally {
        isLoading = false;
        refreshBtn.innerHTML = originalText;
        refreshBtn.disabled = false;
    }
}

// Export functions for global access
window.saveIdea = saveIdea;
window.viewIdeaDetails = viewIdeaDetails;
window.selectQuizOption = selectQuizOption;
window.findGitHubProjects = findGitHubProjects;
window.showGitHubLinks = showGitHubLinks;
window.refreshApiIdeas = refreshApiIdeas;
window.createTeam = createTeam;
window.joinTeam = joinTeam;
window.joinSpecificTeam = joinSpecificTeam;
window.viewTeamDetails = viewTeamDetails;
window.showAllHackathons = showAllHackathons;
window.createTeamForHackathon = createTeamForHackathon;
window.removeSavedIdea = removeSavedIdea;
window.closeModal = closeModal;

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
    setupEventListeners();
    
    // Load initial data
    loadSavedIdeas();
    loadUserSubmittedIdeas();
    fetchUpcomingHackathons();
    startHackathonTimer();
    loadGitHubProjects();
});

// Apply button styles directly
function applyButtonStyles() {
    const createTeamBtn = document.getElementById('createTeamBtn');
    const joinTeamBtn = document.getElementById('joinTeamBtn');
    
    if (createTeamBtn) {
        createTeamBtn.style.color = '#000000';
        createTeamBtn.style.background = '#ffffff';
        createTeamBtn.style.border = '2px solid #00ffff';
        createTeamBtn.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.8)';
        createTeamBtn.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.4)';
        createTeamBtn.style.fontWeight = 'bold';
    }
    
    if (joinTeamBtn) {
        joinTeamBtn.style.color = '#000000';
        joinTeamBtn.style.background = '#ffffff';
        joinTeamBtn.style.border = '2px solid #00ffff';
        joinTeamBtn.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.8)';
        joinTeamBtn.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.4)';
        joinTeamBtn.style.fontWeight = 'bold';
    }
}

// Call this function after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(applyButtonStyles, 100);
});

 