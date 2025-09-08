import{j as c,l as r,m as l,P as a,n as e,a as n,y as w,b as i,O as y,x as j,c as q,M as k,R as z,f as p,$ as N,d as s,p as C,e as _,g as m,i as v,h as S}from"../chunks/chunk-Dpz_oRAQ.js";/* empty css                      */const g="NeRD",E=[{id:"3Biv6ltgkYKtgBQxdJrKw"},{id:"xBS5ozESn2cK63icHnvtC",maxWidth:991},{id:"0_ve5QOFHNb0fnZ1GQipb",maxWidth:767},{id:"OIYbx6NwwgecvCYuNuEar",maxWidth:479}],A="NeRD_P_JQ8TMM8s7huiSC8pLRbDn.png",L=["SpaceGrotesk-VariableFont_wght_92Z2i9spNtfwrzeGeXHcE.ttf","InterVariable_qDqxtwB6S7W69tcm-FSxu.woff2"],I=["imag_1_H2OkJmoy0-FdF8I3Vquaz.png","imagem_2025-07-24_113758739_uYNzhgL2db-32tyFBVoM0.png","imagem_2025-07-24_113519155_VrmIrOOzUE-JoeXraonHx.png","IMG-20250602-WA0012_pniii-LoQFZbY-ZnB0hm8.jpg","imagem_2025-07-24_113744003_PLvnWjolwsCmAwRH4DpXR.png","imag_4_cE_3RtJGjIBAQhBqI_9Ox.png","imagem_2025-07-24_113857204_BVv-na-DrvRDf-GaMeJ0B.png","IMG-20250602-WA0017_ZOcgvAIK8aznwFV45D775.jpg","imagem_2025-07-24_113657275_TDvX4i--TBauRqiu5RXQV.png","deti_compressed_s4URwBUyuGW8t-NA5TwTK.png","imagem_2025-07-24_113936188_ooTykIz6B5eC81A1xnH4p.png","imag_2_dyvZTsESB5Pcu6hqe7Ivy.png","imagem_2025-07-24_111728288_vdpE3ONp_XnCfMhiT9N64.png","IMG-20250602-WA0040_H4OssC7gypcUveQHNYf7P.jpg","imagem_2025-07-24_113823354_XmXuHHBnR2KmVpIV1JR4I.png","EmprestaAI_LSACnuweUBaRZewkn8n4s.png","IMG-20250602-WA0015_RvkBpvwoMYyNd4r1ml1J7.jpg","imagem_2025-07-24_113724384_bAIJ8_3rabx818Fc4qMtF.png"],O=d=>c.jsxs("body",{className:"w-element",children:[c.jsx(r,{children:c.jsx(l,{children:c.jsx(a,{code:`<style>
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
</style>`,className:"w-html-embed"})})}),c.jsx(a,{code:`<!-- Splitting.js (divide texto em palavras) -->
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
`,executeScriptOnCanvas:!1,className:"w-html-embed"}),c.jsx(a,{code:`<script type="module">
  import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

  requestAnimationFrame(() => {
    const sliders = document.querySelectorAll('.meu-slider');

    sliders.forEach((container) => {
      // Criar elementos se faltarem
      if (!container.querySelector('.swiper-pagination')) {
        const pag = document.createElement('div');
        pag.classList.add('swiper-pagination');
        container.appendChild(pag);
      }

      if (!container.querySelector('.swiper-button-prev')) {
        const prev = document.createElement('div');
        prev.classList.add('swiper-button-prev');
        container.appendChild(prev);
      }

      if (!container.querySelector('.swiper-button-next')) {
        const next = document.createElement('div');
        next.classList.add('swiper-button-next');
        container.appendChild(next);
      }

      // Inicializa o Swiper
      new Swiper(container, {
        loop: container.dataset.loop === 'true',
        autoplay: container.dataset.autoplay === 'true' ? {
          delay: 3000,
          disableOnInteraction: false,
        } : false,
        slidesPerView: 1, // Alterado de 'auto' para 1
        navigation: {
          nextEl: container.querySelector('.swiper-button-next'),
          prevEl: container.querySelector('.swiper-button-prev'),
        },
        pagination: {
          el: container.querySelector('.swiper-pagination'),
          clickable: true,
        },
      });
    });
  });
<\/script>



<style>
.swiper-pagination {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: #bbb;
  border-radius: 50%;
  opacity: 0.5;
  margin: 0 4px;
  transition: background-color 0.3s, opacity 0.3s;
}

.swiper-pagination-bullet-active {
  background-color: #007aff;
  opacity: 1;
}
  
</style>
`,executeScriptOnCanvas:!1,className:"w-html-embed"}),c.jsx(e,{tag:"nav",id:"a",className:"w-box c1y5gtuy ctwedid c4zv7o8 c1yxbcu3 ca0xin3 cmul90s c19faiz0 c45gf4w c25muhi c1o83613 czm2iir c1hkrd9w chwz02u ccanaxu cgzwweq c15gf129 cu196q0 c4tvhmr c7f3paa c1pa9afc cqyy79w c1kolt8z c1l7v5ak cyfhg6s c1nj902p",children:c.jsxs("div",{className:"w-element c15wov26 cufu5ux chwz02u ccanaxu c3o4zz4 c3ub148 ctwedid c1y5gtuy c6o4ko5 cw0crdd c383mw5 c1nj902p cauz5uw c1blbg3o c1w68d12 chopplv cmk8617 ch2nya0",children:[c.jsx(e,{className:"w-box c15wov26 ccanaxu cuwsqp1 c45gf4w c1n863ed c8yq6mq cufu5ux",children:c.jsx(r,{children:c.jsx(l,{children:c.jsx(n,{href:"/",target:"_top",className:"w-link",children:c.jsx(w,{loading:"eager",src:"/assets/NeRD_P_JQ8TMM8s7huiSC8pLRbDn.png",width:100,alt:"Logo",height:32,className:"w-image"})})})})}),c.jsxs(e,{className:"w-box c15wov26 ccanaxu cciowao cj6cf3e c10c0lh2 c1mes1tv czmc1ut",children:[c.jsx(r,{children:c.jsx(l,{children:c.jsxs(e,{className:"w-box cqdf4j1 c15wov26 ccanaxu cuwsqp1",children:[c.jsx(n,{"tab-item":"true",href:"/",target:"_top",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1n3ak6m c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax",children:c.jsx(i,{className:"w-text cgn0h58 c1gnmwcy c16rucjm cttxcmq",children:"Inicio"})}),c.jsx(n,{"tab-item":"true",href:"/atv",target:"_top",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1n3ak6m c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax",children:c.jsx(i,{className:"w-text cgn0h58 c1gnmwcy c16rucjm cttxcmq",children:"Atividades"})}),c.jsx(n,{"tab-item":"true",href:"/eq",target:"_top",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1n3ak6m c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax",children:c.jsx(i,{className:"w-text cgn0h58 c1gnmwcy c16rucjm cttxcmq",children:"Equipa"})}),c.jsx(n,{"tab-item":"true",href:"/c",target:"_top",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1n3ak6m c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax",children:c.jsx(i,{className:"w-text cgn0h58 c1gnmwcy c16rucjm cttxcmq",children:"Contactos"})}),c.jsx(e,{"tab-underline":"true",className:"w-box ccr8k56 c1emrgym co6bdqb c1gdax9t c6t0baj cqu17t9 c12rfcvp"})]})})}),c.jsx(a,{code:`<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"><\/script>
<script>
 (() => {
     const tabs = document.querySelectorAll('[tab-item]');
     const underline = document.querySelector('[tab-underline]');

     gsap.set(underline, {
         width: tabs[1].offsetWidth,
         x: tabs[1].offsetLeft
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
                 width: tabs[1].offsetWidth,
                 x: tabs[1].offsetLeft,
             });
         });
     });
 })();
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})]}),c.jsx(r,{children:c.jsx(l,{children:c.jsxs(y,{children:[c.jsx(j,{children:c.jsx(q,{"aria-label":"Open mobile menu",className:"w-button c1uaty07 c1tnm35q cfbeh5 c1d8oa30 c1tdtvjs civrtzc c5d73v1 ccanaxu cuwsqp1 c1b8w41a co0w7fv c10olkz5 c1u4qls7 c1mucm95 c17skwfs c1ov2tmq c8ix2lk c1hp5vde c4iq2of cp8q3ji c1vzwd8x c14kc0uq c13gmar c135cqxi cwo0hst c1csq4xe c1soyupv c17v8mua c1dbelh c3reus ct24i1h c6uto6a",children:c.jsx(a,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),c.jsx(k,{className:"w-dialog-overlay ct3vvl5 cme2lch ch9s07v c1x26zy8 c148kyc2 c1pixmbj chx2fba cdy37h1 c185xl3v c17kvbot c1jlskz0 c6uto6a c1w68d12 c1g13imj",children:c.jsxs(z,{className:"w-dialog-content ch9s07v c1209fn5 csqc65v ct3vvl5 c17mwktl c1k6w850 c15oosbi clpy7xl",children:[c.jsx(e,{tag:"div",className:"w-box c1xixdy1 ccoi98v ch9s07v cky5twr c1s5skrx c153v3b2 c1ukpevl",children:c.jsx(r,{children:c.jsx(l,{children:c.jsxs(e,{className:"w-box cqdf4j1 c15wov26 ccanaxu cuwsqp1 cky5twr c17snfqp cevvu9",children:[c.jsx(n,{"tab-item":"true",href:"/",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1n3ak6m c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax cvt40mh c1r88z38",children:c.jsx(e,{className:"w-box cysk8b5",children:c.jsx(p,{className:"w-paragraph c1fxshi c119ypui",children:"Início"})})}),c.jsx(n,{"tab-item":"true",href:"/atv",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1n3ak6m c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax cvt40mh c1r88z38",children:c.jsx(e,{className:"w-box cysk8b5",children:c.jsx(p,{className:"w-paragraph c1fxshi c119ypui",children:"Atividades"})})}),c.jsx(n,{"tab-item":"true",href:"/eq",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1n3ak6m c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax cvt40mh c1r88z38",children:c.jsx(e,{className:"w-box cysk8b5",children:c.jsx(p,{className:"w-paragraph c1fxshi c119ypui",children:"Equipa"})})}),c.jsx(n,{"tab-item":"true",href:"/c",className:"w-link ciium0n c7jjpxr c13dbffw c1ko2x00 c1n3ak6m c1tdtvjs c251wco c1477p4a ctoucso c1bqynt4 c19vsoax cvt40mh c1r88z38",children:c.jsx(e,{className:"w-box cysk8b5",children:c.jsx(p,{className:"w-paragraph c1fxshi c119ypui",children:"Contatos"})})})]})})})}),c.jsx(N,{"aria-label":"Close mobile menu",className:"w-close-button c1uaty07 c1tnm35q cfbeh5 c1d8oa30 c1tdtvjs civrtzc c1i6u13o ccanaxu cuwsqp1 c1b8w41a co0w7fv c10olkz5 c1u4qls7 c1mucm95 c17skwfs c1ov2tmq c8ix2lk c1hp5vde c4iq2of cp8q3ji c1vzwd8x c14kc0uq c13gmar ck6nfih c1ldii35 cwo0hst c1csq4xe c1soyupv c17v8mua c3reus c1jtojnc cd7ss8a ct24i1h c15rh01e c6uto6a",children:c.jsx(a,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]})})]})})})]})}),c.jsxs("div",{className:`w-element c15wov26 ccanaxu cuwsqp1 cqh78d7 cebb6k7 c1mmapnj c19h3frt c1o9lghm cjzsysl c1s4z1d2 c1jlzsi3 c1jgi2of c1af2bwt c1j0ufy2 c1f8uhq0 c13r6jwb c9d4vnp c1nt3c7m cypjrdq animated-bg
cursor-zone`,children:[c.jsx("div",{className:"w-element ct0n5u1 cw8uura c15wov26 ccanaxu cuwsqp1 c1jgi2of cpca5kg czsuimj cfgwkoc",children:c.jsx("h1",{id:"animated-text",className:"w-element c1ryqgs7 cgzwweq c1az2398 cu196q0 cii9oli c11x6a24 cf3tpdf c3ekzd2 c9oeay c7l8grg c171cjib c1iffsh3 cpca5kg czsuimj c1d3ufqo",children:"Projetos e Atividades"})}),c.jsxs(n,{className:"w-link c1dzr3ln c145g7oo c1tdtvjs c14hij5v c1u4qls7 c1mucm95 c17skwfs c1ov2tmq ccr8k56 c12yue8p c1j08shm c14e95wm c1s24e8h c1a62om8 ct9w8tn cfp7pue cwka1zb c7bqapy cdv2hq7 c1v9ckxd c1f1r4bb cyp6dig c1ei055y cg9t561 c1prfmto cp8q3ji c1vzwd8x c1joc8k2 csa02y7 c151mwoh c6lbi68 cqpf1gz c8fc1eu hover-opacity",children:[c.jsx(i,{tag:"span",className:"w-text cgzwweq",children:"Descobre mais "}),c.jsx(e,{className:"w-box c1i6u13o c8lcpx2 c1rg3gx8 cdv1xmn c14czazn c6qgrpk cqjdqh0 c1qhf3qo cx1sjn0 ccanaxu cuwsqp1 c145jxex c186r584 ccmmpht cq267kp c1jzyzpm c1oq165c c109utof cfjx2pq c17uar7u ckt7kkc",children:c.jsx(a,{code:`<svg width="100%" height="100%" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25005 13.7009C0.532607 14.1151 0.286794 15.0325 0.701008 15.75C1.11522 16.4674 2.03261 16.7132 2.75005 16.299L1.25005 13.7009ZM20.7694 5.38818C20.9839 4.58799 20.509 3.76548 19.7088 3.55107L6.66878 0.0570104C5.86858 -0.157402 5.04608 0.317471 4.83167 1.11767C4.61725 1.91787 5.09213 2.74038 5.89233 2.95479L17.4834 6.06062L14.3776 17.6517C14.1632 18.4519 14.6381 19.2744 15.4383 19.4888C16.2385 19.7033 17.061 19.2284 17.2754 18.4282L20.7694 5.38818ZM2.75005 16.299L20.0706 6.29899L18.5706 3.70092L1.25005 13.7009L2.75005 16.299Z" fill="currentColor"></path>
</svg>
`,className:"w-html-embed cgzwweq c1n0trak c1wu9mfq c4zkvdd c1nn7puo"})})]}),c.jsx(a,{code:`<style>
  .hover-opacity {
    opacity: 1;
    cursor: pointer;
  }

  .hover-opacity:hover {
    opacity: 0.65;
  }
</style>
`,executeScriptOnCanvas:!0,className:"w-html-embed"})]}),c.jsx(e,{"data-ws-tag":"section",id:"A",className:"w-box c1y5gtuy ctwedid c7oeyb0 cnv3kpj cjukua7 c1rlgl31 c15wov26 c45gf4w c25muhi c1o83613 ccanaxu cuwsqp1 ct0n5u1 cpv6efc cwfcg58 c1o3lug3 c1qih13m c1hau0zr c11bhofh cebyibw c1p5z113",children:c.jsxs(e,{id:"SH",className:"w-box c15wov26 c9vbpot c10c0lh2 cj6cf3e c186wlez cuwsqp1 cu196q0 cw8uura c11x6a24 cgmo5qs",children:[c.jsx(s,{tag:"h1",className:"w-heading cl0htyc c1amecmh c1e9izlp cc1w4m0 c1r0orxz c1a747g2 c77hrx0 c1ryqgs7 c1fxshi c1wze4cd",children:"ShareToy"}),c.jsx("div",{className:"w-element c1uaty07 c1tnm35q cfbeh5 c1d8oa30 c1tdtvjs civrtzc c1i6u13o ccanaxu cuwsqp1 c1b8w41a co0w7fv c10olkz5 c1u4qls7 c1mucm95 c17skwfs c1ov2tmq c117kth5 cs9dmk2 c1qn5x3x c1hzdmj8 cp8q3ji c1vzwd8x c14kc0uq c1w68d12 chnb5xq c13qzozk c9psn18 ctmoo16 ch652vf c1csq4xe",children:"Voluntariado "}),c.jsxs(p,{className:"w-paragraph c1kxlxba c1k8deyj c1qzbu4v c77hrx0 c1ryqgs7 c1h7i9bc cnqmnf6",children:["O ",c.jsx("b",{className:"w-element",children:"ShareToy "}),"é uma iniciativa que consiste na recolha de brinquedos, reparação e redistribuição, com o propósito de proporcionar momentos de alegria e conforto a crianças em situação de vulnerabilidade, especialmente durante a época natalícia."]})]})}),c.jsxs(e,{className:"w-box cjukua7 ctwedid c1y5gtuy c3ub148 cdoli9c ca51e6w c11bhofh c18779zo c41sl8l",children:[c.jsx(e,{className:"w-box cbxym4n cuwsqp1 c9vbpot c7oeyb0 cnv3kpj cmul90s ctwedid c1y5gtuy cjlv4cu c11bhofh cs9n9sr cpca8eh ctzdwww",children:c.jsx(e,{className:"w-box c116ipqm ctwedid c1y5gtuy c15wov26 cqdf4j1 cxs67e5 cmk8617 ch2nya0 cta6y0l c11x6a24 cjso3th",children:c.jsxs(e,{"data-slides-per-view":"auto","data-infinite-loop":"false","data-autoplay":"true","data-nav":"true","data-nav-next-el":".swiper-button-next","data-nav-prev-el":".swiper-button-prev","data-swiper":"true","data-slider-speed":"400","data-autoplay-delay":"",className:"w-box cmul90s c1fxa9k5 ctwedid c1y5gtuy cw0elz5 c17cjfq6 c1i23qyj ca5cex8 ca0xin3 c9vbpot cbbi1o2 ccanaxu c19y8trb c1610w6h c1a4mrs2 c1onbv7r crwyubp c9ijxr5 c11xdf8y c18779zo swiper swiper-c-auto",children:[c.jsxs(e,{className:"w-box ca0xin3 cqdf4j1 cw0elz5 c19y8trb c15wov26 c186wlez cciowao cmul90s c1pbvww2 c11t41nt swiper-wrapper",children:[c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 cq0agzy cs1clxh cnhqqlh comg1wv ctx9nhv cky5cib cc5kjg8 c137rwa5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge clf22w4 c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c1tbqons c6yjhq6 cv3e54v cbbi1o2 c19h3frt cjzsysl cr65dge c1g2p5vi c1o9lghm cg9n8ir c17zkpvb c1m83a94",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3",children:c.jsxs(s,{tag:"h4",className:"w-heading c1wch8w6 c1amecmh c1sqpeeh c1esv8r4 c1buvi2o cozxal2 cza6dvq clmfvqm c1y6ewze cyupg9p ccteuyv",children:[c.jsx("b",{className:"w-element c1vdrrvi",children:"2016"}),"",c.jsx("br",{}),"","1ª Edição"]})})})})}),c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 cq0agzy cs1clxh cnhqqlh comg1wv ctx9nhv cky5cib cc5kjg8 c137rwa5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge c1a09i9o c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c1tbqons c6yjhq6 cv3e54v cbbi1o2 c19h3frt cjzsysl cr65dge c1g2p5vi c1o9lghm cg9n8ir c17zkpvb cjf5b3x",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3",children:c.jsxs(s,{tag:"h4",className:"w-heading c1wch8w6 c1amecmh c1sqpeeh c1esv8r4 c1buvi2o cozxal2 cza6dvq clmfvqm c1y6ewze cyupg9p ccteuyv",children:[c.jsx("b",{className:"w-element c1vdrrvi",children:"2017"}),"",c.jsx("br",{}),"","2ª Edição"]})})})})}),c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 cq0agzy cs1clxh cnhqqlh comg1wv ctx9nhv cky5cib cc5kjg8 c137rwa5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge c1wzq27w c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c1tbqons c6yjhq6 cv3e54v cbbi1o2 c19h3frt cjzsysl cr65dge c1g2p5vi c1o9lghm cg9n8ir c17zkpvb cjf5b3x",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3",children:c.jsxs(s,{tag:"h4",className:"w-heading c1wch8w6 c1amecmh c1sqpeeh c1esv8r4 c1buvi2o cozxal2 cza6dvq clmfvqm c1y6ewze cyupg9p ccteuyv",children:[c.jsx("b",{className:"w-element c1vdrrvi",children:"2018"}),"",c.jsx("br",{}),"","3ª Edição"]})})})})}),c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 cq0agzy cs1clxh cnhqqlh comg1wv ctx9nhv cky5cib cc5kjg8 c137rwa5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge c1azem4o c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c1tbqons c6yjhq6 cv3e54v cbbi1o2 c19h3frt cjzsysl cr65dge c1g2p5vi c1o9lghm cg9n8ir c17zkpvb cjf5b3x",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3",children:c.jsxs(s,{tag:"h4",className:"w-heading c1wch8w6 c1amecmh c1sqpeeh c1esv8r4 c1buvi2o cozxal2 cza6dvq clmfvqm c1y6ewze cyupg9p ccteuyv",children:[c.jsx("b",{className:"w-element c1vdrrvi",children:"2019"}),"",c.jsx("br",{}),"","4ª Edição"]})})})})}),c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 cq0agzy cs1clxh cnhqqlh comg1wv ctx9nhv cky5cib cc5kjg8 c137rwa5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge cerngxu c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c1tbqons c6yjhq6 cv3e54v cbbi1o2 c19h3frt cjzsysl cr65dge c1g2p5vi c1o9lghm cg9n8ir c17zkpvb cjf5b3x",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3",children:c.jsxs(s,{tag:"h4",className:"w-heading c1wch8w6 c1amecmh c1sqpeeh c1esv8r4 c1buvi2o cozxal2 cza6dvq clmfvqm c1y6ewze cyupg9p ccteuyv",children:[c.jsx("b",{className:"w-element c1vdrrvi",children:"2020"}),"",c.jsx("br",{}),"","5ª Edição"]})})})})}),c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 cq0agzy cs1clxh cnhqqlh comg1wv ctx9nhv cky5cib cc5kjg8 c137rwa5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge c1udimka c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c1tbqons c6yjhq6 cv3e54v cbbi1o2 c19h3frt cjzsysl cr65dge c1g2p5vi c1o9lghm cg9n8ir c17zkpvb cjf5b3x",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3",children:c.jsxs(s,{tag:"h4",className:"w-heading c1wch8w6 c1amecmh c1sqpeeh c1esv8r4 c1buvi2o cozxal2 cza6dvq clmfvqm c1y6ewze cyupg9p ccteuyv",children:[c.jsx("b",{className:"w-element c1vdrrvi",children:"2021"}),"",c.jsx("br",{}),"","6ª Edição"]})})})})}),c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 cq0agzy cs1clxh cnhqqlh comg1wv ctx9nhv cky5cib cc5kjg8 c137rwa5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge c18tb2hz c1o9lghm cg9n8ir cebb6k7 cif246n c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c1tbqons c6yjhq6 cv3e54v cbbi1o2 c19h3frt cjzsysl cr65dge c1g2p5vi c1o9lghm cg9n8ir c17zkpvb cjf5b3x",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3",children:c.jsxs(s,{tag:"h4",className:"w-heading c1wch8w6 c1amecmh c1sqpeeh c1esv8r4 c1buvi2o cozxal2 cza6dvq clmfvqm c1y6ewze cyupg9p ccteuyv",children:[c.jsx("b",{className:"w-element c1vdrrvi",children:"2022"}),"",c.jsx("br",{}),"","7ª e 8ª Edição"]})})})})}),c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 cq0agzy cs1clxh cnhqqlh comg1wv ctx9nhv cky5cib cc5kjg8 c137rwa5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge c8348cf c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c1tbqons c6yjhq6 cv3e54v cbbi1o2 c19h3frt cjzsysl cr65dge c1g2p5vi c1o9lghm cg9n8ir c17zkpvb cjf5b3x",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3",children:c.jsxs(s,{tag:"h4",className:"w-heading c1wch8w6 c1amecmh c1sqpeeh c1esv8r4 c1buvi2o cozxal2 cza6dvq clmfvqm c1y6ewze cyupg9p ccteuyv",children:[c.jsx("b",{className:"w-element c1vdrrvi",children:"2023"}),"",c.jsx("br",{}),"","9ª Edição"]})})})})}),c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 cq0agzy cs1clxh cnhqqlh comg1wv ctx9nhv cky5cib cc5kjg8 chw2e72 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge c1mvoq2m c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c1tbqons c6yjhq6 cv3e54v cbbi1o2 c19h3frt cjzsysl cr65dge c1g2p5vi c1o9lghm cg9n8ir c17zkpvb cjf5b3x",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3",children:c.jsxs(s,{tag:"h4",className:"w-heading c1wch8w6 c1amecmh c1sqpeeh c1esv8r4 c1buvi2o cozxal2 cza6dvq clmfvqm c1y6ewze cyupg9p ccteuyv",children:[c.jsx("b",{className:"w-element c1vdrrvi",children:"2024"}),"",c.jsx("br",{}),"","10ª Edição"]})})})})})]}),c.jsx(e,{className:"w-box c15wov26 c1nj050s ceiny2z c1fz63yn c13q6rff ccanaxu cuwsqp1 cou0qx5 c1iv2fzj c15s7m6r c1wfq1tk cq5mgke cgzwweq cgsdqqp c1nlrxig ccr8k56 c1as7qbe cnbw8li c1m38pk2 co6bdqb c1lug3vq c1wqzqlj c1h9qxvl cqrepat cc09j9t c1w8h0gq csinbbw c132rn3l cvrcauy c22ooj7 carqwxc swiper-button-prev",children:c.jsx(i,{className:"w-text",children:"<"})}),c.jsx(e,{className:"w-box c15wov26 c1nj050s ceiny2z c1fz63yn c13q6rff ccanaxu cuwsqp1 cou0qx5 c1iv2fzj c15s7m6r c1wfq1tk cq5mgke cgzwweq cgsdqqp c1rswy0q ctd442x cndhxlr czl4zmf c1nlrxig ccr8k56 cnbw8li c1m38pk2 co6bdqb c1eocxki c1h9qxvl c1w58zid cj1xmvb cvrcauy c132rn3l csinbbw c1w8h0gq carqwxc c22ooj7 swiper-button-next",children:c.jsxs(i,{className:"w-text",children:[">",c.jsx("br",{}),""]})})]})})}),c.jsx(r,{children:c.jsx(l,{children:c.jsx(a,{code:`<!-- Carrega Swiper (apenas uma vez por projeto) -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js" defer><\/script>

<!-- Script para inicializar todos os sliders -->
<script type="module">
  // Espera que o JS de Swiper carregue completamente
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[data-swiper="true"]:not(.swiper-initialized)').forEach((container) => {
      const dataset = container.dataset;

      const options = {
        loop: dataset.loop === 'true',
        slidesPerView: dataset.slidesPerView === 'auto' ? 'auto' : parseFloat(dataset.slidesPerView) || 1,
        autoplay: dataset.autoplay === 'true' ? {
          delay: parseFloat(dataset.autoplayDelay) || 5000,
          disableOnInteraction: false,
        } : false,
        pagination: dataset.pagination === 'true' ? {
          el: container.querySelector('.swiper-pagination'),
          clickable: dataset.paginationClickable === 'true',
        } : false,
        navigation: dataset.nav === 'true' ? {
          nextEl: container.querySelector('.swiper-button-next'),
          prevEl: container.querySelector('.swiper-button-prev'),
        } : false,
      };

      new Swiper(container, options);
    });
  });
<\/script>
`,clientOnly:!0,executeScriptOnCanvas:!0,className:"w-html-embed"})})})]}),c.jsx(e,{className:"w-box c1y5gtuy ctwedid c7oeyb0 cnv3kpj cjukua7 c1k8deyj c15wov26 c45gf4w c25muhi c1o83613 ccanaxu cuwsqp1 c1ugk8yy c17ey6z5 cwfcg58 c1o3lug3 c1qih13m c11bhofh cebyibw",children:c.jsxs(e,{className:"w-box c15wov26 c9vbpot c10c0lh2 cj6cf3e c186wlez cuwsqp1 cu196q0 cw8uura c11x6a24 cbzqoot cgmo5qs",children:[c.jsx(s,{tag:"h1",className:"w-heading cl0htyc c1amecmh c1e9izlp cc1w4m0 c1r0orxz c1a747g2 c77hrx0 c1ryqgs7 c1fxshi",children:"ThinkTank"}),c.jsx("div",{className:"w-element c1uaty07 c1tnm35q cfbeh5 c1d8oa30 c1tdtvjs civrtzc c1i6u13o ccanaxu cuwsqp1 c1b8w41a co0w7fv c10olkz5 c1u4qls7 c1mucm95 c17skwfs c1ov2tmq c117kth5 cs9dmk2 c1qn5x3x c1hzdmj8 cp8q3ji c1vzwd8x c14kc0uq c1w68d12 c13qzozk c9psn18 chnb5xq ctmoo16 ch652vf c1csq4xe",children:"Concurso"}),c.jsxs(p,{className:"w-paragraph c1kxlxba c1k8deyj c1qzbu4v c77hrx0 c1ryqgs7 c1fxshi cnqmnf6",children:["O ",c.jsx("b",{className:"w-element",children:"ThinkTank "}),'é um concurso de ideias inspirado no famoso "SharkTank". ',"",c.jsx("br",{}),"","Este evento visa promover e incentivar projetos universitários , desde projetos individuais a dissertações de mestrado.","",c.jsx("br",{}),"","Os melhores projetos, segundo a mesa de júris,  levam prémios para casa!"]})]})}),c.jsx(e,{className:"w-box c1y5gtuy ctwedid c7oeyb0 cnv3kpj cjukua7 c1rlgl31 c15wov26 c9vbpot c25muhi c1o83613 ccanaxu cuwsqp1 ctungoa c1hkrd9w c50k8h3 cwfcg58 c1o3lug3 c1qih13m c1impmxl c11bhofh c13r6jwb",children:c.jsx(e,{className:"w-box cbxym4n cuwsqp1 c9vbpot c7oeyb0 cnv3kpj cmul90s ctwedid c1y5gtuy cndhdpl c1rmt8l6 c14dvacl",children:c.jsx(e,{className:"w-box c116ipqm ctwedid c1y5gtuy c15wov26 cqdf4j1 ciwrjiz cmk8617 ch2nya0 c14dvacl cckt4qu",children:c.jsxs(e,{"data-slides-per-view":"auto","data-infinite-loop":"false","data-autoplay":"true","data-nav":"true","data-nav-next-el":".swiper-button-next","data-nav-prev-el":".swiper-button-prev","data-swiper":"true","data-slider-speed":"400","data-pagination":"true","data-pagination-el":".swiper-pagination","data-pagination-clickable":"true","data-loop":"false",className:"w-box c1k8deyj cqdf4j1 ctwedid c1y5gtuy cw0elz5 c17cjfq6 c1i23qyj ca5cex8 ce8efsy c9vbpot cbbi1o2 ccanaxu c1610w6h c1a4mrs2 c1onbv7r crwyubp c9ijxr5 c14dvacl meu-slider swiper",children:[c.jsxs(e,{className:"w-box ca0xin3 cqdf4j1 cw0elz5 c19y8trb c15wov26 c186wlez cciowao cmul90s c1af2bwt c1j0ufy2 c1pbvww2 c11t41nt c14dvacl swiper-wrapper",children:[c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 ca0xin3 cewil6n cn85skd comg1wv ct3vvl5 cky5cib c9ijxr5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge c1rpbf7r c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3"})})}),c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 ca0xin3 cewil6n cn85skd comg1wv ct3vvl5 cky5cib c9ijxr5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge czwneug c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g cot8w97",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3"})})}),c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 ca0xin3 cewil6n cn85skd comg1wv ct3vvl5 cky5cib c9ijxr5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge cikhag9 c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g c1m01p8v",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3"})})}),c.jsx(e,{className:"w-box c186r584 cv3e54v cqdf4j1 ca0xin3 cewil6n cn85skd comg1wv ct3vvl5 cky5cib c9ijxr5 c1w68d12 swiper-slide",children:c.jsx(e,{className:"w-box c1f1r4bb cyp6dig c1ei055y cg9t561 c9oecfc c14ju5g2 cvuq1kd cuvwzrk c1610w6h c1a4mrs2 c1onbv7r crwyubp c9vbpot cy5bsi c15wov26 c1s4z1d2 cv3e54v c1i23qyj ca5cex8 c19h3frt cjzsysl cr65dge c1wimyik c1o9lghm cg9n8ir cebb6k7 c1m83a94 c3flwkb c5k6yg1 cclauj9 c1pzkw4r c14wv36g",children:c.jsx(e,{className:"w-box c15wov26 c9vbpot c17bd9r7 c4whvs3"})})})]}),c.jsx(e,{className:"w-box c15wov26 c1nj050s ceiny2z c1fz63yn c13q6rff ccanaxu cuwsqp1 cou0qx5 c1iv2fzj c15s7m6r c1wfq1tk cq5mgke cgzwweq cgsdqqp c1nlrxig ccr8k56 cmu35eb cnbw8li c1m38pk2 co6bdqb c1lug3vq c1wqzqlj c1h9qxvl cqrepat c8fc1eu c1njpbni c1ciulf0 c6u9y17 c1vzmwcb cxuktvt cl7bh8n cq4ga58 swiper-button-prev",children:c.jsx(i,{className:"w-text",children:"<"})}),c.jsx(e,{className:"w-box c15wov26 c1nj050s ceiny2z c1fz63yn c13q6rff ccanaxu cuwsqp1 cou0qx5 c1iv2fzj c15s7m6r c1wfq1tk cq5mgke cgzwweq cgsdqqp c1rswy0q ctd442x cndhxlr czl4zmf c1nlrxig ccr8k56 cnbw8li c1m38pk2 co6bdqb c1ke19ak c1h9qxvl c1w58zid c8fc1eu c1njpbni c1ciulf0 c6u9y17 c1vzmwcb cxuktvt ctus76k cq4ga58 swiper-button-next",children:c.jsxs(i,{className:"w-text",children:[">",c.jsx("br",{}),""]})}),c.jsx("div",{className:"w-element swiper-pagination"})]})})})}),c.jsx(e,{tag:"section",className:"w-box cpv6efc c15jorp4 c1czjpfb",children:c.jsxs(e,{className:"w-box c1y5gtuy ctwedid c4zv7o8 c1yxbcu3 ca0xin3 c1rlgl31 c15wov26 c9vbpot c25muhi c1o83613",children:[c.jsx(e,{className:"w-box c15wov26 c9vbpot c10c0lh2 cj6cf3e ccanaxu cciowao cu196q0",children:c.jsx(p,{className:"w-paragraph c1kxlxba canjkqc c1qzbu4v c1fxshi",children:"Mais algumas atividades do núcleo:"})}),c.jsxs(e,{className:"w-box cpvydg0 cj6cf3e c10c0lh2 c1k7wkk3 ch9s07v cky5twr cg5ox6b c1laqdti",children:[c.jsx(e,{tag:"article",className:"w-box cbnqwg5",children:c.jsxs("div",{className:"w-element c1tdtvjs c1lnn66g caui1qw c15fy44s c1xr5698 c1vtbx6z ccebix2 c15wov26 c9vbpot chwz02u c1n863ed c8yq6mq c1uaty07 c1tnm35q cfbeh5 c1d8oa30 cjlot69 c2nxals c10dk3qn c19q0vyf csxvmwg c3m48cn c1k38943 cbnqwg5 ct5mdaf c1i5h4w5 czjanp8 cndhdpl c1keb4rg c1ligs6m c3j3yi cg5ox6b c11t41nt",children:[c.jsx(e,{className:"w-box c15wov26 c186wlez cuwsqp1 c9vbpot c1e4bhmr c59qywy c1wqzqlj",children:c.jsx(w,{alt:"",src:"/assets/Imagem_WhatsApp_2025-07-15__s_01.03.23_71ef9634_r4lQg0iKbK6ZaWH-eY-Wi.jpg",width:4e3,height:3e3,className:"w-image c17tuecw c3um137 c80549q c5fqvz4"})}),c.jsx(e,{className:"w-box c15wov26 c9vbpot ccanaxu cuwsqp1 c1n863ed c8yq6mq cvob9ce c5ow9n8 crrbr2c",children:c.jsx(s,{tag:"h3",className:"w-heading c1dn7zc3 c1amecmh c1e9izlp cc1w4m0 c1lnn66g cu196q0",children:"Voluntariado"})}),c.jsxs(e,{className:"w-box c15wov26 c9vbpot cxrfyfq clhs76r ccanaxu cuwsqp1 c1q72ioo choius5 cvob9ce c5ow9n8",children:[c.jsx("h1",{className:"w-element cu196q0 c1n7kpmv cexa003 c1txk303",children:" 16 de Junho"}),c.jsx(a,{code:`<!-- Artigo de exemplo -->
<div class="artigo" onclick="openPopup('popupV')">
  <h5>Descobre Mais!</h5>
</div>

<!-- Pop-up -->
<div id="popupV" class="popup">
  <div class="popup-content">
    <button class="close-btn" onclick="closePopup('popupV')">×</button>
 
    <h2 style="margin-bottom: 12px;">Voluntariado Florinhas do Vouga</h2>
    
    <p class="popup-text">
      O espírito de voluntariado continua a mover o Núcleo. A Instituição Particular de Solidariedade Social 
      <strong>Florinhas do Vouga</strong> tinha vários portáteis a precisar de manutenção.
    </p>

    <p class="popup-text">
      Mais do que manutenção, esta ação mostra como cada pequena contribuição pode fazer a diferença no dia a dia de quem mais precisa. 
      Muitas vezes, o voluntariado não se resume a grandes gestos: está também na partilha de tempo e conhecimento.
    </p>
       
    <!-- Imagem destacada -->
    <img src="/assets/v2_Nme2c0kPPxobKyk4Q5rDk.jpg?width=3840&amp;quality=80&amp;format=auto" 
         alt="Voluntariado Florinhas do Vouga" 
         style="width:80%; max-height:250px; object-fit:cover; border-radius:12px; margin-bottom:15px; margin-top:25px; box-shadow:0 4px 12px rgba(0,0,0,0.15);">
    
  </div>
</div>


<script>
  function openPopup(id) {
    document.getElementById(id).style.display = "flex";
  }

  function closePopup(id) {
    document.getElementById(id).style.display = "none";
  }
<\/script>
`,executeScriptOnCanvas:!0,className:"w-html-embed"})]})]})}),c.jsx(e,{tag:"article",className:"w-box",children:c.jsxs("div",{className:"w-element c1tdtvjs c1lnn66g caui1qw c15fy44s c1xr5698 c1vtbx6z ccebix2 c15wov26 c9vbpot chwz02u c1n863ed c8yq6mq c1uaty07 c1tnm35q cfbeh5 c1d8oa30 cjlot69 c2nxals c10dk3qn c19q0vyf csxvmwg c3m48cn c1k38943 cbnqwg5 ct5mdaf c1i5h4w5 czjanp8 cndhdpl c1keb4rg c1ligs6m c3j3yi cg5ox6b c11t41nt",children:[c.jsx(e,{className:"w-box c15wov26 c186wlez cuwsqp1 c9vbpot c1e4bhmr c59qywy c1wqzqlj",children:c.jsx(w,{alt:"",src:"/assets/w1_2gTN4uOIVS7FPgW8yhOcE.png",width:4e3,height:3e3,className:"w-image c17tuecw c3um137 c80549q c5fqvz4"})}),c.jsx(e,{className:"w-box c15wov26 c9vbpot ccanaxu cuwsqp1 c1n863ed c8yq6mq cvob9ce c5ow9n8 crrbr2c",children:c.jsx(s,{tag:"h3",className:"w-heading c1dn7zc3 c1amecmh c1e9izlp cc1w4m0 c1lnn66g cu196q0",children:"Competição Arduino"})}),c.jsxs(e,{className:"w-box c15wov26 c9vbpot cxrfyfq clhs76r ccanaxu cuwsqp1 c1q72ioo choius5 cvob9ce c5ow9n8",children:[c.jsx("h1",{className:"w-element cu196q0 c1n7kpmv cexa003 c1txk303",children:" 7, 14 e 28 de Maio"}),c.jsx(a,{code:`<style>
  /* Fundo do pop-up */
  .popup {
    display: none;
    position: fixed;
    z-index: 9999;
    inset: 0;
    background-color: rgba(0,0,0,0.6);
    justify-content: center;
    align-items: center;
  }

  /* Caixa do conteúdo */
  .popup-content {
    background: #fff;
    padding: 20px 30px;
    border-radius: 16px;
    max-height: 90vh;
    width: 80vw;
    text-align: center;
    position: relative;
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  }

  /* Botão de fechar */
  .close-btn {
    position: absolute;
    top: -15px;
    right: -15px;
    width: 40px;
    height: 40px;
    background: #ff4b5c;
    color: #fff;
    border-radius: 50%;
    font-size: 22px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: transform 0.2s, background 0.3s;
  }
  .close-btn:hover { background:#e63946; transform: rotate(90deg) scale(1.1); }

  /* Cartão */
  .artigo { display:inline-block; width:200px; margin:10px; cursor:pointer; border-radius:12px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1); transition: transform .2s; }
  .artigo:hover { transform: scale(1.05); }
  .artigo h5 { margin:0; padding:5px; text-align:center; background:#f5f5f5; }

  /* Texto do popup (sem inline) */
  .popup-text {
    text-align: justify;
    line-height: 1.25;
    font-size: 15px;
    color: #333;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 24px; /* sem espaço entre 24 e px */
  }

  /* Responsividade */
  @media (max-width: 479px) {
    .popup-content { width: 65vw !important; }
    .popup-text { width: auto !important; }
    .popup-content img { max-width: 100%; height: auto; }
  }
</style>

<div class="artigo" onclick="openPopup('popupCA')">
  <h5>Descobre Mais!</h5>
</div>

<div id="popupCA" class="popup">
  <div class="popup-content">
    <button class="close-btn" onclick="closePopup('popupCA')">×</button>
    <h2 style="margin-bottom:12px;">Competição de Arduino</h2>

    <p class="popup-text">
      A EPS Young Minds e o NeRD realizaram a Competição de Arduino, que decorreu nos dias 
      <strong>7, 14 e 28 de maio</strong>!
      <br><br>
      Os dois primeiros dias foram dedicados à aprendizagem e preparação, onde os participantes 
      tiveram oportunidade de explorar as bases do Arduino e desenvolver as suas competências práticas.
      <br><br>
      O evento culminou no terceiro e último dia, com uma competição em equipas de três elementos, 
      onde cada grupo pôde colocar à prova a sua criatividade e capacidade de resolução de problemas, 
      disputando o título de melhor projeto.
    </p>

    <img src="/assets/IMG-20250602-WA0012_pniii-LoQFZbY-ZnB0hm8.jpg?width=3840&amp;quality=80&amp;format=auto"
         alt="Competição de Arduino"
         style="width:80%; max-height:250px; object-fit:cover; border-radius:12px; margin-bottom:15px; margin-top:25px; box-shadow:0 4px 12px rgba(0,0,0,0.15);">
  </div>
</div>

<script>
  function openPopup(id){ document.getElementById(id).style.display = "flex"; }
  function closePopup(id){ document.getElementById(id).style.display = "none"; }
<\/script>
`,executeScriptOnCanvas:!0,className:"w-html-embed"})]})]})}),c.jsx(e,{tag:"article",className:"w-box cbnqwg5 cv3e54v",children:c.jsxs("div",{className:"w-element c1tdtvjs c1lnn66g caui1qw c15fy44s c1xr5698 c1vtbx6z ccebix2 c15wov26 c9vbpot chwz02u c1n863ed c8yq6mq c1uaty07 c1tnm35q cfbeh5 c1d8oa30 cjlot69 cv3e54v c1duzesn c2nxals c10dk3qn c19q0vyf csxvmwg c3m48cn c1k38943 cbnqwg5 ct5mdaf c1i5h4w5 czjanp8 cndhdpl c1keb4rg c1ligs6m c3j3yi cg5ox6b c11t41nt",children:[c.jsx(e,{className:"w-box c15wov26 c186wlez cuwsqp1 c9vbpot c1e4bhmr c59qywy c1wqzqlj",children:c.jsx(w,{alt:"",src:"/assets/F1_uny2OkHiuFCdnwDP4l7OG.png",width:4e3,height:3e3,className:"w-image c17tuecw c3um137 c80549q c5fqvz4"})}),c.jsx(e,{className:"w-box c15wov26 c9vbpot ccanaxu cuwsqp1 c1n863ed c8yq6mq cvob9ce c5ow9n8",children:c.jsx(s,{tag:"h3",className:"w-heading c1dn7zc3 c1amecmh c1e9izlp cc1w4m0 c1lnn66g cu196q0 c3l8ejn ch0gwpp",children:"Formação LaTex"})}),c.jsx(e,{className:"w-box c15wov26 c9vbpot cxrfyfq clhs76r ccanaxu cuwsqp1 c1q72ioo choius5 cvob9ce c5ow9n8",children:c.jsx("h1",{className:"w-element cu196q0 cexa003 c1txk303",children:" 21 de maio"})}),c.jsx("div",{className:"w-element"})]})})]})]})}),c.jsx(r,{"data-ani-progress":"slide-up","ata-ani-children":"true",children:c.jsxs(l,{children:[c.jsx(e,{tag:"footer",className:"w-box c1xvh3wi .protecao",children:c.jsxs(e,{className:"w-box c1y5gtuy ctwedid c4zv7o8 c1yxbcu3 ca0xin3 c1rlgl31 c15wov26 c9vbpot cj6cf3e c10c0lh2",children:[c.jsx(C,{className:"w-separator c1kqy1la ca0xin3 c1e9izlp cc1w4m0"}),c.jsx(e,{className:"w-box c15wov26 c45gf4w c1n863ed c8yq6mq ccanaxu cuwsqp1",children:c.jsxs(e,{className:"w-box c15wov26 c45gf4w c1b8w41a co0w7fv",children:[c.jsxs(n,{href:"https://www.instagram.com/nerd.aettua",className:"w-link cj4pnyh c1i6u13o c1tdtvjs c14hij5v c1u4qls7 c1mucm95 c17skwfs c1ov2tmq ccanaxu cciowao c1b8w41a co0w7fv cs9dmk2 c1f1r4bb cyp6dig c1ei055y cg9t561 c1dq3r5 cq1libe c1ahkfac cnv3kpj c1tv1qvx c7oeyb0 cp8q3ji c1vzwd8x c5szvso c189r9yc",children:[c.jsx(a,{code:`<svg width="100%" height="100%" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0784 4.08455C16.3013 4.6733 16.4177 5.29782 16.4268 5.92733C16.4732 6.71947 16.4734 6.97854 16.475 8.98365L16.4751 9.01165C16.4751 11.0432 16.4643 11.2968 16.4285 12.0968C16.416 12.7197 16.2988 13.3334 16.0801 13.9155C15.6901 14.92 14.8959 15.715 13.8905 16.105C13.3084 16.3237 12.6939 16.441 12.0727 16.4534C11.2786 16.5 11.0183 16.5 8.98766 16.5H8.98754C6.95682 16.5 6.70319 16.4892 5.90238 16.4534C5.27869 16.4335 4.66416 16.3054 4.08538 16.0792C3.07917 15.6901 2.28501 14.8951 1.895 13.8905C1.67629 13.3076 1.55904 12.6939 1.54657 12.0719C1.5 11.2769 1.5 11.0174 1.5 8.9867C1.5 6.95599 1.51081 6.70236 1.54657 5.90155C1.55821 5.28036 1.67629 4.66582 1.895 4.08455C2.28418 3.07917 3.07917 2.28418 4.08455 1.895C4.66582 1.67629 5.28036 1.55904 5.90155 1.54574C6.6957 1.5 6.95599 1.5 8.9867 1.5C11.0174 1.5 11.2711 1.50998 12.071 1.54574C12.693 1.55904 13.3076 1.67629 13.8889 1.895C14.8942 2.28418 15.6884 3.07917 16.0784 4.08455ZM5.13733 8.98255C5.13733 11.1064 6.85786 12.8269 8.98171 12.8269C11.1039 12.8269 12.8261 11.1064 12.8261 8.98255C12.8261 6.85869 11.1039 5.13816 8.98171 5.13816C6.85786 5.13816 5.13733 6.85869 5.13733 8.98255ZM12.0827 4.99596C12.0827 5.49158 12.4827 5.8924 12.9791 5.8924C13.4739 5.8924 13.8747 5.49158 13.8747 4.99596C13.8747 4.50034 13.4739 4.09951 12.9791 4.09951C12.4827 4.09951 12.0827 4.50034 12.0827 4.99596ZM11.4789 8.98251C11.4789 10.3617 10.3608 11.4797 8.98167 11.4797C7.60248 11.4797 6.48444 10.3617 6.48444 8.98251C6.48444 7.60332 7.60248 6.48528 8.98167 6.48528C10.3608 6.48528 11.4789 7.60332 11.4789 8.98251Z" fill="currentColor"></path>
</svg>
`,className:"w-html-embed c1i6u13o ct6xi25 c1v15jmv"}),c.jsx(i,{tag:"span",className:"w-text",children:"Instagram"})]}),c.jsxs(n,{href:"https://www.instagram.com/nerd.aettua",className:"w-link cj4pnyh c1i6u13o c1tdtvjs c14hij5v c1u4qls7 c1mucm95 c17skwfs c1ov2tmq ccanaxu cciowao c1b8w41a co0w7fv cs9dmk2 c1f1r4bb cyp6dig c1ei055y cg9t561 c1dq3r5 cq1libe c1ahkfac cnv3kpj c1tv1qvx c7oeyb0 cp8q3ji c1vzwd8x c5szvso c189r9yc",children:[c.jsx(a,{code:`<svg width="100%" height="100%" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.5C14.663 1.5 15.2989 1.76339 15.7678 2.23223C16.2366 2.70107 16.5 3.33696 16.5 4V14C16.5 14.663 16.2366 15.2989 15.7678 15.7678C15.2989 16.2366 14.663 16.5 14 16.5H4C3.33696 16.5 2.70107 16.2366 2.23223 15.7678C1.76339 15.2989 1.5 14.663 1.5 14V4C1.5 3.33696 1.76339 2.70107 2.23223 2.23223C2.70107 1.76339 3.33696 1.5 4 1.5H14ZM5.66667 7.33333C5.44565 7.33333 5.23369 7.42113 5.07741 7.57741C4.92113 7.73369 4.83333 7.94565 4.83333 8.16667V12.3333C4.83333 12.5543 4.92113 12.7663 5.07741 12.9226C5.23369 13.0789 5.44565 13.1667 5.66667 13.1667C5.88768 13.1667 6.09964 13.0789 6.25592 12.9226C6.4122 12.7663 6.5 12.5543 6.5 12.3333V8.16667C6.5 7.94565 6.4122 7.73369 6.25592 7.57741C6.09964 7.42113 5.88768 7.33333 5.66667 7.33333ZM8.16667 6.5C7.94565 6.5 7.73369 6.5878 7.57741 6.74408C7.42113 6.90036 7.33333 7.11232 7.33333 7.33333V12.3333C7.33333 12.5543 7.42113 12.7663 7.57741 12.9226C7.73369 13.0789 7.94565 13.1667 8.16667 13.1667C8.38768 13.1667 8.59964 13.0789 8.75592 12.9226C8.9122 12.7663 9 12.5543 9 12.3333V9.28333C9.32511 8.92969 9.7205 8.64784 10.1608 8.45583C10.4383 8.3375 10.8558 8.28917 11.1458 8.38083C11.242 8.40524 11.3277 8.46022 11.39 8.5375C11.4333 8.59583 11.5 8.72583 11.5 9V12.3333C11.5 12.5543 11.5878 12.7663 11.7441 12.9226C11.9004 13.0789 12.1123 13.1667 12.3333 13.1667C12.5543 13.1667 12.7663 13.0789 12.9226 12.9226C13.0789 12.7663 13.1667 12.5543 13.1667 12.3333V9C13.1667 8.44167 13.025 7.945 12.73 7.54667C12.4585 7.18546 12.0786 6.9206 11.6458 6.79083C10.8942 6.555 10.0617 6.68583 9.50583 6.92417C9.32774 7.00039 9.15437 7.08721 8.98667 7.18417C8.95173 6.99216 8.85052 6.8185 8.70066 6.69347C8.55081 6.56844 8.36183 6.49997 8.16667 6.5ZM5.66667 4.83333C5.44565 4.83333 5.23369 4.92113 5.07741 5.07741C4.92113 5.23369 4.83333 5.44565 4.83333 5.66667C4.83333 5.88768 4.92113 6.09964 5.07741 6.25592C5.23369 6.4122 5.44565 6.5 5.66667 6.5C5.88768 6.5 6.09964 6.4122 6.25592 6.25592C6.4122 6.09964 6.5 5.88768 6.5 5.66667C6.5 5.44565 6.4122 5.23369 6.25592 5.07741C6.09964 4.92113 5.88768 4.83333 5.66667 4.83333Z" fill="currentColor"></path>
</svg>
`,className:"w-html-embed c1i6u13o ct6xi25 c1v15jmv"}),c.jsx(i,{tag:"span",className:"w-text",children:"Linkedin"})]})]})}),c.jsx(e,{className:"w-box c15wov26 chwz02u c1n863ed c8yq6mq cac5oxv c10gzqnj c5gt21r c1kgp2mr cky5twr",children:c.jsx(e,{className:"w-box",children:c.jsx(i,{className:"w-text",children:"2025 © NeRD"})})})]})}),c.jsx(r,{children:c.jsxs(l,{children:[c.jsx(a,{code:'<script>(function(factory){if(typeof define==="function"&&define.amd){define(factory)}else if(typeof module!=="undefined"&&module.exports){module.exports=factory()}else{window.enterView=factory.call(this)}})((()=>{const lib=({selector:selector,enter:enter=(()=>{}),exit:exit=(()=>{}),progress:progress=(()=>{}),offset:offset=0,once:once=false})=>{let raf=null;let ticking=false;let elements=[];let height=0;function setupRaf(){raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1e3/60)}}function getOffsetHeight(){if(offset&&typeof offset==="number"){const fraction=Math.min(Math.max(0,offset),1);return height-fraction*height}return height}function updateHeight(){const cH=document.documentElement.clientHeight;const wH=window.innerHeight||0;height=Math.max(cH,wH)}function updateScroll(){ticking=false;const targetFromTop=getOffsetHeight();elements=elements.filter((el=>{const{top:top,bottom:bottom,height:height}=el.getBoundingClientRect();const entered=top<targetFromTop;const exited=bottom<targetFromTop;if(entered&&!el.__ev_entered){enter(el);el.__ev_progress=0;progress(el,el.__ev_progress);if(once)return false}else if(!entered&&el.__ev_entered){el.__ev_progress=0;progress(el,el.__ev_progress);exit(el)}if(entered&&!exited){const delta=(targetFromTop-top)/height;el.__ev_progress=Math.min(1,Math.max(0,delta));progress(el,el.__ev_progress)}if(entered&&exited&&el.__ev_progress!==1){el.__ev_progress=1;progress(el,el.__ev_progress)}el.__ev_entered=entered;return true}));if(!elements.length){window.removeEventListener("scroll",onScroll,true);window.removeEventListener("resize",onResize,true);window.removeEventListener("load",onLoad,true)}}function onScroll(){if(!ticking){ticking=true;raf(updateScroll)}}function onResize(){updateHeight();updateScroll()}function onLoad(){updateHeight();updateScroll()}function selectionToArray(selection){const len=selection.length;const result=[];for(let i=0;i<len;i+=1){result.push(selection[i])}return result}function selectAll(selector,parent=document){if(typeof selector==="string"){return selectionToArray(parent.querySelectorAll(selector))}else if(selector instanceof NodeList){return selectionToArray(selector)}else if(selector instanceof Array){return selector}}function setupElements(){elements=selectAll(selector)}function setupEvents(){window.addEventListener("resize",onResize,true);window.addEventListener("scroll",onScroll,true);window.addEventListener("load",onLoad,true);onResize()}function init(){if(!selector){console.error("must pass selector");return false}setupElements();if(!elements||!elements.length){console.error("no els found");return false}setupRaf();setupEvents();updateScroll()}init()};return lib}));<\/script>',executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),c.jsx(a,{code:`<style>
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
</style>`,className:"w-html-embed"}),c.jsx(a,{code:'<script type="module">\nconst config = {\n	intersectionOffset: 0.2,\n	intersectionOnce: true,\n	progressOffset: 0,\n	progressOnce: false,\n};\nfunction e({trigger:e,selector:r,offset:n,once:s}){const a="progress"===e;return enterView({selector:r,enter:e=>!a&&t(e,"in","out"),exit:e=>!a&&t(e,"out","in"),progress:(e,t)=>a&&function(e,t){e.style.opacity=t,e.style.transform=function(e,t){const r=e.parentElement,n=r&&r.hasAttribute("data-ani-progress")?r.getAttribute("data-ani-progress"):e.getAttribute("data-ani-progress"),s=parseFloat(getComputedStyle(e).getPropertyValue("--ani-slide-offset"))||0,a=parseFloat(getComputedStyle(e).getPropertyValue("--ani-flip-rotate"))||0,o=1-(1-t)*(1-parseFloat(getComputedStyle(e).getPropertyValue("--ani-zoom-out-scale"))||1);switch(n){case"slide-up":return`translateY(${(1-t)*s}px)`;case"slide-down":return`translateY(-${(1-t)*s}px)`;case"slide-left":return`translateX(${(1-t)*s}px)`;case"slide-right":return`translateX(-${(1-t)*s}px)`;case"flip-x":return`rotateX(${(1-t)*a}deg)`;case"flip-y":return`rotateY(${(1-t)*a}deg)`;case"zoom":return`scale(${o})`;default:return"none"}}(e,t)}(e,t),offset:n,once:s})}function t(e,t,r){e.classList.add(t),e.classList.remove(r)}function r(e,t){const r=`[${e}]${t?\'[data-ani-children="true"] > *\':\':not([data-ani-children="true"])\'}`;return Array.from(document.querySelectorAll(r))}const n=[...r("data-ani"),...r("data-ani",!0)],s=[...r("data-ani-progress"),...r("data-ani-progress",!0)];n.length&&e({trigger:"intersection",selector:n,offset:config.intersectionOffset,once:config.intersectionOnce}),s.length&&e({trigger:"progress",selector:s,offset:config.progressOffset,once:config.progressOnce});\n<\/script>',executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})]})})]})}),c.jsx(r,{children:c.jsx(l,{children:c.jsx(a,{code:`<style>
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
`,executeScriptOnCanvas:!1,className:"w-html-embed"})})})]}),M=({data:d})=>{const{system:t,resources:u,url:h}=d;return c.jsx(_.Provider,{value:{imageLoader:v,assetBaseUrl:m,resources:u,breakpoints:E,onError:console.error},children:c.jsx(O,{system:t},h)})},$=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),T=({data:d})=>{const{pageMeta:t}=d,{origin:u}=new URL(d.url),h={"@context":"https://schema.org","@type":"WebSite",name:g,url:u};let x=t.socialImageUrl;t.socialImageAssetName&&(x=`${u}${v({src:`${m}/${t.socialImageAssetName}`})}`);const b=t.custom.some(o=>o.property==="twitter:card");return c.jsxs(c.Fragment,{children:[d.url&&c.jsx("meta",{property:"og:url",content:d.url}),c.jsx("title",{children:t.title}),c.jsx("meta",{property:"og:title",content:t.title}),t.description&&c.jsxs(c.Fragment,{children:[c.jsx("meta",{name:"description",content:t.description}),c.jsx("meta",{property:"og:description",content:t.description})]}),c.jsx("meta",{property:"og:type",content:"website"}),c.jsx("meta",{property:"og:site_name",content:g}),x&&c.jsx("meta",{property:"og:image",content:t.socialImageUrl}),c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(h,null,2)}}),t.excludePageFromSearch&&c.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:f})=>c.jsx("meta",{property:o,content:f},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&b===!1&&c.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),c.jsx("link",{rel:"icon",href:v({src:`${m}${A}`})}),L.map(o=>c.jsx("link",{rel:"preload",href:`${m}${o}`,as:"font",crossOrigin:"anonymous"},o)),I.map(o=>c.jsx("link",{rel:"preload",href:`${m}${o}`,as:"image"},o))]})},V=Object.freeze(Object.defineProperty({__proto__:null,Head:T},Symbol.toStringTag,{value:"Module"})),B={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/atv/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:$}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/atv/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}}};export{B as configValuesSerialized};
