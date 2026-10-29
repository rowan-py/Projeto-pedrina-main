'use strict';

const money = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

const coverBase = 'https://cdn.akamai.steamstatic.com/steam/apps/';

const games = [
    
  {
    id: 'binding-isaac',
    title: 'The Binding of Isaac: Rebirth',
    category: 'Indie / Roguelike',
    genre: 'Indie',
    tags: ['popular'],
    rating: 96,
    reviews: '466k',
    price: 39.99,
    oldPrice: null,
    discount: 0,
    badge: 'ROGUELIKE',
    appId: 250900,
    color: '#603b35',
    glyph: 'ISAAC',
    popularity: 93,
    isNew: false,
    description: 'Enfrente criaturas bizarras, descubra tesouros misteriosos e sobreviva em um roguelike de ação com fases geradas aleatoriamente.'
  }
  ,
  {
    id: 'cyberpunk',
    title: 'Cyberpunk 2077',
    category: 'RPG / Ação',
    genre: 'RPG',
    tags: ['popular', 'deals'],
    rating: 94,
    reviews: '580k',
    price: 89.99,
    oldPrice: 199.90,
    discount: 55,
    badge: 'BEST SELLER',
    appId: 1091500,
    color: '#61402e',
    glyph: '2077',
    popularity: 99,
    isNew: false,
    description: 'Entre na pele de V, um mercenário em busca de um implante único capaz de guardar o segredo da imortalidade. Night City espera por você.'
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    category: 'RPG / Fantasia',
    genre: 'RPG',
    tags: ['popular'],
    rating: 96,
    reviews: '720k',
    price: 174.90,
    oldPrice: null,
    discount: 0,
    badge: 'POPULAR',
    appId: 1245620,
    color: '#5b4c2d',
    glyph: 'ER',
    popularity: 98,
    isNew: false,
    description: 'Explore um vasto mundo de fantasia sombria, enfrente criaturas lendárias e descubra os mistérios das Terras Intermédias.'
  },
  {
    id: 'hades-ii',
    title: 'Hades II',
    category: 'Ação / Roguelike',
    genre: 'Indie',
    tags: ['new', 'popular'],
    rating: 95,
    reviews: '38k',
    price: 74.99,
    oldPrice: null,
    discount: 0,
    badge: 'RECÉM-CHEGADO',
    appId: 1145350,
    color: '#633c44',
    glyph: 'Ⅱ',
    popularity: 95,
    isNew: true,
    description: 'Lute além do Submundo como a Princesa imortal dos mortos neste jogo de ação roguelike, continuação do aclamado Hades.'
  },
  {
    id: 'stardew',
    title: 'Stardew Valley',
    category: 'Indie / Simulação',
    genre: 'Indie',
    tags: ['popular', 'deals'],
    rating: 98,
    reviews: '700k',
    price: 14.99,
    oldPrice: 24.99,
    discount: 40,
    badge: 'QUERIDINHO',
    appId: 413150,
    color: '#466c43',
    glyph: 'SV',
    popularity: 92,
    isNew: false,
    description: 'Herde uma velha fazenda e transforme-a no seu lar. Plante, pesque, faça amizades e descubra tudo o que o vale tem a oferecer.'
  },
  {
    id: 'terraria',
    title: 'Terraria',
    category: 'Aventura / Sandbox',
    genre: 'Sobrevivência',
    tags: ['popular', 'deals'],
    rating: 97,
    reviews: '1m+',
    price: 10.49,
    oldPrice: 19.99,
    discount: 48,
    badge: 'CLÁSSICO',
    appId: 105600,
    color: '#4c7841',
    glyph: 'T',
    popularity: 94,
    isNew: false,
    description: 'Cave, lute, explore e construa. O mundo é seu para moldar — e os perigos também são todos seus.'
  },
  {
    id: 'baldurs-gate',
    title: "Baldur's Gate 3",
    category: 'RPG / Estratégia',
    genre: 'RPG',
    tags: ['popular'],
    rating: 97,
    reviews: '650k',
    price: 199.99,
    oldPrice: null,
    discount: 0,
    badge: 'ESSENCIAL',
    appId: 1086940,
    color: '#563e54',
    glyph: 'BG3',
    popularity: 97,
    isNew: false,
    description: 'Reúna seu grupo e escreva uma história de amizade, traição, sacrifício e sobrevivência nos Reinos Esquecidos.'
  },
  {
    id: 'dead-cells',
    title: 'Dead Cells',
    category: 'Ação / Roguelite',
    genre: 'Ação',
    tags: ['deals'],
    rating: 96,
    reviews: '120k',
    price: 18.49,
    oldPrice: 47.99,
    discount: 61,
    badge: 'PREÇO BAIXO',
    appId: 588650,
    color: '#6d372e',
    glyph: 'DC',
    popularity: 88,
    isNew: false,
    description: 'Um roguelite de ação frenético com combate preciso, caminhos que mudam a cada tentativa e segredos por todos os lados.'
  },
  {
    id: 'rdr2',
    title: 'Red Dead Redemption 2',
    category: 'Aventura / Mundo aberto',
    genre: 'Ação',
    tags: ['popular', 'deals'],
    rating: 93,
    reviews: '430k',
    price: 69.90,
    oldPrice: 299.90,
    discount: 77,
    badge: 'OFERTA BRUTAL',
    appId: 1174180,
    color: '#754b30',
    glyph: 'R★',
    popularity: 96,
    isNew: false,
    description: 'Uma épica história de honra e lealdade no fim da era dos fora da lei, em um mundo aberto vasto e cheio de vida.'
  }
];

