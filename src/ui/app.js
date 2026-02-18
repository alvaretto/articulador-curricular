// app.js — Articulador Curricular EBC - Main Application
// Router hash + rendering + event handlers

const EJE_SHORT_LABELS = {
  'Pensamiento Numérico y Sistemas Numéricos': 'Numérico',
  'Pensamiento Espacial y Sistemas Geométricos': 'Espacial',
  'Pensamiento Métrico y Sistemas de Medidas': 'Métrico',
  'Pensamiento Aleatorio y Sistemas de Datos': 'Aleatorio',
  'Pensamiento Variacional y Sistemas Algebraicos': 'Variacional',
  'Producción Textual': 'Producción',
  'Comprensión e Interpretación Textual': 'Comprensión',
  'Literatura': 'Literatura',
  'Medios de Comunicación y Otros Sistemas Simbólicos': 'Medios',
  'Ética de la Comunicación': 'Ética',
  'Entorno Vivo': 'Entorno Vivo',
  'Entorno Físico': 'Entorno Físico',
  'Ciencia, Tecnología y Sociedad': 'CTS',
  'Me Aproximo al Conocimiento como Científico Natural': 'Método Científico',
  'Relaciones con la Historia y las Culturas': 'Historia',
  'Relaciones Espaciales y Ambientales': 'Territorio',
  'Relaciones Ético-Políticas': 'Ético-Político'
};

