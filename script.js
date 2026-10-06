/* ============================================================
   CONFIGURAÇÃO — link do jogo e e-mail de contato
   Para trocar o link do jogo, altere gameUrl abaixo
   ============================================================ */
const CONFIG = {
    gameUrl: "https://playvictor15.github.io/game-geometrico/",
    email: "playv290@gmail.com"
};

const $ = (s) => document.querySelector(s);
const navbar = $('#navbar'), menuBtn = $('#mobile-menu'), navLinks = $('#nav-links'), toast = $('#toast');

lucide.createIcons();
$('#footer-year').textContent = new Date().getFullYear();

/* Link do jogo (sem link configurado, o botão fica desativado) */
const gameLink = $('#game-link');
if (CONFIG.gameUrl) {
    gameLink.href = CONFIG.gameUrl;
} else {
    gameLink.removeAttribute('href');
    gameLink.removeAttribute('target');
    gameLink.setAttribute('aria-disabled', 'true');
    gameLink.querySelector('span').textContent = 'Link em breve';
}

/* Menu mobile */
function setMenu(open) {
    navLinks.classList.toggle('active', open);
    menuBtn.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}
menuBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('active')));
navLinks.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('click', (e) => { if (!navbar.contains(e.target)) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

/* Navbar ao rolar */
const onScroll = () => navbar.classList.toggle('nav-scrolled', window.scrollY > 50);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* Destaca no menu a seção visível */
const links = [...navLinks.querySelectorAll('a')];
const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.toggleAttribute('aria-current', a.getAttribute('href') === '#' + en.target.id));
    });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

/* Aviso rápido */
let t;
function notify(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(t);
    t = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* Copiar e-mail */
$('#copy-email').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(CONFIG.email); notify('E-mail copiado: ' + CONFIG.email); }
    catch { notify('Não deu para copiar. E-mail: ' + CONFIG.email); }
});

/* Formulário: abre o app de e-mail já preenchido */
$('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = e.target.nome.value.trim(), msg = e.target.mensagem.value.trim();
    const subject = encodeURIComponent('Contato pelo portfólio — ' + nome);
    const body = encodeURIComponent(msg + '\n\n' + nome);
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
    notify('Abrindo seu app de e-mail…');
});