const heroSlides = [
  {
    gameId: 'cyberpunk',
    eyebrow: 'DESTAQUE DA SEMANA',
    title: 'UM NOVO<br><span>UNIVERSO</span><br>TE ESPERA.',
    description: 'Histórias inesquecíveis. Mundos sem limites. Sua próxima obsessão começa aqui.',
    meta: '★★★★☆',
    label: 'Altamente recomendado',
    heroImage: 1091500
  },
  {
    gameId: 'elden-ring',
    eyebrow: 'FORJE SUA LENDA',
    title: 'VÁ ALÉM<br>DO <span>IMPOSSÍVEL.</span>',
    description: 'Um mundo vasto, desafios lendários e uma história que deixa marcas.',
    meta: '★★★★★',
    label: 'Aclamado pela crítica',
    heroImage: 1245620
  },
  {
    gameId: 'hades-ii',
    eyebrow: 'NOVO DROP / INDIE',
    title: 'O CAOS<br>É O SEU <span>DESTINO.</span>',
    description: 'Cada tentativa é uma nova história. O Submundo está chamando.',
    meta: '★★★★★',
    label: 'Favorito da comunidade',
    heroImage: 1145350
  }
];

function loadJSON(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function persist(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // O armazenamento pode estar desativado no navegador.
  }
}

const state = {
  filter: 'all',
  search: '',
  sort: 'featured',
  genre: '',
  favoritesOnly: false,
  favorites: loadJSON('vault-favorites', []),
  cart: loadJSON('vault-cart', []),
  heroIndex: 0,
  currentUser: loadJSON('vault-user', null),
  showAll: false,
  slideTimer: null,
  loginMode: 'login'
};

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];

function getGame(id) {
  return games.find(game => game.id === id);
}

function coverURL(game, variant = 'header') {
  if (!game || !game.appId) return '';
  return `${coverBase}${game.appId}/${variant}.jpg`;
}

function safeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function priceMarkup(game, compact = false) {
  if (game.price === 0) {
    return '<span class="current-price price-free">Gratuito</span>';
  }

  const old = game.oldPrice
    ? `<span class="old-price">${money.format(game.oldPrice)}</span>`
    : '';

  const discount = game.discount
    ? `<span class="sale-badge">-${game.discount}%</span>`
    : '';

  return `<span class="price-wrap">
    ${compact ? '' : old}
    <strong class="current-price">${money.format(game.price)}</strong>
  </span>${compact ? '' : discount}`;
}

function toast(title, message, symbol = '✓') {
  const toastNode = document.createElement('div');

  toastNode.className = 'toast';

  toastNode.innerHTML = `
    <span class="toast-symbol">${symbol}</span>
    <div>
      <strong>${safeText(title)}</strong>
      <small>${safeText(message)}</small>
    </div>
  `;

  const region = $('#toastRegion');
  if (!region) return;

  region.append(toastNode);

  window.setTimeout(() => {
    toastNode.style.opacity = '0';
    toastNode.style.transform = 'translateX(12px)';

    window.setTimeout(() => toastNode.remove(), 230);
  }, 3100);
}

