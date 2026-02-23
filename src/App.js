import { useState, useEffect } from "react";

// ============================================================
// EMPODERAMIENTO EMPRESARIAL — Fernando Martínez
// Estilo: Sales page empresarial aspiracional — Tony Robbins
// Paleta: Negro profundo + Dorado + Azul acero
// Tipografía: Oswald + Open Sans (consistencia con FunnelFast)
// ============================================================

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: #080808;
    color: #f0ede8;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
  }

  :root {
    --dorado:     #d4a843;
    --dorado2:    #f0c060;
    --dorado-dark:#b8902e;
    --azul:       #1a3a5c;
    --azul2:      #245280;
    --rojo:       #c0392b;
    --blanco:     #f0ede8;
    --gris:       #999;
    --borde:      #1e1e1e;
    --negro2:     #0d0d0d;
    --negro3:     #111;
  }

  h1, h2, h3, h4 { font-family: 'Oswald', sans-serif; line-height: 1.05; }

  .container  { max-width: 820px; margin: 0 auto; padding: 0 20px; }
  .center     { text-align: center; }
  .sec        { padding: 64px 0; border-bottom: 1px solid var(--borde); }
  .sec-dark   { background: var(--negro2); }
  .sec-blue   { background: #0a0f1a; }

  /* ── TOP BAR ─────────────────────────────────────────── */
  .topbar {
    background: var(--dorado);
    text-align: center; padding: 11px 20px;
    font-family: 'Oswald', sans-serif; font-size: 14px;
    font-weight: 700; letter-spacing: 0.06em;
    text-transform: uppercase; color: #000;
  }
  .topbar span { color: var(--rojo); }

  /* ── NAV ─────────────────────────────────────────────── */
  nav {
    background: #000;
    border-bottom: 2px solid var(--dorado);
    padding: 16px 0; text-align: center;
  }
  .logo {
    font-family: 'Oswald', sans-serif; font-size: 22px;
    font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--blanco);
    text-decoration: none;
  }
  .logo span { color: var(--dorado); }

  /* ── HERO ────────────────────────────────────────────── */
  .hero {
    background: #000;
    padding: 56px 0 48px;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 60% 40%, rgba(212,168,67,0.07) 0%, transparent 70%);
    pointer-events: none;
  }
  .event-badge {
    display: inline-flex; align-items: center; gap: 10px;
    border: 1px solid var(--dorado); background: rgba(212,168,67,0.08);
    padding: 10px 20px; border-radius: 2px;
    font-size: 14px; margin-bottom: 28px; color: var(--dorado);
    font-weight: 600; letter-spacing: 0.04em;
  }
  .event-badge .dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--dorado); animation: pulse 1.5s infinite;
  }
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.4)} }

  .hero h1 {
    font-size: clamp(34px, 6vw, 60px);
    font-weight: 700; text-transform: uppercase;
    margin-bottom: 16px; line-height: 1.08;
  }
  .hero h1 .gold  { color: var(--dorado); }
  .hero h1 .white { color: #fff; }

  .hero-date {
    display: inline-block;
    font-family: 'Oswald', sans-serif; font-size: 20px;
    font-weight: 600; color: #fff;
    background: var(--azul); padding: 10px 28px;
    letter-spacing: 0.06em; margin-bottom: 24px;
    border-left: 4px solid var(--dorado);
  }

  .hero-sub {
    font-size: clamp(16px, 2vw, 19px);
    color: rgba(240,237,232,0.72); line-height: 1.75;
    max-width: 680px; margin: 0 auto 36px;
  }
  .hero-sub strong { color: var(--blanco); }

  /* hero visual */
  .hero-visual {
    max-width: 680px; margin: 0 auto 36px;
    border: 2px solid var(--dorado);
    border-radius: 4px; overflow: hidden; position: relative;
    box-shadow: 0 0 60px rgba(212,168,67,0.15);
  }
  .hero-visual img {
    width: 100%; display: block;
    aspect-ratio: 16/9; object-fit: cover;
    filter: brightness(0.6);
  }
  .hero-visual-overlay {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 12px;
  }
  .hero-visual-tag {
    background: var(--dorado); color: #000;
    font-family: 'Oswald', sans-serif; font-size: 13px;
    font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; padding: 6px 20px;
  }
  .hero-visual-title {
    font-family: 'Oswald', sans-serif; font-size: clamp(22px, 4vw, 38px);
    font-weight: 700; color: #fff; text-align: center;
    text-transform: uppercase; text-shadow: 0 2px 20px rgba(0,0,0,0.8);
    padding: 0 20px;
  }

  /* ── PROOF ROW ───────────────────────────────────────── */
  .proof-row {
    display: flex; flex-wrap: wrap; justify-content: center;
    gap: 32px; padding: 28px 0;
    border-top: 1px solid var(--borde); border-bottom: 1px solid var(--borde);
    margin-top: 32px;
  }
  .proof-item { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--gris); }
  .proof-num { font-family: 'Oswald', sans-serif; font-size: 28px; font-weight: 700; color: var(--dorado); line-height: 1; }

  /* ── CTA BUTTON ──────────────────────────────────────── */
  .btn-gold {
    display: inline-block; background: var(--dorado);
    color: #000; font-family: 'Oswald', sans-serif;
    font-size: 19px; font-weight: 700; letter-spacing: 0.04em;
    text-transform: uppercase; padding: 18px 40px;
    border: none; border-radius: 2px; cursor: pointer;
    text-decoration: none; text-align: center;
    transition: all 0.2s; width: 100%; display: block;
  }
  .btn-gold:hover {
    background: var(--dorado2); transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(212,168,67,0.45);
  }
  .btn-outline {
    display: inline-block; background: transparent;
    color: var(--dorado); border: 2px solid var(--dorado);
    font-family: 'Oswald', sans-serif; font-size: 17px;
    font-weight: 700; letter-spacing: 0.04em;
    text-transform: uppercase; padding: 14px 36px;
    border-radius: 2px; cursor: pointer;
    text-decoration: none; text-align: center;
    transition: all 0.2s;
  }
  .btn-outline:hover { background: var(--dorado); color: #000; }

  /* ── SECTION TITLES ──────────────────────────────────── */
  .sec-tag {
    font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--dorado); font-weight: 700; display: block; margin-bottom: 14px;
  }
  .sec-title {
    font-family: 'Oswald', sans-serif;
    font-size: clamp(26px, 4vw, 44px);
    font-weight: 700; text-transform: uppercase;
    line-height: 1.08; margin-bottom: 12px;
  }
  .sec-title .gold  { color: var(--dorado); }
  .sec-title .blue  { color: #5b9bd5; }
  .gold-line {
    height: 3px; width: 60px;
    background: var(--dorado); margin: 16px auto 32px;
  }
  .gold-line.left { margin-left: 0; }

  /* ── WHAT YOU'LL LEARN ───────────────────────────────── */
  .learn-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .learn-card {
    background: var(--negro3); border: 1px solid var(--borde);
    border-left: 3px solid var(--dorado);
    padding: 20px 22px; border-radius: 2px;
    transition: border-color 0.2s, background 0.2s;
  }
  .learn-card:hover { border-left-color: var(--dorado2); background: #151515; }
  .learn-num {
    font-family: 'Oswald', sans-serif; font-size: 11px;
    font-weight: 700; color: var(--dorado); letter-spacing: 0.15em;
    margin-bottom: 8px; display: block;
  }
  .learn-card h4 { font-size: 15px; font-weight: 700; margin-bottom: 6px; font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.02em; }
  .learn-card p  { font-size: 13px; color: rgba(240,237,232,0.6); line-height: 1.6; }

  /* ── FOR WHO ─────────────────────────────────────────── */
  .for-who-title {
    font-family: 'Oswald', sans-serif;
    font-size: clamp(20px, 3vw, 32px); font-weight: 700;
    text-align: center; margin-bottom: 32px;
    text-transform: uppercase; color: var(--dorado);
  }
  .check-list { list-style: none; display: flex; flex-direction: column; gap: 12px; max-width: 580px; margin: 0 auto; }
  .check-item { display: flex; align-items: flex-start; gap: 14px; font-size: 16px; line-height: 1.5; }
  .check-icon {
    width: 26px; height: 26px; border-radius: 50%;
    background: var(--dorado); color: #000;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 900; flex-shrink: 0; margin-top: 1px;
  }

  /* ── SPEAKER ─────────────────────────────────────────── */
  .speaker-layout { display: grid; grid-template-columns: 240px 1fr; gap: 52px; align-items: start; }
  .speaker-img {
    width: 100%; aspect-ratio: 3/4; object-fit: cover; object-position: top;
    border: 3px solid var(--dorado); border-radius: 2px; display: block;
    filter: brightness(0.92);
  }
  .speaker-img-wrap { position: relative; }
  .speaker-stripe {
    background: var(--dorado); color: #000;
    font-family: 'Oswald', sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 10px 14px; text-align: center;
  }
  .speaker-name {
    font-family: 'Oswald', sans-serif;
    font-size: clamp(28px, 4vw, 46px); font-weight: 700;
    text-transform: uppercase; line-height: 1.05; margin-bottom: 6px;
  }
  .speaker-name .gold { color: var(--dorado); }
  .speaker-title-badge {
    display: inline-block; background: var(--azul);
    border-left: 3px solid var(--dorado);
    font-family: 'Oswald', sans-serif; font-size: 13px;
    font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
    padding: 6px 16px; margin-bottom: 20px; color: #fff;
  }
  .speaker-stats { display: flex; gap: 28px; flex-wrap: wrap; margin: 24px 0 28px; }
  .sp-stat strong {
    font-family: 'Oswald', sans-serif; font-size: 36px;
    font-weight: 700; color: var(--dorado); display: block; line-height: 1;
  }
  .sp-stat span { font-size: 11px; color: var(--gris); text-transform: uppercase; letter-spacing: 0.08em; }

  /* ── TESTIMONIALS ────────────────────────────────────── */
  .tgrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
  .tcard {
    background: var(--negro3); border: 1px solid var(--borde);
    border-radius: 2px; padding: 22px; transition: border-color 0.2s;
  }
  .tcard:hover { border-color: var(--dorado); }
  .tcard-stars { color: var(--dorado); font-size: 15px; letter-spacing: 2px; margin-bottom: 12px; }
  .tcard-text { font-size: 14px; color: rgba(240,237,232,0.78); line-height: 1.7; margin-bottom: 18px; }
  .tcard-text .gold { color: var(--dorado); font-weight: 700; }
  .tcard-author { display: flex; align-items: center; gap: 10px; }
  .tcard-av { width: 44px; height: 44px; border-radius: 50%; border: 2px solid var(--dorado); overflow: hidden; flex-shrink: 0; }
  .tcard-av img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .tcard-name { font-weight: 700; font-size: 13px; }
  .tcard-role { font-size: 11px; color: var(--gris); }

  /* ── REGISTRATION FORM ───────────────────────────────── */
  .form-box {
    background: var(--negro3);
    border: 2px solid var(--dorado);
    border-radius: 4px; padding: 40px;
    max-width: 560px; margin: 0 auto;
    box-shadow: 0 0 60px rgba(212,168,67,0.1);
  }
  .form-box h3 {
    font-family: 'Oswald', sans-serif; font-size: 26px;
    font-weight: 700; text-transform: uppercase;
    margin-bottom: 6px; text-align: center;
  }
  .form-box .form-sub {
    text-align: center; font-size: 14px;
    color: rgba(240,237,232,0.55); margin-bottom: 28px;
  }
  .form-group { margin-bottom: 16px; }
  .form-group label {
    display: block; font-size: 12px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--dorado); margin-bottom: 6px;
  }
  .form-group input {
    width: 100%; background: #0a0a0a;
    border: 1px solid #2a2a2a; border-radius: 2px;
    padding: 13px 16px; font-size: 15px;
    color: var(--blanco); font-family: 'Open Sans', sans-serif;
    transition: border-color 0.2s; outline: none;
  }
  .form-group input:focus { border-color: var(--dorado); }
  .form-group input::placeholder { color: #444; }
  .form-privacy {
    font-size: 12px; color: var(--gris);
    text-align: center; margin-top: 12px;
  }
  .form-guarantee {
    display: flex; align-items: center; justify-content: center;
    gap: 8px; margin-top: 16px;
    font-size: 13px; color: rgba(240,237,232,0.5);
  }

  /* ── URGENCY BOX ─────────────────────────────────────── */
  .urgency-box {
    background: linear-gradient(135deg, #1a0a00, #0d0500);
    border: 2px solid var(--dorado); border-radius: 4px;
    padding: 32px 36px; text-align: center;
    max-width: 600px; margin: 0 auto;
    box-shadow: 0 0 40px rgba(212,168,67,0.08);
  }
  .urgency-box h3 {
    font-family: 'Oswald', sans-serif; font-size: 28px;
    font-weight: 700; text-transform: uppercase;
    color: var(--dorado); margin-bottom: 12px;
  }
  .urgency-check { list-style: none; display: flex; flex-direction: column; gap: 8px; max-width: 360px; margin: 16px auto; text-align: left; }
  .urgency-check li { display: flex; gap: 10px; font-size: 15px; color: rgba(240,237,232,0.85); }
  .urgency-check li::before { content: "✓"; color: var(--dorado); font-weight: 900; flex-shrink: 0; }

  /* ── COUNTDOWN ───────────────────────────────────────── */
  .countdown { display: inline-flex; gap: 10px; align-items: center; margin: 20px 0; }
  .cd-cell { background: #111; border: 1px solid #2a2a2a; border-radius: 2px; padding: 12px 16px; text-align: center; min-width: 64px; }
  .cd-num { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: var(--dorado); line-height: 1; }
  .cd-lbl { font-size: 10px; color: var(--gris); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px; }
  .cd-sep { font-family: 'Oswald', sans-serif; font-size: 28px; color: #333; }

  /* ── GUARANTEE BADGE ─────────────────────────────────── */
  .guarantee-badge {
    width: 140px; height: 140px; border-radius: 50%;
    border: 4px solid var(--dorado);
    background: radial-gradient(circle, #1a1200 0%, #000 100%);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    margin: 0 auto 24px;
    box-shadow: 0 0 0 8px rgba(212,168,67,0.08);
  }
  .guarantee-badge .g-icon { font-size: 36px; line-height: 1; }
  .guarantee-badge .g-label { font-size: 10px; color: var(--dorado); text-transform: uppercase; letter-spacing: 0.1em; text-align: center; margin-top: 4px; font-weight: 700; }

  /* ── DIVIDER ─────────────────────────────────────────── */
  .divider-gold {
    border: none; height: 2px;
    background: linear-gradient(90deg, transparent, var(--dorado), transparent);
    margin: 40px auto; max-width: 400px;
  }

  /* ── BAND ────────────────────────────────────────────── */
  .band {
    background: var(--dorado); padding: 16px 0;
    text-align: center; font-family: 'Oswald', sans-serif;
    font-size: 16px; font-weight: 700; color: #000;
    letter-spacing: 0.06em; text-transform: uppercase;
  }

  /* ── FAQ ─────────────────────────────────────────────── */
  .faq-list { display: flex; flex-direction: column; gap: 2px; }
  .faq-item { border: 1px solid var(--borde); border-radius: 2px; overflow: hidden; }
  .faq-q {
    width: 100%; background: var(--negro3); padding: 16px 20px;
    text-align: left; font-size: 15px; font-weight: 600;
    color: var(--blanco); border: none; cursor: pointer;
    display: flex; justify-content: space-between; align-items: center;
    transition: background 0.2s;
  }
  .faq-q:hover { background: #151515; }
  .faq-q .icon { color: var(--dorado); font-size: 22px; transition: transform 0.2s; flex-shrink: 0; margin-left: 12px; }
  .faq-q.open .icon { transform: rotate(45deg); }
  .faq-a { max-height: 0; overflow: hidden; background: #080808; transition: max-height 0.3s ease, padding 0.2s; font-size: 14px; color: rgba(240,237,232,0.65); line-height: 1.7; }
  .faq-a.open { max-height: 300px; padding: 16px 20px; }

  /* ── FOOTER ──────────────────────────────────────────── */
  footer { background: #040404; border-top: 1px solid var(--borde); padding: 36px 0; text-align: center; }
  .footer-logo { font-family: 'Oswald', sans-serif; font-size: 20px; font-weight: 700; color: var(--blanco); margin-bottom: 10px; }
  .footer-logo span { color: var(--dorado); }
  .footer-links { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; margin-bottom: 16px; }
  .footer-links a { font-size: 12px; color: #444; text-decoration: none; transition: color 0.2s; }
  .footer-links a:hover { color: var(--dorado); }
  .footer-copy { font-size: 12px; color: #333; }

  /* ── STICKY CTA ──────────────────────────────────────── */
  .sticky-bar {
    display: none; position: fixed; bottom: 0; left: 0; right: 0; z-index: 300;
    background: var(--dorado); color: #000;
    font-family: 'Oswald', sans-serif; font-size: 17px; font-weight: 700;
    text-align: center; padding: 15px; text-transform: uppercase;
    letter-spacing: 0.04em; text-decoration: none;
    box-shadow: 0 -4px 20px rgba(212,168,67,0.4);
  }
  @media(max-width:720px) { .sticky-bar { display: block; } }

  /* ── RESPONSIVE ──────────────────────────────────────── */
  @media(max-width:720px) {
    .learn-grid, .tgrid { grid-template-columns: 1fr; }
    .speaker-layout { grid-template-columns: 1fr; }
    .form-box { padding: 28px 20px; }
    body { padding-bottom: 60px; }
  }
  @media(max-width:480px) {
    .proof-row { gap: 20px; }
  }

  /* ── FADE IN ─────────────────────────────────────────── */
  .fi { opacity:0; transform:translateY(18px); transition:opacity .55s ease, transform .55s ease; }
  .fi.vis { opacity:1; transform:none; }
`;

// ── DATA ──────────────────────────────────────────────────
const learnItems = [
  { n: "01", t: "Mentalidad de líder empresarial", d: "Los principios psicológicos que separan a los líderes de los seguidores. No es talento, es mentalidad." },
  { n: "02", t: "Decisiones de alto rendimiento", d: "Cómo toman decisiones los empresarios de 7 cifras bajo presión — y cómo aplicarlo en tu negocio hoy." },
  { n: "03", t: "Estrategias para escalar ingresos", d: "Los marcos mentales que desbloquean el siguiente nivel de ingresos sin trabajar el doble de horas." },
  { n: "04", t: "Errores psicológicos que frenan", d: "Los 5 bloqueos mentales más comunes en emprendedores y cómo eliminarlos permanentemente." },
];

const forWhoItems = [
  "Eres emprendedor o dueño de negocio que siente que trabaja mucho pero no avanza lo suficiente.",
  "Quieres desarrollar la mentalidad de los líderes empresariales de alto nivel.",
  "Estás listo para tomar decisiones con mayor claridad, velocidad y confianza.",
  "Buscas escalar tus ingresos sin sacrificar tu bienestar ni tu familia.",
  "Aunque apenas estés iniciando o lleves años en el camino empresarial.",
];

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    stars: "★★★★★",
    text: <><span className="gold">Fernando cambió completamente</span> mi forma de tomar decisiones. En 3 meses dupliqué mis ingresos aplicando lo que aprendí en su clase.</>,
    name: "Ricardo Herrera", role: "CEO · Monterrey, México"
  },
  {
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    stars: "★★★★★",
    text: <>Llevaba 2 años estancada. Una sola sesión con Fernando me dio la claridad que necesitaba. <span className="gold">Mi negocio creció 40% en 60 días.</span></>,
    name: "Andrea Castillo", role: "Emprendedora · Bogotá, Colombia"
  },
  {
    img: "https://randomuser.me/api/portraits/men/58.jpg",
    stars: "★★★★★",
    text: <>Lo que Fernando enseña no se aprende en ninguna universidad. <span className="gold">Es la diferencia entre sobrevivir y liderar</span> en los negocios.</>,
    name: "Luis Mendoza", role: "Director Comercial · Buenos Aires"
  },
];

const faqs = [
  { q: "¿Es realmente gratuito?", a: "Sí, 100% gratuito. Queremos que el mayor número de empresarios posible tenga acceso a esta información transformadora." },
  { q: "¿Necesito experiencia previa en negocios?", a: "No. Esta clase está diseñada tanto para emprendedores que están iniciando como para empresarios con años de experiencia que quieren llevar su negocio al siguiente nivel." },
  { q: "¿Qué pasa si no puedo asistir en vivo?", a: "Este evento es 100% en vivo y no se repetirá. Por eso los cupos son limitados — queremos garantizar la mejor experiencia para quienes sí se comprometen a asistir." },
  { q: "¿Cuánto dura la clase?", a: "Aproximadamente 90 minutos de contenido puro, sin relleno. Más tiempo para preguntas y respuestas en vivo." },
  { q: "¿Necesito tener una empresa ya formada?", a: "No. Si tienes una idea de negocio o estás en proceso de lanzar, esta clase es perfecta para ti. El éxito empieza en la mentalidad, antes del negocio." },
];

// ── HOOKS ─────────────────────────────────────────────────
function useCountdown() {
  const [t, setT] = useState({ d: 14, h: 0, m: 0, s: 0 });
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
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("vis"); io.unobserve(e.target); } }),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".fi").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
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


const pad = n => String(n).padStart(2, "0");

// ── APP ───────────────────────────────────────────────────
export default function App() {
  const time = useCountdown();
  useFadeIn();

  return (
    <>
      <style>{CSS}</style>

      {/* TOP BAR */}
      <div className="topbar">
        ⚡ Evento gratuito · <span>6 de marzo</span> · Cupos limitados — regístrate ahora
      </div>

      {/* NAV */}
      <nav>
        <a href="/" className="logo">
          Empoderamiento <span>Empresarial</span>
        </a>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="container center">
          <div className="event-badge fi">
            <span className="dot" />
            Clase gratuita en vivo · Zoom · 6 de marzo
          </div>

          <h1 className="fi">
            <span className="gold">Empoderamiento</span><br />
            <span className="white">Empresarial</span>
          </h1>

          <div className="hero-date fi">📅 6 de marzo · Clase en vivo por Zoom</div>

          <p className="hero-sub fi">
            <strong>La mentalidad que separa a los líderes de los seguidores.</strong><br />
            Clase gratuita donde descubrirás los principios psicológicos que usan los empresarios de alto nivel para tomar decisiones, escalar ingresos y liderar con propósito.
          </p>

          <div className="hero-visual fi">
            <img
              src="/fernando.png"
              alt="Fernando Martínez — Clase Empoderamiento Empresarial"
              style={{aspectRatio:"16/9", objectPosition:"top center"}}
            />
            <div className="hero-visual-overlay">
              <div className="hero-visual-tag">Clase gratuita en vivo · 6 de marzo</div>
              <div className="hero-visual-title">"La mentalidad que separa<br/>a los líderes de los seguidores"</div>
            </div>
          </div>

          <div style={{marginTop:32}} className="fi">
            <p style={{fontSize:12,color:"#555",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12}}>El evento comienza en:</p>
            <div className="countdown">
              <div className="cd-cell"><div className="cd-num">{pad(time.d)}</div><div className="cd-lbl">Días</div></div>
              <span className="cd-sep">:</span>
              <div className="cd-cell"><div className="cd-num">{pad(time.h)}</div><div className="cd-lbl">Horas</div></div>
              <span className="cd-sep">:</span>
              <div className="cd-cell"><div className="cd-num">{pad(time.m)}</div><div className="cd-lbl">Min</div></div>
              <span className="cd-sep">:</span>
              <div className="cd-cell"><div className="cd-num">{pad(time.s)}</div><div className="cd-lbl">Seg</div></div>
            </div>
          </div>

          <div style={{maxWidth:500,margin:"28px auto 0"}} className="fi">
            <a href="https://chat.whatsapp.com/C9ekPuyKhStDPOiqbpcFBS" target="_blank" rel="noopener noreferrer" className="btn-gold">Reserva tu lugar gratis ahora →</a>
            <p style={{marginTop:12,fontSize:13,color:"#555"}}>🔒 Gratis · Sin tarjeta · Cupos limitados</p>
          </div>

          <div className="proof-row fi">
            <div className="proof-item"><div className="proof-num">500+</div><div>empresarios<br/>formados</div></div>
            <div className="proof-item"><div className="proof-num">★4.9</div><div>calificación<br/>promedio</div></div>
            <div className="proof-item"><div className="proof-num">15+</div><div>años de<br/>experiencia</div></div>
            <div className="proof-item"><div className="proof-num">18</div><div>países<br/>alcanzados</div></div>
          </div>
        </div>
      </section>

      {/* BAND */}
      <div className="band">¿Qué aprenderás en esta clase? ↓</div>

      {/* ── WHAT YOU'LL LEARN ─────────────────────────────── */}
      <section className="sec sec-dark">
        <div className="container">
          <div className="center fi">
            <span className="sec-tag">Contenido de la clase</span>
            <div className="sec-title">Qué aprenderás en estas<br/><span className="gold">90 minutos de alto impacto</span></div>
            <div className="gold-line" />
          </div>
          <div className="learn-grid fi">
            {learnItems.map((item, i) => (
              <div className="learn-card" key={i}>
                <span className="learn-num">MÓDULO {item.n}</span>
                <h4>{item.t}</h4>
                <p>{item.d}</p>
              </div>
            ))}
          </div>
          <div className="center fi" style={{marginTop:36}}>
            <a href="https://chat.whatsapp.com/C9ekPuyKhStDPOiqbpcFBS" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{display:"inline-block",width:"auto",padding:"14px 36px"}}>
              Quiero aprender esto → 
            </a>
          </div>
        </div>
      </section>

      {/* BAND */}
      <div className="band">¿Esta clase es para ti? →</div>

      {/* ── FOR WHO ──────────────────────────────────────── */}
      <section className="sec sec-blue">
        <div className="container">
          <p className="for-who-title center fi">¡ESTO ES PARA TI SI…!</p>
          <ul className="check-list fi">
            {forWhoItems.map((item, i) => (
              <li className="check-item" key={i}>
                <div className="check-icon">✓</div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="center fi" style={{marginTop:36}}>
            <a href="https://chat.whatsapp.com/C9ekPuyKhStDPOiqbpcFBS" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{display:"inline-block",width:"auto",padding:"16px 40px"}}>
              Sí, quiero mi lugar gratuito →
            </a>
          </div>
        </div>
      </section>

      {/* ── SPEAKER ──────────────────────────────────────── */}
      <section className="sec sec-dark">
        <div className="container">
          <div className="speaker-layout fi">
            <div className="speaker-img-wrap">
              <img
                className="speaker-img"
                src="/fernando.png"
                alt="Fernando Martínez — Psicólogo y Coach Empresarial"
              />
              <div className="speaker-stripe">Coach & Mentor Empresarial</div>
            </div>
            <div>
              <span className="sec-tag">Tu mentor</span>
              <div className="speaker-name">Fernando<br /><span className="gold">Martínez.</span></div>
              <div className="speaker-title-badge">Psicólogo · Coach · Líder Empresarial</div>
              <p style={{color:"rgba(240,237,232,0.68)",lineHeight:1.8,marginBottom:16,fontSize:15}}>
                Fernando Martínez es psicólogo, coach certificado y líder empresarial con <strong style={{color:"#fff"}}>más de 15 años de experiencia</strong> en el desarrollo de líderes y equipos de alto desempeño.
              </p>
              <p style={{color:"rgba(240,237,232,0.68)",lineHeight:1.8,marginBottom:16,fontSize:15}}>
                Ha acompañado a <strong style={{color:"var(--dorado)"}}>más de 500 empresarios en 18 países</strong> a transformar su mentalidad y multiplicar sus resultados. Su enfoque combina la psicología del alto rendimiento con estrategias empresariales probadas.
              </p>
              <p style={{color:"rgba(240,237,232,0.68)",lineHeight:1.8,marginBottom:24,fontSize:15}}>
                Su misión: <strong style={{color:"var(--dorado)"}}>democratizar el acceso a la mentalidad de élite</strong> para que cualquier emprendedor pueda alcanzar su máximo potencial.
              </p>
              <div className="speaker-stats">
                <div className="sp-stat"><strong>500+</strong><span>empresarios</span></div>
                <div className="sp-stat"><strong>15 años</strong><span>experiencia</span></div>
                <div className="sp-stat"><strong>18</strong><span>países</span></div>
              </div>
              <a href="https://chat.whatsapp.com/C9ekPuyKhStDPOiqbpcFBS" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{display:"inline-block",width:"auto",padding:"15px 32px"}}>
                Reservar lugar con Fernando →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="center fi" style={{marginBottom:36}}>
            <span className="sec-tag">Resultados reales</span>
            <div className="sec-title">Lo que dicen quienes ya<br/><span className="gold">transformaron su mentalidad</span></div>
            <div className="gold-line" />
          </div>
          <div className="tgrid fi">
            {testimonials.map((t, i) => (
              <div className="tcard" key={i}>
                <div className="tcard-stars">{t.stars}</div>
                <p className="tcard-text">{t.text}</p>
                <div className="tcard-author">
                  <div className="tcard-av"><img src={t.img} alt={t.name} /></div>
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

      {/* ── URGENCY ──────────────────────────────────────── */}
      <section className="sec sec-dark center">
        <div className="container fi">
          <div className="urgency-box">
            <h3>⚠️ Cupos muy limitados</h3>
            <p style={{color:"rgba(240,237,232,0.65)",fontSize:15,marginBottom:8}}>Este evento es <strong style={{color:"#fff"}}>100% en vivo</strong> y no se repetirá.</p>
            <ul className="urgency-check">
              <li>Clase gratuita — sin costo alguno</li>
              <li>Solo por Zoom — en vivo el 6 de marzo</li>
              <li>No habrá grabación disponible</li>
              <li>Cupos limitados para garantizar calidad</li>
            </ul>
            <a href="https://chat.whatsapp.com/C9ekPuyKhStDPOiqbpcFBS" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{marginTop:20}}>
              Asegurar mi lugar ahora →
            </a>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CTA ──────────────────────────────────── */}
      <section className="sec" id="registro">
        <div className="container center">
          <div className="fi" style={{marginBottom:36}}>
            <span className="sec-tag">Únete ahora</span>
            <div className="sec-title">Entra al grupo de WhatsApp<br/><span className="gold">y recibe el link de Zoom</span></div>
            <div className="gold-line" />
          </div>
          <div className="fi" style={{maxWidth:560,margin:"0 auto"}}>
            <div style={{background:"#0d0d0d",border:"2px solid #d4a843",borderRadius:4,padding:"40px 36px",boxShadow:"0 0 60px rgba(212,168,67,0.12)"}}>
              <div style={{fontSize:64,marginBottom:16}}>💬</div>
              <h3 style={{fontFamily:"'Oswald',sans-serif",fontSize:26,fontWeight:700,textTransform:"uppercase",marginBottom:8,color:"#d4a843"}}>
                Únete al grupo gratuito
              </h3>
              <p style={{fontSize:15,color:"rgba(240,237,232,0.65)",marginBottom:8,lineHeight:1.7}}>
                Al entrar al grupo recibirás:
              </p>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:8,maxWidth:320,margin:"0 auto 28px",textAlign:"left"}}>
                {["✅ El link de Zoom para el 6 de marzo","✅ Material exclusivo previo al evento","✅ Acceso directo a Fernando Martínez","✅ Comunidad de empresarios de alto nivel"].map((item,i)=>(
                  <li key={i} style={{fontSize:14,color:"rgba(240,237,232,0.85)"}}>{item}</li>
                ))}
              </ul>
              <a
                href="https://chat.whatsapp.com/C9ekPuyKhStDPOiqbpcFBS"
                target="_blank" rel="noopener noreferrer"
                style={{display:"block",background:"#25D366",color:"#000",fontFamily:"'Oswald',sans-serif",fontSize:20,fontWeight:700,letterSpacing:"0.04em",textTransform:"uppercase",padding:"18px 32px",borderRadius:4,textDecoration:"none",transition:"all 0.2s",marginBottom:12}}
                onMouseEnter={e=>{e.currentTarget.style.background="#1db954";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 32px rgba(37,211,102,0.45)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="#25D366";e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none"}}
              >
                📲 Unirme al grupo de WhatsApp →
              </a>
              <p style={{fontSize:12,color:"#555"}}>🔒 Gratis · Sin spam · Solo contenido de valor</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ────────────────────────────────────── */}
      <section className="sec sec-dark center">
        <div className="container fi">
          <div className="guarantee-badge">
            <div className="g-icon">🆓</div>
            <div className="g-label">100%<br/>gratuito</div>
          </div>
          <div className="sec-title center"><span className="gold">Sin costo.</span> Sin excusas.</div>
          <p style={{color:"rgba(240,237,232,0.6)",maxWidth:480,margin:"16px auto 0",fontSize:15,lineHeight:1.8}}>
            Esta clase no tiene ningún costo. Fernando cree que el acceso a la mentalidad de élite no debe depender de tu presupuesto. <strong style={{color:"#fff"}}>Solo necesitas tu compromiso de asistir.</strong>
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="center fi" style={{marginBottom:32}}>
            <span className="sec-tag">Preguntas frecuentes</span>
            <div className="sec-title">Resolvemos tus <span className="gold">dudas</span></div>
          </div>
          <div className="faq-list fi">
            {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="sec sec-dark center">
        <div className="container fi">
          <div className="sec-title"><span className="gold">¿Listo para liderar</span><br/>en lugar de seguir?</div>
          <div className="gold-line" />
          <p style={{fontSize:17,color:"rgba(240,237,232,0.6)",maxWidth:480,margin:"0 auto 32px",lineHeight:1.8}}>
            El 6 de marzo tienes una cita con tu mejor versión.<br/>
            <strong style={{color:"#fff"}}>Los cupos se están agotando — reserva ahora.</strong>
          </p>
          <a href="https://chat.whatsapp.com/C9ekPuyKhStDPOiqbpcFBS" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{display:"inline-block",width:"auto",padding:"18px 48px",fontSize:20}}>
            ✅ Reservar mi lugar gratis →
          </a>
          <p style={{marginTop:16,fontSize:13,color:"#333"}}>🔒 Gratis · Sin tarjeta de crédito · Solo Zoom</p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer>
        <div className="footer-logo">Empoderamiento <span>Empresarial</span></div>
        <div className="footer-links">
          <a href="/privacidad">Política de privacidad</a>
          <a href="/terminos">Términos de uso</a>
          <a href="/contacto">Contacto</a>
          <a href="https://chat.whatsapp.com/C9ekPuyKhStDPOiqbpcFBS" target="_blank" rel="noopener noreferrer">Registrarme</a>
        </div>
        <p className="footer-copy">© 2025 Fernando Martínez · Todos los derechos reservados.</p>
      </footer>

      {/* STICKY MOBILE */}
      <a href="https://chat.whatsapp.com/C9ekPuyKhStDPOiqbpcFBS" target="_blank" rel="noopener noreferrer" className="sticky-bar">✅ Reservar lugar gratis — 6 de marzo →</a>
    </>
  );
}