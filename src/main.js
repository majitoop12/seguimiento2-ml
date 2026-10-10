/* ==========================================================================
   SkillPro AI - Main Application Logic & UI Interactivity
   ========================================================================== */

import { SKILLS_CATALOG, FAQ_DATA } from './data.js';
import { generateSkillPlan } from './demo-engine.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFaqAccordion();
  initSkillsChips();
  initDemoForm();
  initExampleLoadButton();
  initFooterYear();
});

/* --------------------------------------------------------------------------
   1. Navbar & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Active link observer
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* --------------------------------------------------------------------------
   2. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqListContainer = document.getElementById('faq-accordion');
  if (!faqListContainer) return;

  faqListContainer.innerHTML = FAQ_DATA.map((item, idx) => `
    <div class="accordion-item ${idx === 0 ? 'active' : ''}">
      <button class="accordion-header" id="faq-head-${idx}" aria-expanded="${idx === 0}">
        <span>${item.question}</span>
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-body">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');

  const accordionHeaders = faqListContainer.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.parentElement;
      const isActive = parentItem.classList.contains('active');

      // Cerrar otros si se desea acordeón exclusivo
      faqListContainer.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        parentItem.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Skills Selector Chips
   -------------------------------------------------------------------------- */
let activeSelectedSkills = new Set(['Programación (JS / Python)', 'Git & GitHub (Control de versiones)']);

function initSkillsChips() {
  const container = document.getElementById('skills-selector-container');
  const customInput = document.getElementById('custom-skill-input');
  const addBtn = document.getElementById('add-custom-skill-btn');

  if (!container) return;

  function renderChips() {
    container.innerHTML = SKILLS_CATALOG.map(skill => {
      const isSelected = activeSelectedSkills.has(skill.name);
      return `
        <button type="button" 
                class="skill-tag-check ${isSelected ? 'active badge-cat-' + skill.category : ''}" 
                data-skill-name="${skill.name}"
                data-category="${skill.category}">
          <span>${isSelected ? '✓' : '+'}</span>
          <span>${skill.name}</span>
        </button>
      `;
    }).join('');

    // Attach listeners
    container.querySelectorAll('.skill-tag-check').forEach(btn => {
      btn.addEventListener('click', () => {
        const skillName = btn.getAttribute('data-skill-name');
        if (activeSelectedSkills.has(skillName)) {
          activeSelectedSkills.delete(skillName);
        } else {
          activeSelectedSkills.add(skillName);
        }
        renderChips();
      });
    });
  }

  renderChips();

  // Custom skill adding
  if (addBtn && customInput) {
    const handleAddCustom = () => {
      const val = customInput.value.trim();
      if (val && !activeSelectedSkills.has(val)) {
        activeSelectedSkills.add(val);
        // Also insert in catalog dynamically
        SKILLS_CATALOG.push({
          id: 'custom-' + Date.now(),
          name: val,
          category: 'hard',
          categoryName: 'Personalizada'
        });
        customInput.value = '';
        renderChips();
        showToast(`Habilidad "${val}" añadida.`);
      }
    };

    addBtn.addEventListener('click', handleAddCustom);
    customInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAddCustom();
      }
    });
  }
}

/* --------------------------------------------------------------------------
   4. Demo Form & Interactive Plan Generation
   -------------------------------------------------------------------------- */
let currentGeneratedPlan = null;

function initDemoForm() {
  const form = document.getElementById('skillpro-demo-form');
  const resultArea = document.getElementById('demo-result-area');
  const submitBtn = document.getElementById('demo-submit-btn');

  if (!form || !resultArea) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const profileNameInput = document.getElementById('demo-profile-name');
    const targetRoleInput = document.getElementById('demo-target-role');
    const weeklyTimeInput = document.getElementById('demo-weekly-time');
    const experienceRadio = document.querySelector('input[name="demo-experience"]:checked');

    let isValid = true;

    // Validación Nombre
    if (!profileNameInput.value.trim()) {
      profileNameInput.classList.add('is-invalid');
      isValid = false;
    } else {
      profileNameInput.classList.remove('is-invalid');
    }

    // Validación Rol
    if (!targetRoleInput.value.trim()) {
      targetRoleInput.classList.add('is-invalid');
      isValid = false;
    } else {
      targetRoleInput.classList.remove('is-invalid');
    }

    // Validación al menos 1 habilidad
    const skillsError = document.getElementById('skills-error-msg');
    if (activeSelectedSkills.size === 0) {
      if (skillsError) skillsError.style.display = 'block';
      isValid = false;
    } else {
      if (skillsError) skillsError.style.display = 'none';
    }

    if (!isValid) {
      showToast('Por favor completa los campos requeridos para generar el plan.');
      return;
    }

    // Loading state en botón
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<div class="spinner"></div> Analizando competencias con SkillPro AI...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      const planData = generateSkillPlan({
        profileName: profileNameInput.value.trim(),
        targetRole: targetRoleInput.value.trim(),
        experienceLevel: experienceRadio ? experienceRadio.value : 'principiante',
        selectedSkills: Array.from(activeSelectedSkills),
        weeklyTime: weeklyTimeInput ? weeklyTimeInput.value : '6-10 horas/semana'
      });

      currentGeneratedPlan = planData;
      renderResultPlan(planData);

      resultArea.classList.add('active');
      resultArea.scrollIntoView({ behavior: 'smooth', block: 'start' });

      showToast('✨ Plan de aprendizaje personalizado generado con éxito.');
    }, 650);
  });
}

