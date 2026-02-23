import { useState, useEffect } from "react";

// ============================================================
// EMPODERAMIENTO EMPRESARIAL — Optimizado para WhatsApp
// CTA único: grupo WA → link Zoom 6 de marzo
// Mobile-first, urgencia real, copy directo
// ============================================================

const WA_LINK = "https://chat.whatsapp.com/C9ekPuyKhStDPOiqbpcFBS";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Open+Sans:wght@400;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: #060606;
    color: #f0ede8;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
  }

  :root {
    --gold:   #d4a843;
    --gold2:  #f0c060;
    --wa:     #25D366;
    --wa2:    #1db954;
    --rojo:   #c0392b;
    --azul:   #1a3a5c;
    --borde:  #1e1e1e;
    --n2:     #0d0d0d;
    --n3:     #111111;
    --gris:   #888888;
  }

  h1,h2,h3,h4 { font-family:'Oswald',sans-serif; line-height:1.05; }
  .wrap { max-width:780px; margin:0 auto; padding:0 20px; }
  .center { text-align:center; }

  /* ── TOPBAR ──────────────────────────────────────────── */
  .topbar {
    background: var(--rojo); text-align:center;
    padding:10px 20px; font-family:'Oswald',sans-serif;
    font-size:13px; font-weight:700; letter-spacing:0.08em;
    text-transform:uppercase; color:#fff;
    animation: flash 2.5s ease-in-out infinite;
  }
  @keyframes flash { 0%,100%{background:#c0392b} 50%{background:#e74c3c} }
  .topbar span { color:var(--gold2); }

  /* ── NAV ─────────────────────────────────────────────── */
  nav {
    background:#000; border-bottom:2px solid var(--gold);
    padding:14px 0; text-align:center;
  }
  .nav-logo {
    font-family:'Oswald',sans-serif; font-size:20px; font-weight:700;
    letter-spacing:0.08em; text-transform:uppercase;
    color:#fff; text-decoration:none;
  }
  .nav-logo span { color:var(--gold); }

  /* ── WA BUTTON ───────────────────────────────────────── */
  .btn-wa {
    display:flex; align-items:center; justify-content:center;
    gap:12px; background:var(--wa); color:#000;
    font-family:'Oswald',sans-serif; font-size:18px; font-weight:700;
    letter-spacing:0.02em; text-transform:uppercase;
    padding:20px 28px; border-radius:4px; text-decoration:none;
    transition:all 0.2s; width:100%;
    box-shadow:0 4px 24px rgba(37,211,102,0.4);
  }
  .btn-wa:hover {
    background:var(--wa2); transform:translateY(-2px);
    box-shadow:0 8px 36px rgba(37,211,102,0.55);
  }
  .btn-wa-icon { font-size:28px; flex-shrink:0; }
  .btn-wa-text { display:flex; flex-direction:column; align-items:flex-start; }
  .btn-wa-main { font-size:17px; font-weight:700; line-height:1.2; }
  .btn-wa-sub-text { font-size:12px; font-weight:400; opacity:0.8; text-transform:none; font-family:'Open Sans',sans-serif; }
  .btn-wa-note { font-size:12px; color:var(--gris); text-align:center; margin-top:8px; }

  /* ── HERO ────────────────────────────────────────────── */
  .hero {
    background:#000; padding:44px 0 36px; position:relative; overflow:hidden;
  }
  .hero::before {
    content:''; position:absolute; inset:0;
    background:radial-gradient(ellipse at 50% 30%, rgba(212,168,67,0.08) 0%, transparent 65%);
    pointer-events:none;
  }

  .event-pill {
    display:inline-flex; align-items:center; gap:8px;
    border:1px solid var(--gold); background:rgba(212,168,67,0.08);
    color:var(--gold); padding:8px 16px;
    font-size:12px; font-weight:700; letter-spacing:0.06em;
    text-transform:uppercase; margin-bottom:22px;
  }
  .dot { width:7px; height:7px; border-radius:50%; background:var(--gold); animation:pulse 1.5s infinite; display:inline-block; }
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(1.5)} }

  .hero h1 {
    font-size:clamp(32px,6vw,56px); font-weight:700;
    text-transform:uppercase; margin-bottom:10px;
  }
  .hero h1 .gold  { color:var(--gold); }

  .hero-date {
    display:inline-block; font-family:'Oswald',sans-serif;
    font-size:17px; font-weight:600; color:#fff;
    background:var(--azul); padding:8px 22px;
    letter-spacing:0.06em; margin-bottom:18px;
    border-left:4px solid var(--gold);
  }

  .hero-sub {
    font-size:clamp(15px,2vw,17px);
    color:rgba(240,237,232,0.72); line-height:1.75;
    max-width:600px; margin:0 auto 28px;
  }
  .hero-sub strong { color:#fff; }

  /* hero image */
  .hero-img-wrap {
    max-width:580px; margin:0 auto 28px;
    border:2px solid var(--gold); border-radius:4px; overflow:hidden;
    box-shadow:0 0 50px rgba(212,168,67,0.18); position:relative;
  }
  .hero-img-wrap img {
    width:100%; display:block; aspect-ratio:16/9;
    object-fit:cover; object-position:top; filter:brightness(0.55);
  }
  .hero-img-overlay {
    position:absolute; inset:0; display:flex; flex-direction:column;
    align-items:center; justify-content:center; gap:10px; padding:20px;
  }
  .hero-img-tag {
    background:var(--gold); color:#000;
    font-family:'Oswald',sans-serif; font-size:11px; font-weight:700;
    letter-spacing:0.12em; text-transform:uppercase; padding:5px 14px;
  }
  .hero-img-title {
    font-family:'Oswald',sans-serif;
    font-size:clamp(16px,3vw,28px); font-weight:700;
    color:#fff; text-align:center; text-transform:uppercase;
    text-shadow:0 2px 20px rgba(0,0,0,0.9);
  }

  /* countdown */
  .countdown { display:inline-flex; gap:8px; align-items:center; margin:16px 0 24px; }
  .cd-cell { background:#111; border:1px solid #222; padding:10px 14px; text-align:center; min-width:56px; }
  .cd-num { font-family:'Oswald',sans-serif; font-size:26px; font-weight:700; color:var(--gold); line-height:1; }
  .cd-lbl { font-size:9px; color:var(--gris); text-transform:uppercase; letter-spacing:0.1em; margin-top:2px; }
  .cd-sep { font-family:'Oswald',sans-serif; font-size:22px; color:#333; }

  /* bullets */
  .bullets { list-style:none; display:flex; flex-direction:column; gap:10px; max-width:420px; margin:0 auto 24px; text-align:left; }
  .bullet-item { display:flex; align-items:flex-start; gap:12px; font-size:15px; color:rgba(240,237,232,0.88); }
  .bullet-icon { font-size:18px; flex-shrink:0; margin-top:1px; }

  /* proof row */
  .proof-row {
    display:flex; flex-wrap:wrap; justify-content:center;
    gap:24px; margin-top:28px; padding-top:22px;
    border-top:1px solid var(--borde);
  }
  .proof-item { display:flex; align-items:center; gap:8px; }
  .proof-num { font-family:'Oswald',sans-serif; font-size:24px; font-weight:700; color:var(--gold); line-height:1; }
  .proof-lbl { font-size:11px; color:var(--gris); }

  /* ── SECTIONS ────────────────────────────────────────── */
  .sec { padding:52px 0; border-bottom:1px solid var(--borde); }
  .sec-dark { background:var(--n2); }
  .sec-blue { background:#08101a; }
  .sec-tag { font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); font-weight:700; display:block; margin-bottom:10px; }
  .sec-title { font-family:'Oswald',sans-serif; font-size:clamp(22px,4vw,38px); font-weight:700; text-transform:uppercase; line-height:1.08; margin-bottom:8px; }
  .sec-title .gold { color:var(--gold); }
  .gold-line { height:3px; width:48px; background:var(--gold); margin:12px auto 24px; }

  .band { background:var(--gold); padding:13px 0; text-align:center; font-family:'Oswald',sans-serif; font-size:14px; font-weight:700; color:#000; letter-spacing:0.06em; text-transform:uppercase; }

  /* learn grid */
  .learn-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
  .learn-card { background:var(--n3); border:1px solid var(--borde); border-left:3px solid var(--gold); padding:18px 18px; transition:background 0.2s; }
  .learn-card:hover { background:#151515; }
  .learn-num { font-family:'Oswald',sans-serif; font-size:10px; font-weight:700; color:var(--gold); letter-spacing:0.15em; margin-bottom:6px; display:block; }
  .learn-card h4 { font-size:14px; font-weight:700; font-family:'Oswald',sans-serif; text-transform:uppercase; margin-bottom:4px; }
  .learn-card p { font-size:13px; color:rgba(240,237,232,0.55); line-height:1.6; }

  /* check list */
  .check-list { list-style:none; display:flex; flex-direction:column; gap:10px; max-width:540px; margin:0 auto; }
  .check-item { display:flex; align-items:flex-start; gap:12px; font-size:15px; line-height:1.5; }
  .check-icon { width:24px; height:24px; border-radius:50%; background:var(--gold); color:#000; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:900; flex-shrink:0; margin-top:2px; }

  /* speaker */
  .speaker-layout { display:grid; grid-template-columns:200px 1fr; gap:36px; align-items:start; }
  .speaker-img { width:100%; aspect-ratio:3/4; object-fit:cover; object-position:top; border:2px solid var(--gold); display:block; filter:brightness(0.9); }
  .speaker-stripe { background:var(--gold); color:#000; font-family:'Oswald',sans-serif; font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:8px 10px; text-align:center; }
  .speaker-name { font-family:'Oswald',sans-serif; font-size:clamp(24px,4vw,40px); font-weight:700; text-transform:uppercase; line-height:1.05; margin-bottom:6px; }
  .speaker-name .gold { color:var(--gold); }
  .speaker-badge { display:inline-block; background:var(--azul); border-left:3px solid var(--gold); font-family:'Oswald',sans-serif; font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; padding:5px 12px; margin-bottom:14px; color:#fff; }
  .sp-stats { display:flex; gap:20px; flex-wrap:wrap; margin:16px 0 20px; }
  .sp-stat strong { font-family:'Oswald',sans-serif; font-size:28px; font-weight:700; color:var(--gold); display:block; line-height:1; }
  .sp-stat span { font-size:10px; color:var(--gris); text-transform:uppercase; letter-spacing:0.08em; }

  /* testimonials */
  .tgrid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
  .tcard { background:var(--n3); border:1px solid var(--borde); padding:18px; transition:border-color 0.2s; }
  .tcard:hover { border-color:var(--gold); }
  .tcard-stars { color:var(--gold); font-size:13px; letter-spacing:2px; margin-bottom:10px; }
  .tcard-text { font-size:13px; color:rgba(240,237,232,0.75); line-height:1.7; margin-bottom:14px; }
  .tcard-text .gold { color:var(--gold); font-weight:700; }
  .tcard-author { display:flex; align-items:center; gap:10px; }
  .tcard-av { width:38px; height:38px; border-radius:50%; border:2px solid var(--gold); overflow:hidden; flex-shrink:0; }
  .tcard-av img { width:100%; height:100%; object-fit:cover; display:block; }
  .tcard-name { font-weight:700; font-size:12px; }
  .tcard-role { font-size:11px; color:var(--gris); }

  /* faq */
  .faq-list { display:flex; flex-direction:column; gap:2px; }
  .faq-item { border:1px solid var(--borde); overflow:hidden; }
  .faq-q { width:100%; background:var(--n3); padding:14px 18px; text-align:left; font-size:14px; font-weight:600; color:#fff; border:none; cursor:pointer; display:flex; justify-content:space-between; align-items:center; transition:background 0.2s; }
  .faq-q:hover { background:#151515; }
  .faq-q .icon { color:var(--gold); font-size:20px; transition:transform 0.2s; flex-shrink:0; margin-left:12px; }
  .faq-q.open .icon { transform:rotate(45deg); }
  .faq-a { max-height:0; overflow:hidden; background:#080808; transition:max-height 0.3s ease, padding 0.2s; font-size:14px; color:rgba(240,237,232,0.65); line-height:1.7; }
  .faq-a.open { max-height:300px; padding:14px 18px; }

  /* cta final box */
  .cta-final-box {
    background:var(--n2); border:2px solid var(--gold);
    border-radius:6px; padding:36px 32px; max-width:520px; margin:0 auto;
    box-shadow:0 0 60px rgba(212,168,67,0.1);
  }
  .cta-final-box h3 { font-size:22px; font-weight:700; text-transform:uppercase; color:var(--gold); margin-bottom:6px; text-align:center; }
  .cta-final-box p { font-size:14px; color:var(--gris); text-align:center; margin-bottom:20px; }

  /* footer */
  footer { background:#040404; border-top:1px solid var(--borde); padding:28px 0; text-align:center; }
  .footer-logo { font-family:'Oswald',sans-serif; font-size:17px; font-weight:700; color:#fff; margin-bottom:10px; }
  .footer-logo span { color:var(--gold); }
  .footer-links { display:flex; justify-content:center; gap:20px; flex-wrap:wrap; margin-bottom:12px; }
  .footer-links a { font-size:12px; color:#333; text-decoration:none; transition:color 0.2s; }
  .footer-links a:hover { color:var(--gold); }
  .footer-copy { font-size:12px; color:#2a2a2a; }

  /* sticky mobile */
  .sticky-bar {
    display:none; position:fixed; bottom:0; left:0; right:0; z-index:300;
    background:var(--wa); color:#000;
    font-family:'Oswald',sans-serif; font-size:15px; font-weight:700;
    text-align:center; padding:14px 20px;
    text-transform:uppercase; letter-spacing:0.03em;
    text-decoration:none; box-shadow:0 -4px 20px rgba(37,211,102,0.5);
  }
  @media(max-width:720px) { .sticky-bar { display:block; } }

  /* responsive */
  @media(max-width:720px) {
    .learn-grid { grid-template-columns:1fr; }
    .tgrid { grid-template-columns:1fr; }
    .speaker-layout { grid-template-columns:1fr; }
    .cta-final-box { padding:28px 20px; }
    body { padding-bottom:58px; }
    .btn-wa { font-size:15px; padding:18px 20px; }
    .btn-wa-main { font-size:14px; }
  }

  /* fade in */
  .fi { opacity:0; transform:translateY(16px); transition:opacity .5s ease, transform .5s ease; }
  .fi.vis { opacity:1; transform:none; }
`;

// ── DATA ──────────────────────────────────────────────────
const bullets = [
  { icon:"💡", text:"Tips prácticos para emprendedores aplicables desde el primer día" },
  { icon:"🎙️", text:"Acceso directo a la sesión en vivo por Zoom el 6 de marzo" },
  { icon:"🤝", text:"Comunidad de apoyo y networking con empresarios de alto nivel" },
];

const learnItems = [
  { n:"01", t:"Mentalidad de líder", d:"Los principios que separan a los líderes de los seguidores en los negocios." },
  { n:"02", t:"Decisiones de alto rendimiento", d:"Cómo deciden los empresarios de 7 cifras bajo presión y cómo aplicarlo hoy." },
  { n:"03", t:"Estrategias para escalar", d:"Los marcos mentales que desbloquean el siguiente nivel sin trabajar el doble de horas." },
  { n:"04", t:"Errores que te frenan", d:"Los 5 bloqueos psicológicos más comunes y cómo eliminarlos para siempre." },
];

const forWhoItems = [
  "Eres emprendedor o dueño de negocio que trabaja mucho pero siente que no avanza lo suficiente.",
  "Quieres desarrollar la mentalidad de los líderes empresariales de alto nivel.",
  "Buscas tomar decisiones con mayor claridad, velocidad y confianza.",
  "Quieres escalar tus ingresos sin sacrificar tu bienestar ni tu familia.",
  "Aunque apenas estés iniciando o lleves años en el camino empresarial.",
];

const testimonials = [
  { img:"https://randomuser.me/api/portraits/men/41.jpg", stars:"★★★★★", text:<><span className="gold">Fernando cambió completamente</span> mi forma de tomar decisiones. En 3 meses dupliqué mis ingresos aplicando lo que aprendí.</>, name:"Ricardo Herrera", role:"CEO · Monterrey, México" },
  { img:"https://randomuser.me/api/portraits/women/33.jpg", stars:"★★★★★", text:<>Llevaba 2 años estancada. Una sesión con Fernando me dio la claridad que necesitaba. <span className="gold">Mi negocio creció 40% en 60 días.</span></>, name:"Andrea Castillo", role:"Emprendedora · Bogotá, Colombia" },
  { img:"https://randomuser.me/api/portraits/men/58.jpg", stars:"★★★★★", text:<>Lo que Fernando enseña no se aprende en ninguna universidad. <span className="gold">Es la diferencia entre sobrevivir y liderar.</span></>, name:"Luis Mendoza", role:"Director · Buenos Aires" },
];

const faqs = [
  { q:"¿Es realmente gratuito?", a:"Sí, 100% gratuito. Al unirte al grupo de WhatsApp recibirás el link de Zoom sin ningún costo." },
  { q:"¿Qué pasa si no puedo asistir en vivo?", a:"El evento es 100% en vivo y no se repetirá. Únete al grupo para recibir recordatorios y toda la información previa." },
  { q:"¿Cuánto dura la clase?", a:"Aproximadamente 90 minutos de contenido puro, más tiempo de preguntas y respuestas en vivo con Fernando." },
  { q:"¿Necesito experiencia previa en negocios?", a:"No. Esta clase está diseñada tanto para emprendedores iniciando como para empresarios con años de experiencia." },
];

// ── COMPONENTS ────────────────────────────────────────────
function WABtn({ size = "normal" }) {
  return (
    <div>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa"
        style={size === "big" ? { padding:"22px 32px" } : {}}>
        <span className="btn-wa-icon">📲</span>
        <span className="btn-wa-text">
          <span className="btn-wa-main">Únete al grupo de WhatsApp</span>
          <span className="btn-wa-sub-text">y recibe el link del Zoom GRATIS ahora</span>
        </span>
      </a>
      <p className="btn-wa-note">🔒 Gratis · Sin spam · Cupo limitado — ¡reserva tu lugar hoy!</p>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className={`faq-q${open ? " open" : ""}`} onClick={() => setOpen(!open)}>
        {q}<span className="icon">+</span>
      </button>
      <div className={`faq-a${open ? " open" : ""}`}>{a}</div>
    </div>
  );
}

// ── HOOKS ─────────────────────────────────────────────────
function useCountdown() {
  const [t, setT] = useState({ d:14, h:0, m:0, s:0 });
  useEffect(() => {
    const target = new Date("2026-03-06T13:00:00").getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function useFadeIn() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("vis"); io.unobserve(e.target); }
      }),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".fi").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const pad = n => String(n).padStart(2, "0");

// ── APP ───────────────────────────────────────────────────
export default function App() {
  const time = useCountdown();
  useFadeIn();

  return (
    <>
      <style>{CSS}</style>

      {/* TOPBAR */}
      <div className="topbar">
        ⚡ <span>Cupo limitado</span> — Evento en vivo el 6 de marzo · No se repetirá
      </div>

      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">Empoderamiento <span>Empresarial</span></a>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="wrap center">

          <div className="event-pill fi">
            <span className="dot" /> Clase gratuita · Zoom · 6 de marzo
          </div>

          <h1 className="fi">
            <span className="gold">Empoderamiento</span><br />Empresarial
          </h1>

          <div className="hero-date fi">📅 6 de marzo · En vivo por Zoom</div>

          <p className="hero-sub fi">
            <strong>La mentalidad que separa a los líderes de los seguidores.</strong><br />
            Únete al grupo y recibe el link de acceso a esta clase gratuita donde
            aprenderás a tomar decisiones de alto nivel y escalar tu negocio.
          </p>

          {/* IMAGEN */}
          <div className="hero-img-wrap fi">
            <img
              src="/fernando.png"
              alt="Fernando Martínez — Empoderamiento Empresarial"
              onError={e => { e.target.src="https://randomuser.me/api/portraits/men/40.jpg"; }}
            />
            <div className="hero-img-overlay">
              <div className="hero-img-tag">Clase gratuita · 6 de marzo · En vivo</div>
              <div className="hero-img-title">"La mentalidad que separa<br/>a los líderes de los seguidores"</div>
            </div>
          </div>

          {/* COUNTDOWN */}
          <div className="fi">
            <p style={{fontSize:10,color:"#555",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:8}}>El evento comienza en:</p>
            <div className="countdown">
              <div className="cd-cell"><div className="cd-num">{pad(time.d)}</div><div className="cd-lbl">Días</div></div>
              <span className="cd-sep">:</span>
              <div className="cd-cell"><div className="cd-num">{pad(time.h)}</div><div className="cd-lbl">Hrs</div></div>
              <span className="cd-sep">:</span>
              <div className="cd-cell"><div className="cd-num">{pad(time.m)}</div><div className="cd-lbl">Min</div></div>
              <span className="cd-sep">:</span>
              <div className="cd-cell"><div className="cd-num">{pad(time.s)}</div><div className="cd-lbl">Seg</div></div>
            </div>
          </div>

          {/* BULLETS */}
          <ul className="bullets fi">
            {bullets.map((b, i) => (
              <li className="bullet-item" key={i}>
                <span className="bullet-icon">{b.icon}</span>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA PRINCIPAL */}
          <div style={{maxWidth:500,margin:"0 auto"}} className="fi">
            <WABtn size="big" />
          </div>

          {/* PROOF */}
          <div className="proof-row fi">
            {[["500+","empresarios"],["★4.9","calificación"],["15 años","experiencia"],["18","países"]].map(([n,l],i)=>(
              <div className="proof-item" key={i}>
                <span className="proof-num">{n}</span>
                <span className="proof-lbl">{l}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BAND */}
      <div className="band">¿Qué aprenderás en 90 minutos? ↓</div>

      {/* ── LEARN ────────────────────────────────────────── */}
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="center fi">
            <span className="sec-tag">Contenido de la clase</span>
            <div className="sec-title">Lo que aprenderás con<br/><span className="gold">Fernando Martínez</span></div>
            <div className="gold-line" />
          </div>
          <div className="learn-grid fi">
            {learnItems.map((item,i)=>(
              <div className="learn-card" key={i}>
                <span className="learn-num">MÓDULO {item.n}</span>
                <h4>{item.t}</h4>
                <p>{item.d}</p>
              </div>
            ))}
          </div>
          <div style={{maxWidth:480,margin:"32px auto 0"}} className="fi">
            <WABtn />
          </div>
        </div>
      </section>

      {/* BAND */}
      <div className="band">¿Esta clase es para ti? →</div>

      {/* ── FOR WHO ──────────────────────────────────────── */}
      <section className="sec sec-blue">
        <div className="wrap">
          <p style={{fontFamily:"'Oswald',sans-serif",fontSize:"clamp(18px,3vw,28px)",fontWeight:700,textAlign:"center",marginBottom:24,textTransform:"uppercase",color:"var(--gold)"}} className="fi">
            ¡ESTO ES PARA TI SI…!
          </p>
          <ul className="check-list fi">
            {forWhoItems.map((item,i)=>(
              <li className="check-item" key={i}>
                <div className="check-icon">✓</div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SPEAKER ──────────────────────────────────────── */}
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="speaker-layout fi">
            <div>
              <img className="speaker-img" src="/fernando.png" alt="Fernando Martínez"
                onError={e=>{ e.target.src="https://randomuser.me/api/portraits/men/40.jpg"; }} />
              <div className="speaker-stripe">Coach & Mentor Empresarial</div>
            </div>
            <div>
              <span className="sec-tag">Tu mentor</span>
              <div className="speaker-name">Fernando<br/><span className="gold">Martínez.</span></div>
              <div className="speaker-badge">Psicólogo · Coach · Líder Empresarial</div>
              <p style={{color:"rgba(240,237,232,0.65)",lineHeight:1.8,marginBottom:12,fontSize:14}}>
                Psicólogo, coach certificado y líder empresarial con <strong style={{color:"#fff"}}>más de 15 años</strong> en desarrollo de líderes y equipos de alto desempeño. Ha acompañado a <strong style={{color:"var(--gold)"}}>más de 500 empresarios en 18 países</strong>.
              </p>
              <p style={{color:"rgba(240,237,232,0.65)",lineHeight:1.8,marginBottom:18,fontSize:14}}>
                Su misión: <strong style={{color:"var(--gold)"}}>democratizar el acceso a la mentalidad de élite</strong> para que cualquier emprendedor alcance su máximo potencial.
              </p>
              <div className="sp-stats">
                <div className="sp-stat"><strong>500+</strong><span>empresarios</span></div>
                <div className="sp-stat"><strong>15 años</strong><span>experiencia</span></div>
                <div className="sp-stat"><strong>18</strong><span>países</span></div>
              </div>
              <div style={{maxWidth:360}}><WABtn /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="center fi" style={{marginBottom:24}}>
            <span className="sec-tag">Resultados reales</span>
            <div className="sec-title">Lo que dicen quienes ya<br/><span className="gold">transformaron su mentalidad</span></div>
            <div className="gold-line" />
          </div>
          <div className="tgrid fi">
            {testimonials.map((t,i)=>(
              <div className="tcard" key={i}>
                <div className="tcard-stars">{t.stars}</div>
                <p className="tcard-text">{t.text}</p>
                <div className="tcard-author">
                  <div className="tcard-av"><img src={t.img} alt={t.name}/></div>
                  <div>
                    <div className="tcard-name">{t.name}</div>
                    <div className="tcard-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="center fi" style={{marginBottom:24}}>
            <span className="sec-tag">Preguntas frecuentes</span>
            <div className="sec-title">Resolvemos tus <span className="gold">dudas</span></div>
          </div>
          <div className="faq-list fi">
            {faqs.map((f,i)=><FaqItem key={i} {...f}/>)}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="sec center" style={{background:"#000"}}>
        <div className="wrap fi">
          <div className="sec-title"><span className="gold">¿Listo para liderar</span><br/>en lugar de seguir?</div>
          <div className="gold-line" />
          <p style={{fontSize:15,color:"rgba(240,237,232,0.6)",maxWidth:440,margin:"0 auto 28px",lineHeight:1.8}}>
            El 6 de marzo tienes una cita con tu mejor versión.<br/>
            <strong style={{color:"#fff"}}>Cupo limitado — únete ahora antes de que se agote.</strong>
          </p>
          <div className="cta-final-box">
            <h3>🔒 Acceso 100% Gratuito</h3>
            <p>Únete al grupo y recibe el link de Zoom para el 6 de marzo</p>
            <ul className="bullets" style={{marginBottom:24}}>
              {bullets.map((b,i)=>(
                <li className="bullet-item" key={i}>
                  <span className="bullet-icon">{b.icon}</span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
            <WABtn size="big" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Empoderamiento <span>Empresarial</span></div>
        <div className="footer-links">
          <a href="/privacidad">Política de privacidad</a>
          <a href="/terminos">Términos de uso</a>
          <a href="/contacto">Contacto</a>
        </div>
        <p className="footer-copy">© 2026 Fernando Martínez · Todos los derechos reservados.</p>
      </footer>

      {/* STICKY MOBILE */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="sticky-bar">
        📲 Unirme al WhatsApp — ¡Es gratis! →
      </a>
    </>
  );
}