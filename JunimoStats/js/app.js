// =========================================
// DATOS BASE DE STARDEW VALLEY (PROVISIONALES FRONTEND)
// =========================================
const SEASON_NAMES = {
  spring: 'Primavera',
  summer: 'Verano',
  fall: 'Otoño',
  winter: 'Invierno'
};

const CROPS_CATALOG = {
  spring: [
    { id: 'parsnip', name: 'Chirivía', seedCost: 20, sellPrice: 35, growDays: 4, regrow: 0, type: 'veg' },
    { id: 'cauliflower', name: 'Coliflor', seedCost: 80, sellPrice: 175, growDays: 12, regrow: 0, type: 'veg' },
    { id: 'potato', name: 'Patata', seedCost: 50, sellPrice: 80, growDays: 6, regrow: 0, type: 'veg' },
    { id: 'strawberry', name: 'Fresa', seedCost: 100, sellPrice: 120, growDays: 8, regrow: 4, type: 'fruit' },
    { id: 'kale', name: 'Col rizada', seedCost: 70, sellPrice: 110, growDays: 6, regrow: 0, type: 'veg' }
  ],
  summer: [
    { id: 'melon', name: 'Melón', seedCost: 80, sellPrice: 250, growDays: 12, regrow: 0, type: 'fruit' },
    { id: 'blueberry', name: 'Arándano', seedCost: 80, sellPrice: 150, growDays: 13, regrow: 4, type: 'fruit' },
    { id: 'starfruit', name: 'Carambola', seedCost: 400, sellPrice: 750, growDays: 13, regrow: 0, type: 'fruit' },
    { id: 'hops', name: 'Lúpulo', seedCost: 60, sellPrice: 25, growDays: 11, regrow: 1, type: 'veg' },
    { id: 'red_cabbage', name: 'Lombarda', seedCost: 100, sellPrice: 260, growDays: 9, regrow: 0, type: 'veg' }
  ],
  fall: [
    { id: 'pumpkin', name: 'Calabaza', seedCost: 100, sellPrice: 320, growDays: 13, regrow: 0, type: 'veg' },
    { id: 'cranberries', name: 'Grosella', seedCost: 240, sellPrice: 150, growDays: 7, regrow: 5, type: 'fruit' },
    { id: 'grape', name: 'Uva', seedCost: 60, sellPrice: 80, growDays: 10, regrow: 3, type: 'fruit' },
    { id: 'artichoke', name: 'Alcachofa', seedCost: 30, sellPrice: 160, growDays: 8, regrow: 0, type: 'veg' },
    { id: 'sweet_gem', name: 'Baya de gema dulce', seedCost: 1000, sellPrice: 3000, growDays: 24, regrow: 0, type: 'fruit' }
  ],
  winter: [
    { id: 'powdermelon', name: 'Melón de polvo', seedCost: 20, sellPrice: 60, growDays: 7, regrow: 0, type: 'fruit' },
    { id: 'winter_seeds', name: 'Semillas invernales', seedCost: 30, sellPrice: 75, growDays: 7, regrow: 0, type: 'veg' }
  ]
};

const VILLAGERS = [
  { name: 'Abigail', birthday: { season: 'fall', day: 13 }, loves: ['Amatista', 'Calabaza', 'Pastel de chocolate', 'Pez globo'] },
  { name: 'Haley', birthday: { season: 'spring', day: 14 }, loves: ['Girasol', 'Coco', 'Pastel rosa', 'Ensalada de frutas'] },
  { name: 'Harvey', birthday: { season: 'winter', day: 14 }, loves: ['Café', 'Vino', 'Encurtidos', 'Aceite de trufa'] },
  { name: 'Leah', birthday: { season: 'winter', day: 23 }, loves: ['Queso de cabra', 'Ensalada', 'Vino', 'Trufa'] },
  { name: 'Sebastian', birthday: { season: 'winter', day: 10 }, loves: ['Lágrima helada', 'Sashimi', 'Obsidiana', 'Huevo sombrío'] },
  { name: 'Shane', birthday: { season: 'spring', day: 20 }, loves: ['Cerveza', 'Pizza', 'Chile picante', 'Pimientos rellenos'] },
  { name: 'Emily', birthday: { season: 'spring', day: 27 }, loves: ['Amatista', 'Esmeralda', 'Lana', 'Tela'] },
  { name: 'Clint', birthday: { season: 'winter', day: 26 }, loves: ['Amatista', 'Esmeralda', 'Lingote de oro', 'Topacio'] }
];

