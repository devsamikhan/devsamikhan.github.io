(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51934,e=>{"use strict";var t=e.i(99130),a=e.i(69011);let r=[{title:"Smart Notes AI",desc:"An intelligent Android application featuring emotion-based UI. Integrates advanced LLM APIs to automatically categorize, summarize, and reflect on user notes.",icon:"fas fa-mobile-alt",tags:["Kotlin","Android","OpenAI"],num:"01"},{title:"BLS School LMS",desc:"A comprehensive institutional engine. Automates student admissions, generates PDF reports dynamically, and handles parent communications seamlessly.",icon:"fas fa-school",tags:["Apps Script","Database","Automation"],num:"02"},{title:"E-Commerce & Portals",desc:"Developed full-scale web platforms including Lumina Audio E-commerce, a Medicare Hospital Portal, and modern Chat UIs with secure login systems.",icon:"fas fa-shopping-cart",tags:["Web Dev","UI/UX","JavaScript"],num:"03"},{title:"50+ Interactive Web Apps",desc:"A massive collection of DOM-manipulation projects: Live Weather Apps, Interactive Quiz Systems, Real-time Trackers, and algorithmic calculators.",icon:"fas fa-layer-group",tags:["Frontend","API","DOM"],num:"04"},{title:"Terminal & Python Utils",desc:"Built blazing fast CLI tools including Sami Downloader (cloud video fetcher) and automated file upload systems optimized for low-end hardware.",icon:"fas fa-terminal",tags:["Python","CLI Tools","Cloud"],num:"05"}],i=[{title:"Claude AI Integration & Prompt Engineering",detail:"Advanced LLM manipulation and intelligent system design.",icon:"fas fa-robot",cls:"ai-bg"},{title:"Google AI Professional",detail:"Coursera Certified · Machine Learning Foundations.",icon:"fab fa-google",cls:"accent-bg"},{title:"ICS (Computer Science)",detail:"Punjab Group of Colleges (PGC) · Current.",icon:"fas fa-microchip",cls:"green-bg"}],o=[{label:"Kotlin & Compose",icon:"fab fa-android",ai:!1},{label:"Claude AI & OpenAI",icon:"fas fa-brain",ai:!0},{label:"Full-Stack Web",icon:"fab fa-js",ai:!1},{label:"Firebase & Apps Script",icon:"fas fa-server",ai:!1},{label:"Python Automation",icon:"fab fa-python",ai:!1},{label:"CLI Workflows",icon:"fas fa-terminal",ai:!1},{label:"React & Next.js",icon:"fab fa-react",ai:!1},{label:"Prompt Engineering",icon:"fas fa-wand-magic-sparkles",ai:!0}],n=["Full-Stack · Android · Google & Claude AI","Kotlin Expert · Compose Builder","AI Integration Specialist","Vibe Coder · Terminal Native"];function s(){let[e,r]=(0,a.useState)(0),i=(0,a.useRef)(null),o=[{parts:[{text:"// sami.config.ts — My developer profile",cls:"code-comment"}]},{parts:[{text:"const ",cls:"code-keyword"},{text:"sami",cls:"code-prop"},{text:" = {",cls:"code-bracket"}]},{parts:[{text:"  name: ",cls:"code-prop"},{text:'"Sami Ullah Khan"',cls:"code-string"},{text:",",cls:"code-bracket"}]},{parts:[{text:"  role: ",cls:"code-prop"},{text:'"Full-Stack AI Developer"',cls:"code-string"},{text:",",cls:"code-bracket"}]},{parts:[{text:"  skills: [",cls:"code-prop"},{text:"'Kotlin', 'React', 'AI', 'Python'",cls:"code-string"},{text:"],",cls:"code-bracket"}]},{parts:[{text:"  passion: ",cls:"code-prop"},{text:'"Building the future"',cls:"code-string"},{text:",",cls:"code-bracket"}]},{parts:[{text:"  vibe: ",cls:"code-prop"},{text:'"Always coding"',cls:"code-string"},{text:",",cls:"code-bracket"}]},{parts:[{text:"  status: ",cls:"code-prop"},{text:'"Open to opportunities"',cls:"code-string"},{text:",",cls:"code-bracket"}]},{parts:[{text:"};",cls:"code-bracket"}]}];return(0,a.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let t=0,a=setInterval(()=>{r(++t),t>=o.length&&clearInterval(a)},200);e.disconnect()}})},{threshold:.3});return i.current&&e.observe(i.current),()=>e.disconnect()},[]),(0,t.jsx)("div",{ref:i,children:o.slice(0,e).map((a,r)=>(0,t.jsxs)("div",{className:"code-line",children:[a.parts.map((e,a)=>(0,t.jsx)("span",{className:e.cls,children:e.text},a)),r===e-1&&r<o.length-1&&(0,t.jsx)("span",{className:"code-cursor"})]},r))})}e.s(["default",0,function(){let[e,l]=(0,a.useState)(!0),[c,d]=(0,a.useState)([]),[m,p]=(0,a.useState)(!1),[g,b]=(0,a.useState)(!1),[f,h]=(0,a.useState)("All"),[x,u]=(0,a.useState)([{type:"output",text:'Welcome to SamiOS Terminal v2.0. Type "help" to begin.'}]),[v,y]=(0,a.useState)(""),[k,w]=(0,a.useState)([]),[j,N]=(0,a.useState)(-1),[C,S]=(0,a.useState)({name:"",email:"",message:""}),[I,A]=(0,a.useState)(!1),[z,E]=(0,a.useState)(!1),[L,T]=(0,a.useState)({}),[O,M]=(0,a.useState)(!1),R=(0,a.useRef)(null),P=(0,a.useRef)(null),F=(0,a.useRef)(null),D=(0,a.useRef)(null),B=(0,a.useRef)(null),U=(0,a.useRef)(0);(0,a.useEffect)(()=>{D.current&&D.current.scrollIntoView({behavior:"smooth"})},[x]),(0,a.useEffect)(()=>{let e=["> Initializing SamiOS v2.0...","> Loading portfolio modules... [OK]","> Connecting to neural network... [OK]","> Deploying creativity... [OK]","> System ready. Welcome!"],t=0,a=setInterval(()=>{t<e.length?(d(a=>[...a,e[t]]),t++):(clearInterval(a),setTimeout(()=>l(!1),600))},500);return()=>clearInterval(a)},[]),(0,a.useEffect)(()=>{let t;if(e)return;let a=document.getElementById("typewriter");if(!a)return;let r=0,i=0,o=!1;return!function e(){let s=n[r];o?(a.textContent=s.substring(0,i-1),i--):(a.textContent=s.substring(0,i+1),i++);let l=o?30:60;o||i!==s.length?o&&0===i&&(o=!1,r=(r+1)%n.length,l=400):(l=2e3,o=!0),t=setTimeout(e,l)}(),()=>clearTimeout(t)},[e]),(0,a.useEffect)(()=>{document.documentElement.setAttribute("data-theme","dark")},[]),(0,a.useEffect)(()=>{let e=()=>p(window.scrollY>50);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,a.useEffect)(()=>{if(e)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("active")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return document.querySelectorAll(".reveal").forEach(e=>t.observe(e)),()=>t.disconnect()},[e]),(0,a.useEffect)(()=>{if(e)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&!O&&(M(!0),document.querySelectorAll(".stat-number").forEach(e=>{let t=parseInt(e.getAttribute("data-target")||"0"),a=100===t,r=0,i=t/120,o=setInterval(()=>{(r+=i)>=t&&(r=t,clearInterval(o)),e.textContent=Math.floor(r)+(a?"%":"+")},16)}))})},{threshold:.3}),a=document.querySelector(".stats-grid");return a&&t.observe(a),()=>t.disconnect()},[e,O]),(0,a.useEffect)(()=>{let t;if(e)return;let a=R.current;if(!a)return;let r=a.getContext("2d");if(!r)return;let i=[],o={x:-1e3,y:-1e3},n=["#3bc7ff","#a485ff","#ff6b9d"];function s(){a&&(a.width=window.innerWidth,a.height=window.innerHeight)}s(),window.addEventListener("resize",s);let l=Math.min(70,Math.floor(.04*window.innerWidth));for(let e=0;e<l;e++)i.push({x:Math.random()*(a?.width||1),y:Math.random()*(a?.height||1),vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,size:2*Math.random()+1,opacity:.5*Math.random()+.2,color:n[Math.floor(Math.random()*n.length)],pulsePhase:Math.random()*Math.PI*2});!function e(){if(!r||!a)return;r.clearRect(0,0,a.width,a.height);let n=.001*Date.now();i.forEach(e=>{let t=o.x-e.x,i=o.y-e.y,s=Math.sqrt(t*t+i*i);if(s<200){let a=(200-s)/200;e.vx-=t/s*a*.02,e.vy-=i/s*a*.02}e.x+=e.vx,e.y+=e.vy,e.vx*=.99,e.vy*=.99,(e.x<0||e.x>a.width)&&(e.vx*=-1),(e.y<0||e.y>a.height)&&(e.vy*=-1);let l=.3*Math.sin(2*n+e.pulsePhase)+.7,c=e.size*l;r.save(),r.shadowBlur=15,r.shadowColor=e.color,r.fillStyle=e.color,r.globalAlpha=e.opacity*l,r.beginPath(),r.arc(e.x,e.y,c,0,2*Math.PI),r.fill(),r.restore()});for(let e=0;e<i.length;e++)for(let t=e+1;t<i.length;t++){let a=i[e].x-i[t].x,o=i[e].y-i[t].y,n=Math.sqrt(a*a+o*o);n<150&&(r.save(),r.strokeStyle=i[e].color===i[t].color?i[e].color:"#3bc7ff",r.globalAlpha=.08*(1-n/150),r.lineWidth=.8,r.beginPath(),r.moveTo(i[e].x,i[e].y),r.lineTo(i[t].x,i[t].y),r.stroke(),r.restore())}t=requestAnimationFrame(e)}();let c=e=>{o.x=e.clientX,o.y=e.clientY};return window.addEventListener("mousemove",c),()=>{cancelAnimationFrame(t),window.removeEventListener("resize",s),window.removeEventListener("mousemove",c)}},[e]),(0,a.useEffect)(()=>{if(e||window.matchMedia("(max-width: 768px)").matches)return;let t=P.current,a=F.current;if(!t||!a)return;let r=-100,i=-100,o=-100,n=-100,s=e=>{r=e.clientX,i=e.clientY,t.style.transform=`translate(${r-10}px, ${i-10}px)`};window.addEventListener("mousemove",s);let l=()=>{o+=(r-o)*.15,n+=(i-n)*.15,a.style.transform=`translate(${o-20}px, ${n-20}px)`,U.current=requestAnimationFrame(l)};l();let c=e=>{e.target.closest("a, button, .skill-tag, .project-card, input, textarea")&&(t.style.width="50px",t.style.height="50px",t.style.marginLeft="-15px",t.style.marginTop="-15px",t.style.borderColor="#a485ff",t.style.background="rgba(164, 133, 255, 0.08)")},d=()=>{t.style.width="20px",t.style.height="20px",t.style.marginLeft="0",t.style.marginTop="0",t.style.borderColor="rgba(59, 199, 255, 0.6)",t.style.background="rgba(59, 199, 255, 0.05)"};return document.addEventListener("mouseover",c),document.addEventListener("mouseout",d),()=>{cancelAnimationFrame(U.current),window.removeEventListener("mousemove",s),document.removeEventListener("mouseover",c),document.removeEventListener("mouseout",d)}},[e]),(0,a.useEffect)(()=>{e||document.querySelectorAll(".project-card").forEach(e=>{e.addEventListener("mousemove",t=>{let a=e.getBoundingClientRect(),r=t.clientX-a.left,i=t.clientY-a.top,o=a.width/2,n=a.height/2;e.style.transform=`perspective(1000px) rotateX(${-((i-n)/n*8)}deg) rotateY(${(r-o)/o*8}deg) translateY(-8px)`;let s=e.querySelector(".tilt-glare");s&&(s.style.background=`radial-gradient(circle at ${r}px ${i}px, rgba(59,199,255,0.12) 0%, transparent 60%)`)}),e.addEventListener("mouseleave",()=>{e.style.transform="";let t=e.querySelector(".tilt-glare");t&&(t.style.background="transparent")})})},[e,f]),(0,a.useEffect)(()=>{e||document.querySelectorAll(".btn-magnetic").forEach(e=>{e.addEventListener("mousemove",t=>{let a=e.getBoundingClientRect(),r=t.clientX-a.left-a.width/2,i=t.clientY-a.top-a.height/2;e.style.transform=`translate(${.25*r}px, ${.25*i}px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.transition="transform 0.4s cubic-bezier(0.4,0,0.2,1)"}),e.addEventListener("mouseenter",()=>{e.style.transition="transform 0.1s ease"})})},[e]),(0,a.useEffect)(()=>{e||document.querySelectorAll(".scramble-text").forEach(e=>{let t=e.textContent||"";e.addEventListener("mouseenter",()=>{!function(e,t,a=600){let r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",i=t.length,o=0,n=Math.ceil(a/16),s=!1,l=e.textContent||"",c=()=>{if(s)return;let a=++o/n,l="";for(let e=0;e<i;e++)a>=(e+1)/i?l+=t[e]:l+=r[Math.floor(Math.random()*r.length)];e.textContent=l,o<n?requestAnimationFrame(c):e.textContent=t};c()}(e,t,500)})})},[e]);let $=(0,a.useCallback)(e=>{let t=document.getElementById(e);t&&(t.scrollIntoView({behavior:"smooth",block:"start"}),b(!1))},[]),G=(0,a.useCallback)(e=>{let t=e.trim().toLowerCase(),a=[...x,{type:"input",text:e}];w(t=>[e,...t]),N(-1);let i="";switch(t){case"help":i=`Available commands:
  help            — Show this help message
  ls projects       — List all projects
  cat about.txt     — Read about Sami
  skills --list     — Show all skills
  contact           — Show contact information
  whoami            — Who are you?
  date              — Show current date/time
  neofetch          — System info about Sami
  clear             — Clear terminal
  cat projects/smart-notes.txt — Smart Notes AI details`;break;case"ls projects":i=r.map(e=>`  ${e.num}. ${e.title}`).join("\n");break;case"cat about.txt":i=`Sami Ullah Khan — Full-Stack Developer & Vibe Coder
Specializes in Android (Kotlin), Web Development, and AI Integration.
Armed with Google AI Certification and Claude AI expertise.
Currently studying ICS Computer Science at PGC.
Built 50+ web apps, 10+ Android projects, and 3 AI certifications.`;break;case"skills --list":i=o.map(e=>`  ${e.ai?"[AI] ":"     "}${e.label}`).join("\n");break;case"contact":i=`  GitHub:    github.com/devsamikhan
  LinkedIn:  linkedin.com/in/devsamikhan
  Twitter:   x.com/devsamikhan
  Instagram: instagram.com/devsamikhan`;break;case"whoami":i="You are visiting Sami Ullah Khan's portfolio. Welcome! 👋";break;case"date":i=new Date().toString();break;case"neofetch":i=`  ╔══════════════════════════╗
  ║    SAMIOS v2.0           ║
  ╠══════════════════════════╣
  ║ Developer: Sami Ullah   ║
  ║ Language: Kotlin, JS     ║
  ║ AI: Claude + OpenAI     ║
  ║ Projects: 50+ Web       ║
  ║ Android: 10+ Apps        ║
  ║ Vibe: ██████████ 100%    ║
  ╚══════════════════════════╝`;break;case"clear":u([]);return;case"cat projects/smart-notes.txt":i=`Smart Notes AI
An intelligent Android application featuring emotion-based UI.
Built with: Kotlin, Android SDK, OpenAI API
Features:
  - Emotion detection for UI theming
  - AI-powered note categorization
  - Automatic summarization via LLM
  - Reflection & mood journaling`;break;default:i=`Command not found: "${t}". Type "help" for available commands.`}u([...a,{type:"output",text:i}])},[x]),K=(0,a.useCallback)(async()=>{let e={};if(C.name.trim()||(e.name="Name is required"),C.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(C.email)||(e.email="Invalid email"):e.email="Email is required",C.message.trim()||(e.message="Message is required"),Object.keys(e).length>0)return void T(e);T({}),E(!0);let t=new FormData;t.append("name",C.name),t.append("email",C.email),t.append("message",C.message);try{await fetch("https://script.google.com/macros/s/AKfycbwoRAPV24sZq8JiT2ey4bhkC_XwsZWPz2qvBdAWsxr3CTwLW48fCxJ3WMTSMLgSOGFb/exec",{method:"POST",body:t,mode:"no-cors"}),A(!0),setTimeout(()=>A(!1),4e3),S({name:"",email:"",message:""})}catch(e){console.error("Error sending message",e)}finally{E(!1)}},[C]),[Y,W]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollHeight-window.innerHeight;W(e>0?window.scrollY/e*100:0)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let q="All"===f?r:"AI"===f?r.filter(e=>(e.tags||[]).some(e=>e?.toLowerCase()==="openai"||e?.toLowerCase()==="claude ai"||e?.toLowerCase()==="ai")):r.filter(e=>(e.tags||[]).some(e=>e?.toLowerCase()?.includes(f.toLowerCase())));return(0,t.jsxs)("div",{style:{"--bg":"#06080d","--surface":"#0d1117","--card":"#161b22","--card-hover":"#1c2333","--accent":"#3bc7ff","--accent2":"#a485ff","--accent-glow":"rgba(59,199,255,0.15)","--ai-color":"#a485ff","--text-primary":"#e6edf3","--text-secondary":"#8b949e","--border":"rgba(59,199,255,0.1)","--gradient-1":"linear-gradient(135deg, #3bc7ff, #a485ff)","--gradient-2":"linear-gradient(135deg, #a485ff, #ff6b9d)","--nav-bg":"rgba(6,8,13,0.85)"},className:"theme-dark",children:[(0,t.jsx)("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; cursor: none !important; }
        @media (max-width: 768px) { * { cursor: auto !important; } }
        :root {
          --bg: #06080d; --surface: #0d1117; --card: #161b22; --card-hover: #1c2333;
          --accent: #3bc7ff; --accent2: #a485ff; --ai-color: #a485ff;
          --text-primary: #e6edf3; --text-secondary: #8b949e;
          --border: rgba(59,199,255,0.1);
        }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg); color: var(--text-primary);
          line-height: 1.6; overflow-x: hidden;
          transition: background 0.5s, color 0.5s;
        }
        .theme-light body { background: #f8fafc; }

        /* ── SCROLL PROGRESS ── */
        .scroll-progress {
          position: fixed; top: 0; left: 0; height: 3px; z-index: 9999;
          background: linear-gradient(90deg, var(--accent), var(--accent2), #ff6b9d);
          transition: width 0.1s linear; border-radius: 0 2px 2px 0;
        }

        /* ── CUSTOM CURSOR ── */
        .custom-cursor {
          position: fixed; width: 20px; height: 20px; border-radius: 50%;
          border: 1.5px solid rgba(59,199,255,0.6); pointer-events: none; z-index: 99999;
          transition: width 0.2s, height 0.2s, margin 0.2s, border-color 0.2s, background 0.2s;
          background: rgba(59,199,255,0.05); mix-blend-mode: difference;
        }
        .custom-trail {
          position: fixed; width: 40px; height: 40px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,199,255,0.08), transparent 70%);
          pointer-events: none; z-index: 99998;
        }
        @media (max-width: 768px) { .custom-cursor, .custom-trail { display: none !important; } }

        /* ── LOADING SCREEN ── */
        .loading-screen {
          position: fixed; inset: 0; z-index: 100000;
          background: #06080d; display: flex; flex-direction: column;
          justify-content: center; align-items: flex-start;
          padding: 10vw; font-family: 'Fira Code', monospace;
          transition: opacity 0.6s, visibility 0.6s;
        }
        .loading-screen.hidden { opacity: 0; visibility: hidden; }
        .boot-line {
          color: #22c55e; font-size: 0.9rem; margin-bottom: 0.5rem;
          animation: fadeInUp 0.4s ease forwards;
        }
        .boot-line span { color: #3bc7ff; }
        .boot-progress {
          margin-top: 2rem; width: 300px; height: 3px;
          background: rgba(59,199,255,0.1); border-radius: 4px; overflow: hidden;
        }
        .boot-progress-bar {
          height: 100%; background: linear-gradient(90deg, #3bc7ff, #a485ff);
          border-radius: 4px; animation: bootFill 2.5s ease forwards;
        }
        @keyframes bootFill { from { width: 0; } to { width: 100%; } }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── GLOW ORBS ── */
        .glow-orb {
          position: fixed; width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(59,199,255,0.07) 0%, transparent 70%);
          border-radius: 50%; top: -200px; right: -200px; z-index: -1;
          filter: blur(100px); animation: orbFloat 12s ease-in-out infinite alternate;
        }
        .glow-orb-2 {
          position: fixed; width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(164,133,255,0.07) 0%, transparent 70%);
          border-radius: 50%; bottom: -150px; left: -150px; z-index: -1;
          filter: blur(100px); animation: orbFloat 16s ease-in-out infinite alternate-reverse;
        }
        @keyframes orbFloat {
          0% { transform: translate(0,0) scale(1); }
          100% { transform: translate(-40px,40px) scale(1.15); }
        }
        .theme-light .glow-orb, .theme-light .glow-orb-2 { opacity: 0.5; }

        /* ── CANVAS ── */
        #neural-canvas { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; pointer-events: none; }

        /* ── CONTAINER ── */
        .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; position: relative; }

        /* ── NAVBAR ── */
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 1.2rem 2rem; transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .navbar.scrolled {
          background: var(--nav-bg); backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid var(--border); padding: 0.8rem 2rem;
        }
        .nav-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo {
          font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.4rem;
          background: var(--gradient-1); -webkit-background-clip: text; background-clip: text;
          color: transparent; text-decoration: none;
        }
        .nav-links { display: flex; gap: 2rem; align-items: center; }
        .nav-links a {
          color: var(--text-secondary); text-decoration: none; font-size: 0.9rem;
          font-weight: 500; transition: color 0.3s; position: relative;
        }
        .nav-links a::after {
          content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px;
          background: var(--gradient-1); transition: width 0.3s ease;
        }
        .nav-links a:hover { color: var(--accent); }
        .nav-links a:hover::after { width: 100%; }
        .nav-cta {
          padding: 0.5rem 1.2rem !important; border-radius: 30px !important;
          border: 1px solid var(--accent) !important; color: var(--accent) !important;
          font-size: 0.85rem !important; transition: all 0.3s !important;
        }
        .nav-cta:hover { background: var(--accent) !important; color: var(--bg) !important; }
        .nav-cta::after { display: none !important; }
        .theme-toggle {
          background: var(--surface); border: 1px solid var(--border);
          color: var(--text-primary); width: 42px; height: 42px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem; transition: all 0.3s;
        }
        .theme-toggle:hover { border-color: var(--accent); color: var(--accent); }
        .mobile-toggle {
          display: none; background: none; border: none;
          color: var(--text-primary); font-size: 1.5rem;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none; position: absolute; top: 100%; left: 0; right: 0;
            background: var(--nav-bg); backdrop-filter: blur(20px);
            padding: 2rem; gap: 1.5rem; flex-direction: column;
            border-bottom: 1px solid var(--border);
          }
          .nav-links.open { display: flex; }
          .mobile-toggle { display: block; }
        }

        /* ── HERO ── */
        .hero {
          min-height: 100vh; display: flex; flex-direction: column;
          justify-content: center; align-items: center; text-align: center;
          padding: 6rem 0 4rem; position: relative;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,199,255,0.06); backdrop-filter: blur(12px);
          padding: 0.6rem 1.6rem; border-radius: 50px;
          border: 1px solid rgba(59,199,255,0.2);
          font-size: 0.8rem; margin-bottom: 2.5rem; letter-spacing: 2.5px;
          color: var(--accent); font-family: 'Fira Code', monospace;
          animation: fadeInUp 0.8s ease forwards;
        }
        .pulse-dot {
          width: 8px; height: 8px; background: #22c55e; border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.5); } }
        .name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3rem, 8vw, 6rem); font-weight: 800; line-height: 1.05;
          background: linear-gradient(135deg, #ffffff 0%, var(--accent) 50%, var(--ai-color) 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          margin-bottom: 1.5rem; letter-spacing: -0.03em;
          animation: fadeInUp 0.8s ease 0.2s forwards; opacity: 0;
        }
        .theme-light .name {
          background: linear-gradient(135deg, #0f172a 0%, var(--accent) 50%, var(--ai-color) 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .typewriter-wrap {
          font-size: clamp(1rem, 3.5vw, 1.5rem); color: var(--text-secondary);
          margin-bottom: 3rem; min-height: 2rem;
          animation: fadeInUp 0.8s ease 0.4s forwards; opacity: 0;
          font-family: 'Fira Code', monospace;
        }
        .typewriter-text { border-right: 2px solid var(--accent); padding-right: 4px; animation: blink 0.7s step-end infinite; }
        @keyframes blink { 0%,100% { border-color: var(--accent); } 50% { border-color: transparent; } }
        .hero-cta {
          display: flex; gap: 1.2rem; flex-wrap: wrap; justify-content: center;
          animation: fadeInUp 0.8s ease 0.6s forwards; opacity: 0;
        }
        .btn {
          padding: 1rem 2.4rem; border-radius: 50px; font-weight: 600;
          text-decoration: none; font-size: 0.95rem; display: inline-flex;
          align-items: center; gap: 10px; position: relative; overflow: hidden;
          border: none; font-family: 'Inter', sans-serif;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .btn-primary {
          background: var(--gradient-1); color: #06080d;
          box-shadow: 0 8px 30px rgba(59,199,255,0.25);
        }
        .btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 40px rgba(59,199,255,0.35);
        }
        .btn-primary::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        .btn-primary:hover::before { left: 100%; }
        .btn-outline {
          border: 1.5px solid rgba(59,199,255,0.4); color: var(--accent);
          backdrop-filter: blur(8px); background: rgba(59,199,255,0.03);
        }
        .btn-outline:hover {
          background: rgba(59,199,255,0.1); transform: translateY(-3px);
          border-color: var(--accent); box-shadow: 0 8px 25px rgba(59,199,255,0.15);
        }
        .hero-scroll {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          color: var(--text-secondary); font-size: 0.75rem; letter-spacing: 2px;
          animation: fadeInUp 0.8s ease 1s forwards, bounceDown 2s ease-in-out 1.5s infinite; opacity: 0;
        }
        .scroll-line { width: 1px; height: 40px; background: var(--gradient-1); animation: scrollLine 2s ease-in-out infinite; }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.1% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @keyframes bounceDown {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }

        /* ── REVEAL ── */
        .reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.4,0,0.2,1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        /* ── SECTIONS ── */
        .section-header { margin: 6rem 0 3rem; }
        .section-label {
          font-family: 'Fira Code', monospace; font-size: 0.8rem;
          color: var(--accent); letter-spacing: 3px; margin-bottom: 0.8rem;
          display: flex; align-items: center; gap: 10px;
        }
        .section-label::before { content: ''; width: 30px; height: 1px; background: var(--accent); }
        .section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem); font-weight: 700;
          background: linear-gradient(135deg, var(--text-primary), var(--accent));
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }

        /* ── ABOUT ── */
        .about-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: start; }
        .about-card {
          background: var(--surface); border-radius: 24px; padding: 2.5rem;
          border: 1px solid var(--border); position: relative; overflow: hidden;
          transition: background 0.5s;
        }
        .about-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: var(--gradient-1); opacity: 0.5;
        }
        .about-card p { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.8; }
        .about-card p:last-child { margin-bottom: 0; }
        .highlight { color: var(--accent); font-weight: 600; }
        .ai-highlight { color: var(--ai-color); font-weight: 600; }
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
        .stat-card {
          background: var(--surface); border-radius: 20px; padding: 2rem 1.5rem;
          border: 1px solid var(--border); text-align: center;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
        }
        .stat-card::after {
          content: ''; position: absolute; inset: 0;
          background: var(--gradient-1); opacity: 0; transition: opacity 0.4s;
        }
        .stat-card:hover { transform: translateY(-5px); border-color: rgba(59,199,255,0.3); }
        .stat-card:hover::after { opacity: 0.03; }
        .stat-number {
          font-family: 'Space Grotesk', sans-serif; font-size: 2.5rem; font-weight: 700;
          background: var(--gradient-1); -webkit-background-clip: text; background-clip: text;
          color: transparent; position: relative; z-index: 1;
        }
        .stat-label { color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.3rem; position: relative; z-index: 1; }
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }

        /* ── SKILLS ── */
        .skills-section { margin-top: 3rem; }
        .skill-cloud { display: flex; flex-wrap: wrap; gap: 0.8rem; }
        .skill-tag {
          background: rgba(59,199,255,0.04); border: 1px solid rgba(59,199,255,0.15);
          padding: 0.7rem 1.4rem; border-radius: 12px; font-size: 0.9rem; font-weight: 500;
          color: var(--text-primary); transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          display: flex; align-items: center; gap: 10px;
        }
        .skill-tag i { color: var(--accent); font-size: 1rem; transition: transform 0.3s; }
        .skill-tag:hover {
          background: rgba(59,199,255,0.1); border-color: var(--accent);
          transform: translateY(-3px); box-shadow: 0 8px 20px rgba(59,199,255,0.1);
        }
        .skill-tag:hover i { transform: scale(1.2); }
        .skill-tag.ai:hover {
          background: rgba(164,133,255,0.1); border-color: var(--ai-color);
          box-shadow: 0 8px 20px rgba(164,133,255,0.1);
        }

        /* ── TERMINAL ── */
        .terminal-section {
          background: var(--surface); border-radius: 24px;
          border: 1px solid var(--border); overflow: hidden;
          position: relative;
        }
        .terminal-header {
          background: rgba(59,199,255,0.04); padding: 1rem 1.5rem;
          display: flex; align-items: center; gap: 10px;
          border-bottom: 1px solid var(--border);
        }
        .terminal-dot {
          width: 12px; height: 12px; border-radius: 50%;
        }
        .terminal-dot.red { background: #ff5f57; }
        .terminal-dot.yellow { background: #febc2e; }
        .terminal-dot.green { background: #28c840; }
        .terminal-title {
          font-family: 'Fira Code', monospace; font-size: 0.8rem;
          color: var(--text-secondary); margin-left: 10px;
        }
        .terminal-body {
          padding: 1.5rem; height: 400px; overflow-y: auto;
          font-family: 'Fira Code', monospace; font-size: 0.85rem;
          line-height: 1.8;
        }
        .terminal-body::-webkit-scrollbar { width: 6px; }
        .terminal-body::-webkit-scrollbar-track { background: transparent; }
        .terminal-body::-webkit-scrollbar-thumb { background: rgba(59,199,255,0.2); border-radius: 3px; }
        .term-input-line { color: var(--text-primary); }
        .term-input-line span { color: var(--accent); }
        .term-prompt { color: #22c55e; }
        .term-output { color: var(--text-secondary); white-space: pre-wrap; }
        .term-input-row {
          display: flex; align-items: center; gap: 8px;
        }
        .term-input-row input {
          background: transparent; border: none; outline: none;
          color: var(--text-primary); font-family: 'Fira Code', monospace;
          font-size: 0.85rem; flex: 1; caret-color: var(--accent);
        }

        /* ── PROJECTS ── */
        .filter-bar { display: flex; gap: 0.8rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .filter-btn {
          padding: 0.5rem 1.2rem; border-radius: 30px; font-size: 0.85rem;
          border: 1px solid var(--border); background: transparent;
          color: var(--text-secondary); font-weight: 500; transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }
        .filter-btn.active, .filter-btn:hover {
          background: rgba(59,199,255,0.1); border-color: var(--accent); color: var(--accent);
        }
        .grid-projects { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem; }
        .project-card {
          background: var(--card); border-radius: 24px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          position: relative; display: flex; flex-direction: column;
        }
        .project-card:hover {
          border-color: rgba(59,199,255,0.2);
          box-shadow: 0 25px 50px rgba(0,0,0,0.4), 0 0 40px rgba(59,199,255,0.05);
        }
        .tilt-glare {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          border-radius: 24px;
        }
        .project-image {
          height: 200px; position: relative; overflow: hidden;
          background: linear-gradient(135deg, var(--surface), var(--card));
        }
        .project-image-bg {
          width: 100%; height: 100%; display: flex; align-items: center;
          justify-content: center; font-size: 4rem; opacity: 0.15;
          transition: all 0.5s;
        }
        .project-card:hover .project-image-bg { opacity: 0.25; transform: scale(1.1); }
        .project-image-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, var(--card) 100%);
        }
        .project-number {
          position: absolute; top: 1.2rem; right: 1.2rem;
          font-family: 'Space Grotesk', sans-serif; font-size: 0.8rem;
          color: var(--accent); background: rgba(59,199,255,0.1);
          padding: 0.3rem 0.8rem; border-radius: 20px;
          border: 1px solid rgba(59,199,255,0.2); font-weight: 600;
        }
        .project-body { padding: 1.8rem 2rem 2rem; flex-grow: 1; display: flex; flex-direction: column; }
        .project-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem; margin-bottom: 0.8rem; font-weight: 700;
        }
        .project-card p { color: var(--text-secondary); margin-bottom: 1.5rem; flex-grow: 1; font-size: 0.92rem; line-height: 1.7; }
        .tag-group { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tag {
          background: rgba(59,199,255,0.06); padding: 0.35rem 0.9rem;
          border-radius: 8px; font-size: 0.75rem; font-family: 'Fira Code', monospace;
          border: 1px solid rgba(59,199,255,0.12); color: var(--text-secondary);
          transition: all 0.3s;
        }
        .tag:hover { border-color: var(--accent); color: var(--accent); }
        .tag.ai-tag {
          border-color: rgba(164,133,255,0.25); color: #c4b5fd;
          background: rgba(164,133,255,0.06);
        }
        .tag.ai-tag:hover { border-color: var(--ai-color); color: var(--ai-color); }
        @media (max-width: 768px) { .grid-projects { grid-template-columns: 1fr; } }

        /* ── CODE TYPING ── */
        .code-block {
          background: #0d1117; border-radius: 16px; padding: 2rem;
          font-family: 'Fira Code', monospace; font-size: 0.85rem;
          border: 1px solid rgba(59,199,255,0.1); overflow: hidden;
          position: relative;
        }
        .code-block .code-header {
          display: flex; align-items: center; gap: 8px; margin-bottom: 1.5rem;
          padding-bottom: 1rem; border-bottom: 1px solid rgba(59,199,255,0.1);
        }
        .code-block .code-header span {
          font-size: 0.8rem; color: #8b949e;
        }
        .code-line { margin-bottom: 0.3rem; min-height: 1.4em; }
        .code-keyword { color: #ff7b72; }
        .code-string { color: #a5d6ff; }
        .code-prop { color: #d2a8ff; }
        .code-bracket { color: #e6edf3; }
        .code-comment { color: #8b949e; }
        .code-value { color: #22c55e; }
        .code-cursor {
          display: inline-block; width: 8px; height: 16px;
          background: var(--accent); animation: blink 0.7s step-end infinite;
          vertical-align: text-bottom; margin-left: 2px;
        }

        /* ── CREDENTIALS ── */
        .cred-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.5rem; }
        .cred-item {
          display: flex; align-items: flex-start; gap: 1.5rem;
          background: var(--surface); padding: 2rem; border-radius: 20px;
          border: 1px solid var(--border); transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
        }
        .cred-item::before {
          content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 0;
          background: var(--gradient-1); transition: height 0.4s ease; border-radius: 0 0 4px 0;
        }
        .cred-item:hover { border-color: rgba(59,199,255,0.2); transform: translateX(5px); background: var(--card); }
        .cred-item:hover::before { height: 100%; }
        .cred-icon {
          width: 56px; height: 56px; border-radius: 16px; display: flex;
          align-items: center; justify-content: center; font-size: 1.4rem;
          flex-shrink: 0; transition: transform 0.3s;
        }
        .cred-item:hover .cred-icon { transform: scale(1.1) rotate(-5deg); }
        .cred-icon.accent-bg { background: rgba(59,199,255,0.1); color: var(--accent); border: 1px solid rgba(59,199,255,0.2); }
        .cred-icon.ai-bg { background: rgba(164,133,255,0.1); color: var(--ai-color); border: 1px solid rgba(164,133,255,0.2); }
        .cred-icon.green-bg { background: rgba(34,197,94,0.1); color: #22c55e; border: 1px solid rgba(34,197,94,0.2); }
        .cred-item strong { font-size: 1.15rem; display: block; margin-bottom: 6px; font-family: 'Space Grotesk', sans-serif; }
        .cred-detail { color: var(--text-secondary); font-size: 0.88rem; line-height: 1.5; }
        @media (max-width: 768px) { .cred-grid { grid-template-columns: 1fr; } }

        /* ── CONTACT ── */
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .contact-info-card {
          background: var(--surface); border-radius: 24px; padding: 2.5rem;
          border: 1px solid var(--border);
        }
        .contact-info-item {
          display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;
        }
        .contact-info-icon {
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(59,199,255,0.1); color: var(--accent);
          border: 1px solid rgba(59,199,255,0.2); font-size: 1.1rem; flex-shrink: 0;
        }
        .contact-info-text strong { display: block; font-size: 0.9rem; margin-bottom: 2px; }
        .contact-info-text span { font-size: 0.85rem; color: var(--text-secondary); }
        .contact-form {
          background: var(--surface); border-radius: 24px; padding: 2.5rem;
          border: 1px solid var(--border);
        }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label {
          display: block; font-size: 0.85rem; font-weight: 600;
          margin-bottom: 0.5rem; color: var(--text-secondary);
        }
        .form-group input, .form-group textarea {
          width: 100%; padding: 0.9rem 1.2rem; border-radius: 14px;
          border: 1px solid var(--border); background: var(--bg);
          color: var(--text-primary); font-size: 0.95rem; font-family: 'Inter', sans-serif;
          transition: all 0.3s; outline: none;
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent); box-shadow: 0 0 0 3px rgba(59,199,255,0.1);
        }
        .form-group textarea { resize: vertical; min-height: 120px; }
        .form-error { color: #ef4444; font-size: 0.8rem; margin-top: 0.3rem; }
        .form-success {
          background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3);
          color: #22c55e; padding: 1rem; border-radius: 14px; text-align: center;
          font-weight: 600; margin-bottom: 1.5rem;
        }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }

        /* ── FOOTER ── */
        .footer { margin-top: 8rem; padding: 4rem 0 2rem; border-top: 1px solid var(--border); }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem; }
        .footer-brand { font-family: 'Space Grotesk', sans-serif; font-size: 1.2rem; font-weight: 700; }
        .footer-brand span { background: var(--gradient-1); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .social-links { display: flex; gap: 1rem; }
        .social-links a {
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          color: var(--text-secondary); font-size: 1.2rem;
          background: var(--surface); border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1); text-decoration: none;
        }
        .social-links a:hover {
          color: var(--accent); border-color: var(--accent);
          transform: translateY(-4px); box-shadow: 0 8px 20px rgba(59,199,255,0.15);
        }
        .footer-bottom {
          text-align: center; margin-top: 3rem; padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.04);
          color: var(--text-secondary); font-size: 0.85rem;
        }
        @media (max-width: 768px) { .footer-inner { flex-direction: column; text-align: center; } }

        /* ── CHAT BUBBLE ── */
        .chat-bubble-btn {
          position: fixed; bottom: 2rem; right: 2rem; width: 60px; height: 60px;
          border-radius: 50%; background: var(--gradient-1); border: none;
          color: #06080d; font-size: 1.5rem; display: flex; align-items: center;
          justify-content: center; z-index: 9998; box-shadow: 0 8px 30px rgba(59,199,255,0.3);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        /* ── THEME LIGHT OVERRIDES ── */
        .theme-light .project-card { border-color: rgba(0,0,0,0.06); }
        .theme-light .project-card:hover { box-shadow: 0 25px 50px rgba(0,0,0,0.1); }
        .theme-light .terminal-section { background: #0d1117; }
        .theme-light .code-block { background: #0d1117; }
        .theme-light .project-image { background: linear-gradient(135deg, #e2e8f0, #f1f5f9); }
      `}),(0,t.jsxs)("div",{className:`loading-screen ${!e?"hidden":""}`,style:{pointerEvents:e?"all":"none"},children:[(c||[]).map((e,a)=>(0,t.jsx)("div",{className:"boot-line",children:"string"==typeof e&&e.includes("[OK]")?(0,t.jsxs)(t.Fragment,{children:[e.replace(" [OK]","")," ",(0,t.jsx)("span",{children:"[OK]"})]}):e},a)),(0,t.jsx)("div",{className:"boot-progress",children:(0,t.jsx)("div",{className:"boot-progress-bar"})})]}),(0,t.jsx)("div",{className:"scroll-progress",style:{width:`${Y}%`}}),(0,t.jsx)("div",{ref:P,className:"custom-cursor"}),(0,t.jsx)("div",{ref:F,className:"custom-trail"}),(0,t.jsx)("canvas",{ref:R,id:"neural-canvas"}),(0,t.jsx)("div",{className:"glow-orb"}),(0,t.jsx)("div",{className:"glow-orb-2"}),(0,t.jsx)("nav",{className:`navbar ${m?"scrolled":""}`,children:(0,t.jsxs)("div",{className:"nav-inner",children:[(0,t.jsx)("a",{href:"#",className:"nav-logo",onClick:e=>e.preventDefault(),children:"<Sami/>"}),(0,t.jsxs)("div",{className:`nav-links ${g?"open":""}`,children:[(0,t.jsx)("a",{onClick:()=>$("about"),children:"About"}),(0,t.jsx)("a",{onClick:()=>$("terminal"),children:"Terminal"}),(0,t.jsx)("a",{onClick:()=>$("projects"),children:"Projects"}),(0,t.jsx)("a",{onClick:()=>$("credentials"),children:"Credentials"}),(0,t.jsx)("a",{onClick:()=>$("contact"),children:"Contact"}),(0,t.jsxs)("a",{href:"https://github.com/devsamikhan",target:"_blank",rel:"noopener noreferrer",className:"nav-cta",children:[(0,t.jsx)("i",{className:"fab fa-github"})," GitHub"]})]}),(0,t.jsx)("button",{className:"mobile-toggle",onClick:()=>b(!g),"aria-label":"Toggle menu",children:(0,t.jsx)("i",{className:g?"fas fa-times":"fas fa-bars"})})]})}),(0,t.jsxs)("main",{className:"container",children:[(0,t.jsxs)("section",{className:"hero",children:[(0,t.jsxs)("div",{className:"hero-badge",children:[(0,t.jsx)("span",{className:"pulse-dot"}),"INIT_VIBE_CODER"]}),(0,t.jsx)("h1",{className:"name scramble-text",children:"Sami Ullah Khan"}),(0,t.jsx)("div",{className:"typewriter-wrap",children:(0,t.jsx)("span",{className:"typewriter-text",id:"typewriter"})}),(0,t.jsxs)("div",{className:"hero-cta",children:[(0,t.jsxs)("a",{href:"#projects",onClick:e=>{e.preventDefault(),$("projects")},className:"btn btn-primary btn-magnetic",children:[(0,t.jsx)("i",{className:"fas fa-rocket"})," Browse Portfolio"]}),(0,t.jsxs)("a",{href:"https://github.com/devsamikhan",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline btn-magnetic",children:[(0,t.jsx)("i",{className:"fab fa-github"})," GitHub"]})]}),(0,t.jsxs)("div",{className:"hero-scroll",children:[(0,t.jsx)("span",{children:"SCROLL"}),(0,t.jsx)("div",{className:"scroll-line"})]})]}),(0,t.jsxs)("section",{id:"about",children:[(0,t.jsxs)("div",{className:"section-header reveal",children:[(0,t.jsx)("div",{className:"section-label",children:"01 — ABOUT"}),(0,t.jsx)("h2",{className:"section-title scramble-text",children:"/sys/about_me"})]}),(0,t.jsxs)("div",{className:"about-grid",children:[(0,t.jsxs)("div",{className:"about-card reveal reveal-delay-1",children:[(0,t.jsxs)("p",{children:["Hello! I'm"," ",(0,t.jsx)("span",{className:"highlight",children:"Sami Ullah"}),", a Full-Stack developer and Vibe Coder who thrives in the terminal. I specialize in building high-performance Android applications using"," ",(0,t.jsx)("span",{className:"highlight",children:"Kotlin"})," and creating robust web ecosystems."]}),(0,t.jsxs)("p",{children:["Beyond traditional coding, I am heavily invested in the future of tech. Armed with a"," ",(0,t.jsx)("span",{className:"ai-highlight",children:"Google AI Certification"})," and deep expertise in"," ",(0,t.jsx)("span",{className:"ai-highlight",children:"Claude AI prompting & integration"}),", I build intelligent systems that don't just execute code — they think."]})]}),(0,t.jsx)("div",{className:"stats-grid reveal reveal-delay-2",children:[{target:50,label:"Web Apps Built"},{target:10,label:"Android Projects"},{target:3,label:"AI Certifications"},{target:100,label:"% Vibe Coder"}].map(e=>(0,t.jsxs)("div",{className:"stat-card",children:[(0,t.jsx)("div",{className:"stat-number","data-target":e.target,children:"0"}),(0,t.jsx)("div",{className:"stat-label",children:e.label})]},e.label))})]}),(0,t.jsx)("div",{className:"skills-section reveal",style:{marginTop:"3rem"},children:(0,t.jsx)("div",{className:"skill-cloud",children:o.map(e=>(0,t.jsxs)("span",{className:`skill-tag ${e.ai?"ai":""}`,children:[(0,t.jsx)("i",{className:e.icon})," ",e.label]},e.label))})})]}),(0,t.jsxs)("section",{id:"terminal",children:[(0,t.jsxs)("div",{className:"section-header reveal",children:[(0,t.jsx)("div",{className:"section-label",children:"02 — TERMINAL"}),(0,t.jsx)("h2",{className:"section-title scramble-text",children:"/interactive_console"})]}),(0,t.jsxs)("div",{className:"terminal-section reveal reveal-delay-1",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot red"}),(0,t.jsx)("div",{className:"terminal-dot yellow"}),(0,t.jsx)("div",{className:"terminal-dot green"}),(0,t.jsx)("span",{className:"terminal-title",children:"sami@portfolio:~ — SamiOS Terminal v2.0"})]}),(0,t.jsxs)("div",{className:"terminal-body",id:"terminalBody",children:[x.map((e,a)=>(0,t.jsx)("div",{children:"input"===e.type?(0,t.jsxs)("div",{className:"term-input-line",children:[(0,t.jsx)("span",{className:"term-prompt",children:"sami@portfolio:~$"})," ",e.text]}):(0,t.jsx)("div",{className:"term-output",children:e.text})},a)),(0,t.jsxs)("div",{className:"term-input-row",children:[(0,t.jsx)("span",{className:"term-prompt",children:"sami@portfolio:~$"}),(0,t.jsx)("input",{ref:B,type:"text",value:v,onChange:e=>y(e.target.value),onKeyDown:e=>{if("Enter"===e.key&&(G(v),y("")),"ArrowUp"===e.key&&(e.preventDefault(),j<k.length-1)){let e=j+1;N(e),y(k[e])}if("ArrowDown"===e.key)if(e.preventDefault(),j>0){let e=j-1;N(e),y(k[e])}else N(-1),y("");if("Tab"===e.key){e.preventDefault();let t=["help","ls projects","cat about.txt","skills --list","contact","whoami","date","neofetch","clear"].find(e=>e.startsWith(v.toLowerCase().trim()));t&&y(t)}},placeholder:"Type a command...",autoComplete:"off",spellCheck:!1})]}),(0,t.jsx)("div",{ref:D})]})]})]}),(0,t.jsxs)("section",{id:"projects",children:[(0,t.jsxs)("div",{className:"section-header reveal",children:[(0,t.jsx)("div",{className:"section-label",children:"03 — WORK"}),(0,t.jsx)("h2",{className:"section-title scramble-text",children:"/deployed_projects"})]}),(0,t.jsx)("div",{className:"filter-bar reveal reveal-delay-1",children:["All","Kotlin","Python","JavaScript","AI"].map(e=>(0,t.jsx)("button",{className:`filter-btn ${f===e?"active":""}`,onClick:()=>h(e),children:e},e))}),(0,t.jsx)("div",{className:"grid-projects",children:q.map((e,a)=>(0,t.jsxs)("div",{className:`project-card reveal reveal-delay-${a%4+1}`,children:[(0,t.jsx)("div",{className:"tilt-glare"}),(0,t.jsxs)("div",{className:"project-image",children:[(0,t.jsx)("div",{className:"project-image-bg",children:(0,t.jsx)("i",{className:e.icon})}),(0,t.jsx)("div",{className:"project-image-overlay"}),(0,t.jsx)("div",{className:"project-number",children:e.num})]}),(0,t.jsxs)("div",{className:"project-body",children:[(0,t.jsx)("h3",{className:"scramble-text",children:e.title}),(0,t.jsx)("p",{children:e.desc}),(0,t.jsx)("div",{className:"tag-group",children:(e.tags||[]).map(e=>(0,t.jsx)("span",{className:`tag ${(e?.toLowerCase()||"").includes("openai")||(e?.toLowerCase()||"").includes("api")?"ai-tag":""}`,children:e},e))})]})]},e.title))})]}),(0,t.jsxs)("section",{children:[(0,t.jsxs)("div",{className:"section-header reveal",children:[(0,t.jsx)("div",{className:"section-label",children:"04 — CODE"}),(0,t.jsx)("h2",{className:"section-title scramble-text",children:"/vibe_code"})]}),(0,t.jsxs)("div",{className:"code-block reveal reveal-delay-1",children:[(0,t.jsxs)("div",{className:"code-header",children:[(0,t.jsx)("div",{className:"terminal-dot red",style:{width:10,height:10}}),(0,t.jsx)("div",{className:"terminal-dot yellow",style:{width:10,height:10}}),(0,t.jsx)("div",{className:"terminal-dot green",style:{width:10,height:10}}),(0,t.jsx)("span",{children:"sami.config.ts"})]}),(0,t.jsx)(s,{})]})]}),(0,t.jsxs)("section",{id:"credentials",children:[(0,t.jsxs)("div",{className:"section-header reveal",children:[(0,t.jsx)("div",{className:"section-label",children:"05 — CREDENTIALS"}),(0,t.jsx)("h2",{className:"section-title scramble-text",children:"/auth_credentials"})]}),(0,t.jsx)("div",{className:"cred-grid",children:i.map((e,a)=>(0,t.jsxs)("div",{className:`cred-item reveal reveal-delay-${a+1}`,children:[(0,t.jsx)("div",{className:`cred-icon ${e.cls}`,children:(0,t.jsx)("i",{className:e.icon})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{className:"scramble-text",children:e.title}),(0,t.jsx)("div",{className:"cred-detail",children:e.detail})]})]},e.title))})]}),(0,t.jsxs)("section",{id:"contact",children:[(0,t.jsxs)("div",{className:"section-header reveal",children:[(0,t.jsx)("div",{className:"section-label",children:"06 — CONTACT"}),(0,t.jsx)("h2",{className:"section-title scramble-text",children:"/connect_with_me"})]}),(0,t.jsxs)("div",{className:"contact-grid reveal reveal-delay-1",children:[(0,t.jsxs)("div",{className:"contact-info-card",children:[(0,t.jsxs)("h3",{style:{fontFamily:"'Space Grotesk', sans-serif",fontSize:"1.3rem",marginBottom:"1.5rem"},children:["Let's Build Something"," ",(0,t.jsx)("span",{className:"highlight",children:"Amazing"})]}),(0,t.jsx)("p",{style:{color:"var(--text-secondary)",marginBottom:"2rem",lineHeight:1.7},children:"Whether you need an Android app, a full-stack web platform, or AI-powered automation, I'm ready to bring your vision to life. Let's connect and create the future together."}),[{icon:"fas fa-envelope",label:"Email",value:"samikhanniazi285@gmail.com"},{icon:"fab fa-github",label:"GitHub",value:"github.com/devsamikhan"},{icon:"fab fa-linkedin-in",label:"LinkedIn",value:"linkedin.com/in/devsamikhan"},{icon:"fas fa-map-marker-alt",label:"Location",value:"Pakistan"}].map(e=>(0,t.jsxs)("div",{className:"contact-info-item",children:[(0,t.jsx)("div",{className:"contact-info-icon",children:(0,t.jsx)("i",{className:e.icon})}),(0,t.jsxs)("div",{className:"contact-info-text",children:[(0,t.jsx)("strong",{children:e.label}),(0,t.jsx)("span",{children:e.value})]})]},e.label))]}),(0,t.jsxs)("div",{className:"contact-form",children:[I&&(0,t.jsxs)("div",{className:"form-success",children:[(0,t.jsx)("i",{className:"fas fa-check-circle"}),"Message sent successfully! I'll get back to you soon."]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{children:"Name"}),(0,t.jsx)("input",{type:"text",placeholder:"Your name",value:C.name,onChange:e=>S({...C,name:e.target.value}),disabled:z}),L.name&&(0,t.jsx)("div",{className:"form-error",children:L.name})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{children:"Email"}),(0,t.jsx)("input",{type:"email",placeholder:"your@email.com",value:C.email,onChange:e=>S({...C,email:e.target.value}),disabled:z}),L.email&&(0,t.jsx)("div",{className:"form-error",children:L.email})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{children:"Message"}),(0,t.jsx)("textarea",{placeholder:"Tell me about your project...",value:C.message,onChange:e=>S({...C,message:e.target.value}),disabled:z}),L.message&&(0,t.jsx)("div",{className:"form-error",children:L.message})]}),(0,t.jsx)("button",{className:"btn btn-primary btn-magnetic",style:{width:"100%",opacity:z?.7:1,cursor:z?"not-allowed":"pointer"},onClick:K,disabled:z,children:z?"Sending...":(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("i",{className:"fas fa-paper-plane"})," Send Message"]})})]})]})]}),(0,t.jsxs)("footer",{className:"footer",children:[(0,t.jsxs)("div",{className:"footer-inner",children:[(0,t.jsxs)("div",{className:"footer-brand",children:[(0,t.jsx)("span",{children:"<Sami/>"})," Portfolio"]}),(0,t.jsx)("div",{className:"social-links",children:[{icon:"fab fa-github",url:"https://github.com/devsamikhan",label:"GitHub"},{icon:"fab fa-linkedin-in",url:"https://linkedin.com/in/devsamikhan",label:"LinkedIn"},{icon:"fab fa-x-twitter",url:"https://x.com/devsamikhan",label:"X"},{icon:"fab fa-instagram",url:"https://instagram.com/devsamikhan",label:"Instagram"}].map(e=>(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.label,children:(0,t.jsx)("i",{className:e.icon})},e.label))})]}),(0,t.jsx)("div",{className:"footer-bottom",children:"© 2026 Sami Ullah Khan. Built with passion & vibes."})]})]})]})}])}]);