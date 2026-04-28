import { useState, useEffect, useRef } from 'preact/hooks';

// Inline SVG icons (reuse from QuizApp)
function IconFilm(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect width="18" height="18" x="3" y="3" rx="2"/><line x1="7" x2="7" y1="3" y2="21"/><line x1="17" x2="17" y1="3" y2="21"/><line x1="3" x2="7" y1="8" y2="8"/><line x1="17" x2="21" y1="8" y2="8"/><line x1="3" x2="7" y1="16" y2="16"/><line x1="17" x2="21" y1="16" y2="16"/></svg>}
function IconStar(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}
function IconArrowRight(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>}
function IconClock(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
function IconShieldCheck(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>}
function IconCheck(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="20 6 9 17 4 12"/></svg>}
function IconChevronDown(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m6 9 6 6 6-6"/></svg>}
function IconBrain(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>}
function IconTarget(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>}
function IconZap(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>}
function IconTv(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>}
function IconUsers(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
function IconCrown(p:any){return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>}

// ──────── PARTICLES (shared) ────────
function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (10 + Math.random() * 15) + 's';
      p.style.animationDelay = Math.random() * 12 + 's';
      const size = (1 + Math.random() * 2.5) + 'px';
      p.style.width = size;
      p.style.height = size;
      c.appendChild(p);
    }
  }, []);
  return <div ref={containerRef} className="particles" />;
}

// ──────── FAQ DATA ────────
const FAQ_ITEMS = [
  {
    q: 'É realmente gratuito?',
    a: 'Sim! O diagnóstico completo (quiz + perfil + recomendações) é 100% gratuito. O plano PRO com recomendações ilimitadas e acesso ao Oráculo de IA é opcional — e custa menos que um café por semana.'
  },
  {
    q: 'Como funciona o Oráculo de IA?',
    a: 'O Oráculo analisa seu Perfil Cinematográfico completo — seus gêneros favoritos, humor do dia, histórico e preferências emocionais. Ele cruza esses dados com milhares de filmes e avaliações reais para encontrar o match perfeito. Em 5 segundos, não 40 minutos.'
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim, cancele quando quiser em 2 cliques. Sem burocracia, sem ligação, sem taxa de cancelamento. Seu perfil e favoritos ficam salvos caso queira voltar.'
  },
  {
    q: 'Vocês têm os filmes ou só indicam?',
    a: 'Nós indicamos o filme perfeito pra você e mostramos em qual streaming ele está disponível AGORA. Netflix, Prime, Max, Disney+, Apple TV+ — você nunca mais vai buscar filme e descobrir que não tá no seu plano.'
  },
  {
    q: 'Meus dados estão seguros?',
    a: 'Absolutamente. Usamos criptografia de ponta e nunca vendemos seus dados. Suas respostas do quiz servem apenas para criar seu perfil. Pode conferir nossa Política de Privacidade.'
  },
  {
    q: 'Funciona para séries também?',
    a: 'Sim! O MrCine recomenda filmes E séries. Na hora do quiz, você escolhe se prefere filme, série ou ambos. O Oráculo entende seu humor e sugere o formato ideal praquele momento.'
  }
];

// ──────── FAQ ITEM COMPONENT ────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{q}</span>
        <IconChevronDown className={`faq-chevron ${open ? 'open' : ''}`} style={{width:18,height:18,flexShrink:0}} />
      </div>
      {open && (
        <div className="faq-answer" onClick={e => e.stopPropagation()}>
          {a}
        </div>
      )}
    </div>
  );
}

