import task1 from "@/assets/tasks/task1-assessment.jpg";
import task2 from "@/assets/tasks/task2-vark.jpg";
import task2ai from "@/assets/tasks/task2-ai-image.jpg";
import task3a from "@/assets/tasks/task3-onedrive.jpg";
import task3b from "@/assets/tasks/task3-excel.jpg";
import task4a from "@/assets/tasks/task4-chatgpt.jpg";
import task4b from "@/assets/tasks/task4-quillbot.jpg";
import task4c from "@/assets/tasks/task4-gemini.jpg";
import task5 from "@/assets/tasks/task5-sq3r.jpg";
import task6 from "@/assets/tasks/task6-bias.jpg";
import task7 from "@/assets/tasks/task7-copilot.jpg";
import task8a from "@/assets/tasks/task8-mindmap-lists.jpg";
import task8b from "@/assets/tasks/task8-mindmap-memory.jpg";
import task10 from "@/assets/tasks/task10-todo.jpg";
import task12 from "@/assets/tasks/task12-study-place.jpg";
import task13 from "@/assets/tasks/task13-woop.jpg";
import task14a from "@/assets/tasks/task14-timeblock.jpg";
import task14b from "@/assets/tasks/task14-notion.jpg";
import task15 from "@/assets/tasks/task15-integrity.jpg";

export type Task = {
  id: number;
  week: number;
  lesson: number;
  title: string;
  topic: string;
  date: string;
  images: { src: string; caption: string }[];
  summary: string;
  reflections: { q: string; a: string }[];
  tags: string[];
};