const CC_ITEMS = [
  {
    id: 'catfish',
    name: 'Pez Gato',
    season: 'spring',
    bundle: 'Peces de Río',
    reward: 'Roca Brillante',
    note: 'Río · Solo con lluvia',
    done: false,
    deps: ['Comprar Caña de Fibra de Vidrio en tienda de Willy', 'Esperar día de lluvia en Primavera u Otoño', 'Pescar en el río del pueblo entre 6:00 y 24:00']
  },
  {
    id: 'gold_parsnip',
    name: 'Chirivía Oro (x5)',
    season: 'spring',
    bundle: 'Cultivos de Calidad',
    reward: 'Invernadero',
    note: 'Usar fertilizante básico',
    done: false,
    deps: ['Fabricar Fertilizante Básico con Savia', 'Plantar al menos 25 semillas de Chirivía antes del día 24', 'Cosechar y guardar 5 con estrella de oro']
  },
  {
    id: 'cauliflower',
    name: 'Coliflor',
    season: 'spring',
    bundle: 'Cultivos de Primavera',
    reward: 'Invernadero',
    note: '12 días de crecimiento',
    done: true,
    deps: ['Comprar semilla en Tienda de Pierre (80g)', 'Plantar a más tardar el día 16 de Primavera']
  },
  {
    id: 'pufferfish',
    name: 'Pez Globo',
    season: 'summer',
    bundle: 'Peces Especiales',
    reward: 'Roca Brillante',
    note: 'Océano · 12:00 a 16:00 Soleado',
    done: false,
    deps: ['Subir nivel de Pesca o usar comida con bono de pesca', 'Ir a la playa en un día soleado de Verano entre 12:00 y 16:00']
  },
  {
    id: 'truffle',
    name: 'Trufa',
    season: 'fall',
    bundle: 'Lote del Chef',
    reward: 'Invernadero',
    note: 'Requiere Cerdo adulto',
    done: false,
    deps: ['Construir Granero y mejorarlo a Granero Deluxe con Robin', 'Comprar Cerdo en Rancho de Marnie (16,000g)', 'Esperar 10 días de crecimiento', 'Dejarlo salir en día sin lluvia (Primavera/Verano/Otoño)']
  },
  {
    id: 'nautilus',
    name: 'Caparazón de Nautilo',
    season: 'winter',
    bundle: 'Lote de Investigación',
    reward: 'Vagonetas',
    note: 'Recolección en la playa',
    done: false,
    deps: ['Visitar la playa durante días de Invierno', 'Revisar la arena al este y oeste del puente']
  }
];

// =========================================
// ESTADO DE LA APLICACIÓN
// =========================================
const state = {
  season: 'spring',
  day: 14,
  weather: 'rainy',
  budget: 15000,
  processType: 'raw',
  skills: {
    farming: 'tiller',
    mining: 'none',
    foraging: 'none',
    fishing: 'none',
    combat: 'none'
  },
  activeCropsBySeason: {
    spring: [
      { id: 'parsnip', qty: 30 },
      { id: 'cauliflower', qty: 15 },
      { id: 'strawberry', qty: 20 }
    ],
    summer: [
      { id: 'melon', qty: 20 },
      { id: 'blueberry', qty: 25 },
      { id: 'starfruit', qty: 10 }
    ],
    fall: [
      { id: 'pumpkin', qty: 25 },
      { id: 'cranberries', qty: 20 }
    ],
    winter: [
      { id: 'powdermelon', qty: 20 }
    ]
  },
  chestItems: ['Café', 'Amatista', 'Queso de cabra']
};