// ──────── INTERSECTION OBSERVER HOOK ────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ──────── LANDING PAGE ────────
export default function LandingPage({ onStartQuiz }: { onStartQuiz: () => void }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const problem = useInView();
  const solution = useInView();
  const howIt = useInView();
  const social = useInView();
  const offer = useInView();
  const faq = useInView();

  // Smooth scroll CTA
  const scrollToCTA = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans overflow-x-hidden relative selection:bg-[var(--accent-dim)]">
      <Particles />

      {/* ════════ HERO ════════ */}
      <div ref={heroRef} className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 min-h-screen flex flex-col">
          {/* Logo */}
          <div className="flex justify-center mb-8 sm:mb-16">
            <div className="flex items-center gap-2">
              <IconFilm className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--accent)]" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight">MrCine<span className="text-[var(--accent)]">PRO</span></span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-dim)] text-[var(--accent)] text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-[rgba(212,168,83,0.2)] font-mono tracking-[0.15em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" style={{animation:'pulse 2s ease infinite'}} />
              Diagnóstico Gratuito
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-5 sm:mb-6 max-w-3xl">
              Cansado de rolar a Netflix<br />sem saber o que assistir?
            </h1>

            <p className="text-[var(--text-secondary)] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl leading-relaxed">
              <em className="italic font-normal" style={{background:'linear-gradient(135deg, var(--accent), #e8c46e)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>
                Seu perfil de cinema revela o filme perfeito em segundos.
              </em>
            </p>

            {/* Teaser Block */}
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-4 sm:p-5 max-w-md text-left mb-6 sm:mb-8">
              <p className="text-[var(--text-secondary)] text-sm sm:text-base font-medium mb-3">Ao final do quiz você vai:</p>
              <ul className="space-y-2.5">
                {[
                  'Descobrir seu perfil real de cinema',
                  'Ver quanto tempo e dinheiro está desperdiçando',
                  'Conhecer a IA que encontra o filme perfeito pra você em segundos'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--text)]">
                    <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[var(--accent-dim)] flex items-center justify-center">
                      <svg className="w-3 h-3 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[var(--radius-sm)] bg-[var(--success-dim)] border border-[rgba(90,173,110,0.2)] text-[var(--success)] text-sm font-medium mb-8 sm:mb-10">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              100% gratuito — sem pegadinhas
            </div>

            {/* CTA */}
            <button onClick={onStartQuiz} className="cta-gold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-12 mb-6 sm:mb-8">
              Fazer Meu Diagnóstico Gratuito <IconArrowRight className="w-5 h-5" />
            </button>

            <div className="flex gap-6 text-sm text-[var(--text-muted)]">
              <span className="flex items-center gap-2">
                <IconClock className="w-4 h-4 text-[var(--accent)]" style={{strokeWidth:1.5}} />
                ~3 minutos
              </span>
              <span className="flex items-center gap-2">
                <IconShieldCheck className="w-4 h-4 text-[var(--accent)]" style={{strokeWidth:1.5}} />
                Sem cadastro
              </span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center pb-6 sm:pb-10">
            <button onClick={() => document.getElementById('problem-section')?.scrollIntoView({behavior:'smooth'})} className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors animate-bounce" style={{animationDuration:'2s'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* ════════ PROBLEM SECTION (PAS — Problem) ════════ */}
      <section id="problem-section" ref={problem.ref} className="relative z-10 py-16 sm:py-24" style={{background:'linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)'}}>
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${problem.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Badge */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--danger-dim)] border border-[rgba(199,80,80,0.15)] text-[var(--danger)] text-xs font-mono tracking-[0.15em] uppercase mb-4">
              O Problema
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-light leading-tight mb-4">
              Você vai se identificar...
            </h2>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-lg mx-auto">
              Se qualquer uma dessas situações já aconteceu com você, o MrCine foi feito pra resolver.
            </p>
          </div>

          {/* Pain Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto mb-10 sm:mb-14">
            {[
              { icon: '⏱️', title: '40 minutos rolando o catálogo', desc: 'E no final, desiste e não assiste nada. Noite de filme wasted.' },
              { icon: '😤', title: 'Acha um filme top', desc: 'Descobre que NÃO tá no seu streaming. Frustração level 100.' },
              { icon: '😴', title: 'Escolhe qualquer um por desespero', desc: 'Chato, dorme no meio. Noite perdida e tempo que não volta.' },
              { icon: '💸', title: 'Paga 3+ streamings', desc: 'E não aproveita nem metade. O algoritmo te recomenda sempre a mesma coisa.' },
            ].map((pain, i) => (
              <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-5 sm:p-6 hover:border-[rgba(199,80,80,0.3)] transition-all duration-300">
                <span className="text-2xl mb-3 block">{pain.icon}</span>
                <h3 className="text-[0.95rem] sm:text-base font-semibold mb-2 text-[var(--text)]">{pain.title}</h3>
                <p className="text-[0.85rem] text-[var(--text-secondary)] leading-relaxed">{pain.desc}</p>
              </div>
            ))}
          </div>

          {/* Stat callout */}
          <div className="text-center">
            <div className="inline-block bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] px-6 py-4 sm:px-8 sm:py-5">
              <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-1">Brasileiros perdem em média</p>
              <p className="font-display text-3xl sm:text-4xl font-light" style={{color:'var(--danger)'}}>23 horas/mês</p>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-1">apenas escolhendo o que assistir</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SOLUTION SECTION (PAS — Solution) ════════ */}
      <section ref={solution.ref} className="relative z-10 py-16 sm:py-24">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${solution.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Badge */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-dim)] border border-[rgba(212,168,83,0.2)] text-[var(--accent)] text-xs font-mono tracking-[0.15em] uppercase mb-4">
              A Solução
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-light leading-tight mb-4">
              E se alguém escolhesse<br />
              <em style={{background:'linear-gradient(135deg, var(--accent), #e8c46e)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontStyle:'italic'}}>por você?</em>
            </h2>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-lg mx-auto">
              O MrCine PRO usa inteligência artificial que entende o que você SENTE ao assistir — não só o que você viu.
            </p>
          </div>

          {/* 3 Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-3xl mx-auto mb-10 sm:mb-14">
            {[
              {
                icon: <IconClock className="w-6 h-6" style={{strokeWidth:1.5}} />,
                title: 'Pare de Rolar',
                desc: 'Chega de 40 min no catálogo. Receba a indicação certa em 5 segundos, no seu humor do dia.'
              },
              {
                icon: <IconTarget className="w-6 h-6" style={{strokeWidth:1.5}} />,
                title: 'Match Real',
                desc: 'O Oráculo analisa seu perfil — não só o que você viu, mas o que você SENTE ao assistir.'
              },
              {
                icon: <IconTv className="w-6 h-6" style={{strokeWidth:1.5}} />,
                title: 'Onde Assistir',
                desc: 'Sem surpresa. Sabemos em qual dos seus streamings o filme está disponível agora.'
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-5 sm:p-6 text-center hover:border-[rgba(212,168,83,0.3)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-dim)] flex items-center justify-center text-[var(--accent)] mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-[0.85rem] text-[var(--text-secondary)] leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA inline */}
          <div className="text-center">
            <button onClick={onStartQuiz} className="cta-gold text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-10">
              Quero Conhecer Meu Perfil <IconArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ════════ HOW IT WORKS ════════ */}
      <section ref={howIt.ref} className="relative z-10 py-16 sm:py-24" style={{background:'linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)'}}>
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${howIt.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-dim)] border border-[rgba(212,168,83,0.2)] text-[var(--accent)] text-xs font-mono tracking-[0.15em] uppercase mb-4">
              Como Funciona
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-light leading-tight mb-4">
              3 passos. Zero complicação.
            </h2>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-lg mx-auto">
              Em menos de 3 minutos, você sai do zero ao filme perfeito.
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-2xl mx-auto">
            {[
              {
                num: '01',
                title: 'Responda o Quiz',
                desc: '18 perguntas rápidas sobre seus gostos, hábitos e frustrações com filmes. Nada chato — a gente promete.',
                icon: <IconFilm className="w-5 h-5" style={{strokeWidth:1.5}} />
              },
              {
                num: '02',
                title: 'IA Analisa Seu Perfil',
                desc: 'O algoritmo cruza suas respostas com milhares de filmes e perfis reais. Ele entende não só O QUE você gosta, mas POR QUÊ.',
                icon: <IconBrain className="w-5 h-5" style={{strokeWidth:1.5}} />
              },
              {
                num: '03',
                title: 'Receba Recomendações Perfeitas',
                desc: 'Filmes com alta probabilidade de você amar, já com o streaming onde assistir. Chega de tentativa e erro.',
                icon: <IconZap className="w-5 h-5" style={{strokeWidth:1.5}} />
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 sm:gap-6 mb-8 sm:mb-10 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--accent-dim)] border border-[rgba(212,168,83,0.3)] flex items-center justify-center text-[var(--accent)] mb-2 shrink-0">
                    {step.icon}
                  </div>
                  {i < 2 && <div className="w-px flex-1 bg-[rgba(212,168,83,0.2)] min-h-[20px]" />}
                </div>
                <div className="pt-1 sm:pt-2">
                  <div className="font-mono text-[0.65rem] text-[var(--accent)] tracking-[0.18em] uppercase mb-1">Passo {step.num}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-[0.9rem] text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SOCIAL PROOF ════════ */}
      <section ref={social.ref} className="relative z-10 py-16 sm:py-24">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${social.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-dim)] border border-[rgba(212,168,83,0.2)] text-[var(--accent)] text-xs font-mono tracking-[0.15em] uppercase mb-4">
              Social Proof
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-light leading-tight mb-4">
              Quem usa, não volta atrás.
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mb-10 sm:mb-14">
            {[
              { value: '10.000+', label: 'Perfis criados' },
              { value: '94%', label: 'Taxa de acerto' },
              { value: '4.8/5', label: 'Avaliação média' }
            ].map((stat, i) => (
              <div key={i} className="text-center bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-4 sm:p-6">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[var(--accent)] mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                name: 'Mariana S.',
                avatar: '/avatar-mariana.png',
                text: 'Finalmente parei de brigar com meu namorado pra escolher filme. O app sempre acerta o que a gente quer ver!'
              },
              {
                name: 'Camila R.',
                avatar: '/avatar-rafael.jpeg',
                text: 'A função de mostrar em qual streaming o filme está salvou minha vida. Vale cada centavo do plano PRO.'
              },
              {
                name: 'Lucas M.',
                avatar: '/avatar-lucas.png',
                text: 'O Oráculo de IA me recomendou 3 filmes perfeitos em 5 segundos. Eu demoraria 40 minutos pra achar um desses.'
              },
              {
                name: 'Thiago P.',
                avatar: null,
                text: 'Eu era cético, mas o quiz acertou meu perfil certinho. Os filmes que ele indica são exatamente o que eu queria assistir e não sabia.'
              }
            ].map((t, i) => (
              <div key={i} className="bg-[var(--surface)] border border-[var(--border)] p-4 sm:p-5 rounded-[var(--radius)]">
                <div className="flex items-center gap-3 mb-2">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--accent-dim)] flex items-center justify-center text-[var(--accent)] font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-xs sm:text-sm text-[var(--text)]">{t.name}</p>
                    <div className="flex text-[var(--accent)]">
                      {[1,2,3,4,5].map(i => <IconStar key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />)}
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] text-xs sm:text-sm italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ OFFER SECTION ════════ */}
      <section ref={offer.ref} className="relative z-10 py-16 sm:py-24" style={{background:'linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)'}}>
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${offer.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-dim)] border border-[rgba(212,168,83,0.2)] text-[var(--accent)] text-xs font-mono tracking-[0.15em] uppercase mb-4">
              <IconCrown className="w-3.5 h-3.5" />
              Planos
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-light leading-tight mb-4">
              Menos que um café<br />
              <em style={{background:'linear-gradient(135deg, var(--accent), #e8c46e)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontStyle:'italic'}}>por semana.</em>
            </h2>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-lg mx-auto">
              O plano gratuito é bom. O PRO é quem resolve o problema de verdade.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto mb-8">
            {[
              {
                name: 'Grátis',
                price: 'R$ 0',
                period: '',
                daily: '',
                features: ['1 diagnóstico completo', '30 swipes por dia', 'Perfil cinematográfico', 'Recomendações básicas'],
                cta: 'Começar Grátis',
                popular: false
              },
              {
                name: 'PRO Mensal',
                price: 'R$ 9',
                period: '/mês',
                daily: 'R$ 0,30/dia',
                features: ['Recomendações ilimitadas', 'Oráculo de IA', 'Onde assistir (streamings)', 'Sem anúncios', 'Suporte prioritário'],
                cta: 'Começar Meu Acesso PRO',
                popular: true
              },
              {
                name: 'PRO Anual',
                price: 'R$ 69',
                period: '/ano',
                daily: 'R$ 0,19/dia',
                features: ['Tudo do PRO Mensal', 'Economia de 36%', 'Acesso antecipado a novidades', 'Perfil exclusivo'],
                cta: 'Melhor Custo-Benefício',
                popular: false,
                badge: 'Mais Popular'
              }
            ].map((plan, i) => (
              <div key={i} className={`offer-section relative ${plan.popular ? 'ring-1 ring-[var(--accent)]' : ''}`}>
                <div className="offer-top-bar" />
                {plan.badge && (
                  <div className="absolute top-4 right-4 px-2 py-1 rounded text-[0.6rem] font-mono tracking-[0.1em] uppercase bg-[var(--accent)] text-[var(--bg)] font-semibold">
                    {plan.badge}
                  </div>
                )}
                <div className="p-5 sm:p-6">
                  <h3 className="text-base font-semibold mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-3xl sm:text-4xl font-light text-[var(--accent)]">{plan.price}</span>
                    {plan.period && <span className="text-sm text-[var(--text-muted)]">{plan.period}</span>}
                  </div>
                  {plan.daily && <p className="text-xs text-[var(--text-muted)] mb-4">{plan.daily}</p>}
                  <ul className="space-y-2 mb-5">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <IconCheck className="w-4 h-4 text-[var(--success)] shrink-0" style={{strokeWidth:2}} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={onStartQuiz}
                    className={`w-full py-3 rounded-[var(--radius-sm)] text-sm font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cta-gold'
                        : 'bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-4 sm:p-5 flex items-start gap-3">
              <IconShieldCheck className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" style={{strokeWidth:1.5}} />
              <div>
                <p className="text-sm font-semibold mb-1">Garantia de 7 dias</p>
                <p className="text-xs text-[var(--text-secondary)]">Se não gostar, devolvemos seu dinheiro. Sem perguntas, sem burocracia. Cancele quando quiser.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section ref={faq.ref} className="relative z-10 py-16 sm:py-24">
        <div className={`max-w-2xl mx-auto px-4 sm:px-6 transition-all duration-700 ${faq.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-display text-2xl sm:text-4xl font-light leading-tight mb-4">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section id="final-cta" className="relative z-10 py-16 sm:py-24" style={{background:'linear-gradient(180deg, var(--bg) 0%, rgba(212,168,83,0.03) 50%, var(--bg) 100%)'}}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-light leading-tight mb-4">
            Pronto pra nunca mais<br />
            <em style={{background:'linear-gradient(135deg, var(--accent), #e8c46e)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontStyle:'italic'}}>perder tempo escolhendo filme?</em>
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-md mx-auto mb-8">
            Faça o diagnóstico gratuito agora e descubra seu Perfil Cinematográfico.
          </p>

          <button onClick={onStartQuiz} className="cta-gold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-12 mb-6">
            Fazer Meu Diagnóstico Gratuito <IconArrowRight className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <IconClock className="w-3.5 h-3.5 text-[var(--accent)]" style={{strokeWidth:1.5}} />
              ~3 minutos
            </span>
            <span className="flex items-center gap-1.5">
              <IconShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" style={{strokeWidth:1.5}} />
              Sem cadastro
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              100% gratuito
            </span>
          </div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="relative z-10 border-t border-[var(--border)] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <IconFilm className="w-5 h-5 text-[var(--accent)]" />
            <span className="font-bold text-sm">MrCine<span className="text-[var(--accent)]">PRO</span></span>
          </div>
          <div className="flex gap-6 text-xs text-[var(--text-muted)]">
            <a href="https://mrcine.pro/termos" className="hover:text-[var(--text)] transition-colors">Termos</a>
            <a href="https://mrcine.pro/privacidade" className="hover:text-[var(--text)] transition-colors">Privacidade</a>
            <a href="https://mrcine.pro/contato" className="hover:text-[var(--text)] transition-colors">Contato</a>
          </div>
          <p className="text-xs text-[var(--text-muted)]">&copy; {new Date().getFullYear()} MrCine</p>
        </div>
      </footer>
    </div>
  );
}
