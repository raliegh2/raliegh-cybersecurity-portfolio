const projects = window.PROJECT_DATA || [];
const cards = [...document.querySelectorAll('.project-card')];
const filters = [...document.querySelectorAll('.filter')];
const search = document.querySelector('#projectSearch');
const count = document.querySelector('#resultCount');
const empty = document.querySelector('#emptyState');
let current = 'All';
function applyFilters() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matches = (current === 'All' || card.dataset.category === current)
      && (!query || card.dataset.search.includes(query));
    card.hidden = !matches;
    if (matches) visible++;
  });
  count.textContent = `Showing ${visible} project${visible === 1 ? '' : 's'}`;
  empty.hidden = visible !== 0;
}
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    filter.classList.toggle('active', filter === button);
    filter.setAttribute('aria-pressed', String(filter === button));
  });
  current = button.dataset.filter;
  applyFilters();
}));
search.addEventListener('input', applyFilters);
applyFilters();
const dialog = document.querySelector('#projectDialog');
let opener;
function renderItems(selector, values, tagName) {
  const items = values.map(value => {
    const item = document.createElement(tagName);
    item.textContent = value;
    return item;
  });
  document.querySelector(selector).replaceChildren(...items);
}
function setOptionalLink(selector, href, label) {
  const link = document.querySelector(selector);
  link.hidden = !href;
  if (href) link.href = href;
  else link.removeAttribute('href');
  link.textContent = label;
}
function openProject(id, trigger) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  opener = trigger;
  const image = document.querySelector('#dialogImage');
  image.src = `assets/images/${project.image}`;
  image.alt = project.caption || `Evidence preview for ${project.title}`;
  document.querySelector('#dialogScreenshot').href = image.getAttribute('src');
  document.querySelector('#dialogCaption').textContent = project.caption || '';
  document.querySelector('#dialogCategory').textContent = project.category;
  document.querySelector('#dialogTitle').textContent = project.title;
  document.querySelector('#dialogOverview').textContent = project.overview;
  renderItems('#dialogHighlights', project.highlights, 'li');
  document.querySelector('#dialogResult').textContent = project.result;
  renderItems('#dialogTools', project.tools, 'span');
  const doc = document.querySelector('#dialogDoc');
  doc.href = `assets/docs/${project.doc}`;
  doc.textContent = project.docLabel || 'Open detailed PDF';
  setOptionalLink('#dialogLive', project.live, 'Open live site ↗');
  setOptionalLink('#dialogRepo', project.repo, project.private ? 'Source (private) ↗' : 'Source code ↗');
  document.querySelector('.dialog-content').scrollTop = 0;
  dialog.showModal();
}
document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-open]');
  if (trigger) openProject(trigger.dataset.open, trigger);
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right
      || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
dialog.addEventListener('close', () => opener?.focus());
const theme = document.querySelector('#themeToggle');
let saved;
try { saved = localStorage.getItem('portfolio-theme'); } catch {}
if (saved === 'light') document.body.classList.add('light');
theme.addEventListener('click', () => {
  document.body.classList.toggle('light');
  try { localStorage.setItem('portfolio-theme', document.body.classList.contains('light') ? 'light' : 'dark'); } catch {}
});
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  const element = entry.target;
  const target = Number(element.dataset.count);
  if (reduceMotion) element.textContent = target;
  else {
    let number = 0;
    const step = Math.max(1, Math.ceil(target / 18));
    const timer = setInterval(() => {
      number = Math.min(target, number + step);
      element.textContent = number;
      if (number === target) clearInterval(timer);
    }, 55);
  }
  observer.unobserve(element);
}), { threshold: .6 });
document.querySelectorAll('[data-count]').forEach(element => observer.observe(element));