function gameCard(game) {
  const isFav = state.favorites.includes(game.id);
  const image = coverURL(game);

  const rank = game.discount
    ? `<span class="game-rank sale-rank">-${game.discount}% OFF</span>`
    : `<span class="game-rank">${safeText(game.badge)}</span>`;

  const categoryLabel = game.category.split(' / ')[0];

  return `
    <article class="game-card" data-game-card="${game.id}">
      <button
        class="game-cover"
        data-details="${game.id}"
        aria-label="Ver detalhes de ${safeText(game.title)}"
        style="--cover-bg:linear-gradient(135deg,${game.color},#0c130e)"
      >
        <span class="cover-fallback">
          <span class="cover-glyph">${safeText(game.glyph)}</span>
        </span>

        <img
          src="${image}"
          alt="Capa de ${safeText(game.title)}"
          loading="lazy"
          onerror="this.style.display='none'"
        >

        ${rank}
        <span class="game-platform">PC / DIGITAL</span>
      </button>

      <button
        class="wishlist-button ${isFav ? 'is-active' : ''}"
        data-favorite="${game.id}"
        aria-label="${isFav ? 'Remover' : 'Adicionar'} ${safeText(game.title)} ${isFav ? 'dos' : 'aos'} favoritos"
        aria-pressed="${isFav}"
      >${isFav ? '♥' : '♡'}</button>

      <div class="game-info">
        <span class="game-category">
          ${safeText(categoryLabel)}${game.isNew ? ' / NOVO' : ''}
        </span>

        <button class="game-title" data-details="${game.id}">
          ${safeText(game.title)}
        </button>

        <div class="game-rating">
          <span class="rating-stars">★★★★★</span>
          <span>${game.rating}%</span>
          <span>· ${safeText(game.reviews)}</span>
        </div>

        <div class="game-card-bottom">
          <div class="price-wrap">
            ${game.oldPrice ? `<span class="old-price">${money.format(game.oldPrice)}</span>` : ''}
            <strong class="current-price ${game.price === 0 ? 'price-free' : ''}">
              ${game.price === 0 ? 'Gratuito' : money.format(game.price)}
            </strong>
          </div>

          ${game.discount ? `<span class="sale-badge">-${game.discount}%</span>` : ''}

          <button
            class="game-add"
            data-add="${game.id}"
            aria-label="Adicionar ${safeText(game.title)} ao carrinho"
          >+</button>
        </div>
      </div>
    </article>
  `;
}