const App = {
  state: {
    area: null,
    grupo: null,
    eje: null,
    grado: null,
    periodo: null,
    vista: 'home', // home | area | plan | busqueda | config
    sidebarOpen: false,
    iaPanelOpen: false,
    searchQuery: ''
  },

  init() {
    this.restoreState();
    this.bindEvents();
    this.applyTheme();
    this.render();
    window.addEventListener('hashchange', () => this.onHashChange());
    this.onHashChange();
  },

  // === THEME ===
  applyTheme() {
    const prefs = Storage.getPreferencias();
    if (prefs.tema === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else if (prefs.tema === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
  },

  toggleTheme() {
    const prefs = Storage.getPreferencias();
    const temas = ['auto', 'dark', 'light'];
    const idx = temas.indexOf(prefs.tema || 'auto');
    prefs.tema = temas[(idx + 1) % 3];
    Storage.setPreferencias(prefs);
    this.applyTheme();
    this.updateThemeIcon();
  },

  updateThemeIcon() {
    const prefs = Storage.getPreferencias();
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = prefs.tema === 'dark' ? '☽' : prefs.tema === 'light' ? '☀' : '◐';
  },

  // === ROUTING ===
  onHashChange() {
    const hash = location.hash.slice(1) || '/';
    const parts = hash.split('/').filter(Boolean);

    if (parts[0] === 'area' && parts[1]) {
      this.state.vista = 'area';
      this.state.area = parts[1];
      this.state.grupo = parts[2] || '8-9';
      this.state.eje = parts[3] || null;
    } else if (parts[0] === 'plan' && parts[1]) {
      this.state.vista = 'plan';
      this.state.grado = parts[1];
      this.state.periodo = parseInt(parts[2]) || 1;
      this.state.area = 'matematicas';
    } else if (parts[0] === 'busqueda') {
      this.state.vista = 'busqueda';
      this.state.searchQuery = decodeURIComponent(parts[1] || '');
    } else if (parts[0] === 'config') {
      this.state.vista = 'config';
    } else {
      this.state.vista = 'home';
    }

    this.saveState();
    this.render();
  },

  navigate(hash) {
    location.hash = hash;
  },

  // === STATE PERSISTENCE ===
  saveState() {
    Storage.setUltimaVista({ area: this.state.area, grupo: this.state.grupo, eje: this.state.eje });
  },

  restoreState() {
    const last = Storage.getUltimaVista();
    if (last) {
      this.state.area = last.area;
      this.state.grupo = last.grupo;
      this.state.eje = last.eje;
    }
  },

  // === EVENTS ===
  bindEvents() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) return;
      const action = target.dataset.action;
      const val = target.dataset.value;

      switch (action) {
        case 'toggle-theme': this.toggleTheme(); break;
        case 'toggle-sidebar':
          this.state.sidebarOpen = !this.state.sidebarOpen;
          this.updateSidebar();
          break;
        case 'close-sidebar':
          this.state.sidebarOpen = false;
          this.updateSidebar();
          break;
        case 'navigate': this.navigate(val); break;
        case 'toggle-ia':
          this.state.iaPanelOpen = !this.state.iaPanelOpen;
          this.updateIAPanel();
          break;
        case 'export-pdf': exportarPDF(); break;
        case 'export-json':
          const data = prepararDatosExportacion({ tipo: this.state.vista, area: this.state.area, grupo: this.state.grupo, grado: this.state.grado, periodo: this.state.periodo });
          if (data) exportarJSON(data);
          break;
        case 'open-config': this.navigate('#/config'); break;
        case 'ia-action': this.handleIAAction(val); break;
        case 'ia-gemini': this.handleIAGemini(val); break;
      }
    });

    // Search input
    document.addEventListener('input', (e) => {
      if (e.target.id === 'search-input') {
        this.handleSearch(e.target.value);
      }
    });

    // Select changes
    document.addEventListener('change', (e) => {
      if (e.target.id === 'select-ciclo') this.onCicloChange(e.target.value);
      if (e.target.id === 'select-grupo') this.onGrupoChange(e.target.value);
      if (e.target.id === 'select-area') this.onAreaChange(e.target.value);
      if (e.target.id === 'select-eje') this.onEjeChange(e.target.value);
    });
  },

  // === FILTER HANDLERS ===
  onCicloChange(ciclo) {
    const grupos = getGruposPorCiclo(ciclo);
    this.state.grupo = grupos[0] || '8-9';
    this.navigate(`#/area/${this.state.area || 'matematicas'}/${this.state.grupo}`);
  },

  onGrupoChange(grupo) {
    this.state.grupo = grupo;
    this.navigate(`#/area/${this.state.area || 'matematicas'}/${grupo}${this.state.eje ? '/' + this.state.eje : ''}`);
  },

  onAreaChange(area) {
    this.state.area = area;
    document.body.setAttribute('data-area', area);
    this.navigate(`#/area/${area}/${this.state.grupo || '8-9'}`);
  },

  onEjeChange(eje) {
    this.state.eje = eje || null;
    this.navigate(`#/area/${this.state.area}/${this.state.grupo}${eje ? '/' + eje : ''}`);
  },

  // === SEARCH ===
  handleSearch(query) {
    const results = document.getElementById('search-results');
    if (!results) return;

    if (query.length < 2) {
      results.innerHTML = '';
      results.style.display = 'none';
      return;
    }

    const items = buscarTodo(query);
    if (items.length === 0) {
      results.innerHTML = '<div class="search-result-item"><span class="text-muted text-sm">Sin resultados</span></div>';
      results.style.display = 'block';
      return;
    }

    results.innerHTML = items.slice(0, 8).map(item => `
      <div class="search-result-item" data-action="navigate" data-value="#/area/${item.area}/${item.grupo || gradoAGrupoEBC(item.grado)}">
        <span class="search-result-type">${item.tipo.toUpperCase()} · ${AREAS_EBC[item.area]?.nombre || item.area}</span>
        <div class="search-result-text">${highlightText(item.texto, query)}</div>
        <span class="badge badge-muted">${item.grupo || 'Grado ' + item.grado}</span>
      </div>
    `).join('');
    results.style.display = 'block';
  },

  // === IA HANDLERS ===
  async handleIAAction(tipo) {
    const resultado = await ejecutarIA(tipo, {
      area: this.state.area,
      grado: this.state.grado || (this.state.grupo ? grupoAGrados(this.state.grupo)[0] : 8),
      periodo: this.state.periodo || 1,
      plan: getPlanPeriodo(String(this.state.grado || 8), this.state.periodo || 1)
    });

    if (!resultado || resultado.error) {
      this.showIAResponse(resultado?.error || 'Error desconocido');
      return;
    }

    // Show token estimate
    this.updateTokenEstimate(resultado.tokensEstimados);

    // Execute
    const resp = await resultado.ejecutar();
    if (resp.error) {
      this.showIAResponse(`Error: ${resp.mensaje}`);
    } else {
      this.showIAResponse(resp.texto);
    }
  },

  handleIAGemini(tipo) {
    const resultado = ejecutarIA(tipo, {
      area: this.state.area,
      grado: this.state.grado || 8,
      periodo: this.state.periodo || 1,
      plan: getPlanPeriodo(String(this.state.grado || 8), this.state.periodo || 1)
    });

    // ejecutarIA is sync for prompt building
    if (resultado.then) {
      resultado.then(r => {
        if (r.prompt) IA.abrirEnGemini(r.prompt);
      });
    }
  },

  showIAResponse(texto) {
    const el = document.getElementById('ia-response');
    if (el) {
      el.textContent = texto;
      el.classList.remove('loading');
    }
  },

  updateTokenEstimate(tokens) {
    const fill = document.getElementById('ia-token-fill');
    const label = document.getElementById('ia-token-label');
    if (fill) fill.style.width = Math.min(tokens / 10, 100) + '%';
    if (label) label.textContent = `~${tokens} tokens`;
  },

  updateSidebar() {
    const sidebar = document.querySelector('.app-sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    if (sidebar) sidebar.classList.toggle('open', this.state.sidebarOpen);
    if (backdrop) backdrop.classList.toggle('open', this.state.sidebarOpen);
  },

  updateIAPanel() {
    const panel = document.querySelector('.ia-panel');
    if (panel) panel.classList.toggle('open', this.state.iaPanelOpen);
  },

  // === MAIN RENDER ===
  render() {
    document.body.setAttribute('data-area', this.state.area || 'matematicas');
    this.updateThemeIcon();

    const main = document.getElementById('main-content');
    if (!main) return;

    switch (this.state.vista) {
      case 'home': main.innerHTML = this.renderHome(); break;
      case 'area': main.innerHTML = this.renderArea(); break;
      case 'plan': main.innerHTML = this.renderPlan(); break;
      case 'busqueda': main.innerHTML = this.renderBusqueda(); break;
      case 'config': main.innerHTML = this.renderConfig(); break;
    }

    this.renderSidebar();
  },

  // === VIEW: HOME ===
  renderHome() {
    const inst = Storage.getInstitucion();
    return `
      <div class="print-header">
        <div class="print-header-title">Articulador Curricular EBC</div>
        <div class="print-header-subtitle">${inst.nombre || 'MEN Colombia'} · ${new Date().getFullYear()}</div>
      </div>

      <h1 class="section-title">Diseño Curricular con EBC</h1>
      <p class="section-description">
        Navegue los Estándares Básicos de Competencias del MEN, analice la progresión vertical entre grados
        y genere articulaciones curriculares personalizadas. Seleccione un área para comenzar.
      </p>

      <div class="areas-grid">
        ${this.renderAreaCards()}
      </div>

      ${this.renderQuickFilters()}

      <div class="ia-panel" id="ia-panel-home">
        <div class="ia-panel-header" data-action="toggle-ia">
          <div class="ia-panel-title"><span class="ia-dot"></span> Inteligencia Pedagógica</div>
          <span class="badge badge-ia">Gemini</span>
        </div>
        <div class="ia-panel-body">
          <p class="text-sm text-secondary mb-4">
            Configure su API key de Gemini para obtener articulaciones personalizadas, o use el botón "Abrir en Gemini" para consultas sin costo.
          </p>
          <div class="flex gap-2">
            <button class="btn btn-secondary btn-sm" data-action="open-config">Configurar API Key</button>
            <button class="btn btn-ia btn-sm" data-action="ia-gemini" data-value="sugerenciaPedagogica">
              Abrir en Gemini
            </button>
          </div>
        </div>
      </div>
    `;
  },

  renderAreaCards() {
    return Object.entries(AREAS_EBC).map(([id, info]) => {
      const ejes = getEjesDeArea(id);
      return `
        <div class="area-card card-accent ${id.split('-')[0]}" data-action="navigate" data-value="#/area/${id}/8-9" style="--accent: var(--${id === 'matematicas' ? 'mat' : id === 'lenguaje' ? 'len' : id === 'ciencias-naturales' ? 'nat' : 'soc'})">
          <div class="area-card-icon">${info.icon}</div>
          <div class="area-card-name">${info.nombre}</div>
          <div class="chip-group mt-2">
            ${ejes.slice(0, 3).map(e => {
              const label = EJE_SHORT_LABELS[e.nombre] || e.nombre.split(' ')[0];
              return '<span class="badge badge-muted">' + label + '</span>';
            }).join('')}
            ${ejes.length > 3 ? `<span class="badge badge-muted">+${ejes.length - 3}</span>` : ''}
          </div>
          <div class="area-card-count mt-2">${ejes.length} ejes · 5 grupos de grados</div>
        </div>
      `;
    }).join('');
  },

  renderQuickFilters() {
    return `
      <div class="card mt-4">
        <div class="card-header">
          <span class="card-title">Acceso Rápido por Grado</span>
        </div>
        <div class="card-body">
          <div class="filter-bar" style="border:none; padding:0; background:none;">
            <div class="select-wrap">
              <label class="select-label">Ciclo</label>
              <select class="select" id="select-ciclo">
                ${Object.entries(CICLOS).map(([id, c]) => `<option value="${id}">${c.nombre}</option>`).join('')}
              </select>
            </div>
            <div class="select-wrap">
              <label class="select-label">Área</label>
              <select class="select" id="select-area">
                ${Object.entries(AREAS_EBC).map(([id, a]) => `<option value="${id}">${a.nombre}</option>`).join('')}
              </select>
            </div>
            <button class="btn btn-primary" onclick="App.navigate('#/area/' + document.getElementById('select-area').value + '/' + getGruposPorCiclo(document.getElementById('select-ciclo').value)[0])">
              Ver Estándares
            </button>
          </div>

          <div class="flex gap-2 mt-4" style="flex-wrap:wrap">
            ${['8','9','10','11'].map(g => `
              <button class="btn btn-secondary btn-sm" data-action="navigate" data-value="#/plan/${g}/1">
                Plan Matemáticas ${g}°
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // === VIEW: AREA (EBC + Articulación) ===
  renderArea() {
    const area = this.state.area || 'matematicas';
    const grupo = this.state.grupo || '8-9';
    const eje = this.state.eje;
    const info = AREAS_EBC[area];
    const ejes = getEjesDeArea(area);
    const estandarGeneral = getEstandarGeneral(area, grupo);

    return `
      <div class="print-header">
        <div class="print-header-title">${info?.nombre || area} — EBC Grupo ${grupo}</div>
        <div class="print-header-subtitle">Articulador Curricular EBC · MEN Colombia</div>
      </div>

      <div class="flex items-center justify-between" style="flex-wrap:wrap; gap:var(--sp-3)">
        <h1 class="section-title">${info?.nombre || area}</h1>
        <div class="flex gap-2">
          <button class="btn btn-secondary btn-sm" data-action="export-pdf">Exportar PDF</button>
          <button class="btn btn-secondary btn-sm" data-action="export-json">Exportar JSON</button>
        </div>
      </div>

      <!-- Filtros -->
      <div class="filter-bar">
        <div class="select-wrap">
          <label class="select-label">Grupo de Grados</label>
          <select class="select" id="select-grupo">
            ${GRUPOS_EBC_ORDEN.map(g => `<option value="${g}" ${g === grupo ? 'selected' : ''}>Grados ${g}</option>`).join('')}
          </select>
        </div>
        <div class="select-wrap">
          <label class="select-label">Eje / Pensamiento</label>
          <select class="select" id="select-eje">
            <option value="">Todos los ejes</option>
            ${ejes.map(e => `<option value="${e.id}" ${e.id === eje ? 'selected' : ''}>${e.nombre}</option>`).join('')}
          </select>
        </div>
      </div>

      <!-- Estándar General -->
      ${estandarGeneral ? `
        <div class="card card-accent">
          <div class="card-body">
            <div class="text-xs font-bold uppercase text-muted mb-2">Estándar General — Grados ${grupo}</div>
            <p class="text-secondary" style="line-height:var(--leading-loose)">${estandarGeneral}</p>
          </div>
        </div>
      ` : ''}

      <!-- Estándares por eje -->
      ${this.renderEstandaresPorEje(area, grupo, eje, ejes)}

      <!-- Articulación Vertical -->
      <h2 class="section-title mt-4">Articulación Vertical</h2>
      <p class="section-description">Progresión de estándares entre grupos de grados: cómo evoluciona cada eje desde grados anteriores hacia los siguientes.</p>
      ${this.renderArticulacionVertical(area, grupo, eje, ejes)}

      <!-- DBA del grupo -->
      ${this.renderDBAGrupo(area, grupo)}

      <!-- Panel IA -->
      ${this.renderIAPanel()}
    `;
  },

  renderEstandaresPorEje(area, grupo, ejeFiltro, ejes) {
    const ejesToRender = ejeFiltro ? ejes.filter(e => e.id === ejeFiltro) : ejes;

    return ejesToRender.map(eje => {
      const ests = getEstandares(area, grupo, eje.id);
      if (!ests.length) return '';
      return `
        <div class="card card-accent mt-4" style="border-left-color: ${eje.color}">
          <div class="card-header">
            <div>
              <span class="card-title">${eje.nombre}</span>
              <span class="badge badge-muted ml-2">${ests.length} estándares</span>
            </div>
            <span class="chip-dot" style="background:${eje.color}; width:10px; height:10px; border-radius:50%; display:inline-block;"></span>
          </div>
          <div class="card-body">
            ${ests.map(e => `<div class="estandar-item">${e}</div>`).join('')}
          </div>
        </div>
      `;
    }).join('');
  },

  renderArticulacionVertical(area, grupo, ejeFiltro, ejes) {
    const ejeTarget = ejeFiltro || (ejes[0]?.id);
    if (!ejeTarget) return '<div class="empty-state"><p class="empty-state-text">Seleccione un eje para ver la articulación vertical.</p></div>';

    // Tabs for ejes
    const tabs = `
      <div class="tabs mb-4">
        ${ejes.map(e => `
          <button class="tab ${e.id === ejeTarget ? 'active' : ''}"
                  onclick="App.navigate('#/area/${area}/${grupo}/${e.id}')">
            ${EJE_SHORT_LABELS[e.nombre] || e.nombre}
          </button>
        `).join('')}
      </div>
    `;

    const prog = getProgresionVertical(area, ejeTarget, grupo);
    if (!prog) return tabs + '<div class="empty-state"><p class="empty-state-text">No hay datos de progresión para este eje.</p></div>';

    return tabs + `
      <div class="articulacion-panel">
        ${prog.anterior ? `
          <div class="articulacion-col anterior">
            <div class="articulacion-col-header">
              <span class="grupo-label">Grados ${prog.anterior.grupo}</span>
              <span class="grupo-badge text-muted">Anterior</span>
            </div>
            <div class="articulacion-col-body">
              ${prog.anterior.estandares.map(e => `<div class="estandar-item">${e}</div>`).join('')}
            </div>
          </div>
        ` : `
          <div class="articulacion-col anterior">
            <div class="articulacion-empty">Inicio del ciclo escolar</div>
          </div>
        `}

        <div class="articulacion-col actual">
          <div class="articulacion-col-header">
            <span class="grupo-label">Grados ${prog.actual.grupo}</span>
            <span class="grupo-badge badge badge-accent">Actual</span>
          </div>
          <div class="articulacion-col-body">
            ${prog.actual.estandares.map(e => `<div class="estandar-item highlight">${e}</div>`).join('')}
          </div>
        </div>

        ${prog.siguiente ? `
          <div class="articulacion-col siguiente">
            <div class="articulacion-col-header">
              <span class="grupo-label">Grados ${prog.siguiente.grupo}</span>
              <span class="grupo-badge text-muted">Siguiente</span>
            </div>
            <div class="articulacion-col-body">
              ${prog.siguiente.estandares.map(e => `<div class="estandar-item">${e}</div>`).join('')}
            </div>
          </div>
        ` : `
          <div class="articulacion-col siguiente">
            <div class="articulacion-empty">Fin del ciclo escolar</div>
          </div>
        `}
      </div>
    `;
  },

  renderDBAGrupo(area, grupo) {
    const grados = grupoAGrados(grupo);
    const dbaItems = grados.flatMap(g => {
      const dbas = getDBA(area, String(g));
      return dbas.map(d => ({ grado: g, texto: d }));
    });

    if (!dbaItems.length) return '';

    return `
      <div class="card mt-4">
        <div class="card-header">
          <span class="card-title">DBA — Derechos Básicos de Aprendizaje</span>
          <span class="badge badge-muted">Grados ${grupo}</span>
        </div>
        <div class="card-body">
          ${dbaItems.map(d => `
            <div class="estandar-item">
              <span class="badge badge-accent mb-2">${d.grado}°</span>
              ${d.texto}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // === VIEW: PLAN DE PERIODO ===
  renderPlan() {
    const grado = this.state.grado || '8';
    const periodo = this.state.periodo || 1;
    const planGrado = getPlanGrado(grado);
    const plan = getPlanPeriodo(grado, periodo);

    if (!planGrado || !plan) {
      return `
        <div class="empty-state">
          <div class="empty-state-icon">📋</div>
          <div class="empty-state-title">Plan no disponible</div>
          <p class="empty-state-text">Los planes de periodo detallados están disponibles para Matemáticas grados 8° a 11°.</p>
          <button class="btn btn-primary mt-4" data-action="navigate" data-value="#/">Volver al inicio</button>
        </div>
      `;
    }

    return `
      <div class="print-header">
        <div class="print-header-title">Plan de Periodo — Matemáticas ${grado}° · Periodo ${periodo}</div>
        <div class="print-header-subtitle">${Storage.getInstitucion().nombre || 'Articulador Curricular EBC'}</div>
      </div>

      <div class="flex items-center justify-between" style="flex-wrap:wrap; gap:var(--sp-3)">
        <div>
          <h1 class="section-title">Matemáticas ${grado}° — Periodo ${periodo}</h1>
          <p class="text-sm text-secondary">${planGrado.objetivo}</p>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-secondary btn-sm" data-action="export-pdf">PDF</button>
          <button class="btn btn-secondary btn-sm" data-action="export-json">JSON</button>
        </div>
      </div>

      <!-- Tabs de periodos -->
      <div class="tabs">
        ${[1,2,3,4].map(p => `
          <button class="tab ${p === periodo ? 'active' : ''}" data-action="navigate" data-value="#/plan/${grado}/${p}">
            Periodo ${p}
          </button>
        `).join('')}
      </div>

      <!-- Info general -->
      <div class="flex gap-4 mt-4" style="flex-wrap:wrap">
        <span class="badge badge-muted">${plan.semanas} semanas</span>
        <span class="badge badge-muted">${plan.horasSemana} h/semana</span>
        <span class="badge badge-muted">${plan.horasTotales} horas total</span>
        ${plan.tiposPensamiento.map(t => `<span class="badge badge-accent">${t}</span>`).join('')}
      </div>

      <!-- Plan Grid -->
      <div class="plan-grid mt-4">
        <!-- Estándares -->
        <div class="plan-section plan-section-full">
          <div class="plan-section-title">Estándares EBC</div>
          <ul class="plan-list">
            ${plan.estandares.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>

        <!-- DBA -->
        <div class="plan-section">
          <div class="plan-section-title">DBA</div>
          <p class="text-sm text-secondary" style="line-height:var(--leading-loose)">${plan.dba}</p>
        </div>

        <!-- Diagnóstico -->
        <div class="plan-section">
          <div class="plan-section-title">Diagnóstico</div>
          <p class="text-sm text-secondary" style="line-height:var(--leading-loose)">${plan.diagnostico}</p>
        </div>

        <!-- Ejes temáticos -->
        <div class="plan-section">
          <div class="plan-section-title">Ejes Temáticos</div>
          <ul class="plan-list">
            ${plan.ejesTematicos.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>

        <!-- Pregunta problema -->
        <div class="plan-section">
          <div class="plan-section-title">Pregunta Problema</div>
          <p class="text-sm text-secondary" style="line-height:var(--leading-loose); font-style:italic">${plan.preguntaProblema}</p>
        </div>

        <!-- Competencias ICFES -->
        <div class="plan-section plan-section-full">
          <div class="plan-section-title">Competencias ICFES</div>
          <div class="icfes-grid">
            <div class="icfes-item">
              <div class="icfes-item-label">Razonamiento</div>
              <div class="icfes-item-text">${plan.competenciasICFES.razonamiento}</div>
            </div>
            <div class="icfes-item">
              <div class="icfes-item-label">Comunicación</div>
              <div class="icfes-item-text">${plan.competenciasICFES.comunicacion}</div>
            </div>
            <div class="icfes-item">
              <div class="icfes-item-label">Resolución de Problemas</div>
              <div class="icfes-item-text">${plan.competenciasICFES.resolucionProblemas}</div>
            </div>
          </div>
        </div>

        <!-- Evidencias -->
        <div class="plan-section">
          <div class="plan-section-title">Evidencias de Aprendizaje</div>
          <ul class="plan-list">
            ${plan.evidenciasAprendizaje.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>

        <!-- Matriz de referencia -->
        <div class="plan-section">
          <div class="plan-section-title">Matriz de Referencia ICFES</div>
          <div class="text-sm text-secondary">
            <p><strong>Componente:</strong> ${plan.matrizReferencia.componente}</p>
            <p><strong>Competencia:</strong> ${plan.matrizReferencia.competencia}</p>
            <p class="mt-2"><strong>Afirmaciones:</strong></p>
            <ul class="plan-list">${plan.matrizReferencia.afirmaciones.map(a => `<li>${a}</li>`).join('')}</ul>
          </div>
        </div>

        <!-- Estrategias -->
        <div class="plan-section">
          <div class="plan-section-title">Estrategias Metodológicas</div>
          <ul class="plan-list">
            ${plan.estrategiasMetodologicas.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>

        <!-- Materiales -->
        <div class="plan-section">
          <div class="plan-section-title">Materiales Educativos</div>
          <ul class="plan-list">
            ${plan.materialesEducativos.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>

        <!-- Evaluación -->
        <div class="plan-section plan-section-full">
          <div class="plan-section-title">Criterios de Evaluación</div>
          <div class="icfes-grid">
            <div class="icfes-item">
              <div class="icfes-item-label">Saber (${plan.criteriosEvaluacion.porcentajes.saber}%)</div>
              ${plan.criteriosEvaluacion.saber.map(s => `<div class="icfes-item-text">· ${s}</div>`).join('')}
            </div>
            <div class="icfes-item">
              <div class="icfes-item-label">Hacer (${plan.criteriosEvaluacion.porcentajes.hacer}%)</div>
              ${plan.criteriosEvaluacion.hacer.map(s => `<div class="icfes-item-text">· ${s}</div>`).join('')}
            </div>
            <div class="icfes-item">
              <div class="icfes-item-label">Ser (${plan.criteriosEvaluacion.porcentajes.ser}%)</div>
              ${plan.criteriosEvaluacion.ser.map(s => `<div class="icfes-item-text">· ${s}</div>`).join('')}
            </div>
          </div>
          <div class="eval-bars mt-4">
            <div class="eval-bar">
              <div class="eval-bar-track"><div class="eval-bar-fill saber" style="width:${plan.criteriosEvaluacion.porcentajes.saber}%"></div></div>
              <div class="eval-bar-label">Saber</div>
              <div class="eval-bar-pct">${plan.criteriosEvaluacion.porcentajes.saber}%</div>
            </div>
            <div class="eval-bar">
              <div class="eval-bar-track"><div class="eval-bar-fill hacer" style="width:${plan.criteriosEvaluacion.porcentajes.hacer}%"></div></div>
              <div class="eval-bar-label">Hacer</div>
              <div class="eval-bar-pct">${plan.criteriosEvaluacion.porcentajes.hacer}%</div>
            </div>
            <div class="eval-bar">
              <div class="eval-bar-track"><div class="eval-bar-fill ser" style="width:${plan.criteriosEvaluacion.porcentajes.ser}%"></div></div>
              <div class="eval-bar-label">Ser</div>
              <div class="eval-bar-pct">${plan.criteriosEvaluacion.porcentajes.ser}%</div>
            </div>
          </div>
        </div>

        <!-- Competencia ciudadana -->
        <div class="plan-section plan-section-full">
          <div class="plan-section-title">Competencia Ciudadana</div>
          <p class="text-sm text-secondary" style="line-height:var(--leading-loose)">${plan.competenciaCiudadana}</p>
        </div>
      </div>

      <!-- Panel IA -->
      ${this.renderIAPanel()}

      <!-- Nav entre grados -->
      <div class="flex justify-between mt-4">
        ${parseInt(grado) > 8 ? `<button class="btn btn-ghost" data-action="navigate" data-value="#/plan/${parseInt(grado)-1}/${periodo}">← Grado ${parseInt(grado)-1}°</button>` : '<span></span>'}
        ${parseInt(grado) < 11 ? `<button class="btn btn-ghost" data-action="navigate" data-value="#/plan/${parseInt(grado)+1}/${periodo}">Grado ${parseInt(grado)+1}° →</button>` : '<span></span>'}
      </div>
    `;
  },

  // === VIEW: CONFIG ===
  renderConfig() {
    const inst = Storage.getInstitucion();
    const prefs = Storage.getPreferencias();

    return `
      <h1 class="section-title">Configuración</h1>

      <div class="card mt-4">
        <div class="card-header"><span class="card-title">Institución Educativa</span></div>
        <div class="card-body">
          <div class="plan-grid" style="gap:var(--sp-3)">
            <div class="form-group">
              <label class="form-label">Nombre</label>
              <input class="form-input" id="cfg-nombre" value="${inst.nombre}" placeholder="IE Pedacito de Cielo A.U.V">
            </div>
            <div class="form-group">
              <label class="form-label">Código DANE</label>
              <input class="form-input" id="cfg-dane" value="${inst.dane}" placeholder="163401000298">
            </div>
            <div class="form-group">
              <label class="form-label">Municipio</label>
              <input class="form-input" id="cfg-municipio" value="${inst.municipio}" placeholder="La Tebaida">
            </div>
            <div class="form-group">
              <label class="form-label">Departamento</label>
              <input class="form-input" id="cfg-depto" value="${inst.departamento}" placeholder="Quindío">
            </div>
          </div>
          <button class="btn btn-primary mt-4" onclick="Storage.setInstitucion({nombre:document.getElementById('cfg-nombre').value,dane:document.getElementById('cfg-dane').value,municipio:document.getElementById('cfg-municipio').value,departamento:document.getElementById('cfg-depto').value,jornada:'manana',annoLectivo:2026}); App.showToast('Institución guardada')">
            Guardar Institución
          </button>
        </div>
      </div>

      <div class="card mt-4">
        <div class="card-header"><span class="card-title">Inteligencia Artificial</span></div>
        <div class="card-body">
          <p class="text-sm text-secondary mb-4">
            Ingrese su API key de Google Gemini para usar las funciones de IA. Es gratuita (1M tokens/mes).
            <a href="https://aistudio.google.com/apikey" target="_blank">Obtener API key gratis →</a>
          </p>
          <div class="form-group">
            <label class="form-label">API Key de Gemini</label>
            <input class="form-input" id="cfg-apikey" type="password" value="${prefs.apiKeyGemini || ''}" placeholder="AIza...">
          </div>
          <div class="flex gap-2">
            <button class="btn btn-primary" onclick="Storage.setApiKey(document.getElementById('cfg-apikey').value); App.showToast('API key guardada')">
              Guardar API Key
            </button>
            <button class="btn btn-secondary" onclick="IA.verificarApiKey(document.getElementById('cfg-apikey').value).then(ok => App.showToast(ok ? 'API key válida' : 'API key inválida'))">
              Verificar
            </button>
          </div>
        </div>
      </div>

      <div class="card mt-4">
        <div class="card-header"><span class="card-title">Datos</span></div>
        <div class="card-body">
          <div class="flex gap-2">
            <button class="btn btn-secondary btn-sm" onclick="exportarJSON(Storage.exportarTodo(), 'articulador-backup.json')">Exportar configuración</button>
            <button class="btn btn-ghost btn-sm" onclick="if(confirm('¿Borrar toda la configuración?')) { Storage.limpiarTodo(); App.showToast('Configuración borrada'); }">Limpiar datos</button>
          </div>
        </div>
      </div>
    `;
  },

  // === VIEW: BÚSQUEDA ===
  renderBusqueda() {
    const query = this.state.searchQuery;
    const resultados = query ? buscarTodo(query) : [];

    return `
      <h1 class="section-title">Búsqueda</h1>
      <p class="section-description">Busque estándares EBC, DBA y contenidos en todas las áreas.</p>

      <div class="search-container">
        <span class="search-icon">🔍</span>
        <input class="search-input" id="search-page-input" value="${query}" placeholder="Buscar estándares, DBA, competencias...">
      </div>

      ${resultados.length > 0 ? `
        <p class="text-sm text-muted mt-4">${resultados.length} resultado${resultados.length > 1 ? 's' : ''}</p>
        ${resultados.slice(0, 20).map(r => `
          <div class="card card-accent mt-2" data-action="navigate" data-value="#/area/${r.area}/${r.grupo || gradoAGrupoEBC(r.grado)}" style="cursor:pointer">
            <div class="card-body">
              <div class="flex gap-2 mb-2">
                <span class="badge badge-${r.area === 'matematicas' ? 'mat' : r.area === 'lenguaje' ? 'len' : r.area === 'ciencias-naturales' ? 'nat' : 'soc'}">${AREAS_EBC[r.area]?.nombre || r.area}</span>
                <span class="badge badge-muted">${r.tipo.toUpperCase()}</span>
                <span class="badge badge-muted">${r.grupo || 'Grado ' + r.grado}</span>
              </div>
              <p class="text-sm text-secondary">${r.texto}</p>
            </div>
          </div>
        `).join('')}
      ` : query ? '<p class="text-muted mt-4">Sin resultados para "' + query + '"</p>' : ''}
    `;
  },

  // === SHARED: IA Panel ===
  renderIAPanel() {
    return `
      <div class="ia-panel mt-4" id="ia-panel">
        <div class="ia-panel-header" data-action="toggle-ia">
          <div class="ia-panel-title"><span class="ia-dot"></span> Inteligencia Pedagógica</div>
          <div class="flex gap-2 items-center">
            <span class="badge badge-ia">Gemini</span>
            <span class="text-muted text-xs">${Storage.getApiKey() ? 'Conectado' : 'Sin API key'}</span>
          </div>
        </div>
        <div class="ia-panel-body">
          <div class="ia-actions">
            <div class="ia-action-btn" data-action="ia-action" data-value="diferenciacion">
              <div class="ia-action-btn-title">Diferenciación NEE</div>
              <div class="ia-action-btn-desc">Actividades adaptadas para necesidades educativas especiales</div>
            </div>
            <div class="ia-action-btn" data-action="ia-action" data-value="preguntasICFES">
              <div class="ia-action-btn-title">Preguntas ICFES</div>
              <div class="ia-action-btn-desc">Generar preguntas tipo Saber 11 alineadas al estándar</div>
            </div>
            <div class="ia-action-btn" data-action="ia-action" data-value="interdisciplinar">
              <div class="ia-action-btn-title">Conexión Interdisciplinar</div>
              <div class="ia-action-btn-desc">Proyectos integradores entre dos áreas EBC</div>
            </div>
            <div class="ia-action-btn" data-action="ia-action" data-value="sugerenciaPedagogica">
              <div class="ia-action-btn-title">Sugerencia Pedagógica</div>
              <div class="ia-action-btn-desc">Estrategias didácticas innovadoras para el tema actual</div>
            </div>
          </div>

          <div class="ia-token-estimate">
            <span>Tokens estimados:</span>
            <div class="ia-token-bar"><div class="ia-token-fill" id="ia-token-fill" style="width:0%"></div></div>
            <span id="ia-token-label">~0</span>
          </div>

          <div class="ia-response" id="ia-response">Seleccione una acción para generar contenido con IA.</div>

          <div class="ia-fallback" data-action="ia-gemini" data-value="sugerenciaPedagogica">
            Sin API key? → Abrir en Gemini (gratis, sin configuración)
          </div>
        </div>
      </div>
    `;
  },

  // === SIDEBAR ===
  renderSidebar() {
    const sidebar = document.getElementById('sidebar-nav');
    if (!sidebar) return;

    sidebar.innerHTML = `
      <div class="sidebar-section">
        <div class="search-container">
          <span class="search-icon">🔍</span>
          <input class="search-input" id="search-input" placeholder="Buscar estándares...">
          <div class="search-results" id="search-results" style="display:none"></div>
        </div>
      </div>

      <div class="sidebar-label">Navegación</div>
      <ul class="sidebar-nav">
        <li class="sidebar-item ${this.state.vista === 'home' ? 'active' : ''}" data-action="navigate" data-value="#/">
          <span class="sidebar-item-icon">🏠</span> Inicio
        </li>
      </ul>

      <div class="sidebar-label">Áreas EBC</div>
      <ul class="sidebar-nav">
        ${Object.entries(AREAS_EBC).map(([id, info]) => `
          <li class="sidebar-item ${this.state.area === id && this.state.vista === 'area' ? 'active' : ''}" data-action="navigate" data-value="#/area/${id}/${this.state.grupo || '8-9'}">
            <span class="sidebar-dot ${id === 'matematicas' ? 'mat' : id === 'lenguaje' ? 'len' : id === 'ciencias-naturales' ? 'nat' : 'soc'}"></span>
            ${info.nombre}
          </li>
        `).join('')}
      </ul>

      <div class="sidebar-label">Planes de Periodo</div>
      <ul class="sidebar-nav">
        ${['8','9','10','11'].map(g => `
          <li class="sidebar-item ${this.state.grado === g && this.state.vista === 'plan' ? 'active' : ''}" data-action="navigate" data-value="#/plan/${g}/1">
            <span class="sidebar-item-icon">📋</span> Matemáticas ${g}°
          </li>
        `).join('')}
      </ul>

      <div class="sidebar-label" style="margin-top:auto">Sistema</div>
      <ul class="sidebar-nav">
        <li class="sidebar-item ${this.state.vista === 'config' ? 'active' : ''}" data-action="navigate" data-value="#/config">
          <span class="sidebar-item-icon">⚙</span> Configuración
        </li>
      </ul>
    `;
  },

  // === TOAST ===
  showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
};

// === HELPERS ===
function highlightText(text, query) {
  if (!query) return text;
  const words = query.split(/\s+/).filter(w => w.length > 1);
  let result = text;
  for (const word of words) {
    const re = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    result = result.replace(re, '<mark>$1</mark>');
  }
  return result;
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => App.init());