/* --------------------------------------------------------------------------
   5. Render Generated Plan Output
   -------------------------------------------------------------------------- */
function renderResultPlan(plan) {
  const resultArea = document.getElementById('demo-result-area');
  if (!resultArea) return;

  resultArea.innerHTML = `
    <!-- Banner de Resumen -->
    <div class="result-card-banner">
      <div class="result-user-meta">
        <h3>Diagnóstico Profesional: ${escapeHtml(plan.profileName)}</h3>
        <p>Objetivo enfocado: <strong>${escapeHtml(plan.targetRole)}</strong> • Dedicación: ${escapeHtml(plan.weeklyTime)}</p>
      </div>
      <div class="result-badges-row">
        <span class="badge badge-tech">${escapeHtml(plan.experienceLevel)}</span>
        <span class="badge badge-ai">Compatibilidad: ${plan.matchScore}%</span>
        <span class="badge badge-soft">Generado: ${plan.generatedAt}</span>
      </div>
    </div>

    <!-- Objetivo Recomendado SMART -->
    <div class="result-block">
      <h4 class="result-block-title">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        Objetivo Recomendado (Formulación SMART)
      </h4>
      <div class="objective-box">
        ${escapeHtml(plan.smartGoal)}
      </div>
    </div>

    <!-- Habilidades Prioritarias -->
    <div class="result-block">
      <h4 class="result-block-title">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        Habilidades Prioritarias y Nivel Objetivo
      </h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
        ${plan.prioritizedSkills.map(sk => `
          <div style="background: var(--color-gray-100); padding: 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--color-gray-300);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
              <strong style="font-size: 0.95rem; color: var(--color-dark-900);">${escapeHtml(sk.name)}</strong>
              <span class="badge badge-tech">${sk.priority}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--color-gray-500); margin-bottom: 0.35rem;">
              <span>Base: ${sk.current}%</span>
              <span>Meta: ${sk.target}%</span>
            </div>
            <div style="height: 6px; background: var(--color-gray-300); border-radius: 99px; overflow: hidden;">
              <div style="width: ${sk.target}%; height: 100%; background: var(--gradient-brand); border-radius: 99px;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Fortalezas vs Aspectos por Mejorar -->
    <div class="result-block">
      <div class="strengths-gaps-grid">
        <div class="analysis-column col-strengths">
          <h4>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Fortalezas Potenciales Detectadas
          </h4>
          <div class="analysis-list">
            ${plan.potentialStrengths.map(st => `
              <div class="analysis-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${escapeHtml(st)}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="analysis-column col-gaps">
          <h4>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Aspectos Críticos por Mejorar (Brechas)
          </h4>
          <div class="analysis-list">
            ${plan.improvementGaps.map(gp => `
              <div class="analysis-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>${escapeHtml(gp)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Actividades Prácticas -->
    <div class="result-block">
      <h4 class="result-block-title">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>
        Actividades Prácticas y Proyectos Sugeridos
      </h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
        ${plan.practicalActivities.map(act => `
          <div class="card" style="padding: 1.5rem;">
            <h5 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--color-dark-900);">${escapeHtml(act.title)}</h5>
            <p style="font-size: 0.875rem; color: var(--color-dark-600);">${escapeHtml(act.desc)}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Plan de Acción Semanal (4 Semanas) -->
    <div class="result-block">
      <h4 class="result-block-title">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Plan de Acción Semanal Estructurado
      </h4>
      <div class="weekly-plan-grid">
        ${plan.weeklyActionPlan.map(wk => `
          <div class="week-card">
            <div class="week-header">
              <span class="week-tag">Semana 0${wk.weekNumber}</span>
            </div>
            <h5>${escapeHtml(wk.title)}</h5>
            <div class="week-tasks">
              ${wk.tasks.map(t => `<div class="week-task-item">${escapeHtml(t)}</div>`).join('')}
            </div>
            <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--color-gray-300); font-size: 0.775rem; color: var(--color-primary); font-weight: 600;">
              🎯 Entregable: ${escapeHtml(wk.deliverable)}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Indicadores de Progreso (KPIs) -->
    <div class="result-block">
      <h4 class="result-block-title">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        Indicadores para Medir el Progreso (KPIs)
      </h4>
      <div class="kpis-grid">
        ${plan.kpis.map(kpi => `
          <div class="kpi-card">
            <div class="kpi-icon">📊</div>
            <div class="kpi-info">
              <strong>${escapeHtml(kpi.label)}: ${escapeHtml(kpi.target)}</strong>
              <span>${escapeHtml(kpi.detail)}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Botones de Acción -->
    <div class="demo-action-buttons">
      <button type="button" class="btn btn-secondary" id="btn-copy-plan">
        📋 Copiar Plan al Portapapeles
      </button>
      <button type="button" class="btn btn-secondary" id="btn-print-plan">
        🖨️ Imprimir / Guardar en PDF
      </button>
      <button type="button" class="btn btn-outline-white" style="color: var(--color-dark-800); border-color: var(--color-gray-400);" id="btn-reset-plan">
        🔄 Realizar Otro Diagnóstico
      </button>
    </div>
  `;

  // Attach button events
  const copyBtn = document.getElementById('btn-copy-plan');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyPlanToClipboard(plan);
    });
  }

  const printBtn = document.getElementById('btn-print-plan');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  const resetBtn = document.getElementById('btn-reset-plan');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resultArea.classList.remove('active');
      document.getElementById('skillpro-demo-form').reset();
      document.getElementById('demo-profile-name').focus();
      showToast('Formulario restablecido para un nuevo diagnóstico.');
    });
  }
}