function visibleGames() {
  let list = [...games];

  if (state.filter === 'popular') {
    list = list.filter(game => game.tags.includes('popular'));
  }

  if (state.filter === 'new') {
    list = list.filter(game => game.isNew || game.tags.includes('new'));
  }

  if (state.filter === 'deals') {
    list = list.filter(game => game.discount > 0);
  }

  if (state.genre) {
    list = list.filter(game =>
      game.genre.toLowerCase() === state.genre.toLowerCase() ||
      game.category.toLowerCase().includes(state.genre.toLowerCase())
    );
  }

  if (state.favoritesOnly) {
    list = list.filter(game => state.favorites.includes(game.id));
  }

  if (state.search.trim()) {
    const query = state.search.trim().toLocaleLowerCase('pt-BR');

    list = list.filter(game =>
      `${game.title} ${game.category} ${game.genre} ${game.description}`
        .toLocaleLowerCase('pt-BR')
        .includes(query)
    );
  }

  if (state.sort === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  }

  if (state.sort === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  }

  if (state.sort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  if (state.sort === 'featured') {
    list.sort((a, b) => games.indexOf(a) - games.indexOf(b));
  }

  return list;
}

function renderCatalog() {
  const visible = visibleGames();
  const grid = $('#catalogGrid');

  if (!grid) return;

  const shown = state.showAll ? visible : visible.slice(0, 8);

  grid.innerHTML = shown.map(gameCard).join('');

  $('#emptyState').hidden = visible.length > 0;

  $('#clearSearch').hidden =
    !state.search &&
    !state.genre &&
    !state.favoritesOnly &&
    state.filter === 'all';

  const label = state.favoritesOnly
    ? 'FAVORITOS'
    : state.genre
      ? `GÊNERO: ${state.genre.toUpperCase()}`
      : state.search
        ? 'RESULTADOS DA BUSCA'
        : state.filter === 'deals'
          ? 'EM OFERTA'
          : state.filter === 'new'
            ? 'NOVIDADES'
            : state.filter === 'popular'
              ? 'MAIS POPULARES'
              : 'MOSTRANDO';

  $('#resultsLabel').innerHTML = `
    ${label}
    <strong>
      ${String(visible.length).padStart(2, '0')}
      ${visible.length === 1 ? 'JOGO' : 'JOGOS'}
    </strong>
  `;

  $('#loadMore').hidden = visible.length <= 8;

  $('#loadMore').innerHTML = state.showAll
    ? 'Mostrar menos <span>↑</span>'
    : 'Carregar mais <span>↓</span>';

  $$('.filter-tab').forEach(tab => {
    tab.classList.toggle(
      'selected',
      tab.dataset.filter === state.filter &&
      !state.genre &&
      !state.favoritesOnly
    );
  });

  $('#wishlistCount').textContent = state.favorites.length || '';

  $('#wishlistCount').dataset.zero =
    state.favorites.length === 0 ? 'true' : 'false';
}

function renderDealShowcase() {
  const dealGames = games
    .filter(game => game.discount)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 3);

  $('#dealShowcase').innerHTML = dealGames.map((game, index) => `
    <article
      class="deal-feature-card"
      data-details="${game.id}"
      role="button"
      tabindex="0"
      aria-label="Ver ${safeText(game.title)}"
    >
      <div class="deal-feature-art">
        <img
          src="${coverURL(game)}"
          alt=""
          loading="lazy"
          onerror="this.style.display='none'"
        >
      </div>

      <div class="deal-feature-top">
        <span class="deal-percent">-${game.discount}%</span>
        <span class="deal-top-label">
          ${index === 0 ? 'VAULT PICK' : 'LIMITED DROP'}
        </span>
      </div>

      <div class="deal-feature-text">
        <span>${safeText(game.category.toUpperCase())}</span>
        <h3>${safeText(game.title)}</h3>

        <div class="deal-feature-prices">
          <s>${money.format(game.oldPrice)}</s>
          <strong>${money.format(game.price)}</strong>
        </div>
      </div>
    </article>
  `).join('');
}

function updateHero() {
  const slide = heroSlides[state.heroIndex];
  const game = getGame(slide.gameId);

  $('#heroEyebrow').textContent = slide.eyebrow;
  $('#heroTitle').innerHTML = slide.title;
  $('#heroDescription').textContent = slide.description;

  $('#heroMeta').innerHTML = `
    <span class="platform-chip">PC</span>
    <span>${slide.meta} <small>${slide.label}</small></span>
  `;

  const art = $('#heroArt');

  art.style.backgroundImage = `
    url("${coverBase}${slide.heroImage}/library_hero.jpg"),
    url("${coverBase}${slide.heroImage}/header.jpg"),
    linear-gradient(135deg,${game.color},#0b110c)
  `;

  $('#heroCounter').textContent =
    `${String(state.heroIndex + 1).padStart(2, '0')} / ${String(heroSlides.length).padStart(2, '0')}`;

  $('#heroDots').innerHTML = heroSlides.map((_, i) => `
    <button
      class="hero-dot ${i === state.heroIndex ? 'active' : ''}"
      data-slide="${i}"
      aria-label="Mostrar destaque ${i + 1}"
      aria-pressed="${i === state.heroIndex}"
    ></button>
  `).join('');

  $('#heroPrimary').dataset.details = slide.gameId;
}

function moveHero(delta) {
  state.heroIndex =
    (state.heroIndex + delta + heroSlides.length) % heroSlides.length;

  updateHero();
  resetHeroTimer();
}

function resetHeroTimer() {
  window.clearInterval(state.slideTimer);

  state.slideTimer = window.setInterval(() => {
    state.heroIndex = (state.heroIndex + 1) % heroSlides.length;
    updateHero();
  }, 8500);
}

function persistAndRenderCart() {
  persist('vault-cart', state.cart);

  $('#cartCount').textContent =
    state.cart.reduce((sum, item) => sum + item.qty, 0) || '';

  $('#cartCount').dataset.zero =
    state.cart.length === 0 ? 'true' : 'false';

  renderCart();
}

