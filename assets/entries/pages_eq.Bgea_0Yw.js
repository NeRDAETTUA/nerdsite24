import{j as e,l as c,m as d,P as r,n as a,a as o,y as s,b as t,O as v,x as y,c as N,M as C,R as k,f as w,$ as L,w as E,o as _,A as S,d as i,q as g,p as z,e as O,g as h,i as u,h as M}from"../chunks/chunk-XeWNMSSS.js";/* empty css                      */const f=void 0,A=[{id:"3Biv6ltgkYKtgBQxdJrKw"},{id:"xBS5ozESn2cK63icHnvtC",maxWidth:991},{id:"0_ve5QOFHNb0fnZ1GQipb",maxWidth:767},{id:"OIYbx6NwwgecvCYuNuEar",maxWidth:479}],R="NeRD_P_JQ8TMM8s7huiSC8pLRbDn.png",I=["SpaceGrotesk-VariableFont_wght_92Z2i9spNtfwrzeGeXHcE.ttf","InterVariable_qDqxtwB6S7W69tcm-FSxu.woff2"],D=["deti_compressed_s4URwBUyuGW8t-NA5TwTK.png"],V=m=>e.jsxs("body",{className:"w-element",children:[e.jsx(c,{children:e.jsx(d,{children:e.jsx(r,{code:`<style>
  /* Remove margin from all paragraphs so we don't need to use a Token on every one. */
  p {
    margin: 0;
  }

  /* Make links scroll to their sections smoothly. */
  * {
    scroll-behavior: smooth;
  }

  /* Show parent dropdown link hover styles when dropdown is active. */
  button[data-state="open"].nav-dropdown-parent {
  --navigation-menu-trigger-icon-transform: 180deg;
  color: var(--foreground-accent);
}
</style>`,className:"w-html-embed"})})}),e.jsx(r,{code:`<!-- Splitting.js (divide texto em palavras) -->
<script src="https://unpkg.com/splitting/dist/splitting.min.js"><\/script>

<style>
  /* Ajustes visuais e performance */
  #animated-text {
    overflow: visible; /* permite que as transformações não cortem */
    line-height: 1.2;
  }

  /* Cada palavra fica inline-block para podermos medir e aplicar filtros */
  #animated-text .word {
    display: inline-block;
    white-space: pre; /* preserva espaçamento */
    will-change: filter, transform;
    transition: filter 140ms linear, transform 140ms linear;
    pointer-events: none; /* evita que cada span capture o mouse isoladamente */
  }
</style>

<!-- Splitting.js (divide texto em letras) -->
<script src="https://unpkg.com/splitting/dist/splitting.min.js"><\/script>

<style>
  /* Ajustes visuais e performance */
  #animated-text {
    overflow: visible; /* permite que as transformações não cortem */
    line-height: 1.2;
  }

  /* Cada letra fica inline-block para podermos medir e aplicar filtros */
  #animated-text .char {
    display: inline-block;
    white-space: pre; /* preserva espaçamento */
    will-change: filter, transform;
    transition: filter 140ms linear, transform 140ms linear;
    pointer-events: none; /* evita que cada span capture o mouse isoladamente */
  }
</style>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById('animated-text');
  if (!target) {
    console.warn('Elemento #animated-text não encontrado.');
    return;
  }

  // 1) Divide o texto em letras (chars)
  Splitting({ target: target, by: 'chars' });

  // 2) Seleciona as letras (Splitting cria elementos com a classe .char)
  const chars = Array.from(target.querySelectorAll('.char'));
  if (!chars.length) {
    console.warn('Nenhuma letra encontrada pelo Splitting.');
    return;
  }

  // Parâmetros que podes ajustar
  const maxBlur = 6;     // blur máximo em px
  const maxDist = 160;   // distância (px) onde o efeito chega a 0

  // throttle via rAF
  let rafId = null;
  let lastEvent = null;

  function onMove(e) {
    lastEvent = e;
    if (!rafId) rafId = requestAnimationFrame(update);
  }

  function update() {
    rafId = null;
    const e = lastEvent;
    if (!e) return;

    const rect = target.getBoundingClientRect();
    const mouseX = e.clientX; // coordenada absoluta na viewport

    // Atualiza cada letra com base na distância ao cursor
    chars.forEach(char => {
      const cr = char.getBoundingClientRect();
      const centerX = cr.left + cr.width / 2;

      const distance = Math.abs(mouseX - centerX);

      // Cálculo do blur: mais próximo -> maior blur
      const t = Math.min(distance / maxDist, 1); // 0 (muito perto) .. 1 (longe)
      const blur = maxBlur * (1 - t);            // 0..maxBlur (perto = maior blur)
      char.style.filter = \`blur(\${blur}px)\`;

      // pequeno efeito extra: escala ligeira para destacar
      const scale = 1 - (blur / maxBlur) * 0.03; // varia entre 0.97 e 1
      char.style.transform = \`scale(\${scale})\`;
    });
  }

  // Limpar blur ao sair
  function onLeave() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    lastEvent = null;
    chars.forEach(c => {
      c.style.filter = 'blur(0px)';
      c.style.transform = 'scale(1)';
    });
  }

  // Eventos
  target.addEventListener('mousemove', onMove);
  target.addEventListener('mouseleave', onLeave);
  window.addEventListener('resize', onLeave);
});
<\/script>
`,executeScriptOnCanvas:!1,className:"w-html-embed"}),e.jsx(a,{tag:"nav",id:"a",className:"w-box w-header-52",children:e.jsxs("div",{className:"w-element w-element-23",children:[e.jsx(a,{className:"w-box w-main-3",children:e.jsx(c,{children:e.jsx(d,{children:e.jsx(o,{href:"/",target:"_top",className:"w-link",children:e.jsx(s,{loading:"eager",src:"/assets/NeRD_P_JQ8TMM8s7huiSC8pLRbDn.png",width:100,alt:"Logo",height:32,className:"w-image"})})})})}),e.jsxs(a,{className:"w-box w-cta-2",children:[e.jsx(c,{children:e.jsx(d,{children:e.jsxs(a,{className:"w-box w-tab-menu",children:[e.jsx(o,{"tab-item":"true",href:"/",target:"_top",className:"w-link w-inicio-2",children:e.jsx(t,{className:"w-text w-label",children:"Inicio"})}),e.jsx(o,{"tab-item":"true",href:"/atv",target:"_top",className:"w-link w-atividades",children:e.jsx(t,{className:"w-text w-label-1",children:"Atividades"})}),e.jsx(o,{"tab-item":"true",href:"/eq",target:"_top",className:"w-link w-equipa",children:e.jsx(t,{className:"w-text w-label-2",children:"Equipa"})}),e.jsx(o,{"tab-item":"true",href:"/c",target:"_top",className:"w-link w-contatos",children:e.jsx(t,{className:"w-text w-label-3",children:"Contactos"})}),e.jsx(a,{"tab-underline":"true",className:"w-box w-underline"})]})})}),e.jsx(r,{code:`<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"><\/script>
<script>
 (() => {
     const tabs = document.querySelectorAll('[tab-item]');
     const underline = document.querySelector('[tab-underline]');

     gsap.set(underline, {
         width: tabs[2].offsetWidth,
         x: tabs[2].offsetLeft
     });

     tabs.forEach((tab, index) => {
         tab.addEventListener('mouseenter', () => {
             gsap.to(underline, {
                 duration: 0.3,
                 width: tab.offsetWidth,
                 x: tab.offsetLeft,
             });
         });

         tab.addEventListener('mouseleave', () => {
             gsap.to(underline, {
                 duration: 0.3,
                 width: tabs[2].offsetWidth,
                 x: tabs[2].offsetLeft,
             });
         });
     });
 })();
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})]}),e.jsx(c,{children:e.jsx(d,{children:e.jsxs(v,{children:[e.jsx(y,{children:e.jsx(N,{"aria-label":"Open mobile menu",className:"w-button w-button-3",children:e.jsx(r,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),e.jsx(C,{className:"w-dialog-overlay w-sheet-overlay",children:e.jsxs(k,{className:"w-dialog-content w-sheet-content",children:[e.jsx(a,{tag:"div",className:"w-box w-wrapper-2",children:e.jsx(c,{children:e.jsx(d,{children:e.jsxs(a,{className:"w-box w-tab-menu-1",children:[e.jsx(o,{"tab-item":"true",href:"/",className:"w-link w-inicio-3",children:e.jsx(a,{className:"w-box w-text-weight-hover-component",children:e.jsx(w,{className:"w-paragraph w-paragraph-17",children:"Início"})})}),e.jsx(o,{"tab-item":"true",href:"/atv",className:"w-link w-atividades-1",children:e.jsx(a,{className:"w-box w-text-weight-hover-component-1",children:e.jsx(w,{className:"w-paragraph w-paragraph-25",children:"Atividades"})})}),e.jsx(o,{"tab-item":"true",href:"/eq",className:"w-link w-equipa-1",children:e.jsx(a,{className:"w-box w-text-weight-hover-component-2",children:e.jsx(w,{className:"w-paragraph w-paragraph-18",children:"Equipa"})})}),e.jsx(o,{"tab-item":"true",href:"/c",className:"w-link w-equipa-2",children:e.jsx(a,{className:"w-box w-text-weight-hover-component-3",children:e.jsx(w,{className:"w-paragraph w-paragraph-23",children:"Contatos"})})})]})})})}),e.jsx(L,{"aria-label":"Close mobile menu",className:"w-close-button w-close-button-1",children:e.jsx(r,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]})})]})})})]})}),e.jsxs("div",{className:`w-element w-texto-inicial-2 animated-bg
cursor-zone`,children:[e.jsx("div",{className:"w-element w-texto-3",children:e.jsx("h1",{id:"animated-text",className:"w-element w-element-18",children:"Equipa"})}),e.jsxs(o,{className:"w-link w-link-49 hover-opacity",children:[e.jsx(t,{tag:"span",className:"w-text w-text-20",children:"Descobre mais "}),e.jsx(a,{className:"w-box w-icon-31",children:e.jsx(r,{code:`<svg width="100%" height="100%" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25005 13.7009C0.532607 14.1151 0.286794 15.0325 0.701008 15.75C1.11522 16.4674 2.03261 16.7132 2.75005 16.299L1.25005 13.7009ZM20.7694 5.38818C20.9839 4.58799 20.509 3.76548 19.7088 3.55107L6.66878 0.0570104C5.86858 -0.157402 5.04608 0.317471 4.83167 1.11767C4.61725 1.91787 5.09213 2.74038 5.89233 2.95479L17.4834 6.06062L14.3776 17.6517C14.1632 18.4519 14.6381 19.2744 15.4383 19.4888C16.2385 19.7033 17.061 19.2284 17.2754 18.4282L20.7694 5.38818ZM2.75005 16.299L20.0706 6.29899L18.5706 3.70092L1.25005 13.7009L2.75005 16.299Z" fill="currentColor"></path>
</svg>
`,className:"w-html-embed w-icon-32"})})]}),e.jsx(r,{code:`<style>
  .hover-opacity {
    opacity: 1;
    cursor: pointer;
  }

  .hover-opacity:hover {
    opacity: 0.65;
  }
</style>
`,executeScriptOnCanvas:!0,className:"w-html-embed"})]}),e.jsx(r,{code:`<style>
  .sobre-nos {
    max-width: 700px;
    margin: 40px auto;
    padding: 30px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    font-family: "Segoe UI", Roboto, Arial, sans-serif;
    color: #333;
    line-height: 1.7;
  }

  .sobre-nos h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 18px;
    color: #111;
    position: relative;
  }

  .sobre-nos h2::before {
    content: "“";
    font-size: 36px;
    color: #3b82f6;
    position: absolute;
    left: -20px;
    top: -10px;
  }

  .sobre-nos h2::after {
    content: "”";
    font-size: 36px;
    color: #3b82f6;
    margin-left: 5px;
  }

  .sobre-nos p {
    font-size: 16px;
    margin-bottom: 16px;
    text-align: justify;
  }

  .sobre-nos strong {
    color: #3b82f6;
  }

  }
</style>

<div class="sobre-nos">
  <h2>Mais do que um núcleo, somos uma família</h2>
  <p>
    O <strong>Núcleo de Robótica Diversificada</strong> é feito de pessoas proativas, criativas e apaixonadas por tecnologia! 
    Desenvolvemos projetos nas áreas de Robótica, Programação, Design, Prototipagem, Organizamos Eventos, Competições e muito mais.
  </p>
  <p>
    Adoramos desafios — e estamos sempre prontos para superá-los!
  </p>
  <p>
    Desce para conhecer um pouco mais da nossa família.
  </p>
</div>
`,className:"w-html-embed"}),e.jsxs(a,{className:"w-box w-page-wrapper",children:[e.jsx(a,{className:"w-box w-body-24",children:e.jsxs(E,{defaultValue:"0",className:"w-tabs w-tabs-2",children:[e.jsx(_,{className:"w-tabs-list w-tabs-list-2",children:e.jsx(S,{"data-ws-index":"0",className:"w-tab-trigger w-tab-trigger-5",children:e.jsx(a,{className:"w-box w-header-33",children:e.jsx(i,{tag:"h3",className:"w-heading w-heading-51",children:"Direção 24/25"})})})}),e.jsx(g,{"data-ws-index":"0",className:"w-tab-content w-tab-content-5",children:e.jsx(a,{tag:"section",className:"w-box w-section-testimonials",children:e.jsx(a,{className:"w-box w-container-11",children:e.jsxs(a,{className:"w-box w-members",children:[e.jsxs(a,{className:"w-box w-member",children:[e.jsx(a,{className:"w-box w-header-35",children:e.jsx(s,{src:"/assets/user1_RQl7k1WihTfDlurHg2M8N.jpg",width:917,height:917,alt:"Emily",className:"w-image w-image-22"})}),e.jsxs(a,{className:"w-box w-body-19",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-1",children:"Gabriel Menezes"}),e.jsx(t,{className:"w-text w-position",children:"Cordenador"})]})]}),e.jsxs(a,{className:"w-box w-member-1",children:[e.jsx(a,{className:"w-box w-header-36",children:e.jsx(s,{src:"/assets/user2_RDoHs8FusTjy3wZ3-Nxte.jpg",width:864,height:864,alt:"Emily",className:"w-image w-image-23"})}),e.jsxs(a,{className:"w-box w-body-20",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-2",children:"Filipe Santos"}),e.jsx(t,{className:"w-text w-position-1",children:"Vice-Coordenador"})]})]}),e.jsxs(a,{className:"w-box w-member-2",children:[e.jsx(a,{className:"w-box w-header-37",children:e.jsx(s,{src:"/assets/user3_o8fVp0vv2RHhjgo8DzmPV.jpg",width:864,height:864,alt:"Emily",className:"w-image w-image-24"})}),e.jsxs(a,{className:"w-box w-body-21",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-3",children:"Bruno Falque"}),e.jsx(t,{className:"w-text w-position-3",children:"Gestor-Financeiro"})]})]}),e.jsxs(a,{className:"w-box w-member-3",children:[e.jsx(a,{className:"w-box w-header-38",children:e.jsx(s,{src:"/assets/user4_-WekT_7iqUzBEgwQs1LYb.jpg",width:832,height:832,alt:"Emily",className:"w-image w-image-25"})}),e.jsxs(a,{className:"w-box w-body-22",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-4",children:"João Carvalho"}),e.jsx(t,{className:"w-text w-position-4",children:"Vogal"})]})]}),e.jsxs(a,{className:"w-box w-member-5",children:[e.jsx(a,{className:"w-box w-header-40",children:e.jsx(s,{src:"/assets/user5_xbfYxPb4heHp5133CdcSS.jpg",width:927,height:927,alt:"Emily",className:"w-image w-image-27"})}),e.jsxs(a,{className:"w-box w-body-25",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-6",children:"David Monteiro"}),e.jsx(t,{className:"w-text w-position-2",children:"Vogal"})]})]})]})})})}),e.jsx(g,{"data-ws-index":"1",className:"w-tab-content w-tab-content-6",children:e.jsx(a,{tag:"section",className:"w-box w-section-testimonials-1",children:e.jsx(a,{className:"w-box w-container-12",children:e.jsxs(a,{className:"w-box w-members-1",children:[e.jsxs(a,{className:"w-box w-member-4",children:[e.jsx(a,{className:"w-box w-header-39",children:e.jsx(s,{src:"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg",width:591,height:591,alt:"Emily",className:"w-image w-image-26"})}),e.jsxs(a,{className:"w-box w-body-23",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-5",children:"Filipe Santos"}),e.jsx(t,{className:"w-text",children:"Coordenador"})]})]}),e.jsxs(a,{className:"w-box w-member-9",children:[e.jsx(a,{className:"w-box w-header-44",children:e.jsx(s,{src:"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg",width:591,height:591,alt:"Emily",className:"w-image w-image-31"})}),e.jsxs(a,{className:"w-box w-body-29",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-10",children:"Emily Doe"}),e.jsx(t,{className:"w-text",children:"CEO"})]})]}),e.jsxs(a,{className:"w-box w-member-8",children:[e.jsx(a,{className:"w-box w-header-43",children:e.jsx(s,{src:"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg",width:591,height:591,alt:"Emily",className:"w-image w-image-30"})}),e.jsxs(a,{className:"w-box w-body-28",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-9",children:"Emily Doe"}),e.jsx(t,{className:"w-text",children:"CEO"})]})]}),e.jsxs(a,{className:"w-box w-member-7",children:[e.jsx(a,{className:"w-box w-header-42",children:e.jsx(s,{src:"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg",width:591,height:591,alt:"Emily",className:"w-image w-image-29"})}),e.jsxs(a,{className:"w-box w-body-27",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-8",children:"Emily Doe"}),e.jsx(t,{className:"w-text",children:"CEO"})]})]}),e.jsxs(a,{className:"w-box w-member-6",children:[e.jsx(a,{className:"w-box w-header-41",children:e.jsx(s,{src:"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg",width:591,height:591,alt:"Emily",className:"w-image w-image-28"})}),e.jsxs(a,{className:"w-box w-body-26",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-7",children:"Emily Doe"}),e.jsx(t,{className:"w-text",children:"CEO"})]})]}),e.jsxs(a,{className:"w-box w-member-11",children:[e.jsx(a,{className:"w-box w-header-46",children:e.jsx(s,{src:"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg",width:591,height:591,alt:"Emily",className:"w-image w-image-33"})}),e.jsxs(a,{className:"w-box w-body-31",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-12",children:"Emily Doe"}),e.jsx(t,{className:"w-text",children:"CEO"})]})]}),e.jsxs(a,{className:"w-box w-member-10",children:[e.jsx(a,{className:"w-box w-header-45",children:e.jsx(s,{src:"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg",width:591,height:591,alt:"Emily",className:"w-image w-image-32"})}),e.jsxs(a,{className:"w-box w-body-30",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-11",children:"Emily Doe"}),e.jsx(t,{className:"w-text",children:"CEO"})]})]}),e.jsxs(a,{className:"w-box w-member-14",children:[e.jsx(a,{className:"w-box w-header-49",children:e.jsx(s,{src:"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg",width:591,height:591,alt:"Emily",className:"w-image w-image-36"})}),e.jsxs(a,{className:"w-box w-body-34",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-15",children:"Emily Doe"}),e.jsx(t,{className:"w-text",children:"CEO"})]})]}),e.jsxs(a,{className:"w-box w-member-13",children:[e.jsx(a,{className:"w-box w-header-48",children:e.jsx(s,{src:"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg",width:591,height:591,alt:"Emily",className:"w-image w-image-35"})}),e.jsxs(a,{className:"w-box w-body-33",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-14",children:"Emily Doe"}),e.jsx(t,{className:"w-text",children:"CEO"})]})]}),e.jsxs(a,{className:"w-box w-member-12",children:[e.jsx(a,{className:"w-box w-header-47",children:e.jsx(s,{src:"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg",width:591,height:591,alt:"Emily",className:"w-image w-image-34"})}),e.jsxs(a,{className:"w-box w-body-32",children:[e.jsx(i,{tag:"h3",className:"w-heading w-name-13",children:"Emily Doe"}),e.jsx(t,{className:"w-text",children:"CEO"})]})]})]})})})})]})}),e.jsx(c,{"data-ani-progress":"slide-up","ata-ani-children":"true",children:e.jsxs(d,{children:[e.jsx(a,{tag:"footer",className:"w-box w-footer .protecao",children:e.jsxs(a,{className:"w-box w-container",children:[e.jsx(z,{className:"w-separator w-separator-2"}),e.jsx(a,{className:"w-box w-link-group",children:e.jsxs(a,{className:"w-box w-links-1",children:[e.jsxs(o,{href:"https://www.instagram.com/nerd.aettua",className:"w-link w-link-35",children:[e.jsx(r,{code:`<svg width="100%" height="100%" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0784 4.08455C16.3013 4.6733 16.4177 5.29782 16.4268 5.92733C16.4732 6.71947 16.4734 6.97854 16.475 8.98365L16.4751 9.01165C16.4751 11.0432 16.4643 11.2968 16.4285 12.0968C16.416 12.7197 16.2988 13.3334 16.0801 13.9155C15.6901 14.92 14.8959 15.715 13.8905 16.105C13.3084 16.3237 12.6939 16.441 12.0727 16.4534C11.2786 16.5 11.0183 16.5 8.98766 16.5H8.98754C6.95682 16.5 6.70319 16.4892 5.90238 16.4534C5.27869 16.4335 4.66416 16.3054 4.08538 16.0792C3.07917 15.6901 2.28501 14.8951 1.895 13.8905C1.67629 13.3076 1.55904 12.6939 1.54657 12.0719C1.5 11.2769 1.5 11.0174 1.5 8.9867C1.5 6.95599 1.51081 6.70236 1.54657 5.90155C1.55821 5.28036 1.67629 4.66582 1.895 4.08455C2.28418 3.07917 3.07917 2.28418 4.08455 1.895C4.66582 1.67629 5.28036 1.55904 5.90155 1.54574C6.6957 1.5 6.95599 1.5 8.9867 1.5C11.0174 1.5 11.2711 1.50998 12.071 1.54574C12.693 1.55904 13.3076 1.67629 13.8889 1.895C14.8942 2.28418 15.6884 3.07917 16.0784 4.08455ZM5.13733 8.98255C5.13733 11.1064 6.85786 12.8269 8.98171 12.8269C11.1039 12.8269 12.8261 11.1064 12.8261 8.98255C12.8261 6.85869 11.1039 5.13816 8.98171 5.13816C6.85786 5.13816 5.13733 6.85869 5.13733 8.98255ZM12.0827 4.99596C12.0827 5.49158 12.4827 5.8924 12.9791 5.8924C13.4739 5.8924 13.8747 5.49158 13.8747 4.99596C13.8747 4.50034 13.4739 4.09951 12.9791 4.09951C12.4827 4.09951 12.0827 4.50034 12.0827 4.99596ZM11.4789 8.98251C11.4789 10.3617 10.3608 11.4797 8.98167 11.4797C7.60248 11.4797 6.48444 10.3617 6.48444 8.98251C6.48444 7.60332 7.60248 6.48528 8.98167 6.48528C10.3608 6.48528 11.4789 7.60332 11.4789 8.98251Z" fill="currentColor"></path>
</svg>
`,className:"w-html-embed w-icon-24"}),e.jsx(t,{tag:"span",className:"w-text",children:"Instagram"})]}),e.jsxs(o,{href:"https://www.instagram.com/nerd.aettua",className:"w-link w-link-36",children:[e.jsx(r,{code:`<svg width="100%" height="100%" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.5C14.663 1.5 15.2989 1.76339 15.7678 2.23223C16.2366 2.70107 16.5 3.33696 16.5 4V14C16.5 14.663 16.2366 15.2989 15.7678 15.7678C15.2989 16.2366 14.663 16.5 14 16.5H4C3.33696 16.5 2.70107 16.2366 2.23223 15.7678C1.76339 15.2989 1.5 14.663 1.5 14V4C1.5 3.33696 1.76339 2.70107 2.23223 2.23223C2.70107 1.76339 3.33696 1.5 4 1.5H14ZM5.66667 7.33333C5.44565 7.33333 5.23369 7.42113 5.07741 7.57741C4.92113 7.73369 4.83333 7.94565 4.83333 8.16667V12.3333C4.83333 12.5543 4.92113 12.7663 5.07741 12.9226C5.23369 13.0789 5.44565 13.1667 5.66667 13.1667C5.88768 13.1667 6.09964 13.0789 6.25592 12.9226C6.4122 12.7663 6.5 12.5543 6.5 12.3333V8.16667C6.5 7.94565 6.4122 7.73369 6.25592 7.57741C6.09964 7.42113 5.88768 7.33333 5.66667 7.33333ZM8.16667 6.5C7.94565 6.5 7.73369 6.5878 7.57741 6.74408C7.42113 6.90036 7.33333 7.11232 7.33333 7.33333V12.3333C7.33333 12.5543 7.42113 12.7663 7.57741 12.9226C7.73369 13.0789 7.94565 13.1667 8.16667 13.1667C8.38768 13.1667 8.59964 13.0789 8.75592 12.9226C8.9122 12.7663 9 12.5543 9 12.3333V9.28333C9.32511 8.92969 9.7205 8.64784 10.1608 8.45583C10.4383 8.3375 10.8558 8.28917 11.1458 8.38083C11.242 8.40524 11.3277 8.46022 11.39 8.5375C11.4333 8.59583 11.5 8.72583 11.5 9V12.3333C11.5 12.5543 11.5878 12.7663 11.7441 12.9226C11.9004 13.0789 12.1123 13.1667 12.3333 13.1667C12.5543 13.1667 12.7663 13.0789 12.9226 12.9226C13.0789 12.7663 13.1667 12.5543 13.1667 12.3333V9C13.1667 8.44167 13.025 7.945 12.73 7.54667C12.4585 7.18546 12.0786 6.9206 11.6458 6.79083C10.8942 6.555 10.0617 6.68583 9.50583 6.92417C9.32774 7.00039 9.15437 7.08721 8.98667 7.18417C8.95173 6.99216 8.85052 6.8185 8.70066 6.69347C8.55081 6.56844 8.36183 6.49997 8.16667 6.5ZM5.66667 4.83333C5.44565 4.83333 5.23369 4.92113 5.07741 5.07741C4.92113 5.23369 4.83333 5.44565 4.83333 5.66667C4.83333 5.88768 4.92113 6.09964 5.07741 6.25592C5.23369 6.4122 5.44565 6.5 5.66667 6.5C5.88768 6.5 6.09964 6.4122 6.25592 6.25592C6.4122 6.09964 6.5 5.88768 6.5 5.66667C6.5 5.44565 6.4122 5.23369 6.25592 5.07741C6.09964 4.92113 5.88768 4.83333 5.66667 4.83333Z" fill="currentColor"></path>
</svg>
`,className:"w-html-embed w-icon-25"}),e.jsx(t,{tag:"span",className:"w-text",children:"Linkedin"})]})]})}),e.jsx(a,{className:"w-box w-legal-area",children:e.jsx(a,{className:"w-box",children:e.jsx(t,{className:"w-text",children:"2025 © NeRD"})})})]})}),e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(r,{code:'<script>(function(factory){if(typeof define==="function"&&define.amd){define(factory)}else if(typeof module!=="undefined"&&module.exports){module.exports=factory()}else{window.enterView=factory.call(this)}})((()=>{const lib=({selector:selector,enter:enter=(()=>{}),exit:exit=(()=>{}),progress:progress=(()=>{}),offset:offset=0,once:once=false})=>{let raf=null;let ticking=false;let elements=[];let height=0;function setupRaf(){raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1e3/60)}}function getOffsetHeight(){if(offset&&typeof offset==="number"){const fraction=Math.min(Math.max(0,offset),1);return height-fraction*height}return height}function updateHeight(){const cH=document.documentElement.clientHeight;const wH=window.innerHeight||0;height=Math.max(cH,wH)}function updateScroll(){ticking=false;const targetFromTop=getOffsetHeight();elements=elements.filter((el=>{const{top:top,bottom:bottom,height:height}=el.getBoundingClientRect();const entered=top<targetFromTop;const exited=bottom<targetFromTop;if(entered&&!el.__ev_entered){enter(el);el.__ev_progress=0;progress(el,el.__ev_progress);if(once)return false}else if(!entered&&el.__ev_entered){el.__ev_progress=0;progress(el,el.__ev_progress);exit(el)}if(entered&&!exited){const delta=(targetFromTop-top)/height;el.__ev_progress=Math.min(1,Math.max(0,delta));progress(el,el.__ev_progress)}if(entered&&exited&&el.__ev_progress!==1){el.__ev_progress=1;progress(el,el.__ev_progress)}el.__ev_entered=entered;return true}));if(!elements.length){window.removeEventListener("scroll",onScroll,true);window.removeEventListener("resize",onResize,true);window.removeEventListener("load",onLoad,true)}}function onScroll(){if(!ticking){ticking=true;raf(updateScroll)}}function onResize(){updateHeight();updateScroll()}function onLoad(){updateHeight();updateScroll()}function selectionToArray(selection){const len=selection.length;const result=[];for(let i=0;i<len;i+=1){result.push(selection[i])}return result}function selectAll(selector,parent=document){if(typeof selector==="string"){return selectionToArray(parent.querySelectorAll(selector))}else if(selector instanceof NodeList){return selectionToArray(selector)}else if(selector instanceof Array){return selector}}function setupElements(){elements=selectAll(selector)}function setupEvents(){window.addEventListener("resize",onResize,true);window.addEventListener("scroll",onScroll,true);window.addEventListener("load",onLoad,true);onResize()}function init(){if(!selector){console.error("must pass selector");return false}setupElements();if(!elements||!elements.length){console.error("no els found");return false}setupRaf();setupEvents();updateScroll()}init()};return lib}));<\/script>',executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),e.jsx(r,{code:`<style>
:root {
  --ani-duration: var(--duration-default, .2s);
  --ani-delay: 0s;
  --ani-slide-offset: 20%;
  --ani-zoom-in-scale: 1;
  --ani-zoom-out-scale: .85;
  --ani-flip-rotate: 30deg;
  --ani-easing: var(--easing-default, ease);
  --ani-fill-mode: forwards;
}
[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}
@keyframes fadeIn{from{opacity:0}
to{opacity:1}}
@keyframes fadeOut{from{opacity:1}
to{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}
@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}
to{opacity:1;translate:none}}
@keyframes slideOut{from{opacity:1;translate:none}
to{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}
@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}
to{opacity:1;scale:1}}
@keyframes zoomOut{from{opacity:1;scale:1}
to{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}
@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}
to{rotate:y 0;opacity:1}}
@keyframes flipOutY{from{rotate:y 0;opacity:1}
to{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}
@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}
to{rotate:x 0;opacity:1}}
@keyframes flipOutX{from{rotate:x 0;opacity:1}
to{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}
@keyframes expandDown{from{height:0}
to{height:var(--newHeight)}}
@keyframes expandUp{from{height:var(--newHeight)}
to{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}
@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}
</style>`,className:"w-html-embed"}),e.jsx(r,{code:'<script type="module">\nconst config = {\n	intersectionOffset: 0.2,\n	intersectionOnce: true,\n	progressOffset: 0,\n	progressOnce: false,\n};\nfunction e({trigger:e,selector:r,offset:n,once:s}){const a="progress"===e;return enterView({selector:r,enter:e=>!a&&t(e,"in","out"),exit:e=>!a&&t(e,"out","in"),progress:(e,t)=>a&&function(e,t){e.style.opacity=t,e.style.transform=function(e,t){const r=e.parentElement,n=r&&r.hasAttribute("data-ani-progress")?r.getAttribute("data-ani-progress"):e.getAttribute("data-ani-progress"),s=parseFloat(getComputedStyle(e).getPropertyValue("--ani-slide-offset"))||0,a=parseFloat(getComputedStyle(e).getPropertyValue("--ani-flip-rotate"))||0,o=1-(1-t)*(1-parseFloat(getComputedStyle(e).getPropertyValue("--ani-zoom-out-scale"))||1);switch(n){case"slide-up":return`translateY(${(1-t)*s}px)`;case"slide-down":return`translateY(-${(1-t)*s}px)`;case"slide-left":return`translateX(${(1-t)*s}px)`;case"slide-right":return`translateX(-${(1-t)*s}px)`;case"flip-x":return`rotateX(${(1-t)*a}deg)`;case"flip-y":return`rotateY(${(1-t)*a}deg)`;case"zoom":return`scale(${o})`;default:return"none"}}(e,t)}(e,t),offset:n,once:s})}function t(e,t,r){e.classList.add(t),e.classList.remove(r)}function r(e,t){const r=`[${e}]${t?\'[data-ani-children="true"] > *\':\':not([data-ani-children="true"])\'}`;return Array.from(document.querySelectorAll(r))}const n=[...r("data-ani"),...r("data-ani",!0)],s=[...r("data-ani-progress"),...r("data-ani-progress",!0)];n.length&&e({trigger:"intersection",selector:n,offset:config.intersectionOffset,once:config.intersectionOnce}),s.length&&e({trigger:"progress",selector:s,offset:config.progressOffset,once:config.progressOnce});\n<\/script>',executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})]})})]})})]}),e.jsx(c,{children:e.jsx(d,{children:e.jsx(r,{code:`<style>
  .cursor-zone {
    position: relative;
  }

  .svg-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 999999;
    opacity: 0;
    will-change: transform;
    transition: opacity 0.2s ease;
  }

  .svg-cursor svg {
    width: 100%;
    height: 100%;
    stroke: white;
    filter: drop-shadow(0 0 6px white);
    animation: glow 1.5s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% { filter: drop-shadow(0 0 6px white); }
    50% { filter: drop-shadow(0 0 12px white); }
  }
</style>

<div class="cursor-zone">
  <!-- conteúdo da zona -->
</div>

<div id="svgCursor" class="svg-cursor" aria-hidden="true">
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12 6V14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M15 11L12 14L9 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
</div>

<script>
(function(){
  const cursorEl = document.getElementById('svgCursor');
  const zone = document.querySelector('.cursor-zone');

  if (window.matchMedia('(pointer: coarse)').matches) {
    cursorEl.style.display = 'none';
    return;
  }

  let targetX = 0, targetY = 0;
  let currX = 0, currY = 0;
  let rafId = null;

  function onMove(e) {
    targetX = e.clientX;
    targetY = e.clientY;
    cursorEl.style.opacity = '0.6';
    startLoop();
  }

  function startLoop() {
    if (rafId) return;
    rafId = requestAnimationFrame(tick);
  }

  function tick() {
    const ease = 0.2;
    currX += (targetX - currX) * ease;
    currY += (targetY - currY) * ease;
    cursorEl.style.transform = \`translate(\${currX}px, \${currY}px) translate(-50%, -50%)\`;

    if (Math.abs(currX - targetX) > 0.1 || Math.abs(currY - targetY) > 0.1) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
    }
  }

  function onLeave() {
    cursorEl.style.opacity = '0';
  }

  // Evento de clique para scroll
  zone.addEventListener('click', () => {
    window.scrollTo({
      top: window.innerHeight, // 100vh
      behavior: 'smooth'
    });
  });

  zone.addEventListener('mousemove', onMove);
  zone.addEventListener('pointermove', onMove);
  zone.addEventListener('mouseleave', onLeave);
})();
<\/script>
`,executeScriptOnCanvas:!1,className:"w-html-embed"})})})]}),$=({data:m})=>{const{system:n,resources:x,url:p}=m;return e.jsx(O.Provider,{value:{imageLoader:u,assetBaseUrl:h,resources:x,breakpoints:A,onError:console.error},children:e.jsx(V,{system:n},p)})},q=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),B=({data:m})=>{const{pageMeta:n}=m,{origin:x}=new URL(m.url);let p=n.socialImageUrl;n.socialImageAssetName&&(p=`${x}${u({src:`${h}/${n.socialImageAssetName}`})}`);const j=n.custom.some(l=>l.property==="twitter:card");return e.jsxs(e.Fragment,{children:[m.url&&e.jsx("meta",{property:"og:url",content:m.url}),e.jsx("title",{children:n.title}),e.jsx("meta",{property:"og:title",content:n.title}),n.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:n.description}),e.jsx("meta",{property:"og:description",content:n.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),f,p&&e.jsx("meta",{property:"og:image",content:n.socialImageUrl}),f,n.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),n.custom.map(({property:l,content:b})=>e.jsx("meta",{property:l,content:b},l)),(n.socialImageAssetName!==void 0||n.socialImageUrl!==void 0)&&j===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),e.jsx("link",{rel:"icon",href:u({src:`${h}${R}`})}),I.map(l=>e.jsx("link",{rel:"preload",href:`${h}${l}`,as:"font",crossOrigin:"anonymous"},l)),D.map(l=>e.jsx("link",{rel:"preload",href:`${h}${l}`,as:"image"},l))]})},P=Object.freeze(Object.defineProperty({__proto__:null,Head:B},Symbol.toStringTag,{value:"Module"})),H={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/eq/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/eq/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}}};export{H as configValuesSerialized};