/* --------------------------------------------------------------------------
   6. Cargar Ejemplo Práctico Universitario en el Formulario
   -------------------------------------------------------------------------- */
function initExampleLoadButton() {
  const btn = document.getElementById('btn-load-example-case');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const profileNameInput = document.getElementById('demo-profile-name');
    const targetRoleInput = document.getElementById('demo-target-role');
    const expIntermedio = document.querySelector('input[name="demo-experience"][value="principiante"]');
    const weeklyTimeInput = document.getElementById('demo-weekly-time');

    if (profileNameInput) profileNameInput.value = 'Estudiante de Ingeniería Informática';
    if (targetRoleInput) targetRoleInput.value = 'Desarrollador de Software Junior';
    if (expIntermedio) expIntermedio.checked = true;
    if (weeklyTimeInput) weeklyTimeInput.value = '6 a 10 horas/semana';

    // Set skills from prompt example
    activeSelectedSkills = new Set([
      'Programación (JS / Python)',
      'Bases de Datos (SQL / NoSQL)',
      'Git & GitHub (Control de versiones)',
      'Resolución de Problemas Complejos',
      'Comunicación Asertiva',
      'Trabajo en Equipo'
    ]);

    // Rerender selector chips
    initSkillsChips();

    // Scroll to demo
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }

    showToast('Caso de estudio universitario cargado en el formulario.');
  });
}

/* --------------------------------------------------------------------------
   7. Clipboard & Helpers
   -------------------------------------------------------------------------- */
function copyPlanToClipboard(plan) {
  const text = `
========================================
SKILLPRO AI - PLAN DE APRENDIZAJE PERSONALIZADO
========================================
Perfil: ${plan.profileName}
Objetivo: ${plan.targetRole}
Nivel: ${plan.experienceLevel}
Dedicación: ${plan.weeklyTime}
Fecha: ${plan.generatedAt}

OBJETIVO RECOMENDADO (SMART):
${plan.smartGoal}

HABILIDADES PRIORITARIAS:
${plan.prioritizedSkills.map(s => `- ${s.name} (Prioridad: ${s.priority}, Meta: ${s.target}%)`).join('\n')}

FORTALEZAS IDENTIFICADAS:
${plan.potentialStrengths.map(s => `✓ ${s}`).join('\n')}

BRECHAS POR MEJORAR:
${plan.improvementGaps.map(g => `! ${g}`).join('\n')}

CRONOGRAMA SEMANAL:
${plan.weeklyActionPlan.map(w => `[Semana ${w.weekNumber}: ${w.title}]\n${w.tasks.map(t => '  * ' + t).join('\n')}\n  Entregable: ${w.deliverable}`).join('\n\n')}

INDICADORES CLAVE (KPIs):
${plan.kpis.map(k => `- ${k.label}: ${k.target} (${k.detail})`).join('\n')}
========================================
SkillPro AI - "Aprende. Practica. Demuestra tu talento."
  `.trim();

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('📋 Plan copiado al portapapeles con éxito.');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast('📋 Plan copiado al portapapeles.');
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span style="font-size: 1.25rem;">⚡</span>
    <span>${escapeHtml(message)}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function initFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