// =========================================
// ELEMENTOS DEL DOM
// =========================================
const seasonSelect = document.getElementById('season-select');
const dayInput = document.getElementById('day-input');
const weatherSelect = document.getElementById('weather-select');
const budgetInput = document.getElementById('gold-budget');
const processSelectSummary = document.getElementById('process-type');
const processSelectEcon = document.getElementById('econ-process-type');
const skillFarming = document.getElementById('skill-farming');

// =========================================
// 1. NAVEGACIÓN POR PESTAÑAS
// =========================================
function switchTab(tabId) {
  document.querySelectorAll('.stardew-tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-view').forEach((view) => {
    view.classList.toggle('active', view.id === `view-${tabId}`);
  });
  if (tabId === 'resumen') {
    drawScatterChart();
  }
}

document.querySelectorAll('.stardew-tab').forEach((btn) => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

document.getElementById('reset-view-btn').addEventListener('click', () => switchTab('resumen'));
document.getElementById('goto-cc-btn').addEventListener('click', () => switchTab('centro-comunitario'));
document.getElementById('goto-rel-btn').addEventListener('click', () => switchTab('relaciones'));

// =========================================
// 2. CARGA DE ARCHIVO DE PARTIDA (XML STARDEW)
// =========================================
const saveFileInput = document.getElementById('save-file-input');
const saveFileName = document.getElementById('save-file-name');
const farmDisplayName = document.getElementById('farm-display-name');

saveFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  saveFileName.textContent = `Archivo: ${file.name}`;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parser = new DOMParser();
      const xml = parser.parseFromString(reader.result, 'application/xml');
      const farmNode = xml.querySelector('player > farmName');
      const moneyNode = xml.querySelector('player > money');
      const seasonNode = xml.querySelector('currentSeason');
      const dayNode = xml.querySelector('dayOfMonth');

      if (farmNode && farmNode.textContent) {
        farmDisplayName.textContent = `Granja ${farmNode.textContent}`;
      }
      if (moneyNode && !isNaN(Number(moneyNode.textContent))) {
        state.budget = Number(moneyNode.textContent);
        budgetInput.value = state.budget;
      }
      if (seasonNode && SEASON_NAMES[seasonNode.textContent]) {
        state.season = seasonNode.textContent;
        seasonSelect.value = state.season;
      }
      if (dayNode && !isNaN(Number(dayNode.textContent))) {
        state.day = Math.min(28, Math.max(1, Number(dayNode.textContent)));
        dayInput.value = state.day;
      }
      syncAllViews();
    } catch {
      saveFileName.textContent = `Cargado: ${file.name} (listo para backend)`;
    }
  };
  reader.readAsText(file);
});

// =========================================
// 3. CÁLCULOS DE ECONOMÍA Y CULTIVOS POR ESTACIÓN
// =========================================
function calcCropMetrics(crop, qty) {
  let effectiveGrow = crop.growDays;
  if (state.skills.farming === 'agriculturist') {
    effectiveGrow = Math.max(1, Math.floor(crop.growDays * 0.9));
  }

  let unitSell = crop.sellPrice;
  if (state.processType === 'keg') {
    unitSell = crop.type === 'fruit' ? crop.sellPrice * 3 : Math.round(crop.sellPrice * 2.25);
    if (state.skills.farming === 'artisan') unitSell = Math.round(unitSell * 1.4);
  } else if (state.processType === 'jar') {
    unitSell = crop.sellPrice * 2 + 50;
    if (state.skills.farming === 'artisan') unitSell = Math.round(unitSell * 1.4);
  } else if (state.skills.farming === 'tiller') {
    unitSell = Math.round(unitSell * 1.1);
  }

  const daysRemaining = 28 - state.day;
  const canHarvest = daysRemaining >= effectiveGrow;
  let harvests = 0;
  if (canHarvest) {
    harvests = crop.regrow > 0
      ? 1 + Math.floor((daysRemaining - effectiveGrow) / crop.regrow)
      : 1;
  }

  const totalCost = crop.seedCost * qty;
  const totalRevenue = unitSell * harvests * qty;
  const totalProfit = canHarvest ? totalRevenue - totalCost : -totalCost;
  const profitPerDay = canHarvest
    ? Number(((unitSell * harvests - crop.seedCost) / Math.max(1, daysRemaining)).toFixed(1))
    : 0;
  const lastDayToPlant = 28 - effectiveGrow;

  return {
    effectiveGrow,
    unitSell,
    totalCost,
    totalProfit,
    profitPerDay,
    lastDayToPlant,
    canHarvest
  };
}