export const tasks: Task[] = [
  {
    id: 1, week: 1, lesson: 1, title: "Course Learning Objectives & Assessment Strategy",
    topic: "Orientation", date: "13 Jan 2026", tags: ["CLOs", "Assessment", "Planning"],
    images: [{ src: task1, caption: "Course assessment strategy table" }],
    summary:
      "Reviewed the four CLOs of LSS 1003 — covering note-taking, time management, problem-solving and ethical use of technology — and mapped out the assessment plan (Learning Style Reflection 20%, Portfolio 30%, Final Practical 50%).",
    reflections: [
      { q: "Which learning objective do you find most important? Why?",
        a: "Understanding the course learning objectives is the most important to me because it keeps me organised and confident. When I know exactly what's expected, I can manage my time better and focus my energy on the right skills." },
      { q: "How will this course help you in your future studies or career?",
        a: "It builds essential life skills — communication, teamwork and time management — that will support me in IT studies and help me adapt and collaborate effectively in any future workplace." },
      { q: "Which assessment will be the most challenging?",
        a: "The Final Practical Project, because it requires planning, creativity and applies everything from the course in one place." },
      { q: "How will you prepare to succeed?",
        a: "Manage time well, start tasks early, ask questions when unsure, and keep reviewing the materials consistently." },
    ],
  },
  {
    id: 2, week: 1, lesson: 2, title: "VARK Learning Style Questionnaire",
    topic: "Learning Styles", date: "15 Jan 2026", tags: ["VARK", "Multimodal", "Self-awareness"],
    images: [
      { src: task2, caption: "VARK questionnaire results — Multimodal" },
      { src: task2ai, caption: "AI-generated visual of my multimodal learning style" },
    ],
    summary:
      "Completed the VARK questionnaire and discovered I'm a Multimodal learner — I retain knowledge best when listening, discussing and practising are combined.",
    reflections: [
      { q: "What is your dominant learning style?", a: "Multimodal — I learn best by combining listening, discussion and hands-on practice." },
      { q: "Do you agree with the result?", a: "Yes. I rarely learn well from one channel alone; mixing methods makes ideas stick." },
      { q: "How does this style help you learn effectively?",
        a: "Combining methods keeps me engaged and improves retention because I'm processing information through multiple senses at once." },
    ],
  },
  {
    id: 3, week: 2, lesson: 1, title: "OneDrive Folders & Excel Weekly Schedule",
    topic: "Digital Information Management", date: "24 Jan 2026", tags: ["OneDrive", "Excel", "Organisation"],
    images: [
      { src: task3a, caption: "LSS 1003 OneDrive structure with subfolders" },
      { src: task3b, caption: "My Excel weekly schedule" },
    ],
    summary:
      "Built a clean OneDrive structure (LSS 1003 → Assessments + Class Notes) and designed a weekly schedule in Excel covering classes, study blocks and personal time.",
    reflections: [
      { q: "How does organising files in OneDrive help you?",
        a: "Everything has a clear place, so I can find assessments and notes instantly. It removes friction, reduces stress and makes my study process feel more professional." },
      { q: "Why is digital information management important for your career?",
        a: "It keeps deadlines under control, supports collaboration, and prepares me for digital workplaces where good document handling is non-negotiable." },
      { q: "How did Excel help organise your data?",
        a: "Rows and columns turned a messy week into a readable timetable, improving my time awareness." },
      { q: "What skills did you develop?",
        a: "Planning, time management and structured data handling — directly transferable to academic and workplace projects." },
    ],
  },
  {
    id: 4, week: 2, lesson: 2, title: "Understanding AI — Tools, Benefits & Challenges",
    topic: "Artificial Intelligence", date: "31 Jan 2026", tags: ["AI Literacy", "ChatGPT", "Gemini", "QuillBot"],
    images: [
      { src: task4a, caption: "ChatGPT" },
      { src: task4c, caption: "Google Gemini" },
      { src: task4b, caption: "QuillBot" },
    ],
    summary:
      "Defined AI in my own words and identified three tools I use daily — Google Gemini, ChatGPT and QuillBot — then weighed the benefits (speed, accuracy) against the challenges (job displacement, privacy).",
    reflections: [
      { q: "How does AI make daily life easier?",
        a: "It cuts the time and effort tasks take — quick navigation, personalised recommendations and instant answers." },
      { q: "Which AI tool is most useful, and why?",
        a: "Google Gemini, because it explains topics clearly and helps me complete tasks more efficiently." },
      { q: "Why understand both sides of AI?",
        a: "So we use it responsibly, get real benefit, and stay aware of risks like bias, dependency and privacy." },
      { q: "How can AI be used responsibly in education?",
        a: "Use it to understand concepts — not to copy answers — protect personal data, and always verify the information." },
    ],
  },
  {
    id: 5, week: 3, lesson: 1, title: "SQ3R Reading Strategy",
    topic: "Active Reading", date: "3 Feb 2026", tags: ["SQ3R", "Comprehension"],
    images: [{ src: task5, caption: "Completed SQ3R reading worksheet" }],
    summary:
      "Used the SQ3R method (Survey, Question, Read, Recite, Review) on a reading passage to move from passive scanning to active comprehension.",
    reflections: [
      { q: "How did SQ3R help compared to normal reading?",
        a: "It made me active rather than passive — asking questions, hunting for answers and reviewing made the content actually stick." },
      { q: "Which step was most helpful?",
        a: "Question. It primed my brain to look for what mattered, so the rest of the reading felt focused and purposeful." },
    ],
  },
  {
    id: 6, week: 3, lesson: 2, title: "Bias Detector Poster",
    topic: "Critical Thinking", date: "5 Feb 2026", tags: ["Bias", "Media Literacy"],
    images: [{ src: task6, caption: "My Bias Detector poster — 3 signs and 2 tips" }],
    summary:
      "Designed a Bias Detector poster identifying three signs of biased content and two practical tips to evaluate AI and online sources fairly.",
    reflections: [
      { q: "Why separate fact from opinion online?",
        a: "Facts can be verified; opinions are personal. Knowing which is which protects me from being misled and helps me make better decisions." },
      { q: "What steps will you take to deal with bias?",
        a: "Cross-check across multiple sources, watch for emotional language, and prioritise evidence over confident tone." },
    ],
  },
  {
    id: 7, week: 4, lesson: 1, title: "Notetaking with Microsoft Copilot",
    topic: "Effective Note-taking", date: "12 Feb 2026", tags: ["Copilot", "Notes", "AI"],
    images: [{ src: task7, caption: "Copilot session — translation, MCQs and structured notes" }],
    summary:
      "Used Microsoft Copilot to translate text, generate multiple-choice questions and turn raw content into clean structured notes — keeping my own thinking in the loop.",
    reflections: [
      { q: "What note-taking challenges do you face?",
        a: "Trying to write everything while also listening makes me miss the main idea. Summarising and bullet points help me capture meaning rather than transcribe words." },
      { q: "How can AI support note-taking without replacing your thinking?",
        a: "AI can organise and simplify, but I still need to understand and rephrase. Using it as a coach — not a crutch — keeps me engaged and critical." },
    ],
  },
  {
    id: 8, week: 4, lesson: 2, title: "Mind Maps — Lists & Memory Techniques",
    topic: "Memory & Organisation", date: "12 Feb 2026", tags: ["Mind Maps", "Active Recall"],
    images: [
      { src: task8a, caption: "Mind map: benefits of using lists" },
      { src: task8b, caption: "Mind map: memory techniques" },
    ],
    summary:
      "Built two mind maps — one on the benefits of lists (organisation, productivity, lower stress) and one on memory techniques (active recall, spaced repetition, teaching others, visual aids).",
    reflections: [
      { q: "How do lists reduce stress and improve focus?",
        a: "They externalise the workload. I stop carrying tasks in my head, prioritise easily, and feel real progress as I tick items off." },
      { q: "Which memory technique will help you most?",
        a: "Active recall — testing myself rather than re-reading notes builds stronger, longer-lasting memory and makes exam time far less stressful." },
    ],
  },
  {
    id: 9, week: 5, lesson: 1, title: "Reflection on My Learning Style",
    topic: "Self-Reflection", date: "17 Feb 2026", tags: ["Reflection", "Learning Style"],
    images: [{ src: task2, caption: "VARK reflection — Multimodal learner" }],
    summary:
      "A deeper reflection on my Multimodal learning style and how I plan to lean into it — using lectures, group discussion, hands-on practice and visual summaries together.",
    reflections: [
      { q: "How does knowing your learning style change how you study?",
        a: "I now combine reading with listening to recordings, talking through problems aloud and re-creating diagrams. The mix keeps me alert and engaged." },
      { q: "What will you do differently going forward?",
        a: "Stop relying on a single method. For every topic I'll mix at least two channels — for example a video plus practice questions, or notes plus teaching it back." },
    ],
  },
  {
    id: 10, week: 5, lesson: 2, title: "Microsoft To Do — Study Plan This Week",
    topic: "Planning", date: "20 Feb 2026", tags: ["To Do", "Study Plan"],
    images: [{ src: task10, caption: "My 'Study Plan – This Week' list in Microsoft To Do" }],
    summary:
      "Created a 'Study Plan – This Week' list in Microsoft To Do, breaking deadlines into specific reviewable actions.",
    reflections: [
      { q: "Biggest distraction, and how a plan helps?",
        a: "My phone — especially social media — eats time silently. A written plan with clear time limits gives my focus a target and turns vague intentions into scheduled tasks." },
    ],
  },
  {
    id: 11, week: 6, lesson: 1, title: "Using AI Critically & Ethically",
    topic: "AI Ethics", date: "25 Feb 2026", tags: ["Ethics", "Bias", "Privacy"],
    images: [{ src: task4a, caption: "AI tools used responsibly in study" }],
    summary:
      "Three takeaways: think critically about every AI answer; AI inherits bias from its training data; and personal information should never be pasted into AI tools.",
    reflections: [
      { q: "How can AI help — and what goes wrong without ethics?",
        a: "AI can explain hard topics, brainstorm and accelerate study. Without critical thinking, though, I risk absorbing biased answers, over-relying on it, breaking academic honesty or leaking personal data. The fix is simple: verify, attribute, and never share private information." },
    ],
  },
  {
    id: 12, week: 7, lesson: 1, title: "Managing My Study Environment",
    topic: "Study Environment", date: "25 Feb 2026", tags: ["Focus", "Routine"],
    images: [{ src: task12, caption: "My favourite quiet study spot on campus" }],
    summary:
      "Captured my favourite study spot and described the small pre-study routine — organising materials and setting one clear goal — that gets me into focus mode.",
    reflections: [
      { q: "How does your space and routine prepare you to learn?",
        a: "A quiet, comfortable spot removes distractions; the pre-study routine signals my brain to switch into focus mode. Together they make studying feel intentional, not forced." },
    ],
  },
  {
    id: 13, week: 7, lesson: 2, title: "WOOP Goal — Improve My Grades",
    topic: "Goal Setting", date: "28 Feb 2026", tags: ["WOOP", "Goals"],
    images: [{ src: task13, caption: "WOOP framework table — Wish, Outcome, Obstacle, Plan" }],
    summary:
      "Applied the WOOP framework to a real semester goal: improve my grades. Defined the Wish, the Outcome, the internal Obstacle (procrastination), and an if-then Plan.",
    reflections: [
      { q: "How did WOOP change how you think about goals?",
        a: "Naming the obstacle in advance — and pre-deciding the response — turns a vague wish into a concrete plan. I'll use this for academic targets and personal habits going forward." },
    ],
  },
  {
    id: 14, week: 8, lesson: 1, title: "Time Blocking 6 AM – 10 PM + Notion",
    topic: "Time Management", date: "1 Mar 2026", tags: ["Time Blocking", "Notion"],
    images: [
      { src: task14a, caption: "Time-blocked day from 6:00 AM to 10:00 PM" },
      { src: task14b, caption: "Notion dashboard for courses and assignments" },
    ],
    summary:
      "Time-blocked an entire day from 6 AM to 10 PM and paired it with a Notion dashboard that tracks classes, assignments and reminders.",
    reflections: [
      { q: "What did you notice about your time?",
        a: "Phone time and unplanned gaps were quietly eating my day — and the lack of a plan was making me anxious when work piled up." },
      { q: "How will time blocking + digital tools help?",
        a: "Each task gets a slot, Notion holds the deadlines, and the day gains structure. Procrastination shrinks because there's nowhere for it to hide." },
    ],
  },
  {
    id: 15, week: 8, lesson: 2, title: "Digital Integrity Poster",
    topic: "Academic Integrity", date: "1 Mar 2026", tags: ["Integrity", "Ethics"],
    images: [{ src: task15, caption: "My Digital Integrity poster" }],
    summary:
      "Designed a Digital Integrity poster outlining three tips for being a responsible digital student and one concrete example of integrity in action.",
    reflections: [
      { q: "What did you learn about digital integrity?",
        a: "Be honest, never copy without credit, and always reference sources. Doing this protects my reputation and makes my work genuinely my own — online and in academic life." },
    ],
  },
];
