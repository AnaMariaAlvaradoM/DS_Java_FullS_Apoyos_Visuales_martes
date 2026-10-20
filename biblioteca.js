(function () {
  'use strict';
  const list = document.getElementById('lista-guias');
  const el = (tag, cls, value) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (value) node.textContent = value;
    return node;
  };
  function card(lesson, number) {
    const node = el(lesson.guia ? 'a' : 'div', 'clase' + (lesson.guia ? '' : ' clase--pendiente'));
    if (lesson.guia) node.setAttribute('href', lesson.guia);
    node.append(el('span', 'num', number));
    const info = el('span', 'clase-info');
    info.append(el('span', 'clase-titulo', number === 'W' ? 'Cierre · 4 horas' : 'Clase ' + Number(number)), el('span', 'clase-temas', lesson.titulo));
    node.append(info);
    if (lesson.guia) node.append(el('span', 'flecha', '→'));
    else node.setAttribute('aria-label', lesson.titulo + '. Guía pendiente de publicación.');
    return node;
  }
  window.CURSO.modulos.forEach((module, index) => {
    const details = el('details', 'modulo');
    const summary = el('summary');
    const info = el('span', 'mod-info');
    info.append(el('span', 'mod-titulo', 'Módulo ' + (index + 1)), el('span', 'mod-meta', module.titulo));
    const published = module.clases.filter(c => c.guia).length;
    summary.append(el('span', 'mod-punto', String(index + 1).padStart(2, '0')), info, el('span', 'mod-count', '4 clases · 12 h'), el('span', 'mod-badge' + (published ? ' activo' : ''), published ? published + ' guías' : 'Por publicar'), el('span', 'mod-chevron', '▶'));
    const grid = el('div', 'clases');
    module.clases.forEach((lesson, i) => grid.append(card(lesson, String(i + 1).padStart(2, '0'))));
    details.append(summary, grid); list.append(details);
  });
  const workshop = el('section', 'workshop');
  workshop.setAttribute('aria-label', 'Workshop de cierre');
  workshop.append(el('span', 'section-label', 'Experiencia de cierre'), el('h2', '', 'Del aprendizaje al proyecto real'), el('p', '', 'Workshop Premium de 4 horas orientado por un referente de la industria.'), card(window.CURSO.workshop, 'W'));
  list.after(workshop);
})();