function populateCropSelect() {
  const select = document.getElementById('crop-select');
  const allowed = CROPS_CATALOG[state.season] || [];
  select.innerHTML = allowed
    .map((c) => `<option value="${c.id}">${c.name} (${c.seedCost}g · ${c.growDays}d)</option>`)
    .join('');
}

function renderEconomyTable() {
  const tbody = document.getElementById('active-crops-tbody');
  const catalog = CROPS_CATALOG[state.season] || [];
  const activeList = state.activeCropsBySeason[state.season] || [];
  const daysLeft = 28 - state.day;

  document.getElementById('days-left-badge').textContent = `Quedan ${daysLeft} días en ${SEASON_NAMES[state.season]}`;
  document.getElementById('econ-season-pill').textContent = `Solo cultivos de ${SEASON_NAMES[state.season]}`;

  if (activeList.length === 0) {
    tbody.innerHTML = '<tr><td colspan="9">No hay cultivos agregados para esta estación.</td></tr>';
    return;
  }

  let bestCrop = null;
  tbody.innerHTML = activeList.map((entry, idx) => {
    const crop = catalog.find((c) => c.id === entry.id);
    if (!crop) return '';
    const m = calcCropMetrics(crop, entry.qty);

    if (!bestCrop || m.profitPerDay > bestCrop.profitPerDay) {
      bestCrop = { name: crop.name, seedCost: crop.seedCost, profitPerDay: m.profitPerDay };
    }

    return `
      <tr>
        <td><strong>${crop.name}</strong></td>
        <td>${entry.qty}</td>
        <td>${m.totalCost.toLocaleString()}g</td>
        <td>${m.effectiveGrow}d${crop.regrow ? ` (+${crop.regrow}d)` : ''}</td>
        <td>Día ${m.lastDayToPlant}</td>
        <td><strong>${m.profitPerDay}g/día</strong></td>
        <td>${m.totalProfit.toLocaleString()}g</td>
        <td class="${m.canHarvest ? 'status-ok' : 'status-late'}">
          ${m.canHarvest ? 'A tiempo' : 'Fuera de plazo'}
        </td>
        <td><button type="button" class="btn-mini" data-remove-crop="${idx}">Quitar</button></td>
      </tr>
    `;
  }).join('');

  if (bestCrop) {
    document.getElementById('kpi-best-crop').textContent = bestCrop.name;
    document.getElementById('kpi-best-crop-sub').textContent = `+${bestCrop.profitPerDay}g/día · Semilla: ${bestCrop.seedCost}g`;
  }

  tbody.querySelectorAll('[data-remove-crop]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.removeCrop);
      state.activeCropsBySeason[state.season].splice(idx, 1);
      renderEconomyTable();
      drawScatterChart();
    });
  });
}

