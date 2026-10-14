(() => {
  'use strict';
  const data = window.SITE_CONTENT;
  if (!data) return;
  const $ = (id) => document.getElementById(id);
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const safeUrl = (value) => {
    if (typeof value !== 'string' || !value.trim()) return null;
    const clean = value.trim();
    if (/[\u0000-\u001f]/.test(clean)) return null;
    if (/^(https?:|mailto:)/i.test(clean)) return clean;
    if (/^[a-z][a-z0-9+.-]*:/i.test(clean) || clean.startsWith('//') || clean.includes('\\')) return null;
    return clean;
  };
  const makeLink = (label, url) => {
    const href = safeUrl(url);
    if (!href) return null;
    const anchor = make('a', '', label);
    anchor.href = href;
    if (/^https?:/i.test(href)) { anchor.target = '_blank'; anchor.rel = 'noopener noreferrer'; }
    return anchor;
  };
  const icon = (kind) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('class', 'link-icon');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const paths = {
      email: 'M3 5h18v14H3zM3 5l9 7 9-7',
      pause: 'M8 5v14M16 5v14',
      play: 'm8 5 11 7-11 7z',
      github: 'M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22',
      external: 'M14 3h7v7M21 3l-11 11M10 5H3v16h16v-7'
    };
    path.setAttribute('d', paths[kind] || paths.external);
    svg.append(path);
    return svg;
  };

  const name = data.name || 'Your Name';
  ['profile-name', 'footer-name'].forEach(id => $(id).textContent = name);
  $('portrait-monogram').textContent = data.initials || name.charAt(0);
  $('portrait-placeholder').setAttribute('aria-label', `${name} monogram`);
  document.title = `${name} · Academic Homepage`;
  if (data.description) document.querySelector('meta[name="description"]').content = data.description;
  $('profile-role').textContent = data.role || 'Researcher';
  $('profile-affiliation').textContent = data.affiliation || 'Affiliation to be added';
  $('profile-affiliation').classList.toggle('pending', !data.affiliation);
  $('profile-location').textContent = data.location || '';
  $('profile-location').closest('.profile-detail').hidden = !data.location;
  $('profile-tagline').textContent = data.tagline || '';
  $('profile-tagline').closest('.profile-detail').hidden = !data.tagline;
  $('draft-note').hidden = !data.draft;
  $('copyright-year').textContent = new Date().getFullYear();

  const photo = safeUrl(data.photo);
  if (photo) {
    const img = $('portrait');
    const showPhoto = (loaded) => { img.hidden = !loaded; $('portrait-placeholder').hidden = loaded; };
    img.addEventListener('load', () => showPhoto(true));
    img.addEventListener('error', () => showPhoto(false));
    img.alt = `Profile photo of ${name}`;
    img.src = photo;
    if (img.complete) showPhoto(img.naturalWidth > 0);
  } else {
    $('portrait').hidden = true;
    $('portrait-placeholder').hidden = false;
  }
  if (Array.isArray(data.biography) && data.biography.length) {
    $('biography').replaceChildren(...data.biography.map(entry => {
      const paragraph = make('p');
      for (const part of Array.isArray(entry) ? entry : [entry]) {
        if (typeof part === 'string') paragraph.append(document.createTextNode(part));
        else if (part && typeof part.text === 'string') paragraph.append(makeLink(part.text, part.url) || document.createTextNode(part.text));
      }
      return paragraph;
    }));
  }

  const email = typeof data.email === 'string' && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email) ? data.email : '';
  const links = [...(Array.isArray(data.links) ? data.links : [])];
  if (email) links.unshift({label: 'Email', url: `mailto:${email}`, kind: 'email'});
  $('profile-links').replaceChildren();
  for (const item of links) {
    const a = makeLink(item.label, item.url);
    if (!a) continue;
    a.replaceChildren(icon(item.kind), make('span', '', item.label));
    if (item.kind === 'email') a.setAttribute('aria-label', `Email ${name} at ${email}`);
    const li = make('li'); li.append(a); $('profile-links').append(li);
  }
  $('profile-links-empty').hidden = $('profile-links').childElementCount > 0;
  $('contact-description').textContent = data.contactText || (email ? 'For research inquiries, please get in touch by email.' : 'Email and academic profiles will be added here.');
  if (email) { $('contact-email').hidden = false; $('contact-email').href = `mailto:${email}`; $('contact-email').textContent = email; }

  if (Array.isArray(data.research)) {
    $('research-list').replaceChildren();
    for (const entry of data.research) {
      const article = make('article', 'research-item');
      const source = safeUrl(entry.image);
      if (source) {
        const img = make('img'); img.src = source; img.alt = entry.imageAlt || ''; img.width = 248; img.height = 156; img.loading = 'lazy';
        article.append(img);
      }
      const body = make('div');
      body.append(make('h3', '', entry.title), make('p', '', entry.description));
      if (!source) body.style.gridColumn = '1 / -1';
      article.append(body); $('research-list').append(article);
    }
  }

  const news = Array.isArray(data.news) ? data.news : [];
  const showSection = (id, visible) => {
    $(id).hidden = !visible;
    const navLink = document.querySelector(`.primary-nav a[href="#${id}"]`);
    if (navLink) navLink.hidden = !visible;
  };
  showSection('news', !data.hideEmptySections || news.length > 0);
  $('news-empty').hidden = news.length > 0;
  for (const item of news) {
    const li = make('li'); const body = make('p'); const a = makeLink(item.text, item.url);
    body.append(a || document.createTextNode(item.text || ''));
    li.append(make('span', 'news-date', item.date), body); $('news-list').append(li);
  }
  const publications = Array.isArray(data.publications) ? data.publications : [];
  $('publications-empty').hidden = publications.length > 0;
  const dialog = $('bibtex-dialog');
  const openCitation = (citation) => {
    $('bibtex-content').textContent = citation;
    $('copy-status').textContent = '';
    dialog.showModal();
  };
  const renderPublications = (topic = null) => {
    const list = topic === null ? publications : publications.filter(p => (p.topic || 'Other') === topic);
    $('publication-list').replaceChildren();
    $('publication-status').textContent = `${list.length} publication${list.length === 1 ? '' : 's'} shown.`;
    for (const paper of list) {
      const article = make('article', 'publication');
      const preview = safeUrl(paper.preview);
      if (preview) {
        article.classList.add('with-preview');
        const media = make('div', 'publication-media');
        const gallery = make('div', 'publication-gallery');
        for (const figure of Array.isArray(paper.figures) ? paper.figures : []) {
          const source = safeUrl(figure.image);
          if (!source) continue;
          const tile = makeLink('', source);
          tile.className = 'publication-thumbnail';
          tile.target = '_blank'; tile.rel = 'noopener noreferrer';
          tile.setAttribute('aria-label', `Open full-size figure: ${figure.caption || paper.title}`);
          const figureImage = make('img');
          figureImage.src = source; figureImage.alt = figure.imageAlt || figure.caption || '';
          figureImage.width = figure.width || 640; figureImage.height = figure.height || 360;
          figureImage.loading = 'lazy'; figureImage.decoding = 'async';
          tile.append(figureImage);
          gallery.append(tile);
        }
        const mainTile = make('div', 'publication-thumbnail preview-media');
        const poster = safeUrl(paper.previewPoster);
        let playing = !poster || !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const img = make('img');
        img.src = playing ? preview : poster;
        img.alt = paper.previewAlt || `${paper.title} experimental demonstration`;
        img.width = 640; img.height = 360; img.loading = 'lazy'; img.decoding = 'async';
        const projectLink = makeLink('', paper.project);
        if (projectLink) { projectLink.setAttribute('aria-label', `View project page: ${paper.title}`); projectLink.append(img); mainTile.append(projectLink); }
        else mainTile.append(img);
        if (poster) {
          const toggle = make('button', 'preview-toggle');
          toggle.append(icon(playing ? 'pause' : 'play'));
          toggle.type = 'button';
          toggle.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} experimental preview for ${paper.title}`);
          toggle.addEventListener('click', () => {
            playing = !playing;
            img.src = playing ? preview : poster;
            toggle.replaceChildren(icon(playing ? 'pause' : 'play'));
            toggle.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} experimental preview for ${paper.title}`);
          });
          mainTile.append(toggle);
        }
        gallery.append(mainTile);
        media.append(gallery);
        article.append(media);
      }
      const body = make('div', 'publication-body');
      const title = make('h3');
      title.append(makeLink(paper.title, paper.project) || document.createTextNode(paper.title));
      body.append(title);
      const authors = make('p', 'publication-authors');
      if (Array.isArray(paper.authors)) {
        paper.authors.forEach((author, i) => {
          if (i) authors.append(document.createTextNode(', '));
          authors.append(author === (paper.highlightAuthor || name) ? make('strong', '', author) : document.createTextNode(author));
        });
      } else authors.textContent = paper.authors || '';
      body.append(authors, make('p', 'publication-venue', [paper.venue, paper.year].filter(Boolean).join(' · ')));
      if (paper.description) body.append(make('p', 'publication-description', paper.description));
      const paperLinks = make('div', 'publication-links');
      for (const link of paper.links || []) { const a = makeLink(link.label, link.url); if (a) paperLinks.append(a); }
      if (paper.bibtex) { const b = make('button', '', 'BibTeX'); b.type = 'button'; b.setAttribute('aria-label', `View BibTeX for ${paper.title}`); b.addEventListener('click', () => openCitation(paper.bibtex)); paperLinks.append(b); }
      body.append(paperLinks); article.append(body); $('publication-list').append(article);
    }
  };
  const topics = [...new Set(publications.map(p => p.topic || 'Other'))];
  if (topics.length > 1) {
    $('publication-filters').hidden = false;
    for (const topic of [null, ...topics]) {
      const b = make('button', '', topic === null ? 'All' : topic); b.type = 'button'; b.setAttribute('aria-pressed', String(topic === null));
      b.addEventListener('click', () => {
        [...$('publication-filters').children].forEach(node => node.setAttribute('aria-pressed', String(node === b)));
        renderPublications(topic);
      });
      $('publication-filters').append(b);
    }
  }
  renderPublications();
  const services = Array.isArray(data.services) ? data.services : [];
  showSection('services', !data.hideEmptySections || services.length > 0);
  $('services-empty').hidden = services.length > 0;
  for (const entry of services) { const li = make('li'); li.append(make('strong', '', `${entry.role}: `), document.createTextNode(entry.detail || '')); $('service-list').append(li); }

  $('close-bibtex').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  });
  $('copy-bibtex').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText($('bibtex-content').textContent); $('copy-status').textContent = 'Citation copied.'; }
    catch {
      const range = document.createRange(); range.selectNodeContents($('bibtex-content'));
      const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
      $('copy-status').textContent = 'Citation selected. Press Ctrl+C (Windows/Linux) or ⌘C (Mac) to copy.';
    }
  });

  document.documentElement.classList.add('js-ready');
  const menu = document.querySelector('.menu-toggle'); menu.hidden = false;
  const nav = $('primary-nav');
  const closeMenu = () => { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); menu.setAttribute('aria-expanded', String(open)); });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menu.focus(); } });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        document.querySelectorAll('.primary-nav a').forEach(a => {
          const active = a.getAttribute('href') === `#${entry.target.id}`;
          a.classList.toggle('active', active);
          if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]:not([hidden])').forEach(section => observer.observe(section));
  }
})();