function addToCart(id) {
  const game = getGame(id);

  if (!game) return;

  const existing = state.cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id, qty: 1 });
  }

  persistAndRenderCart();

  toast('Adicionado ao carrinho', `${game.title} tá na tua lista.`, '+');
}

function removeFromCart(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  persistAndRenderCart();
}

function renderCart() {
  const validItems = state.cart.filter(item => getGame(item.id));

  state.cart = validItems;

  const empty = validItems.length === 0;

  $('#cartEmpty').classList.toggle('is-visible', empty);
  $('#cartSummary').style.display = empty ? 'none' : 'block';
  $('#cartItems').style.display = empty ? 'none' : 'block';

  $('#cartItems').innerHTML = validItems.map(item => {
    const game = getGame(item.id);

    return `
      <div class="cart-item">
        <img
          src="${coverURL(game)}"
          alt=""
          onerror="this.style.display='none'"
        >

        <div class="cart-item-info">
          <strong>${safeText(game.title)}</strong>
          <small>Licença digital para PC · Qtd. ${item.qty}</small>
          <button data-remove="${game.id}">Remover</button>
        </div>

        <strong class="cart-item-price">
          ${money.format(game.price * item.qty)}
        </strong>
      </div>
    `;
  }).join('');

  const subtotal = validItems.reduce(
    (sum, item) => sum + getGame(item.id).price * item.qty,
    0
  );

  const discount = validItems.reduce((sum, item) => {
    const game = getGame(item.id);

    return sum + (
      game.oldPrice
        ? (game.oldPrice - game.price) * item.qty
        : 0
    );
  }, 0);

  $('#cartSubtotal').textContent = money.format(subtotal + discount);
  $('#cartDiscount').textContent = `− ${money.format(discount)}`;
  $('#cartTotal').textContent = money.format(subtotal);

  $('#cartCount').textContent =
    validItems.reduce((sum, item) => sum + item.qty, 0) || '';

  $('#cartCount').dataset.zero = empty ? 'true' : 'false';

  persist('vault-cart', state.cart);
}