document.getElementById('add-crop-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const cropId = document.getElementById('crop-select').value;
  const qty = Math.max(1, Number(document.getElementById('crop-qty').value) || 1);
  const list = state.activeCropsBySeason[state.season];
  const existing = list.find((c) => c.id === cropId);

  if (existing) {
    existing.qty += qty;
  } else {
    list.push({ id: cropId, qty });
  }
  renderEconomyTable();
  drawScatterChart();
});

// Gráfica de dispersión ligera en Canvas (sin dependencias externas)
function drawScatterChart() {
  const canvas = document.getElementById('crops-scatter-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const catalog = CROPS_CATALOG[state.season] || [];
  const activeList = state.activeCropsBySeason[state.season] || [];
  const points = activeList
    .map((entry) => {
      const crop = catalog.find((c) => c.id === entry.id);
      if (!crop) return null;
      const m = calcCropMetrics(crop, entry.qty);
      return { name: crop.name, x: crop.seedCost, y: m.profitPerDay };
    })
    .filter(Boolean);

  const pad = 42;
  ctx.strokeStyle = '#7e4926';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pad, 15);
  ctx.lineTo(pad, h - pad);
  ctx.lineTo(w - 20, h - pad);
  ctx.stroke();

  if (points.length === 0) {
    ctx.fillStyle = '#7e4926';
    ctx.font = '20px VT323, monospace';
    ctx.fillText('Agrega cultivos en la pestaña Economía para graficar', pad + 40, h / 2);
    return;
  }

  const maxX = Math.max(100, ...points.map((p) => p.x)) * 1.15;
  const maxY = Math.max(10, ...points.map((p) => p.y)) * 1.2;
  const accentColor = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#d948a0';

  points.forEach((pt) => {
    const px = pad + (pt.x / maxX) * (w - pad - 45);
    const py = h - pad - (pt.y / maxY) * (h - pad - 30);

    ctx.fillStyle = accentColor;
    ctx.fillRect(px - 6, py - 6, 12, 12);
    ctx.strokeStyle = '#5b2b10';
    ctx.strokeRect(px - 6, py - 6, 12, 12);

    ctx.fillStyle = '#441f0b';
    ctx.font = '18px VT323, monospace';
    ctx.fillText(`${pt.name} (${pt.y}g/d)`, px + 10, py + 5);
  });
}

// =========================================
// 4. RELACIONES: COFRE INVERSO, CALCULADORA Y GRAFO
// =========================================
function renderRelations() {
  const tagsBox = document.getElementById('selected-items');
  const resultsBox = document.getElementById('villager-results');
  const summaryBox = document.getElementById('summary-villager-results');

  tagsBox.innerHTML = state.chestItems.map((item, idx) => `
    <span class="inv-tag">${item} <button type="button" data-remove-tag="${idx}" aria-label="Quitar">x</button></span>
  `).join('');

  tagsBox.querySelectorAll('[data-remove-tag]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.chestItems.splice(Number(btn.dataset.removeTag), 1);
      renderRelations();
    });
  });

  const normalized = state.chestItems.map((i) => i.toLowerCase());
  const matches = VILLAGERS.map((v) => {
    const loved = v.loves.filter((gift) => normalized.includes(gift.toLowerCase()));
    return { name: v.name, loved };
  }).filter((m) => m.loved.length > 0);

  const cardsHtml = matches.length
    ? matches.map((m) => `
        <div class="inv-slot villager-slot">
          <strong>${m.name}</strong>
          <span class="match-love">Ama: ${m.loved.join(', ')}</span>
        </div>
      `).join('')
    : '<p class="dep-empty">Agrega ítems como Café, Amatista, Vino o Queso de cabra para encontrar coincidencias.</p>';

  resultsBox.innerHTML = cardsHtml;
  summaryBox.innerHTML = cardsHtml;

  // Actualizar KPI de próximo cumpleaños en la estación
  const seasonBdays = VILLAGERS
    .filter((v) => v.birthday.season === state.season && v.birthday.day >= state.day)
    .sort((a, b) => a.birthday.day - b.birthday.day);
  const nextBday = seasonBdays[0] || VILLAGERS[0];
  document.getElementById('kpi-next-bday').textContent =
    `${nextBday.name} (Día ${nextBday.birthday.day})`;
  document.getElementById('kpi-next-bday-sub').textContent =
    `Ama: ${nextBday.loves.slice(0, 2).join(', ')}`;

  // Red de gustos compartidos
  const sharedMap = {};
  VILLAGERS.forEach((v) => {
    v.loves.forEach((gift) => {
      if (!sharedMap[gift]) sharedMap[gift] = [];
      sharedMap[gift].push(v.name);
    });
  });
  const sharedGrid = document.getElementById('shared-tastes-grid');
  sharedGrid.innerHTML = Object.entries(sharedMap)
    .filter(([, people]) => people.length >= 2)
    .map(([gift, people]) => `
      <div class="inv-slot graph-node-card">
        <span class="graph-node-title">${gift}</span>
        <span class="graph-links">Conecta a: ${people.join(' · ')}</span>
      </div>
    `).join('');
}

