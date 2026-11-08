(() => {
  'use strict';
  const root = document.documentElement;
  const $ = (id) => document.getElementById(id);
  const dictionaries = {
    'zh-CN': {
      skip:'跳转至主要内容',navResearch:'研究方向',navProjects:'开源作品',navPlayground:'交互实验室',navNotes:'技术笔记',navAbout:'关于',
      heroEyebrow:'独立研究 · 开源工程 · 创意实验',heroTitle1:'探索问题的边界，',heroTitle2:'构建答案的形状。',
      heroDescription:'这里记录我在数学计算、人工智能、工程仿真与交互设计中的探索。让抽象的理论成为可验证的算法，让算法成为真实可用的工具。',
      heroPrimary:'探索开源作品',heroSecondary:'进入交互实验室',heroFoot:'研究关键词',artCaption:'从公式到实现，从实验到作品。',
      researchTitle:'研究方向',researchIntro:'关注具有挑战性的计算问题，从理论推导到工程验证，持续探索可靠、有效和可复现的实现方法。',
      stageResearch:'研究中',stageExploring:'持续探索',
      r1Title:'全局数值优化',r1Body:'UGO / SBCGO：非凸拟合、自动尺度分析、高精度数值计算与全局最优性认证方法。',
      r2Title:'无人机视觉与跟踪',r2Body:'小目标检测、困难负样本挖掘、目标跟踪和面向边缘设备的低延迟推理。',
      r3Title:'精密传动与参数化设计',r3Body:'谐波减速器齿形生成、几何装配、可交互参数设计及工程仿真。',
      r4Title:'计算艺术与交互实验',r4Body:'程序化图形、数学可视化、迷宫生成、三维仿真和可离线使用的小工具。',
      projectsTitle:'精选项目',projectsIntro:'从 MATLAB 数值工具到浏览器交互作品。下列公开仓库均链接至真实的 GitHub 项目。',
      filterAll:'全部',filterInteractive:'交互作品',filterScientific:'科学计算',filterUtilities:'实用工具',
      p1Body:'用十二个数学表达式刻画时间，让时钟通过谐波发声。支持九种语言、六套主题和实时走时。',
      p2Body:'MATLAB 可视化相关开源项目，汇集图形与绘图探索。',
      p3Body:'将太极视觉元素与时间表达结合的创意时钟项目。',
      p4Body:'面向 Windows x64 的 MATLAB 多精度计算工具箱预编译版本。',
      p5Body:'可按不同字符组合规则生成密码，并记录保存时间的实用工具。',
      p6Body:'箭头逃脱解谜游戏，探索不同布局、视觉主题和策略道具。',
      tryDemo:'在线体验 ↗',viewRepo:'查看仓库 ↗',moreRepos:'还想查看更多代码和工具？',allRepos:'浏览全部 GitHub 仓库 ↗',
      labTitle:'在线实验室',labIntro:'不是仅供观看的截图，而是能够动手调整参数、立即看到结果的交互实验。',
      waveTitle:'当十二个谐波相遇',waveBody:'调整傅里叶级数的项数，观察正弦波如何逐渐接近锯齿波。数学不再只是静态公式。',
      waveRange:'谐波数量',openClock:'打开完整 bashanClock 时钟',
      notesTitle:'技术笔记',notesIntro:'记录问题、方法和实验思考。以下是持续整理的主题，未将尚未发布的内容冒充已发表文章。',
      n1Title:'没有初值与边界，如何开始全局拟合？',n1Body:'从尺度分析、域探索和多起点搜索谈起。',
      n2Title:'复杂背景下的小目标为什么难检测？',n2Body:'理解尺度、难负样本与推理成本之间的权衡。',
      n3Title:'从傅里叶级数到一只会发声的时钟',n3Body:'探索谐波叠加和 Web Audio 的有趣交叉。',
      comingSoon:'整理中',aboutTitle:'关于巴山学长',aboutLead:'保持好奇，也保持严谨。',
      aboutBody:'Bashan Lab 是我整理研究思路、分享开源作品与展示交互实验的个人空间。我关注数值方法、人工智能、工程工具及可视化设计，重视可复现的实验与实际可用的软件。',
      aboutBody2:'这里展示的是持续演进的工作：已公开的软件提供仓库链接，尚在研究的方向保留探索中的状态。欢迎通过 GitHub 交流技术问题和想法。',
      footerLine:'以数学为语言，以工程为实践。',backTop:'返回顶部 ↑',footerDisclaimer:'研究探索 · 开源分享 · 独立创作'
    },
    en: {
      skip:'Skip to main content',navResearch:'Research',navProjects:'Projects',navPlayground:'Playground',navNotes:'Field Notes',navAbout:'About',
      heroEyebrow:'INDEPENDENT RESEARCH · OPEN SOURCE · EXPERIMENTS',heroTitle1:'Explore the edges',heroTitle2:'of what is possible.',
      heroDescription:'A collection of explorations in mathematical computing, artificial intelligence, engineering simulation and interactive design. Turning theory into testable algorithms, and algorithms into useful tools.',
      heroPrimary:'Explore projects',heroSecondary:'Enter the playground',heroFoot:'FOCUS AREAS',artCaption:'From formula to implementation. From experiment to creation.',
      researchTitle:'Research areas',researchIntro:'Tackling challenging computational problems, from mathematical reasoning to engineering validation, with a focus on reliable and reproducible methods.',
      stageResearch:'IN RESEARCH',stageExploring:'EXPLORING',
      r1Title:'Global optimization',r1Body:'UGO / SBCGO: nonlinear fitting, automatic scaling, high-precision numerical computing and methods for certifying global optimality.',
      r2Title:'UAV vision & tracking',r2Body:'Small-object detection, hard-negative mining, object tracking and low-latency inference on edge devices.',
      r3Title:'Precision gear design',r3Body:'Harmonic drive tooth-profile generation, geometric assembly, interactive parameter design and engineering simulation.',
      r4Title:'Creative computing',r4Body:'Generative graphics, mathematical visualization, maze generation, 3D simulation and useful offline tools.',
      projectsTitle:'Featured projects',projectsIntro:'From MATLAB numerical tools to web experiments. Each published project links to a real, public GitHub repository.',
      filterAll:'All',filterInteractive:'Interactive',filterScientific:'Scientific',filterUtilities:'Utilities',
      p1Body:'A clock with twelve mathematical expressions and audible harmonics. Nine languages, six themes, and live timekeeping.',
      p2Body:'An open-source MATLAB project exploring plots and scientific visualization.',
      p3Body:'A creative clock combining Tai Chi visual motifs with the expression of time.',
      p4Body:'A prebuilt multiple-precision toolbox for MATLAB on Windows x64.',
      p5Body:'A utility for generating passwords from configurable character sets, with saved records and timestamps.',
      p6Body:'An arrow-escape puzzle game with varied layouts, visual themes and strategic power-ups.',
      tryDemo:'Try live demo ↗',viewRepo:'View repository ↗',moreRepos:'Looking for more code and tools?',allRepos:'Browse all GitHub repositories ↗',
      labTitle:'Interactive lab',labIntro:'Not just screenshots: experiments you can adjust and observe in real time.',
      waveTitle:'When harmonics converge',waveBody:'Vary the number of Fourier series terms and see how sine waves gradually approach a sawtooth. Mathematics becomes something you can explore.',
      waveRange:'Harmonics',openClock:'Open the complete bashanClock',
      notesTitle:'Field notes',notesIntro:'Working notes on problems, methods and experiments. These topics are in preparation and are not represented as published articles.',
      n1Title:'Global fitting without a starting guess or bounds',n1Body:'Scaling, domain discovery and multi-start search.',
      n2Title:'Why small objects are hard to detect',n2Body:'Trade-offs among scale, hard negatives and inference cost.',
      n3Title:'From Fourier series to a singing clock',n3Body:'An intersection of harmonic synthesis and Web Audio.',
      comingSoon:'IN PREPARATION',aboutTitle:'About Bashan',aboutLead:'Stay curious. Stay rigorous.',
      aboutBody:'Bashan Lab is my personal space for organizing research ideas, sharing open-source work and demonstrating interactive experiments. My interests include numerical methods, AI, engineering tools and visualization, with an emphasis on reproducible experiments and usable software.',
      aboutBody2:'This is a work in progress: published projects link to their repositories, while active research topics are clearly labeled. Technical discussions and ideas are welcome on GitHub.',
      footerLine:'Mathematics as a language. Engineering as a practice.',backTop:'Back to top ↑',footerDisclaimer:'RESEARCH · OPEN SOURCE · INDEPENDENT CREATION'
    }
  };

  const safeGet = (key) => {
    try { return localStorage.getItem(key); } catch { return null; }
  };
  const safeSet = (key, value) => {
    try { localStorage.setItem(key, value); } catch { /* storage unavailable */ }
  };
  const preferredLang = safeGet('bashanlab.language') || ((navigator.language || '').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en');
  let lang = dictionaries[preferredLang] ? preferredLang : 'en';
  const initTheme = safeGet('bashanlab.theme') || 'dark';
  root.dataset.theme = ['light','dark'].includes(initTheme) ? initTheme : 'dark';

  function translate() {
    root.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = dictionaries[lang][element.dataset.i18n];
      if (typeof value !== 'string') return;
      if (element.classList.contains('research-card')) return;
      // Preserve the decorative colored dot inside section headings.
      if (['researchTitle','projectsTitle','labTitle','notesTitle','aboutTitle'].includes(element.dataset.i18n)) {
        const punct = element.querySelector('.punct');
        element.textContent = value;
        if (punct) element.appendChild(punct);
      } else {
        element.textContent = value;
      }
    });
    $('languageLabel').textContent = lang === 'en' ? '中文' : 'EN';
    $('menuToggle').setAttribute('aria-label',lang === 'en' ? 'Open navigation' : '打开导航');
    $('themeToggle').setAttribute('aria-label',lang === 'en' ? 'Toggle light/dark theme' : '切换明暗主题');
    document.title = lang === 'en' ? 'Bashan Lab | Research, Code & Interactive Experiments' : 'Bashan Lab | 巴山学长的数字实验室';
  }

  function toggleMenu(forceClosed = false) {
    const nav = $('mainNav');
    const open = forceClosed ? false : !nav.classList.contains('open');
    nav.classList.toggle('open',open);
    $('menuToggle').setAttribute('aria-expanded',String(open));
  }
  $('menuToggle').addEventListener('click',() => toggleMenu());
  document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click',() => toggleMenu(true)));
  window.addEventListener('keydown',(e) => { if(e.key === 'Escape') toggleMenu(true); });
  $('langToggle').addEventListener('click',() => {
    lang = lang === 'en' ? 'zh-CN' : 'en';
    safeSet('bashanlab.language',lang);
    translate();
  });
  $('themeToggle').addEventListener('click',() => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    safeSet('bashanlab.theme',root.dataset.theme);
    drawWave();
  });

  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click',() => {
    const category = btn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(element => {
      const active = element === btn;
      element.classList.toggle('active',active);
      element.setAttribute('aria-pressed',String(active));
    });
    let visible = 0;
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
      if(!card.hidden) visible++;
    });
    $('projectCount').textContent = String(visible).padStart(2,'0');
  }));

  let terms = Number($('harmonicsRange').value) || 6;
  let pendingWave = 0;
  function drawWave() {
    const canvas = $('waveCanvas');
    const parent = canvas.parentElement;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || parent.clientWidth || 500;
    const h = rect.height || 245;
    if (w < 5 || h < 5) return;
    const dpr = Math.min(window.devicePixelRatio || 1,2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const top = 10,bottom=h-12,mid=(top+bottom)/2;
    ctx.clearRect(0,0,w,h);
    ctx.strokeStyle = '#91b9bb22';ctx.lineWidth=1;
    for(let i=0;i<=8;i++) { const x=(i/8)*w;ctx.beginPath();ctx.moveTo(x,top);ctx.lineTo(x,bottom);ctx.stroke(); }
    for(let j=-2;j<=2;j++) {const y=mid+j*(h-40)/5;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
    ctx.strokeStyle='#a3c7c755';ctx.beginPath();ctx.moveTo(0,mid);ctx.lineTo(w,mid);ctx.stroke();

    function f(theta) {
      let s=0;
      for(let k=1;k<=terms;k++) s+=Math.sin(k*theta)/k;
      return s;
    }
    function strokePlot(fn,color,width,dash) {
      ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=width;
      ctx.setLineDash(dash || []);
      const n=Math.max(400,Math.round(w*2));
      for(let i=0;i<=n;i++){
        const theta=-Math.PI+3*Math.PI*(i/n);
        const x=i*w/n;
        const y=mid - fn(theta)*(h-40)/4.2;
        if(i===0)ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.stroke();ctx.setLineDash([]);
    }
    strokePlot(theta=>{const value=(theta+Math.PI)%(2*Math.PI);return -(value-Math.PI)/2},'#669fa181',1.4,[4,6]);
    const isLight = root.dataset.theme === 'light';
    strokePlot(f,isLight?'#0f7b70':'#7de7d0',2.7);
    ctx.fillStyle=isLight?'#175d57':'#a9f2e3';
    ctx.font='10px monospace';ctx.fillText('N = '+terms,8,17);
  }
  $('harmonicsRange').addEventListener('input',(event) => {
    terms=Math.min(12,Math.max(1,Number(event.target.value)||1));
    $('harmonicNumber').textContent=String(terms).padStart(2,'0')+' / 12';
    drawWave();
  });
  function resizePlot() {
    if(pendingWave) cancelAnimationFrame(pendingWave);
    pendingWave=requestAnimationFrame(()=>{pendingWave=0;drawWave();});
  }
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(resizePlot);
    observer.observe($('waveCanvas'));
  } else window.addEventListener('resize',resizePlot);
  const observer = ('IntersectionObserver' in window) ? new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in-view');});
  },{rootMargin:'0px 0px -10% 0px'}) : null;
  if(observer) document.querySelectorAll('.research-card,.project-card,.note-row').forEach(el=>observer.observe(el));

  const meter = $('scrollMeter');
  let scrollRequest = 0;
  function onScroll(){
    if(scrollRequest)return;
    scrollRequest=requestAnimationFrame(()=>{
      scrollRequest=0;
      const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      meter.style.width=(Math.min(1,Math.max(0,window.scrollY/max))*100)+'%';
    });
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  $('copyrightYear').textContent=String(new Date().getFullYear());
  translate();drawWave();onScroll();
})();