function openCart() {
  $('#overlay').hidden = false;
  $('#cartDrawer').classList.add('is-open');
  $('#cartDrawer').setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeCart() {
  $('#overlay').hidden = true;
  $('#cartDrawer').classList.remove('is-open');
  $('#cartDrawer').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function toggleFavorite(id) {
  const game = getGame(id);

  if (!game) return;

  const index = state.favorites.indexOf(id);

  if (index >= 0) {
    state.favorites.splice(index, 1);
    toast('Removido dos favoritos', game.title, '♡');
  } else {
    state.favorites.push(id);
    toast('Salvo nos favoritos', game.title, '♥');
  }

  persist('vault-favorites', state.favorites);
  renderCatalog();

  if (
    !$('#modalWrap').hidden &&
    $('#modalBody').querySelector(`[data-modal-favorite="${id}"]`)
  ) {
    renderProductModal(id);
  }
}

function setFilter(filter) {
  state.filter = filter;
  state.genre = '';
  state.favoritesOnly = false;
  state.showAll = false;

  renderCatalog();
}

function resetFilters() {
  state.filter = 'all';
  state.search = '';
  state.genre = '';
  state.favoritesOnly = false;
  state.sort = 'featured';
  state.showAll = false;

  $('#globalSearch').value = '';
  $('#sortSelect').value = 'featured';

  renderCatalog();
}

function openModal(content) {
  $('#modalBody').innerHTML = content;
  $('#modalWrap').hidden = false;

  document.body.classList.add('modal-open');

  const focusable = $('#modalBody').querySelector('input,button,select,a');

  if (focusable) {
    window.setTimeout(() => focusable.focus(), 30);
  }
}

function closeModal() {
  $('#modalWrap').hidden = true;
  document.body.classList.remove('modal-open');
}

function renderProductModal(id) {
  const game = getGame(id);

  if (!game) return;

  const isFav = state.favorites.includes(id);

  const oldPrice = game.oldPrice
    ? `<s>${money.format(game.oldPrice)}</s>`
    : '';

  openModal(`
    <div class="product-modal-art">
      <img
        src="${coverURL(game, 'library_hero')}"
        alt=""
        onerror="this.onerror=null;this.src='${coverURL(game)}'"
      >
    </div>

    <div class="product-modal-body">
      <span class="game-category">
        ${safeText(game.category.toUpperCase())} / VAULT SELECT
      </span>

      <h2 id="modalTitle">${safeText(game.title)}</h2>

      <div class="game-rating">
        <span class="rating-stars">★★★★★</span>
        <span>${game.rating}% recomendam</span>
        <span>· ${safeText(game.reviews)} avaliações</span>
      </div>

      <p class="product-modal-description">
        ${safeText(game.description)}
      </p>

      <div class="product-modal-meta">
        <span>▣ WINDOWS</span>
        <span>◈ JOGO DIGITAL</span>
        <span>↗ ${game.isNew ? 'LANÇAMENTO' : 'PC GAMING'}</span>
      </div>

      <div class="product-modal-purchase">
        <div class="product-modal-price">
          ${oldPrice}
          <strong>${game.price === 0 ? 'Gratuito' : money.format(game.price)}</strong>
        </div>

        <div style="display:flex;gap:7px;flex-wrap:wrap">
          <button class="button button-outline" data-modal-favorite="${game.id}">
            ${isFav ? '♥ Salvo' : '♡ Favoritar'}
          </button>

          <button class="button button-primary" data-modal-add="${game.id}">
            Adicionar <span>＋</span>
          </button>
        </div>
      </div>
    </div>
  `);
}

function openLogin(mode = 'login') {
  state.loginMode = mode;
  renderLoginModal();
}

function renderLoginModal() {
  const registering = state.loginMode === 'register';

  openModal(`
    <div class="login-modal">
      <div class="modal-brand-mark">V.</div>

      <div class="section-kicker">
        VAULT ID / ${registering ? 'NOVO PLAYER' : 'ACESSO AO SISTEMA'}
      </div>

      <h2 id="modalTitle">
        ${registering ? 'Crie sua conta' : 'Bom te ver de volta'}<span>.</span>
      </h2>

      <p>
        ${registering
          ? 'Monte sua biblioteca, salve favoritos e acompanhe seus jogos.'
          : 'Entre na sua conta VAULT e continue de onde parou.'}
        Este é um acesso demonstrativo, sem servidor.
      </p>

      <form class="modal-form" id="loginForm">
        <label>
          Seu e-mail
          <input
            name="email"
            type="email"
            autocomplete="email"
            placeholder="player@exemplo.com"
            required
          >
        </label>

        <label>
          Senha
          <input
            name="password"
            type="password"
            autocomplete="${registering ? 'new-password' : 'current-password'}"
            minlength="4"
            placeholder="Mínimo de 4 caracteres"
            required
          >
        </label>

        ${registering ? `
          <label>
            Nome de player
            <input
              name="nickname"
              type="text"
              autocomplete="nickname"
              maxlength="24"
              placeholder="Como vamos te chamar?"
              required
            >
          </label>
        ` : ''}

        <button class="button button-primary" type="submit">
          ${registering ? 'Criar conta demonstrativa' : 'Entrar na VAULT'}
          <span>↗</span>
        </button>

        <small>Seus dados ficam apenas nesta demonstração local.</small>
      </form>

      <button class="login-switch" id="loginSwitch">
        ${registering
          ? 'Já tem conta? Entrar'
          : 'Ainda não tem conta? Criar uma conta'}
      </button>
    </div>
  `);
}

function handleLoginSubmit(form) {
  const data = new FormData(form);

  const email = String(data.get('email') || '').trim();

  const nickname =
    String(data.get('nickname') || '').trim() ||
    email.split('@')[0];

  state.currentUser = { email, nickname };

  persist('vault-user', state.currentUser);

  updateLoginButton();
  closeModal();

  toast(
    state.loginMode === 'register'
      ? 'Conta demonstrativa criada'
      : 'Login demonstrativo realizado',
    `Boas-vindas, ${nickname}!`
  );
}

function updateLoginButton() {
  const text = $('#loginButtonText');

  text.textContent = state.currentUser
    ? state.currentUser.nickname.slice(0, 12)
    : 'Entrar';

  $('#loginOpen').title = state.currentUser
    ? `Conectado como ${state.currentUser.email} — clique para sair`
    : 'Entrar na VAULT';
}

function checkout() {
  if (!state.cart.length) return;

  const ref =
    `VLT-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${Date.now().toString().slice(-5)}`;

  closeCart();

  openModal(`
    <div class="checkout-modal">
      <div class="checkout-success">
        <div class="success-symbol">✓</div>

        <div class="section-kicker" style="justify-content:center">
          CHECKOUT / PROTÓTIPO
        </div>

        <h2 id="modalTitle">Tudo certo, <span>player.</span></h2>

        <p>
          Esta é uma simulação de checkout. Nenhum pagamento foi cobrado
          e nenhuma licença real foi emitida.
        </p>

        <div class="checkout-reference">
          REFERÊNCIA DEMO: ${ref}
        </div>

        <p>
          Você testou a experiência de compra da VAULT.  O próximo passo
          para produção seria integrar pagamentos e um backend seguro.
        </p>

        <button
          class="button button-primary"
          id="finishCheckout"
          style="width:100%;justify-content:space-between"
        >
          Voltar à loja <span>↗</span>
        </button>
      </div>
    </div>
  `);

  state.cart = [];
  persistAndRenderCart();
}

function bindEvents() {
  $$('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => setFilter(tab.dataset.filter));
  });

  $('#globalSearch').addEventListener('input', event => {
    state.search = event.target.value;
    state.showAll = true;

    renderCatalog();

    $('#clearSearch').hidden = !state.search;
  });

  $('#sortSelect').addEventListener('change', event => {
    state.sort = event.target.value;
    renderCatalog();
  });

  $('#clearSearch').addEventListener('click', resetFilters);
  $('#resetFilters').addEventListener('click', resetFilters);

  $('#loadMore').addEventListener('click', () => {
    state.showAll = !state.showAll;
    renderCatalog();
  });

  $('#wishlistToggle').addEventListener('click', () => {
    state.favoritesOnly = !state.favoritesOnly;
    state.genre = '';
    state.filter = 'all';
    state.showAll = true;

    renderCatalog();

    document.querySelector('#catalogo').scrollIntoView({
      behavior: 'smooth'
    });

    if (state.favoritesOnly && !state.favorites.length) {
      toast(
        'Lista de desejos vazia',
        'Use o coração nos jogos para salvar seus favoritos.',
        '♡'
      );
    }
  });

  $('#cartToggle').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  $('#overlay').addEventListener('click', closeCart);

  $('#emptyCartBrowse').addEventListener('click', () => {
    closeCart();
    $('#catalogo').scrollIntoView({ behavior: 'smooth' });
  });

  $('#heroPrev').addEventListener('click', () => moveHero(-1));
  $('#heroNext').addEventListener('click', () => moveHero(1));

  $('#heroSecondary').addEventListener('click', () => {
    $('#catalogo').scrollIntoView({ behavior: 'smooth' });
  });

  $('#communityJoin').addEventListener('click', () => {
    if (state.currentUser) {
      toast(
        'Tu já tá na VAULT',
        `Salve teus jogos favoritos, ${state.currentUser.nickname}.`
      );
    } else {
      openLogin('register');
    }
  });

  $('#loginOpen').addEventListener('click', () => {
    if (state.currentUser) {
      const name = state.currentUser.nickname;

      state.currentUser = null;
      persist('vault-user', null);

      updateLoginButton();

      toast('Sessão encerrada', `Até a próxima, ${name}.`);
    } else {
      openLogin('login');
    }
  });

  $('#newsletterForm').addEventListener('submit', event => {
    event.preventDefault();

    const input = $('#newsletterEmail');

    $('#newsletterMessage').textContent =
      'Inscrição demonstrativa registrada neste navegador. Valeu, player!';

    $('#newsletterMessage').style.color = 'var(--green)';

    input.value = '';

    toast(
      'Transmissão ativada',
      'Cadastro demonstrativo realizado.',
      '↗'
    );
  });

  $('#modalWrap').addEventListener('click', event => {
    if (event.target.matches('[data-close-modal]')) {
      closeModal();
    }
  });

  $('#modalBody').addEventListener('submit', event => {
    if (event.target.id === 'loginForm') {
      event.preventDefault();
      handleLoginSubmit(event.target);
    }
  });

  $('#modalBody').addEventListener('click', event => {
    const switchButton = event.target.closest('#loginSwitch');

    if (switchButton) {
      state.loginMode =
        state.loginMode === 'login' ? 'register' : 'login';

      renderLoginModal();
      return;
    }

    const addButton = event.target.closest('[data-modal-add]');

    if (addButton) {
      const id = addButton.dataset.modalAdd;

      closeModal();
      addToCart(id);
      return;
    }

    const favButton = event.target.closest('[data-modal-favorite]');

    if (favButton) {
      toggleFavorite(favButton.dataset.modalFavorite);
    }

    const finishButton = event.target.closest('#finishCheckout');

    if (finishButton) {
      closeModal();

      $('#catalogo').scrollIntoView({ behavior: 'smooth' });

      toast(
        'Bem-vindo de volta',
        'Continue descobrindo sua próxima aventura.'
      );
    }
  });

  document.addEventListener('click', event => {
    const addButton = event.target.closest('[data-add]');

    if (addButton) {
      event.preventDefault();
      event.stopPropagation();
      addToCart(addButton.dataset.add);
      return;
    }

    const favButton = event.target.closest('[data-favorite]');

    if (favButton) {
      event.preventDefault();
      event.stopPropagation();
      toggleFavorite(favButton.dataset.favorite);
      return;
    }

    const detailElement = event.target.closest('[data-details]');

    if (
      detailElement &&
      !event.target.closest('[data-add], [data-favorite]')
    ) {
      renderProductModal(detailElement.dataset.details);
      return;
    }

    const slideButton = event.target.closest('[data-slide]');

    if (slideButton) {
      state.heroIndex = Number(slideButton.dataset.slide);

      updateHero();
      resetHeroTimer();
      return;
    }

    const removeButton = event.target.closest('[data-remove]');

    if (removeButton) {
      removeFromCart(removeButton.dataset.remove);

      toast('Item removido', 'O jogo saiu do carrinho.', '−');
      return;
    }

    const genreButton = event.target.closest('[data-genre]');

    if (genreButton) {
      state.genre = genreButton.dataset.genre;
      state.filter = 'all';
      state.favoritesOnly = false;
      state.showAll = true;

      renderCatalog();

      $('#catalogo').scrollIntoView({ behavior: 'smooth' });
    }
  });

  $('#checkoutButton').addEventListener('click', checkout);

  $('#mobileMenuToggle').addEventListener('click', () => {
    const nav = $('#mainNav');

    const isOpen = nav.classList.toggle('is-open');

    $('#mobileMenuToggle').setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    $('#mobileMenuToggle').setAttribute(
      'aria-label',
      isOpen ? 'Fechar menu' : 'Abrir menu'
    );
  });

  $$('#mainNav a').forEach(link => {
    link.addEventListener('click', () => {
      $('#mainNav').classList.remove('is-open');

      $('#mobileMenuToggle').setAttribute(
        'aria-expanded',
        'false'
      );
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
      closeCart();

      $('#mainNav').classList.remove('is-open');

      $('#mobileMenuToggle').setAttribute(
        'aria-expanded',
        'false'
      );
    }

    if (
      (event.metaKey || event.ctrlKey) &&
      event.key.toLowerCase() === 'k'
    ) {
      event.preventDefault();

      $('#globalSearch').focus();
      $('#globalSearch').select();
    }

    if (
      event.key === 'ArrowRight' &&
      $('#modalWrap').hidden &&
      !$('#cartDrawer').classList.contains('is-open')
    ) {
      moveHero(1);
    }

    if (
      event.key === 'ArrowLeft' &&
      $('#modalWrap').hidden &&
      !$('#cartDrawer').classList.contains('is-open')
    ) {
      moveHero(-1);
    }
  });
}

function startCountdown() {
  let remaining = 8 * 3600 + 42 * 60 + 16;

  const update = () => {
    const hours = Math.floor(remaining / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;

    $('#countdown').innerHTML = `
      <b>${String(hours).padStart(2, '0')}</b>
      <i>:</i>
      <b>${String(minutes).padStart(2, '0')}</b>
      <i>:</i>
      <b>${String(seconds).padStart(2, '0')}</b>
    `;

    remaining = remaining > 0
      ? remaining - 1
      : 8 * 3600 + 42 * 60 + 16;
  };

  update();

  window.setInterval(update, 1000);
}

function init() {
  renderCatalog();
  renderDealShowcase();
  updateHero();
  resetHeroTimer();
  startCountdown();

  updateLoginButton();
  renderCart();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);