function addChestTag() {
  const input = document.getElementById('item-tag-input');
  const val = input.value.trim();
  if (!val) return;
  if (!state.chestItems.some((i) => i.toLowerCase() === val.toLowerCase())) {
    state.chestItems.push(val);
  }
  input.value = '';
  renderRelations();
}

document.getElementById('add-tag-btn').addEventListener('click', addChestTag);
document.getElementById('item-tag-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addChestTag();
  }
});

function updateHeartCalculator() {
  const current = Number(document.getElementById('calc-current-hearts').value) || 0;
  const target = Number(document.getElementById('calc-target-hearts').value) || 8;
  const ptsPerGift = Number(document.getElementById('calc-gift-tier').value) || 80;
  const out = document.getElementById('heart-calc-text');

  if (target <= current) {
    out.textContent = 'Ya alcanzaste esa meta de corazones.';
    return;
  }
  const neededPts = (target - current) * 250;
  const totalGifts = Math.ceil(neededPts / ptsPerGift);
  const weeks = Math.ceil(totalGifts / 2);
  out.textContent = `Necesitas ${neededPts} puntos: aprox. ${totalGifts} regalos (${weeks} semanas dando 2 regalos/semana).`;
}

['calc-villager', 'calc-current-hearts', 'calc-target-hearts', 'calc-gift-tier'].forEach((id) => {
  document.getElementById(id).addEventListener('input', updateHeartCalculator);
});

// =========================================
// 5. CENTRO COMUNITARIO
// =========================================
function renderCommunityCenter() {
  const doneCount = CC_ITEMS.filter((i) => i.done).length;
  const pct = Math.round((doneCount / CC_ITEMS.length) * 100);

  document.getElementById('kpi-cc-progress').textContent = `${pct}%`;
  document.getElementById('kpi-cc-sub').textContent = `${doneCount} de ${CC_ITEMS.length} ítems rastreados`;
  document.getElementById('cc-global-badge').textContent = `${pct}% Completado`;

  // Lista rápida estacional en Resumen
  const seasonalItems = CC_ITEMS.filter((i) => i.season === state.season);
  const summaryList = document.getElementById('seasonal-cc-list');
  summaryList.innerHTML = seasonalItems.map((item) => `
    <li class="${item.done ? 'completed' : ''}">
      <label>
        <input type="checkbox" data-cc-toggle="${item.id}" ${item.done ? 'checked' : ''}>
        <span class="item-info">
          <strong>${item.name}</strong>
          <small>${item.note}</small>
        </span>
      </label>
    </li>
  `).join('');

  // Barras por recompensa
  const rewards = {};
  CC_ITEMS.forEach((item) => {
    if (!rewards[item.reward]) rewards[item.reward] = { total: 0, done: 0 };
    rewards[item.reward].total += 1;
    if (item.done) rewards[item.reward].done += 1;
  });

  document.getElementById('cc-rewards-grid').innerHTML = Object.entries(rewards).map(([reward, stats]) => {
    const rPct = Math.round((stats.done / stats.total) * 100);
    return `
      <div class="inv-slot reward-card">
        <div class="reward-head">
          <span>${reward}</span>
          <span>${rPct}% (${stats.done}/${stats.total})</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${rPct}%"></div>
        </div>
      </div>
    `;
  }).join('');

  // Lista completa filtrable
  const filter = document.getElementById('cc-filter-select').value;
  const filtered = CC_ITEMS.filter((item) => {
    if (filter === 'current') return item.season === state.season;
    if (filter === 'pending') return !item.done;
    return true;
  });

  const fullList = document.getElementById('full-cc-list');
  fullList.innerHTML = filtered.map((item) => `
    <li class="${item.done ? 'completed' : ''}">
      <label>
        <input type="checkbox" data-cc-toggle="${item.id}" ${item.done ? 'checked' : ''}>
        <span class="item-info">
          <strong>${item.name} (${SEASON_NAMES[item.season]})</strong>
          <small>${item.bundle} · ${item.note}</small>
        </span>
      </label>
      <button type="button" class="btn-mini" data-cc-dep="${item.id}">Ver ruta</button>
    </li>
  `).join('');

  document.querySelectorAll('[data-cc-toggle]').forEach((cb) => {
    cb.addEventListener('change', () => {
      const target = CC_ITEMS.find((i) => i.id === cb.dataset.ccToggle);
      if (target) {
        target.done = cb.checked;
        renderCommunityCenter();
      }
    });
  });

  document.querySelectorAll('[data-cc-dep]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = CC_ITEMS.find((i) => i.id === btn.dataset.ccDep);
      if (!target) return;
      document.getElementById('dependency-viewer').innerHTML = `
        <h3 class="dep-title">${target.name} (${target.reward})</h3>
        <ol class="dep-steps">
          ${target.deps.map((step) => `<li>${step}</li>`).join('')}
        </ol>
      `;
    });
  });
}

document.getElementById('cc-filter-select').addEventListener('change', renderCommunityCenter);

// =========================================
// 6. SINCRONIZACIÓN GLOBAL DEL HUD
// =========================================
function syncAllViews() {
  document.body.setAttribute('data-season', state.season);
  const label = SEASON_NAMES[state.season];
  document.getElementById('season-badge').textContent = label;
  document.querySelectorAll('.current-season-label').forEach((el) => {
    el.textContent = label;
  });

  populateCropSelect();
  renderEconomyTable();
  drawScatterChart();
  renderRelations();
  updateHeartCalculator();
  renderCommunityCenter();
}

seasonSelect.addEventListener('change', (e) => {
  state.season = e.target.value;
  syncAllViews();
});

dayInput.addEventListener('input', (e) => {
  state.day = Math.min(28, Math.max(1, Number(e.target.value) || 1));
  renderEconomyTable();
  drawScatterChart();
  renderRelations();
});

weatherSelect.addEventListener('change', (e) => {
  state.weather = e.target.value;
});

budgetInput.addEventListener('input', (e) => {
  state.budget = Math.max(0, Number(e.target.value) || 0);
});

['farming', 'mining', 'foraging', 'fishing', 'combat'].forEach((skillKey) => {
  document.getElementById(`skill-${skillKey}`).addEventListener('change', (e) => {
    state.skills[skillKey] = e.target.value;
    if (skillKey === 'farming') {
      renderEconomyTable();
      drawScatterChart();
    }
  });
});

function syncProcessSelect(val) {
  state.processType = val;
  processSelectSummary.value = val;
  processSelectEcon.value = val;
  renderEconomyTable();
  drawScatterChart();
}

processSelectSummary.addEventListener('change', (e) => syncProcessSelect(e.target.value));
processSelectEcon.addEventListener('change', (e) => syncProcessSelect(e.target.value));

// Inicializar
syncAllViews();